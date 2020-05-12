---
title: hexo install
date: 2019-09-28
tags:
 - blog
categories:
 - linux
---

## nvm install (Nodejs版本管理器)
git clone git://github.com/creationix/nvm.git
echo "source ~/nvm/nvm.sh" >> ~/.bashrc
## nvm 换源
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
source ~/.bashrc

## npm install

nvm install 8	#版本
nvm ls
nvm alias default vxxx

## npm 换源 
npm set registry https://registry.npm.taobao.org/
npm config list


## nrm install(npm源管理器 可选)
```bash
npm install nrm -g --save	#registry管理
nrm ls	#查看可用源	
nrm current	#查看当前源
nrm use taobao	#切换到淘宝源
nrm add	qihoo http://registry.npm.360.org	#添加源
nrm test npm	#测试下载速度
nrm del qihoo	#删除源
```
**hexo install**
```bash
npm install hexo-cli -g		##  安装hexo-cli
hexo init xxx.github.io		##  创建bolg
cd xxx.github.io
#更换blog主题(可选)
git clone https://github.com/iissnan/hexo-theme-next themes/next

vim _config.yml

title: xxx #你博客的名字
author: xxx #你的名字
language: zh-Hans #语言 中文
theme: next #刚刚安装的主题名称
deploy:
type: git #使用Git 发布
repo: https://github.com/username/username.github.io.git # 刚创建的Github仓库

#主题配置文件在username.github.io/themes/next/_config.yml

#写文章
echo 'first' > username.github.io/source/_posts/First.md
```
## git管理工具
npm install hexo-deployer-git --save
## hexo run
hexo s		#启动

hexo clean && hexo g && hexo d	#生成静态文件


