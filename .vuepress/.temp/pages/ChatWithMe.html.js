import comp from "D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/ChatWithMe.html.vue"
const data = JSON.parse("{\"path\":\"/ChatWithMe.html\",\"title\":\"\",\"lang\":\"ZH-cn\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"ChatWithMe.md\",\"excerpt\":\"\"}")
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