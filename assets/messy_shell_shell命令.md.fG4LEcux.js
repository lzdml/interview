import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.D62TWaax.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"messy/shell/shell命令.md","filePath":"messy/shell/shell命令.md","lastUpdated":1732672128000}'),e={name:"messy/shell/shell命令.md"};function o(t,s,r,c,i,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h2 id="shell-知识点" tabindex="-1">shell 知识点 <a class="header-anchor" href="#shell-知识点" aria-label="Permalink to &quot;shell 知识点&quot;">​</a></h2><blockquote><p>为脚本设置可执行权限「chmod +x *.sh」*指的是你的 shell 脚本文件 ./*.sh 便可以执行此脚本</p></blockquote><ol><li>定义变量</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E06C75;">shell_va</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;变量一&quot;</span></span>
<span class="line"><span style="color:#E06C75;">shell_va2</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;变量二&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">shell 字符串</p><p><strong>单引号</strong>里面<strong>任何变量</strong>都是<strong>无效</strong>的, 并且只能<strong>成对出现</strong><br> |<br> |<br><strong>双引号</strong>里面可以有变量, 可以出现转义字符</p></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;DZL&#39;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &#39;hello, \${name}&#39;</span><span style="color:#98C379;"> //</span><span style="color:#98C379;"> hello,</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">name2</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;DZL2&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;hello, \${</span><span style="color:#E06C75;">name2</span><span style="color:#98C379;">}&quot;</span><span style="color:#7F848E;font-style:italic;"> # hello, DZL2</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;hello, I am </span><span style="color:#56B6C2;">\\&quot;</span><span style="color:#E06C75;">$name2</span><span style="color:#56B6C2;">\\&quot;</span><span style="color:#98C379;">!&quot;</span><span style="color:#7F848E;font-style:italic;"> # hello, I am &quot;DZL2&quot;!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>输出变量</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#E06C75;"> $shell_va</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">shell_va</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#E06C75;"> $shell_va2</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">shell_va2</span><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>两种输出变量的方法边界</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> ((</span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">&lt;</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">)); </span><span style="color:#C678DD;">do</span></span>
<span class="line"><span style="color:#56B6C2;">  echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">}</span><span style="color:#98C379;">.txt</span></span>
<span class="line"><span style="color:#C678DD;">done</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>可读的变量</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">readonly</span><span style="color:#E06C75;"> Url</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;http://www.baidu.com&quot;</span></span>
<span class="line"><span style="color:#E06C75;">Url</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;http://www.baidu1.com&quot;</span><span style="color:#61AFEF;"> //</span><span style="color:#98C379;"> ./test.sh:14:</span><span style="color:#98C379;"> read-only</span><span style="color:#98C379;"> variable:</span><span style="color:#98C379;"> Url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>删除变量</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">unset</span><span style="color:#98C379;"> shell_va</span></span>
<span class="line"><span style="color:#56B6C2;">unset</span><span style="color:#98C379;"> shell_va2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="6"><li>变量类型 运行 shell 时, 会同时存在三种变量类型:<div class="danger custom-block"><p class="custom-block-title">DANGER</p></div></li></ol><ul><li>局部变量 局部变量在脚本或命令中定义, 仅在当前 shell 实例中有效, 其他 shell 启动的程序不能访问</li><li>环境变量, 所有的程序, 包括 shell 启动的程序, 都能访问环境变量, 有些程序需要环境变量来保证其正常运行, 必要的时候 shell 脚本也可以定义环境变量如([zsh] ~/.bash_profile): alias cm=&quot;git commit -m&quot;</li><li>shell 变量 shell 变量是由 shell 程序设置的特殊变量。shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 shell 的正常运行 :::</li></ul><ol start="7"><li>获取字符串长度</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E06C75;">shell_va</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;length of string&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${#</span><span style="color:#E06C75;">shell_va</span><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;"># 16</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 第一个字符串索引值为0</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${#</span><span style="color:#E06C75;">shell_va</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">1</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">4</span><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;"># engt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="8"><li>数组定义方法</li></ol><ul><li>数组名=(值一 值二 值三 ...)</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E06C75;">array_name</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;dzl&#39;</span><span style="color:#98C379;"> &#39;lm23123&#39;</span><span style="color:#98C379;"> &#39;10&#39;</span><span style="color:#98C379;"> &#39;xf&#39;</span><span style="color:#98C379;"> &#39;sy&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 输出数组的第一位, 你会发现shell中的数组是从1开始的</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">array_name</span><span style="color:#ABB2BF;">[0]} </span><span style="color:#7F848E;font-style:italic;"># &#39;&#39;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">array_name</span><span style="color:#ABB2BF;">[1]} </span><span style="color:#7F848E;font-style:italic;"># &#39;dzl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 输出数组全部值</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${</span><span style="color:#E06C75;">array_name</span><span style="color:#ABB2BF;">[@]} </span><span style="color:#7F848E;font-style:italic;"># &#39;dzl lm23123 10 xf sy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 输出数组第几位的长度</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${#</span><span style="color:#E06C75;">array_name</span><span style="color:#ABB2BF;">[1]} </span><span style="color:#7F848E;font-style:italic;"># 3</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> \${#</span><span style="color:#E06C75;">array_name</span><span style="color:#ABB2BF;">[2]} </span><span style="color:#7F848E;font-style:italic;"># 7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="9"><li>单行注释</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 注释</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;hello&quot;</span><span style="color:#7F848E;font-style:italic;"> # hello</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;hello&quot;</span><span style="color:#7F848E;font-style:italic;"> # hello</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="10"><li>多行注释</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">:</span><span style="color:#ABB2BF;">&lt;&lt;</span><span style="color:#ABB2BF;">EOF</span></span>
<span class="line"><span style="color:#98C379;">echo &#39;注释&#39;</span></span>
<span class="line"><span style="color:#98C379;">注释</span></span>
<span class="line"><span style="color:#98C379;">注释</span></span>
<span class="line"><span style="color:#98C379;">注释</span></span>
<span class="line"><span style="color:#98C379;">注释</span></span>
<span class="line"><span style="color:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="11"><li>传递参数</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># test.sh</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;Shell 传递参数实例！&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;执行的文件名：</span><span style="color:#E06C75;font-style:italic;">$0</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;第一个参数为：</span><span style="color:#E06C75;font-style:italic;">$1</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;第二个参数为：</span><span style="color:#E06C75;font-style:italic;">$2</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;第三个参数为：</span><span style="color:#E06C75;font-style:italic;">$3</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行脚本</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## 给权限</span></span>
<span class="line"><span style="color:#61AFEF;">  chmod</span><span style="color:#98C379;"> +x</span><span style="color:#98C379;"> test.sh</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## 执行脚本</span></span>
<span class="line"><span style="color:#61AFEF;">  ./test.sh</span><span style="color:#98C379;"> &quot;dzl&quot;</span><span style="color:#98C379;"> &quot;lm&quot;</span><span style="color:#98C379;"> &quot;123&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 结果</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行的文件名：./test.sh</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 第一个参数为：dzl</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 第二个参数为：lm</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 第三个参数为：123</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>#执行脚本如下 ./test.sh &quot;dzl&quot; &quot;lm&quot; &quot;123&quot;</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>结果</th></tr></thead><tbody><tr><td>$#</td><td>传递到脚本的参数个数</td><td>3</td></tr><tr><td>$*</td><td>以一个单字符串显示所有向脚本传递的参数</td><td>dzl lm 123</td></tr><tr><td>$@</td><td>以一个单字符串显示所有向脚本传递的参数</td><td>dzl lm 123</td></tr><tr><td>$0</td><td>脚本文件名</td><td>test.sh</td></tr><tr><td>$1</td><td>第一个参数</td><td>dzl</td></tr><tr><td>$-</td><td>执行脚本时的选项参数</td><td>-</td></tr><tr><td>$?</td><td>脚本执行状态</td><td>0表示没有错误</td></tr><tr><td>$!</td><td>后台运行的最后一个进程的ID</td><td>-</td></tr><tr><td>$$</td><td>脚本运行的当前进程 ID</td><td>-</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">$_ | $@区别</p><p>相同点：都是引用所有参数。<br> 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 &quot; _ &quot; 等价于 &quot;1 2 3&quot;（传递了一个参数），而 &quot;@&quot; 等价于 &quot;1&quot; &quot;2&quot; &quot;3&quot;（传递了三个参数）。</p></div>`,30)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
