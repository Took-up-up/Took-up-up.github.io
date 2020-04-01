---
title: MySQL change passwd
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

::: tip
Mysql在无密码情况下修改密码
:::
## Change passwd
```bash
systemctl stop mysqld 
# or 
service mysql stop
# 关闭mysql

在/etc/my.cnf下尾行加入skip-grant-tables保存，开启数据库
# or
mysqld_safe --user=mysql --skip-grant-tables --skip-networking &

# 安全模式启动

mysql -u root mysql
# 管理员root登录

mysql>use mysql;
mysql>update user set password=password("123") where user="root";(old)
mysql>update mysql.user set authentication_string=PASSWORD('xx') where User='root';
mysql>flush privileges;
mysql>exit;

```
## 启动 Mysql 后验证
```bash
systemctl start mysqld
# or 
service mysql start

mysql -h127.0.0.1 -uroot -P3306 -pxx
```
