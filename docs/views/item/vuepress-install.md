---
title: vuepress
date: 2019-09-26
tags:
 - blog
categories:
 - linux
---
## Scripts

**vuepress-install.sh**

```bash
#!/bin/bash

mkdir -p /data/git && cd /data/git
git clone git://github.com/creationix/nvm.git
echo "source /data/git/nvm/nvm/nvm.sh" >> /root/.bashrc
echo "export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node" >> /etc/profile
source /root/.bashrc && source /etc/profile
//nvm install
nvm install 8 && npm set registry https://registry.npm.taobao.org/
//npm install
cd /data && mkdir blog
npx vuepress-theme-reco-cli init blog	#vuepress install
cd blog && npm install
npm run dev
npm run build
```

