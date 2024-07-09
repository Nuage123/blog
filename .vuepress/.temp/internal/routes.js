export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/AboutPage.html", { loader: () => import(/* webpackChunkName: "AboutPage.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/AboutPage.html.js"), meta: {"title":""} }],
  ["/ContactMe.html", { loader: () => import(/* webpackChunkName: "ContactMe.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/ContactMe.html.js"), meta: {"title":""} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/Projects.html", { loader: () => import(/* webpackChunkName: "Projects.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/Projects.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"我开博客啦","author":"","date":"2024-06-29T00:00:00.000Z","category":["日记"],"tag":[],"excerpt":"\n<p>框架是使用Vuepress搭建的，然后首页是用自定义的\n本来打包之后路径出现了问题，现在终于成功啦\n注意要把base\nbase:\"/blog/\",\n然后部署了两天，终于部署成功啦！</p>\n<h4>可喜可贺，可喜可贺</h4>\n"},"title":"我开博客啦"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "posts_article2.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"_blog":{"title":"使用VuePress搭建BLOG","author":"","date":"2024-07-09T00:00:00.000Z","category":["项目"],"tag":[],"excerpt":"\n<p>搭建个人站的想法其实已经有了很久，第一次买<strong>Angela Yu</strong>的<strong color=\"blue\">Web开发</strong>的时候已经有这个想法，当时有用html搭建本人的第一个非常简洁的个人站。因为之前学习了Vue框架，所以这次选择的是<strong>Vuepress</strong>搭建。</p>\n<h2>📓Vuepress介绍</h2>\n<p>VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。</p>"},"title":"使用VuePress搭建BLOG"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/%E6%97%A5%E8%AE%B0/", { loader: () => import(/* webpackChunkName: "category_日记_index.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/category/日记/index.html.js"), meta: {"title":"Category 日记"} }],
  ["/category/%E9%A1%B9%E7%9B%AE/", { loader: () => import(/* webpackChunkName: "category_项目_index.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/category/项目/index.html.js"), meta: {"title":"Category 项目"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
]);
