<!-- 返回顶部按钮组件 -->
<!-- 当页面滚动超过一定距离后，显示一个固定在屏幕右下角的圆形按钮，点击后平滑滚动回页面顶部 -->

<template>
  <!-- 
    条件渲染：只有当 visible 为 true 时才显示按钮。
    visible 是一个响应式变量，根据滚动位置自动变化。
  -->
  <div v-if="visible" class="back-to-top" @click="scrollToTop">
    ↑ 回到頂部   <!-- 按钮显示的文本，可以换成图标或符号 -->
  </div>
</template>

<script setup>
// 从 Vue 导入响应式 API 和生命周期钩子
import { ref, onMounted, onUnmounted } from 'vue'

// 定义一个响应式变量 visible，初始值为 false（按钮隐藏）
// ref 包装后的值需要通过 .value 访问，但在模板中可直接使用变量名
const visible = ref(false)

/**
 * 滚动事件处理函数：根据当前滚动位置更新 visible 的值
 * window.scrollY 获取文档垂直滚动的像素数
 * 如果滚动超过 300px，则显示按钮，否则隐藏
 */
const handleScroll = () => {
  visible.value = window.scrollY > 300
}

/**
 * 返回顶部的函数
 * window.scrollTo 是原生滚动方法
 * top: 0 表示滚动到页面顶部
 * behavior: 'smooth' 启用平滑滚动动画（兼容大多数现代浏览器）
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * 组件挂载后（DOM 已渲染）执行的操作
 * 1. 监听整个窗口的 scroll 事件，当用户滚动时调用 handleScroll
 * 2. 立即执行一次 handleScroll，以便在初始加载时根据当前滚动位置决定是否显示按钮
 */
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

/**
 * 组件卸载前（例如页面切换或组件销毁）执行的操作
 * 移除 scroll 事件监听器，避免内存泄漏
 */
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* scoped 表示样式只对当前组件生效，不会影响全局其他元素 */

.back-to-top {
  /* 固定定位：相对于浏览器视口定位，不随页面滚动而移动 */
  position: fixed;
  
  /* 距离视口底部 2rem（默认 1rem = 16px，即 32px） */
  bottom: 8rem;
  
  /* 距离视口左侧 50% —— 此时按钮会水平居中（左边界在屏幕 50% 处） */
  /* 注意：这会导致按钮从中心向左偏移一半自身宽度，实际需要配合 transform 才能完美居中 */
  right: 0rem;
  
  /* 背景颜色：翠绿色（可替换为主题色变量，如 var(--vp-c-brand-1)） */
  background-color: #34343b;
  
  /* 文字颜色白色 */
  color: white;
  
  /* 内边距：上下 0.5rem，左右 1rem，控制按钮大小 */
  padding: 0.5rem 1rem;
  
  /* 圆角边框：8px，使按钮更圆润 */
  border-radius: 20px;
  
  /* 鼠标悬停时变成手型指针，提示可点击 */
  cursor: pointer;
  
  /* 层叠顺序：100，确保按钮浮在其他普通内容之上（但可能低于弹窗等） */
  z-index: 100;
  
  /* 轻微阴影：水平偏移 0，垂直偏移 2px，模糊半径 8px，半透明黑色，增加立体感 */
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  
  /* 过渡动画：当 opacity（透明度）变化时，持续 0.2 秒，让显示/隐藏更平滑 */
  transition: opacity 0.2s;
}

/* 鼠标悬停在按钮上时的样式：将透明度降低到 0.8，产生半透明反馈效果 */
.back-to-top:hover {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .back-to-top{
    bottom: 5rem;
    right: 20px;
    width: 50px;
    height: 150px;
  }
}
</style>