---
title: Linux挂载新分区
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
linux 挂载新分区
:::

```bash
1.格式化新分区
df -h

fidsk -l
to find ..

fdisk /dev/xxx
分区

n
新增分区(1-4)
4

First cylinder(2611-7832,default 2611),默认回车(最小)
Last cylinder or +size or +sizeK(2611-7832,default 7832),默认回车(最大)

p
打印分区表

w
保存退出

reboot

fdisk -l

mkfs.ext4 /dev/sda4
# 格式化为ext4格式
2.挂载分区
mount /dev/sda4 /data
# 挂载为data目录
```

