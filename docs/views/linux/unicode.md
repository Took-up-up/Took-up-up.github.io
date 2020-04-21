---
title: Unicode
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip
Linux 下文件编码转换
:::

## 查看文件编码
```bash
file 文件名
enca 文件名
```
## 改变文件编码
```bash
iconv -f encoding -t encoding inputfile
# ex:
iconv –f ASCII –t UNICODE test.sh –o 1
```
