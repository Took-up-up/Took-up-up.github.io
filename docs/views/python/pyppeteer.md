---
title: pyppeteer安装
date: 2019-04-09
tags:
 - 爬虫
categories:
 - python
---

::: tip 介绍
1. 这是一个爬虫
2. 你可以使用pip安装 pip3 install pyppeteer
3. 需要浏览器插件[chrome](https://npm.taobao.org/mirrors/chromium-browser-snapshots/)
:::
**插件在代码中引用**
```bash
browser = await launch({
        'dumpio': True,     # 解决浏览器多开卡死
        'headless': True,  # 关闭无头模式-------------gui
        'devtools': False,  # 控制界面的显示，用来调试
        'executablePath': 'x:\\xx\chrome-win/chrome.exe',     # 浏览器路径
        'args': [
            '--disable-extensions',
            '--hide-scrollbars',
            '--disable-bundled-ppapi-flash',
            '--mute-audio',
            '--no-sandbox',           # --no-sandbox 在docker里使用时需要加入的参数,不然报错
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-xss-auditor',
        ]
    })

```
### 可能的缺失依赖
::: tip
cd xx/chrome-linux/ && ldd chrome | grep not
例:(可能缺少)
libatk-bridge-2.0.so.0 => not found
libgtk-3.so.0 => not found
libgdk-3.so.0 => not found 
libGL.so.1 => not found


# 查找库中哪些软件中包含对应的依赖包
yum provides XX
注意：对应64位依赖包，找错32位包，提示
wrong ELF class: ELFCLASS32
:::
