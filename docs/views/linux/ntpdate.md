---
title: Linux网络同步系统时间
date: 2019-04-09
tags:
 - 
categories:
 - linux
---
```bash
timedatectl status #查看当前时区状态
timedatectl set-timezone Asia/Shanghai	#更改时区

yum install ntpdate -y
ntpdate time.windows.com	#同步时间
```
