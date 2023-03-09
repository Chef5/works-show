<script setup lang="ts">
import type { PropType } from 'vue';


interface TagsGroup {
  tags: string[];
  type: '#'|'block';
}

const props = defineProps({
  tags: {
    type: Array as () => TagsGroup['tags'],
    required: true,
  },
  type: {
    type: String as PropType<TagsGroup['type']>,
    default: 'block', // # block
  }, 
  color: {
    type: String,
    default: '#fff', // 颜色
  }, 
  backgroundColor: {
    type: String,
    default: '#f37e7e', // 背景颜色
  },
  fontSize: {
    type: String,
    default: '12px',
  }
})


</script>

<template>
  <span
    class="tag"
    v-for="t of tags"
    :key="t"
    :style="{
      color,
      backgroundColor,
      fontSize,
      padding: type === '#' ? '0' : '0 8px'
    }"
  >{{ type === '#' ? '#' : '' }}{{ t }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  margin-right: 10px;
  /* line-height: 20px; */
  border-radius: 4px;
  white-space: nowrap;
}
</style>
