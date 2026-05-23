---
layout: home

hero:
  name: "Alan Ng 個人博客"
  text: ""
  tagline: 客制化機械鍵盤作品
  image:
    src: /個人卡通頭像.png
    alt: Alan Ng
  actions:
    - theme: brand
      text: 創作歷程
      link: '/zh-HK/HAWKZ-dim-sum-102/PCB設計'
    - theme: brand
      text: 視頻展示
      link: '/zh-HK/視頻/焊接'
    - theme: brand
      text: 作品功能
      link: '/zh-HK/默认配置/'

# 关键：禁用默认的 features 渲染
features: []
---

<!-- 自定义 Features 区块开始 -->
<div class="custom-features">
  <div class="features-grid">
    <!-- 1. 从0到1项目落地 -->
    <div class="feature-card">
      <h3>🧠從0到1專案落地</h3>
      <div class="feature-tagline">概念 → 设计 → 验证 → 成品</div>
      <div class="feature-desc">
        獨立完成機械鍵盤專案：概念DFA、原理圖、PCB Layout、韌體編寫、3D建模、對接工廠（CNC/3D列印/鈑金）、整機FVT測試。
      </div>
      <div class="tech-tags">
        <span>DFM/DFT/DFA</span>
        <span>FVT</span>
        <span>完整閉環</span>
      </div>
    </div>
<!-- 2. PCB设计 & 硬件实现 -->
    <div class="feature-card">
      <h3>🔧PCB設計 & 硬體實作</h3>
      <div class="feature-tagline">原理圖 · Layout · 焊接調試</div>
      <div class="feature-desc">
        雙層PCB Layout、嘉立創EDA、PCB打樣、手工焊接（電烙鐵/風槍/加熱台）。搭配J-Link/ST-Link、他錶進行除錯與PCBA測試。
      </div>
      <div class="tech-tags">
        <span>嘉立創EDA</span>
        <span>燒錄</span>
        <span>焊接實操</span>
      </div>
    </div>
<!-- 3. 结构与机构整合 -->
    <div class="feature-card">
      <h3>🧱結構 & 機械整合</h3>
      <div class="feature-tagline">3D建模 · 2D圖 · 公差分析</div>
      <div class="feature-desc">
        Fusion360 3D建模、AutoCAD 2D出圖，結構DFA分析。對接CNC、3D列印、鈑金廠，確保PCB與外殼精準匹配，降低組裝干涉。
      </div>
      <div class="tech-tags">
        <span>Fusion360</span>
        <span>AutoCAD</span>
        <span>DFA</span>
      </div>
    </div>
<!-- 4. 技术文件 & ERP管理 -->
    <div class="feature-card">
      <h3>📁技術文件 & ERP管理</h3>
      <div class="feature-tagline">BOM · ECO · 版本管控</div>
      <div class="feature-desc">
        熟練操作 ERP（E10、企雲樂），BOM結構管理、工程變更（ECO）流程。技術文件與固件版本追蹤，跨部門溝通，提升量產效率。
      </div>
      <div class="tech-tags">
        <span>BOM管理</span>
        <span>ERP</span>
        <span>版本控制</span>
      </div>
    </div>
<!-- 5. 产品验证 & 故障分析 -->
    <div class="feature-card">
      <h3>🧪產品驗證 & 故障分析</h3>
      <div class="feature-tagline">FVT · DFT · 客戶技術支援</div>
      <div class="feature-desc">
        設計驗證階段導入DFT，執行功能驗證（FVT）。協助客戶故障分析、技術諮詢，與工廠對接設計變更，提升品牌信賴度。
      </div>
      <div class="tech-tags">
        <span>驗證</span>
        <span>分析</span>
        <span>故障排除</span>
      </div>
    </div>
<!-- 6. 多面手 / 工具链整合 -->
    <div class="feature-card">
      <h3>🌐多領域知識 & 跨域整合</h3>
      <div class="feature-tagline">系統操作 · 技術演示</div>
      <div class="feature-desc">
        VS Code (內容編輯器)、Shopify庫存管理、遠端系統支援、技術演示。整合軟硬體工具鏈，串連開發、測試與商務流程。
      </div>
      <div class="tech-tags">
        <span>遠端系統支援</span>
        <span>Shopify</span>
        <span>技術演示</span>
      </div>
    </div>
  </div>
</div>

---

# 📜 部分證書展示

