import { getThemeConfig, defineConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: "Ruiyoung",
  outputDir: 'blog',
  // 友链
  friend: [
    {
      nickname: "resume",
      des: "你的指尖用于改变世界的力量",
      avatar:
        "https://static.ruiyoung.online/images/avator.jpg",
      url: "https://resume.ruiyoung.online",
    },
    {
      nickname: "掘金",
      des: "一个帮助开发者成长的社区",
      avatar:
        "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg",
      url: "https://juejin.cn/user/3403743729297790",
    },
  ],
  recommend: {
    showSelf: true,
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: "pagefind",
});

export default defineConfig({
  extends: blogTheme,
  lang: "zh-cn",
  outDir: "blog",
  title: "@Ruiyoung/blog",
  description: "博客",
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"],
    },
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "上次更新于",
    footer: {
      message: "自定义底部内容",
      copyright:
        'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>',
    },
    logo: "/logo.jpg",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RuiYoung",
      },
    ],
  },
});
