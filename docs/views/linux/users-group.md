---
title: LInux用户、组权限管理
date: 2019-04-09
tags:
 - 
categories:
 - linux
---


```bash
1.groupadd创建组
groupadd mygroup
创建系统组
groupadd -r mygroup
2.groupmod修改组属性
修改mygroup的gid
groupmod -g 1002 mygroup
修改mygroup的组名为mynewgroup
groupmod -n mynewgroup mygroup
3.groupdel 删除组
groupdel mynewgroup
4.useradd myuser创建用户
5.userdel myuser删除用户
6.usermod更改用户属性
-u 修改uid
-g 修改所属基本组
-a 追加新的附加组
-l 修改用户登入名
usermod -G seal seal
把seal的主要组改为seal
usermod -a -G root seal
把seal添加进root组中
7.密码管理
passwd USERNAME
-d 清除用户密码(root用户)
8.用户和组可在/etc/group 和/etc/gshadow中看到(Centos 7.2)还有/etc/passwd

```
