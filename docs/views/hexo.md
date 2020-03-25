---
title: hexo搭建
date: 2019-04-09
tags:
 - blog
categories:
 -
---

![hexo](https://img.shields.io/badge/hexo-4.0.1-green)

::: tip 介绍
1. 这是一个hexo主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br>
:::
**Server**
### 组件安装
**nvm/npm**

```bash
#使用nvm安装npm
mkdir -p /data/git && cd /data/git
git clone git://github.com/creationix/nvm.git
echo "source /data/git/nvm/nvm/nvm.sh" >> /root/.bashrc
echo "export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node" >> /etc/profile
#nvm使用国内源
source /root/.bashrc && source /etc/profile
nvm install 8 && npm set registry https://registry.npm.taobao.org/
#安装npm 并修改为国内源
```

**nrm管理工具(可选)**
```bash
npm install nrm -g --save	#registry管理
nrm ls			#查看可用源	
nrm current		#查看当前源
nrm use taobao	#切换到淘宝源
nrm add	qihoo http://registry.npm.360.org	#添加源
nrm test npm	#测试下载速度
nrm del qihoo	#删除源

```
## hexo安装
```bash
npm install hexo-cli -g
```
## 新建blog
```bash
hexo init blog
cd blog
#更换主题(可选)
git clone https://github.com/iissnan/hexo-theme-next themes/next
```
## 自定义配置
**vim blog/themes/next/_config.yml**
```bash
title: xxx #你博客的名字
author: xxx #你的名字
language: zh-Hans #语言 中文
theme: next #刚刚安装的主题名称
deploy:
type: git #使用Git 发布
repo: https://github.com/username/username.github.io.git # 刚创建的Github仓库
```
## Use
**hexo run**
```bash
hexo s		#启动
npm install hexo-deployer-git --save
hexo clean && hexo g && hexo d
```
