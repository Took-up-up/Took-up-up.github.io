---
title: Linux新建用户登入报错
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip
新建用户admin
:::

```bash
1.root用户下对admin用户授权目录：
mkdir /home/admin
chown -R admin.admin /home/admin
将/etc/skel目录下面的.bash_profile,.bashrc,.bash_logout复制到/home/admin

cp /etc/skel/{.bash_profile,.bashrc,.bash_logout} /home/admin

2.bashrc
在当前目录下新建.bashrc文件：
# touch ~/.bashrc
# vim ~/.bashrc
 
并输入以下数据
# .bashrc
 
# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
# User specific aliases and functions

source以下使得其生效(临时生效)：
# source ~/.bashrc
```
