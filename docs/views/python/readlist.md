---
title: Read list
date: 2019-04-09
tags:
 - 
categories:
 - python
---

::: tip 介绍
1. 这是一个例子；<br>
:::
```bash
import os

f = open('1.txt', 'r')
line = f.readline().strip()
linestr = line.split("'")
for item in linestr:
    print(item)
    os.system(":" + item)

```
