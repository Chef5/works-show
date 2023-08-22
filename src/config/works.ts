export interface WorkItem {
  id: string;
  name: string;
  theme: string;
  time: string;
  tags: string[];
  platforms: string[];
  technologies: string[];
  type: string;
  owner: string;
  summary: string;
  honor: string;
  pictures: {
      name: string;
      url: string;
  }[];
  descriptions: string[];
  projects: {
    name: string;
    technologies: string[];
    description: string|string[];
  }[];
}
export class WorkItemModel implements WorkItem {
  id: string = '';
  name: string = '项目名称';
  theme: string = '#63b7af';
  time: string = '2020-10 ~ 2020-10';
  tags: string[] = ['行业标签', '行业标签'];
  platforms: string[] = ['运行平台', '运行平台'];
  technologies: string[] = ['技术栈', '技术栈'];
  type: string = '公司|个人';
  owner: string = 'xxxx公司|Chef Wu';
  summary: string = '项目概述';
  honor: string = '项目业绩';
  pictures = [{ name: '项目图片', url: '图片链接' }, { name: '项目图片', url: '图片链接' }];
  descriptions: string[] = ['第一段项目描述', '第n段项目描述'];
  projects: {
    name: string;
    technologies: string[];
    description: string|string[];
  }[] = [{
    name: '子项目1',
    technologies: ['技术栈', '技术栈'],
    description: '子项目描述 string|string[]',
  }, {
    name: '子项目2',
    technologies: ['技术栈', '技术栈'],
    description: ['子项目描述'],
  }];
  constructor(id = '') {
    this.id = id;
  }
};

