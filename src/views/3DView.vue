<script setup lang="ts">
import { computed, markRaw, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import http from '@/http/axios'

import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  DataZoomComponentOption
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import { useRoute } from 'vue-router'

// 注册必须的组件
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | DataZoomComponentOption
>

const historyData = ref<any[]>([])
const baseOptions: ECOption = {
  grid: {
    top: '5%',
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    // formatter: '{b}: <br />{c}'
    valueFormatter: (value: any) => `${value.split('').join(' ')}`
  },
  dataZoom: [
    {
      type: 'inside', // 内置滚动
      xAxisIndex: 0,
      start: 0, // 起始比例
      end: 0.3, // 结束比例，根据数据量和显示数量计算
      minValueSpan: 30, // 保证至少显示30条数据
      maxValueSpan: 30 // 最大也只显示30条数据
    }
  ],
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value',
      alignTicks: true,
      axisLine: {
        show: true
      }
    }
  ],
  series: [
    {
      data: [],
      type: 'line'
    }
  ]
}

const getXAxis = (data: any[]): any => [
  {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    data
  }
]
const getSeries = (data: any[]): any => [
  {
    data,
    type: 'line'
  }
]

const chartRef1 = ref() // 3位数字
const chartRef2 = ref() // 第1位数字
const chartRef3 = ref() // 第2位数字
const chartRef4 = ref() // 第3位数字
const chartRef5 = ref() // 3个数字之和

const renderChart = async (cRef: Ref<any>, data: string[]) => {
  const chartInstance = markRaw(echarts.init(cRef.value))
  const chartX = historyData.value.map((t: any) => t.date)
  const options = { ...baseOptions }
  options.xAxis = getXAxis(chartX)
  options.series = getSeries(data)
  chartInstance.setOption(options)
}

const getHistoryData = async (num = 100) => {
  try {
    const response: any = await http.get(`/lucky/getHistory?num=${num}`)
    const { isSuccess, data } = response
    historyData.value = isSuccess ? data : []
  } catch (error) {
    console.error('There was an error!', error)
  }
}

const singleNumber0 = ref<any>({}) // 统计3位数字
const singleNumber1 = ref<any>({}) // 统计全部数字的每个数字
const singleNumber2 = ref<any>({}) // 统计第一个数字
const singleNumber3 = ref<any>({}) // 统计第二个数字
const singleNumber4 = ref<any>({}) // 统计第三个数字
const singleNumber0Str = computed(() => {
  return Object.keys(singleNumber0.value)
    .sort((a: any, b: any) => a - b)
    .map((key) => {
      return `<span style="padding: 0 5px;color: #fc9412;font-weight: bold;">${key}</span>  ${singleNumber0.value[key]}次`
    })
    .join('，')
})
const singleNumber1Str = computed(() => {
  return Object.keys(singleNumber1.value)
    .sort((a: any, b: any) => a - b)
    .map((key) => {
      return `<span style="padding: 0 5px;color: #fc9412;font-weight: bold;">${key}</span>  ${singleNumber1.value[key]}次`
    })
    .join('，')
})
const singleNumber2Str = computed(() => {
  return Object.keys(singleNumber2.value)
    .sort((a: any, b: any) => a - b)
    .map((key) => {
      return `<span style="padding: 0 5px;color: #fc9412;font-weight: bold;">${key}</span>  ${singleNumber2.value[key]}次`
    })
    .join('，')
})
const singleNumber3Str = computed(() => {
  return Object.keys(singleNumber3.value)
    .sort((a: any, b: any) => a - b)
    .map((key) => {
      return `<span style="padding: 0 5px;color: #fc9412;font-weight: bold;">${key}</span>  ${singleNumber3.value[key]}次`
    })
    .join('，')
})
const singleNumber4Str = computed(() => {
  return Object.keys(singleNumber4.value)
    .sort((a: any, b: any) => a - b)
    .map((key) => {
      return `<span style="padding: 0 5px;color: #fc9412;font-weight: bold;">${key}</span>  ${singleNumber4.value[key]} 次`
    })
    .join('，')
})
const countSingleNumber = (arr: string[]) => {
  const counts: any = {}
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1
  })
  return counts
}

