import worksJsonList from './works.json';

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

export const worksList: WorkItem[] = worksJsonList;

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
