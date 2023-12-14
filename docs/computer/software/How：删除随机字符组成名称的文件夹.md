---
# PDF Start
# title: How：删除随机字符组成名称的文件夹
# author: 张年强
# subject: Household Facilities
# keywords: [随机字符, 文件夹]
# PDF End
# Github pages Jekyll Start
# title: How：删除随机字符组成名称的文件夹
# date: 2020-09-04 10:00:00 +0800
# last_modified_at: 2022-11-06 10:00:00 +0800
# categories: [Household Facilities]
# tags: [随机字符, 文件夹] 
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 4
title: How:删除随机字符组成名称的文件夹
tags: [维修, 随机字符, 文件夹]
toc_max_heading_level: 4
last_update:
  date: 11/06/2022
  author: 张年强
# Docusaurus End
---

## 场景定义：

1. 随机字符组成文件夹名称：由数字和英文字母随机组合而成，共32位，无意义，可移动，可重命名，但无法删除，如：6c285b61a070387fc68aa3bf8f6be734
2. 产生原因：Windows 7系统更新补丁时产生的临时文件夹，位于剩余空间大的硬盘分区或移动硬盘，由于本机用户不是所有者所以无法删除
3. 测试OS：Windows 7

## 处理过程：

1. 选中乱码文件夹-右键属性
2. 安全-高级
3. 所有者-编辑
4. 选中本机用户名-勾选替换子容器和对象所有者-确定
5. 删除文件夹
6. 文件夹删除成功
