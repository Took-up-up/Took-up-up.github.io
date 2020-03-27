---
title: gopass密码管理工具
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip
这是一个命令行界面的密码管理工具，使用gpg加密，支持git同步
[gopass下载](https://github.com/gopasspw/gopass/releases/)
:::
## install
```bash
yum install gnupg2 git rng-tools
#依赖 git gpg
rpm -ivh https://github.com/gopasspw/gopass/releases/download/v1.8.6/gopass-1.8.6-linux-amd64.rpm
# or
wget https://github.com/gopasspw/gopass/releases/download/v1.8.6/gopass-1.8.6-linux-amd64.rpm && rpm -ivh gopass-1.8.6-linux-amd64.rpm
```
## Use
### 初始化
```bash
gpg --full-generate-key #生成密钥

gpg -k #查看生成好的密钥
gopass init #初始化

echo "source <(gopass completion bash)" >> ~/.bashrc
#自动补全
```
### Use
```bash
gopass (insert/generate) twitter/passwd
#insert输入密码 generate生成随机密码
gopass or gopass ls
#查看目录结构
gopass twitter/passwd
gopass (find/search) passwd
#显示密码
```
### 使用存储地址
```bash
gopass init --store my-company
# 在 ~/.password-store-my-company 里新建一个存储地址
gopass git remote add --store my-company origin git@xx.com/xx/xx.git
# 同步到远程
gopass clone git@gh.com/Woile/keys.git my-company --sync gitcli
# 克隆已有的存储地址

gopass mounts umount my-company
# 移除已有的存储地址
rm -rf ~/.password-store-my-company
# 删除文件夹

gopass sync
# 和远程进行同步
gopass sync --store my-company
# 和一个存储地址进行同步
```
### 团队共享
```bash
gpg -a --export logan@pm.me > logan.pub.asc
# 共享密信。 假如我们的同事有个邮箱 logan@pm.me。这个人已经在他的电脑里用那个邮箱生成了 gpg 密钥。 他要解析公钥并把它发给我们。

# 公钥是可以放在不可靠的地方的。 如果你不是很确信，那就用 firefox send。 记住人们一般在密钥服务器分享公钥的，像 opengpgkeyserver。

gpg --import < logan.pub.asc
# 增加公钥到 gopass 里
gopass recipients add logan@pm.me
# 添加新的收信人到 gopass 存储地址
```
## 工具
`Android password store`
我建议用 f-droid 来安装它，你需要 OpenKey-chain 来创建一个新的 gpg 密钥

`gopass bridge`
firefox 或 chrome 上的插件，可以让你登录你的存储地址。

`gopass ui`
在命令行里使用 gopass 的基于 electron 的 ui 软件。 提供了丰富的图形界面去搜索和管理你的密码。

