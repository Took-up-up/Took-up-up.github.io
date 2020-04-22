---
title: Saltstack 自动化管理工具
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip 介绍
1. 这是一个例子；<br>
2.. 你可以打开 [ex](ex)
:::
## Server
### Install
```bash
rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/epel/epel-release-latest-7.noarch.rpm
# 安装yum源
yum -y install salt-master
# 安装 saltstack
systemctl start salt-master
# 启动 saltstack server 默认端口 4505, 4506
```
### Authorized
::: tip
minion在第一次启动时，会在/etc/salt/pki/minion/（该路径在/etc/salt/minion里
面设置）下自动生成minion.pem（private key）和 minion.pub（public key），然>后将 minion.pub发送给master。master在接收到minion的public key后，通过salt-key命令accept minion public key，这样在master的/etc/salt/pki/master/minions>下的将会存放以minion id命名的 public key，然后master就能对minion发送指令了>。
:::
```bash
salt-key -L
# 查看当前证书签证情况
salt-key -A -y
# 同意签证所有没有接受的签证情况
salt-key -a
# 指定id
```
### Config
vim /etc/salt/master
```bash
file_roots:
   base:
     - /srv/salt/bass
   dev:
     - /srv/salt/dev
   prod:
     - /srv/salt/prod
   test:
     - /srv/salt/test
```
```bash
systemctl restart salt-master
# 重启 server
```
### Use
```bash
salt '*' test.ping
# 对所有主机进行连通性测试
salt '*' cmd.run 'ls -al'
# 对所有主机发送 ls -al 命令

salt -E 'root*' test.ping
# 主机名以root开头
salt -L root1,root2 test.ping
# 列表匹配
alt -G 'os:CentOS' test.ping
# Grians匹配
# os:CentOS（默认存在）是Grains的键值对，数据以yaml保存在minion上，可在minion端直接编辑/etc/salt/grains，yaml格式。或者在master端执行salt '*' grains.setval key "{'sub-key': 'val', 'sub-key2': 'val2'}" ,具体文档（命令salt * sys.doc grains查看文档）
salt -N groups test.ping
# 组匹配
# 如，在master新建/etc/salt/master.d/nodegroups.conf ，yaml格式
salt -C 'G@os:CentOS or L@Minion' test.ping
# 复合匹配
salt -I 'key:value' test.ping
# Pillar值匹配
# /etc/salt/master设置pillar_roots,数据以yaml保存在Master上
salt -S 'x.x.x.x/24' test.ping
# CIDR匹配
# x.x.x.x/24是一个指定的CIDR网段
salt -G 'os:RedHat' --batch-size 25% apache.signal uptime
# 批量处理(按百分比执行)
salt '*' -b 10 test.ping
# 批量处理 (一次性执行10台)

salt "*" state.sls apache test=True
# salt模拟执行,不会真的执行,但执行后会有变化的内容会以黄色字体表示出来
```
## sls
### apache
vim /srv/salt/base/apache.sls
```bash
Oapache-install:    # 安装状态的ID声明
  pkg.installed:    # pkg为状态模块，installed是pkg模块下的安装方法
    - name: httpd   # installed方法的参数，name是一个特殊的参数，安装的服务为httpd
# 注:以上整个状态的意思为：{应该有一个httpd服务，如果有则啥也不干，如果没有则下载一个}
apache-service:      # 服务状态的ID
  service.running:   # service是状态模块，running是service模块下的启动方法
    - name: httpd    # 方法的目标参数（对哪个目标进行操作）
    - enable: True   # 目标参数的动作（True为启动）
```
```bash
 salt "主机名*" state.sls apache
# 执行模块
```
### tomcat
vim /srv/salt/base/tomcat.sls
```bash
jdk-install:
  pkg.installed:         #安装jdk
    - name: java-1.8.0-openjdk

tomcat-install:
  file.managed:       #file模块下的managed的方法（分发文件方法），把master端的文件放到minion端
    - name: /usr/local/src/apache-tomcat-8.0.46.tar.gz     #放到minion端的位置
    - source: salt://web/files/apache-tomcat-8.0.46.tar.gz     #在master端的文件
    - user: root    #到minion端的文件的用户组和权限配置
    - group: root
    - mode: 755
  cmd.run:         #在状态里写shell命令，在minion端执行
    - name: cd /usr/local/src && tar zxf apache-tomcat-8.0.46.tar.gz && mv apache-tomcat-8.0.46 /usr/local/ && ln -s /usr/local/apache-tomcat-8.0.46 /usr/local/tomcat
    - unless: test -L /usr/local/tomcat && test -d /usr/local/apache-tomcat-8.0.46
```
```bash
salt "*" state.sls web.tomcat
# 执行这个多级目录的安装tomcat状态
```
### top
vim /srv/salt/base/top.sls
```bash
base:	# 环境名称，表示在base环境对应的目录下
  'client.example.com':	# minion端的ID
    - web.tomcat	# 在这个minion上执行的状态
  'server.example.com':	# minion端的ID
    - web.lamp	# 在这个minion上执行的状态
```
::: tip 说明
这个高级状态的base 表示当前的高级状态所在的环境
         `‘client.example.com’` 为minion的通讯ID
         `-web.tomcat`          表示执行web目录下的tomcat状态
:::
```bash
salt "*" state.highstate
# 执行这个高级状态
```
## Client
### Install
```bash
rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/epel/epel-release-latest-7.noarch.rpm
yum -y install salt-minion
```
### Config
```bash
sed -i 's@#manster:.*@manster: server_ip@' /etc/salt/minion
# master_ip 为 Server 端IP
echo master: x.x.x.x > /etc/salt/minion
# 使用server端IP，默认主机名
systemctl start salt-minion
# 启动 client
``` 
