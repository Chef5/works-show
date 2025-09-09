<script setup lang="ts">
import logo from '@/assets/chef-logo.png'
defineProps<{
  logo: any
  links: []
  linksLength: number
}>()

const links = [
  // { type: 'router', label: '🍪 My Works', link: '/works' },
  { type: 'a', label: '👨‍🍳 My Blog', link: 'https://www.jschef.com' }
]

const linksLength = links.length

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="container">
    <div class="avatar">
      <img :src="logo" alt="avatar" />
    </div>
    <div class="myself">
      Hi, I'm <span>Chef Wu</span> 👨‍🌾 ,<br />
      a front-end development engineer.<br /><br />
      I develop programs like a chef who treats delicacies, intently and creatively!
    </div>

    <nav class="nav" :style="{ gridTemplateColumns: `repeat(${linksLength}, 1fr)` }">
      <template v-for="item of links" :key="item.link">
        <RouterLink v-if="item.type === 'router'" class="link" :to="item.link">
          {{ item.label }} &gt;
        </RouterLink>
        <a v-if="item.type === 'a'" class="link" :href="item.link" target="_blank">
          {{ item.label }} &gt;
        </a>
      </template>
    </nav>

    <div class="footer">
      © Copyright 2015-{{ currentYear }} Chef Wu. All Rights Reserved.
      <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备15006319号</a>
      <a
        href="https://beian.mps.gov.cn/#/query/webSearch?code=51162302000260"
        rel="noreferrer"
        target="_blank"
        style="padding-left: 5px"
      >
        <img src="http://img.cdn.1zdz.cn/static/beian-icon.png" alt="网安" style="height: 12px" />
        川公网安备51162302000260号
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7azYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7YjYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7aDYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
    U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7ZjYYiAzcPA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7azYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7YjYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7aDYYiAzcPDKo.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
    U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7ZjYYiAzcPA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avatar {
    text-align: center;
    img {
      width: 200px;
      height: 200px;
    }
  }

  .myself {
    text-align: center;
    font-family: Caveat, cursive;
    font-size: 20px;
    color: #555;
    span {
      font-weight: bold;
      color: #333;
    }
  }

  .nav {
    padding-top: 30px;
    padding-bottom: 5px;
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    .link {
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 12px;
      color: #999;
      border-bottom: 1px solid #999;
      cursor: pointer;
      &:active,
      &:hover,
      &:focus,
      &:focus-visible {
        outline: none;
      }
      &:hover {
        color: hsla(160, 100%, 37%, 1);
        border-bottom: 1px solid hsla(160, 100%, 37%, 1);
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 10px;
    text-align: center;
    font-size: 12px;
    color: #b4b2b2;
    a {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color: #999;
      cursor: pointer;
    }
  }
}
</style>