const renderPage = async () => {
  const data1 = historyData.value.map((t: any) => t.lucky)
  await renderChart(chartRef1, data1)

  const data2 = historyData.value.map((t: any) => t.lucky.split('')[0])
  await renderChart(chartRef2, data2)

  const data3 = historyData.value.map((t: any) => t.lucky.split('')[1])
  await renderChart(chartRef3, data3)

  const data4 = historyData.value.map((t: any) => t.lucky.split('')[2])
  await renderChart(chartRef4, data4)

  const dataSum = historyData.value.map((t: any) => t.sum)
  await renderChart(chartRef5, dataSum)

  singleNumber0.value = countSingleNumber(data1)
  singleNumber1.value = countSingleNumber(
    data1.reduce((acc: string[], item: string) => acc.concat(item.split('')), [])
  )
  singleNumber2.value = countSingleNumber(data2)
  singleNumber3.value = countSingleNumber(data3)
  singleNumber4.value = countSingleNumber(data4)
}

const num = ref<number>()
const handleChange = async () => {
  await getHistoryData(num.value)
  await renderPage()
}

onMounted(async () => {
  const route = useRoute()
  num.value = +(route.query.num ?? 100)
  await getHistoryData(num.value)
  await renderPage()
})
</script>

<template>
  <div class="container">
    <div class="title">大宝贝的专属购彩助手</div>
    <div class="select">
      统计数量：
      <input type="number" v-model="num" @input="handleChange" />
    </div>
    <div class="chart-card">
      <div class="chart-card-title">开奖号码</div>
      <div class="chart-card-sub" v-html="singleNumber1Str"></div>
      <div class="chart-card-main" ref="chartRef1"></div>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">第1个数字</div>
      <div class="chart-card-sub" v-html="singleNumber2Str"></div>
      <div class="chart-card-main" ref="chartRef2"></div>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">第2个数字</div>
      <div class="chart-card-sub" v-html="singleNumber3Str"></div>
      <div class="chart-card-main" ref="chartRef3"></div>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">第3个数字</div>
      <div class="chart-card-sub" v-html="singleNumber4Str"></div>
      <div class="chart-card-main" ref="chartRef4"></div>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">3个数字之和</div>
      <div class="chart-card-main" ref="chartRef5"></div>
    </div>
    <div class="list">
      <div class="list-title">历史数据</div>
      <div>所有数字出现次数：<span v-html="singleNumber1Str"></span></div>
      <div>第1位数字出现次数：<span v-html="singleNumber2Str"></span></div>
      <div>第2位数字出现次数：<span v-html="singleNumber3Str"></span></div>
      <div>第3位数字出现次数：<span v-html="singleNumber4Str"></span></div>
      <div v-html="singleNumber0Str"></div>
      <ul>
        <li v-for="item of historyData" :key="item.id">
          {{ item.date }}: <span>{{ item.lucky.split('').join(' ') }}</span> （{{ item.id }}期）
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  padding: 30px 20px;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    width: 4px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .chart-card {
    width: 100%;
    &-title {
      margin-top: 40px;
      padding: 10px 0;
      font-size: 18px;
      font-weight: bold;
      border-top: 1px solid #ccc;
    }
    &-main {
      width: 100%;
      height: 300px;
    }
  }

  .list {
    &-title {
      margin-top: 20px;
      padding: 20px 0;
      font-size: 18px;
      font-weight: bold;
      border-top: 1px solid #ccc;
    }
    li {
      span {
        padding: 0 20px;
        color: #fc9412;
        font-weight: bold;
      }
    }
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
