<template>
  <div>
    <!-- QQ悬浮按钮 -->
    <!-- 这是一个固定在屏幕右下角的圆形按钮，点击后打开模态框 -->
    <div 
      class="qq-float-btn" 
      @click="showModal"         
      @mouseover="hover = true"   
      @mouseleave="hover = false" 
    >
      <!-- 下方是替換懸浮按鈕圖標代碼 -->
      <!-- SVG 图标：一个圆形的“i”信息图标，表示联系或帮助 -->
      <svg 
        viewBox="0 0 1024 1024" 
        width="36" 
        height="36" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- 路径数据：绘制一个带感叹号的圆形图标（类似信息图标） -->
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5c-18.6 8.8-32.6 25.8-37.4 45.3-2.7 11-12.5 19-23.6 19-2.8 0-5.6-0.5-8.3-1.5-13-4.3-20.1-18.7-15.8-31.7 7.5-28.3 27.6-52.3 54.5-65.1 30.9-14.7 52.1-46.5 52.1-81.1 0-50.6-41.2-91.8-91.8-91.8s-91.8 41.2-91.8 91.8c0 13.3-10.8 24-24 24s-24-10.7-24-24c0-77.1 62.7-139.8 139.8-139.8s139.8 62.7 139.8 139.8c0 54.6-33.8 103.1-84.9 122.4z"/>
      </svg>
    </div>

    <!-- 模态框（弹窗） -->
    <!-- v-if="isModalVisible" 根据变量决定是否显示模态框 -->
    <div 
      v-if="isModalVisible" 
      class="qq-modal" 
      @click="hideModal"      
    >
      <!-- modal-content 是弹窗的主要内容区域 -->
      <!-- @click.stop 阻止点击内容区域时的事件冒泡，避免触发背景的 hideModal -->
      <div class="modal-content" @click.stop>
        <h3> --- </h3>        <!-- 标题（可修改为实际内容） -->
        <p>如網頁有問題，請發送Email進行反饋，謝謝！</p>
        
        <div class="qrcode-container">
          <div class="qrcode">
            <!-- 替换为您的QQ二维码图片 -->
            <!-- 当前 src 为空，需要填入正确的二维码图片 URL -->
            <img src="" alt="alanng0639@gmail.com">
            <div class="qrcode-placeholder">
              <!-- 可保留占位内容，实际图片加载后覆盖 -->
            </div>
          </div>
        </div>
        
        <p>請表明身份：<strong>如“機械鍵盤客制化玩家”</strong></p>
        <button class="close-btn" @click="hideModal">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QQ', // 组件名称改为 QQ（与文件名或用途对应）
  data() {
    return {
      isModalVisible: false,  // 控制模态框的显示/隐藏
      hover: false            // 记录鼠标是否悬浮在按钮上（目前仅用于数据存储，未在模板中使用）
    }
  },
  methods: {
    // 显示模态框
    showModal() {
      this.isModalVisible = true
      // 隐藏页面滚动条，防止背景滚动（提升体验）
      document.body.style.overflow = 'hidden'
    },
    // 隐藏模态框
    hideModal() {
      this.isModalVisible = false
      // 恢复页面滚动
      document.body.style.overflow = 'auto'
    },
    // 处理键盘按键事件（按 Esc 键关闭模态框）
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalVisible) {
        this.hideModal()
      }
    }
  },
  mounted() {
    // 组件挂载后，监听全局键盘事件
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    // 组件销毁前，移除键盘事件监听，避免内存泄漏
    window.removeEventListener('keydown', this.handleKeydown)
    // 注意：这里应该也要恢复 body 的 overflow，防止组件被销毁时模态框还开着（实际场景很少发生）
  }
}
</script>

<style scoped>
/* scoped 表示样式只对当前组件生效 */

/* 悬浮按钮样式 */
.qq-float-btn {
  position: fixed;      /* 固定定位，相对于视口 */
  bottom: 2rem;        /* 距离底部 8rem（约 128px） */
  right: 24.5rem;         /* 距离右侧 30px */
  width: 60px;
  height: 60px;
  background: #12B7F5; /* QQ 标志性蓝色 */
  border-radius: 50%;  /* 圆形 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 12px rgba(18, 183, 245, 0.4); /* 带蓝色调的阴影 */
  cursor: pointer;
  z-index: 1000;       /* 确保按钮浮在普通内容之上 */
  transition: all 0.3s; /* 所有属性变化时平滑过渡 0.3 秒 */
}

/* 鼠标悬浮在按钮上时的效果：放大并加深阴影 */
.qq-float-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 6px 15px rgba(18, 183, 245, 0.5);
}

/* 模态框遮罩层（背景半透明黑色） */
.qq-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;        /* 比按钮更高，确保覆盖按钮之上 */
}

/* 模态框内容卡片 */
.modal-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.modal-content h3 {
  margin-bottom: 15px;
  color: #1a365d;
}

.modal-content p {
  margin-bottom: 20px;
  color: #4a5568;
}

/* 二维码容器 */
.qrcode-container {
  padding: 15px;
  background: white;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

/* 二维码区域（实际放置图片的区域） */
.qrcode {
  width: 200px;
  height: 200px;
  background: #f5f5f5;   /* 背景灰色占位 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.qrcode-placeholder {
  text-align: center;
}

/* 关闭按钮 */
.close-btn {
  background: #718096;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.close-btn:hover {
  background: #4a5568;
}

/* 响应式布局：屏幕宽度 ≤ 768px 时（手机/平板），调整按钮位置和大小 */
@media (max-width: 768px) {
  .qq-float-btn {
    bottom: 6rem;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>