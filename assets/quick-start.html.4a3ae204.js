import{_ as r,r as l,o as i,c as p,a as n,b as e,w as o,d as s,e as d}from"./app.9228397b.js";const u={},_=n("h1",{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u4E0A\u624B")],-1),k=n("p",null,"\u4EC5\u9700\u5355\u53F0\u8BA1\u7B97\u673A\uFF0C\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u6C42\uFF0C\u5C31\u53EF\u4EE5\u5FEB\u901F\u5F00\u542F\u60A8\u7684 PolarDB \u4E4B\u65C5\uFF1A",-1),h=n("li",null,"CPU \u67B6\u6784\u4E3A AMD64 / ARM64",-1),b=n("li",null,"\u53EF\u7528\u5185\u5B58 4GB \u4EE5\u4E0A",-1),m=s("\u5DF2\u5B89\u88C5 "),g={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=s("Docker"),f=s("Ubuntu\uFF1A"),P={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},D=s("\u5728 Ubuntu \u4E0A\u5B89\u88C5 Docker Engine"),B=s("Debian\uFF1A"),S={href:"https://docs.docker.com/engine/install/debian/",target:"_blank",rel:"noopener noreferrer"},L=s("\u5728 Debian \u4E0A\u5B89\u88C5 Docker Engine"),x=s("CentOS\uFF1A"),A={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},E=s("\u5728 CentOS \u4E0A\u5B89\u88C5 Docker Engine"),C=s("RHEL\uFF1A"),w={href:"https://docs.docker.com/engine/install/rhel/",target:"_blank",rel:"noopener noreferrer"},R=s("\u5728 RHEL \u4E0A\u5B89\u88C5 Docker Engine"),O=s("Fedora\uFF1A"),Q={href:"https://docs.docker.com/engine/install/fedora/",target:"_blank",rel:"noopener noreferrer"},T=s("\u5728 Fedora \u4E0A\u5B89\u88C5 Docker Engine"),G=s("macOS\uFF08\u652F\u6301 M1 \u82AF\u7247\uFF09\uFF1A"),H={href:"https://docs.docker.com/desktop/mac/install/",target:"_blank",rel:"noopener noreferrer"},q=s("\u5728 Mac \u4E0A\u5B89\u88C5 Docker Desktop"),I=s("\uFF0C\u5E76\u5EFA\u8BAE\u5C06\u5185\u5B58\u8C03\u6574\u4E3A 4GB \u4EE5\u4E0A"),M=n("h2",{id:"\u5FEB\u901F\u4F53\u9A8C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4F53\u9A8C","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u4F53\u9A8C")],-1),N=s("\u4ECE DockerHub \u4E0A\u62C9\u53D6 PolarDB for PostgreSQL \u7684 "),V={href:"https://hub.docker.com/r/polardb/polardb_pg_local_instance/tags",target:"_blank",rel:"noopener noreferrer"},Y=s("\u672C\u5730\u5B58\u50A8\u5B9E\u4F8B\u955C\u50CF"),U=s("\uFF0C\u521B\u5EFA\u3001\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668\uFF0C\u7136\u540E\u76F4\u63A5\u4F7F\u7528 PolarDB \u5B9E\u4F8B\uFF1A"),F=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u62C9\u53D6\u5355\u8282\u70B9 PolarDB \u955C\u50CF"),s(`
`),n("span",{class:"token function"},"docker"),s(` pull polardb/polardb_pg_local_instance:single
`),n("span",{class:"token comment"},"# \u521B\u5EFA\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668"),s(`
`),n("span",{class:"token function"},"docker"),s(" run -it --cap-add"),n("span",{class:"token operator"},"="),s("SYS_PTRACE --privileged"),n("span",{class:"token operator"},"="),s("true --name polardb_pg_single polardb/polardb_pg_local_instance:single "),n("span",{class:"token function"},"bash"),s(`
`),n("span",{class:"token comment"},"# \u6D4B\u8BD5\u5B9E\u4F8B\u53EF\u7528\u6027"),s(`
psql -h `),n("span",{class:"token number"},"127.0"),s(".0.1 -c "),n("span",{class:"token string"},"'select version();'"),s(`
            version
--------------------------------
 PostgreSQL `),n("span",{class:"token number"},"11.9"),s(),n("span",{class:"token punctuation"},"("),s("POLARDB "),n("span",{class:"token number"},"11.9"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(" row"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),j=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u62C9\u53D6\u591A\u8282\u70B9 PolarDB \u955C\u50CF"),s(`
`),n("span",{class:"token function"},"docker"),s(` pull polardb/polardb_pg_local_instance:withrep
`),n("span",{class:"token comment"},"# \u521B\u5EFA\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668"),s(`
`),n("span",{class:"token function"},"docker"),s(" run -it --cap-add"),n("span",{class:"token operator"},"="),s("SYS_PTRACE --privileged"),n("span",{class:"token operator"},"="),s("true --name polardb_pg_withrep polardb/polardb_pg_local_instance:withrep "),n("span",{class:"token function"},"bash"),s(`
`),n("span",{class:"token comment"},"# \u6D4B\u8BD5\u5B9E\u4F8B\u53EF\u7528\u6027"),s(`
psql -h `),n("span",{class:"token number"},"127.0"),s(".0.1 -c "),n("span",{class:"token string"},"'select version();'"),s(`
            version
--------------------------------
 PostgreSQL `),n("span",{class:"token number"},"11.9"),s(),n("span",{class:"token punctuation"},"("),s("POLARDB "),n("span",{class:"token number"},"11.9"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(" row"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),y=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u62C9\u53D6 HTAP PolarDB \u955C\u50CF"),s(`
`),n("span",{class:"token function"},"docker"),s(` pull polardb/polardb_pg_local_instance:htap
`),n("span",{class:"token comment"},"# \u521B\u5EFA\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668"),s(`
`),n("span",{class:"token function"},"docker"),s(" run -it --cap-add"),n("span",{class:"token operator"},"="),s("SYS_PTRACE --privileged"),n("span",{class:"token operator"},"="),s("true --name polardb_pg_htap polardb/polardb_pg_local_instance:htap "),n("span",{class:"token function"},"bash"),s(`
`),n("span",{class:"token comment"},"# \u6D4B\u8BD5\u5B9E\u4F8B\u53EF\u7528\u6027"),s(`
psql -h `),n("span",{class:"token number"},"127.0"),s(".0.1 -c "),n("span",{class:"token string"},"'select version();'"),s(`
            version
--------------------------------
 PostgreSQL `),n("span",{class:"token number"},"11.9"),s(),n("span",{class:"token punctuation"},"("),s("POLARDB "),n("span",{class:"token number"},"11.9"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(" row"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),z=n("h2",{id:"\u5FEB\u901F\u5F00\u53D1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u53D1","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u5F00\u53D1")],-1),J=s("\u4ECE DockerHub \u4E0A\u62C9\u53D6 PolarDB for PostgreSQL \u7684 "),K={href:"https://hub.docker.com/r/polardb/polardb_pg_devel/tags",target:"_blank",rel:"noopener noreferrer"},W=s("\u5F00\u53D1\u955C\u50CF"),X=s("\uFF0C\u521B\u5EFA\u3001\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668\uFF1A"),Z=d(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u53D6 PolarDB \u5F00\u53D1\u955C\u50CF</span>
<span class="token function">docker</span> pull polardb/polardb_pg_devel
<span class="token comment"># \u521B\u5EFA\u3001\u8FD0\u884C\u5E76\u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">docker</span> run -it <span class="token punctuation">\\</span>
    --cap-add<span class="token operator">=</span>SYS_PTRACE --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    --name polardb_pg <span class="token punctuation">\\</span>
    polardb/polardb_pg_devel <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u5165\u5BB9\u5668\u540E\uFF0C\u4ECE GitHub \u62C9\u53D6\u6700\u65B0\u7684\u7A33\u5B9A\u4EE3\u7801\uFF0C\u5FEB\u901F\u7F16\u8BD1\u90E8\u7F72\u6700\u7B80\u5355\u7684 PolarDB \u5B9E\u4F8B\u5E76\u8FDB\u884C\u9A8C\u8BC1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EE3\u7801\u62C9\u53D6</span>
<span class="token function">git</span> clone -b POLARDB_11_STABLE https://github.com/ApsaraDB/PolarDB-for-PostgreSQL.git
<span class="token builtin class-name">cd</span> PolarDB-for-PostgreSQL
<span class="token comment"># \u7F16\u8BD1\u90E8\u7F72</span>
./polardb_build.sh
<span class="token comment"># \u9A8C\u8BC1</span>
psql -h <span class="token number">127.0</span>.0.1 -c <span class="token string">&#39;select version();&#39;</span>
            version
--------------------------------
 PostgreSQL <span class="token number">11.9</span> <span class="token punctuation">(</span>POLARDB <span class="token number">11.9</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">1</span> row<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function $(nn,sn){const a=l("ExternalLinkIcon"),t=l("CodeGroupItem"),c=l("CodeGroup");return i(),p("div",null,[_,k,n("ul",null,[h,b,n("li",null,[m,n("a",g,[v,e(a)]),n("ul",null,[n("li",null,[f,n("a",P,[D,e(a)])]),n("li",null,[B,n("a",S,[L,e(a)])]),n("li",null,[x,n("a",A,[E,e(a)])]),n("li",null,[C,n("a",w,[R,e(a)])]),n("li",null,[O,n("a",Q,[T,e(a)])]),n("li",null,[G,n("a",H,[q,e(a)]),I])])])]),M,n("p",null,[N,n("a",V,[Y,e(a)]),U]),e(c,null,{default:o(()=>[e(t,{title:"\u5355\u8282\u70B9\u5B9E\u4F8B"},{default:o(()=>[F]),_:1}),e(t,{title:"\u591A\u8282\u70B9\u5B9E\u4F8B"},{default:o(()=>[j]),_:1}),e(t,{title:"HTAP \u5B9E\u4F8B"},{default:o(()=>[y]),_:1})]),_:1}),z,n("p",null,[J,n("a",K,[W,e(a)]),X]),Z])}var an=r(u,[["render",$],["__file","quick-start.html.vue"]]);export{an as default};