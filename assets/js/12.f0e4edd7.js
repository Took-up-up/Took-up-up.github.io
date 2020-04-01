(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{292:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.shields.io/badge/hexo-4.0.1-green",alt:"hexo"}})]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),a("ol",[a("li",[s._v("这是一个hexo主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；"),a("br")])])]),s._v(" "),a("p",[a("strong",[s._v("Server")])]),s._v(" "),a("h2",{attrs:{id:"item-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-install","aria-hidden":"true"}},[s._v("#")]),s._v(" Item install")]),s._v(" "),a("h3",{attrs:{id:"nvm-npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-npm-install","aria-hidden":"true"}},[s._v("#")]),s._v(" nvm/npm install")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用nvm安装npm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/creationix/nvm.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /data/git/nvm/nvm/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /root/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nvm使用国内源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /root/.bashrc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装npm 并修改为国内源")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"nrm-install-npm管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm-install-npm管理工具","aria-hidden":"true"}},[s._v("#")]),s._v(" nrm install npm管理工具")]),s._v(" "),a("p",[a("strong",[s._v("可选")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nrm -g --save\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#registry管理")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看可用源\t")]),s._v("\nnrm current\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前源")]),s._v("\nnrm use taobao\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换到淘宝源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\tqihoo http://registry.npm.360.org\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试下载速度")]),s._v("\nnrm del qihoo\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除源")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"hexo安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo安装","aria-hidden":"true"}},[s._v("#")]),s._v(" hexo安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo-cli -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"生成blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成blog","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成blog")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hexo init blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更换主题(可选)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/iissnan/hexo-theme-next themes/next\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义配置")]),s._v(" "),a("p",[a("strong",[s._v("vim blog/themes/next/_config.yml")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("title: xxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你博客的名字")]),s._v("\nauthor: xxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你的名字")]),s._v("\nlanguage: zh-Hans "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语言 中文")]),s._v("\ntheme: next "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刚刚安装的主题名称")]),s._v("\ndeploy:\ntype: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用Git 发布")]),s._v("\nrepo: https://github.com/username/username.github.io.git "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刚创建的Github仓库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[s._v("#")]),s._v(" Use")]),s._v(" "),a("p",[a("strong",[s._v("hexo run")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hexo s\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo-deployer-git --save\nhexo clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" hexo g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" hexo d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);