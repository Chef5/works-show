<script setup lang="ts">
import { computed, ref } from 'vue';
import 'swiper/less';
import 'swiper/less/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';

import ImageView from '@/components/ImageView.vue';
import ImageSwiperFull from '@/components/ImageSwiperFull.vue';

interface ImageSwiper {
  list: {
    url: string;
    name?: string;
  }[]
}

const props = defineProps({
  list: {
    type: Array as () => ImageSwiper['list'],
    default: () => [],
    required: true,
  },
  width: {
    type: String,
    default: '450px',
  },
  height: {
    type: String,
    default: '600px',
  },
})

const containerStyle = computed(() => ({
  width: props.width,
  height: props.height,
}));

const full = ref(false);
const fullInitIndex = ref(0);

const modules = [Pagination, Mousewheel];
const onSwiperClick = (swiper: any) => {
  fullInitIndex.value = swiper.activeIndex;
  full.value = true;
}

const handleFullClose = () => {
  full.value = false;
}

</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :style="containerStyle"
    :pagination="{ clickable: true }"
    mousewheel
    :direction="'vertical'"
    @click="onSwiperClick"
  >
    <swiper-slide
      :style="containerStyle"
      v-for="picture of list"
      :key="picture.url"
    >
      <image-view :url="picture.url" :name="picture.name" />
    </swiper-slide>
  </swiper>
  <image-swiper-full
    v-if="full"
    :list="list"
    :index="fullInitIndex"
    @close="handleFullClose"
  />
</template>
