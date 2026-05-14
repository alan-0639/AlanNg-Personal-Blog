::: raw
↪快捷按鈕
<div class="button-container">
  <a href="PCB設計"  class="custom-button">⌨️PCB Design</a>
  <a href="QMK固件代碼配置"  class="custom-button highlight">💻Firmware</a>
  <a href="3D建模"  class="custom-button">🐚3D Modelling</a>


</div>



:::
<style>
.button-container {
  display: flex;
  gap: 20px!important; /* 控制按钮之间的间距 */
  margin: 20px 0;
}
.custom-button {
  display: inline-block;
  padding: 12px 15px;
  background-color: #a9cfecff; /* VitePress 主题色 */
  color: white !important; /* 确保文字为白色 */
  text-align: center;
  text-decoration: none !important;
  border-radius: 20px;
  flex: 1; /* 让按钮均分容器宽度 */
  transition: background-color 0.2s;
  /* 边框设置 */
  border: 5px solid #8bb8e0; /* 边框宽度、样式和颜色 */
  box-sizing: border-box; /* 确保边框包含在元素尺寸内 *
  /* 字体设置 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif; /* 可以选择字体-隶书-Segoe UI等 */
  font-weight: 600; /* 字体粗细：400=正常，500=中等，600=半粗体，700=粗体 */
  font-size: 22px; /* 字体大小 */
}
.custom-button:hover {
  background-color: #c01111de; /* 悬停时稍微变亮 */
  color: white !important; /* 悬停时文字保持白色 */
}
.custom-button.highlight {
  background-color: #c62828;      /* 高亮背景色（可改为你喜欢的颜色） */
 /* border-color: #c62828;          /* 高亮边框色 */
  box-shadow: 0 0 16px rgba(198, 40, 40, 0.6); /* 外发光效果 */
  /* transform: scale(1.02);         /* 按鈕轻微放大 */
}
</style>

##

# 💻QMK技術文檔
::: raw
<div class="button-container">
  <a href="https://docs.qmk.fm/newbs/" target="_blank" class="custom-button">Go to QMK Documentation.</a>
</div>


:::
<style>
.button-container {
  display: flex;
  gap: 20px!important; /* 控制按钮之间的间距 */
  margin: 20px 0;
}
.custom-button {
  display: inline-block;
  padding: 12px 15px;
  background-color: #a9cfecff; /* VitePress 主题色 */
  color: white !important; /* 确保文字为白色 */
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  flex: 1; /* 让按钮均分容器宽度 */
  transition: background-color 0.2s;
  /* 边框设置 */
  border: 5px solid #8bb8e0; /* 边框宽度、样式和颜色 */
  box-sizing: border-box; /* 确保边框包含在元素尺寸内 *
  /* 字体设置 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif; /* 可以选择字体-隶书-Segoe UI等 */
  font-weight: 600; /* 字体粗细：400=正常，500=中等，600=半粗体，700=粗体 */
  font-size: 22px; /* 字体大小 */
}
.custom-button:hover {
  background-color: #c01111de; /* 悬停时稍微变亮 */
  color: white !important; /* 悬停时文字保持白色 */
}
</style>

##
# Matrix


![](/102矩陣.png)
##
# Keymap

![](/102映射.png)
##
# 💻QMK Firmware Code
![](/图片_2026-05-13_012224_208.png)


##
# 💻QMK Code Building

![](/代碼與編譯.png)
