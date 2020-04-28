---
title: temp
date: 2019-04-09
tags:
 - 
categories:
 - 
---

::: tip 介绍
1. 这是一个临时文件；<br>
2. 你可以打开 [ex](ex)
:::
```bash
find ./ -type d -maxdepth 1
# 文件格式 d目录 f文件 mandepth 1 目录深度

ls -l | grep ^d
d 所有目录 - 所有文件
ls -l | grep -v ^-
-v 取反
tree -L 1

ls -l | sed -n /^d/p
ls -lrt
-t 时间排序
-r 翻转
find ./ mtime +7 -type f -name "*.log" -exec rm -rf {} \
find ./ mtime +7 -type f -name "*.log" | xargs rm -rf
保留7天内
打印行号
cat -n nginx.conf
grep -n . nginx.conf #此处的.(点)号，表示任意单个字符，-n是给过滤出的每一行加行号
stat -c %a nginx.conf
显示权限
date “+%F” -d “3 day ago”
3天前
tar –exclude /etc/a/b -zPcvf /home/a/a.gz /etc/a
# 出去b文件或目录
lsof -p 2550   #查看该进程打开的所有文件
ps -ef |grep crond|grep -v grep |awk ‘{print $2}’   #取出进程号

ftp -n <<- EOF
open 192.168.1.2    #远程ftp服务器IP
user username passwd
put xx.tar.gz
bye
EOF

创建一个组class、一组用户，用户名为stdX X从01-30，并归属class组
groupadd class
user=std
for i in {01..30}
do
useradd -G class ${user}$i
done

MYSQL的主从原理，怎么配置文件
复制有3个步骤：
A.master将改变记录到二进制日志(binary log)中（这些记录叫做二进制日志事件，binary log events）；
B.slave将master的binary log events拷贝到它的中继日志(relay log)；
C.slave重做中继日志中的事件，将改变反映它自己的数据。

Mysql复制的基本原理过程如下：
（1）Slave上面的IO线程连接上Master，并请求从指定日志文件的指定位置（或者从最开始的日志）之后的日志内容；
（2）Master接收到来自Slave的IO线程的请求后，通过负责复制的IO线程根据请求信息读取指定日志指定位置之后的日志信息，返回给Slave端的IO线程。返回信息中除了日志所包含的信息之外，还包括本次返回的信息在Master端binary log文件的名称以及在Binary log中的位置；
（3）Slave的IO线程收到信息后，将接收到的日志内容依次写入到Slave端的RelayLog文件（mysql-relay-lin.xxxxx）的最末端，并将读取到的Master端的bin-log的文件名和位置记录到master-info文件中，以便在下一次读取的时候能够清楚的告诉master“我需要从某个bin-log的哪个位置开始往后的日志内容，请发给我”
（4）Slave的SQL线程检测到Relay Log中新增加了内容后，会马上解析该Log文件中的内容成为在Master端真实执行时候的那些可执行的查询或操作语句，并在自身执行那些查询或操作语句，这样，实际上就是在master端和Slave端执行了同样的查询或操作语句，所以两端的数据是完全一样的。

补充：mysql主从复制的优点————
<1> 如果主服务器出现问题， 可以快速切换到从服务器提供的服务；
<2> 可以在从服务器上执行查询操作， 降低主服务器的访问压力；
<3> 可以在从服务器上执行备份， 以避免备份期间影响主服务器的服务。
为MYSQL添加一个用户
mysql> grant select,insert,update,delete on book.* to test2@localhost identified by “abc”;    #增加test2用户，密码为abc。并只能在localhost这台主机上登录，并且只能访问book这个库中的表，具有查询，插入，更新，删除权限；
语法：mysql> GRANT <权限> ON <库>.<表> TO ‘用户’@’主机名’ identified by “密码”;
```
