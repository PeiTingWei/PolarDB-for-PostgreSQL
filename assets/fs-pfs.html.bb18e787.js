import{_ as r,r as s,o as c,c as p,a,b as n,w as l,e as o,d as e}from"./app.9228397b.js";const i={},h=o(`<h1 id="\u683C\u5F0F\u5316\u5E76\u6302\u8F7D-pfs" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u5E76\u6302\u8F7D-pfs" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u5E76\u6302\u8F7D PFS</h1><p>PolarDB File System\uFF0C\u7B80\u79F0 PFS \u6216 PolarFS\uFF0C\u662F\u7531\u963F\u91CC\u4E91\u81EA\u4E3B\u7814\u53D1\u7684\u9AD8\u6027\u80FD\u7C7B POSIX \u7684\u7528\u6237\u6001\u5206\u5E03\u5F0F\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u670D\u52A1\u4E8E\u963F\u91CC\u4E91\u6570\u636E\u5E93 PolarDB \u4EA7\u54C1\u3002\u4F7F\u7528 PFS \u5BF9\u5171\u4EAB\u5B58\u50A8\u8FDB\u884C\u683C\u5F0F\u5316\u5E76\u6302\u8F7D\u540E\uFF0C\u80FD\u591F\u4FDD\u8BC1\u4E00\u4E2A\u8BA1\u7B97\u8282\u70B9\u5BF9\u5171\u4EAB\u5B58\u50A8\u7684\u5199\u5165\u80FD\u591F\u7ACB\u523B\u5BF9\u53E6\u4E00\u4E2A\u8BA1\u7B97\u8282\u70B9\u53EF\u89C1\u3002</p><h2 id="pfs-\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#pfs-\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> PFS \u7F16\u8BD1\u5B89\u88C5</h2><p>\u63A8\u8350\u4F7F\u7528 DockerHub \u4E0A\u7684 PolarDB \u5F00\u53D1\u955C\u50CF\uFF0C\u5176\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86\u7F16\u8BD1\u5B8C\u6BD5\u7684 PFS\uFF0C\u65E0\u9700\u518D\u6B21\u7F16\u8BD1\u5B89\u88C5\u3002\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u5165\u5BB9\u5668\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull polardb/polardb_pg_devel
<span class="token function">docker</span> run -it <span class="token punctuation">\\</span>
    --network<span class="token operator">=</span>host <span class="token punctuation">\\</span>
    --cap-add<span class="token operator">=</span>SYS_PTRACE --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    --name polardb_pg <span class="token punctuation">\\</span>
    polardb/polardb_pg_devel <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=e("PFS \u7684\u624B\u52A8\u7F16\u8BD1\u5B89\u88C5\u65B9\u5F0F\u8BF7\u53C2\u8003 PFS \u7684 "),v={href:"https://github.com/ApsaraDB/polardb-file-system/blob/master/Readme-CN.md",target:"_blank",rel:"noopener noreferrer"},b=e("README"),_=e("\uFF0C\u6B64\u5904\u4E0D\u518D\u8D58\u8FF0\u3002"),f=o(`<h2 id="\u5757\u8BBE\u5907\u91CD\u547D\u540D-\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#\u5757\u8BBE\u5907\u91CD\u547D\u540D-\u53EF\u9009" aria-hidden="true">#</a> \u5757\u8BBE\u5907\u91CD\u547D\u540D\uFF08\u53EF\u9009\uFF09</h2><p>PFS \u4EC5\u652F\u6301\u8BBF\u95EE <strong>\u4EE5\u7279\u5B9A\u5B57\u7B26\u5F00\u5934\u7684\u5757\u8BBE\u5907</strong>\uFF0C\u56E0\u6B64\u6211\u4EEC\u5EFA\u8BAE\u5728\u6240\u6709\u8BBF\u95EE\u5757\u8BBE\u5907\u7684\u8282\u70B9\u4E0A\uFF0C\u901A\u8FC7\u8F6F\u94FE\u63A5\u4F7F\u7528\u76F8\u540C\u7684\u540D\u5B57\u8BBF\u95EE\u5171\u4EAB\u5757\u8BBE\u5907\uFF0C\u4F8B\u5982 <code>nvme1n1</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u5728 NBD \u670D\u52A1\u7AEF\u4E3B\u673A\u4E0A\uFF0C\u4F7F\u7528\u65B0\u7684\u5757\u8BBE\u5907\u540D <code>/dev/nvme1n1</code> \u8F6F\u94FE\u5230\u5171\u4EAB\u5B58\u50A8\u5757\u8BBE\u5907\u7684\u539F\u6709\u540D\u79F0 <code>/dev/vdb</code> \u4E0A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ln</span> -s /dev/vdb /dev/nvme1n1
</code></pre></div><p>\u5728 NBD \u5BA2\u6237\u7AEF\u4E3B\u673A\u4E0A\uFF0C\u4F7F\u7528\u540C\u6837\u7684\u5757\u8BBE\u5907\u540D <code>/dev/nvme1n1</code> \u8F6F\u94FE\u5230\u5171\u4EAB\u5B58\u50A8\u5757\u8BBE\u5907\u7684\u539F\u6709\u540D\u79F0 <code>/dev/nbd0</code> \u4E0A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ln</span> -s /dev/nbd0 /dev/nvme1n1
</code></pre></div><p>\u5982\u6B64\uFF0C\u4FBF\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF 2 \u53F0\u4E3B\u673A\u4E0A\u4F7F\u7528\u76F8\u540C\u7684\u5757\u8BBE\u5907\u540D <code>/dev/nvme1n1</code> \u6765\u8BBF\u95EE\u540C\u4E00\u4E2A\u5757\u8BBE\u5907\u3002</p><h2 id="\u5757\u8BBE\u5907\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u5757\u8BBE\u5907\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u5757\u8BBE\u5907\u683C\u5F0F\u5316</h2><p>\u4F7F\u7528 <strong>\u4EFB\u610F\u4E00\u53F0\u4E3B\u673A</strong>\uFF0C\u5728\u5171\u4EAB\u5B58\u50A8\u5757\u8BBE\u5907\u4E0A\u683C\u5F0F\u5316 PFS \u5206\u5E03\u5F0F\u6587\u4EF6\u7CFB\u7EDF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pfs -C disk <span class="token function">mkfs</span> nvme1n1
</code></pre></div><h2 id="pfs-\u6587\u4EF6\u7CFB\u7EDF\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#pfs-\u6587\u4EF6\u7CFB\u7EDF\u6302\u8F7D" aria-hidden="true">#</a> PFS \u6587\u4EF6\u7CFB\u7EDF\u6302\u8F7D</h2><p>\u5728\u80FD\u591F\u8BBF\u95EE\u5171\u4EAB\u5B58\u50A8\u7684 <strong>\u6240\u6709\u4E3B\u673A\u8282\u70B9</strong> \u4E0A\uFF0C\u5206\u522B\u542F\u52A8 PFS \u5B88\u62A4\u8FDB\u7A0B\u5E76\u6302\u8F7D PFS \u6587\u4EF6\u7CFB\u7EDF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/polarstore/pfsd/bin/start_pfsd.sh -p nvme1n1
</code></pre></div><hr><h2 id="\u5728-pfs-\u4E0A\u7F16\u8BD1\u90E8\u7F72-polardb" tabindex="-1"><a class="header-anchor" href="#\u5728-pfs-\u4E0A\u7F16\u8BD1\u90E8\u7F72-polardb" aria-hidden="true">#</a> \u5728 PFS \u4E0A\u7F16\u8BD1\u90E8\u7F72 PolarDB</h2>`,15),m=e("\u53C2\u9605 "),g=e("PolarDB \u7F16\u8BD1\u90E8\u7F72\uFF1APFS \u6587\u4EF6\u7CFB\u7EDF"),k=e("\u3002");function P(S,x){const d=s("ExternalLinkIcon"),t=s("RouterLink");return c(),p("div",null,[h,a("p",null,[u,a("a",v,[b,n(d)]),_]),f,a("p",null,[m,n(t,{to:"/zh/guide/db-pfs.html"},{default:l(()=>[g]),_:1}),k])])}var B=r(i,[["render",P],["__file","fs-pfs.html.vue"]]);export{B as default};