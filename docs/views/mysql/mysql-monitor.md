---
title: MySQL 主要监控项
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

::: tip 
:::
## 语句执行数
```sql
SHOW GLOBAL STATUS LIKE "Questions";
// 已执行语句数
SHOW GLOBAL STATUS LIKE "Com_select";
// 查询语句数
SHOW GLOBAL STATUS LIKE "Com_insert";
// 插入语句数
SHOW GLOBAL STATUS LIKE " Com_updat";
// 更新语句数
SHOW GLOBAL STATUS LIKE "Com_delete";
// 删除语句数
```
## 查询性能
```sql
SELECT schema_name
 , SUM(sum_errors) err_count
 FROM performance_schema.events_statements_summary_by_digest
 WHERE schema_name IS NOT NULL
 GROUP BY schema_name;
// 计算出现错误的语句总数

SHOW VARIABLES LIKE 'long_query_time';
// 查看慢查询临界值
SET GLOBAL long_query_time = 5;
// 修改慢查询临界值为5(s)
set global slow_query_log='ON'
// 开启慢查询日志
```

## 连接数量
```sql
SHOW VARIABLES LIKE 'max_connections';
// 最大连接数
SHOW VARIABLES LIKE 'Threads_connected';
// 当前开放的连接(imp)
SHOW VARIABLES LIKE 'Threads_running';
// 当前运行的连接
SHOW VARIABLES LIKE 'Connection_errors_internal';
// 服务器错误导致的失败连接数
SHOW VARIABLES LIKE 'Aborted_connects';
// 与服务器进行连接结果失败的次数(imp)
SHOW VARIABLES LIKE 'Connection_errors_max_connections';
// max_connections 限制导致的失败连接数
```
## 缓冲池使用
缓冲池的大小为 = 块的大小 X 实例数目 X 某个倍数
```sql
SHOW GLOBAL VARIABLES LIKE "innodb_buffer_pool_chunk_size";
// 查询块的大小(kb)

SHOW GLOBAL VARIABLES LIKE "Innodb_buffer_pool_pages_total";
// 缓冲池中的总页数
SHOW GLOBAL VARIABLES LIKE "Innodb_buffer_pool_read_requests";
// 向缓冲池发送的请求
SHOW GLOBAL VARIABLES LIKE "Innodb_buffer_pool_reads";
// 缓冲池无法满足的请求
```
## 数据库锁机制
```sql
show status like 'table%';
// MySQL 表级锁定争用状态变量

Table_locks_immediate：产生表级锁定的次数
Table_locks_waited：出现表级锁定争用而发生等待的次数

show status like 'innodb_row_lock%';
// 行级锁定
Innodb_row_lock_current_waits：当前正在等待锁定的数量
Innodb_row_lock_time：从系统启动到现在锁定总时间长度(imp)
Innodb_row_lock_time_avg：每次等待所花平均时间(imp)
Innodb_row_lock_time_max：从系统启动到现在等待最常的一次所花的时间
Innodb_row_lock_waits：系统启动后到现在总共等待的次数(imp)
```
