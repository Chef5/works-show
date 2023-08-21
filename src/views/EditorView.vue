<script setup lang="ts">
import { worksList } from '@/config/works';
import type { WorkItem } from '@/config/works';
import { ref } from 'vue';

// TODO: 编辑器优化方向
// 1. 添加复制全部项目，转换为js
// 2. 单个项目编辑后，临时存储，切换回不变
// 3. 增加预览功能
// 4. 可视化编辑

// https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea

const formateJSON = <T extends Record<string, unknown>>(value: T): string => JSON.stringify(value, null, 2);

const detail = ref(worksList[0]);
const handleMenuClick = (item: WorkItem) => {
  detail.value = item;
}

</script>

<template>
  <div class="container">
    <ol class="menu">
      <li
        v-for="item of worksList"
        :key="item.name"
        class="menu-item"
        @click="handleMenuClick(item)"
      >
        {{ item.name }}
      </li>
    </ol>
    <div class="editor">
      <textarea
        class="textarea"
        :value="formateJSON(detail)"
      ></textarea>
    </div>
  </div>
  
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
      height: 100%;
    }
  }
  
  
}

@media (max-width: 800px), (max-height: 600px) {
  .container {
    
  }
}
</style>
