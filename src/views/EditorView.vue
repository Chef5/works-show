<script setup lang="ts">
import { worksList, WorkItemModel } from '@/config/works';
import type { WorkItem } from '@/config/works';
import { computed, ref, Teleport } from 'vue';

import WorkDetail from './WorkDetail.vue';
import ToastMessage from '@/components/ToastMessage';

// TODO: 编辑器优化方向
// 1. 添加复制全部项目 done
// 2. 单个项目编辑后，临时存储，切换回不变 done
// 3. 增加预览功能 done
// 4. 可视化编辑

// https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea

interface WorkItemRef {
  data: WorkItem;
  modified: boolean;
  errorMsg: string;
}

const formateJSON = <T extends WorkItem>(value: T): string => JSON.stringify(value, null, 2);
const checkJSON = (str: string) => {
  try {
    JSON.parse(str);
    return '';
  } catch (e) {
    return (e as SyntaxError).message;
  }
}
const hasErrorMsg = (data: WorkItemRef) => data.errorMsg !== '';
const getModifiedWrapData = (data: WorkItem, modified = false): WorkItemRef => ({ data, modified, errorMsg: '' });
const getRawData = (data: WorkItemRef) => data.data;
const getMenuStyle = (index: number, detailIndex: number, worksListRef: WorkItemRef[]) => {
  const item = worksListRef[index];
  // 1. 有错误
  if (item.errorMsg) {
    return { color: '#fc9412' };
  }
  // 2. 已修改
  // if (item.modified) {
  //   return { color: '#fc9412' };
  // }
  if (index === detailIndex) {
    return { color: '#f37e7e' };
  }
  return { color: '' };
};

const worksListWrap: WorkItemRef[] = worksList.map(t => getModifiedWrapData(t));

// 列表数据
const worksListRef = ref(worksListWrap);

// 列表是否存在错误
const existErrorInList = computed(() => worksListRef.value.some(t => hasErrorMsg(t)));

// 当前编辑数据
const detailIndex = ref(0);
const detail = ref(formateJSON(worksListRef.value[detailIndex.value].data));
const handleMenuClick = (item: WorkItemRef, index: number) => {
  if (hasErrorMsg(worksListRef.value[detailIndex.value])) { // 当前存在错误，不允许切换
    ToastMessage({ message: '当前项目JSON存在错误！' })
    return;
  }
  detail.value = formateJSON(item.data);
  detailIndex.value = index;
}

// 语法错误提示
const handleInput = () => {
  worksListRef.value[detailIndex.value].errorMsg = checkJSON(detail.value);
}

// 修改监听
const handleChange = () => {
  if (hasErrorMsg(worksListRef.value[detailIndex.value])) {
    worksListRef.value[detailIndex.value].modified = true;
    return;
  }
  if ( detail.value === formateJSON(worksList[detailIndex.value]) ) {
    worksListRef.value[detailIndex.value].modified = false;
    return;
  }
  worksListRef.value[detailIndex.value] = getModifiedWrapData(JSON.parse(detail.value), true);
}

// 复制
const handleCopy = () => {
  if (existErrorInList.value) {
    return;
  }
  const rawDataList: WorkItem[] = worksListRef.value.map(t => getRawData(t));
  console.log(rawDataList);
  try {
    navigator.clipboard.writeText(JSON.stringify(rawDataList));
    ToastMessage({ message: '复制成功！请粘贴到 /src/config/works.json' })
  } catch (error) {
    ToastMessage({ message: '复制失败' })
  }

}

// 预览
const showPreview = ref(false);
const item = ref(worksList[detailIndex.value]);
const handlePreview = () => {
  if (hasErrorMsg(worksListRef.value[detailIndex.value])) {
    return;
  }
  item.value = JSON.parse(detail.value);
  showPreview.value = true;
}
const hidePreview = () => {
  showPreview.value = false;
}

// 新建
const handleNew = () => {
  const length = worksListRef.value.length;
  const workItem = new WorkItemModel(String(length + 1));
  worksListRef.value.unshift(getModifiedWrapData(workItem, true));
  detail.value = formateJSON(workItem);
  detailIndex.value = 0;
}

</script>

<template>
  <div class="container">
    <ol class="menu" reversed>
      <li
        v-for="(item, index) of worksListRef"
        :key="item.data.name"
        class="menu-item"
        :style="getMenuStyle(index, detailIndex, worksListRef)"
        @click="handleMenuClick(item, index)"
      >
        <span class="modified">{{ item.modified ? '*' : '&nbsp;' }}</span>{{ item.data.name }}
      </li>
    </ol>
    <div class="editor">
      <textarea
        class="textarea"
        v-model="detail"
        @input="handleInput"
        @change="handleChange"
      ></textarea>
      <div class="footer">
        <span class="error">{{ worksListRef[detailIndex].errorMsg }}</span>
        <div class="btns">
          <div class="btn new" @click="handleNew">新建</div>
          <div class="btn preview" :class="{ disable: hasErrorMsg(worksListRef[detailIndex]) }" @click="handlePreview">预览</div>
          <!-- <div class="btn copy-all" :class="{ disable: errorMsg }" >全部复制</div> -->
          <div class="btn copy" :class="{ disable: existErrorInList }" @click="handleCopy">复制</div>
        </div>
      </div>
    </div>
    <p class="tips">:(<br />当前页面只能在PC端查看</p>
  </div>
  
  <Teleport to="body" v-if="showPreview">
    <work-detail :item="item" @close="hidePreview"></work-detail>
  </Teleport>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  padding: 30px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #f0f0f0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    width: 4px;
  }
  .modified {
    color: #fc9412;
    font-weight: bold;
  }

  .menu {
    width: 300px;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 20px;
    &-item {
      width: 100%;
    }
  }

  .editor {
    flex: 1;
    width: 0;
    .textarea {
      width: 100%;
      height: calc(100% - 50px);
    }
    .footer {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .error {
        flex: 1;
        width: 0;
        font-size: 14px;
        color: #f00;
      }
      .btns {
        display: flex;
        align-items: center;
        .btn {
          padding: 0 30px;
          margin-left: 10px;
          height: 50px;
          line-height: 50px;
          border-radius: 10px;
          background: rgb(84, 84, 84);
          box-shadow:  6px 6px 12px #bebebe,
                      -6px -6px 12px #ffffff;
          font-size: 18px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          user-select: none;
          &:hover {
            transform: translate(-1px, -2px);
            transition: linear 200ms;
          }
          &.disable {
            background: #ddd;
            cursor: not-allowed;
          }
        }
        .new {
          background: #6ebb72;
        }
        .copy, .preview {
          &:hover {
            background: #f37e7e;
          }
          &.disable {
            &:hover {
              background: #ddd;
            }
          }
        }
      }
    }
  }
  
  .tips {
    display: none;
  }
  
}

@media (max-width: 800px), (max-height: 600px) {
  .container {
    align-items: center;
    .menu {
      display: none;
    }
    .editor {
      display: none;
    }
    .tips {
      display: inline-block;
      font-size: 20px;
      color: #333;
    }
  }
}
</style>
