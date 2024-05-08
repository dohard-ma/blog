#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
date=$(date -u +"%Y-%m-%d" -d "+8 hours")
git commit -m "🚀 Deployed on $date"


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
git push -f git@github.com:duzhixing001/duzhixing001.github.io.git master:gh-pages

cd -
