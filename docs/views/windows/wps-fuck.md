---
title: 拉跨国产垃圾软件wps后台私自启动并私自上传用户硬盘数据
date: 2019-04-09
tags:
 - 
categories:
 - windows
---

::: tip
1. 蠢逼国产垃圾软件wps后台私自启动并私自上传用户未授权文件
2. 电脑待机状态wps后台高占用
:::

```bash
1.
cmd --> gpedit.msc,打开 [本地组策略编辑器]

2.
依次双击[用户配置] --> [管理模板] --> [系统]

3.
在窗口中找到[禁止运行指定的WINDOWS应用程序] 打开

4.
点击[已启用],并点击[显示],在弹出的窗口中添加wpscenter.exe(ex:新版WPS热点为wpscenter.exe,旧版本wpsnotify.exe,并建议添加wpscloudsvr.exe),点击应用和确定按钮.

# wpscloud.exe 禁用可能会影响登录

5.
启动wps，验证是否正常启动
```
### 建议

建议使用wps用户在迫不得已的情况下不要在电脑中留有`未加密`的隐私文件

xx没有底线

xx = ?
