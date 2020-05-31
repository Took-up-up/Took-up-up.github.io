---
title: MySQL 慢查询优化
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

::: tip 解决方法
1. 进行SQL优化(修改SQL写法)
2. 新增索引
:::
## 配置SQL慢查询
### 配置文件修改
/etc/my.cnf [mysqld]添加配置项
```co
long_query_time=5
// 慢查询临界值(s)
slow-query-log=On
slow_query_log_file="mysql_slow_quert.log"

log-query-not-using-indexes
```
### 临时启用
```sql
set global slow_query_log=ON;
set global long_query_time = 3600;
set global log_querise_not_using_indexes = ON;
```
## 问题解析
### 解析日志
```sql
EXPLAIN 慢查询语句
// 模拟执行慢查询语句
```
待续...
