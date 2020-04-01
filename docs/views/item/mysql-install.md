---
title: MySQL install
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

::: tip 介绍
1. [yum 源](https://dev.mysql.com/downloads/repo/yum/)
2. [rpm 源](https://dev.mysql.com/downloads/mysql/)
:::
## MySQL-8
### yum install
```bash
rpm -ivh https://repo.mysql.com//mysql80-community-release-el8-1.noarch.rpm
# 安装mysql源
yum update
yum install mysql-server
# 安装mysql-8 服务端
```
### 权限设置
```bash
chown mysql:mysql -R /var/lib/mysql
```

### 初始化 MySQL
```bash
mysqld --initialize
```

### 启动 MySQL
```bash
systemctl start mysqld
```

## MySQL-7.4 Source

### Install item
```bash
yum install gcc gcc-c++ ncurses ncurses-devel bison libgcrypt perl cmake
```

### Down mysql
https://share.weiyun.com/5mwTtZ2

### System config
```bash
mysql source 解压
# 解压到/usr/local/
# 新建用户和组
groupadd mysql
useradd -r -g mysql mysql
```
### source install

```bash
# cd到mysql根目录下运行
cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci -DMYSQL_TCP_PORT=3306 -DMYSQL_USER=mysql -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_ARCHIVE_STORAGE_ENGINE=1 -DWITH_BLACKHOLE_STORAGE_ENGINE=1 -DWITH_MEMORY_STORAGE_ENGINE=1 -DENABLE_DOWNLOADS=1 -DDOWNLOAD_BOOST=1 -DWITH_MEMORY_STORAGE_ENGINE=1 -DWITH_BOOST=/usr/local/boost_1_59_0

# 新建data，logs，pids文件夹可放在/usr/local/mysql(没有可新建)下，安装好后可在mysql配置文件中
# 指定其所在路径(/etc/my.cnf),把权限交给mysql用户
chown -R mysql:mysql /usr/local/mysql
# 如不在一起需要一一更改所有者
# 查看cmake是否有报错，如果正确进行下一步
make && make install

# 添加变量/etc/profile
# mysql path
export PATH=/usr/local/mysql/bin:/usr/local/mysql/lib:$PATH
source /etc/profile(立即生效)

# 打开my.cnf文件指定好文件所在位置
datadir=/usr/local/mysql/data
socket=/usr/local/mysql/mysql.sock

# 初始化数据库
mysqld --initialize-insecure --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data

# 配置开机启动(可选)
chkconfig mysql on

```
## 查看临时密码
```bash
grep 'temporary password' /var/log/mysqld.log
```
## 连接mysql
```bash
mysql -h127.0.0.1 -uroot -P3306 -pxx
```

