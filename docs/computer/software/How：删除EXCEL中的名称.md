---
# PDF Start
# title: How：删除Excel中的名称
# author: 张年强
# subject: Household Facilities
# keywords: [Excel, 名称]
# PDF End
# Github pages Jekyll Start
# title: How：删除Excel中的名称
# date: 2020-09-06 10:00:00 +0800
# last_modified_at: 2022-11-10 10:00:00 +0800
# categories: [Household Facilities]
# tags: [Excel, 名称] 
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 8
title: How:删除Excel中的名称
tags: [维修, Excel, 名称]
toc_max_heading_level: 4
last_update:
  date: 11/10/2022
  author: 张年强
# Docusaurus End
---

## 场景定义：

1. 把一个区域或公式定义为名称，当需要引用这个区域或公式时，直接使用定义后的名称，而不用重复输入
2. 环境描述：Microsoft Office 2016

## 处理过程：

解决方案一：删除可见名称：公式-名称管理器-多选-点击“删除”

解决方案二：删除隐藏名称

1. 显示隐藏的名称

   点击开发工具（文件-选项-自定义功能区-勾选开发工具）
   点击Visual Basic
   选择表名称
   在区域内输入以下代码并运行

   ```
   Sub 显示名称（）
   Dim I as Name
   For Each i In ActiveWorkbook.Names
   i.Visible=Ture
   Next
   End Sub
   ```

2. 按照解决方案一处理
