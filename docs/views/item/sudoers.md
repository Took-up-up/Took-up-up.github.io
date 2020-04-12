---
title: sudoers 文件错误导致sudo失效
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip
/etc/sudoers 配置错误导致非root用户sudo失效
:::
开启两个会话(session)
## 第一步
### session-1
```bash
echo $$
``` 
得到你目前Bash的 PID。
## 第二步
### session-2
```bash
pkttyagent --process pid #pid是上一步获取
```
## 第三步
### session-1
```bash
pkexec visudo
```
## 第四步
### session-2
Bash提示进行权限认证，输入密码
## 第五步
### 修改sudoers
回到session后是我们熟悉的visudo界面。
修改保存并退出：

::: tip 提示
执行sudo visudo，默认使用nano编辑器

`保存` 执行 `Ctrl+O`  回车会输出 ”File Name to Write sudoers.tmp”, 在tmp后执行回车

`退出` 执行 `Ctrl+X`
:::
