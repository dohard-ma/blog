#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
echo 'dohard.cn' > CNAME

git init
git add -A
date=$(date -u +"%Y-%m-%d")
git commit -m "🚀 Deployed on $date"


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
git push -f git@github.com:dohard-ma/dohard-ma.github.io.git master:gh-pages

cd -
