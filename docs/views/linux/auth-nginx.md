---
title: Nginx 访问验证
date: 2020-02-09
tags:
 - nginx
categories:
 - linux
---

::: tip 介绍
1. auth_basic 本地验证
2. ngx_http_auth_request_module 第三方认证
:::
## auth_basic
编译安装
```bash
wget http://nginx.org/download/nginx-1.15.1.tar.gz
tar zxvf nginx-1.15.1.tar.gz && cd nginx-1.15.1
./configure --prefix=/usr/local/nginx-1.10.2 \
              --with-http_dav_module \
              --with-http_ssl_module \
              --with-http_realip_module \
              --with-http_gzip_static_module \
              --with-http_stub_status_module \
              --with-http_degradation_module \
              --with-http_auth_request_module && make && make install
```
vim /etc/nginx/conf.d/80.conf
```bash
server {
    listen       81;
    server_name  localhost;
    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        auth_basic	"Please input password";
        auth_basic_user_file	/usr/share/nginx/passwd;
    }
}
```
### passwd 密码格式
```bash
username:password
username1:password2:comment
例:
username:xxx(加密后数据)
```
### htpasswd 生成密码
cd /usr/share/nginx/
```bash
htpasswd -c passwd username # 在passwd中添加用户htpasswd passwd username
# 之后输入密码
service nginx reload
```
### openssl 生成密码
```bash
printf "ttlsa:$(openssl passwd -crypt 123456)\n" >> /usr/share/nginx/passwd
cat /usr/share/nginx/passwd
username:AtLEBZcoiuVmI
# or 手动生成替换
openssl passwd -crypt 123456
service nginx reload
```
## ngx_http_auth_request_module 第三方认证
### 开启认证
vim /etc/nginx/conf.d/80.conf
```bash
server {
    listen       80;
    server_name  localhost;
    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    auth_request  /auth;	# 启用认证

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        auth_basic	"Please input password";
        auth_basic_user_file	/usr/share/nginx/passwd;
    }
    location /auth {
        proxy_pass http://auth.server.com/HttpBasicAuthenticate.php;  # 认证服务器地址
        proxy_pass_request_body off;
        proxy_set_header Content-Length "";
        proxy_set_header X-Original-URI $request_uri;
	}
}
```
### 认证配置
vim /etc/nginx/conf.d/auth.conf
```bash
server {
    listen       80;
    server_name  localhost;

    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /etc/nginx/uwsgi_params;
        include        fastcgi_params;
    }
}
```
### 后端认证
vim /usr/share/nginx/html/HttpBasicAuthenticate.php
```bash
<?php

if(isset($_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW'])){
    $username = $_SERVER['PHP_AUTH_USER'];
    $password = $_SERVER['PHP_AUTH_PW'];

    if ($username == 'wang' && $password == '123456'){
        return true;
    }
}

header('WWW-Authenticate: Basic realm="Git Server"');
header('HTTP/1.0 401 Unauthorized');
?>
```
