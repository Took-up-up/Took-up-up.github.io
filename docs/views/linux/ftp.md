---
title: FTP 文件传输
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 
1. FTP文件传输协议（File Transfer Protocol），用于Internet上的控制文件的双向传输，是一个应用程序。工作在TCP/IP协议族的应用层，其传输层协议是TCP协议，目的在于提高文件传输的共享性和可靠性，是基于客户/服务器模式工作的。
2. 相比其他协议，如HTTP协议，FTP协议要复杂一些。与一般的C/S模型只会建立一个socket连接，这个连接同时处理服务器和客户端的连接命令和数据传输。而FTP会建立两个连接，将命令与数据分开传输，正是因为这样，提高了传输效率。

FTP使用两个端口，分别为控制端口（命令端口）和数据端口。控制端口号一般为21，数据端口一般为20。控制socket用来传输命令，数据socket用来传输数据。每一个FTP命令发送后，FTP服务器就会返回一个字符串，其中包含一个响应码和一些说明信息，其中响应码主要用于判断命令是否被成功执行了。
:::
## FTP 传输模式
::: tip
1．`ASCII传输方式:` 假定用户正在拷贝的文件包含的简单ASCII码文本，如果在远程机器上运行的不是UNIX。`当文件传输时ftp通常会自动地调整文件的内容以便于把文件解释成另外那台计算机存储文本文件的格式。`

2．`二进制传输模式:` 在二进制传输中，保存文件的位序，以便原始和拷贝的是逐位一一对应的。即使目的地机器上包含位序列的文件是没意义的。`不会对这些文件进行处理。`
:::
## FTP 工作模式
::: tip
1. `主动模式:` Standard模式(PORT) FTP的客户端发送 PORT 命令到FTP服务器.`过程:`客户端随机打开一个大于 1024 的端口向服务器的命令端口 P，即 21 端口，发起连接，同时开放N +1 端口监听，并向服务器发出 “port N+1” 命令，由
服务器从它自己的数据端口 (20) 主动连接到客户端指定的数据端口 (N+1)。
2. `被动模式:` Passive (PASV) FTP的客户端发送 PASV命令到 FTP Server。
`过程:`当开启一个 FTP 连接时，客户端打开两个任意的本地端口 (N > 1024 和 N+1)
:::
![](https://took-up-up.gitee.io/pic/FTP.jpg)
![](https://took-up-up.gitee.io/pic/FTP2.jpg)
## Install
```bash
yum install vsftpd -y
# 安装ftp服务端
```
## Config
### Add USER
```bash
useradd xx
passwd xx
# 为FTP新建用户
```
### set
vim  /etc/vsftpd/vsftpd.conf
```bash
anonymous_enable=NO
local_enable=YES
write_enable=YES
chroot_local_user=YES
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd/user_list
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_std_format=YES
listen=YES
listen_ipv6=NO
pam_service_name=vsftpd
userlist_enable=YES
tcp_wrappers=YES
# 开启被动模式
local_root=/var/ftp/test
allow_writeable_chroot=YES
pasv_enable=YES
pasv_address=x.x.x.x # x.x.x.x :公网 IP
pasv_min_port=40000
pasv_max_port=45000
~
~
```
## Run
```bash
systemctl start vsftpd
# 启动FTP
systemctl enable vsftpd
# 设置开机自启动(可选)
```

## Client
```bash
ftp://x.x.x.x:21
```
