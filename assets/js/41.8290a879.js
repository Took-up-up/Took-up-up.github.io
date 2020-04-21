(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{321:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[s._v("当出现大量TIME_WAIT系统做的调整")])]),s._v(" "),a("h2",{attrs:{id:"查看time-wait的数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看time-wait的数量","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看TIME_WAIT的数量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^tcp/ {++S["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NF")]),s._v("]} END {for(a in S) print a, S[a]}'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"出现大量的time-wait时的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现大量的time-wait时的操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 出现大量的TIME_WAIT时的操作")]),s._v(" "),a("p",[a("strong",[s._v("vim /etc/sysctl.conf")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("net.ipv4.tcp_syncookies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启SYN Cookies,当出现SYN等待队列溢出时,启用cookies来处理,可防范少量SYN攻击,默认为0,表示关闭")]),s._v("\nnet.ipv4.tcp_tw_reuse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启重用,允许将TIME-WAIT sockets重新用于新的TCP连接，默认为0，表示关闭")]),s._v("\nnet.ipv4.tcp_tw_recycle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启TCP连接中TIME-WAIT sockets的快速回收,默认为0,表示关闭")]),s._v("\nnet.ipv4.tcp_fin_timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改默认的 TIMEOUT 时间,默认的时间是60s,改为30s")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("sysctl -p\n生效")])])}),[],!1,null,null,null);t.default=n.exports}}]);