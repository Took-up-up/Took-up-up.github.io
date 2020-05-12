(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{325:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("ol",[t("li",[s._v("gpg生成密钥步骤")]),s._v(" "),t("li",[s._v("gpg常用操作")])])]),s._v(" "),t("p",[s._v("注: 加快生成速度, mv /dev/random /dev/random1 && ln -s /dev/urandom /dev/random")]),s._v(" "),t("h2",{attrs:{id:"生成密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成密钥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("admin /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("~$ gpg --full-generate-key\ngpg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GnuPG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(".20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Copyright "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" Free Software Foundation, Inc.\nThis is "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software: you are "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\n请选择您要使用的密钥种类：\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" RSA and RSA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DSA and Elgamal\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DSA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("仅用于签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" RSA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("仅用于签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n您的选择？ \nRSA 密钥长度应在 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" 位与 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" 位之间。\n您想要用多大的密钥尺寸？"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n您所要求的密钥尺寸是 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" 位\n请设定这把密钥的有效期限。\n         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密钥永不过期\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密钥在 n 天后过期\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("w "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密钥在 n 周后过期\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密钥在 n 月后过期\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密钥在 n 年后过期\n密钥的有效期限是？"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n密钥永远不会过期\n以上正确吗？"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" y\n\n您需要一个用户标识来辨识您的密钥；本软件会用真实姓名、注释和电子邮件地址组合\n成用户标识，如下所示：\n    “Heinrich Heine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Der Dichter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("heinrichh@duesseldorf.de"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("”\n\n真实姓名： admin\n电子邮件地址： admin@qq.com\n注释： github\n您选定了这个用户标识：\n    “Admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("admin@qq.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("”\n\n更改姓名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("N"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("、注释"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("、电子邮件地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("E"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("或确定"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("O"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/退出"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("？ O\n您需要一个密码来保护您的私钥。\n\n我们需要生成大量的随机字节。这个时候您可以多做些琐事"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("像是敲打键盘、移动\n鼠标、读写硬盘之类的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，这会让随机数字发生器有更好的机会获得足够的熵数。\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("+++++\n\n随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("还需要184字节"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+++++\n我们需要生成大量的随机字节。这个时候您可以多做些琐事"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("像是敲打键盘、移动\n鼠标、读写硬盘之类的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，这会让随机数字发生器有更好的机会获得足够的熵数。\n\n随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("还需要231字节"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".+++++\n\n随机字节不够多。请再做一些其他的琐事，以使操作系统能搜集到更多的熵！\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("还需要170字节"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+++++\ngpg: 密钥 2RT8HJ4U 被标记为绝对信任\n公钥和私钥已经生成并经签名。\n\ngpg: 正在检查信任度数据库\ngpg: 需要 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 份勉强信任和 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 份完全信任，PGP 信任模型\ngpg: 深度：0 有效性：  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 已签名：  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 信任度：0-，0q，0n，0m，0f，1u\npub   4096R/2RT8HJ4U "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-09-20\n      密钥指纹 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 3C00 AC7B 3D06 E22E AEDE  72B0 B28F ACA4 2EBC 87DF\nuid                  Admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("admin@qq.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nsub   4096R/2RT8HJ4U "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-09-20\n\ngpg key已经生成\n----------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后续操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("admin /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("~$ gpg --list-secret-keys --keyid-format LONG\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最好制作一张撤销证书，用于密钥作废，请求外部公钥服务器撤销你的公钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将二进制的公钥(私钥)导出为ASSCII码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传公钥到公钥服务器。这里使用阮一峰的命令有一些问题，但可以正常工作")]),s._v("\ngpg --send-keys "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("用户ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成用于公布的公钥指纹（用于他人校验）")]),s._v("\ngpg --fingerpint "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("用户ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n密钥指纹 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 3C00 AC7B 3D06 E22E AEDE  72B0 B28F ACA4 2EBC 87DF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br")])]),t("h2",{attrs:{id:"常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用操作")]),s._v(" "),t("h3",{attrs:{id:"创建密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建密钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建密钥")]),s._v(" "),t("p",[s._v("gpg --full-generate-key")]),s._v(" "),t("h3",{attrs:{id:"查看密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看密钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看密钥")]),s._v(" "),t("p",[s._v("gpg -k")]),s._v(" "),t("h3",{attrs:{id:"查看公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看公钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看公钥")]),s._v(" "),t("p",[s._v("gpg --list-keys")]),s._v(" "),t("h3",{attrs:{id:"查看私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看私钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看私钥")]),s._v(" "),t("p",[s._v("gpg --list-secret-keys")]),s._v(" "),t("h3",{attrs:{id:"导出公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出公钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 导出公钥")]),s._v(" "),t("p",[s._v("gpg --armor --output public-key --export name")]),s._v(" "),t("h3",{attrs:{id:"导出私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出私钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 导出私钥")]),s._v(" "),t("p",[s._v("gpg --armor --output secret-key --export-secret-keys name")]),s._v(" "),t("h3",{attrs:{id:"导入公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入公钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 导入公钥")]),s._v(" "),t("p",[s._v("gpg --import public-key")]),s._v(" "),t("h3",{attrs:{id:"导入私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入私钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 导入私钥")]),s._v(" "),t("p",[s._v("gpg --import secret-key")]),s._v(" "),t("h3",{attrs:{id:"删除公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除公钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除公钥")]),s._v(" "),t("p",[s._v("gpg --delete-key keyID")]),s._v(" "),t("h3",{attrs:{id:"删除私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除私钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除私钥")]),s._v(" "),t("p",[s._v("gpg --delete-secret-key keyID")]),s._v(" "),t("h3",{attrs:{id:"编辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑","aria-hidden":"true"}},[s._v("#")]),s._v(" 编辑")]),s._v(" "),t("p",[s._v("gpg --edit-key xx")])])}),[],!1,null,null,null);a.default=e.exports}}]);