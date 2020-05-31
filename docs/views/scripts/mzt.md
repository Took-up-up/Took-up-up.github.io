---
title: 批量爬取图片
date: 2019-04-09
tags:
 - 爬虫
categories:
 - ss
---
```python
import requests
import os
import string
import re
from lxml import etree
from threading import *
from time import sleep


nMaxThread = 6  # 这里设置需要开启几条线程
ThreadLock = BoundedSemaphore(nMaxThread)

gHeads = {
    "User-Agent": "Mozilla/7.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.87 Safari/537.36",
}


class Mt(Thread):
    def __init__(self, mainReferer, url, title, pagenum, pagename):
        Thread.__init__(self)
        self.MainReferer = mainReferer
        self.url = url  # 这里的url在后面的referer中需要使用
        self.title = title
        self.pagenum = pagenum
        self.pagename = pagename

    def run(self):
        try:
            PhotoUrl, Page = self.GetPhotoUrlAndPageNum()
            if PhotoUrl and Page > 0:
                self.SavePhoto(PhotoUrl, Page, self.pagenum, self.pagename)
        finally:
            ThreadLock.release()

    def GetPhotoUrlAndPageNum(self):
        html = requests.get(self.url, headers=gHeads)
        if html.status_code == 200:
            xmlContent = etree.HTML(html.text)
            PhotoUrl = xmlContent.xpath("//div[@class='r_img ']/img/@data-original")
            page = len(PhotoUrl)
            return PhotoUrl, page
        else:
            return None, None

    def SavePhoto(self, url, page, pagenum, pagename):
        repagename = re.sub('[\/:*?"<>|]', '-', pagename)
        a = str(pagenum) + "-" + repagename
        savePath = "E:\\Mt/%s/%s" % (a, (self.title).rstrip())
        if not os.path.exists(savePath):
            os.makedirs(savePath)
        heads = {
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
                "Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
            }
            # if i == 0:
            #     break
            # test-broken(down-stop)
        for i in range(len(url)):
            a = len(url) - i
            j = 0
            while j < 5:
                print("Download :", self.title, url[i])
                html = requests.get(url[i], headers=heads, timeout=(5, 10))
                if html.status_code == 200:
                    with open(savePath + "/%d.jpg" % a, "wb") as f:
                        f.write(html.content)
                        f.close()
                        print("已下载，%s剩余图片%d" % (self.title, (len(url) - i)))
                        break
                elif html.status_code == 404:
                    j += 1
                    sleep(1)
                    continue
                else:
                    return None


def main(a):
    # while True:
    #     try:
    #         nNum = int(input(u"请输入要下载几页: "))
    #         if nNum > 0:
    #             break
    #     except ValueError:
    #         print(u"请输入数字。")
    #         continue
    # for i in range(nNum):
    pagenum = a
    url = "https://xxx/book/%d" % pagenum
    url1 = "https://xxx"
    html = requests.get(url, headers=gHeads)
    if html.status_code == 200:
        xmlContent = etree.HTML(html.content)
        hrefList = xmlContent.xpath("//div[@class='d_menu']/ul/li/a")  # 所有页码的地址
        titleList = xmlContent.xpath("//div[@class='d_menu']/ul/li/a/b")  # 页码的标题
        pagename = (xmlContent.xpath("//div[@class='d_bg_t']/a"))[1].text  # 文件标题
        rehrefList = []
        retitleList = []
        for i in hrefList:
            a = url1 + i.attrib['href']
            rehrefList.append(a)
        for j in range(len(titleList)):
            a = titleList[j].text
            retitleList.append(a)

        # retitleList = []
        # #  替换掉windows中的非法字符
        # for a in titleList:
        #     a = re.sub('[\/:*?"<>|]', '-', a)
        #     retitleList.append(a)
        for x in range(len(rehrefList)):
            ThreadLock.acquire()
            t = Mt(url, rehrefList[x], retitleList[x], pagenum, pagename)
            t.start()
    # sleep(60)


if __name__ == '__main__':
    for a in range(1, 100):
        main(a)
        sleep(10)

```
