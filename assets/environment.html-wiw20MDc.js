import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as p,c as m,a as e,b as n,d as i,w as s,f as l}from"./app-rkg3-Q7I.js";const u={},h=e("p",null,"工欲善其事，必先利其器。",-1),v=e("h2",{id:"node环境安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node环境安装"},[e("span",null,"Node环境安装")])],-1),g=e("p",null,"安装Node.js时建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需要在多个 Node.js 版本之间进行切换。 Node 版本管理器（通常称为 nvm）是安装多个版本的 Node.js 的最常见方法，但仅适用于 Mac/Linux，在 Windows 上不受支持。 相反，我们建议安装 nvm-windows，然后使用它来安装 Node.js 和 Node Package Manager (npm)。",-1),b=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"当前jeecg项目推荐使用的前端node版本为v14，推荐使用v14.21.3")],-1),_={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"下载最新版本的 nvm-setup.zip 文件。",-1),k=e("li",null,"下载完成后，打开 zip 文件，然后打开 nvm-setup.exe 文件。",-1),N=e("li",null,"Setup-NVM-for-Windows 安装向导将引导你完成安装步骤，包括选择将在其中安装 nvm-windows 和 Node.js 的目录。",-1),y=e("li",null,"安装完成后。 打开 PowerShell（建议使用提升的管理员权限打开），尝试使用 windows-nvm 来列出当前安装的 Node 版本（此时应为无）：",-1),x=l(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>安装 Node.js 的当前版本（推荐v14.21.3版本）：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token string">&quot;14.21.3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>列出安装的 Node 版本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在应会看到刚安装的版本。</p><ol start="8"><li>在安装所需的 Node.js 版本后，通过输入 <code>nvm use &lt;version&gt;</code>（请将 <code>&lt;version&gt;</code> 替换为版本号，即 <code>nvm use 14.21.3</code>）来选择要使用的版本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm use <span class="token string">&quot;14.21.3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>验证哪个 npm 版本安装了：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此版本号将自动更改为与当前版本的 Node.js 关联的 npm 版本。</p><h2 id="npm换源" tabindex="-1"><a class="header-anchor" href="#npm换源"><span>NPM换源</span></a></h2><ol><li>查看当前NPM源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>更换为国内源</li></ol>`,15),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry https://registry.npmmirror.com
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry http://mirrors.cloud.tencent.com/npm/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=l(`<ol start="3"><li>再次查看当前NPM源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若输出为上一步设置的源的话，则设置成功</p><h2 id="可选-安装yarn包管理器" tabindex="-1"><a class="header-anchor" href="#可选-安装yarn包管理器"><span>(可选)安装YARN包管理器</span></a></h2><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>换源</li></ol>`,7),P=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry https://registry.npmmirror.com
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry http://mirrors.cloud.tencent.com/npm/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=l(`<h2 id="可选-安装pnpm包管理器" tabindex="-1"><a class="header-anchor" href="#可选-安装pnpm包管理器"><span>(可选)安装PNPM包管理器</span></a></h2><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>换源</li></ol>`,4),C=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry https://registry.npmmirror.com
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(" config "),e("span",{class:"token builtin class-name"},"set"),n(` registry http://mirrors.cloud.tencent.com/npm/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),z=l(`<h2 id="不推荐-安装cnpm包管理器" tabindex="-1"><a class="header-anchor" href="#不推荐-安装cnpm包管理器"><span>(不推荐)安装CNPM包管理器</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><p>使用cnpm安装依赖时，既不生成lock文件，也不会根据lock文件安装依赖，只遵循<code>package.json</code>安装依赖。 在多人共同协作维护的项目中，lock文件是必不可少的，是为了确保不同开发者安装的包及其依赖保持一致，同时也是降低不同版本 npm 包给项目稳定性带来的影响。尤其是一些不遵循语义化版本控制的第三方 npm 包，就很容易被坑到。故在大部分情况下，都不建议使用cnpm，可使用换源的npm或yarn或pnpm代替。</p></div><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cnpm默认使用国内阿里源，一般情况下没有换源的必要。</p>`,5);function L(V,q){const c=d("ExternalLinkIcon"),o=d("CodeTabs");return p(),m("div",null,[h,v,g,b,e("ol",null,[e("li",null,[n("请遵循 windows-nvm 存储库上的安装说明。 建议使用安装程序，但如果对需求有更深入的了解，可能需要考虑手动安装。 安装程序将指向"),e("a",_,[n("最新版本发布页面"),i(c)]),n("。")]),f,k,N,y]),x,i(o,{id:"99",data:[{id:"阿里源"},{id:"腾讯源"}]},{title0:s(({value:a,isActive:t})=>[n("阿里源")]),title1:s(({value:a,isActive:t})=>[n("腾讯源")]),tab0:s(({value:a,isActive:t})=>[w]),tab1:s(({value:a,isActive:t})=>[j]),_:1}),A,i(o,{id:"136",data:[{id:"阿里源"},{id:"腾讯源"}]},{title0:s(({value:a,isActive:t})=>[n("阿里源")]),title1:s(({value:a,isActive:t})=>[n("腾讯源")]),tab0:s(({value:a,isActive:t})=>[P]),tab1:s(({value:a,isActive:t})=>[M]),_:1}),T,i(o,{id:"162",data:[{id:"阿里源"},{id:"腾讯源"}]},{title0:s(({value:a,isActive:t})=>[n("阿里源")]),title1:s(({value:a,isActive:t})=>[n("腾讯源")]),tab0:s(({value:a,isActive:t})=>[C]),tab1:s(({value:a,isActive:t})=>[Z]),_:1}),z])}const B=r(u,[["render",L],["__file","environment.html.vue"]]),E=JSON.parse('{"path":"/doc/environment.html","title":"前端环境配置","lang":"zh-CN","frontmatter":{"title":"前端环境配置","order":1,"date":"2024-04-16T00:00:00.000Z","category":["开发文档"],"description":"工欲善其事，必先利其器。 Node环境安装 安装Node.js时建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需要在多个 Node.js 版本之间进行切换。 Node 版本管理器（通常称为 nvm）是安装多个版本的 Node.js 的最常见方法，但仅适用于 Mac/Linux，在 Windows 上不受支持。 相反，我们...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/doc/environment.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"前端环境配置"}],["meta",{"property":"og:description","content":"工欲善其事，必先利其器。 Node环境安装 安装Node.js时建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需要在多个 Node.js 版本之间进行切换。 Node 版本管理器（通常称为 nvm）是安装多个版本的 Node.js 的最常见方法，但仅适用于 Mac/Linux，在 Windows 上不受支持。 相反，我们..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T09:59:17.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-24T09:59:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端环境配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-24T09:59:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"Node环境安装","slug":"node环境安装","link":"#node环境安装","children":[]},{"level":2,"title":"NPM换源","slug":"npm换源","link":"#npm换源","children":[]},{"level":2,"title":"(可选)安装YARN包管理器","slug":"可选-安装yarn包管理器","link":"#可选-安装yarn包管理器","children":[]},{"level":2,"title":"(可选)安装PNPM包管理器","slug":"可选-安装pnpm包管理器","link":"#可选-安装pnpm包管理器","children":[]},{"level":2,"title":"(不推荐)安装CNPM包管理器","slug":"不推荐-安装cnpm包管理器","link":"#不推荐-安装cnpm包管理器","children":[]}],"git":{"createdTime":1713856299000,"updatedTime":1713952757000,"contributors":[{"name":"郑家聪","email":"cong71925@gmail.com","commits":4}]},"readingTime":{"minutes":2.92,"words":875},"filePathRelative":"doc/environment.md","localizedDate":"2024年4月16日","autoDesc":true}');export{B as comp,E as data};