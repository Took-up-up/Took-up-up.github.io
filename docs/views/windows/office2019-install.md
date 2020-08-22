---
title: Office2019-registred
date: 2020-03-19
tags:
 - 
categories:
 - windows
---

## Office2019
## Download
```bash
# https://msdn.itellyou.cn/
ed2k://|file|cn_office_professional_plus_2019_x86_x64_dvd_5e5be643.iso|3775004672|1E4FFA5240F21F60DC027F73F1C62FF4|/
# 下载器下载
cn_office_professional_plus_2019_x86_x64_dvd_5e5be643.iso
# 文件名
d850365b23e1e1294112a51105a2892b2bd88eb9
# SHA1
3.52GB
# 文件大小
2018-10-03
# 发布时间

# 解压后，选择安装64位版本(64set-up.exe)
```
注: 此版本为零售版(retail)需转换至批量版(vol)
## KMS激活脚本
```shell
:: 修复乱码问题
CHCP 65001
office2019 retail转换vol版

:: 判断安装目录
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"
echo 正在重置Office2019零售激活...
cscript ospp.vbs /rearm
echo 正在安装 KMS 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
echo 正在安装 MAK 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
echo 转化完成，正在安装 KMS 密钥...
cscript ospp.vbs /inpkey:NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP
echo 正在设置 KMS 服务器...
cscript ospp.vbs /sethst:moeclub.org
echo 正在联系KMS服务器...
cscript ospp.vbs /act
echo 激活完成，按任意键退出！
pause >nul
exit
```
注: 复制进文本文档后,修改后缀.txt为.bat `如无后缀` 选中 `此电脑-查看-文件拓展名`
