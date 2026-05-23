export default [
    { text: '首頁', link: '/',activeMatch: '^/$' },
    { text: '創作歷程', link: '/zh-HK/HAWKZ-dim-sum-102/PCB設計',activeMatch: '/zh-HK/HAWKZ-dim-sum-102/' },
    { text: '視頻展示', link: '/zh-HK/視頻/焊接',activeMatch: '/zh-HK/視頻/' },
    { text: '作品功能', link: '/zh-HK/默认配置',activeMatch: '^/zh-HK/(?!HAWKZ-dim-sum-102/|視頻/).*' },


   //  { text: '測試', link: '/测试',activeMatch: '/测试' }

];