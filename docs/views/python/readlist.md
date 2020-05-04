---
title: Read list
date: 2019-04-09
tags:
 - 
categories:
 - python
---

::: tip 介绍
1. 这是一个例子；<br>
:::
```python
import os

f = open('1.txt', 'r')
line = f.readline().strip()
linestr = line.split("'")
for item in linestr:
    print(item)
    os.system("wget -c --timeout=3 --waitretry=3 --tries=2 " + item)

```
```python
import os
import re

path = './url'
for file in os.listdir(path):   # 读取目录列表
    file1 = os.path.join(path, file)    # 合成完整路径
    mkdir = os.path.splitext(file)[0]   # 获取文件名[0]，类型[1]
    if not os.path.exists(mkdir):
        os.makedirs(mkdir)
    f = open(file1, 'r')
    line = f.readline().strip()
    #linestr = line.split("'")
    linestr = re.split("[',\[\]]", line)    # 批量切片
    a = 0
    for item in linestr:
        if len(item) > 2:
            a += 1
            print(item)
            os.system("wget -c --timeout=3 --waitretry=3 --tries=2  %s -O ./%s/%s.jpg" % (item, mkdir, a))
            # -c 断点续传防止重复  --waitretry 超时之后多久 --tries=2 尝试次数

```
```python
import os
import requests
from lxml import etree


sHeads = {
    "User-Agent": "Mozilla/8.0 (Windows NT 8.1; WOW64) AppleWebKit/539.47 (KHTML, like Gecko) Chrome/76.0.3712.19 Safari/539.47",
}

def main(urls):
    html = requests.get(urls, headers=sHeads)
    if html.status_code == 200:
        print(200)
        xmlContent = etree.HTML(html.content)
        href = xmlContent.xpath("//div[@class='f14']/img/@src")  # 所有图片
        title = (xmlContent.xpath("//h1[@id='subject_tpc']"))[0].text# 标题
        print(title, "开始下载")
        savePath = "./url/%s" % title

        # a = re.sub('[\/:*?"<>|]', '-', a)
        file = open(savePath + ".txt", "w")   # 图片链接按标题写入文件
        file.write(str(href))
        file.close()


if __name__ == '__main__':
    url = [

    ]
    for i in url:
        print(i)
        main(i)


```
