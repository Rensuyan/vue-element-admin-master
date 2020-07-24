# mydemo

> first vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

修改配置
(1)build/webpack.base.conf.js: eslint是一个语法检查工具,注释module/ruled 的 ...(config.dev.useEslint ? [createLintingRule()] : []),
(2).eslintrc.js:rules下添加  "space-before-function-paren": 0,
