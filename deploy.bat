git add .

git commit -m 'updated'

git push origin main

git subtree push --prefix  .vuepress/dist/ origin gh-pages
