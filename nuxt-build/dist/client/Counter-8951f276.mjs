import{u,_ as d,d as a,c as _,a as e,t as l,o as f}from"./entry-30786e82.mjs";function p(){const t=u("count",()=>Math.round(Math.random()*20));function n(){t.value+=1}function s(){t.value-=1}return{count:t,inc:n,dec:s}}const m=a({setup(t,{expose:n}){n();const{count:s,inc:o,dec:r}=p(),c={count:s,inc:o,dec:r};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),b={"inline-flex":"",m:"y-3"},v=e("div",{"i-carbon-subtract":""},null,-1),h=[v],k={font:"mono",w:"15","m-auto":"","inline-block":""},x=e("div",{"i-carbon-add":""},null,-1),y=[x];function C(t,n,s,o,r,c){return f(),_("div",b,[e("button",{btn:"","p-2":"","rounded-full":"",onClick:n[0]||(n[0]=i=>o.dec())},h),e("div",k,l(o.count),1),e("button",{btn:"","p-2":"","rounded-full":"",onClick:n[1]||(n[1]=i=>o.inc())},y)])}var B=d(m,[["render",C]]);export{B as default};
