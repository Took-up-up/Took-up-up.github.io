---
title: 图片拼接
date: 2019-04-09
tags:
 - 
categories:
 - item
---

::: tip 介绍
把单张图片拼接成长图
要求: 同等宽度
:::
```python
import cv2
import numpy as np
from PIL import Image
from os import listdir

def up_and1():
    img = cv2.imread('E:\\1.png')
    img1 = cv2.imread('E:\\2.png')
    img2 = cv2.imread('E:\\3.png')
    img3 = np.concatenate([img, img1, img2])
    cv2.imwrite('E:\\write.png', img3)
    # 同宽


if __name__ == '__main__':
    up_and1()
```
