import{_,d as u,c as i,a as r,t as d,o as l}from"./bootstrap-9db15351.mjs";import{u as p}from"./state-68a73e06.mjs";function f(){const e=p("count",()=>Math.round(Math.random()*20));function t(){e.value+=1}function o(){e.value-=1}return{count:e,inc:t,dec:o}}const m=u({setup(e,{expose:t}){t();const{count:o,inc:n,dec:a}=f(),s={count:o,inc:n,dec:a};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),v={"inline-flex":"",m:"y-3"},b={font:"mono",w:"15","m-auto":"","inline-block":""};function x(e,t,o,n,a,s){return l(),i("div",v,[r("button",{class:"btn",onClick:t[0]||(t[0]=c=>n.dec())},"-"),r("div",b,d(n.count),1),r("button",{class:"btn",onClick:t[1]||(t[1]=c=>n.inc())},"+")])}var C=_(m,[["render",x],["__scopeId","data-v-34849646"]]);export{C as default};
