<template>
  <div>
    <!-- QQ悬浮按钮 -->
    <div 
      class="qq-float-btn" 
      @click="showModal"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
     <!-- 下方是替換懸浮按鈕圖標代碼 -->   
<svg 
        viewBox="0 0 1024 1024" 
        width="36" 
        height="36" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5c-18.6 8.8-32.6 25.8-37.4 45.3-2.7 11-12.5 19-23.6 19-2.8 0-5.6-0.5-8.3-1.5-13-4.3-20.1-18.7-15.8-31.7 7.5-28.3 27.6-52.3 54.5-65.1 30.9-14.7 52.1-46.5 52.1-81.1 0-50.6-41.2-91.8-91.8-91.8s-91.8 41.2-91.8 91.8c0 13.3-10.8 24-24 24s-24-10.7-24-24c0-77.1 62.7-139.8 139.8-139.8s139.8 62.7 139.8 139.8c0 54.6-33.8 103.1-84.9 122.4z"/>
      </svg>
    </div>

    <!-- 模态框 -->
    <div 
      v-if="isModalVisible" 
      class="qq-modal" 
      @click="hideModal"
    >
      <div class="modal-content" @click.stop>
        <h3> --- </h3>
        <p>如網頁有問題，請發送Email進行反饋，謝謝！  </p>
        
        <div class="qrcode-container">
          <div class="qrcode">
            <!-- 替换为您的QQ二维码图片 -->
            <img src="" alt="alanng0639@gmail.com">
            <div class="qrcode-placeholder">
              <!-- 可保留占位内容，实际图片加载后覆盖 -->
            </div>
          </div>
        </div>
        
        <p>請表明身份：<strong> 如“機械鍵盤客制化玩家”</strong></p>
        <button class="close-btn" @click="hideModal">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QQ', // 组件名称改为QQ
  data() {
    return {
      isModalVisible: false,
      hover: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
      document.body.style.overflow = 'hidden'
    },
    hideModal() {
      this.isModalVisible = false
      document.body.style.overflow = 'auto'
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalVisible) {
        this.hideModal()
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.qq-float-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #12B7F5; /* QQ蓝色 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 12px rgba(18, 183, 245, 0.4);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s;
}

.qq-float-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 6px 15px rgba(18, 183, 245, 0.5);
}

.qq-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

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

.qrcode-container {
  padding: 15px;
  background: white;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

.qrcode {
  width: 200px;
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.qrcode-placeholder {
  text-align: center;
}

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

@media (max-width: 768px) {
  .qq-float-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>


