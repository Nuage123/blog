

<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'


// const about = useBlogType('about')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="about-wrapper">
          <h1>关于我</h1>
          
        
  
          <img src="../public/images/微信图片_20240627183836.jpg" alt="">
          <p style="font-size:small; opacity:calc(80%);">大概长这样</p>
          
          <div class="intro">
            <p>💬英语专业毕业，软件工程<a href="https://exwzs.chsi.com.cn/">第二学士学位</a>转码</p>
          
            <p>❤️INFP</p>

             
            
            <h2>技能</h2>
          
            <el-row class="skill-row" >
            <el-col :span="5" v-for="item in skils" :key="item.title" :offset="1">
          <el-card  :body-style="{ padding: '0px', height:auto}" shadow="hover" style="width: auto;height: 320px; margin:5px; border:0">
    <template #header class="temp"><p >{{ item.title }}</p><p style="opacity:calc(70%);">{{ item.proficiency }}</p></template>
    <img class="img"
     :src="item.pic"
      style="width: 100%"
    />
  </el-card>
  </el-col>
  </el-row>
  <!-- <h2>趣事</h2> -->
  <!-- <h2>爱好</h2>
  <ul>
     <li>半吊子语言学习爱好者，日语万年初心者👺</li>
     <li>写作</li>
  </ul> -->
          </div>
        </div>
      </main>
      <hr>
      <footer class="footer"> &copy; Nuage</footer>
    </template>
  </ParentLayout>
</template>
<script>
export default{
  data(){
    return {
      skils:[
      {
          "title":"英语",
          "proficiency":"专八",
          "pic": new URL("../public/images/english.png",import.meta.url)
        },
      {
          "title":"java",
          "proficiency":"熟悉",
          "pic": new URL("../public/images/java.png",import.meta.url)
        },
   
        {
          "title":"SpringBoot",
          "proficiency":"了解",
          "pic": new URL("../public/images/springBoot.png",import.meta.url)
        },
        {
          "title":"Vuejs",
          "proficiency":"了解",
          "pic": new URL("../public/images/vue.png",import.meta.url)
        },
        {
          "title":"Python",
          "proficiency":"了解",
          "pic": new URL("../public/images/python.png",import.meta.url)
        },
        {
          "title":"MySQL",
          "proficiency":"了解",
          "pic": new URL("../public/images/mysql.png",import.meta.url)
        },
      ],
      contact:[
      {
          "title":"小红书",
          "pic": new URL("../public/images/小红书.png",import.meta.url)
        },
        {
          "title":"Gitee",
          "pic": new URL("../public/images/Gitee-copy.png",import.meta.url)
        },
        {
          "title":"邮箱",
          "pic": new URL("../public/images/mailbox.png",import.meta.url)
        },
      ]
    }
  }
}
</script>

<style>
.about-wrapper{
  margin-top: 10%;
  text-align: center;
}
.about-wrapper h2{
  text-align: left;
}
.about-wrapper ul{
  text-align: left;
}
.footer {
  
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
