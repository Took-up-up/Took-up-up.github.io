---
title: Https证书有效期查询
date: 2019-04-09
tags:
 - 
categories:
 - linux
---

::: tip 
批量查询https证书有效时长
:::
```bash
#!/bin/bash
for ip in `cat 443` #需要监测的域名
do
{
{
    END_TIME=$(echo | openssl s_client -servername $yuming  -connect $yuming:443 2>/dev/null | openssl x509 -noout -dates -subject|grep 'After'| awk -F '=' '{print $2}'| awk -F ' +' '{print $1,$2,$4 }' )

    b=$(echo | openssl s_client -servername $yuming  -connect $yuming:443 2>/dev/null | openssl x509 -subject|grep 'subject' )

    END_TIME1=$(date +%s -d "$END_TIME") #将日期转化为时间戳
    NOW_TIME=$(date +%s -d "$(date | awk -F ' +'  '{print $2,$3,$6}')") #将目前的日期也转化为时间戳
    a=$(($(($END_TIME1-$NOW_TIME))/(60*60*24))) #到期时间减去目前时间再转化为天数
    echo '$yuming $b $a天后过期'
}&
}
done

