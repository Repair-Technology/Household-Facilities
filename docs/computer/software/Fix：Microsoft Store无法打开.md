---
# PDF Start
# title: Fix：Microsoft Store无法打开
# author: 张年强
# subject: Household Facilities
# keywords: [Microsoft Store, 无法打开]
# PDF End
# Github pages Jekyll Start
# title: Fix：Microsoft Store无法打开
# date: 2021-07-18 10:00:00 +0800
# last_modified_at: 2023-03-14 10:00:00 +0800
# categories: [Household Facilities]
# tags: [Microsoft Store, 无法打开]
# Github pages Jekyll End
# Docusaurus Start
sidebar_position: 7
title: Fix:Microsoft Store无法打开
tags: [维修, Microsoft Store, 无法打开]
toc_max_heading_level: 4
last_update:
  date: 03/14/2023
  author: 张年强
# Docusaurus End
---

## 问题定义：

1. Microsoft Store加载失败，错误代码: 0x80131500
2. 测试OS：Windows 10

## 处理过程：

1. 用win + R打开运行
2. 输入inetcpl.cpl
3. 打开Internet属性高级
4. 找到并勾选 TLS 1.2
5. 取消勾选TLS 1.0
6. 点击确定
