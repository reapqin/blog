(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{737:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(143),r=a.n(n),o=a(190),c=a(23),s=a(731);function i(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.f}),t({type:c.q,data:{loading:!0}}),e.next=4,s.a.GET_CATEGORIES();case 4:a=e.sent,t({type:c.q,data:{loading:!1}}),a&&(n=a.status,o=a.response,n&&t({type:c.h,data:o}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},747:function(e,t,a){"use strict";a.r(t);a(716);var n=a(722),r=(a(693),a(694)),o=a(69),c=a(70),s=a(72),i=a(71),u=a(73),l=a(1),p=a.n(l),m=a(74),y=a(737),f=(a(760),a(144)),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){(0,this.props.dispatchGetCategoryList)()}},{key:"render",value:function(){var e=this.props,t=e.categoryList,a=e.categoryColors;return p.a.createElement("div",{className:"categories-container"},p.a.createElement("h1",{className:"title"},"\u5206\u7c7b"),p.a.createElement("div",{className:"total"},"\u603b\u5171 ",p.a.createElement("span",null,t.length)," \u4e2a\u5206\u7c7b"),p.a.createElement("div",{className:"categories"},t.map(function(e,t){return p.a.createElement(f.b,{to:{pathname:"/category/"+e.name,state:{type:"Category",categoryName:e.name}},key:t},p.a.createElement("span",{className:"item"},p.a.createElement(n.a,{count:e.articleCount,style:{backgroundColor:"#fff",color:"red",borderColor:"red"}},p.a.createElement(r.a,{color:a[t%11],style:{cursor:"pointer"}},e.name))))})))}}]),t}(l.Component);t.default=Object(m.b)(function(e){var t=e.category;return{categoryList:t.categoryList,categoryColors:t.categoryColors}},function(e){return{dispatchGetCategoryList:function(){return e(Object(y.a)())}}})(d)},760:function(e,t,a){}}]);