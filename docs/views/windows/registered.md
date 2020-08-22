---
title: Windows-registered
date: 2019-04-09
tags:
 - 
categories:
 - windows
---

## KMS激活
### 安装密钥
```bash
slmgr /ipk DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
# 版本windows10 1803
slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
# 版本windows10 1909
# 指定序列号 不同系统版本在此页面查找
# https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys
slmgr /skms kms.03k.org
# 指定验证服务器(KMS)
slmgr /ato
# 激活
```
注: 密钥版本不符会出现报错
### 清理密钥
```bash
slmgr /upk
slmgr /cpky
slmgr /ckms
#slmgr /rearm
#清理密钥
```
尝试激活时无需清理
#
## 安装KMS服务器
### 安装KMS依赖
```bash
# CentOS，Redhat，Fedora等选择CentOS脚本
wget https://raw.githubusercontent.com/dakkidaze/one-key-kms/master/one-key-kms-centos.sh
chmod +x one-key-kms-centos.sh
./one-key-kms-centos.sh

#Debian，Ubuntu，Mint等选择Debian脚本
wget https://raw.githubusercontent.com/dakkidaze/one-key-kms/master/one-key-kms-debian.sh
chmod +x one-key-kms-debian.sh
./one-key-kms-debian.sh
```
### 启动KMS
```bash
wget https://raw.githubusercontent.com/dakkidaze/one-key-kms/master/kms.sh
chmod +x kms.sh
./kms.sh start
```
### quick
```bash
wget --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh
```
注: KMS需占用1688端口
### 本地KMS激活
```bash
slmgr /skms ip
# ip为KMS的IP地址或者域名 
# 本地激活通常无需密钥，仅需KMS服务在线
slmgr /ato
slmgr /xpr
查看激活
```
注: 此激活方式为180天，期间会不定时对kms服务器进行验证,通过后重置为180天
