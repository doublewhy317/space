import{_ as i,c as a,d as t,o as e}from"./app-BISc0I5u.js";const n={};function l(h,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h2 id="类型拓宽" tabindex="-1"><a class="header-anchor" href="#类型拓宽"><span>类型拓宽</span></a></h2><blockquote><p>一般来说，TS在推导类型时，会推导出一个更宽泛的类型，而不限定为每个具体的字面量类型</p></blockquote><p>使用 let</p><p>-- let 定义 a = &#39;x&#39; 后，按理来说 a 应该就是字面量类型 &#39;x&#39;，但由于类型拓宽，成了 string 类型</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // string 类型</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 123</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // number 类型</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // boolean 类型</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // any 类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 const</p><p>-- const 定义的变量不会更改，因此就是对应的字面量类型，也不存在 类型拓宽</p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // &#39;x&#39;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 123</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 123</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const k=i(n,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/fragment/ts/ndiq8atb/","title":"随手记","lang":"zh-CN","frontmatter":{"title":"随手记","createTime":"2024/12/11 08:58:48","permalink":"/notes/fragment/ts/ndiq8atb/"},"headers":[],"readingTime":{"minutes":0.56,"words":167},"git":{"updatedTime":1733923895000,"contributors":[{"name":"Mengkp","username":"Mengkp","email":"mengkp@zhichi.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Mengkp?v=4","url":"https://github.com/Mengkp"},{"name":"Micky","username":"Micky","email":"dpublewhy317@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Micky?v=4","url":"https://github.com/Micky"}]},"filePathRelative":"notes/fragment/ts/随手记.md","bulletin":false}');export{k as comp,r as data};