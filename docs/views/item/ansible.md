---
title: Ansible自动管理工具
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip 原理
1. Ansible通过底层链接模块，将数个文件或者命令或者play传输到节点的/tmp目录下，然后远程执行这些命令或者文件，之后删除这些临时文件，将执行结果回传到管理端
2. Ansible分为管理端和控制节点，只要在管理安装ansible就可以，然后只需要在管理端进行配置。控制节点是linux通过openssh去通信，控制节点是windows通过powershell去通信。
3. 以配置文件作为基准，通过Ad-Hoc或者PLAYBOOK方式去调用ansible的model、plugin、API去实现对特定组或者节点的操作。
:::
## Install
### Pip install
```bash
yum install python-pip python-devel gcc glibc-devel zlib-devel rpm-build openssl-devel -y
pip3 install --upgrade pip
pip install ansible --upgrade
mkdir /etc/ansible
curl -o /etc/ansible/ansible.conf https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg
```
### Source install
```bash
git clone https://github.com/ansible/ansible.git --recursive
cd ansible && source ./hacking/env-setup
```
### Yum install
添加源
```bash
cat <<eof>>/etc/yum.repos.d/aliyun.repo
[epel]
name=epel
baseurl=http://mirrors.aliyun.com/epel/7Server/x86_64/
enable=1
gpgcheck=0
eof
```
or
```bash
cat <<eof>>/etc/yum.repos.d/aliyun.repo
[aliyun]
name=aliyun
baseurl=https://mirrors.aliyun.com/centos/$releasever/os/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/centos/$releasever/os/$basearch/RPM-GPG-KEY-CentOS-$releasever
eof
```
安装
```bash
yum install ansible -y
```

