---
# PDF Start
# title: How：修改Hosts
# author: 张年强
# subject: Household Facilities
# keywords: [Hosts, 修改]
# PDF End
# Github pages Jekyll Start
# title: How：修改Hosts
# date: 2023-03-15 10:00:00 +0800
# last_modified_at: 2023-03-15 10:00:00 +0800
# categories: [Household Facilities]
# tags: [Hosts, 修改] 
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 15
title: How:修改Hosts
tags: [维修, Hosts, 修改]
toc_max_heading_level: 4
last_update:
  date: 03/15/2023
  author: 张年强
# Docusaurus End
---

## 场景定义：

1. Hosts文件是一个用于储存计算机网络中各节点信息的系统文件；
2. Hosts文件没有扩展名；
3. Hosts文件使用记事本打开；
4. Hosts文件的作用是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从Hosts文件中寻找对应的IP地址。一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。
5. 环境描述：Windows 10

## 处理过程：

1. Hosts存储位置C:\windows\system32\drivers\etc\

2. 复制hosts文件至其他文件夹

3. 打开，修改并保存

4. 原文件重命名为.old

5. 修改后文件复制到原路径

6. 删除修改后文件的.txt后缀
