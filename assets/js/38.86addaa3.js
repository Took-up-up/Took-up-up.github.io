(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{318:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[s._v("Shadowsocks")])]),s._v(" "),t("h2",{attrs:{id:"server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[s._v("#")]),s._v(" Server")]),s._v(" "),t("h3",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" Install")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade git+https://github.com/shadowsocks/shadowsocks.git@master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[s._v("#")]),s._v(" Config")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/shadowsocks/server.json\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x.x.x.x"')]),s._v(", \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_port"')]),s._v(":xx, \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(", \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_port"')]),s._v(":1080, \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(":300, \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-256-cfb"')]),s._v(", \n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fast_open"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" Run")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssserver -c /etc/shadowsocks/server.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[s._v("#")]),s._v(" Client")]),s._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/shadowsocks/client.json\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x.x.x.x"')]),s._v(",   \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_port"')]),s._v(":xx,\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(",\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# client连接成功后本地生成一个socks5服务端127.0.0.1 / 0.0.0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_port"')]),s._v(":xxxx,\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# socks端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v(",\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server passwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(":300,\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-256-gcm"')]),s._v(",\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 加密方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fast_open"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"workers"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsslocal -c /etc/shadowsocks/client.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-windows/releases?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[s._v("#")]),s._v(" Android")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-android/releases?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test","aria-hidden":"true"}},[s._v("#")]),s._v(" TEST")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("http://httpbin.org/ip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);