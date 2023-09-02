<script setup lang="ts">
import { worksList } from '@/config/works';
import type { WorkItem } from '@/config/works';
import { useRouter, useRoute } from 'vue-router';

import iconClose from '@/components/icons/iconClose.vue';

import DetailDisplay from '@/components/DetailDisplay.vue';
import TagsGroup from '@/components/TagsGroup.vue';
import ImageSwiper from '@/components/ImageSwiper.vue';
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  item: {
    type: Object as PropType<WorkItem>,
    default: null,
  },
})

const emits = defineEmits([ 'close' ]);

const route = useRoute();
const { id } = route.query;
const detail = props.item ?? worksList[Number(id)];

const router = useRouter();
const handleBack = () => {
  if (props.item) {
    emits('close');
    return;
  }
  router.back();
};

const screenWidth = ref(document.body.clientWidth);
window.onresize = () => {
  screenWidth.value = document.body.clientWidth;
}
const swiperRect = computed(() => 
  screenWidth.value > 800
  ? { width: '100%', height: '600px' }
  : { width: '100%', height: '350px' }
);

const isImage = (url: string) => /\.(png|jpg|jpeg|gif|svg)$/.test(url);
const isUrl = (url: string) => /^(http:\/\/|https:\/\/)/.test(url);

</script>


<template>
  <div class="detail-mask">
    <div class="content">
      <div class="close" @click="handleBack"><icon-close /></div>
      <div class="left">
        <image-swiper :list="detail.pictures" :width="swiperRect.width" :height="swiperRect.height"></image-swiper>
      </div>
      <div class="right">
        <div class="header">
          <h3 class="title">
            <span>{{ detail.name }}</span>
            <tags-group :tags="[detail.type]" background-color="#545454" />
          </h3>
          <span class="time">{{ detail.time }}</span>
          <span class="owner">{{ detail.owner }}</span>
        </div>
        <div class="body">
          <detail-display label="项目概述">
            <p class="summary">{{ detail.summary }}</p>
          </detail-display>
          
          <detail-display label="行业标签">
            <div class="tags">
              <tags-group :tags="detail.tags" type="#" color="#f37e7e" background-color="" font-size="14px" />
            </div>
          </detail-display>

          <detail-display label="运行平台">
            <div class="platforms">
              <tags-group :tags="detail.platforms" background-color="#333" />
            </div>
          </detail-display>
          
          <detail-display label="技术栈">
            <div class="stacks">
              <tags-group :tags="detail.technologies" />
            </div>
          </detail-display>
          
          <detail-display label="项目业绩">
            <p class="honor">{{ detail.honor }}</p>
          </detail-display>

          <p class="description" v-for="d of detail.descriptions" :key="d">{{ d }}</p>

          <detail-display label="项目构成">
            <template #outer>
              <div class="projects">
                <div 
                  class="project"
                  v-for="project of detail.projects"
                  :key="project.name"
                >
                  <h4 class="project-name">{{ project.name }}</h4>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-stacks">
                    <tags-group :tags="project.technologies" />
                  </div>
                </div>
              </div>
            </template>
          </detail-display>

          <detail-display label="线上地址">
            <div class="url">
              <image v-if="isImage(detail.url)" :src="detail.url" mode="widthFix"></image>
              <a v-else-if="isUrl(detail.url)" :href="detail.url" target="_blank">{{ detail.url }}</a>
              <span v-else-if="detail.url">{{ detail.url }}</span>
              <span v-else>无线上地址，或只能内网访问</span>
            </div>
          </detail-display>
        </div>


      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.detail-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0,0%,97.6%,.90);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all .4s;
  .content {
    position: relative;
    width: 850px;
    height: 600px;
    border-radius: 30px;
    background: #fff;
    border: 0.5px solid rgba(0,0,0,.08);
    box-shadow: 5px 5px 30px #d9d9d9,
              -15px -15px 30px #ffffff;
    transition: transform .4s,width .4s;

    display: flex;
    justify-content: center;
    .left {
      width: 450px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      overflow: hidden;
    }
    .right {
      flex: 1;
      padding: 12px;
      font-family: 'Lucida Sans' sans-serif;
      height: 100%;
      display: flex;
      flex-direction: column;
      .header {
        min-height: 60px;
        border-bottom: 1px solid #eee;
      }
      .body {
        // height: calc(100% - 60px);
        width: 100%;
        height: 0;
        flex: 1;
        overflow-y: auto;
      }
      .title {
        display: flex;
        align-items: center;
        &>span {
          padding-right: 10px;
          font-family: 'Lucida Sans' sans-serif;
          font-size: 16px;
          font-weight: 600;
        }
      }
      .time {
        padding-right: 10px;
        color: #999;
      }
      .owner {
        padding-right: 10px;
        color: #999;
      }
      .platforms {
        display: flex;
        align-items: center;
      }
      .projects {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        .project {
          padding: 10px;
          border: 1px dashed #e9e9e9;
          border-radius: 4px;
          background: #fbfbfb;
          .project-name {
            font-size: 14px;
            color: #333;
          }
          .project-stacks {
            padding-top: 2px;
          }
          .project-description {
            padding-top: 4px;
            line-height: 16px;
            font-size: 12px;
            color: #666;
            word-break: break-all;
          }
        }
      }
      .tags {
        display: flex;
        align-items: center;
      }
      .stacks {
        // display: flex;
        // align-items: center;
      }
      .summary {
        line-height: 20px;
        font-family: 'Lucida Sans' sans-serif;
        color: #666;
        font-size: 14px;
      }
      .description {
        padding-bottom: 8px;
        font-family: 'Lucida Sans' sans-serif;
        color: #666;
        line-height: 20px;
        font-size: 14px;
        word-break: break-all;
      }
      .honor {
        font-family: 'Lucida Sans' sans-serif;
        color: #333;
        font-size: 14px;
      }
      .url {
        image {
          width: 200px;
        }
        a {
          font-size: 14px;
          color: #f37e7e;
        }
        span {
          font-size: 14px;
          color: #666;
        }
      }
    }



    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -35px;
      right: -45px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      box-shadow:  4px 4px 9px #d2d2d2,
                  -4px -4px 9px #ffffff;
      cursor: pointer;
      z-index: 100;
      transition: all .3s;
    }
  }
}


@media (max-width: 800px), (max-height: 600px) {
  .detail-mask {
    .content {
      position: relative;
      padding: 20px 10px;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      border-radius: 10px;
      box-shadow: 5px 5px 20px #d9d9d9,
                -8px -8px 20px #ffffff;

      display: block;

      .left {
        width: 100%;
        border-radius: 10px;
      }
      .right {
        padding: 12px 0;
        display: block;
        .body {
          height: auto;
        }
      }
      .close {
        position: fixed;
        top: 10px;
        right: 10px;
        box-shadow:  2px 2px 5px #d2d2d2,
                    -2px -2px 5px #ffffff;
      }
    }
  }
}
</style>