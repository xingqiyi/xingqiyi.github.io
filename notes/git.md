

##  git branch

- git branch 列出本地已经存在的分支
- git branch -a 列出本地分支和远程分支
- git branch -d <branch> 删除分支
- git push origin --delete dev 删除远程分支
1. git branch dev 创建分支
2. git checkout dev  切换分支
3. git push origin dev   需要切换到  dev 分支下 

## git diff

- git diff origin/master origin/dev    dev分支相对master分支的修改

## git merge

- git merge dev  在 master 分支下 merge dev 到 master

## git tag
```
git tag -a v1.4 -m 'my version 1.4'  添加标签
git push origin v1.5   标签推送到服务器
git push origin --tags 推送所有标签
```

## git flow

## git log

