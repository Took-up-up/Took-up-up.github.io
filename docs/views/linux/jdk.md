---
title: Linux jdk环境变量配置
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 介绍
1. linux配置jdk环境变量
2. [jdk下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
:::
```bash
vim /etc/profile

export JAVA_HOME=/home/codebrother/jdk/jdk1.7.0_25（文件位置）
export JAVA_BIN=$JAVA_HOME/bin
export JAVA_LIB=$JAVA_HOME/lib
export CLASSPATH=.:$JAVA_LIB/tools.jar:$JAVA_LIB/dt.jar
export PATH=$JAVA_BIN:$PATH
source profile (更新环境变量配置文件)(etc/profile)
java -version(设置环境变量前删除已有的jdk)
```
