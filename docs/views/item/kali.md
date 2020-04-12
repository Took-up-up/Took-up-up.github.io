---
title: kkl
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip
初始化
:::
## 初始化
### 图形和文本切换
```bash
1.
vim /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
# 复制本行然后把quiet替换成text。
update-grub && reboot
2.
#如果想kali每次启动是文本模式可以修改如下文件：
vim /etc/X11/default-display-manager
把里面内容/usr/sbin/lightdm 删除
改为false后重启会以文本模式登录
改回图形就把false还原回/usr/sbin/lightdm
```
### 安装中文字体
```bash
# apt-get install xfonts-intl-chinese
apt-get install ttf-wqy-microhei ttf-wqy-zenhei xfonts-wqy

dpkg-reconfigure locales
# 选上en_US.UTF-8、zh_CN.GBK、zh_CN.UTF-8
# tab选择确定
# 选择字符：zh_CN.UTF-8
# 确定
# 查看详情
cat /etc/default/locale 
LANG=zh_CN.UTF-8
# 应用
update-locale
```
### 安装中文输入法
```bash
apt-get install fcitx-googlepinyin
```
### 设置ssh为开机启动
```bash
update-rc.d ssh enable
```
### 重启后应用
```bash
reboot
```

## Scripts
```bash
apt-get install ttf-wqy-microhei ttf-wqy-zenhei xfonts-wqy fcitx-googlepinyin -y
echo 'LANG=zh_CN.UTF-8' > /etc/default/locale && update-locale
update-rc.d ssh enable && dpkg-reconfigure locales && reboot
```
