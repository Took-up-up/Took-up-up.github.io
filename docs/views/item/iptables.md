---
title: Iptables 
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
1. 这是一个例子；<br>
2.. 你可以打开 [ex](ex)
:::
## filter
```bash
filter :负责过滤，防火墙
nat : 负责网络地址转换
mangle : 拆解报文,修改报文,并重新封装
raw : 关闭nat表上启用的连接追踪机制

iptables -t xx -L
# 查看表 xx 全部规则(默认表 filter)

iptables -t xx -nvxL
# 查看详情


```
```bash
iptables -t filter -F INPUT -s x.x.x.x -j DROP	# x.x.x.x/16 支持网段和,连接
# 当报文的源地址IP在x,a内, 当报文经过INPUT链时就会被DROP掉
iptables -t filter -F INPUT ! -s x.x.x.x -j ACCEPT
# 当报文的源地址IP不是x,就接受报文, 在无其他规则下来自x的报文也会接受
iptables -t filter -F INPUT ! -s x.x.x.x -d c.c.c.c -j DROP
# 拒绝从x发往c的报文
iptables -t filter -F INPUT ! -s x.x.x.x -d c.c.c.c -p tcp -j DROP
# 拒绝从x发往c的 tcp 报文
iptables -t filter -I INPUT -i eth1 -p icmp -j DROP
# 拒绝由网卡eth1流入的icmp报文

iptables -t filter -I INPUT -s x.x.x.x -p tcp --dport 22 -j REJECT # 多端口,连接
# 拒绝由x发往 本机22端口的tcp连接
iptavles -t filter -I INPUT -s x.x.x.x -p tcp --sport 22 -j ACCEPT
# 接受由x 22端口发来的tcp报文
# 22:25 22到25所有端口	:22 0到22端口  22: 22到65535端口

```
### iprange 模块
```bash
iptables -t filter -I INPUT -m iprange --src-range 192.168.0.10-192.168.0.20 -j FROP
--dst-range
# 丢弃来自10-20的报文
```
### string 模块
```bash
pass
```
### time 模块
**拒绝向80端口发送报文**
```bash
iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --timestart 00:00:00 --timestop 12:00:00 -j REJECT
# 00:00:00开始 12:00:00结束

iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --weekdays 1,2 -j REJECT
# 周一和周二

iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --timestart 00:00:00 --timestop 12:00:00  --weekdays 1,2 -j REJECT
# 周一和周二的00:00:00开始 12:00:00结束
# 可取反

iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --monthdays 11,12 -j REJECT
# 每个月11,12号
# 可取反

iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --weekdays 1 --monthdays 11,12,13,14,15,16,17 -j REJECT
# 每个月11,12,13,14,15,16,17中的周一

iptables -t filter I OUTPUT -p tcp --dport 80 -m time --datestart 2020-01-01 --datestop 2020-01-03 -j REJECT
# 2020-01-01 到 2020-01-03
```
### connlimit 模块
```bash
iptables -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT	
# 每个ip连接数上限为2
```
### limit 模块
```bash
iptables -t filter -I INPUT -p icmp -m limit --limit 10/minute -j ACCEPT
iptables -t filter -A INPUT -p icmp -j REJECT
# 接收每分钟<=10个icmp报文

iptables -t filter -I INPUT -p icmp -m limit --limit-burst 3 --limit 10/minute -j ACCEPT
iptables -t filter -A INPUT -p icmp -j REJECT
# 每秒生成3个令牌
```

### tcp-flage 模块
```bash
iptables -t filter -I INPUT -p tcp -m tcp --dport 22 --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN -j REJECT
iptables -t filter -I OUTPUT -p tcp -m tcp --sport 22 --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN,ACK -j REJECT
iptables -t filter -I INPUT -p tcp -m tcp --dport 22 --tcp-flags ALL SYN -j REJECT
iptables -t filter -I OUTPUT -p tcp -m tcp --sport 22 --tcp-flags ALL SYN,ACK -j REJECT
# 匹配报文tcp三次握手头的标志位
iptables -t filter -I INPUT -p tcp -m tcp --dport 22 --syn -j REJECT
# 匹配新建tcp连接请求报文
```
### icmp 模块
```bash
iptables -t filter -I INPUT -p icmp -j REJECT
# 拒绝所有icmp报文

iptables -t filter -I INPUT -p icmp-type 8 -jREJECT
# ping其他主机
iptables -t filter -I INPUT -p icmp --icmp-type "echo-request" -j REJECT
# 相反
```
