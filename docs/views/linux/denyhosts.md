---
title: denyhosts IP限制
date: 2019-04-10
tags:
 - 
categories:
 - linux
---

::: tip 
当你的linux服务器暴露在外网当中时，服务器就极有可能会遭到互联网上的扫描软件进行扫描，然后试图连接ssh端口进行暴力破解（穷举扫描）。如果遇到这个问题，一款非常有用的工具DenyHosts可以阻止试图猜测SSH登录口令。DenyHosts是用Python写的一个程序，它会分析SSHD的日志文件（Redhat为/var/log/secure等），当发现同一IP在进行多次SSH密码尝试时就会记录IP到/etc/hosts.deny文件，从而达到自动屏蔽该IP的目的。
:::
## install
```bash
yum install epel-release -y
yum install denyhosts* -y
```
## conf
::: tip
vim /etc/denyhosts
:::
```bash
DENY_THRESHOLD_INVALID = 5
DENY_THRESHOLD_VALID = 10
DENY_THRESHOLD_ROOT = 1
#无效用户登入失败次数
#普通用户登入失败次数
#root用户登入失败次数
```
## run
```bash
systemctl restart denyhosts
#被禁用用户存放在/etc/hosts.deny
```
