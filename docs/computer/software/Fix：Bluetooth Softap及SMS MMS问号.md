---
# PDF Start
# title: Fix：Bluetooth Softap及SMS MMS问号
# author: 张年强
# subject: Household Facilities
# keywords: [Bluetooth-Softap, SMS-MMS]
# PDF End
# Github pages Jekyll Start
# title: Fix：Bluetooth Softap及SMS MMS问号
# date: 2021-02-22 10:00:00 +0800
# last_modified_at: 2022-11-08 10:00:00 +0800
# categories: [Household Facilities]
# tags: [Bluetooth-Softap, SMS-MMS] 
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 6
title: Fix:Bluetooth Softap及SMS MMS问号
tags: [维修, Bluetooth-Softap, SMS-MMS]
toc_max_heading_level: 4
last_update:
  date: 11/08/2022
  author: 张年强
# Docusaurus End
---

## 问题定义：

1. 设备管理器-其他设备-显示Bluetooth Softap及SMS MMS问号
2. 测试OS：Windows 10

## 处理过程：

解决方案一：删除已经配对的蓝牙设备

1. 控制面板-设备和打印机
2. 删除已经配对的蓝牙设备
3. 删除后设备管理器-其他设备-Bluetooth Softap及SMS MMS消失

解决方案二：取消服务

1. 控制面板-设备和打印机
2. 蓝牙设备-属性-服务
3. SMS/MMS及Bluetooth Softap前面的勾去掉

解决方案三：更新驱动 未测试

1. 控制面板-管理工具-服务
2. Bluetooth Support Service，启动并修改为自动
3. 更新蓝牙驱动
