import comp from "D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/tag/碎碎念/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E7%A2%8E%E7%A2%8E%E5%BF%B5/\",\"title\":\"Tag 碎碎念\",\"lang\":\"ZH-cn\",\"frontmatter\":{\"title\":\"Tag 碎碎念\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"碎碎念\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
