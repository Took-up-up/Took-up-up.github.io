---
title: Linux下载器amule安装
date: 2019-04-09
tags: 
 - bt
categories:
 - linux
---

::: tip 介绍
Linux下载工具可支持ed2k
:::
## yum安装
```bash
rpm -Uvh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm

yum install amule
```
## git安装
```bash
#安装依赖
yum install make automake autoconf gettext zlib-devel wxGTK-devel gcc gcc-c++ kernel-headers binutils-devel bison -y

crypto++
mkdir cryptopp && cd cryptopp
wget http://www.cryptopp.com/cryptopp820.zip
unzip cryptopp820.zip
#需要先安装Gnu Make后
make static dynamic cryptest.sh
make install

libupnp
mkdir libupnp && cd libupnp
wget https://excellmedia.dl.sourceforge.net/project/pupnp/pupnp/libupnp-1.12.0/libupnp-1.12.0.tar.bz2
tar -xvf libupnp-1.12.0.tar.bz2
./configure && make && make install

git clone https://github.com/amule-project/amule.git
or
mkdir amule && cd amule
wget https://nchc.dl.sourceforge.net/project/amule/aMule/2.3.2/aMule-2.3.2.zip
unzip aMule-2.3.2.zip
./configure && make && make install
```
