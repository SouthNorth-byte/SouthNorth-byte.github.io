(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{461:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("本章节我们将为大家介绍如何创建一个 Git 仓库。你可以使用一个已经存在的目录作为 Git 仓库。")])]),t("h2",{attrs:{id:"git-创建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-创建仓库"}},[s._v("#")]),s._v(" Git 创建仓库")]),s._v(" "),t("h3",{attrs:{id:"git-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[s._v("#")]),s._v(" git init")]),s._v(" "),t("p",[s._v("Git 使用 "),t("strong",[s._v("git init")]),s._v(" 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 "),t("strong",[s._v("git init")]),s._v(" 是使用 Git 的第一个命令。")]),s._v(" "),t("p",[s._v("在执行完成 "),t("strong",[s._v("git init")]),s._v(" 命令后，Git 仓库会生成一个 .git 目录"),t("code",[s._v("(Windows隐藏目录)")]),s._v("，该目录包含了资源的所有元数据，其他的项目目录保持不变。")]),s._v(" "),t("p",[s._v("使用当前目录作为 Git 仓库，我们只需使它初始化。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("该命令执行完后会在当前目录生成一个 .git 目录。")]),s._v(" "),t("p",[s._v("使用我们指定目录作为Git仓库。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init myGit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("初始化后，会在 myGit 目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。")]),s._v(" "),t("p",[s._v("如果当前目录下有几个文件想要纳入版本控制，需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" *.c\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'初始化项目版本'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("以上命令将目录下以 .c 结尾及 README 文件提交到仓库中。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[t("strong",[s._v("注：")]),s._v(" 在 Linux 系统中，commit 信息使用单引号 "),t("strong",[s._v("'")]),s._v("，Windows 系统，commit 信息使用双引号 "),t("strong",[s._v('"')]),s._v("。\n所以在 git bash 中 "),t("strong",[s._v("git commit -m '提交说明'")]),s._v(" 这样是可以的，在 Windows 命令行中就要使用双引号 "),t("strong",[s._v('git commit -m "提交说明"')]),s._v("。")])]),t("h3",{attrs:{id:"git-clone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[s._v("#")]),s._v(" git clone")]),s._v(" "),t("p",[s._v("我们使用 "),t("strong",[s._v("git clone")]),s._v(" 从现有 Git 仓库中拷贝项目。")]),s._v(" "),t("p",[s._v("克隆仓库的命令格式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果我们需要克隆到指定的目录，可以使用以下命令格式：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("参数说明：")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("repo")]),s._v(":Git 仓库。")]),s._v(" "),t("li",[t("strong",[s._v("directory")]),s._v(":本地目录。")])]),s._v(" "),t("p",[s._v("比如，要克隆 Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/schacon/grit.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行该命令后，会在当前目录下创建一个名为grit的目录，其中包含一个 .git 的目录，用于保存下载下来的所有版本记录。")]),s._v(" "),t("p",[s._v("如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/schacon/grit.git mygrit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("git 的设置使用 "),t("strong",[s._v("git config")]),s._v(" 命令。")]),s._v(" "),t("p",[s._v("显示当前的 git 配置信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编辑 git 配置文件:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 针对当前仓库 ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 针对系统上所有仓库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("设置提交代码时的用户信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"southnorth"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"southnorth@qq.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果去掉 "),t("strong",[s._v("--global")]),s._v(" 参数只对当前仓库有效。")])])}),[],!1,null,null,null);t.default=e.exports}}]);