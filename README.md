# react-admin-base
react-admin-base system solution

<img src="https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/logo.png" alt="logo" width="150" height="53" />

### 依赖模块
<span style="color: rgb(184,49,47);">项目是用create-react-app创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站😄😄</span>

- [react](https://facebook.github.io/react/)(基础开发mvc框架)
- [react-router](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react路由，4.x的版本，如果还使用3.x的版本，请切换分支（ps:分支不再维护）</span>)
- [redux](https://redux.js.org/)(基础用法，但是封装了通用action和reducer)
- [antd](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的react ui组件框架</span>)
- [axios](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http请求模块</span>)
- [echarts-for-react](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">可视化图表，别人基于react对echarts的封装，足够用了</span>)
- [recharts](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">另一个基于react封装的图表，个人觉得是没有echarts好用</span>)
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">别人基于react的富文本封装，如果找到其他更好的可以替换</span>)
- [animate.css](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css动画库</span>)
- [react-loadable](https://github.com/jamiebuilds/react-loadable)(代码拆分，按需加载，预加载)
- 其他小细节省略

### 代码目录
```js
+-- dist/                                  ---打包的文件目录
+-- config/                                 ---webpack的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/                                 
|   --- favicon.ico							---站点ico文件
|   --- index.html							---首页入口html文件
|   --- manifest.json						---站点manifest配置
|   --- theme.less							---站点全局样式配置
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- animation                      ---动画组件
|   |    |    --- ...   
|   |    +-- charts                         ---图表组件
|   |    |    --- ...   
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...   
|   |    +-- forms                          ---表单组件
|   |    |    --- ...   
|   |    +-- pages                          ---页面组件
|   |    |    --- ...   
|   |    +-- tables                         ---表格组件
|   |    |    --- ...   
|   |    +-- ui                             ---ui组件
|   |    |    --- ...   
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json                            ---依赖库配置文件
```
### 安装运行
##### 1.下载或克隆项目源码
##### 2.npm安装相关包文件(国内建议增加淘宝镜像源，不然很慢，你懂的😁)
> 有些老铁遇到运行时报错，首先确定下是不是最新稳定版的nodejs和npm（推荐使用6.10/11.0），切记不要用cnpn

```js
npm install --registry=https://registry.npm.taobao.org
```
##### 3.启动项目
```js
npm run dev
```
##### 4.打包项目
```js
npm run build
```

### 约定

##### 主题颜色
- 1.主题颜色在public/theme.less中修改
