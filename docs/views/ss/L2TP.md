---
title: L2TP vpn
date: 2019-04-09
tags:
 - 
categories:
 - ss
---

::: tip
L2TP
:::
安装依赖
```bash
yum install -y make gcc gmp-devel xmlto bison flex xmlto libpcap-devel lsof vim-enhanced man
```
## openswan
### Install
```bash
yum install openswan -y
# 安装openswan(建立预分享密匙)
```
### Config
```bash
# 以下文件没有则新建
vim /etc/ipsec.d/xxx.conf

conn L2TP-PSK-NAT
    rightsubnet=vhost:%priv
    also=L2TP-PSK-noNAT
 
conn L2TP-PSK-noNAT
    authby=secret
    pfs=no
    auto=add
    keyingtries=3
    rekey=no
    ikelifetime=8h
    keylife=1h
    type=transport
    left=你的IP
    leftprotoport=17/1701
    right=%any
    rightprotoport=17/%any

# 配置预分享密匙
vim /etc/ipsec.secrets


IP地址  %any: PSK "预分享密匙"

以指定配置文件启动ipsec
ipsc start /etc/ipsec.conf

```
## PPP
### Install
```bash
# 安装ppp(管理接入账号)
yum install ppp
```
### Config
```bash
vim /etc/ppp/chap-secrets
# 建立连接账号
username *  password  *
# (格式要相同)
```
## xl2tpd
### Install
```bash
yum install xl2tpd(提供L2TP服务)
```
### Config
```bash
vim /etc/xl2tpd/xl2tpd.conf

[global]
ipsec saref = yes
listen-addr = 本机IP
[lns default]
ip range = 192.168.1.2-192.168.1.100
local ip = 192.168.1.1
refuse chap = yes
refuse pap = yes
require authentication = yes
ppp debug = yes
pppoptfile = /etc/ppp/options.xl2tpd
length bit = yes
```
```bash
vim /etc/ppp/options.xl2tpd

require-mschap-v2
ms-dns 8.8.8.8
ms-dns 8.8.4.4
asyncmap 0
auth
crtscts
lock
hide-password
modem
debug
name l2tpd
proxyarp
lcp-echo-interval 30
lcp-echo-failure 4
```
## Run
service xl2tpd start

此时设备接上后并不能访问Intelnet

## 转发配置
### 网卡转发
```bash
vim /etc/sysctl.conf

net.ipv4.ip_forward = 1
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.log_martians = 0
net.ipv4.conf.default.log_martians = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.icmp_ignore_bogus_error_responses = 1

sysctl -p 
# 应用当前规则
```

### iptable 转发配置
```bash
iptables -A INPUT -m policy --dir in --pol ipsec -j ACCEPT
iptables -A FORWARD -m policy --dir in --pol ipsec -j ACCEPT
iptables -t nat -A POSTROUTING -m policy --dir out --pol none -j MASQUERADE
iptables -A FORWARD -i ppp+ -p all -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A INPUT -m policy --dir in --pol ipsec -p udp --dport 1701 -j ACCEPT
iptables -A INPUT -p udp --dport 500 -j ACCEPT
iptables -A INPUT -p udp --dport 4500 -j ACCEPT
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE
```
