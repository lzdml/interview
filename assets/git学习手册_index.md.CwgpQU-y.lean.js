import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.D62TWaax.js";const m=JSON.parse('{"title":"常用 Git 命令清单","description":"","frontmatter":{},"headers":[],"relativePath":"git学习手册/index.md","filePath":"git学习手册/index.md","lastUpdated":1732672128000}'),e={name:"git学习手册/index.md"};function o(c,s,r,t,i,b){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="常用-git-命令清单" tabindex="-1">常用 Git 命令清单 <a class="header-anchor" href="#常用-git-命令清单" aria-label="Permalink to &quot;常用 Git 命令清单&quot;">​</a></h1><p>一般来说，日常使用只要记住下图 6 个命令，就可以了。但是熟练使用，恐怕要记住 60 ～ 100 个命令。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png" alt="img"></p><p>下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。</p><blockquote><ul><li>Workspace：工作区</li><li>Index / Stage：暂存区</li><li>Repository：仓库区（或本地仓库）</li><li>Remote：远程仓库</li></ul></blockquote><h2 id="一、新建代码库" tabindex="-1">一、新建代码库 <a class="header-anchor" href="#一、新建代码库" aria-label="Permalink to &quot;一、新建代码库&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> init</span><span style="color:#ABB2BF;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> clone</span><span style="color:#ABB2BF;"> [url]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="二、配置" tabindex="-1">二、配置 <a class="header-anchor" href="#二、配置" aria-label="Permalink to &quot;二、配置&quot;">​</a></h2><p>Git 的设置文件为<code>.gitconfig</code>，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> config</span><span style="color:#D19A66;"> --list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> config</span><span style="color:#D19A66;"> -e</span><span style="color:#ABB2BF;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> config</span><span style="color:#ABB2BF;"> [--global] user.name </span><span style="color:#98C379;">&quot;[name]&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> config</span><span style="color:#ABB2BF;"> [--global] user.email </span><span style="color:#98C379;">&quot;[email address]&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="三、增加-删除文件" tabindex="-1">三、增加/删除文件 <a class="header-anchor" href="#三、增加-删除文件" aria-label="Permalink to &quot;三、增加/删除文件&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> add</span><span style="color:#ABB2BF;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> add</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> add</span><span style="color:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> add</span><span style="color:#D19A66;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> rm</span><span style="color:#ABB2BF;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> --cached</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> mv</span><span style="color:#ABB2BF;"> [file-original] [file-renamed]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="四、代码提交" tabindex="-1">四、代码提交 <a class="header-anchor" href="#四、代码提交" aria-label="Permalink to &quot;四、代码提交&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -m</span><span style="color:#ABB2BF;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#ABB2BF;"> [file1] [file2] ... -m [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> --amend</span><span style="color:#D19A66;"> -m</span><span style="color:#ABB2BF;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> --amend</span><span style="color:#ABB2BF;"> [file1] [file2] ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="五、分支" tabindex="-1">五、分支 <a class="header-anchor" href="#五、分支" aria-label="Permalink to &quot;五、分支&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#D19A66;"> -b</span><span style="color:#ABB2BF;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#ABB2BF;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> --track</span><span style="color:#ABB2BF;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> --set-upstream</span><span style="color:#ABB2BF;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> merge</span><span style="color:#ABB2BF;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> cherry-pick</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -d</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#98C379;"> origin</span><span style="color:#D19A66;"> --delete</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -dr</span><span style="color:#ABB2BF;"> [remote/branch]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="六、标签" tabindex="-1">六、标签 <a class="header-anchor" href="#六、标签" aria-label="Permalink to &quot;六、标签&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> tag</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> tag</span><span style="color:#ABB2BF;"> [tag] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除本地tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> tag</span><span style="color:#D19A66;"> -d</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除远程tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#98C379;"> origin</span><span style="color:#98C379;"> :refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看tag信息</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> show</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交指定tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#ABB2BF;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交所有tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#ABB2BF;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#D19A66;"> -b</span><span style="color:#ABB2BF;"> [branch] [tag]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="七、查看信息" tabindex="-1">七、查看信息 <a class="header-anchor" href="#七、查看信息" aria-label="Permalink to &quot;七、查看信息&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> -S</span><span style="color:#ABB2BF;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#ABB2BF;"> [tag] HEAD </span><span style="color:#E06C75;">--pretty</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#ABB2BF;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --follow</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> whatchanged</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> -p</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> -5</span><span style="color:#D19A66;"> --pretty</span><span style="color:#D19A66;"> --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> shortlog</span><span style="color:#D19A66;"> -sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> blame</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> diff</span><span style="color:#D19A66;"> --cached</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> diff</span><span style="color:#98C379;"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> diff</span><span style="color:#ABB2BF;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> diff</span><span style="color:#D19A66;"> --shortstat</span><span style="color:#98C379;"> &quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> show</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> show</span><span style="color:#D19A66;"> --name-only</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> show</span><span style="color:#ABB2BF;"> [commit]:[filename]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="八、远程同步" tabindex="-1">八、远程同步 <a class="header-anchor" href="#八、远程同步" aria-label="Permalink to &quot;八、远程同步&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> fetch</span><span style="color:#ABB2BF;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> remote</span><span style="color:#D19A66;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> remote</span><span style="color:#98C379;"> show</span><span style="color:#ABB2BF;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> remote</span><span style="color:#98C379;"> add</span><span style="color:#ABB2BF;"> [shortname] [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> pull</span><span style="color:#ABB2BF;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#ABB2BF;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#ABB2BF;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> push</span><span style="color:#ABB2BF;"> [remote] --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="九、撤销" tabindex="-1">九、撤销 <a class="header-anchor" href="#九、撤销" aria-label="Permalink to &quot;九、撤销&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#ABB2BF;"> [commit] [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reset</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reset</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --keep</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> revert</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> stash</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> stash</span><span style="color:#98C379;"> pop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="十、常用操作组合" tabindex="-1">十、常用操作组合 <a class="header-anchor" href="#十、常用操作组合" aria-label="Permalink to &quot;十、常用操作组合&quot;">​</a></h2><h3 id="_1-修改本地分支名和远程分支名" tabindex="-1">1. 修改本地分支名和远程分支名 <a class="header-anchor" href="#_1-修改本地分支名和远程分支名" aria-label="Permalink to &quot;1. 修改本地分支名和远程分支名&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -m</span><span style="color:#98C379;"> old_branch</span><span style="color:#98C379;"> new_branch</span><span style="color:#7F848E;font-style:italic;"> # 重命名本地分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> push</span><span style="color:#98C379;"> origin</span><span style="color:#98C379;"> :old_branch</span><span style="color:#7F848E;font-style:italic;"> # 删除远程旧分支（分支名前有冒号）</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> push</span><span style="color:#D19A66;"> --set-upstream</span><span style="color:#98C379;"> origin</span><span style="color:#98C379;"> new_branch</span><span style="color:#7F848E;font-style:italic;"> # 推送新的分支，并设置本地分支跟踪新的远程分支</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>相关文章：</strong></p><p><a href="http://www.ruanyifeng.com/blog/2019/12/git-undo.html" target="_blank" rel="noreferrer">《如何撤销 Git 操作？》</a></p><p><a href="http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html" target="_blank" rel="noreferrer">《git cherry-pick 教程》</a> 复制某分支上的部分提交到另一个分支上（相对于可以选择指定提交的 rebase 操作）。</p><blockquote><p>命令清单来源：<a href="https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html</a></p></blockquote>`,31)]))}const u=n(e,[["render",o]]);export{m as __pageData,u as default};
