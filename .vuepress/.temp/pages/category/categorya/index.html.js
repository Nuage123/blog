import comp from "D:/Develop/blog/vuepress-starter/docs/.vuepress/.temp/pages/category/categorya/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/categorya/\",\"title\":\"Category CategoryA\",\"lang\":\"ZH-cn\",\"frontmatter\":{\"title\":\"Category CategoryA\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"CategoryA\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
