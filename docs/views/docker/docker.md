---
title: Docker(容器)
date: 2019-04-09
tags:
 - 
categories:
 - docker
---

::: tip 虚拟化是什么
通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现
:::
## Docker 原理
容器有效的将单个操作系统管理的资源划分到孤立的组中，以便更好的在孤立的组之间平衡有冲突的资源使用需求。与虚拟化相比，这样既不需要指令级模拟，也不需要即时编译。容器可以在核心CPU本地运行指令，而不需要任何专门的解释机制。此外，也避免了准虚拟化（paravirtualization）和系统调用替换中的复杂性。
简而言之就是，Docker是一个盒子，一个盒子装一个玩具，无论你丢在哪里，你给他通电(glibc)，他就能运行。你的玩具大就用大盒子，小玩具就用小盒子。

两个应用之间的环境是环境是完全隔离的，建立通信机制来互相调用。容器的创建和停止都十分快速（秒级），容器自身对资源的需求十分有限，远比虚拟机本身占用的资源少。

## Docker 对比 传统虚拟化
::: tip
![](https://took-up-up.gitee.io/pic/vm.png)
![](https://took-up-up.gitee.io/pic/docker.png)
1. 与宿主机使用同一个内核，性能损耗小；
2. 不需要指令级模拟；
3. 不需要即时(Just-in-time)编译；
4. 容器可以在CPU核心的本地运行指令，不需要任何专门的解释机制；
5. 避免了准虚拟化和系统调用替换中的复杂性；
6. 轻量级隔离，在隔离的同时还提供共享机制，以实现容器与宿主机的资源共享。
总结: 传统虚拟化提供系统环境,容器提供应用环境,虚拟化层次不同
:::

## Docker 架构
![](https://took-up-up.gitee.io/pic/docker1.png)
Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器

Docker 容器通过 Docker 镜像来创建。

## Docker Install
```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
# 安装依赖
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 设置镜像源
yum install -y docker-ce
# 安装 Docker-CE
# 容器镜像缺省路径/var/lib/docker
```
## Docker Config
```bash
systemctl enable docker 
# 设置开机启动
systemctl start docker
# 启动docker
groupadd docker && useradd xx
usermod -aG docker xx
# 添加docker用户组（可选）
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
EOF
# 配置加速镜像(文件没有即创建)
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
            "http://hub-mirror.c.163.com",
            "registry-scu.cloudtogo.cn",
            ],
    "insecure-registry": ["x.x.x.x:5000"]
}
EOF
# 配置多个加速镜像和私有库地址
systemctl daemon-reload
systemctl restart docker
# 重启docker
```
## 错误
/usr/bin/docker-current: 
Error response from daemon: 
error creating overlay mount to 
/var/lib/docker/overlay2/65f3c109fb903539820f84856d2725af784f2f03f95b1f0214e34184e4d61ff7-init/merged:
 invalid argument.

解决方案
```bash
systemctl stop docker
# 停止docker
rm -rf /var/lib/docker
# 删除镜像
vim /etc/sysconfig/docker-storage
# 修改存储类型
DOCKER_STORAGE_OPTIONS="--storage-driver overlay"
# 并且去除
--selinux-enabled
systemctl start docker
# 启动docker
```
## Use
```bash
docker pull ubuntu:15.10
# 拉取镜像
docker run -it ubuntu:15.10 /bin/bash
# 启动镜像 i: 交互式操作 t: 终端 d: 后台启动
# 在完成操作之后，输入 exit 命令来退出这个容器
docker images
# 查看所有镜像
docker ps
# 查看所有容器
docker ps -a
# 查看所有已停止运行的容器
docker stop 容器ID
# 停止一个容器
docker restart 容器ID
# 启动一个容器
docker exec -it 容器ID /bin/bash
# 进入一个运行在后台的容器
docker attach 容器ID
# 与exec相同,但退出后会停止容器



docker run -d -p 80:80 -v $PWD/html:usr/share/nginx/html docker.io/nginx --name nginx
docker run -d -p 80:80 -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/logs:/var/log/nginx nginx


docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
-m:提交的描述信息
-a:指定镜像作者
e218edb10161：容器ID
runoob/ubuntu:v2:指定要创建的目标镜像名

docker cp 6dd4380ba708:/etc/nginx/nginx.conf ~/nginx/conf
```
## Docker 安装Ubuntu
```bash
docker pull dorowu/ubuntu-desktop-lxde-vnc
# 拉取镜像
docker run -p 6080:80 -p 5900:5900 -e VNC_PASSWORD=VNC登录的密码 RESOLUTION=1920x1080 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc
# 运行容器 6080为web版本vnc

```
## ex

