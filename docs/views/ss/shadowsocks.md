---
title: Shadowsocks install
date: 2019-04-09
tags:
 - 
categories:
 - ss
---

::: tip 
Shadowsocks
:::
## Server
### Install
```bash
pip3 install --upgrade git+https://github.com/shadowsocks/shadowsocks.git@master
```

### Config
```bash
vim /etc/shadowsocks/server.json

{ 
   "server":"x.x.x.x", 
   "server_port":xx, 
   "local_address": "127.0.0.1", 
   "local_port":1080, 
   "password":"xxx",
   "timeout":300, 
   "method":"aes-256-cfb", 
   "fast_open": false
}
```
### Run
```bash
ssserver -c /etc/shadowsocks/server.json &
```

## Client
### Linux
```bash
vim /etc/shadowsocks/client.json

{
"server":"x.x.x.x",   		# server ip
"server_port":xx,			# server 端口
"local_address": "127.0.0.1",	# client连接成功后本地生成一个socks5服务端127.0.0.1 / 0.0.0.0
"local_port":xxxx,			# socks端口
"password":"xxxx",			# server passwd
"timeout":300,
"method":"aes-256-gcm",		# server 加密方式
"fast_open": false,
"workers": 1
}

# 启动
sslocal -c /etc/shadowsocks/client.json &
```

### Windows
[Download](https://github.com/shadowsocks/shadowsocks-windows/releases?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article)
### Android
[Download](https://github.com/shadowsocks/shadowsocks-android/releases?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article)

## TEST
```bash
http://httpbin.org/ip
```
