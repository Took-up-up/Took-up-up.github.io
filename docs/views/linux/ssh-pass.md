---
title: ssh免密登录
date: 2019-04-09
tags:
 - 
categories:
 - linux
---
## 原理
::: tip 
在客户端上生成一份公钥和一份私钥，将公钥以ssh-copy-id命令复制到服务端授权列表(authorized_keys)。当客户端带着公钥申请连接服务端时，服务端首先在authorized_keys中查找是否存在该公钥，如果存在则开始进行验证，否则就提示输入密码。首先生成一个随机字符串，利用对应公钥进行加密，然后返回给申请连接的服务器，申请连接服务器利用私钥进行解密，再将字符串返回给目标服务器完成验证，进行后续操作。
:::
![](https://took-up-up.gitee.io/pic/ssh-pass.png)
## Config
**生成密钥对**
```bash
ssh-keygen
# -t：此参数就是产生密钥的类型，默认是rsa，可以指定dsa | ecdsa | ed25519 | rsa | rsa1。
# -f：指定文件路径和文件名
# -N：提供一个新的密码，就是在登录的时候还是需要输入密码，为空就行。

.ssh/id_rsa	# 私钥
.ssh/authorized_keys	# 公钥
```
**将当前用户公钥发送到目标机器授权列表中**
```bash
ssh-copy-id root@x.x.x.x
# 输入密码
```
