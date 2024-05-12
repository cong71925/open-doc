import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as o,d as a,a as e,b as n,f as t}from"./app-DRErMxnu.js";const p={},u=e("p",null,"Git是目前世界上最常用的分布式版本控制系统。",-1),h=e("p",null,"版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本，采用版本控制系统是个明智的选择。 有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。",-1),g=e("p",null,"Git虽然是分布式的，但是在多人协作时，常常还是需要一台远程主机充当“中心”的作用，用来同步每个人对代码的改动。这里我们使用的是Gitee来充当这个远程主机。",-1),m=e("p",null,"而Git的工作流，可以简单理解为这样：",-1),v=e("h2",{id:"git安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git安装"},[e("span",null,"Git安装")])],-1),b={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"下载最新版本的 64-bit Git for Windows Setup 文件。一般而言，现代计算机几乎都是64位系统，但倘若您真的有使用32位系统的需求，请下载 32-bit Git for Windows Setup 文件。",-1),f=e("li",null,"下载完成后，打开安装程序。",-1),x=e("li",null,"Git for Windows Setup 安装向导将引导你完成安装步骤，包括选择将在其中安装Git的目录。",-1),_=e("li",null,"安装完成后。 打开 PowerShell，尝试列出当前安装的 Git 版本：",-1),G=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="从gitee中拉取仓库" tabindex="-1"><a class="header-anchor" href="#从gitee中拉取仓库"><span>从Gitee中拉取仓库</span></a></h2><ol><li>从Gitee拉取仓库前，尤其是拉取私有仓库时，需要先配置用户信息：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;Gitee绑定的用户名&#39;</span> 
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;Gitee绑定的邮箱&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>打开 PowerShell 拉取对应项目：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 项目存放的位置</span>
<span class="token builtin class-name">cd</span> <span class="token string">&#39;D://workspace/&#39;</span>
<span class="token comment"># 项目远程地址</span>
<span class="token function">git</span> clone <span class="token string">&#39;https://gitee.com/xxxx/xxxx.git&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时命令行会出现如下账号密码验证步骤，安装提示输入密码验证即可。</p><h2 id="从gitee中拉取代码同步到本地" tabindex="-1"><a class="header-anchor" href="#从gitee中拉取代码同步到本地"><span>从Gitee中拉取代码同步到本地</span></a></h2><p>在提交您的第一份代码前，可能您的同事或者协作者曾经提交了一份代码到Gitee上，导致我们本地的Git仓库与远程仓库不一致。因此，在每次提交代码前，建议先拉取一次代码：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
<span class="token comment"># 或者</span>
<span class="token function">git</span> pull origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如您要将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin master:brantest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分支相关的后续会补充......</p><h2 id="将改动移至暂存区" tabindex="-1"><a class="header-anchor" href="#将改动移至暂存区"><span>将改动移至暂存区</span></a></h2><p>我们先来理解下 Git 工作区、暂存区和版本库概念：</p><ul><li>工作区：就是你在电脑里能看到的目录。</li><li>暂存区：英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</li><li>版本库：工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。</li></ul><p>在真正提交代码改动前，我们需要先将其移至暂存区。</p><ul><li>添加指定文件到暂存区：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token string">&#39;文件1&#39;</span> <span class="token string">&#39;文件2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，您改动了某个目录下的大量文件。</p><ul><li>添加指定文件到暂存区：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token string">&#39;目录1&#39;</span> <span class="token string">&#39;目录2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，您改动了非常大量的文件，想要一次性提交。</p><ul><li>添加当前目录的所有文件到暂存区：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有时我们不止新增或修改文件，当我们删除了某些文件时，也需要把将这次删除放入暂存区。</p><ul><li>删除工作区文件，并且将这次删除放入暂存区：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token string">&#39;文件1&#39;</span> <span class="token string">&#39;文件2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交"><span>代码提交</span></a></h2><ul><li>提交暂存区：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;提交信息&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般而言，提交信息应该清晰明了，说明本次提交的目的。</p><ul><li>提交暂存区的指定文件：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token string">&#39;文件1&#39;</span> <span class="token string">&#39;文件2&#39;</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;提交信息&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推送提交到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送提交到远程仓库"><span>推送提交到远程仓库</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> push 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，一个基本的Git的工作流就完成了，后续会补充例如暂存回退和分支相关的部分。</p><p>当然，如果您觉得使用Git命令过于复杂，也可以使用Git的的一些GUI工具来辅助您使用Git。</p><p>Vs code内置了一个Git的可视化插件，推荐。</p><h2 id="进阶-分支管理" tabindex="-1"><a class="header-anchor" href="#进阶-分支管理"><span>（进阶）分支管理</span></a></h2><p>Git的分支功能在多人协同开发中尤为重要，可以让你在提交代码时不必担心互相影响。</p><p>包含分支的Git的工作流，可以简单理解为这样：</p>`,42),y=e("p",null,"对应的Git分支图：",-1),w=t(`<p>可以看到，当我们在新创建的分支上提交代码时，是不会影响到主分支的。而我们在自己的分支上的改动，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既不怕丢失每日进度，又不会影响别人工作。</p><ul><li>查看本地分支：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建分支：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token string">&#39;分支名称&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>切换分支：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token string">&#39;分支名称&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>合并分支：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> merge <span class="token string">&#39;分支名称&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除分支：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token string">&#39;分支名称&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function L(z,T){const i=s("FlowChart"),l=s("ExternalLinkIcon"),d=s("Mermaid");return r(),o("div",null,[u,h,g,m,a(i,{id:"flowchart-12",code:"eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufq6A0J8fWLr8gtSixJDM/z0rhWXfn0/5pVnbKT3b3pWeWpKY+2bEWIvZk9+SnuyZzJWck5qUDTUHWM2Xn064VXIkpKajCs5qerp0BNOrphjaIkufLd79o3wwRf9qziys5Pzc3E+hEZE39E57sWgK2f/HzBY0QLtCZxRmoyvpWvGxoBCqDMCDKnnZseLF/zvMV3VCnchWXaBRlpmeUaOragTwK50D8AOcCHY6QAjsJSVtxBpyTygUAtg+fFw==",preset:"vue"}),v,e("ol",null,[e("li",null,[n("建议使用安装程序引导安装。 安装程序将指向"),e("a",b,[n("最新版本发布页面"),a(l)]),n("。")]),k,f,x,_]),G,a(i,{id:"flowchart-191",code:"eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufK6koMS85w9YuvyC1KLEkMz8PqLBj9tPdu552tD2bsp4rOSM1OTu/tMQltQxNUfuz3kUwRfm5uZlAm5Dkn/VPeLJrybMpO592rYAb4puYmYduytPZ857s2A01KDe1KB3oQGQVEzqe7tzGxVVcolGUmZ5RoqlrB3EynIvkQoQY2EEYSkD2wwXBdsF5qVwAG5+Bow==",preset:"vue"}),y,a(d,{id:"mermaid-195",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSUHraMffp8u6nPdOU4BJARlJRYl5yhkJKahlINCM1OTu/tATGRdL9bMrOp10rDBF6kYWNwMIwzbmJmXlAfm5qUXoqiklcABVhN1Q="}),w])}const M=c(p,[["render",L],["__file","use-git.html.vue"]]),U=JSON.parse('{"path":"/doc/use-git.html","title":"使用Git工作流","lang":"zh-CN","frontmatter":{"title":"使用Git工作流","order":3,"date":"2024-04-24T00:00:00.000Z","category":["开发文档"],"description":"Git是目前世界上最常用的分布式版本控制系统。 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本，采用版本控制系统是个明智的选择。 有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，可以比较文件的变化细节...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/doc/use-git.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"使用Git工作流"}],["meta",{"property":"og:description","content":"Git是目前世界上最常用的分布式版本控制系统。 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本，采用版本控制系统是个明智的选择。 有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，可以比较文件的变化细节..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T09:34:38.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-04-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T09:34:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Git工作流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T09:34:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"Git安装","slug":"git安装","link":"#git安装","children":[]},{"level":2,"title":"从Gitee中拉取仓库","slug":"从gitee中拉取仓库","link":"#从gitee中拉取仓库","children":[]},{"level":2,"title":"从Gitee中拉取代码同步到本地","slug":"从gitee中拉取代码同步到本地","link":"#从gitee中拉取代码同步到本地","children":[]},{"level":2,"title":"将改动移至暂存区","slug":"将改动移至暂存区","link":"#将改动移至暂存区","children":[]},{"level":2,"title":"代码提交","slug":"代码提交","link":"#代码提交","children":[]},{"level":2,"title":"推送提交到远程仓库","slug":"推送提交到远程仓库","link":"#推送提交到远程仓库","children":[]},{"level":2,"title":"（进阶）分支管理","slug":"进阶-分支管理","link":"#进阶-分支管理","children":[]}],"git":{"createdTime":1713861188000,"updatedTime":1714988078000,"contributors":[{"name":"郑家聪","email":"cong71925@gmail.com","commits":6}]},"readingTime":{"minutes":5.24,"words":1573},"filePathRelative":"doc/use-git.md","localizedDate":"2024年4月24日","autoDesc":true}');export{M as comp,U as data};