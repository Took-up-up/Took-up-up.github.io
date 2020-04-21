---
title: Ansible
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 原理
1. Ansible通过底层链接模块，将数个文件或者命令或者play传输到节点的/tmp目录下，然后远程执行这些命令或者文件，之后删除这些临时文件，将执行结果回传到管理端
2. Ansible分为管理端和控制节点，只要在管理安装ansible就可以，然后只需要在管理端进行配置。控制节点是linux通过openssh去通信，控制节点是windows通过powershell去通信。
3. 以配置文件作为基准，通过Ad-Hoc或者PLAYBOOK方式去调用ansible的model、plugin、API去实现对特定组或者节点的操作。
:::
## Install
### Pip install
```bash
yum install python-pip python-devel gcc glibc-devel zlib-devel rpm-build openssl-devel -y
pip3 install --upgrade pip
pip install ansible --upgrade
mkdir /etc/ansible
curl -o /etc/ansible/ansible.conf https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg
```
### Source install
```bash
git clone https://github.com/ansible/ansible.git --recursive
cd ansible && source ./hacking/env-setup
```
### Yun install
```bash
# 添加源
cat <<eof>>/etc/yum.repos.d/my.repo
[epel]
name=epel
baseurl=http://mirrors.aliyun.com/epel/7Server/x86_64/
enable=1
gpgcheck=0
eof

yum install ansible -y
```
