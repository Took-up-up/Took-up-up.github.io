---
title: StrongSwan
date: 2019-04-09
tags:
 - 
categories:
 - ss
---

![vuepress](https://img.shields.io/badge/5.6.2-Strongswan-green)
![](https://img.shields.io/badge/2.0.2-Strongswan-blue)
![](https://img.shields.io/badge/0.9.9-Daloradius-red)
![](https://img.shields.io/badge/%3E5.5-MySQL-orange)
::: tip  准备工作
vpn搭建
:::

## StrongSwan
### Install
```bash
# 依赖环境
yum install pam-devel openssl-devel make gcc gmp-devel

# 下载源码
wget https://download.strongswan.org/strongswan-5.6.2.tar.gz

# 编译组件
./configure --prefix=/usr --sysconfdir=/etc/strongswan --enable-eap-identity --enable-eap-md5 \
            --enable-eap-mschapv2 --enable-eap-tls --enable-eap-ttls --enable-eap-peap \
            --enable-eap-tnc --enable-eap-dynamic --enable-eap-radius --enable-xauth-eap \
            --enable-xauth-pam --enable-dhcp --enable-openssl --enable-addrblock \
            --enable-unity --enable-certexpire --enable-radattr --enable-tools \
            --enable-openssl --disable-gmp
make -j 2 && make install
```
### 证书创建
ps：如果不需要证书则可忽略这步

```bash
ipsec pki --gen --outform pem > ca.pem
ipsec pki --self --in ca.pem --dn "C=com, O=myvpn, CN=VPN CA" --ca --outform pem >ca.cert.pem
ipsec pki --gen --outform pem > server.pem
ipsec pki --pub --in server.pem | ipsec pki --issue --cacert ca.cert.pem --cakey ca.pem --dn "C=com, O=myvpn, CN=x.x.x.x" --san="x.x.x.x" --flag serverAuth --flag ikeIntermediate --outform pem > server.cert.pem
ipsec pki --gen --outform pem > client.pem
ipsec pki --pub --in client.pem | ipsec pki --issue --cacert ca.cert.pem --cakey ca.pem --dn "C=com, O=myvpn, CN=VPN Client" --outform pem > client.cert.pem
openssl pkcs12 -export -inkey client.pem -in client.cert.pem -name "client" -certfile ca.cert.pem -caname "VPN CA"  -out client.cert.p12
# ca.cert.pem和client.cert.p12 是客户端证书
# 两个选项 CN 和-san 的参数 指定的是ip 或者是域名
# 如果是ip必须是当前服务器的外网ip
# 如果是域名 那么域名必须解析到这台服务器。
# 如果有多个机器，可以在域名添加多个记录 然后用同一份证书。

#将证书放到指定位置
cp -r ca.cert.pem   /etc/strongswan/ipsec.d/cacerts/
cp -r server.cert.pem  /etc/strongswan/ipsec.d/certs/
cp -r server.pem  /etc/strongswan/ipsec.d/private/
cp -r client.cert.pem  /etc/strongswan/ipsec.d/certs/
cp -r client.pem   /etc/strongswan/private/
cp -r ca.cert.pem   /etc/strongswan/ipsec.d/cacert/
cp -r client.pem  /etc/strongswan/ipsec.d/private/
```
### Config
vim /etc/strongswan/strongswan.conf
```bash
charon {
        load_modular = yes
        duplicheck.enable = yes
        compress = yes
        plugins {
                include strongswan.d/charon/*.conf
        }
        dns1 = 114.114.114.114
        dns2 = 114.114.114.114
        nbns1 = 114.114.114.114
        nbns2 = 114.114.114.114

filelog {
        /var/log/strongswan.log {
            time_format = %b %e %T
            ike_name = yes
	    append = no
            default = 2
            flush_line = yes
        }
}
}
include strongswan.d/*.conf
```
vim /etc/strongswan/ipsec.secrets
```bash
: RSA "/etc/strongswan/ipsec.d/private/server.pem"	# 指定服务器证书
: PSK "d35Xdigi"	# psk的密钥 也就是手机连接时候填写的预共享密钥
test %any : XAUTH "qwe123"	# 测试用户账户以及密码 
test %any : EAP "qwe123" 
```
vim /etc/strongswan/ipsec.conf
```bash
config setup
    charondebug="ike 1, knl 1, cfg 0"
    uniqueids=never

conn ikev2-vpn
   auto=route
   compress=no
   type=tunnel
   keyexchange=ikev2
   fragmentation=yes
   forceencaps=yes
   ike=aes256-sha1-modp1024,3des-sha1-modp1024!
   esp=aes256-sha1,3des-sha1!
   #dpdaction=clear
   dpddelay=300s
   rekey=no
   left=%any
   leftid=x.x.x.x	# IP或域名
   leftcert= /etc/strongswan/ipsec.d/certs/server.cert.pem
   leftsendcert=always
   leftsubnet=0.0.0.0/0
   leftauth=pubkey
   rightauth=eap-mschapv2
   eap_identity=%any
   rightsourceip=10.42.42.0/24

conn android_xauth_psk
    esp=3des-md5,3des-sha1
    ike=3des-md5-modp1536,3des-sha-modp1536,3des-md5-modp1024,3des-sha-modp1024
    keyexchange=ikev1

    leftid=x.x.x.x	# IP或域名
    left=%defaultroute
    leftauth=psk
    leftsubnet=0.0.0.0/0

    rightid=%any
    right=%any
    rightauth=psk
    rightauth2=xauth-noauth
    rightsourceip=10.42.42.0/24
    auto=route
    fragmentation=yes


conn ios_xauth_psk
    keyexchange=ikev2
    ike=aes256-sha256-modp2048,3des-sha1-modp2048,aes256-sha1-modp2048!
    esp=aes256-sha256,3des-sha1,aes256-sha1!
    rekey=no
    left=%defaultroute
    leftid= x.x.x.x	# IP或域名
    leftsendcert=always
    leftsubnet=0.0.0.0/0
    right=%any
    rightauth=psk
    rightsourceip=10.31.2.0/24
    rightsendcert=never
    eap_identity=%any
    dpdaction=clear
    fragmentation=yes
    auto=route
```

vim /etc/strongswan/strongswan.d/charon/eap-radius.conf
```bash
# 在servers段添加
vpnserver{
secret = testing123
address = x.x.x.x #改freeradius服务器IP
}
```
vim /etc/init.d/strongswan
```bash
#!/bin/sh
#
# strongswan   An implementation of key management system for IPsec
#
# chkconfig:   - 48 52
# description: Starts or stops the Strongswan daemon.

### BEGIN INIT INFO
# Provides: ipsec
# Required-Start: $network $remote_fs $syslog $named
# Required-Stop: $syslog $remote_fs
# Default-Start:
# Default-Stop: 0 1 6
# Short-Description: Start Strongswan daemons at boot time
### END INIT INFO

# Source function library.
. /etc/rc.d/init.d/functions

exec="/usr/sbin/ipsec"
prog="strongswan"
status_prog="starter"
config="/etc/strongswan/strongswan.conf"

lockfile=/var/lock/subsys/$prog

start() {
    [ -x $exec ] || exit 5
    [ -f $config ] || exit 6
    echo -n $"Starting $prog: "
    daemon $exec start
    retval=$?
    echo
    [ $retval -eq 0 ] && touch $lockfile
    return $retval
}

stop() {
    echo -n $"Stopping $prog: "
    $exec stop
    retval=$?
    echo
    [ $retval -eq 0 ] && rm -f $lockfile
    return $retval
}

restart() {
    stop
    start
}

reload() {
    restart
}

force_reload() {
    restart
}

_status() {
    # run checks to determine if the service is running or use generic status
    status $status_prog
}

_status_q() {
    _status >/dev/null 2>&1
}


case "$1" in
    start)
        _status_q && exit 0
        $1
        ;;
    stop)
        _status_q || exit 0
        $1
        ;;
    restart)
        $1
        ;;
    reload)
        _status_q || exit 7
        $1
        ;;
    force-reload)
        force_reload
        ;;
    status)
        _status
        ;;
    condrestart|try-restart)
        _status_q || exit 0
        restart
        ;;
    *)
        echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload}"
        exit 2
esac
exit $?
```
### Run
chmod 775 /etc/init.d/strongswan && service strongswan restart
### 网卡设置
vim /etc/sysctl.conf

```bash
net.ipv4.ip_forward = 1
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.log_martians = 0
net.ipv4.conf.default.log_martians = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.icmp_echo_ignore_all=1
```
#### 应用设置
sysctl -p
### iptables转发
```bash
yum install iptables-services iptables -y
```
vim /etc/sysconfig/iptables
```bash
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [1653703:636497785]
-A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
-A INPUT -p tcp -m tcp --dport 80 -j ACCEPT 
-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT 
-A INPUT -i lo -j ACCEPT 
-A INPUT -p udp -m udp --dport 500 -j ACCEPT 
-A INPUT -p udp -m udp --dport 4500 -j ACCEPT 
-A INPUT -p esp -j ACCEPT 
-A INPUT -p udp -m udp --dport 500 -j ACCEPT 
-A INPUT -p udp -m udp --dport 4500 -j ACCEPT 
-A INPUT -p udp --dport 1701 -j ACCEPT  
-A INPUT -p tcp --dport 1723 -j ACCEPT
-A INPUT -p esp -j ACCEPT 
-A INPUT -j DROP 
-A FORWARD -s 10.42.42.0/24 -m policy --dir in --pol ipsec --proto esp -j ACCEPT 
-A FORWARD -d 10.42.42.0/24 -m policy --dir out --pol ipsec --proto esp -j ACCEPT 
-A FORWARD -d 10.42.0.0/24 -m policy --dir out --pol ipsec --proto esp -j ACCEPT 
-A FORWARD -j DROP 
COMMIT

*nat
:PREROUTING ACCEPT [540305:24190960]
:POSTROUTING ACCEPT [915:81107]
:OUTPUT ACCEPT [7534:490835]
-A POSTROUTING -s 10.10.0.0/24 -j MASQUERADE 
-A POSTROUTING -o eth1 -j MASQUERADE 
-A POSTROUTING -s 10.42.42.0/24 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT 
-A POSTROUTING -s 10.42.42.0/24 -o eth0 -j MASQUERADE 
-A POSTROUTING -o eth0 -j MASQUERADE 
-A POSTROUTING -o eth0 -j MASQUERADE 
-A POSTROUTING -o eth0 -j MASQUERADE 
COMMIT

*mangle
:PREROUTING ACCEPT [3535180:895458169]
:INPUT ACCEPT [2665494:362520981]
:FORWARD ACCEPT [869683:532937025]
:OUTPUT ACCEPT [1653703:636497785]
:POSTROUTING ACCEPT [2516770:1168626334]
-A FORWARD -s 10.42.42.0/24 -o eth0 -p tcp -m policy --dir in --pol ipsec -m tcp --tcp-flags SYN,RST SYN -m tcpmss --mss 1361:1536 -j TCPMSS --set-mss 1360 
COMMIT
```
#### Run
systemctl restart iptables

## FreeRADIUS

### Install
```bash
yum install freeradius freeradius-mysql freeradius-utils -y
```
### Config
vim /etc/raddb/radiusd.conf
```bash
# 修改
auth = yes
auth_badpass = yes
auth_goodpass = yes
```
vim /etc/raddb/clients.conf
```bash
# 在client localhost{}之上添加
client all_client {
    ipaddr = 0.0.0.0/0
    secret = testing123
    require_message_authenticator = no
}
```
vim/etc/raddb/mods-enabled/sql
```bash
# 修改
driver = "rlm_sql_mysql"
#当前数据库名
        dialect = "mysql"
        #数据库IP，端口，登录用户，密码，库名
server = "172.16.61.93"
        port = 3306
        login = "radius"
        password = "radpass"
        radius_db = "radius"
```
vim /etc/raddb/sites-enabled/inner-tunnel
```bash
server inner-tunnel {
listen {
       ipaddr = 127.0.0.1
       port = 18120
       type = auth
}
authorize {
	filter_username
	chap
	mschap
	suffix
	update control {
		&Proxy-To-Realm := LOCAL
	}
	eap {
		ok = return
	}
	files
	-sql
	-ldap
	expiration
	logintime
	pap
}
authenticate {
	Auth-Type PAP {
		pap
	}
	Auth-Type CHAP {
		chap
	}
	Auth-Type MS-CHAP {
		mschap
	}
	mschap
	eap
}
session {
	radutmp
}
post-auth {
	-sql
	if (0) {
		update reply {
			User-Name !* ANY
			Message-Authenticator !* ANY
			EAP-Message !* ANY
			Proxy-State !* ANY
			MS-MPPE-Encryption-Types !* ANY
			MS-MPPE-Encryption-Policy !* ANY
			MS-MPPE-Send-Key !* ANY
			MS-MPPE-Recv-Key !* ANY
		}
		update {
			&outer.session-state: += &reply:
		}
	}
	Post-Auth-Type REJECT {
		-sql
		attr_filter.access_reject
		update outer.session-state {
			&Module-Failure-Message := &request:Module-Failure-Message
		}
	}
}
pre-proxy {
}
post-proxy {
	eap
}
```
并删除default

vim /etc/init.d/radiusd
```bash
#!/bin/sh
#
# radiusd Start/Stop the FreeRADIUS daemon
#
# chkconfig: - 88 10
# description: Extensible, configurable, high performance RADIUS server.

### BEGIN INIT INFO
# Provides: radiusd
# Required-Start: $network
# Required-Stop:
# Default-Start:
# Default-Stop:
# Should-Start: $time $syslog mysql ldap postgresql samba krb5-kdc
# Should-Stop:
# Short-Description: FreeRADIUS server
# Description: Extensible, configurable, high performance RADIUS server.
### END INIT INFO

# Source function library.
. /etc/rc.d/init.d/functions

prog=radiusd

[ -e /etc/sysconfig/$prog ] && . /etc/sysconfig/$prog

exec=${exec:=/usr/sbin/$prog}
config_dir=${config_dir:=/etc/raddb}
config=${config:=$config_dir/radiusd.conf}
pidfile=${pidfile:=/var/run/$prog/$prog.pid}
lockfile=${lockfile:=/var/lock/subsys/radiusd}

start() {
    [ -x $exec ] || exit 5
    [ -f $config ] || exit 6
    echo -n $"Starting $prog: "
    daemon --pidfile $pidfile $exec -d $config_dir
    retval=$?
    echo
    [ $retval -eq 0 ] && touch $lockfile
    return $retval
}

stop() {
    echo -n $"Stopping $prog: "
    killproc -p $pidfile $prog
    retval=$?
    echo
    [ $retval -eq 0 ] && rm -f $lockfile
    return $retval
}

restart() {
    stop
    start
}

reload() {
    # radiusd may not be capable of a 100% configuration reload depending
    # on which loadable modules are in use, if sending the server a
    # HUP is not sufficient then use restart here instead. However, we
    # prefer by default to use HUP since it's what is usually desired.
    #    
    # restart

    kill -HUP `pidofproc -p $pidfile $prog`
}

force_reload() {
    restart
}

rh_status() {
    # run checks to determine if the service is running or use generic status
    status -p $pidfile $prog
}

rh_status_q() {
    rh_status >/dev/null 2>&1
}


case "$1" in
    start)
        rh_status_q && exit 0
        $1
        ;;
    stop)
        rh_status_q || exit 0
        $1
        ;;
    restart)
        $1
        ;;
    reload)
        rh_status_q || exit 7
        $1
        ;;
    force-reload)
        force_reload
        ;;
    status)
        rh_status
        ;;
    condrestart|try-restart)
        rh_status_q || exit 0
        restart
        ;;
    *)
        echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload}"
        exit 2
esac
exit $?
```
### Run
chmod 775 /etc/init.d/radiusd && service radiusd start

## DaloRADIUS
::: tip
freeradius web管理界面
:::
[官网下载](https://sourceforge.net/projects/daloradius/)

解压后放入web根目录

vim daloradius/library/daloradius.conf.php
```bash
# 对以下配置进行修改
$configValues['CONFIG_DB_ENGINE'] = 'mysql';
$configValues['CONFIG_DB_HOST'] = 'x.x.x.x';
$configValues['CONFIG_DB_PORT'] = '3306';
$configValues['CONFIG_DB_USER'] = 'radius';
$configValues['CONFIG_DB_PASS'] = 'radpass';
$configValues['CONFIG_DB_NAME'] = 'radius';
.......
$configValues['CONFIG_MAINT_TEST_USER_RADIUSSERVER'] = '127.0.0.1';
$configValues['CONFIG_MAINT_TEST_USER_RADIUSPORT'] = '1812';
$configValues['CONFIG_MAINT_TEST_USER_NASPORT'] = '0';
$configValues['CONFIG_MAINT_TEST_USER_RADIUSSECRET'] = 'testing123';
```
## MySQL表导入
### 建表
```bash
mysql> CREATE DATABASE radius;
mysql> GRANT ALL PRIVILEGES ON radius.* TO radius@'localhost' IDENTIFIED BY "radpass";
mysql> GRANT ALL PRIVILEGES ON radius.* TO radius@'%' IDENTIFIED BY "radpass";
mysql> flush privileges;
```
### 导入
```bash
mysql> use radius;
mysql> source /etc/raddb/mods-config/sql/main/mysql/schema.sql
mysql> source /var/www/html/daloradius/contrib/db/fr2-mysql-daloradius-and-freeradius.sql
mysql> source /var/www/html/daloradius/contrib/db/mysql-daloradius.sql
```
