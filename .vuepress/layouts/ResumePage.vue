<script setup>
// import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
// import ArticleList from '../components/ArticleList.vue'


</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
     <div class="container">
        <h1>简历</h1>
        <div class="intro">
        <h2>教育</h2>
        <p>2017-2021 山西大学 外国语学院 英语 学士</p>
        <p>2022-2024 北京大学 软件与微电子学院 软件工程 学士 </p>
        <h2>
            实践
        </h2>
        <p>2023.7-2023.10 感易智能 产品经理实习生</p>
        <p>2022.1-2022.2 海南恒俊文化有限公司 英语实习生</p>
        <p>……</p>
        <p>2023.9-2024.7 北京大学海外宣传办公室 记者</p>
        <p>2017.9-2018.9 山西大学外国语学院学生会 运营</p>
        <!-- <h2>项目</h2> -->
        <br>
        <!-- <h1>联系我</h1> -->

    </div>
     </div>
      </main>
    </template>
  </ParentLayout>
</template>

<style scoped>
.container{
    margin-top: 10%;
    text-align: center;
}
.container h2{
    text-align: left;
}
.intro p{
    text-align: left;
}
</style>