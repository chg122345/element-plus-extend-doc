import{az as e,q as s,aS as a,p as l}from"./chunks/framework.CfWsU6YO.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-shortcut/api.md","filePath":"component/search-shortcut/api.md"}'),i={name:"component/search-shortcut/api.md"};function n(h,t,d,r,p,c){return l(),s("div",null,t[0]||(t[0]=[a(`<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">schemas</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">字段选项配置，数据类型请参阅下面<a href="#iexsearchshortcutschema">IExSearchShortcutSchema</a></td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否为圆角</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">number</td><td style="text-align:left;">10</td><td style="text-align:left;">最大选择字段数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">defaultCheckedFields</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">默认选中的字段</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">search</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">按下键盘<code>Enter</code>键时触发，<code>value</code>搜索值，数据类型请参阅下面<a href="#iexsearchshortcutschema">IExSearchShortcutSchema</a></td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">输入框清空值时触发</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">getSearchValue</td><td style="text-align:left;"><code>() =&gt; IExSearchShortcutModel</code></td><td style="text-align:left;">获取搜索值</td></tr><tr><td style="text-align:left;">setSearchValue</td><td style="text-align:left;"><code>(value: IExSearchShortcutModel)</code></td><td style="text-align:left;">设置搜索值</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexsearchshortcutschema" tabindex="-1">IExSearchShortcutSchema <a class="header-anchor" href="#iexsearchshortcutschema" aria-label="Permalink to &quot;IExSearchShortcutSchema&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchShortcutSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="iexsearchshortcutmodel" tabindex="-1">IExSearchShortcutModel <a class="header-anchor" href="#iexsearchshortcutmodel" aria-label="Permalink to &quot;IExSearchShortcutModel&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchShortcutModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 勾选的需要搜索的字段*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 是否勾选了搜索全部*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  isSearchAllFields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 输入框输入的值*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  searchValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11)]))}const g=e(i,[["render",n]]);export{k as __pageData,g as default};