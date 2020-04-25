---
title: PowerShell 匹配文件
date: 2019-04-09
tags:
 - 
categories:
 - windows
---

::: tip
Win 下`查找`命令,类似于 Linux下的 find
:::
**ex**
```powershell
Get-ChildItem -Recurse -Include *.log | Remove-Item -Recurse
dir *.log | Remove-Item -Recurse
# 匹配文件并删除
*.log *.xlog *.mmap2 *.tlg 
gaal/log/
```
