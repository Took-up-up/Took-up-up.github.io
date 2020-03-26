---
title: Nginx反向代理负载均衡
date: 2019-04-09
tags:
 - nginx
categories:
 - linux
---

::: tip 
1. Nginx install (源码, rpm)
2. Nginx 反向代理负载均衡配置
3. [Nginx官网](http://nginx.org/)
:::
## install
### Source Code
```bash
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar -zxvf nginx-1.16.1.tar.gz
cd xx
/configure --prefix=/usr/local/nginx-1.5.1 \
--with-http_ssl_module --with-http_spdy_module \
--with-http_stub_status_module --with-pcre
make && make install
```
### rpm
```bash
yum install yum-utils
vim /etc/yum.repos.d/nginx.repo

[nginx稳定]
name = nginx稳定仓库
baseurl = http：//nginx.org/packages/centos/$releasever/$basearch/
gpgcheck = 1
已启用= 1
gpgkey = https：//nginx.org/keys/nginx_signing.key
module_hotfixes = true

[nginx-mainline]
name = nginx主线仓库
baseurl = http：//nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck = 1
已启用= 0
gpgkey = https：//nginx.org/keys/nginx_signing.key
module_hotfixes = true

yum install nginx
# 安装
```

## 负载均衡配置
::: tip
vim /etc/nginx/nginx.conf
:::
### fair
```bash
upstream favresin{      
      server 10.0.0.10:8080; 
      server 10.0.0.11:8080; 
      fair; 
}
#按后端服务器的响应时间来分配请求，响应时间短的优先分配。与weight分配策略类似
```
### iphash
```bash
upstream favresin{ 
      ip_hash; 
      server 10.0.0.10:8080; 
      server 10.0.0.11:8080; 
}
#这样每个访客固定访问一个后端服务器，可以解决session的问题
```
### url_hash
```bash
upstream resinserver{ 
      server 10.0.0.10:7777; 
      server 10.0.0.11:8888; 
      hash $request_uri; 
      hash_method crc32; 
}
```
::: tip
#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。

#注意：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法。
:::

### 轮询
```bash
upstream a.com{
                server 192.168.3.97:80;
                server 192.168.3.96:80;
        }
server{
                listen 80;
                server_name a.com;
                location / {
                        proxy_pass http://a.com;
                        }
	 }
```

### 权重
```bash
upstream linuxidc{ 
      server 10.0.0.77 weight=5; 
      server 10.0.0.88 weight=10; 
}
```
### 综合
```bash
upstream bakend{ #定义负载均衡设备的Ip及设备状态 
      ip_hash; 
      server 10.0.0.11:9090 down; 
      server 10.0.0.11:8080 weight=2; 
      server 10.0.0.11:6060; 
      server 10.0.0.11:7070 backup; 
}
```
