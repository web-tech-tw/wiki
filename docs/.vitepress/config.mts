import { defineConfig } from 'vitepress'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiki",
  base: isProduction ? "/wiki/" : "/",
  description: "Taiwan Web Technology Promotion Organization",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Knowledge Base', link: '/infosec/overview/001-introduction' }
    ],
    sidebar: [
      {
        text: '資訊安全與攻防',
        items: [
          { text: '簡要規則集', link: '/infosec/overview/001-introduction' }
        ]
      },
      {
        text: '程式設計與軟體工程',
        items: [
          { text: '簡要規則集', link: '/software-engineering/overview/001-introduction' }
        ]
      },
      {
        text: 'Web 技術',
        items: [
          { text: '簡要規則集', link: '/web-tech/overview/001-introduction' }
        ]
      },
      {
        text: 'LINE Developers',
        items: [
          { text: '簡要規則集', link: '/line-developers/overview/001-introduction' }
        ]
      },
      {
        text: 'PHP',
        items: [
          { text: '簡要規則集', link: '/php/overview/001-introduction' }
        ]
      },
      {
        text: 'Vue.js',
        items: [
          { text: '簡要規則集', link: '/vuejs/overview/001-introduction' }
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: '簡要規則集', link: '/linux/overview/001-introduction' }
        ]
      },
      {
        text: 'Artificial Intelligence',
        items: [
          { text: '簡要規則集', link: '/ai/overview/001-introduction' }
        ]
      }
    ]
  }
})
