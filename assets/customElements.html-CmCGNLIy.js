import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as o,a as n,b as s,d as c,f as l}from"./app-BPf6K1Jt.js";const i={},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components",target:"_blank",rel:"noopener noreferrer"},r=l(`<p>自定义元素一般用于地图中图层或点位的popup绑定html，Mars3D的可以跟随点位移动的popup仅支持html模板字符串或dom节点，无法接收Vue组件，此时就可以先将Vue组件先编译成自定义元素，然后再模板html字符串中使用。</p><p>在<code>/src/customElements</code>中定义的组件，会由Vue编译成可以在当前项目任意地方中使用的自定义元素，并注册到全局。</p><p>使用时要加上<code>ce-</code>作为前缀。</p><h2 id="创建自定义元素" tabindex="-1"><a class="header-anchor" href="#创建自定义元素"><span>创建自定义元素</span></a></h2><ol><li>在<code>/src/customElements</code>下新建对应的文件夹，此次示例中新建的popup名称为demo-element。文件夹名即为自定义元素名。</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>自定义元素组件命名应用全小写，且单词之间使用<code>-</code>分割。如此处的<code>demo-element</code>。</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─src
    └─customElements    - 自定义元素组件(custom elements)
       └─demo-element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在新建的自定义元素名文件夹中新建入口vue文件。</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>应使用<code>index.vue</code>作为入口文件名。</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─src
    └─customElements           
       └─demo-element
            └─index.vue - 新建的入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在入口文件编写业务代码。</li></ol><h2 id="使用自定义元素" tabindex="-1"><a class="header-anchor" href="#使用自定义元素"><span>使用自定义元素</span></a></h2><p>在图层中绑定可以跟随点位移动的popup：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Cesium<span class="token punctuation">,</span> graphic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mars3d&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  pid<span class="token operator">:</span> <span class="token number">2027</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token string">&quot;WgxcPdLW&quot;</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&quot;arcgis_wfs&quot;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;注点&quot;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/services/XM_LWJCZHZL/WGXC_LW/FeatureServer/0</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">popup</span><span class="token operator">:</span> <span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> payload <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">&#39;graphic&#39;</span> <span class="token keyword">in</span> payload<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>graphic <span class="token keyword">instanceof</span> <span class="token class-name">graphic</span><span class="token punctuation">.</span>BillboardPrimitive<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/** 自定义元素的attribute仅支持string，boolean 或 number，对象类型的数据要传递到内层的props前需要先将对象转换搓string */</span>
    <span class="token keyword">const</span> payloadStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>attr<span class="token punctuation">)</span>
    <span class="token doc-comment comment">/** 使用自定义元素，使用时要加上 ce- 作为前缀 */</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;ce-demo-element payload=&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>payloadStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;&gt;&lt;/ce-demo-element&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  popupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    offsetY<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span>
    horizontalOrigin<span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HorizontalOrigin<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">,</span>
    verticalOrigin<span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在自定义元素内的props接收数据：<code>/src/customElements/demo-element/index.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ payload }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 接收并解析传递过来的json字符串 */</span>
  <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function d(k,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",u,[s("Web Components"),c(a)]),s(" 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。")]),r])}const b=t(i,[["render",d],["__file","customElements.html.vue"]]),h=JSON.parse('{"path":"/map/customElements.html","title":"自定义元素","lang":"zh-CN","frontmatter":{"title":"自定义元素","order":7,"date":"2024-10-23T00:00:00.000Z","category":["开发文档","地图"],"description":"Web Components 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。 自定义元素一般用于地图中图层或点位的popup绑定html，Mars3D的可以跟随点位移动的popup仅支持html模板字符串或dom节点，无法接收Vue组件，此时就可以先将Vue组件先编译成自定义元素，然后再模板...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/map/customElements.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"自定义元素"}],["meta",{"property":"og:description","content":"Web Components 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。 自定义元素一般用于地图中图层或点位的popup绑定html，Mars3D的可以跟随点位移动的popup仅支持html模板字符串或dom节点，无法接收Vue组件，此时就可以先将Vue组件先编译成自定义元素，然后再模板..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-23T07:18:16.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-23T07:18:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义元素\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-23T07:18:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"创建自定义元素","slug":"创建自定义元素","link":"#创建自定义元素","children":[]},{"level":2,"title":"使用自定义元素","slug":"使用自定义元素","link":"#使用自定义元素","children":[]}],"git":{"createdTime":1729667896000,"updatedTime":1729667896000,"contributors":[{"name":"cong71925","email":"cong71925@gmail.com","commits":1}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"map/customElements.md","localizedDate":"2024年10月23日","autoDesc":true}');export{b as comp,h as data};
