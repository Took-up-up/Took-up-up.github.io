---
title: Puppet自动化配置管理工具
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip
[Puppet官方源](http://yum.puppetlabs.com/)
:::
## Install
```bash
# 安装对应源
rpm -ivh http://yum.puppetlabs.com/puppet-release-el-7.noarch.rpm
# 安装puppet
yum install puppet
```
## a
```bash
vim test.pp
user{'ddns':
	emsure => present,
	uid => 700,
	shell => '/bin/bash',
	home => '/home/ddns',
}
# 定义一个资源的类型为 user, 标题为 ddns, 关键字 name 名称为 ddns, ensure值为 present
# 判断是否存在用户 ddns,否则新建
puppet apply --verbose --noop test.pp	# noop 模拟执行

```
