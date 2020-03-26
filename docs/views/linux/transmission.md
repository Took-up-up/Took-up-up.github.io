---
title: Transmission下载器
date: 2019-04-09
tags:
 - bt
categories:
 - linux
---

::: tip
Transmission带web界面的下载工具
:::
## 安装
```bash
yum install transmission-daemon transmission-cli -y
```
### 配置
**vim /var/lib/transmission/.config/transmission-daemon/settings.json**
```bash
#主要修改以下参数
{
"download-dir": "/down", #下载目录的绝对路径
"incomplete-dir": "/down/temp", #临时文件路径
"rpc-authentication-required": true, #启用验证
"rpc-bind-address": "0.0.0.0", #允许任何IP通过RPC协议访问
"rpc-enabled": true, #允许通过RPC访问
"rpc-password": "123456", #RPC验证密码（保存并启动后daemon会计算并替换为HASH值以增加安全性）
"rpc-port": 9091, #RPC端口
"rpc-username": "transmission", #RPC验证用户名
"rpc-whitelist": "*", #RPC访问白名单
"rpc-whitelist-enabled": false, #关闭白名单功能以便公网访问
}
```
### 启动
```bash
systemctl start transmission-daemon
```
### web界面
http://your.domain.name:9091/transmission/web/
