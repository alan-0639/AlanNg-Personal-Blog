import { defineConfig } from 'vitepress'

// 导入导航栏配置
import navZhHK from './nav/zh-HK.mts'



// 导入侧边栏配置
import sidebarZhHK from './sidebar/zh-HK.mts'




// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/AlanNg-Personal-Blog',
  title: "AlanNg-Personal-Blog",
  description: "機械鍵盤愛好者",
  

 // srcDir: 'zh-HK', // 明确指定源文件目录
  // 多语言配置
  locales: {
    // 香港繁体中文作为默认语言 (root)
    root: {
      label: '繁體中文 (香港)',
      lang: 'zh-HK',

      link: '/', 

      themeConfig: {
        nav: navZhHK,
        sidebar: sidebarZhHK,
        
        // 香港繁体中文的界面文本
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },
        outline: {
          label: '本頁目錄'
        },
        lastUpdated: {
          text: '最後更新於'
        },
        darkModeSwitchLabel: '外觀',
        sidebarMenuLabel: '選單',
        returnToTopLabel: '返回頂部',
        
        // 搜索配置
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文檔',
                buttonAriaLabel: '搜索文檔'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換'
                }
              }
            }
          }
        }
      }
    },






  // 全局主题配置
  themeConfig: {
    logo:{ light: '/個人卡通頭像.png', dark: '/個人卡通頭像.png' },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    // 页脚配置
    footer: {

      //message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 HAWKZ KEYBOARD'
    },

  },
  
  // 最后更新时间
  lastUpdated: false,
  
  // 大纲深度
  outline: {
    level: [2, 3]
  }
}
})
