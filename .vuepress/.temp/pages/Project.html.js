import comp from "D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/Project.html.vue"
const data = JSON.parse("{\"path\":\"/Project.html\",\"title\":\"\",\"lang\":\"ZH-cn\",\"frontmatter\":{\"sidebar\":false},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"Project.md\",\"excerpt\":\"<p>有待更新……</p>\\n\"}")
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
