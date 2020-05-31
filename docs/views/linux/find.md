---
title: Find 常用参数
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
1. 这是一个例子；<br>
2.. 你可以打开 [ex](ex)
:::
语法:
find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} \;
```bash
find ./ -name "*"
# 根据文件名搜索
find ./ -type
# 根据文件类型搜索 f:一般文件 d:目录 c:字型装置文件 b:区块装置文件 p:具名贮列 f:一般文件 l:符号连结 s:socket
find ./ -mmin
# 单位分钟 -5:5分钟之内 +5:5分钟之前 5:5正好5分钟
find ./ -mtime
# 单位天 同上
find ./ -size 
# 文件大小 0:大小为0 
find ./ -maxdepth 2 -name "*"
# 查找文件夹深度为2
```
```bash
find ./* -name "*.sh" | xarge rm -rf 
find ./* -name "*.sh" -exec rm -rf {} \;

```
