---
title: gpg
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip
1. gpg生成密钥步骤
2. gpg常用操作
:::
注: 加快生成速度, mv /dev/random /dev/random1 && ln -s /dev/urandom /dev/random
## 生成密钥
```bash
[admin /]~$ gpg --full-generate-key
gpg (GnuPG) 1.4.20; Copyright (C) 2015 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

请选择您要使用的密钥种类：
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (仅用于签名)
   (4) RSA (仅用于签名)
您的选择？ 
RSA 密钥长度应在 1024 位与 4096 位之间。
您想要用多大的密钥尺寸？(2048) 4096
您所要求的密钥尺寸是 4096 位
请设定这把密钥的有效期限。
         0 = 密钥永不过期
      <n>  = 密钥在 n 天后过期
      <n>w = 密钥在 n 周后过期
      <n>m = 密钥在 n 月后过期
      <n>y = 密钥在 n 年后过期
密钥的有效期限是？(0) 
密钥永远不会过期
以上正确吗？(y/n) y

您需要一个用户标识来辨识您的密钥；本软件会用真实姓名、注释和电子邮件地址组合
成用户标识，如下所示：
    “Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>”

真实姓名： admin
电子邮件地址： admin@qq.com
注释： github
您选定了这个用户标识：
    “Admin(github) <admin@qq.com>”

更改姓名(N)、注释(C)、电子邮件地址(E)或确定(O)/退出(Q)？ O
您需要一个密码来保护您的私钥。

我们需要生成大量的随机字节。这个时候您可以多做些琐事(像是敲打键盘、移动
鼠标、读写硬盘之类的)，这会让随机数字发生器有更好的机会获得足够的熵数。
....+++++

随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！
(还需要184字节)
+++++
我们需要生成大量的随机字节。这个时候您可以多做些琐事(像是敲打键盘、移动
鼠标、读写硬盘之类的)，这会让随机数字发生器有更好的机会获得足够的熵数。

随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！
(还需要231字节)
...+++++

随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！
(还需要170字节)
+++++
gpg: 密钥 2RT8HJ4U 被标记为绝对信任
公钥和私钥已经生成并经签名。

gpg: 正在检查信任度数据库
gpg: 需要 3 份勉强信任和 1 份完全信任，PGP 信任模型
gpg: 深度：0 有效性：  1 已签名：  0 信任度：0-，0q，0n，0m，0f，1u
pub   4096R/2RT8HJ4U 2019-09-20
      密钥指纹 = 3C00 AC7B 3D06 E22E AEDE  72B0 B28F ACA4 2EBC 87DF
uid                  Admin (github) <admin@qq.com>
sub   4096R/2RT8HJ4U 2019-09-20

gpg key已经生成
----------------------------------------------
# 后续操作
# 列出密钥
[admin /]~$ gpg --list-secret-keys --keyid-format LONG
# 最好制作一张撤销证书，用于密钥作废，请求外部公钥服务器撤销你的公钥
# 将二进制的公钥(私钥)导出为ASSCII码
# 上传公钥到公钥服务器。这里使用阮一峰的命令有一些问题，但可以正常工作
gpg --send-keys [用户ID]
# 生成用于公布的公钥指纹（用于他人校验）
gpg --fingerpint [用户ID]
密钥指纹 = 3C00 AC7B 3D06 E22E AEDE  72B0 B28F ACA4 2EBC 87DF
```
## 常用操作
### 创建密钥
gpg --full-generate-key

### 查看密钥
gpg -k

### 查看公钥
gpg --list-keys

### 查看私钥
gpg --list-secret-keys

### 导出公钥
gpg --armor --output public-key --export name

### 导出私钥
gpg --armor --output secret-key --export-secret-keys name

### 导入公钥
gpg --import public-key

### 导入私钥
gpg --import secret-key

### 删除公钥
gpg --delete-key keyID

### 删除私钥
gpg --delete-secret-key keyID

### 编辑
gpg --edit-key xx
