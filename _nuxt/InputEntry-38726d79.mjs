import{_ as c,d as l,r as i,b as u,c as _,w as p,v as m,a,e as f,o as v}from"./entry-100d67cc.mjs";const x=l({setup(r,{expose:t}){t();const n=i(""),e=u(),o={name:n,router:e,go:()=>{n.value&&e.push(`/hi/${encodeURIComponent(n.value)}`)}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),y=["onKeydown"],b=["disabled"];function g(r,t,n,e,s,o){return v(),_("div",null,[p(a("input",{id:"input","onUpdate:modelValue":t[0]||(t[0]=d=>e.name=d),placeholder:"What's your name?",type:"text",autocomplete:"false",p:"x-4 y-2",m:"t-5",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none",onKeydown:f(e.go,["enter"])},null,40,y),[[m,e.name]]),a("div",null,[a("button",{class:"m-3 text-sm btn",disabled:!e.name,onClick:e.go}," GO ",8,b)])])}var w=c(x,[["render",g]]);export{w as default};
