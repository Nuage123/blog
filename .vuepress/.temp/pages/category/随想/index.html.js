import comp from "D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/category/随想/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/%E9%9A%8F%E6%83%B3/\",\"title\":\"Category 随想\",\"lang\":\"ZH-cn\",\"frontmatter\":{\"title\":\"Category 随想\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"随想\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
