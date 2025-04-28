# 贡献指南

## 项目介绍

本项目基于开源框架[MkDocs](https://www.mkdocs.org/)，使用[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)项目作为主题，源代码托管在[GitHub](https://github.com/zhuzhouyue123/zjers)上，欢迎各位提交PR和提出issue。

## 项目结构

目前本站根据类别进行分组，根据各个类别特性进行分页处理，每页内记录关于该条目的相关信息。

源码层面，本项目的文档主要使用markdown进行编写，路径和网站链接路径保持一致，文件夹内若有`index.md`则为该部分的主页，文件夹内部可以存放相关图片资料等文件。网站的整体结构在最外层`mkdocs.yml`中的`nav`部分自定义。

```
.
├── docs						# 文档总目录
│   ├── basics					# 常用信息
│   │   ├── blackboard.md
│   │   ├── index.md
│   │   ├── myzju.md
│   │   └── peoplesoft.md
│   ├── contribute.md			# 本页 贡献指南
│   ├── course					# 课程介绍
│   │   └── ibms.md
│   ├── foodmap
│   │   └── foodmap.md			# 美食地图
│   ├── index.md				# 首页
│   └── javascripts				# 本站用到的javascript脚本
│       └── mathjax.js
└── mkdocs.yml					# mkdocs站点配置文件
```

## 贡献守则

请各位在更新`docs`目录的同时，请一并更新`mkdocs.yml`中的`nav`部分，这能为本项目的管理者提供很大的方便，不胜感激。

## 贡献方法

### Pull Request （推荐）

步骤：

1. 在GitHub网页端点击右上角的fork，将本仓库fork到自己的账号下。
2. 在自己账号下的仓库中进行修改，可以clone到本地修改后push或者直接在网页端进行修改。
3. 修改完成后，点击New Pull Request，提交一个PR。
4. 等待仓库管理者审核，修改，合并到主分支中。

### 直接提交 （不推荐）

对于被本仓库设置为Collaborator的账号可以直接对仓库进行Push操作，但本操作容易引起不必要的冲突，故不作推荐

## 反馈问题

如果你发现本网站的内容存在问题，欢迎在GitHub仓库中打开一个issue来提出你的问题，仓库管理者看到后会及时回复、解决。

如果你发现本网站存在侵犯您权益的内容，请通过issue联系我们，我们会进行及时的删除。