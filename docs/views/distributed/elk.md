---
title: ELK 日志分析系统
date: 2019-04-09
tags:
 - 
categories:
 - 
---

::: tip
ELK(Elastic Stack)是Elasticsearch、Logstash、Kibana三大开源框架首字母大写简称
#### Elasticsearch 是一个基于 Lucene、分布式、通过 Restful 方式进行交互的近实时搜索平台框架
#### Logstash 是 ELK 的中央数据`流引擎`，用于从不同目标（文件/数据存储/MQ）收集的不同格式数据，经过过滤后支持输出到不同目的地（文件/MQ/redis/elasticsearch/kafka等）
#### Kibana 可以将 elasticsearch 的数据通过友好的页面展示出来，提供实时分析的功能
#### Filebeat 监控日志文件，获取服务器上指定路径的日志文件，并将这些日志转发到Logstash实例以进行处理
:::

## Elasticsearch
### Install
[ELasticsearch官网](https://www.elastic.co/downloads/elasticsearch)
选择合适的安装方式以及版本
```bash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.7.0-linux-x86_64.tar.gz
tar -zxvf elasticsearch-7.7.0-linux-x86_64.tar.gz && cd elasticsearch-7.7.0

```
### Config
```bash
# 配置文件elasticsearch.yml，具体配置项可以对照官网
```
### Run
```bash
:~/elasticsearch-7.7.0$ bin/elasticsearch
```
### 访问 http://localhost:9200/

## Filebeat
### Install
[Filebeat官网](https://www.elastic.co/downloads/beats/filebeat)
选择合适的安装方式以及版本
```bash
wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.7.0-linux-x86_64.tar.gz

tar -zxvf filebeat-7.7.0-linux-x86_64.tar.gz && cd filebeat-7.7.0
# 编辑filebeat.yml 置文件中有各种输入以及输出，根据自己的需求正确配置
```
## Logstash
[Logstash官网](https://www.elastic.co/cn/downloads/logstash)
选择合适的安装方式以及版本
```bash
java -vsersion
# JDK版本不应低于1.8
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.7.0.tar.gz
tar -zxvf logstash-7.7.0.tar.gz && cd logstash-7.7.0
```
### Config
vim logstash-simple.conf
```bash
input { stdin { } }
output {
  stdout { codec => rubydebug }
}
```
### Run
```bash
~/logstash-7.7.0$bin/logstash -f logstash-simple.conf
```
## Kibana
### Install
[Kibana官网](https://www.elastic.co/cn/downloads/kibana)
选择合适的安装方式以及版本
```bash
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.7.0-linux-x86_64.tar.gz
tar -zxvf kibana-7.7.0-linux-x86_64.tar.gz && cd Ukibana-7.7.0
```
### Config
vim config/kibana.yml
```bash
server.port: 5601
server.host: "0.0.0.0"
elasticsearch.url: "http://127.0.0.1:9201"    //修改为集群的端口号
kibana.index: ".kibana"
```
### Run
```bash
bin/kibana
```
## Filebeat + Logstash + Elasticsearch 使用示例
下载示例数据
```bash
wget https://download.elastic.co/demos/logstash/gettingstarted/logstash-tutorial.log.gz
gunzip logstash-tutorial.log.gz
# 解压
```
vim filebeat-7.7.0/filebeat.yml
```bash
filebeat.prospectors:
- type: log
  paths:
    - /path/to/file/logstash-tutorial.log  # 下载的示例数据的文件位置绝对路径
output.elasticsearch:
  hosts: ["localhost:9200"]
```
Filebeat Run
```bash
./filebeat -e -c filebeat.yml -d "publish"
```
vim logstash-7.7.0/first-pipeline.conf
```
input {
    beats {
        port => "5044"
    }
}
 filter {
    grok {
        match => { "message" => "%{COMBINEDAPACHELOG}"}
    }
    geoip {
        source => "clientip"
    }
}
output {
    elasticsearch {
        hosts => [ "localhost:9200" ]
    }
}
```
启动Logstash
```bash
bin/logstash -f first-pipeline.conf --config.reload.automatic
# 自动重载配置文件
```
重新启动一下filebeat
```bash
rm data/registry  # 首先删掉上次的注册数据
./filebeat -e -c filebeat.yml -d "publish"
```
等程序完成，检查数据
```bash
curl 'localhost:9200/logstash-2018.09.17/_search?pretty'
```
logstash-x.x.x 是自动生成的索引，具体的生成配置还不清楚。pretty是为了友好展示
```bash
curl 'localhost:9200/_cat/indices?v'
```

