---
title: Scopus文献数据爬取
date: 2019-04-09
tags:
 - 爬虫
categories:
 - scripts
---

::: tip 介绍
Scopus是全球最大的文献摘要与科研信息引用数据库，每日更新，内容包括：

· 拥有5830多万条记录（1996年后3500万条；1823-1995年2200万条）

· 来自5,000多家国际出版商的21,900期刊，含20,000多种同行评议期刊

· 2,800份黄金开放获取访问期刊

· 3750种在编期刊（先于发表1-4个月获取）

· 75,000+本图书

· 超过680万份会议论文

· 超过500套丛书系列

· 100%全覆盖Medline

· 覆盖150多个国家的超过40多种语言的刊物，含500余种同行评议的中文期刊，远多于其他国际同行
:::
::: tip 说明
1. 爬取Scopus需要注册 elsevier 开发者账号 key
2. [API文档](https://dev.elsevier.com/api_docs.html)
3. 使用 pybliometrics 库
:::
##  pybliometrics
### Install
```bash
pip3 install pybliometrics
```
### 配置 key
vim ~/.scopus/config.ini
```bash
[Authentication]
APIKey = 37e97e97e894gt1sg234048hr64ae345
InstToken =
# InstToken 无需配置
```
### Code
```python
import pybliometrics
from pybliometrics.scopus import AuthorRetrieval
a = AuthorRetrieval('45612149875')
print(a.eid)
print(a.document_count)

from pybliometrics.scopus import ScopusSearch
try:
    a = ScopusSearch('DOI(10.1016/S0001-8791(02)00059-3)')
    print(a.results, sys.argv[2])
except:
    print('a' in locals().keys())
```
