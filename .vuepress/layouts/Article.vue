<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const articles = useBlogType('article')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="articles.items" />
      </main>
      <footer class="footer"> &copy; Nuage</footer>
    </template>
  </ParentLayout>
</template>
<style>
.footer {
  
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>