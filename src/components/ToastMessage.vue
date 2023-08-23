<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


export interface ToastOption {
  message: string;
  timeout?: number;
}

const props = defineProps({
  message: {
    type: String,
    required: true,
  }, 
  timeout: {
    type: Number,
    default: 2000,
  },
})

const showToast = ref(true);
onMounted(() => {
  setTimeout(() => {
    showToast.value = false;
  }, props.timeout)
});

onUnmounted(() => {
  console.log('onUnmounted');
})

</script>

<template>
  <div class="toast-message">{{ message }}</div>
</template>

<style scoped>
.toast-message {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  padding: 30px 50px;
  border-radius: 10px;
  opacity: .9;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #666;
}
</style>
