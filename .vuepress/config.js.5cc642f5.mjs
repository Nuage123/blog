// docs/.vuepress/config.js
import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { path } from "@vuepress/utils";
import VueTyperPlugin from "vue-typer";
var __vite_injected_original_dirname = "D:/Develop/blog/vuepress-starter/docs/.vuepress";
var config_default = defineUserConfig({
  lang: "ZH-cn",
  title: "My Blog",
  description: "My first VuePress Site",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: [
      {
        text: "\u9996\u9875",
        link: "/"
      },
      {
        text: "\u6587\u7AE0",
        link: "/article/"
      },
      {
        text: "Category",
        link: "/category/"
      },
      {
        text: "Tag",
        link: "/tag/"
      },
      {
        text: "Timeline",
        link: "/timeline/"
      }
    ]
  }),
  plugins: [
    "@vuepress/plugin-register-components",
    {
      componentsDir: path.resolve(__vite_injected_original_dirname, "./components")
    },
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) => filePathRelative ? filePathRelative.startsWith("posts/") : false,
      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt: (
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string" ? frontmatter.excerpt : data?.excerpt || ""
        )
      }),
      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) => !frontmatter.home && frontmatter.excerpt !== false && typeof frontmatter.excerpt !== "string",
      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "Categories",
            sidebar: false
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false
          })
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false
          })
        }
      ],
      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky;
            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1;
            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;
            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;
            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          }
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) => new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "Timeline",
            sidebar: false
          })
        }
      ],
      hotReload: true
    })
  ],
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovRGV2ZWxvcC9ibG9nL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldmVsb3BcXFxcYmxvZ1xcXFx2dWVwcmVzcy1zdGFydGVyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGV2ZWxvcC9ibG9nL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgYmxvZ1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tYmxvZydcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuXG5pbXBvcnQgIHtwYXRofSAgZnJvbSAnQHZ1ZXByZXNzL3V0aWxzJ1xuaW1wb3J0IFZ1ZVR5cGVyUGx1Z2luIGZyb20gJ3Z1ZS10eXBlcidcbi8vIFZ1ZS51c2UoVnVlVHlwZXJQbHVnaW4pXG4vLyBpbXBvcnQgeyBtZEVuaGFuY2VQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLW1kLWVuaGFuY2VcIjtcbi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbi8vIGNvbnN0ICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gPSAoJ0B2dWVwcmVzcy9wbHVnaW4tcmVnaXN0ZXItY29tcG9uZW50cycpXG5cbi8vIGNvbnN0IGxvY2FsVGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJylcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBsYW5nOiAnWkgtY24nLFxuICBcblxuICB0aXRsZTogJ015IEJsb2cnLFxuICBkZXNjcmlwdGlvbjogJ015IGZpcnN0IFZ1ZVByZXNzIFNpdGUnLFxuXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGxvZ286ICdodHRwczovL3Z1ZWpzLnByZXNzL2ltYWdlcy9oZXJvLnBuZycsXG5cbiAgICBuYXZiYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OTk5Nlx1OTg3NScsXG4gICAgICAgIGxpbms6ICcvJyxcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjU4N1x1N0FFMCcsXG4gICAgICAgIGxpbms6ICcvYXJ0aWNsZS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NhdGVnb3J5JyxcbiAgICAgICAgbGluazogJy9jYXRlZ29yeS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RhZycsXG4gICAgICAgIGxpbms6ICcvdGFnLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVGltZWxpbmUnLFxuICAgICAgICBsaW5rOiAnL3RpbWVsaW5lLycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuXG4gIHBsdWdpbnM6IFtcbiAgJ0B2dWVwcmVzcy9wbHVnaW4tcmVnaXN0ZXItY29tcG9uZW50cycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cycpXG4gICAgICAgICAgICB9LFxuICAgIFxuICAgIGJsb2dQbHVnaW4oe1xuICAgICAgLy8gT25seSBmaWxlcyB1bmRlciBwb3N0cyBhcmUgYXJ0aWNsZXNcbiAgICAgIGZpbHRlcjogKHsgZmlsZVBhdGhSZWxhdGl2ZSB9KSA9PlxuICAgICAgICBmaWxlUGF0aFJlbGF0aXZlID8gZmlsZVBhdGhSZWxhdGl2ZS5zdGFydHNXaXRoKCdwb3N0cy8nKSA6IGZhbHNlLFxuXG4gICAgICAvLyBHZXR0aW5nIGFydGljbGUgaW5mb1xuICAgICAgZ2V0SW5mbzogKHsgZnJvbnRtYXR0ZXIsIHRpdGxlLCBkYXRhIH0pID0+ICh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBhdXRob3I6IGZyb250bWF0dGVyLmF1dGhvciB8fCAnJyxcbiAgICAgICAgZGF0ZTogZnJvbnRtYXR0ZXIuZGF0ZSB8fCBudWxsLFxuICAgICAgICBjYXRlZ29yeTogZnJvbnRtYXR0ZXIuY2F0ZWdvcnkgfHwgW10sXG4gICAgICAgIHRhZzogZnJvbnRtYXR0ZXIudGFnIHx8IFtdLFxuICAgICAgICBleGNlcnB0OlxuICAgICAgICAgIC8vIFN1cHBvcnQgbWFudWFsbHkgc2V0IGV4Y2VycHQgdGhyb3VnaCBmcm9udG1hdHRlclxuICAgICAgICAgIHR5cGVvZiBmcm9udG1hdHRlci5leGNlcnB0ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBmcm9udG1hdHRlci5leGNlcnB0XG4gICAgICAgICAgICA6IGRhdGE/LmV4Y2VycHQgfHwgJycsXG4gICAgICB9KSxcblxuICAgICAgLy8gR2VuZXJhdGUgZXhjZXJwdCBmb3IgYWxsIHBhZ2VzIGV4Y2VycHQgdGhvc2UgdXNlcnMgY2hvb3NlIHRvIGRpc2FibGVcbiAgICAgIGV4Y2VycHRGaWx0ZXI6ICh7IGZyb250bWF0dGVyIH0pID0+XG4gICAgICAgICFmcm9udG1hdHRlci5ob21lICYmXG4gICAgICAgIGZyb250bWF0dGVyLmV4Y2VycHQgIT09IGZhbHNlICYmXG4gICAgICAgIHR5cGVvZiBmcm9udG1hdHRlci5leGNlcnB0ICE9PSAnc3RyaW5nJyxcblxuICAgICAgY2F0ZWdvcnk6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICBnZXR0ZXI6IChwYWdlKSA9PiBwYWdlLmZyb250bWF0dGVyLmNhdGVnb3J5IHx8IFtdLFxuICAgICAgICAgIGxheW91dDogJ0NhdGVnb3J5JyxcbiAgICAgICAgICBpdGVtTGF5b3V0OiAnQ2F0ZWdvcnknLFxuICAgICAgICAgIGZyb250bWF0dGVyOiAoKSA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6ICdDYXRlZ29yaWVzJyxcbiAgICAgICAgICAgIHNpZGViYXI6IGZhbHNlLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGl0ZW1Gcm9udG1hdHRlcjogKG5hbWUpID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogYENhdGVnb3J5ICR7bmFtZX1gLFxuICAgICAgICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0YWcnLFxuICAgICAgICAgIGdldHRlcjogKHBhZ2UpID0+IHBhZ2UuZnJvbnRtYXR0ZXIudGFnIHx8IFtdLFxuICAgICAgICAgIGxheW91dDogJ1RhZycsXG4gICAgICAgICAgaXRlbUxheW91dDogJ1RhZycsXG4gICAgICAgICAgZnJvbnRtYXR0ZXI6ICgpID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogJ1RhZ3MnLFxuICAgICAgICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaXRlbUZyb250bWF0dGVyOiAobmFtZSkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiBgVGFnICR7bmFtZX1gLFxuICAgICAgICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgICB0eXBlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdhcnRpY2xlJyxcbiAgICAgICAgICAvLyBSZW1vdmUgYXJjaGl2ZSBhcnRpY2xlc1xuICAgICAgICAgIGZpbHRlcjogKHBhZ2UpID0+ICFwYWdlLmZyb250bWF0dGVyLmFyY2hpdmUsXG4gICAgICAgICAgbGF5b3V0OiAnQXJ0aWNsZScsXG4gICAgICAgICAgZnJvbnRtYXR0ZXI6ICgpID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogJ0FydGljbGVzJyxcbiAgICAgICAgICAgIHNpZGViYXI6IGZhbHNlLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIFNvcnQgcGFnZXMgd2l0aCB0aW1lIGFuZCBzdGlja3lcbiAgICAgICAgICBzb3J0ZXI6IChwYWdlQSwgcGFnZUIpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlQS5mcm9udG1hdHRlci5zdGlja3kgJiYgcGFnZUIuZnJvbnRtYXR0ZXIuc3RpY2t5KVxuICAgICAgICAgICAgICByZXR1cm4gcGFnZUIuZnJvbnRtYXR0ZXIuc3RpY2t5IC0gcGFnZUEuZnJvbnRtYXR0ZXIuc3RpY2t5XG5cbiAgICAgICAgICAgIGlmIChwYWdlQS5mcm9udG1hdHRlci5zdGlja3kgJiYgIXBhZ2VCLmZyb250bWF0dGVyLnN0aWNreSkgcmV0dXJuIC0xXG5cbiAgICAgICAgICAgIGlmICghcGFnZUEuZnJvbnRtYXR0ZXIuc3RpY2t5ICYmIHBhZ2VCLmZyb250bWF0dGVyLnN0aWNreSkgcmV0dXJuIDFcblxuICAgICAgICAgICAgaWYgKCFwYWdlQi5mcm9udG1hdHRlci5kYXRlKSByZXR1cm4gMVxuICAgICAgICAgICAgaWYgKCFwYWdlQS5mcm9udG1hdHRlci5kYXRlKSByZXR1cm4gLTFcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgbmV3IERhdGUocGFnZUIuZnJvbnRtYXR0ZXIuZGF0ZSkuZ2V0VGltZSgpIC1cbiAgICAgICAgICAgICAgbmV3IERhdGUocGFnZUEuZnJvbnRtYXR0ZXIuZGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3RpbWVsaW5lJyxcbiAgICAgICAgICAvLyBPbmx5IGFydGljbGUgd2l0aCBkYXRlIHNob3VsZCBiZSBhZGRlZCB0byB0aW1lbGluZVxuICAgICAgICAgIGZpbHRlcjogKHBhZ2UpID0+IHBhZ2UuZnJvbnRtYXR0ZXIuZGF0ZSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICAgICAgLy8gU29ydCBwYWdlcyB3aXRoIHRpbWVcbiAgICAgICAgICBzb3J0ZXI6IChwYWdlQSwgcGFnZUIpID0+XG4gICAgICAgICAgICBuZXcgRGF0ZShwYWdlQi5mcm9udG1hdHRlci5kYXRlKS5nZXRUaW1lKCkgLVxuICAgICAgICAgICAgbmV3IERhdGUocGFnZUEuZnJvbnRtYXR0ZXIuZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIGxheW91dDogJ1RpbWVsaW5lJyxcbiAgICAgICAgICBmcm9udG1hdHRlcjogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGltZWxpbmUnLFxuICAgICAgICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgaG90UmVsb2FkOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLGtCQUFrQjtBQUN2VixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG1CQUFtQjtBQUU1QixTQUFTLFlBQVk7QUFDckIsT0FBTyxvQkFBb0I7QUFOM0IsSUFBTSxtQ0FBbUM7QUFhekMsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFHTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYixPQUFPLGFBQWE7QUFBQSxJQUNsQixNQUFNO0FBQUEsSUFFTixRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUVBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFD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
