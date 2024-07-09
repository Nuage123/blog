<template><div><h1 id="使用vuepress搭建blog" tabindex="-1"><a class="header-anchor" href="#使用vuepress搭建blog"><span>使用<font color="green">VuePress</font>搭建BLOG</span></a></h1>
<p>搭建个人站的想法其实已经有了很久，第一次买<strong>Angela Yu</strong>的<strong color="blue" >Web开发</strong>的时候已经有这个想法，当时有用html搭建本人的第一个非常简洁的个人站。因为之前学习了Vue框架，所以这次选择的是<strong>Vuepress</strong>搭建。</p>
<h2 id="📓vuepress介绍" tabindex="-1"><a class="header-anchor" href="#📓vuepress介绍"><span>📓Vuepress介绍</span></a></h2>
<p>VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。</p>
<h2 id="🫱快速上手" tabindex="-1"><a class="header-anchor" href="#🫱快速上手"><span>🫱快速上手</span></a></h2>
<p>指路官网快速上手教程👉<a href="https://vuepress.vuejs.org/zh/guide/getting-started.html">快速上手</a></p>
<p>创建项目有两种方式：</p>
<ul>
<li>手动创建</li>
<li>命令行创建</li>
</ul>
我采用的是命令行创建
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm init vuepress [你的项目名称]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="部分目录介绍" tabindex="-1"><a class="header-anchor" href="#部分目录介绍"><span>部分目录介绍：</span></a></h3>
<h4 id="readme" tabindex="-1"><a class="header-anchor" href="#readme"><span>README</span></a></h4>
<p>默认首页。具体设置请看👉<a href="https://vuepress.vuejs.org/zh/guide/getting-started.html">快速上手</a>的font-fomatter部分
如果不需要默认布局，在font-fomatter中添加layout项。这里的HomePage是我在docs/components文件夹中自定义的Vue组件，且在client.js中注册（注册情况看下文）。这时README会显示HomePage的布局，而非默认布局。其他页面同理。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">---</span>
<span class="line">home: true</span>
<span class="line">layout: HomePage</span>
<span class="line">heroImage: https://vuejs.press/images/hero.png</span>
<span class="line">……</span>
<span class="line">---</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docs-vuepress" tabindex="-1"><a class="header-anchor" href="#docs-vuepress"><span>docs/.vuepress</span></a></h4>
<h5 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts"><span>layouts</span></a></h5>
<p>存放布局文件</p>
<h5 id="public" tabindex="-1"><a class="header-anchor" href="#public"><span>public</span></a></h5>
<p>一些静态资源,图片可以放在public/images里</p>
<h5 id="client-js" tabindex="-1"><a class="header-anchor" href="#client-js"><span>client.js</span></a></h5>
<p>一些组件和引入的库需要在这里注册。用UI库ElementPlus（适用于Vue3）为例:
1.安装elementui</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install element-plus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.在client.js中引入和注册</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import ElementPlus from 'element-plus';</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">export default defineClientConfig({</span>
<span class="line"> </span>
<span class="line">  layouts: {</span>
<span class="line">    // 这里可以引用你自定义的布局，记得也需要在上方引入</span>
<span class="line">  },</span>
<span class="line">  enhance: ({ app, router, siteData }) => {</span>
<span class="line">    app.use(ElementPlus);</span>
<span class="line">  },</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="config-js" tabindex="-1"><a class="header-anchor" href="#config-js"><span>config.js</span></a></h5>
<p>设置文件。如果使用命令行创建项目，这里已经有许多内容。自己可以设置的：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"> //标题和描述</span>
<span class="line">  title: 'My Blog',</span>
<span class="line">  description: 'My first VuePress Site',</span>
<span class="line">  //💡注意一下这个地方，blog是之后github远程仓库的名称，必须要写对base的名称,不然部署之后找不到文件和格式！</span>
<span class="line">  base:"/blog/",</span>
<span class="line">  theme: defaultTheme({</span>
<span class="line">    //logo</span>
<span class="line">    logo: '/images/微信图片_20240627183836.jpg',</span>
<span class="line">    //导航栏，要写在导航栏的内容要在这里注册</span>
<span class="line">    navbar: [</span>
<span class="line">      {</span>
<span class="line">        text: '首页🏠',</span>
<span class="line">        link: '/',</span>
<span class="line">      },</span>
<span class="line">    {</span>
<span class="line">        text:'关于我👧',</span>
<span class="line">        link:'/AboutPage'</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  }),</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress会把docs文件夹下面的md文件自动变成页面，这里的/AboutPage页面就会转入一个叫作AboutPage的md文件。md文件的布局和其他设置方式请看上方README文件</p>
<h4 id="docs-post" tabindex="-1"><a class="header-anchor" href="#docs-post"><span>docs/post</span></a></h4>
<p>使用命令行创建之后会自动有一个post目录，要发表的文章的md文件存在这里，会自动出现在文章列表中</p>
<h2 id="🏠github部署" tabindex="-1"><a class="header-anchor" href="#🏠github部署"><span>🏠Github部署</span></a></h2>
<p>1.文件打包(默认已经创建github的repository)
💡config.js中一定要有</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">base:"/blog/"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>blog是你自己的github远程仓库名称</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm run docs:build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.初始化仓库</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">git init </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>3.上传文件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">git add .</span>
<span class="line">git commit -m 'updated'</span>
<span class="line">git push origin main</span>
<span class="line">//把打包好的dist文件夹上传到gh-pages</span>
<span class="line">git subtree push --prefix  .vuepress/dist/ origin gh-pages</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.点击Setting-Github Pages-选择src
选择gh-pages的/root</p>
<h2 id="部署效果-本站" tabindex="-1"><a class="header-anchor" href="#部署效果-本站"><span>部署效果（本站）</span></a></h2>
<p><img src="@source/posts/image.png" alt="alt text"></p>
<h4 id="碎碎念" tabindex="-1"><a class="header-anchor" href="#碎碎念"><span>碎碎念：</span></a></h4>
<p>在火车上写的比较匆忙，有些地方可能有些问题或者不够详细，等我停下来再进行补充🙇‍♀️🙇‍♀️🙇‍♀️</p>
</div></template>


