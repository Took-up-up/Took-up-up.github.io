---
title: MySQL 双主互备
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

::: tip 介绍
1. MySQL Master1 192.168.1.88
2. MySQL Master2 192.168.1.99
:::
## Config
### Master1
/etc/my.cnf  [mysqld]配置项
```bash
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
# 服务ID
server-id=1888
# binlog
log-bin=mysql-bin
# 自增偏移量
auto-increment-increment=1
# 自增起始值
auto-increment-offset=1
# binlog记录的数据库名称
binlog-do-db=test
# binlog不记录的数据库名称
binlog-ignore-db=mysql
# 从主库通过binlog复制过来的数据记录在binlog日志中开关
log_slave_updates=1
# 接受的数据包大小
max_allowed_packet=256M
```
MySQL重启后登录
```bash
systemctl restart mysqld
mysql -uroot -p
```
在 Master1 创建同步数据的账户 syn
```sql
grant replication slave on *.* to 'replb'@'192.168.1.99' identified by 'syn@b1';
flush privileges;
```
查看 binlog 文件名称及位置
```sql
show master status;
+------------------+----------+----------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB   | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+----------------+------------------+-------------------+
| mysql-bin.000001 |      888 | test           | mysql            |                   |
+------------------+----------+----------------+------------------+-------------------+

```

### Master2
/etc/my.cnf [mysqld]配置项
```bash
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
# 服务ID
server-id=1999
# binlog
log-bin=mysql-bin
# 自增偏移量
auto-increment-increment=1
# 自增起始值
auto-increment-offset=1
# binlog记录的数据库名称
binlog-do-db=test
# binlog不记录的数据库名称
binlog-ignore-db=mysql
# 从主库通过binlog复制过来的数据记录在binlog日志中开关
log_slave_updates=1
# 接受的数据包大小
max_allowed_packet=256M
```
MySQL重启后登录
```bash
systemctl restart mysqld
mysql -uroot -p
```
在 Master2 创建同步数据的账户 syn
```sql
grant replication slave on *.* to 'repla'@'192.168.1.88' identified by 'syn@a1';
flush privileges;
```
查看 binlog 文件名称及位置
```sql
show master status;
+------------------+----------+----------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB   | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+----------------+------------------+-------------------+
| mysql-bin.000001 |      888 | test           | mysql            |                   |
+------------------+----------+----------------+------------------+-------------------+

```
数据同步，`master_log_file` 和 `master_log_pos` 分别是之前记录的 Master1 服务器中的 master status 中的 File 和 Position
```sql
stop slave;
change master to master_host='192.168.1.88',master_user='syn',master_password='syn@b1',master_log_file='mysql-bin.000001',master_log_pos=888;
start slave;
```
查看数据同步状态，以下为开启同步成功
```sql
show slave status\G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 192.168.1.88
                  Master_User: syn
                  Master_Port: 3306
                  ...
                  Slave_IO_Running: Yes
                  Slave_SQL_Running: Yes
                  ...
```
