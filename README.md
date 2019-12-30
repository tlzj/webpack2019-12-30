# 1.基础使用
# 2.html-webpack-plugin 模板文件
# 3.多入口文件
# 4.clean-webpack-plugin的使用
# 5.style-loader css-loader less-loader使用
# 6.为css添加兼容性前缀 postcss-loader autoprefixer
# 7.拆分css mini-css-extract-plugin （tip:loader链中不应该有style-loader)
# 8.file-loader url-loader
# 9.babel转义js
  对应关系：a. babel-loader 8.x 对应babel-core 7.x   b. babel-loader 7.x 对应babel-core 6.x
  babel-polyfill有多种配置方法
  1.useBuiltIns: 'usage', // babel-polyfill启用
  2.入口配置entry: ["babel-polyfill", "./app/js"]
  3.在js入口顶部引入import "babel-polyfill";

# 10.vue开发环境的搭建
  vue-loader vue-template-compiler vue-style-loader
  vue-loader 用于解析.vue文件
  vue-template-compiler 用于编译模板 配置如下

# 11.配置热更新 webpack-dev-server
# 12.区分开发环境和生产环境
  webpack-merge 合并配置
  copy-webpack-plugin 拷贝静态资源
  optimize-css-assets-webpack-plugin 压缩css
  ugligy-webpack-plugin 压缩js
  ### tip: webpack mode设置production的时候会自动压缩js代码。原则上不需要引入          uglifyjs-webpack-plugin进行重复工作。但是optimize-css-assets-webpack-plugin压缩css的同时会破坏原有的js压缩，所以这里我们引入uglifyjs进行压缩

# 13.webpack优化
  优化打包速度
  ## a.合理配置mode参数  
  production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
  ## b.缩小文件的搜索范围(配置include exclude alias noParse extensions)
  ## c.使用HappyPack开启多进程Loader转换
  ## d.使用webpack-parallel-uglify-plugin 增强代码压缩
  ## e.抽离第三方模块 DllPlugin DllReferencePlugin
  ## f.配置缓存
  优化打包体积
  ## a.webpack-bundle-analyzer分析打包后的文件
  ## b.externals
  ## c.Tree-shaking

参考文章: https://segmentfault.com/a/1190000021395777