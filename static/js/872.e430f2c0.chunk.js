"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[872],{872:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),s=n.n(c),u=n(791),o=n(689),i=n(87),p=n(485),f=n(231),h=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,u.useState)(""),l=(0,a.Z)(d,2),v=l[0],m=l[1],w=(0,o.TH)();return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchTrandingMovies();case 3:t=e.sent,c(t.results),m(""),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c([]),m(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending today"}),"string"===typeof v&&v?(0,h.jsx)("p",{children:v}):(0,h.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title,r=e.release_date;return(0,h.jsx)("li",{children:(0,h.jsxs)(i.rU,{to:"movies/".concat(t),state:{from:w},children:[n," (",(0,p.Z)(new Date(r)),")"]})},t)}))})]})}},231:function(e,t,n){var r=n(861),a=n(687),c=n.n(a),s=n(243),u="0dd8a44a838b85596fd1a072a37c7f7d",o="https://api.themoviedb.org/3/";function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,page:1}),n="".concat(o,"trending/movie/day?").concat(t),e.next=5,s.Z.get(n);case 5:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u,page:1,query:t}),r="".concat(o,"search/movie?").concat(n),e.next=5,s.Z.get(r);case 5:return a=e.sent,i=a.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u}),r="".concat(o,"movie/").concat(t,"?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u,page:1}),r="".concat(o,"movie/").concat(t,"/reviews?").concat(n),e.next=5,s.Z.get(r);case 5:return a=e.sent,i=a.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u}),r="".concat(o,"movie/").concat(t,"/credits?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={fetchTrandingMovies:function(){return i.apply(this,arguments)},fetchSearchingMovies:function(e){return p.apply(this,arguments)},fetchMovie:function(e){return f.apply(this,arguments)},fetchReviews:function(e){return h.apply(this,arguments)},fetchCast:function(e){return d.apply(this,arguments)}};t.Z=l},485:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2);function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(e){return a(1,arguments),c(e).getFullYear()}}}]);
//# sourceMappingURL=872.e430f2c0.chunk.js.map