## Config
### add host
vim /etc/ansible/hosts
```bash
主机名 IP ansible_port=22 ansible_user=root ansible_ssh_pass=admin
```
添加密钥认证
```bash
ssh-copy-id -i /root/.ssh/id_rsa.pub root@IP
```
测试:
```bash
ansible IP -m ping  # 主机名或IP
```
### add group
vim /etc/ansible/hosts
```bash
[aa]
0.0.0.1
0.0.0.2
[ab]
0.0.0.[3:6]
[a:children]
aa
ab
```
## Module
### ping
```bash
ansible all -m ping
# 对所有主机测试连通性
ansible-doc -l
# --help
ansible-doc -s ping

ansible IP -m fetch -a "src=/etc/fstab dest=/testdir/ansible/"
# 复制目标主机 fstab 到本机 dest 目录

```
### copy
```bash
src # 用于指定需要copy的文件或目录
dest # 用于指定文件将被拷贝到远程主机目录中,dest为必须参数
ansible IP -m copy -a "src=/etc/hosts dest=/opt/"
# 将本机hosts 复制到IP主机 opt下,存在则覆盖

force # 当远程主机的目标路径中已经存在同名文件，并且与ansible主机中的>文件内容不同时，是否强制覆盖，可选值有yes和no，默认值为yes，表示覆盖，如果>设置为no，则不会执行覆盖拷贝操作，远程主机中的文件保持不变。
ansible IP -m copy -a "src=/etc/hosts dest=/opt/ force=no"
# 将本机hosts 复制到IP主机 opt下,存在不复制

content # 当不使用src指定拷贝的文件时，可以使用content直接指定文件内容，src与content两个参数必有其一，否则会报错。
ansible IP -m copy -a 'content="aaa\nbbb\n" dest=/opt/1.txt'
# 在IP主机/opt 下生成1.txt,文件中第一行 aaa 第二行 bbb

backup # 当远程主机的目标路径中已经存在同名文件，并且与ansible主机中的文件内容不同时，是否对远程主机的文件进行备份，可选值有yes和no，当设置为yes时，会先备份远程主机中的文件，然后再将ansible主机中的文件拷贝到远程主机。
ansible IP -m copy -a "src=/etc/hosts dest=/opt/ backup=yes"
# 将本机hosts 复制到IP主机 opt下,存在则将其备份

owner # 指定文件拷贝到远程主机后的属主，但是远程主机上必须有对应的用户，否则会报错。
ansible IP -m copy -a "src=/etc/hosts dest=/opt/ owner=admin"
# 指定文件所有者,远程IP主机必须要有对应的用户

group # 指定文件拷贝到远程主机后的属组，但是远程主机上必须有对应的组，否则会报错。
ansible IP -m copy -a "src=/etc/hosts dest=/opt/ group=admin"
# 指定文件所属组,远程IP主机必须要有对应的组

mode # 指定文件拷贝到远程主机后的权限，如果你想将权限设置为"rw-r--r--"，则可以使用mode=0644表示，如果你想要在user对应的权限位上添加执行权限，则可以使用mode=u+x表示。
ansible IP -m copy -a "src=/etc/hosts dest=/opt/ mode=0660"
# 指定文件权限
```
### file
```bash
path # 必须参数，用于指定要操作的文件或目录，在之前版本的ansible中，使用dest参数或者name参数指定要操作的文件或目录，为了兼容之前的版本，使用dest或name也可以。
ansible IP-m file -a "path=/etc/host state=touch"
# 新建文件,已存在则更新时间戳

state # 此参数非常灵活，此参数对应的值需要根据情况设定，比如，当我们需要在远程主机中创建一个目录的时候，我们需要使用path参数指定对应的目录路径，假设，我想要在远程主机上创建/testdir/a/b目录，那么我则需要设置path=/testdir/a/b，但是，我们无法从"/testdir/a/b"这个路径看出b是一个文件还是一个目录，ansible也同样无法单单从一个字符串就知道你要创建文件还是目录，所以，我们需要通过state参数进行说明，当我们想要创建的/testdir/a/b是一个目录时，需要将state的值设置为directory，"directory"为目录之意，当它与path结合，ansible就能知道我们要操作的目标是一个目录，同理，当我们想要操作的/testdir/a/b是一个文件时，则需要将state的值设置为touch，当我们想要创建软链接文件时，需将state设置为link，想要创建硬链接文件时，需要将state设置为hard，当我们想要删除一个文件时（删除时不用区分目标是文件、目录、还是链接），则需要将state的值设置为absent，"absent"为缺席之意，当我们想让操作的目标"缺席"时，就表示我们想要删除目标。
ansible test70 -m file -a "path=/etc/host state=directory"
# 新建目录,已存在不操作

src # 当state设置为link或者hard时，表示我们想要创建一个软链或者硬链，所以，我们必须指明软链或硬链链接的哪个文件，通过src参数即可指定链接源。
ansible IP -m file -a "path=/etc/host state=link src=/tmp/host"
# 在远程主机IP上 为 src建立软连接 名为 path

force # 当state=link的时候，可配合此参数强制创建链接文件，当force=yes时，表示强制创建链接文件，不过强制创建链接文件分为两种情况，情况一：当你要创建的链接文件指向的源文件并不存在时，使用此参数，可以先强制创建出链接文件。情况二：当你要创建链接文件的目录中已经存在与链接文件同名的文件时，将force设置为yes，回将同名文件覆盖为链接文件，相当于删除同名文件，创建链接文件。情况三：当你要创建链接文件的目录中已经存在与链接文件同名的文件，并且链接文件指向的源文件也不存在，这时会强制替换同名文件为链接文件。
ansible IP -m file -a "path=/etc/host state=hard src=/tmp/host"
# 在远程主机IP上 为src创建名为path的硬链接

ansible IP -m file -a "path=/etc/host state=link src=sourcefile force=yes"
# 创建链接时，链接文件有重名 或 源文件不存在时,覆盖同名文件 或 创建链接文件

ansible IP -m file -a "path=/etc/host state=absent"
# 删除远程主机IP 上指定的path

owner # 用于指定被操作文件的属主，属主对应的用户必须在远程主机中存在，否则会报错。
ansible IP -m file -a "path=/etc/host state=touch owner=admin"
ansible IP -m file -a "path=/etc/host owner=admin"
ansible IP -m file -a "path=/etc/host state=directory owner=admin"
# 在创建文件或目录时指定所有者,或修改

group # 用于指定被操作文件的属组，属组对应的组必须在远程主机中存在，否则会报错。
ansible IP -m file -a "path=/etc/host state=touch group=admin"
ansible IP -m file -a "path=/etc/host group=admin"
ansible IP -m file -a "path=/etc/host state=directory group=admin"
# 指定所属组,或修改

mode # 用于指定被操作文件的权限，比如，如果想要将文件权限设置为"rw-r-x---"，则可以使用mode=650进行设置，或者使用mode=0650，效果也是相同的，如果你想要设置特殊权限，比如为二进制文件设置suid，则可以使用mode=4700，很方便吧。
ansible IP -m file -a "path=/etc/host state=touch mode=0664"
ansible IP -m file -a "path=/etc/host mode=0644"
ansible IP -m file -a "path=/etc/host mode=4700"
ansible IP -m file -a "path=/etc/host state=directory mode=0664"
# 指定权限,或修改

ansible IP -m file -a "path=/etc/host state=directory owner=admingroup=admin recurse=yes"
# 修改目录内所有文件的所有者和组为 admin


recurse # 当要操作的文件为目录，将recurse设置为yes，可以递归的修改目录中文件的属性。
```
### blockinfile
```bash

```
