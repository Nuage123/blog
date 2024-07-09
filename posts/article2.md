---
date: 2024-07-09
category:
  - 项目


---
# 使用<font color="green">VuePress</font>搭建BLOG 

搭建个人站的想法其实已经有了很久，第一次买<strong>Angela Yu</strong>的<strong color="blue" >Web开发</strong>的时候已经有这个想法，当时有用html搭建本人的第一个非常简洁的个人站。因为之前学习了Vue框架，所以这次选择的是<strong>Vuepress</strong>搭建。

## 📓Vuepress介绍
VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。


## 🫱快速上手
指路官网快速上手教程👉<a href="https://vuepress.vuejs.org/zh/guide/getting-started.html">快速上手</a>

创建项目有两种方式：
<ul>
<li>手动创建</li>
<li>命令行创建</li>
</ul>
我采用的是命令行创建

```
npm init vuepress [你的项目名称]
```
### 部分目录介绍：
#### README
默认首页。具体设置请看👉<a href="https://vuepress.vuejs.org/zh/guide/getting-started.html">快速上手</a>的font-fomatter部分
如果不需要默认布局，在font-fomatter中添加layout项。这里的HomePage是我在docs/components文件夹中自定义的Vue组件，且在client.js中注册（注册情况看下文）。这时README会显示HomePage的布局，而非默认布局。其他页面同理。
```
---
home: true
layout: HomePage
heroImage: https://vuejs.press/images/hero.png
……
---
```
#### docs/.vuepress
##### layouts
存放布局文件
##### public 
一些静态资源,图片可以放在public/images里
##### client.js
一些组件和引入的库需要在这里注册。用UI库ElementPlus（适用于Vue3）为例:
1.安装elementui
```
npm install element-plus
```
2.在client.js中引入和注册
```
import ElementPlus from 'element-plus';
```
```
export default defineClientConfig({
 
  layouts: {
    // 这里可以引用你自定义的布局，记得也需要在上方引入
  },
  enhance: ({ app, router, siteData }) => {
    app.use(ElementPlus);
  },
})

```
##### config.js
设置文件。如果使用命令行创建项目，这里已经有许多内容。自己可以设置的：
```
 //标题和描述
  title: 'My Blog',
  description: 'My first VuePress Site',
  //💡注意一下这个地方，blog是之后github远程仓库的名称，必须要写对base的名称,不然部署之后找不到文件和格式！
  base:"/blog/",
  theme: defaultTheme({
    //logo
    logo: '/images/微信图片_20240627183836.jpg',
    //导航栏，要写在导航栏的内容要在这里注册
    navbar: [
      {
        text: '首页🏠',
        link: '/',
      },
    {
        text:'关于我👧',
        link:'/AboutPage'
      },
    ],
  }),

```
VuePress会把docs文件夹下面的md文件自动变成页面，这里的/AboutPage页面就会转入一个叫作AboutPage的md文件。md文件的布局和其他设置方式请看上方README文件

#### docs/post
使用命令行创建之后会自动有一个post目录，要发表的文章的md文件存在这里，会自动出现在文章列表中

## 🏠Github部署
1.文件打包(默认已经创建github的repository)
💡config.js中一定要有 
```
base:"/blog/"
```
blog是你自己的github远程仓库名称
```
npm run docs:build
```
2.初始化仓库
```
git init 
```
3.上传文件
```
git add .
git commit -m 'updated'
git push origin main
//把打包好的dist文件夹上传到gh-pages
git subtree push --prefix  .vuepress/dist/ origin gh-pages
```
4.点击Setting-Github Pages-选择src
选择gh-pages的/root


## 部署效果（本站）
![alt text](image.png)

#### 碎碎念：
在火车上写的比较匆忙，有些地方可能有些问题或者不够详细，等我停下来再进行补充🙇‍♀️🙇‍♀️🙇‍♀️