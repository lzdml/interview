import{_ as a,c as l,G as p,a0 as o,B as e,o as t}from"./chunks/framework.D62TWaax.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/更优雅的处理form表单数据.md","filePath":"web/更优雅的处理form表单数据.md","lastUpdated":1732672128000}'),c={name:"web/更优雅的处理form表单数据.md"};function r(B,s,y,i,b,u){const n=e("end-time");return t(),l("div",null,[p(n,{time:"新增时间: 2022-12-27 16:56",mood:"🤪"}),s[0]||(s[0]=o(`<h2 id="更优雅的处理form表单数据" tabindex="-1">更优雅的处理form表单数据 <a class="header-anchor" href="#更优雅的处理form表单数据" aria-label="Permalink to &quot;更优雅的处理form表单数据&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">&lt;!</span><span style="color:#E5C07B;">DOCTYPE</span><span style="color:#E06C75;"> html</span><span style="color:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#D19A66;font-style:italic;"> lang</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;en&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#D19A66;font-style:italic;"> charset</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#D19A66;font-style:italic;"> http-equiv</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;X-UA-Compatible&quot;</span><span style="color:#D19A66;font-style:italic;"> content</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;IE=edge&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#D19A66;font-style:italic;"> name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;viewport&quot;</span><span style="color:#D19A66;font-style:italic;"> content</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;Form&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">form</span><span style="color:#D19A66;font-style:italic;"> onsubmit</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;saveHandle(event)&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">input</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;text&quot;</span><span style="color:#D19A66;font-style:italic;"> name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#D19A66;font-style:italic;"> placeholder</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;请输入名称&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">input</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;text&quot;</span><span style="color:#D19A66;font-style:italic;"> name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;nickName&quot;</span><span style="color:#D19A66;font-style:italic;"> placeholder</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;请输入昵称&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">input</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;email&quot;</span><span style="color:#D19A66;font-style:italic;"> name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;email&quot;</span><span style="color:#D19A66;font-style:italic;"> placeholder</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;请输入邮箱&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">button</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#ABB2BF;">&gt;保存&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">button</span><span style="color:#D19A66;font-style:italic;"> id</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;">&gt;跳转测试&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">button</span><span style="color:#D19A66;font-style:italic;"> id</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;btn1&quot;</span><span style="color:#ABB2BF;">&gt;结果&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    function saveHandle(e) </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E5C07B;">      console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;e&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">      e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E06C75;">      const</span><span style="color:#E06C75;"> formData</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> FormData</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">currentTarget</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">      const</span><span style="color:#E06C75;"> data</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromEntries</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">formData</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">      console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;data&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span><span style="color:#7F848E;font-style:italic;">/* {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">          &quot;name&quot;: &quot;杜兆林&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">          &quot;nickName&quot;: &quot;2&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">          &quot;email&quot;: &quot;dzlkuboy@163.com&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      } */</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    btn.onclick = function (e) </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E5C07B;">      e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E5C07B;">      window</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">location</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">href</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> window</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">location</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">href</span><span style="color:#56B6C2;"> +</span><span style="color:#98C379;"> &#39;?name=1&amp;nickName=2&amp;age=3&#39;</span></span>
<span class="line"><span style="color:#C678DD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    btn1.onclick = function (e) </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E5C07B;">      e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E06C75;">      const</span><span style="color:#E06C75;"> params</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> URLSearchParams</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">location</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">search</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">      console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Object.fromEntries(params)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromEntries</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#C678DD;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,2))])}const C=a(c,[["render",r]]);export{F as __pageData,C as default};
