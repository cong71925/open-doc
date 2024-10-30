import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as m,d as c,w as e,a as n,b as s,f as t}from"./app-rkg3-Q7I.js";const v={},u=t(`<h2 id="webpack-和-vite" tabindex="-1"><a class="header-anchor" href="#webpack-和-vite"><span>Webpack 和 Vite</span></a></h2><p>基于现代化前端构建工具（如webpack，vite）构建的项目，基本都是要先用 Nodejs 启动开发服务器后才能开始调试的。</p><p>一般而言，经由 Vue-cli 创建的项目或者拉取的项目模板的根目录下都会有<code>package.json</code>文件，其中的<code>&quot;scripts&quot;</code>属性通常包含启动开发服务器的脚本：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-antd-jeecg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.4.3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上述文件为例，该项目的启动脚本应为<code>&quot;scripts&quot;</code>属性中的<code>&quot;serve&quot;</code>，在 PowerShell 或终端中输入如下命令：</p>`,5),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` run serve
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`npx vue-cli-service serve
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=t('<p>等待脚本执行完毕，PowerShell 或终端中显示项目运行地址后，开发服务器就算启动成功了。</p><h2 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app"><span>Uni-App</span></a></h2><p>Uni-App 是一套跨平台前端开发框架，可以实现编写一套代码，到处运行。但是其运行效果在各个平台上可能会有差异。</p><p>因此，在开发调试 Uni-App 时，我们应在每个环境上都运行调试一遍。</p><h3 id="web-环境运行" tabindex="-1"><a class="header-anchor" href="#web-环境运行"><span>WEB 环境运行</span></a></h3><ol><li>打开 uni-app 项目的页面，点 HBuilderX 右上角的运行按钮。</li><li>点击运行到浏览器 -&gt; Chrome。</li><li>等待 HBuilderX 编译并启动开发服务器，HBuilderX 启动成功后会自动打开项目运行页面。</li></ol><h3 id="真机环境运行" tabindex="-1"><a class="header-anchor" href="#真机环境运行"><span>真机环境运行</span></a></h3><ol><li>手机打开开发者模式。(各品牌手机打开方式不同，一般打开方式为：设置 -&gt; 设备信息 -&gt; 快速点击版本信息多次)</li><li>手机在开发者模式中设置页面中开启USB调试，有USB安装这一选项的话也要开启。</li><li>手机硬件通过USB数据线线连接到 HBuilderX 所在电脑。</li><li>打开 uni-app 项目的页面，点 HBuilderX 右上角的运行按钮。</li><li>点击运行到手机或模拟器 -&gt; 运行到 Android App 基座 -&gt; 使用标准基座运行 -&gt; 运行。</li><li>等待 HBuilderX 编译打包运行环境App，在此过程中手机可能会弹出提示<em>正在通过USB安装应用</em>，此时请点击允许。</li><li>编译完成且运行环境安装成功后，手机会自动打开运行环境App。</li></ol><h2 id="纯静态html项目" tabindex="-1"><a class="header-anchor" href="#纯静态html项目"><span>纯静态HTML项目</span></a></h2><p>纯静态的项目，即基于原生js或者JQuery等开发的项目，要运行开发服务器虽然也有基于 Nodejs 的方案，但我更推荐使用 Nginx，因为它更接近生产环境，资源占用也更小。</p><h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装Nginx</span></a></h3>',11),g={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,"下载最新版本的 Download for Windows Stable version 文件。",-1),_=n("li",null,"将下载的 zip 文件解压到要安装 Nginx 的目录。",-1),y=t(`<h3 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx"><span>配置Nginx</span></a></h3><ol><li>在 Nginx 的安装目录里，打开<code>conf</code>文件夹，使用合适的编辑器打开<code>nginx.conf</code>文件。</li><li>在<code>http</code>代码块内，粘贴如下代码：</li></ol><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># 项目运行的端口号，注意不能有重复或者被占用</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9000</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
  <span class="token comment"># 不使用缓存</span>
  <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-store</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token comment"># 项目的根目录地址</span>
    <span class="token directive"><span class="token keyword">root</span>   D:/workspace/project</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整配置文件如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token comment">#user  nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9000</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token comment"># 不使用缓存</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-store</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   D:/workspace/project</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html/dist</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 Nginx 的安装目录里，按住shift键并点击右键，在弹出的右键菜单中点击在此处打开PowerShell窗口。</li><li>校验编辑的配置文件是否正确：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-t</span>
<span class="token comment"># 配置文件正确时输出信息: </span>
<span class="token comment"># nginx: the configuration file D:\\xxx\\nginx/conf/nginx.conf syntax is ok</span>
<span class="token comment"># nginx: configuration file D:\\xxx\\nginx/conf/nginx.conf test is successful</span>
<span class="token comment"># 配置文件错误时输出信息: </span>
<span class="token comment"># nginx: [emerg] unknown directive &quot;test&quot; in D:\\xxx\\nginx/conf/nginx.conf:12</span>
<span class="token comment"># nginx: configuration file D:\\xxx\\nginx/conf/nginx.conf test failed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>启动 Nginx 服务器:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，当前已经在运行着 Nginx 服务器，此时可尝试重载配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>在浏览器打开要调试的页面：按照本文的配置文件，应该打开的页面即为<code>http://localhost:9000</code>。</li></ol>`,12);function w(f,q){const o=l("CodeTabs"),p=l("ExternalLinkIcon");return r(),m("div",null,[u,c(o,{id:"13",data:[{id:"执行scripts中定义的serve脚本"},{id:"使用npx直接执行脚本"}]},{title0:e(({value:a,isActive:i})=>[s("执行scripts中定义的serve脚本")]),title1:e(({value:a,isActive:i})=>[s("使用npx直接执行脚本")]),tab0:e(({value:a,isActive:i})=>[k]),tab1:e(({value:a,isActive:i})=>[b]),_:1}),h,n("ol",null,[n("li",null,[s("打开"),n("a",g,[s("最新版本发布地址"),c(p)]),s("。")]),x,_]),y])}const j=d(v,[["render",w],["__file","development.html.vue"]]),A=JSON.parse('{"path":"/doc/development.html","title":"运行开发服务器","lang":"zh-CN","frontmatter":{"title":"运行开发服务器","order":5,"date":"2024-05-27T00:00:00.000Z","category":["开发文档"],"description":"Webpack 和 Vite 基于现代化前端构建工具（如webpack，vite）构建的项目，基本都是要先用 Nodejs 启动开发服务器后才能开始调试的。 一般而言，经由 Vue-cli 创建的项目或者拉取的项目模板的根目录下都会有package.json文件，其中的\\"scripts\\"属性通常包含启动开发服务器的脚本： 以上述文件为例，该项目的启动脚...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/doc/development.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"运行开发服务器"}],["meta",{"property":"og:description","content":"Webpack 和 Vite 基于现代化前端构建工具（如webpack，vite）构建的项目，基本都是要先用 Nodejs 启动开发服务器后才能开始调试的。 一般而言，经由 Vue-cli 创建的项目或者拉取的项目模板的根目录下都会有package.json文件，其中的\\"scripts\\"属性通常包含启动开发服务器的脚本： 以上述文件为例，该项目的启动脚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T09:29:43.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-05-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T09:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运行开发服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T09:29:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"Webpack 和 Vite","slug":"webpack-和-vite","link":"#webpack-和-vite","children":[]},{"level":2,"title":"Uni-App","slug":"uni-app","link":"#uni-app","children":[{"level":3,"title":"WEB 环境运行","slug":"web-环境运行","link":"#web-环境运行","children":[]},{"level":3,"title":"真机环境运行","slug":"真机环境运行","link":"#真机环境运行","children":[]}]},{"level":2,"title":"纯静态HTML项目","slug":"纯静态html项目","link":"#纯静态html项目","children":[{"level":3,"title":"安装Nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"配置Nginx","slug":"配置nginx","link":"#配置nginx","children":[]}]}],"git":{"createdTime":1713861188000,"updatedTime":1718789383000,"contributors":[{"name":"郑家聪","email":"cong71925@gmail.com","commits":6}]},"readingTime":{"minutes":4.36,"words":1307},"filePathRelative":"doc/development.md","localizedDate":"2024年5月27日","autoDesc":true}');export{j as comp,A as data};
