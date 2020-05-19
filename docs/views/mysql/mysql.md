---
title: MySQL常用语句
date: 2019-04-09
tags:
 - 
categories:
 - mysql
---

![Mysql](https://img.shields.io/badge/5.7.3-mysql-green)
::: tip 
1. 这是一个例子；<br>
:::
**ex**
```bash
MySQL语句
show databases;
#查看全部数据库
create database hehe character set utf8mb4;
#新建一个名为hehe的库编码为utf8mb4
show create database hehe;
#查看hehe库的建表语句或库结构
alter database hehe character set xxx;
#修改hehe库编码为xxx
drop database hehe;
#删除hehe库
use mysql;
#进入库mysql
show tables;
#查看全部表
show columns from xx; or (desc xx)
#查看表xx的数据结构
alter table users rename users1;
#修改users表名为users1
rename table user1 to name1,user2 to name2;
#修改name为user
drop table users1;
#删除表users1
create table users (id smallint unsigend primary key auto_increment);
#新建表users,加入id列
create table users add (name varchar(20) not null);
#向users添加name列
alter table users modify id smallint(5) unsigned not null first
#修改users表的id列并置顶
alter table users change name1 username tinyint unsigned not null;
#修改users表中列name1为username

create table hehe(
id smallint unsigned primary key auto_increment,
username varchar(20) not null,
password varchar(32) not null,
age tinyint unsigned not null default 10,
sex boolean
);
insert hehe values(null,'join','456',25,1);
#向hehe表中插入记录
insert hehe set username='Ben', password='123';
#插入记录(对比上一种区别于，可以使用子查询SubQuery)
insert hehe select
#插入记录(对比第一种可以将查询记录插入到指定数据表)
update hehe set age = age + 5;
#把表hehe中所有记录的age加5
update hehe set age = age + 10 where id % 2 = 0;
#把表hehe中id为偶数的年龄加10
delete from hehe where id = 4;
#把表hehe中id为4的列删除
select * from hehe order by id desc;
#以id倒序排列
select * from hehe limit 0,5;
#从第一条记录开始显示5条(包括自己)
create table test(
    id tinyint unsigned primary key auto_increment,
    username varchar(20)
    );
insert test(username) select username from hehe where age > 10;
#把hehe表中age大于10的username，插入到test表中

select round(avg(age), 2) from hehe;
#查询hehe表中age的平均值并保留小数后两位

select * from hehe where age > (select round(avg(age), 2) from hehe);
#子查询: 查询hehe表中age大于平均age的列

select * from hehe where age > all (select age from hehe where sex=2); // all:大于最大值 some or any :任意值
#查询hehe表中 age大于 (hehe表中sex=2 的age)的最大值

select * from hehe where age > any (select age from hehe where sex =2) and sex = 1;
#查询hehe表中 age大于 (hehe表中sex=2 的age)的最大值，并且sex为1

update tdb_goods inner join tdb_goods_cates on goods_cate = cate_name set goods_cate = cate_id;
修改表 tdb_goods中goods_cate列的值为 表tsb_goods_cates中 cate_name列的cate_id  (goods_cate cate_name值要相同)

create table tdb_goods_brands(
    brand_id smallint unsigned primary key auto_increment,
    brand_name varchar(40) not null
    )
    select brand_name from tdb_goods group by brand_name;
#建表同时插入记录
```
