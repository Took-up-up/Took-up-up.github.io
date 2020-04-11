---
title: Zabbix server-anget install
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip 原理
`zabbix agent` 安装到`被监控`的主机上，它负责定期收集各项数据，并发送到zabbix server端，`zabbix server`将数据存储到数据库中，`zabbix web`根据数据在前端进行展现和绘图。这里agent收集数据分为 `主动` 和`被动` 两种模式：

`主动模式`：由Agent主动建立TCP链接并向Server端发送请求,获取主动的监控项列表,并主动将监控项内需要检测的数据提交给server/proxy。

`被动模式`：由Server建立TCP链接并向Agent端发送请求,获取监控项的数据，agent返回数据。。

`zabbix proxy`：可选组件，用于分布式监控环境中，zabbix proxy代表server端，完成局部区域内的信息收集，最终统一发往server端。
:::
## 架构
![](http://www.zsythink.net/wp-content/uploads/2016/12/121916_1337_2.png)
## Server
### Install
```bash
rpm -ivh http://repo.zabbix.com/zabbix/4.5/rhel/7/SRPMS/zabbix-5.0.0-0.1alpha1.el7.src.rpm
# 安装yun源
http://repo.zabbix.com/zabbix/4.5/rhel/7/x86_64/
# 或 选择版本下载
yum insatll zabbix-server-mysql zabbix-get -y
# 安装服务端
```
### Config
**初始化数据表**
```bash
rpm -qa zabbix-server-mysql
# 找到create.sql.gz
gunzip create.sql.gz
# 解压得到zabbix数据表

#新建zabbix数据库并导入表
> create databases zabbix charset 'utf8';
> grant all in zabbix.* to zabbix@'localhost' identified by 'xxx';
> flush privileges;
> use zabbix;
> source /xx/create.sql;
> show tables;
```
**修改服务端配置文件**
```bash
vim /etc/zabbix/zabbix_server.conf

ListenPort=10051
# 服务端监听端口
SourceIP=
# 通过SourceIP参数可以指定服务端的源IP，当server端有多个IP地址时，我们可以指定服务端使用固定的IP与agent端进行通讯，为了安全起见，agent端会基于IP进行一定的访问控制，也就是说agent端只允许指定的IP以server端的身份采集被监控主机的数据，如果IP不对应，则不允许采集被监控主机的数据，所以，当server端有多个IP时，我们可以通过SourceIP参数，指定server端通过哪个IP采集被监控主机的数据。
LogType=file
# 通过LogType参数，可以指定通过哪种方式记录日志，此参数可以设置为三种值，system、file、console,system表示将日志发往syslog，file表示使用指定的文件作为日志文件，console表示将日志发往控制台，默认为file。
LogFile=/var/log/zabbix/zabbix_server.log
# 当LogType设置为file时，通过LogFile参数设置日志文件位置。
LogFileSize=0
# 指明日志文件达到多大时自动滚动，单位为MB，如果设置LogFileSize为50，表示日志大小达到50MB滚动一次，设置为0表示日志文件不会滚动，所有日志保存在一个文件中。
DebugLevel=3
# 日志级别
DBHost=localhost
# 数据库IP
DBUser=zabbix
# 数据库用户名
DBPassword=xx
# 数据库密码
DBPort=3306
# 数据库端口
DBSocket=/var/lib/mysql/mysql.sock
# 数据库套接字文件
```
### Run
systemctl start zabbix-server
## Zabbix Web
### Install
```bash
yum install zabbix-web zabbix-web-mysql -y
# 安装zabbix web

rpm -ql zabbix-web
# 找到web路径并移动wen服务器根目录或更改web服务器虚拟主机配置文件
# 启动web服务 访问 ip/zabbix
# 按照以上服务端配置对web进行配置
```
## Agent
### Install
```bash
yum install zabbix-agent zabbix-sender -y
# 安装客户端
```

### Config
**修改客户端配置文件**
```bash
vim /etc/zabbix/zabbix_agentd.conf

# 被动模式
Server：用于指定允许哪台服务器拉取当前服务器的数据，当agent端工作于被动模式，则代表server端会主动拉取agent端数据，那么server端的IP必须与此参数的IP对应，此参数用于实现基于IP的访问控制，如果有多个IP ,可以使用逗号隔开。
ListenIP：用于指定agent端工作于被动模式时所监听的IP地址，默认值为0.0.0.0，表示监听本机的所有IP地址。
StartAgents：用于指定预生成的agent进程数量。

# 主动模式
ServerActive：此参数用于指定当agent端工作于主动模式时，将信息主动推送到哪台server上，当有多个IP时，可以用逗号隔开。
Hostname：此参数用于指定当前主机的主机名，server端通过此参数对应的主机名识别当前主机。
RefreshActiveChecks：此参数用于指明agent端每多少秒主动将采集到的数据发往server端。

修改
server, serverActive ,hostname 为服务端ip或域名
```
### Run
systemctl start zabbix-agent
