---
title: linux 更新源
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
更新 Centos 系统软件源
:::
```bash
cd /etc/yum.repos.d
wget http://mirrors.163.com/.help/CentOS6-Base-163.repo
mv CentOS7-Base-163.repo CentOS-Base.repo
yum clean all && yum makecache	# 重新生成缓存
```

