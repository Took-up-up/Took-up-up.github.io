---
title: Vim 常用快捷键
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip 介绍
1. 正常模式：可以使用快捷键命令，或按:输入命令行。
2. 插入模式：可以输入文本，在正常模式下，按i、a、o等都可以进入插入模式。
3. 可视模式：正常模式下按v可以进入可视模式， 在可视模式下，移动光标可以选择文本。按V进入可视行模式， 总是整行整行的选中。ctrl+v进入可视块模式。
4. 替换模式：正常模式下，按R进入。
:::

## Install
```bash
yum intsall vim
```

## Config
设置缩进
```bash
set smartindent
set tabstop=4
set shiftwidth=4
set expandtab
set softtabstop=4
set pastetoggle=<F12>   # F12 进入粘贴模式,防止缩进错乱
```

## Run
```
vim -c cmd file: 在打开文件前，先执行指定的命令；
vim -r file: 恢复上次异常退出的文件；
vim -R file: 以只读的方式打开文件，但可以强制保存；
vim -M file: 以只读的方式打开文件，不可以强制保存；
vim -y num file: 将编辑窗口的大小设为num行；
vim + file: 从文件的末尾开始；
vim +num file: 从第num行开始；
vim +/string file: 打开file，并将光标停留在第一个找到的string上。
vim --remote file: 用已有的vim进程打开指定的文件。 如果你不想启用多个vim会话，这个很有用。但要注意， 如果你用vim，会寻找名叫VIM的服务器；如果你已经有一个gvim在运行了， 你可以用gvim --remote file在已有的gvim中打开文件。
```
```bash
d1G:删除首行到光标(1:行数)
dG :删除末行到光标
d/f:组合命令,删除光标到下一个f之间的内容
p小: 在光标之后粘贴
P大: 在光标之前粘贴

2dd: 删除(剪切)光标后2行
d[n]l: 删除(剪切)光标右边1(n)个字符。
d[n]h: 删除(剪切)
光标左边1(n)个字符。
d0: 删除（剪切）当前位置到行首的内容
daw和das：剪切一个词和剪切一个句子，即使光标不在词首和句首也没关系

[n]x: 剪切光标右边n个字符，相当于d[n]l。
[n]X: 剪切光标左边n个字符，相当于d[n]h。
y: 复制在可视模式下选中的文本。
yy or Y: 复制整行文本。
y[n]w: 复制一(n)个词。
y[n]l: 复制光标右边1(n)个字符。
y[n]h: 复制光标左边1(n)个字符。
y$: 从光标当前位置复制到行尾。
y0: 从光标当前位置复制到行首。
:m,ny<cr> 复制m行到n行的内容。
y1G或ygg: 复制光标以上的所有行。
yG: 复制光标以下的所有行。
yaw和yas：复制一个词和复制一个句子，即使光标不在词首和句首也没关系。

gg:移动至文件第一行
G :末行

ctrl+s	# 阻塞
ctrl+q	# 恢复
ctrl+w	# windows中 ctrl+backspace
```
