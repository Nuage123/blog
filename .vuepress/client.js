import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import HomePage from './components/HomePage.vue'
import ResumePage from './layouts/ResumePage.vue'
import AboutPage from './layouts/AboutPage.vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import VueTyperPlugin from 'vue-typer/dist/vue-typer'

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    
    Article,
    Category,
    Tag,
    Timeline,
    HomePage,
    AboutPage,
    ResumePage
  },
  enhance: ({ app, router, siteData }) => {
    app.component("HomePage", HomePage);
    app.use(ElementPlus);
    
   
  },
})
