<script setup lang="ts">
import worksList from '@/config/works';
import { Teleport } from 'vue';
import { useRouter } from 'vue-router';

import iconGithub from '@/assets/github.svg';

import TagsGroup from '@/components/TagsGroup.vue';
import ImageView from '@/components/ImageView.vue';

interface menuType {
  type: string;
  label: string;
  icon: string;
  link: string;
}

const router = useRouter();
const handleDetail = (index: number) => {
  router.push({
    name: 'detail',
    query: {
      id: index,
    }
  })
}

const menuList: menuType[] = [
  { type: 'a', label: 'Github', icon: iconGithub, link: 'https://github.com/Chef5' },
  { type: 'a', label: 'Blog', icon: '', link: 'https://www.jschef.com' },
];
const handleMenuClick = (menu: menuType) => {
  const { type, link } = menu;
  switch (type) {
    case 'a': {
      window.open(link);
      break;
    }
    default: break;
  }
}

</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="menu-item"
        v-for="t of menuList"
        :key="t.label"
        @click="handleMenuClick(t)"
      >
        <img class="menu-item-icon" v-if="t.icon" :src="t.icon" />
        <div class="menu-item-icon" v-else>{{ t.label.slice(0,1).toUpperCase() }}</div>
        <label class="menu-item-label">{{ t.label }}</label>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(detail, index) of worksList"
        :key="detail.name"
        class="list-item"
        @click="handleDetail(index)"
      >
        <div class="img">
          <image-view :url="detail.pictures[0].url" :name="detail.pictures[0].name" />
        </div>
        <div class="content">
          <div class="top">
            <h3 class="title">
              <span>{{ detail.name }}</span>
              <tags-group :tags="[detail.type]" background-color="#545454" />
            </h3>
            <div class="stacks">
              <tags-group :tags="detail.technologies" />
            </div>
          </div>
          <div class="tags">
            <span class="time">{{ detail.time }}</span>
            <tags-group :tags="detail.tags" type="#" color="#f37e7e" background-color="" font-size="14px" />
          </div>
          <p class="summary">{{ detail.summary }}</p>
        </div>
      </div>
    </div>
  </div>

<Teleport to="body">
  <router-view></router-view>
</Teleport>
</template>

<style lang="less" scoped>
.container {
  position: relative;
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
    position: fixed;
    top: 30px;
    right: 20px;
    &-item {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      cursor: pointer;
      &-icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        border-radius: 10px;
        background: rgb(84, 84, 84);
        box-shadow:  6px 6px 12px #bebebe,
                    -6px -6px 12px #ffffff;
      }
      &-label {
        text-align: center;
        font-size: 12px;
        color: #666;
        cursor: pointer;
      }
      &:hover {
        .menu-item-icon {
          background: rgb(243, 126, 126);
        }
        .menu-item-label {
          color: rgb(243, 126, 126);
        }
      }
    }
  }
  .list {
    padding: 30px 0 100px;
    width: 680px;
    height: max-content;
    .list-item {
      margin-bottom: 30px;
      width: 100%;
      height: 400px;
      border-radius: 30px;
      overflow: hidden;
      background: white;
      box-shadow: 15px 15px 30px #bebebe,
                -15px -15px 30px #ffffff;
      transition: 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
      }

      display: flex;
      flex-direction: column;
      .img {
        width: 100%;
        flex: 1;
      }

      .content {
        padding: 20px;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: space-around;
        .top {
          display: flex;
          align-items: center;
          .title {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            &>span {
              padding-right: 10px;
              font-family: 'Lucida Sans' sans-serif;
              font-size: 16px;
              font-weight: 600;
            }
          }
          .stacks {
            margin-left: auto;
            text-align: right;
          }
        }
        .tags {
          padding-top: 4px;
          display: flex;
          align-items: center;
          .time {
            padding-right: 10px;
            color: #999;
          }
        }
        .summary {
          font-family: 'Lucida Sans' sans-serif;
          color: #666;
          font-size: 13px;
          word-break: break-all;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }

    }
  }
  
}

@media (max-width: 800px), (max-height: 600px) {
  .container {
    .menu {
      display: none;
    }
    .list {
      padding: 20px 10px 100px;
      width: 100%;
      .list-item {
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 8px 8px 20px #bebebe,
                  -8px -8px 20px #ffffff;
        .content {
          .top {
            flex-direction: column;
            align-items: flex-start;
            .stacks {
              margin-left: 0;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
