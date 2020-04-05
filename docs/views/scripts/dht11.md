---
title: dht11传感器
date: 2019-04-09
tags:
 - 
categories:
 - scripts
---

::: tip 介绍
dht11 温度传感器调用
:::
## New
```bash
#!/usr/bin/python3
import Adafruit_DHT
import time, datetime

sensor=Adafruit_DHT.DHT11
gpio=10
humidity, temperature = Adafruit_DHT.read_retry(sensor, gpio)
if humidity is not None and temperature is not None:
    now = '%Y-%m-%d %H:%M:%S'
    time = datetime.datetime.now().strftime(now)
    print('Temp= {0:0.1f} *C  Humidity= {1:0.1f} %'.format(temperature, humidity), time)
else:
    print('Failed to get reading. Try again!')

```

## Old
```bash
#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import datetime
channel =10 #GPIO10
data = []
j = 0
GPIO.setmode(GPIO.BCM)
time.sleep(1)
GPIO.setup(channel, GPIO.OUT)
GPIO.output(channel, GPIO.LOW)
time.sleep(0.02)
GPIO.output(channel, GPIO.HIGH)
GPIO.setup(channel, GPIO.IN)


while GPIO.input(channel) == GPIO.LOW:
    continue
while GPIO.input(channel) == GPIO.HIGH:
    continue
while j < 40:
    k = 0
    while GPIO.input(channel) == GPIO.LOW:
        continue
    while GPIO.input(channel) == GPIO.HIGH:
        k += 1
        if k > 100:
            break
    if k < 8:
        data.append(0)
    else:
        data.append(1)
    j += 1
#print "sensor is working."
#print data
humidity_bit = data[0:8]
humidity_point_bit = data[8:16]
temperature_bit = data[16:24]
temperature_point_bit = data[24:32]
check_bit = data[32:40]
humidity = 0
humidity_point = 0
temperature = 0
temperature_point = 0
check = 0
for i in range(8):
    humidity += humidity_bit[i] * 2 ** (7-i)
    humidity_point += humidity_point_bit[i] * 2 ** (7-i)
    temperature += temperature_bit[i] * 2 ** (7-i)
    temperature_point += temperature_point_bit[i] * 2 ** (7-i)
    check += check_bit[i] * 2 ** (7-i)

tmp = humidity + humidity_point + temperature + temperature_point

if check == tmp:
    now = '%Y-%m-%d %H:%M:%S'
    time = datetime.datetime.now().strftime(now)
    print("temperature:", temperature, "*C, humidity:", humidity, "%", time)
else:
    print("wrong")
    #print "temperature :", temperature, "*C, humidity :", humidity, "% check :", check, ", tmp :", tmp
GPIO.cleanup()
```
