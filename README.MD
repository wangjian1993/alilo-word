## 基于gulp搭建的前端自动化构建

**适用于中小型项目，快速构建前端项目框架。比如运营活动页，官网类，简单移动端项目，小demo测试等**

## 项目启动
```
// 常用命令
开发环境： npm run dev
生产环境： npm run build

// 单任务命令
执行压缩： gulp zip
编译页面： gulp html
编译脚本： gulp script
编译样式： gulp styles
语法检测： gulp eslint
压缩图片： gulp images
```
## 项目目录
```
├── README.md         # 项目说明
├── config            # gulp路径配置
├── dist              # 打包路径
|
├── gulpfile.js       # gulp配置文件
├── package.json      # 依赖包
|
├── src               # 项目文件夹
│   ├── include       # 公用页面引入
│   ├── index.html    # 首页
│   ├── static        # 资源文件夹
│   │   ├── images    # 图库
│   │   ├── js        # 脚本
│   │   └── styles    # 样式（scss, css）
│   └── views         # 页面
|
├── static            # 打包到dist中static文件中
└── webpack.config.js # webpack配置文件
```
## 使用Eslint 
config/index.js文件
```
useEslint: false // 是否启用eslint
```

## 使用webpack
* 集成webpack功能，可以自行选择

config/index.js文件
```
useWebpack: false // 是否启用webpack
```