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
### 常用操作
```bash
docker search ubuntu
# 查找可用版本
docker pull ubuntu:15.10
# 拉取镜像
docker run -it ubuntu:15.10 /bin/bash
# 启动镜像 i: 交互式操作 t: 终端 d: 后台启动
# 在完成操作之后，输入 exit 命令来退出这个容器
docker images
# 查看所有镜像
docker port 容器ID
# 查看容器端口映射
docker logs -f 容器ID
# 查看容器内部的标准输出
docker top 容器名
# 查看容器内部运行的进程
ocker inspect 容器名
# 查看容器的配置和状态信息 json格式
docker ps
# 查看到容器的端口映射
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

docker export 容器ID > ubuntu.tar
# 导出容器
cat docker/ubuntu.tar | docker import - test/ubuntu:v1
# 导入容器
docker import http://example.com/ubuntutgz example/imagerepo
# 同上

docker rm -f 容器ID
# 删除容器(需停止)
docker container prune
# 清理所有处于终止状态的容器

docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
-m:提交的描述信息
-a:指定镜像作者
e218edb10161：容器ID
runoob/ubuntu:v2:指定要创建的目标镜像名
# 镜像重命名
docker cp 6dd4380ba708:/etc/nginx/nginx.conf ~/nginx/conf
# 复制容器的配置文件到本地
```
###  web 应用
```bash
docker pull nginx:latest
docker run -d -p 8080:80 -v $PWD/html:usr/share/nginx/html docker.io/nginx --name nginx
# d:后台 p 8080:80 将本机8080映射到容器80端口 name nginx 容器名称 v 本机:容器
docker run -d -p 80:80 -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/logs:/var/log/nginx nginx
# 指定多个配置文件
```
## Docker建立私有仓库
### Server
```bash
docker pull registry:latest
mkdir -p /xx/file
# 创建存储账户的文件夹路径
docker run --entrypoint htpasswd registry -Bbn admin 123456  >> /xx/file/htpasswd
# 创建用户密码信息文件
docker run -d -p 5000:5000 --restart=always --name=registry
 -v /xx/file/:/file/ 
 -e "REGISTRY_AUTH=htpasswd" 
 -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"
 -e REGISTRY_AUTH_HTPASSWD_PATH=/xx/file/htpasswd registry:latest

systemctl daemon-reload
systemctl restart docker
# 重启
# 访问http://x.x.x.x:5000/v2/

docker tag oracle/database:12.2.0.1-ee localhost:5000/oracle/database:12.2.0.1-ee
# 将镜像打标签,在镜像名前添加私有库的名称localhost:5000
docker push localhost:5000/oracle/database:12.2.0.1-ee
# 提交带有私有库名的镜像
```
### Cilent
```bash
vim /etc/docker/daemon.json 
# docker config 已说明,此处不重复
vim /usr/lib/systemd/system/docker.service
#
ExecStart=/usr/bin/dockerd --insecure-registry http://x.x.x.x
```

## Docker GUI
Portainer
[官方地址](https://portainer.io/install.html)
```bash
docker volume create portainer_data
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
# 访问你的 IP:9000 即可进入容器管理页面
```
## Docker 安装Ubuntu
```bash
docker pull dorowu/ubuntu-desktop-lxde-vnc
# 拉取镜像
docker run -p 6080:80 -p 5900:5900 -e VNC_PASSWORD=VNC登录的密码 RESOLUTION=1920x1080 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc
# 运行容器 6080为web版本vnc

```
## ex

