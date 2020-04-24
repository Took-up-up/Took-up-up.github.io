---
title: Pip更换源
date: 2019-04-09
tags:
 - 
categories:
 - python
---

::: tip 国内镜像源
1. `豆瓣` http://pypi.douban.com/simple/
2. `阿里云` http://mirrors.aliyun.com/pypi/simple/
3. `清华大学` https://pypi.tuna.tsinghua.edu.cn/simple/
4. `中国科技大学` https://pypi.mirrors.ustc.edu.cn/simple/
5. `中国科学技术大学` http://pypi.mirrors.ustc.edu.cn/simple/
:::
## Linux
```bash
pip install package -i https://pypi.tuna.tsinghua.edu.cn/simple
# 临时使用
vim  ~/.pip/pip.conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
# 配置修改(没有可创建)
```
## Windows
```powershell
pip install package -i https://pypi.tuna.tsinghua.edu.cn/simple
# 临时使用
pip install pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 命令修改源
%HOMEPATH%\pip\pip.ini
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn%%
# 文件修改源
```
