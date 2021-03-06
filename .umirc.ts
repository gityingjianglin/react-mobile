import { defineConfig } from 'umi';
// 打包配置，image未测试
const staticDir = 'static';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // eslintIgnore: [
  //   'react-pdf'
  // ],
  routes: [
    { path: '/', component: '@/pages/index/index', title: '首页' }
    // {
    //   path: '/',
    //   component: '@/layouts/index',
    //   routes: [
    //     { path: '/index', component: '@/pages/index/index' },
    //     { path: '/reviewDecision', component: '@/pages/reviewDecision/reviewDecision' },
    //     { path: '/applicationPage', component: '@/pages/applicationPage/applicationPage' },
    //     { path: '/applicationDetailPage', component: '@/pages/applicationDetailPage/applicationDetailPage' },
    //     { path: '/showFilePage', component: '@/pages/showFilePage/showFilePage' },
    //   ],
    // },
  ],
  // mfsu: {},
  antd:{
    mobile:false
  },
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  hash: true,
  history: {
    type: 'hash', // 可选 browser、hash 和 memory
  },
  // fastRefresh: {},
  // 配置额外 CSS
  styles: [
    // `https://www.xxx.com/abc.css`
  ],
  base: '/mobile-yingkangoa/',
  publicPath: '/mobile-yingkangoa/',
  /* chainWebpack(config, { webpack }) {
    // 修改css输出目录
    config.plugin('extract-css').tap(() => [
      {
        filename: `${staticDir}/css/[name].[contenthash:8].css`,
        chunkFilename: `${staticDir}/css/[name].[contenthash:8].chunk.css`,
        ignoreOrder: true,
      },
    ]);
    // 修改js输出目录
    config.output
      .filename(`${staticDir}/js/[name].[hash:8].js`)
      .chunkFilename(`${staticDir}/js/[name].[contenthash:8].chunk.js`);
  }, */
  proxy: {
    '/stage-api': {
      target: 'https://oatest.haierfhtech.com/stage-api', // 接口域名
      changeOrigin: true,
      pathRewrite: {
        '^/stage-api': '',
      },
      // secure:false,    // 如果是https接口，需配置这个参数
    }
  },
  // 配置额外的 postcss 插件(px 转 rem)
  // extraPostCSSPlugins: [
  //   pxtorem({
  //     rootValue: 1920, // 根据设计稿设置
  //     propList: ['*']
  //   })
  // ]
});
