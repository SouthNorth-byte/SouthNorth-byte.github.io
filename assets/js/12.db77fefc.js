(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(t,i,v){t.exports=v.p+"assets/img/git_process.0938be78.png"},443:function(t,i,v){t.exports=v.p+"assets/img/relation.899c6823.jpg"},460:function(t,i,v){"use strict";v.r(i);var _=v(2),e=Object(_.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"title"}),i("p",[t._v("本章主要介绍Git的最基本工作流程和组成，Git中工作区、暂存区和版本库的概念和关系。")])]),i("h2",{attrs:{id:"git-基本工作流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-基本工作流程"}},[t._v("#")]),t._v(" Git 基本工作流程")]),t._v(" "),i("p",[t._v("介绍 Git 的工作流程，一般工作流程如下：")]),t._v(" "),i("ul",[i("li",[t._v("git clone(克隆)：从远程仓库中克隆代码到本地仓库")]),t._v(" "),i("li",[t._v("git add(添加)：将工作区修改的代码添加到缓存区")]),t._v(" "),i("li",[t._v("git commit(提交)：将缓存区代码提交到本地仓库")]),t._v(" "),i("li",[t._v("git push(推送)：将本地仓库中的代码推送到远程仓库")]),t._v(" "),i("li",[t._v("git pull(拉取)：拉取远程仓库的代码到工作区")])]),t._v(" "),i("p",[t._v("下图展示了 Git 的工作流程：")]),t._v(" "),i("img",{staticStyle:{zoom:"80%"},attrs:{src:v(442)}}),t._v(" "),i("h2",{attrs:{id:"git-工作区、暂存区和版本库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-工作区、暂存区和版本库"}},[t._v("#")]),t._v(" Git 工作区、暂存区和版本库")]),t._v(" "),i("p",[t._v("我们先来理解下 Git 工作区、暂存区和版本库概念：")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("工作区")]),t._v("：就是你在电脑里能看到的目录。")]),t._v(" "),i("li",[i("strong",[t._v("暂存区")]),t._v("：英文叫 stage 或 index。一般存放在 "),i("strong",[t._v(".git")]),t._v(" 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。")]),t._v(" "),i("li",[i("strong",[t._v("版本库")]),t._v("：工作区有一个隐藏目录 "),i("strong",[t._v(".git")]),t._v("，这个不算工作区，而是 Git 的版本库。")])]),t._v(" "),i("p",[t._v("下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：")]),t._v(" "),i("img",{staticStyle:{zoom:"150%"},attrs:{src:v(443),alt:"relation"}}),t._v(" "),i("ul",[i("li",[i("p",[t._v('图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是暂存区（stage/index），标记为 "master" 的是 master 分支所代表的目录树。')])]),t._v(" "),i("li",[i("p",[t._v('图中我们可以看出此时 "HEAD" 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。')])]),t._v(" "),i("li",[i("p",[t._v('图中的 objects 标识的区域为 Git 的对象库，实际位于 ".git/objects" 目录下，里面包含了创建的各种对象及内容。')])]),t._v(" "),i("li",[i("p",[t._v("当对工作区修改（或新增）的文件执行 "),i("code",[t._v("git add")]),t._v(" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。")])]),t._v(" "),i("li",[i("p",[t._v("当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。")])]),t._v(" "),i("li",[i("p",[t._v("当执行 "),i("code",[t._v("git reset HEAD")]),t._v(" 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。")])]),t._v(" "),i("li",[i("p",[t._v("当执行 "),i("code",[t._v("git rm --cached <file>")]),t._v(" 命令时，会直接从暂存区删除文件，工作区则不做出改变。")])]),t._v(" "),i("li",[i("p",[t._v("当执行 "),i("code",[t._v("git checkout .")]),t._v(" 或者 "),i("code",[t._v("git checkout -- <file>")]),t._v(" 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。")])]),t._v(" "),i("li",[i("p",[t._v("当执行 "),i("code",[t._v("git checkout HEAD .")]),t._v(" 或者 "),i("code",[t._v("git checkout HEAD <file>")]),t._v(" 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。")])])])])}),[],!1,null,null,null);i.default=e.exports}}]);