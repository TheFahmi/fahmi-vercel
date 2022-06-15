var j=Object.defineProperty,C=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var x=(t,n,l)=>n in t?j(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,h=(t,n)=>{for(var l in n||(n={}))O.call(n,l)&&x(t,l,n[l]);if(S)for(var l of S(n))$.call(n,l)&&x(t,l,n[l]);return t},v=(t,n)=>C(t,N(n));import{_ as z,g as E,h as J,L as T,i as q,e as f,j as B,k as P,o as k,c as y,F as V,l as A,a as r,m as L,b as w,t as I,p as M,n as F}from"./renderer/_default.page.client.js.4d5c8edf.js";const R=E({loader:()=>J(()=>import("./LikeButton.34a41830.js"),["assets/LikeButton.34a41830.js","assets/LikeButton.c0bd1606.css","assets/renderer\\_default.page.client.js.4d5c8edf.js","assets/renderer\\_default.page.client.js.d3877ceb.css"]),loadingComponent:T,delay:200,suspensible:!1}),G={components:{AsyncLikeButton:R,VLazyImage:q},props:{imageUrl:String,apiUrl:String,pokeType:String},setup(t,{emit:n,refs:l}){let a=f([]),u=f(""),c=f(""),_=f([]);const m=f(null),i=o=>{let e=[];if(e=JSON.parse(localStorage.getItem("likeStorage")),e.length)if(e.find(s=>s.id===o.id))e=e.filter(s=>s.id!==o.id);else{const s=v(h({},o),{isLike:!0});e.push(s)}else{const s=v(h({},o),{isLike:!0});e.push(s)}localStorage.setItem("likeStorage",JSON.stringify(e)),_.value=e,d()},g=()=>{if(!c.value)return;let o=new Request(`${c.value}pokemon`);fetch(o).then(e=>{if(e.status===200)return e.json()}).then(e=>{u.value=e.next,e.results.forEach(s=>{s.id=s.url.split("/").filter(function(p){return!!p}).pop(),a.value.push(s)}),d()}).catch(e=>{console.log(e)})},d=()=>{const o=JSON.parse(localStorage.getItem("likeStorage"));a.value=a.value.map(e=>{const s=o.find(p=>e.id===p.id);return v(h({},e),{isLike:!!Object.keys(s||{}).length})})},b=()=>{},U=()=>{c.value=u.value,g()},D=o=>{n("setPokemonUrl",o)};return B(()=>{c.value=t.apiUrl,g(),JSON.parse(localStorage.getItem("likeStorage"))||localStorage.setItem("likeStorage",JSON.stringify([]))}),P(()=>t.pokeType,async()=>{a.value=[];let o=new Request(`${t.apiUrl}type/${t.pokeType}`);fetch(o).then(e=>{if(e.status===200)return e.json()}).then(e=>{u.value=e.next,e.pokemon.forEach(s=>{s.pokemon.id=s.pokemon.url.split("/").filter(function(p){return!!p}).pop(),a.value.push(s.pokemon)}),d()}).catch(e=>{console.log(e)})}),{setPokemonUrl:D,next:U,scrollTrigger:b,convertIsLike:d,fetchData:g,likeMe:i,likeData:_,currentUrl:c,nextUrl:u,pokemons:a,infinitescrolltrigger:m}}},H=t=>(M("data-v-9408576c"),t=t(),F(),t),K={class:"grid grid-cols-2 gap-3 w-full md:grid-cols-3 md:gap-5 min-h-screen"},Q=["onClick"],W={class:"bg-gray-100 w-full pt-5 pb-8 text-center"},X={class:"capitalize font-semibold text-md md:text-3xl mb-2"},Y={class:"flex justify-around items-center"},Z={class:"font-bold uppercase text-xl"},ee={id:"scroll-trigger",ref:"infinitescrolltrigger"},te=H(()=>r("i",{class:"fas fa-spinner fa-spin"},null,-1)),se=[te];function ne(t,n,l,a,u,c){const _=L("v-lazy-image"),m=L("async-like-button");return k(),y("div",K,[(k(!0),y(V,null,A(a.pokemons,(i,g)=>(k(),y("div",{class:"w-full rounded-lg overflow-hidden shadow-lg mx-auto cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:-translate-y-2 bg-white",key:"poke"+g},[r("div",{onClick:d=>a.setPokemonUrl(i.url),class:"py-4 md:py-10 mx-auto w-full flex items-center justify-center relative"},[w(_,{src:`${l.imageUrl}${i.id}.png`},null,8,["src"])],8,Q),r("div",W,[r("h1",X,I(i.name),1),r("div",Y,[r("div",Z," # "+I(i.id),1),w(m,{liked:i.isLike,onClick:d=>a.likeMe(i)},null,8,["liked","onClick"])])])]))),128)),r("div",ee,se,512)])}var ae=z(G,[["render",ne],["__scopeId","data-v-9408576c"]]);export{ae as default};