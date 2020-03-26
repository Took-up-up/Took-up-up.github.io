---
title: Linux配置nfs网络文件共享
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip
1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br>
3. 你可以打开 [午后南杂](http://recoluan.gitlab.io) 来查看效果。
:::
## Server
### nfs安装
```bash
yum -y install nfs-utils rpcbind
mkdir /data/file
chmod 777 /data
chmod 777 /data/file
```
### 更改配置
```bash
vim /etc/exports
/data/lys 192.168.2.0/24(rw,no_root_squash,no_all_squash,sync)

参数值    		内容说明
rw	ro    		该目录分享的权限是可擦写 (read-write) 或只读 (read-only)，
	    		但最终能不能读写，还是与文件系统的 rwx 及身份有关。
sync　　async    	sync 代表数据会同步写入到内存与硬盘中，
	    		async 则代表数据会先暂存于内存当中，而非直接写入硬盘！
no_root_squash　　
root_squash    
				客户端使用 NFS 文件系统的账号若为 root 时，
				系统该如何判断这个账号的身份？预设的情况下，
				客户端 root 的身份会由 root_squash 的设定压缩成 nfsnobody，
				如此对服务器的系统会较有保障。
				 但如果你想要开放客户端使用 root 身份来操作服务器的文件系统，
				 那么这里就得要开 no_root_squash 才行！
all_squash    	不论登入 NFS 的使用者身份为何，
	      		他的身份都会被压缩成为匿名用户，
	      		通常也就是 nobody(nfsnobody) 
anonuid　　anongid    anon 意指 anonymous (匿名者) 前面
			   	关于 *_squash 提到的匿名用户的 UID 设定值，
			   	通常为 nobody(nfsnobody)，但是你可以自行设定这个 UID 的值！
			   	当然，这个 UID 必需要存在于你的 /etc/passwd 当中！
			   	anonuid 指的是 UID 而 anongid 则是群组的 GID

```
```bash
固定传输端口
vim /etc/sysconfig/nfs
RQUOTAD_PORT=30001
LOCKD_TCPPORT=30002
LOCKD_UDPPORT=30002
MOUNTD_PORT=30003
STATD_PORT=30004

exportfs -r
#配置生效
service rpcbind start
service nfs start
showmount -e localhost
#查阅

```

## Client
### linux
```bash
yum -y install nfs-utils
mkdir /file
  创建挂载目录
showmount -e x.x.x.x
  查看共享目录信息
mount -t nfs x.x.x.x:/data/file /file -o proto=tcp -o nolock
  提高稳定性用TCP，默认用UDP
```
### windows
```bash
控制面板--->程序--->启动或开启Windows功能--->NFS
mount \\x.x.x.x\data\file z:
#挂载
```
