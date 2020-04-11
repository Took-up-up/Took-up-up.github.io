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
wget http://mirrors.aliyun.com/repo/Centos-7.repo
# 阿里源
wget http://mirrors.aliyun.com/repo/epel-7.repo
# 阿里拓展源
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
# 网易源
# mv CentOS7-Base-163.repo CentOS-Base.repo
yum clean all && yum makecache	# 重新生成缓存
```

