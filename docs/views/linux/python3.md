---
title: Python环境配置
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 
Linux	下配置python环境
:::
## install
```bash
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel gcc kernel-devel kenel-headers make bzip2 gcc gcc-c++ zlib zlib-devel libffi-devel
# 安装依赖
wget https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tgz
tar -zxvf Python-3.8.2.tgz
cd Python-3.8.2
./configure && make && make install

cp python /usr/bin/python3
pip3 install --upgrade pip
```
::: tip
检验
:::
```bash
python3 --version
```
