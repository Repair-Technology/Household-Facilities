---
# PDF Start
# title: Fix：Windows update无法更新
# author: 张年强
# subject: Household Facilities
# keywords: [Windows_update, 无法更新]
# PDF End
# Github pages Jekyll Start
# title: Fix：Windows update无法更新
# date: 2020-09-08 10:00:00 +0800
# last_modified_at: 2022-11-15 10:00:00 +0800
# categories: [Household Facilities]
# tags: [Windows_update, 无法更新] 
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 13
title: Fix:Windows update无法更新
tags: [维修, Windows_update, 无法更新]
toc_max_heading_level: 4
last_update:
  date: 11/15/2022
  author: 张年强
# Docusaurus End
---

## 问题定义：

1. Windows update无法更新，现象包含：

   - 一直检查更新，无结果
   - 无法更新
   - 更新错误，错误代码：800T2F76

2. 测试OS：Windows 7

## 处理过程：

1. 常规检查

   - 确认网络正常
   - 确认Windows update设置为接受更新
   - 控制面板-所有控制面板项-Windows Update-更改设置，确认选择为：
     
     - 自动安装更新
     - 下载更新，但是让我选择是否安装更新
     - 检查更新，但是让我选择是否下载和安装更新
     
     中的任意一项

2. 服务检查

   - 控制面板-所有控制面板项-管理工具-服务
   - 确认以下五项服务已经启动

     -  Background Intelligent Transfer Services
     -  Windows Update 
     -  Cryptographic Services
     -  Software licensing service
     -  Windows Installer

3. 检查更新历史

   - 控制面板-所有控制面板项-程序和功能-已安装更新
   - 如果有KB3102810更新，卸载-重装
   - 如果没有KB3102810更新，下载独安装包并更新
   - [官方下载链接x86](https://www.microsoft.com/zh-CN/download/details.aspx?id=49542)，[官方下载链接x64](https://www.microsoft.com/zh-CN/download/details.aspx?id=49540)
   - 网盘x86，链接：https://pan.baidu.com/s/1hHQM1DPMN3DKjuVI_J7rLg 提取码：LHJQ
   - 网盘x64，链接：https://pan.baidu.com/s/1NC8-0V0yg79CQCzipixqmg 提取码：LHJQ 

4. 再次检查更新，3-10分钟后收到更新，则确认解决