const worksJsonList: string[] = [
  // 乘法云链医患小程序
  "{\n  \"id\": \"8\",\n  \"name\": \"乘法云链医患小程序\",\n  \"theme\": \"#63b7af\",\n  \"time\": \"2021-11 ~ 2023-03\",\n  \"tags\": [\n    \"医疗\",\n    \"在线问诊\",\n    \"处方流转\"\n  ],\n  \"platforms\": [\n    \"小程序\"\n  ],\n  \"technologies\": [\n    \"Vant\",\n    \"Less\",\n    \"TRTC\"\n  ],\n  \"type\": \"公司\",\n  \"owner\": \"小芄医药科技（成都）有限公司\",\n  \"summary\": \"小程序分为医生小程序、患者小程序，涉及医患间问诊沟通以及处方购药等流程。\",\n  \"honor\": \"已签约数十家医院，已在7家省内外医院上线\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/1.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/2.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/3.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/4.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/5.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/6.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/7.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/8.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/9.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/10.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/21.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/22.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/23.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/24.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/25.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/26.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/27.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/28.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/29.png\"\n    },\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mini/30.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"\",\n    \"\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"患者小程序\",\n      \"technologies\": [\n        \"Vant\",\n        \"TRTC\"\n      ],\n      \"description\": \"为患者提供挂号问诊、购药等服务\"\n    },\n    {\n      \"name\": \"医生小程序\",\n      \"technologies\": [\n        \"Vant\",\n        \"TRTC\"\n      ],\n      \"description\": \"为医生提供接诊、处方开具、号源管理等服务\"\n    }\n  ]\n}",

  // 乘法云链互联网医院运营平台
  "{\n  \"id\": \"7\",\n  \"name\": \"乘法云链互联网医院运营平台\",\n  \"theme\": \"#63b7af\",\n  \"time\": \"2021-11 ~ 2023-03\",\n  \"tags\": [\n    \"医疗\",\n    \"HIS\"\n  ],\n  \"platforms\": [\n    \"PC\"\n  ],\n  \"technologies\": [\n    \"Vue2\",\n    \"Element\"\n  ],\n  \"type\": \"公司\",\n  \"owner\": \"小芄医药科技（成都）有限公司\",\n  \"summary\": \"运营平台是面向医院运营人员，提供日常运营任务管理的平台。\",\n  \"honor\": \"已签约数十家医院，已在7家省内外医院上线\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/xiaowan/mg/1.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"\",\n    \"\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"运营端\",\n      \"technologies\": [\n        \"Vue2\",\n        \"Element\"\n      ],\n      \"description\": \"为医院运营提供的运营平台\"\n    },\n    {\n      \"name\": \"管理端\",\n      \"technologies\": [\n        \"Vue2\",\n        \"Element\"\n      ],\n      \"description\": \"为公司实施提供的统一管理平台\"\n    }\n  ]\n}",

  // 大鹏新区生态环境监测监管平台
  "{\n  \"id\": \"6\",\n  \"name\": \"大鹏新区生态环境监测监管平台\",\n  \"theme\": \"#63b7af\",\n  \"time\": \"2020-12 ~ 2021-10\",\n  \"tags\": [\n    \"可视化\",\n    \"政务\",\n    \"大屏\"\n  ],\n  \"platforms\": [\n    \"PC\"\n  ],\n  \"technologies\": [\n    \"Vue3\",\n    \"qiankun\",\n    \"Echarts\",\n    \"Nest.js\",\n    \"Element-plus\"\n  ],\n  \"type\": \"公司\",\n  \"owner\": \"北京思路创新科技有限公司\",\n  \"summary\": \"大鹏新区生态环境监测管理平台是一个数据可视化的监测大屏项目\",\n  \"honor\": \"顺利通过终验，获得项目经理和大鹏生态局领导认可\",\n  \"pictures\": [\n    {\n      \"name\": \"应急\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/dapeng/1.png\"\n    },\n    {\n      \"name\": \"应急\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/dapeng/2.png\"\n    },\n    {\n      \"name\": \"应急\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/dapeng/3.png\"\n    },\n    {\n      \"name\": \"应急\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/dapeng/4.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"项目前端负责人，主要负责基座、大气微应用、水环境微应用的开发，ECharts 组件封装 负责项目人员任务安排，和开发经理、项目经理沟通协调\",\n    \"其中遇到了部分难点：\",\n    \"（1）第三方库与qiankun不兼容:通过采用外联式引用，不参与qiankun编译\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"基座\",\n      \"technologies\": [\n        \"Vue3\",\n        \"qiankun\"\n      ],\n      \"description\": \"基座应用，组织和协调各微应用\"\n    },\n    {\n      \"name\": \"大气环境微应用\",\n      \"technologies\": [\n        \"Vue3\",\n        \"Element-plus\"\n      ],\n      \"description\": \"实现大气环境相关可视化业务\"\n    },\n    {\n      \"name\": \"水环境微应用\",\n      \"technologies\": [\n        \"Vue3\",\n        \"Element-plus\"\n      ],\n      \"description\": \"实现水环境相关可视化业务\"\n    }\n  ]\n}",

  // 攀枝花生态云驾驶舱
  "{\n  \"id\": \"5\",\n  \"name\": \"攀枝花生态云驾驶舱\",\n  \"theme\": \"#63b7af\",\n  \"time\": \"2020-07 ~ 2020-10\",\n  \"tags\": [\n    \"可视化\",\n    \"政务\"\n  ],\n  \"platforms\": [\n    \"安卓\",\n    \"iOS\"\n  ],\n  \"technologies\": [\n    \"Angular\",\n    \"Cordova\",\n    \"Ionic\",\n    \"Echarts\"\n  ],\n  \"type\": \"公司\",\n  \"owner\": \"北京思路创新科技有限公司\",\n  \"summary\": \"攀枝花生态云驾驶舱是一个提供生态数据可视化展示的移动端 APP\",\n  \"honor\": \"-\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/1.png\"\n    },\n    {\n      \"name\": \"个人中心\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/2.png\"\n    },\n    {\n      \"name\": \"驾驶舱首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/1-1.png\"\n    },\n    {\n      \"name\": \"水\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/3.png\"\n    },\n    {\n      \"name\": \"大气\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/4.png\"\n    },\n    {\n      \"name\": \"应急\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/5.png\"\n    },\n    {\n      \"name\": \"检查\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/6.png\"\n    },\n    {\n      \"name\": \"统计分析\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ths/jscapp/7.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"这是一个用Ionic5开发的一款可视化APP，分别打包成安卓和iOS客户端。\",\n    \"我主要负责水环境、审批、应急和监察模块开发，负责部分组件开发\",\n    \"手动实现了一个官方的 ion-select 组件: 官方 ion-select 组件没有提供自定义 option 的方法，于是自己实现了一个 ion-select 组件，可以使用自定义模板组件作为 option 模板\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"前端项目\",\n      \"technologies\": [\n        \"Ionic 5\",\n        \"Echarts\"\n      ],\n      \"description\": \"\"\n    }\n  ]\n}",

  // 跑鸭 - 一款基于校园跑步的社交小程序
  "{\n  \"id\": \"4\",\n  \"name\": \"跑鸭 - 一款基于校园跑步的社交小程序\",\n  \"theme\": \"#63b7af\",\n  \"time\": \"2020-03 ~ 2020-05\",\n  \"tags\": [\n    \"体育\",\n    \"社交\"\n  ],\n  \"platforms\": [\n    \"PC\",\n    \"H5\",\n    \"小程序\"\n  ],\n  \"technologies\": [\n    \"Vant\",\n    \"Less\",\n    \"Laravel\",\n    \"MySQL\"\n  ],\n  \"type\": \"毕业设计\",\n  \"owner\": \"Chef Wu\",\n  \"summary\": \"“跑鸭”微信小程序，包含实时里程配速、运动路径、整公里提醒、周榜月榜、打卡分享、热门推荐、线上活动、勋章墙、隐私设置\",\n  \"honor\": \"优秀毕业设计；Github stars 100+\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/1.jpg\"\n    },\n    {\n      \"name\": \"动态圈子\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/2.jpg\"\n    },\n    {\n      \"name\": \"活动广场\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/3.jpg\"\n    },\n    {\n      \"name\": \"个人中心\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/4.jpg\"\n    },\n    {\n      \"name\": \"通用设置\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/6.png\"\n    },\n    {\n      \"name\": \"隐私设置\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/7.png\"\n    },\n    {\n      \"name\": \"E-R图\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/20200618185938.jpeg\"\n    },\n    {\n      \"name\": \"数据模型图\",\n      \"url\": \"http://img.cdn.1zdz.cn/github/readme/poprun/20200618191037.jpeg\"\n    }\n  ],\n  \"descriptions\": [\n    \"“跑鸭”微信小程序的核心功能就是：跑步+社交+活动，详细划分如下：\",\n    \"（1）跑步（首屏）：当前位置地图、排行榜（周榜、月榜）、运动路径、实时数据（里程、配速）、随机一言。\",\n    \"（1）动态圈子：打卡分享、发布分享、热门推荐、点赞评论、消息通知。\",\n    \"（3）活动广场：线上活动（报名、完赛条件、奖励）、跑步教程。\",\n    \"（4）运动管理、动态管理、设置（通用设置、隐私设置）、勋章墙、等级称号、个人主页、资料编辑。\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"前端项目\",\n      \"technologies\": [\n        \"Less\",\n        \"Vant-Weapp\",\n        \"Iview-Weapp\"\n      ],\n      \"description\": \"https://github.com/Chef5/PopRun\"\n    },\n    {\n      \"name\": \"后端项目\",\n      \"technologies\": [\n        \"Laravel 6\",\n        \"MySQL\"\n      ],\n      \"description\": \"https://github.com/Chef5/PopRun-b\"\n    }\n  ]\n}",

  // 工大教务处
  "{\n  \"id\": \"3\",\n  \"name\": \"工大教务处\",\n  \"theme\": \"#1298cf\",\n  \"time\": \"2018-07 ~ 2022.06\",\n  \"tags\": [\n    \"爬虫\",\n    \"教务\",\n    \"课程表\"\n  ],\n  \"platforms\": [\n    \"微信小程序\",\n    \"安卓\"\n  ],\n  \"technologies\": [\n    \"微信小程序\",\n    \"PHP\",\n    \"uni-App\"\n  ],\n  \"type\": \"个人\",\n  \"owner\": \"Chef Wu\",\n  \"summary\": \"利用爬虫技术，将学校教务处信息搬到移动端，功能涉及课程表查询、成绩查询、空教室查询、考试时间查询、刷水卡、教学日历等\",\n  \"honor\": \"UV: 20k、DAU: 3k；辽宁省移动开发二等奖；广告收益；\",\n  \"pictures\": [\n    {\n      \"name\": \"工大教务处\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/mini-dlpu/MiniProgram.miniDLPU.png\"\n    },\n    {\n      \"name\": \"mini教务处\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/mini-dlpu/Android.miniDLPU.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"工大教务处”是我在课外学习中开发的第一款上线的小程序\",\n    \"“工大教务处”前身是一款安卓程序“mini教务处”，那是我为了方便我自己查询（课表、成绩、考试日程）而开发的。\",\n    \"后来经过室友、同学的分享，有些iOS的同学反馈也想要使用。于是我2018年9月份用了一个月学习小程序，并完成了第一版小程序上线。\",\n    \"小程序上线后，随着大家的扩散，就有越来越多的用户，也收到了很多建议，于是我一次次地添加功能、修改bug，一直维护到毕业\",\n    \"毕业后，培养了两个学弟，之后小程序基本上交给学弟们维护了。\",\n    \"现在小程序依旧在线上，取名叫“掌上教务处”，欢迎访问！\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"安卓\",\n      \"technologies\": [\n        \"uniApp\"\n      ],\n      \"description\": \"已放弃维护\"\n    },\n    {\n      \"name\": \"微信小程序\",\n      \"technologies\": [\n        \"微信小程序\"\n      ],\n      \"description\": \"https://github.com/Chef5/miniDLPU\"\n    },\n    {\n      \"name\": \"后端\",\n      \"technologies\": [\n        \"PHP\",\n        \"MySQL\",\n        \"Curl\"\n      ],\n      \"description\": \"https://github.com/Chef5/miniDLPU-b\"\n    }\n  ]\n}",

  // 智能语音识别记账本
  "{\n  \"id\": \"2\",\n  \"name\": \"智能语音识别记账本\",\n  \"theme\": \"#1298cf\",\n  \"time\": \"2018-03 ~ 2018-07\",\n  \"tags\": [\n    \"AI\",\n    \"工具\"\n  ],\n  \"platforms\": [\n    \"安卓\"\n  ],\n  \"technologies\": [\n    \"uni-App\",\n    \"PHP\",\n    \"ffmpeg\"\n  ],\n  \"type\": \"个人\",\n  \"owner\": \"Chef Wu\",\n  \"summary\": \"结合百度云语音识别接口，以聊天对话形式，智能从对话中提取收支明细，帮助个人记录生活收入和支出\",\n  \"honor\": \"国家级大创项目\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/ai-book/Android.AI-Book.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"这是我大二时萌生的一个想法，联系了导师后，开始着手开发，顺利申报成国家级大创项目，中期、结题答辩都获得了评委的一致好评\",\n    \"项目采用的前后端分离做的，项目前端用的是uniApp开发，然后打包成安卓apk\",\n    \"项目后端用的PHP原生开发，接收前端传过来的对话音频文件，后端调用百度云语音识别进行分词，通过设计的算法从分词结果里提取账单信息，比如时间、收支类型、金额等\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"前端\",\n      \"technologies\": [\n        \"uniApp\"\n      ],\n      \"description\": \"https://github.com/mos/AIBook-frontend\"\n    },\n    {\n      \"name\": \"后端\",\n      \"technologies\": [\n        \"PHP\",\n        \"ffmpeg\"\n      ],\n      \"description\": \"https://github.com/Chef5/AiBook-backEnd\"\n    }\n  ]\n}",

  // STS学习资讯平台
  "{\n  \"id\": \"1\",\n  \"name\": \"STS学习资讯平台\",\n  \"theme\": \"#1e90ff\",\n  \"time\": \"2017-03 ~ 2017-05\",\n  \"tags\": [\n    \"教育\",\n    \"资讯\"\n  ],\n  \"platforms\": [\n    \"PC\"\n  ],\n  \"technologies\": [\n    \"PHP\"\n  ],\n  \"type\": \"个人\",\n  \"owner\": \"Chef Wu\",\n  \"summary\": \"STS学习资讯平台，主要功能是提供初高中学习资源分享的平台，同时提供院校、专业、历年高考分数线查询等功能\",\n  \"honor\": \"-\",\n  \"pictures\": [\n    {\n      \"name\": \"首页\",\n      \"url\": \"http://img.cdn.1zdz.cn/works-show/stsedu/Web.STSedu.cn.png\"\n    }\n  ],\n  \"descriptions\": [\n    \"STS学习资讯平台，其前身是“物理加油站”网站\",\n    \"“物理加油站”是我高一时创建的一个静态html网站，主要提供初高中复习资料、历年考试真题的网址，当时每次更新资源时，存粹靠添加html代码然后通过FTP上传到虚拟主机。还记得当时我买了第一个域名 kei123.com（后来100块钱把它卖掉了）\",\n    \"大学时，接触了PHP语言，于是使用PHP将“物理加油站”改造成“STS学习资讯平台”，支持用户注册登录，支持用户自主上传资料或分享云盘链接。配置了新的域名 stsedu.cn（意思是 Student to Student Education 学生帮学生的教育网站）\",\n    \"因工作后没有精力维护，STS学习资讯平台，于2021年正式下线\"\n  ],\n  \"projects\": [\n    {\n      \"name\": \"PHP项目\",\n      \"technologies\": [\n        \"PHP\"\n      ],\n      \"description\": \"纯PHP项目，没有用任何框架\"\n    }\n  ]\n}",
];

export const worksList: WorkItem[] = worksJsonList.map((t) => JSON.parse(t) as WorkItem)

export const WorkItemInstance: WorkItem = {
  id: '',
  name: '项目名称',
  theme: '#63b7af',
  time: '2020-10 ~ 2020-10',
  tags: ['行业标签', '行业标签'],
  platforms: ['运行平台', '运行平台'],
  technologies: ['技术栈', '技术栈'],
  type: '',
  owner: '',
  summary: '项目概述',
  honor: '项目业绩',
  pictures: [{ name: '项目图片', url: '图片链接' }, { name: '项目图片', url: '图片链接' }],
  descriptions: ['第一段项目描述', '第n段项目描述'],
  projects: [{
    name: '子项目1',
    technologies: ['技术栈', '技术栈'],
    description: '子项目描述 string|string[]',
  }, {
    name: '子项目2',
    technologies: ['技术栈', '技术栈'],
    description: ['子项目描述'],
  }],
};
