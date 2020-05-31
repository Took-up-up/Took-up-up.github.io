---
title: Vim 解决粘贴缩进错乱方案
date: 2019-04-09
tags:
 - 
categories:
 - item
---
## paste 模式 
```bash
vim 进入 paste 模式
:set paste

在 paste 模式下正常插入代码格式

:set nopaste
退出 paste 模式
```
设置快捷键
```bash
set pastetoggle=<F12>
可在 set paste / set nopaste 之间切换
```
