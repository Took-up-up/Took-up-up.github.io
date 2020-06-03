---
title: Aria2c + AriaNG
date: 2019-04-09
tags:
 - bt
categories:
 - linux
---

::: tip 介绍
1. aria2c 多线程支持 磁力链接，BT种子 
2. ariaNg web管理界面(支持中文)
:::
## aria2c
### install
```bash
aria2(磁力链接，BT种子)
aria2c安装
1.yum install aria2 -y
2.wget https://github.com/aria2/aria2/releases/download/release-1.35.0/aria2-1.35.0.tar.gz
tar -zxvf aria2-1.35.0.tar.gz && cd aria2-1.35.0
./configure && make && make install

# 配置
mkdir /etc/aria2/ && touch aria2.conf

enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
rpc-listen-port=6800

dir=/data/
check-certificate=false

# 启动
aria2c --conf-path=/etc/aria2/aria2.conf

```
## AriaNg
### install
```bash
wget https://github.com/mayswind/AriaNg/releases/download/1.1.4/AriaNg-1.1.4.zip
unzip AriaNg-1.1.4.zip
解压后放入web目录即可访问
```
