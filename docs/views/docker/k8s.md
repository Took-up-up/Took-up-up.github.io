---
title: Kubernetes 分布式系统支持平台
date: 2019-04-09
tags:
 - 
categories:
 - docker
---

::: tip 介绍

:::

## 原理
master主机上的kube-controller-manager是整个集群的控制管理中心，kube-controler-manager中的node controller模块 通过apiservice提供的监听接口，实时监控node机的状态信息。

当某个node机器宕机，controller-manager就会及时排除故障并自动修复。

node节点机上的kubelet进程每隔一段时间周期就会调用一次apiservice接口报告自身状态，apiservice接口接受到这些信息后将节点状态更新到ectd中。kubelet也通过apiservice的监听接口监听pod信息，如果监控到新的pod副本被调度绑定到本节点，则执行pod对应的容器的创建和启动，如果监听到pod对象被删除，则删除本节点对应的pod容器。
## Kubernetes install
### Ubuntu
```bash
apt-get update && apt-get install -y apt-transport-https
# 安装依赖
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - 
echo 'deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main' > 
/etc/apt/sources.list.d/kubernetes.list
# 设置k8s源
apt-get update && apt-get install kubelet kubeadm kubectl -y
# 安装主体
apt-mark hold kubelet kubeadm kubectl
# 标记指定软件包为保留,阻止软件自动更新
swapoff -a
# 关闭虚拟缓存
sysctl net.bridge.bridge-nf-call-iptables=1
# 开启网桥
```
## Kubernetes config
### Master config
```bash
kubeadm init --pod-network-cidr=10.244.0.0/16 --ignore-preflight-errors=NumCPU
# 初始化并获取 (kubeadm join)

ex:
如果缺少包可手动进行下载:
docker pull mirrorgooglecontainers/kube-apiserver:v1.14.2
docker pull mirrorgooglecontainers/kube-controller-manager:v1.14.2
docker pull mirrorgooglecontainers/kube-scheduler:v1.14.2
docker pull mirrorgooglecontainers/kube-proxy:v1.14.2
docker pull mirrorgooglecontainers/pause:3.1
docker pull mirrorgooglecontainers/etcd:3.3.10
docker pull hub-mirror.c.163.com/coredns/coredns:1.3.1

docker tag mirrorgooglecontainers/kube-proxy:v1.14.2 k8s.gcr.io/kube-proxy:v1.14.2
docker tag mirrorgooglecontainers/kube-apiserver:v1.14.2 k8s.gcr.io/kube-apiserver:v1.14.2
docker tag mirrorgooglecontainers/kube-controller-manager:v1.14.2 k8s.gcr.io/kube-controller-manager:v1.14.2
docker tag mirrorgooglecontainers/kube-scheduler:v1.14.2 k8s.gcr.io/kube-scheduler:v1.14.2
docker tag hub-mirror.c.163.com/coredns/coredns:1.3.1 k8s.gcr.io/coredns:1.3.1
docker tag mirrorgooglecontainers/etcd:3.3.10 k8s.gcr.io/etcd:3.3.10
docker tag mirrorgooglecontainers/pause:3.1 k8s.gcr.io/pause:3.1


mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

只在主节点设置(网络设置)

curl -O https://raw.githubusercontent.com/coreos/flannel/v0.10.0/Documentation/kube-flannel.yml

vim kube-flannel.yml
添加到 tolerations:
-key: node.kubernetes.io/not-ready
 operator: Exists
 effect: NoSchedule

kubectl apply -f kube-flannel.yml
```
### Node config
```bash
在node上执行kubeadm reset可以断开node，重新join
在master上执行kubeadm reset可以重新init (初始化)

```
### add node
```bash

添加节点 node
只需要运行master的 kubeadm join

如果默认源无法下载可能会导致以下问题
kubectl get node
# 显示node状态
# 如果node组件未在运行
kubectl get po --all-namespaces
# 显示组件状态
kube describe po kube-proxy-zw64q -n kube-system
# 显示组件详情

源:
keveon
mirrorgooglecontainers

```
### reboot
```bash
重启后，
1.swapoff -a
2.systemctl daemon-reload
3.systemctl restart kubelet
```
