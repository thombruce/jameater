(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,7],{4131:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-disc"},t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},4132:function(t,e,r){"use strict";r.r(e);var n=r(71),l={props:["article"],methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},c=r(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"py-4"},[t.article.image?r("NuxtImg",{attrs:{src:t.article.image,width:"100vw"}}):t._e(),t.article.categories?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"hidden"},[t._v("Categories")]),t._l(t.article.categories,(function(e){return r("dd",[r("NuxtLink",{attrs:{to:"/blog/categories/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),t.article.series?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"hidden"},[t._v("Series")]),t._l(t.article.series,(function(e){return r("dd",[r("NuxtLink",{attrs:{to:"/blog/series/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.article.tags?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"hidden"},[t._v("Tags")]),t._l(t.article.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[r("NuxtLink",{attrs:{to:"/blog/tags/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),r("time",{staticClass:"block",attrs:{datetime:t.article.createdAt}},[t._v(t._s(t.article.createdAt))])],1)}),[],!1,null,null,null);e.default=component.exports},4133:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("aside",[r("h2",{staticClass:"mb-2"},[t._v("Table of Contents")]),r("TntUITableOfContents",{attrs:{toc:t.article.toc}})],1),r("hr",{staticClass:"my-3"}),r("NuxtContent",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntUITableOfContents:r(4131).default})},4134:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("ArticleHeader",{attrs:{article:t.article}}),r("ArticleContent",{attrs:{article:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleHeader:r(4132).default,ArticleContent:r(4133).default})},4147:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(36),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,l,c,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,c=t.store,o=l.slug,e.next=4,r("blog",o).fetch().catch(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.dispatch("blog/taxonomies/all",{taxonomy:o});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))));case 4:return article=e.sent,e.abrupt("return",{slug:o,article:article});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{meta:[{hid:"og:title",property:"og:title",content:"".concat(this.article.title," | Jameater")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"https://thombruce.com".concat(this.$route.fullPath)}]}}}),c=r(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[Array.isArray(t.article)?r("article",[r("header",[r("h1",[t._v(t._s(t._f("titleize")(t.slug)))])]),r("div",t._l(t.article,(function(e){return r("article",[r("header",[r("h2",[r("NuxtLink",{attrs:{to:{name:"blog-taxonomy-term",params:{taxonomy:t.slug,term:e.slug}}}},[t._v(t._s(e.title))])],1)])])})),0)]):r("ArticlePage",{attrs:{article:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticlePage:r(4134).default})}}]);