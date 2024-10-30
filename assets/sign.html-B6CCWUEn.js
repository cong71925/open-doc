import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-BPf6K1Jt.js";const e={},p=t(`<p>在某些版本的Jeecg中会对接口请求进行时间戳校验和签名校验。</p><p>使用<code>useAxios</code>获取的<code>axios</code>实例会自动在请求头上附上时间戳和签名信息。</p><h2 id="getdatetimetostring" tabindex="-1"><a class="header-anchor" href="#getdatetimetostring"><span>getDateTimeToString()</span></a></h2><p>获取Jeecg接口请求中使用的时间戳。</p><ul><li><p>类型</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getDateTimeToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>详细信息</p><p>返回值是一个字符串，会按照年月日时分秒的顺序输出如<code>20241025095308170</code>的一个字符串。</p></li><li><p>示例</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDateTimeToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/sign&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getDateTimeToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;20241025095308170&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Axios</code>的请求拦截器中使用：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDateTimeToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/sign&#39;</span>
axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;X-Timestamp&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getDateTimeToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="getsign" tabindex="-1"><a class="header-anchor" href="#getsign"><span>getSign()</span></a></h2><p>获取Jeecg接口请求中使用的签名。</p><ul><li><p>类型</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getSign</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>详细信息</p><p>第一个参数为接口请求的url。</p><p>第二个参数为接口请求的params。</p><p>第三个参数为接口请求的data，即在body传递的数据。</p><p>返回值是一个字符串，会输出<code>params</code>和<code>data</code>混合和拼接<code>SECRET</code>后md5运算的结果。</p></li><li><p>示例</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getSign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/sign&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getSign</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> pageNo<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;9D679E1A2A84004538BC555957982E6D&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Axios</code>的请求拦截器中使用：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getSign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/sign&#39;</span>
axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;X-Sign&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getSign</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token punctuation">,</span> config<span class="token punctuation">.</span>params<span class="token punctuation">,</span> config<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,8),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","sign.html.vue"]]),k=JSON.parse('{"path":"/map/api/sign.html","title":"接口签名","lang":"zh-CN","frontmatter":{"title":"接口签名","order":9,"date":"2024-10-24T00:00:00.000Z","category":["开发文档","地图"],"description":"在某些版本的Jeecg中会对接口请求进行时间戳校验和签名校验。 使用useAxios获取的axios实例会自动在请求头上附上时间戳和签名信息。 getDateTimeToString() 获取Jeecg接口请求中使用的时间戳。 类型 详细信息 返回值是一个字符串，会按照年月日时分秒的顺序输出如20241025095308170的一个字符串。 示例 在A...","head":[["meta",{"property":"og:url","content":"https://doc.congvps.fun/map/api/sign.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"接口签名"}],["meta",{"property":"og:description","content":"在某些版本的Jeecg中会对接口请求进行时间戳校验和签名校验。 使用useAxios获取的axios实例会自动在请求头上附上时间戳和签名信息。 getDateTimeToString() 获取Jeecg接口请求中使用的时间戳。 类型 详细信息 返回值是一个字符串，会按照年月日时分秒的顺序输出如20241025095308170的一个字符串。 示例 在A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:18:07.000Z"}],["meta",{"property":"article:author","content":"狭雾"}],["meta",{"property":"article:published_time","content":"2024-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:18:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口签名\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:18:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狭雾\\",\\"url\\":\\"https://congvps.fun\\"}]}"]]},"headers":[{"level":2,"title":"getDateTimeToString()","slug":"getdatetimetostring","link":"#getdatetimetostring","children":[]},{"level":2,"title":"getSign()","slug":"getsign","link":"#getsign","children":[]}],"git":{"createdTime":1729667896000,"updatedTime":1729847887000,"contributors":[{"name":"cong71925","email":"cong71925@gmail.com","commits":2}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"map/api/sign.md","localizedDate":"2024年10月24日","autoDesc":true}');export{d as comp,k as data};
