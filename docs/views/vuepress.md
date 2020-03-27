---
title: Vuepress搭建
date: 2019-04-09
tags:
 - blog
categories:
 - linux
---

![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip 介绍
1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br>
2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；<br>
:::

## 组件安装
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
## 新建blog
**初始化**
```bash
mkdir blog
npx vuepress-theme-reco-cli init blog
cd blog && npm install
```

## Use

**Build**

```bash
npm run build
# or
yarn build
```

**Server**

```bash
npm run dev
# or
yarn dev
```
## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)
