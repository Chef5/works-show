<script setup lang="ts">
import { defineEmits, Teleport } from 'vue';
import 'swiper/less';
import 'swiper/less/pagination';
import 'swiper/less/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, Navigation } from 'swiper';

import ImageView from '@/components/ImageView.vue';
import iconClose from './icons/iconClose.vue';

interface ImageSwiperFull {
  list: {
    url: string;
    name?: string;
  }[]
}

const props = defineProps({
  list: {
    type: Array as () => ImageSwiperFull['list'],
    default: () => [],
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  }
})

const emit = defineEmits([
  'close',
]);

const containerStyle = {
  width: '100%',
  height: '100%',
};

const modules = [Pagination, Mousewheel, Navigation];

const handleClose = () => {
  emit('close');
};


</script>

<template>
  <Teleport to="body">
    <icon-close class="swiper-full-close" @click="handleClose" />
    <swiper
      class="swiper-full"
      :modules="modules"
      :slides-per-view="1"
      :style="containerStyle"
      :pagination="{ clickable: true }"
      :initialSlide="index"
      mousewheel
      navigation
      loop
    >
      <swiper-slide
        :style="containerStyle"
        v-for="picture of list"
        :key="picture.url"
      >
        <image-view :url="picture.url" :name="picture.name" background="black" />
      </swiper-slide>
    </swiper>
  </Teleport>
</template>

<style lang="less">
.swiper-full {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.swiper-full-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 1010;
  background-color: #fff;
}

@media (max-width: 800px) or (max-height: 600px) {
  .swiper-full-close {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
  }
}
</style>
