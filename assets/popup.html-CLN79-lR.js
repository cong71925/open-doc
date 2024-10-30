import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-BPf6K1Jt.js";const p={},t=e(`<h2 id="openpopup" tabindex="-1"><a class="header-anchor" href="#openpopup"><span>openPopup()</span></a></h2><p>打开一个弹窗</p><ul><li><p>类型</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">openPopup</span><span class="token punctuation">(</span>options<span class="token operator">:</span> Options<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> instance<span class="token operator">:</span> VNode<span class="token punctuation">,</span> <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>详细信息</p><p>第一个参数是一个对象，支持以下这些选项：</p><ul><li><code>component</code>：传入的Vue组件。</li><li><code>props</code>：传入的Vue组件要使用的props。</li><li><code>title</code>：弹窗标题，支持字符串和Vue组件。</li><li><code>width</code>：弹窗宽度。</li><li><code>height</code>：弹窗高度。</li><li><code>onClose</code>：弹窗关闭后的回调函数。</li></ul><p>返回值是一个对象，里面有这些属性：</p><ul><li><code>instance</code>：文件预览弹窗的实例对象。</li><li><code>close</code>：文件预览弹窗关闭方法。</li></ul></li><li><p>示例</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> openPopup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/popup&#39;</span>
<span class="token keyword">import</span> demoPopup <span class="token keyword">from</span> <span class="token string">&#39;@/popup/demo/index.vue&#39;</span>

<span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 弹窗内的组件 */</span>
    component<span class="token operator">:</span> demoPopup<span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 弹窗的标题 */</span>
    title<span class="token operator">:</span> <span class="token string">&#39;demo标题&#39;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 弹窗的宽度 */</span>
    width<span class="token operator">:</span> <span class="token string">&#39;40vw&#39;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 传递进组件的props的数据 */</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;label&#39;</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 弹窗关闭后的回调函数 */</span>
    <span class="token function-variable function">onClose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;弹窗已关闭！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","popup.html.vue"]]),m=JSON.parse('{"path":"/map/api/popup.html","title":"弹窗","lang":"zh-CN","frontmatter":{"title":"弹窗","order":6,"date":"2024-10-24T00:00:00.000Z","category":["开发文档","地图"],"description":"openPopup() 打开一个弹窗 类型 详细信息 第一个参数是一个对象，支持以下这些选项： component：传入的Vue组件。 props：传入的Vue组件要使用的props。 title：弹窗标题，支持字符串和Vue组件。 width：弹窗宽度。 height：弹窗高度。 onClose：弹窗关闭后的回调函数。 返回值是一个对象，里面有这些属...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/map/api/popup.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"弹窗"}],["meta",{"property":"og:description","content":"openPopup() 打开一个弹窗 类型 详细信息 第一个参数是一个对象，支持以下这些选项： component：传入的Vue组件。 props：传入的Vue组件要使用的props。 title：弹窗标题，支持字符串和Vue组件。 width：弹窗宽度。 height：弹窗高度。 onClose：弹窗关闭后的回调函数。 返回值是一个对象，里面有这些属..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-24T08:47:14.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-24T08:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"弹窗\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-24T08:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"openPopup()","slug":"openpopup","link":"#openpopup","children":[]}],"git":{"createdTime":1729759634000,"updatedTime":1729759634000,"contributors":[{"name":"cong71925","email":"cong71925@gmail.com","commits":1}]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"map/api/popup.md","localizedDate":"2024年10月24日","autoDesc":true}');export{d as comp,m as data};
