---
title: Flask
date: 2020-02-19
tags:
 - 
categories:
 - Flask
---

::: tip 介绍
1. 这是一个例子；<br>
2.. 你可以打开 [ex](ex)
:::

## 路由系统
```python
@app.route('/user/<username>')
# 字符串
@app.route('/post/<int:post_id>')
# 整数
@app.route('/post/<float:post_id>')
# 小数
@app.route('/post/<path:path>')
# 路径
@app.route('/login', methods=['GET', 'POST'])

```