<div class="cert-grid">
  <div class="cert-item">
    <img src="/102_上蓋.png" alt="PCB設計專項技術證">
    <p>PCB設計專項技術證書<br>（教育部認證）</p>
  </div>
  <div class="cert-item">
    <img src="/ScreenShot_2026-05-13_022855_862.png" alt="PCB設計專項技術證">
    <p>PCB設計專項技術證書<br>（培訓機構認證）</p>
  </div>
  <div class="cert-item">
    <img src="/轴体对比.png" alt="電子商務師證">
    <p>電子商務師證書<br>（教育部認證）</p>
  </div>
    <div class="cert-item">
    <img src="/102_上蓋.png" alt="物流師三級證">
    <p>物流師證書<br>（教育部認證）</p>
  </div>
</div>

<style>
<!-- ========== 样式定义（自适应亮色/暗色主题，移动端友好） ========== -->
<style>
/* ---------- 自定义 Features 样式 ---------- */
.custom-features {
  margin: 2rem 0;          /* 上下外边距，与上下内容保持距离 */
}


/* 使用 CSS Grid 布局实现响应式卡片网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;               /* 卡片之间的间隙 */
}

/* 单个卡片样式 */
.feature-card {
  background: var(--vp-c-bg-soft);   /* VitePress 主题变量：柔和背景色（暗色模式自动适配） */
  border-radius: 1.5rem;             /* 圆角 */

  padding-top: 0.5rem;  /* 上边距*/
  padding-bottom: 1rem;  /* 下边距*/
  padding-left: 1.5rem;  /* 左边距*/
  padding-right: 1.5rem;  /* 右边距*/

  transition: transform 0.2s, box-shadow 0.2s; /* 平滑过渡效果 */
  border: 2px solid var(--vp-c-divider);       /* 边框颜色使用主题分割线变量 */
  display: flex;
  flex-direction: column;            /* 内部元素垂直排列 */
  height: 100%;                      /* 让同一行卡片高度一致 */
}

/* 鼠标悬停效果：轻微上浮 + 阴影 + 边框变色 */
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1); /* 品牌色边框 */
}

/* 卡片标题样式（h3） */
.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 600;

  margin-top: 0.5rem;  /* 上边距*/
  margin-bottom: 0.5rem;  /* 下边距*/

  color: var(--vp-c-text-1);         /* 主题主要文字颜色 */
}

/* 短标语（tagline）样式 */
.feature-tagline {
  font-weight: 500;
  color: var(--vp-c-brand-1);        /* 品牌色文字 */
  font-size: 0.85rem;
  text-transform: uppercase;         /* 大写字母 */
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  border-left: 3px solid var(--vp-c-brand-1); /* 左侧装饰条 */
  padding-left: 0.6rem;
}

/* 详细描述文字 */
.feature-desc {
  color: var(--vp-c-text-2);         /* 主题次要文字颜色 */
  font-size: 0.95rem;

  margin-top: 0rem;  /* 上边距*/
  margin-bottom: 1rem;  /* 下边距*/

  flex: 1;                           /* 占用剩余空间，使标签底部对齐 */
}

/* 技术标签容器 */
.tech-tags {
  display: flex;
  flex-wrap: wrap;                   /* 小屏幕时换行 */
  gap: 0.5rem;
  margin-top: auto;                  /* 自动上边距，将标签推到底部 */
}

/* 单个小标签样式 */
.tech-tags span {
  background: rgba(0, 0, 0, 0.1);   /* 静音背景色（比普通背景稍暗/稍亮） */
  padding: 0.2rem 0.7rem;
  border-radius: 0.75rem;               /* 胶囊形状 */
  font-size: 0.7rem;
  font-weight: 1000;
  color: var(--vp-c-text-2);


  
}

/* ---------- 证书网格样式（你原来已有的，这里补充注释） ---------- */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

/* 单个证书卡片 */
.cert-item {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  border: 5px solid var(--vp-c-divider);
  height: 280px;                     /* 固定高度，保证卡片整齐 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;    /* 图片靠上，文字靠下 */
}

/* 证书卡片悬停效果 */
.cert-item:hover {
  transform: translateY(-8px);
}

/* 证书图片样式 */
.cert-item img {
  display: block;
  margin: 0 auto;                    /* 水平居中 */
  max-width: 100%;
  height: 70%;                       /* 占卡片高度的70% */
  max-height: 200px;
  object-fit: contain;               /* 保持图片比例，不裁剪 */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 证书文字说明 */
.cert-item p {
  margin: 0.75rem 0 0;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

/* ---------- 响应式：小屏幕（手机）时卡片内边距减小 ---------- */
@media (max-width: 680px) {
  .features-grid {
    grid-template-columns: 1fr;      /* 手机屏幕每行只显示一张卡片 */
  }
  .feature-card {
    padding: 1.5rem;
  }
}
</style>