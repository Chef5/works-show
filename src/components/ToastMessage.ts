import ToastMessage from './ToastMessage.vue';
import type { ToastOption } from './ToastMessage.vue';
import { createVNode, render, type RendererNode, type VNode } from 'vue'

export default (options: ToastOption) => {
  // if (document.querySelector('.toast-message')?.style.display === 'block') {
  //   return;
  // }
  const vn = createVNode(ToastMessage, { ...options });
  render(vn, document.body);
  (vn.el as RendererNode).style.display = 'block';
  setTimeout((vn: VNode) => {
    (vn.el as RendererNode).style.display = 'none';
  }, options.timeout ?? 2000, vn);
}

