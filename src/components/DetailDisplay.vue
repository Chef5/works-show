<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
})


</script>

<template>
  <div class="item">
    <div class="label">{{ label }}：</div>
    <div class="value">
      <slot></slot>
    </div>
  </div>
  <slot name="outer"></slot>
</template>

<style lang="less" scoped>
.item {
  display: flex;
  padding: 4px 0;
  line-height: 20px;
  .label {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    white-space: nowrap;
  }
  .value {
    
  }
}
</style>
