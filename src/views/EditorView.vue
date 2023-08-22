<script setup lang="ts">
import { worksList, WorkItemModel } from '@/config/works';
import type { WorkItem } from '@/config/works';
import { ref, Teleport } from 'vue';

import WorkDetail from './WorkDetail.vue';

// TODO: 编辑器优化方向
// 1. 添加复制全部项目，转换为js
// 2. 单个项目编辑后，临时存储，切换回不变
// 3. 增加预览功能 done
// 4. 可视化编辑

// https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea

const formateJSON = <T extends WorkItem>(value: T): string => JSON.stringify(value, null, 2);
const checkJSON = (str: string) => {
  try {
    JSON.parse(str);
    return '';
  } catch (e) {
    return (e as SyntaxError).message;
  }
}

const detailIndex = ref(0);
const detail = ref(formateJSON(worksList[detailIndex.value]));
const handleMenuClick = (item: WorkItem, index: number) => {
  detail.value = formateJSON(item);
  detailIndex.value = index;
}

const errorMsg = ref('');
const handleInput = () => {
  errorMsg.value = checkJSON(detail.value);
}

const handleCopy = () => {
  if (errorMsg.value) {
    return;
  }
  const item = JSON.parse(detail.value);
  console.log(item);
  navigator.clipboard.writeText(JSON.stringify(detail.value));

}

const showPreview = ref(false);
const item = ref(worksList[detailIndex.value]);
const handlePreview = () => {
  if (errorMsg.value) {
    return;
  }
  item.value = JSON.parse(detail.value);
  showPreview.value = true;
}
const hidePreview = () => {
  showPreview.value = false;
}

const handleNew = () => {
  const length = worksList.length;
  const workItem = new WorkItemModel(String(length + 1));
  worksList.unshift(workItem);
  detail.value = formateJSON(workItem);
  detailIndex.value = 0;
}

</script>

<template>
  <div class="container">
    <ol class="menu" reversed>
      <li
        v-for="(item, index) of worksList"
        :key="item.name"
        class="menu-item"
        :style="{ color: detailIndex === index ? '#f37e7e': '' }"
        @click="handleMenuClick(item, index)"
      >
        {{ item.name }}
      </li>
    </ol>
    <div class="editor">
      <textarea
        class="textarea"
        v-model="detail"
        @input="handleInput"
      ></textarea>
      <div class="footer">
        <span class="error">{{ errorMsg }}</span>
        <div class="btns">
          <div class="btn new" @click="handleNew">新建</div>
          <div class="btn preview" :class="{ disable: errorMsg }" @click="handlePreview">预览</div>
          <!-- <div class="btn copy-all" :class="{ disable: errorMsg }" >全部复制</div> -->
          <div class="btn copy" :class="{ disable: errorMsg }" @click="handleCopy">复制</div>
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
