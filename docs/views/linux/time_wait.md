---
title: TIME_WAIT队列堵塞
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 
当出现大量TIME_WAIT系统做的调整
:::
## 查看TIME_WAIT的数量
```bash
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```
## 出现大量的TIME_WAIT时的操作
**vim /etc/sysctl.conf**
```bash
net.ipv4.tcp_syncookies = 1	# 开启SYN Cookies,当出现SYN等待队列溢出时,启用cookies来处理,可防范少量SYN攻击,默认为0,表示关闭
net.ipv4.tcp_tw_reuse = 1	# 开启重用,允许将TIME-WAIT sockets重新用于新的TCP连接，默认为0，表示关闭
net.ipv4.tcp_tw_recycle = 1	# 开启TCP连接中TIME-WAIT sockets的快速回收,默认为0,表示关闭
net.ipv4.tcp_fin_timeout = 30	# 修改默认的 TIMEOUT 时间,默认的时间是60s,改为30s
```
sysctl -p
生效
