---
title: php运行环境
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
1. 搭配nginx下php编译安装
2. [php源码下载](https://www.php.net/distributions/php-7.4.4.tar.gz)
:::
## install
### 安装依赖
```bash
yum install gcc make gd-devel libjpeg-devel libpng-devel libxml2-devel bzip2-devel libcurl-devel -y
# 以下参数支持,ftp,图片函数,pdo等支持,因使用php自带mysqlnd所以不需额外安装mysql的lib库.
# 如果是64位系统，参数后面加上--with-libdir=lib64，如果>不是可以跳过。
```
### 源码编译
```bash
tar -zxvf php-7.4.0.tar.gz
cd php-7.4.0
./configure --prefix=/usr/local/php-7.4.0 --with-config-file-path=/usr/local/php-7.1.12/etc --with-bz2 --with-curl --enable-ftp --enable-sockets --disable-ipv6 --with-gd --with-jpeg-dir=/usr/local --with-png-dir=/usr/local --with-freetype-dir=/usr/local --enable-gd-native-ttf --with-iconv-dir=/usr/local --enable-mbstring --enable-calendar --with-gettext --with-libxml-dir=/usr/local --with-zlib --with-pdo-mysql=mysqlnd --with-mysqli=mysqlnd --with-mysql=mysqlnd --enable-dom --enable-xml --enable-fpm --with-libdir=lib64
make && make install

# 备注：如果PHP不需要curl和ftp的支持,可以将以上的--with-curl --enable-ftp去掉. 如果你是专业的linux从业人员,你完全可以看着help来选择你的安装参数，如果你不是的话,我建议你直接复制黏贴我的配置参数.这样可以少走一些弯路.
```
### 配置php
```bash
vim /usr/local/php-7.1.12/etc/php-fpm.d/www.conf
user = nobody
group = nobody	--> root
./sbin -R	--> 强制运行

ex:
nginx配置
server {
        listen 81;
        server_name localhost;

        location / {
            root /usr/share/nginx/html;
            index index.html index.htm index.php;
                }
        location ~ .*\.php$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  /usr/local/nginx/html/$fastcgi_script_name;
            include        fastcgi_params;
        }

        }

```
::: tip
nginx将会连接回环地址9000端口执行PHP文件,需要使用tcp/ip协议,速度比较慢.建议大家换成使用socket方式连接。将fastcgi_pass 127.0.0.1:9000;改成fastcgi_pass unix:/var/run/phpfpm.sock(存在的话);
:::

在web目录下新建index.php
```bash
<?php
    phpinfo();    
?>
```
访问验证
