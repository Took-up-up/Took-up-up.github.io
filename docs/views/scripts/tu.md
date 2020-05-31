---
title: pyppeteer 爬取反爬虫网站
date: 2019-04-09
tags:
 - 爬虫
categories:
 - scripts
---

::: tip 介绍
利用pyppeteer爬取图片
:::
```bash
import asyncio
import re
import os
import requests
from pyppeteer import launch
from pyquery import PyQuery as pq
from time import sleep
from multiprocessing import Pool


async def main(url, x):
    browser = await launch({
        'dumpio': True,     # 解决浏览器多开卡死
        'headless': True,  # 关闭无头模式-------------gui
        'devtools': False,  # 控制界面的显示，用来调试
        'executablePath': 'E://chrome.exe',     # 浏览器位置
        'args': [
            '--disable-extensions',
            '--hide-scrollbars',
            '--disable-bundled-ppapi-flash',
            '--mute-audio',
            '--no-sandbox',           # --no-sandbox 在docker里使用时需要加入的参数,不然报错
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-xss-auditor',
            # "--proxy-server=http://122.224.65.198:3128"
            # "--proxy-server=http://61.153.251.150:22222"
        ]
    })
    page = await browser.newPage()
    await page.goto(url, waitUntil=["networkidle0", "load", "domcontentloaded"], options={'timeout': 0})
    doc = pq(await page.content())
    if x == 1:
        print('章数:', (doc('.pull-left').length - 1))
        rehref = []
        retitle = []
        name_list = await page.xpath('//div[@class="inner"]/h2')
        name = await (await name_list.getProperty('innerText')).jsonValue()  # 获取小说名
        #######
        sleep(10)
        href_list = await page.xpath('//div[@class="entry"]/ul/li/a')
        for item in href_list:  # 遍历出所有链接和文本
            href1 = await (await item.getProperty('href')).jsonValue()  # 获取链接
            title1 = await (await item.getProperty('text')).jsonValue()  # 获取文本
            rehref.append(href1)  # 根据链接获取每一话的图片url的列表
            retitle.append(title1)  # 每一话标题
        # name_list = await page.xpath('//div[@class="inner"]/h2')
        # name = await (await name_list.getProperty('innerText')).jsonValue()  # 获取小说名
        await browser.close()
        # print(rehref, retitle)
        # print(rehref, retitle, name)
        # print(name)
        # sleep(10)
        return rehref, retitle, name
    else:
        print('假图片张数:', doc('.lazy').length)
        src_list = await page.xpath('//div[@class="charpetBox"]/img')       # 图片url列表
        src_one = await (await src_list[0].getProperty('src')).jsonValue()  # 第一张图片url
        await browser.close()
        return src_one


def write(href, title, name):
    name = str(re.sub('[\/:*?"<>|]', '', name))
    savePath = "E:\\%s" % name
    file = open(savePath + 'data.txt', 'w')  # url写入文件
    file.write(str(href))
    file.close()
    file = open(savePath + 'data1.txt', 'w')  # title写入文件
    file.write(str(title))
    file.close()


def read(name):
    savePath = "E:\\%s" % name
    file = open(savePath + 'data.txt', 'r')    # url读取后获取图片url 1.jpg存储备用
    line = file.readline().strip()
    linestr = line.split("'")
    file1 = open(savePath + 'data1.txt', 'r')
    line1 = (file1.readline().strip()).split("'")
    po = Pool(3)    #####
    for url, pagename in zip(linestr[1:-1:2], line1[1:-1:2]):
        # print(len(linestr[1:-1:2]))
        print(url, pagename)
        pagename = re.sub('[\/:*?"<>|]', '-', pagename)
        # sleep(10)
        src = asyncio.get_event_loop().run_until_complete(main(url, 2))
        src = str(src.replace(src[-6:], '/'))
        # download(src, pagename, name)
        po.apply_async(download, (src, pagename, name))
    po.close()
    po.join()


def download(src, pagename, name):
    gHeads = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.87 Safari/537.36",
    }
    savePath = "E:\\%s/%s/" % (name, pagename)
    error = 0
    if not os.path.exists(savePath):
        os.makedirs(savePath)
    else:
        print("已存在 %s" % savePath)
        return 1
    for num in range(1, 100):
        url = src + str(num) + ".jpg"
        html = requests.get(url, headers=gHeads, timeout=5.5)
        if html.status_code == 200:
            with open(savePath + "/%d.jpg" % num, "wb") as f:
                f.write(html.content)
                f.close()
                print("已下载 %d" % num)
        else:
            print("无效 %d" % num)
            error += 1
            if error >= 3:
                break
            continue



if __name__ == '__main__':
    
    for d in range(1, 199):
        url = 'https://xx.com/?act=list&aid=%d' % d
        href, title, name = asyncio.get_event_loop().run_until_complete(main(url, 1))
        write(href, title, name)
        sleep(5)
        read(name)
```
