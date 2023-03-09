<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';


interface ImageView {
  background: string|'blur';
}

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  background: {
    type: String as PropType<ImageView['background']>,
    default: 'blur',
  }
})

const wrapStyle = computed(() => props.background === 'blur'
  ? { '--background-image': `url('${props.url}')`}
  : { background: props.background }
);


</script>

<template>
  <div class="wrapper" :style="wrapStyle">
    <img class="picture" :src="url" :alt="name">
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .picture {
    position: absolute;
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(30px);
    background: var(--background-image);
    background-position: center center;
    background-size: cover;
  }
}
</style>
