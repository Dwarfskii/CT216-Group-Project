(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function As(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const X={},Wt=[],Ie=()=>{},Uc=()=>!1,yr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ps=t=>t.startsWith("onUpdate:"),ce=Object.assign,Os=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fc=Object.prototype.hasOwnProperty,W=(t,e)=>Fc.call(t,e),$=Array.isArray,Kt=t=>br(t)==="[object Map]",Oo=t=>br(t)==="[object Set]",H=t=>typeof t=="function",re=t=>typeof t=="string",rn=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",ko=t=>(te(t)||H(t))&&H(t.then)&&H(t.catch),No=Object.prototype.toString,br=t=>No.call(t),$c=t=>br(t).slice(8,-1),Do=t=>br(t)==="[object Object]",ks=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=As(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Er=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bc=/-(\w)/g,Ve=Er(t=>t.replace(Bc,(e,n)=>n?n.toUpperCase():"")),Hc=/\B([A-Z])/g,sn=Er(t=>t.replace(Hc,"-$1").toLowerCase()),wr=Er(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=Er(t=>t?`on${wr(t)}`:""),mt=(t,e)=>!Object.is(t,e),zn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ai;const Mo=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ns(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=re(r)?Kc(r):Ns(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(re(t)||te(t))return t}const Vc=/;(?![^(]*\))/g,jc=/:([^]+)/,Wc=/\/\*[^]*?\*\//g;function Kc(t){const e={};return t.replace(Wc,"").split(Vc).forEach(n=>{if(n){const r=n.split(jc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ds(t){let e="";if(re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Ds(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gc=As(zc);function Lo(t){return!!t||t===""}const fm=t=>re(t)?t:t==null?"":$(t)||te(t)&&(t.toString===No||!H(t.toString))?JSON.stringify(t,xo,2):String(t),xo=(t,e)=>e&&e.__v_isRef?xo(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$r(r,i)+" =>"]=s,n),{})}:Oo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$r(n))}:rn(e)?$r(e):te(e)&&!$(e)&&!Do(e)?String(e):e,$r=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class qc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jc(t,e=Re){e&&e.active&&e.effects.push(t)}function Yc(){return Re}let Ct;class Ms{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jc(this,s)}get dirty(){if(this._dirtyLevel===1){Mt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Xc(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Lt()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dt,n=Ct;try{return dt=!0,Ct=this,this._runnings++,ci(this),this.fn()}finally{li(this),this._runnings--,Ct=n,dt=e}}stop(){var e;this.active&&(ci(this),li(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Xc(t){return t.value}function ci(t){t._trackId++,t._depsLength=0}function li(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Uo(t.deps[e],t);t.deps.length=t._depsLength}}function Uo(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let dt=!0,ss=0;const Fo=[];function Mt(){Fo.push(dt),dt=!1}function Lt(){const t=Fo.pop();dt=t===void 0?!0:t}function Ls(){ss++}function xs(){for(ss--;!ss&&is.length;)is.shift()()}function $o(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Uo(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const is=[];function Bo(t,e,n){Ls();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(r._shouldSchedule=!0,r.trigger())}Ho(t),xs()}function Ho(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,is.push(e.scheduler))}const Vo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},os=new WeakMap,At=Symbol(""),as=Symbol("");function ye(t,e,n){if(dt&&Ct){let r=os.get(t);r||os.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vo(()=>r.delete(n))),$o(Ct,s)}}function qe(t,e,n,r,s,i){const o=os.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((u,f)=>{(f==="length"||!rn(f)&&f>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?ks(n)&&a.push(o.get("length")):(a.push(o.get(At)),Kt(t)&&a.push(o.get(as)));break;case"delete":$(t)||(a.push(o.get(At)),Kt(t)&&a.push(o.get(as)));break;case"set":Kt(t)&&a.push(o.get(At));break}Ls();for(const c of a)c&&Bo(c,2);xs()}const Qc=As("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn)),ui=Zc();function Zc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mt(),Ls();const r=K(this)[e].apply(this,n);return xs(),Lt(),r}}),t}function el(t){const e=K(this);return ye(e,"has",t),e.hasOwnProperty(t)}class Wo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hl:qo:i?Go:zo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){if(o&&W(ui,n))return Reflect.get(ui,n,r);if(n==="hasOwnProperty")return el}const a=Reflect.get(e,n,r);return(rn(n)?jo.has(n):Qc(n))||(s||ye(e,"get",n),i)?a:be(a)?o&&ks(n)?a:a.value:te(a)?s?Yo(a):Tr(a):a}}class Ko extends Wo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=Qt(i);if(!sr(r)&&!Qt(r)&&(i=K(i),r=K(r)),!$(e)&&be(i)&&!be(r))return c?!1:(i.value=r,!0)}const o=$(e)&&ks(n)?Number(n)<e.length:W(e,n),a=Reflect.set(e,n,r,s);return e===K(s)&&(o?mt(r,i)&&qe(e,"set",n,r):qe(e,"add",n,r)),a}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!jo.has(n))&&ye(e,"has",n),r}ownKeys(e){return ye(e,"iterate",$(e)?"length":At),Reflect.ownKeys(e)}}class tl extends Wo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nl=new Ko,rl=new tl,sl=new Ko(!0),Us=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function Fn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(mt(e,i)&&ye(s,"get",e),ye(s,"get",i));const{has:o}=Ir(s),a=r?Us:n?Bs:vn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $n(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(mt(t,s)&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&ye(K(t),"iterate",At),Reflect.get(t,"size",t)}function fi(t){t=K(t);const e=K(this);return Ir(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function di(t,e){e=K(e);const n=K(this),{has:r,get:s}=Ir(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mt(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function hi(t){const e=K(this),{has:n,get:r}=Ir(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function pi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Hn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Us:t?Bs:vn;return!t&&ye(a,"iterate",At),o.forEach((u,f)=>r.call(s,c(u),c(f),i))}}function Vn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Kt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Us:e?Bs:vn;return!e&&ye(i,"iterate",c?as:At),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function il(){const t={get(i){return Fn(this,i)},get size(){return Bn(this)},has:$n,add:fi,set:di,delete:hi,clear:pi,forEach:Hn(!1,!1)},e={get(i){return Fn(this,i,!1,!0)},get size(){return Bn(this)},has:$n,add:fi,set:di,delete:hi,clear:pi,forEach:Hn(!1,!0)},n={get(i){return Fn(this,i,!0)},get size(){return Bn(this,!0)},has(i){return $n.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Hn(!0,!1)},r={get(i){return Fn(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return $n.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vn(i,!1,!1),n[i]=Vn(i,!0,!1),e[i]=Vn(i,!1,!0),r[i]=Vn(i,!0,!0)}),[t,n,e,r]}const[ol,al,cl,ll]=il();function Fs(t,e){const n=e?t?ll:cl:t?al:ol;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const ul={get:Fs(!1,!1)},fl={get:Fs(!1,!0)},dl={get:Fs(!0,!1)},zo=new WeakMap,Go=new WeakMap,qo=new WeakMap,hl=new WeakMap;function pl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gl(t){return t.__v_skip||!Object.isExtensible(t)?0:pl($c(t))}function Tr(t){return Qt(t)?t:$s(t,!1,nl,ul,zo)}function Jo(t){return $s(t,!1,sl,fl,Go)}function Yo(t){return $s(t,!0,rl,dl,qo)}function $s(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=gl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return Qt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function sr(t){return!!(t&&t.__v_isShallow)}function Xo(t){return zt(t)||Qt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Qo(t){return rr(t,"__v_skip",!0),t}const vn=t=>te(t)?Tr(t):t,Bs=t=>te(t)?Yo(t):t;class Zo{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ms(()=>e(this._value),()=>Gn(this,1),()=>this.dep&&Ho(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return(!e._cacheable||e.effect.dirty)&&mt(e._value,e._value=e.effect.run())&&Gn(e,2),ea(e),e.effect._dirtyLevel>=1&&Gn(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ml(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ie):(r=t.get,s=t.set),new Zo(r,s,i||!s,n)}function ea(t){dt&&Ct&&(t=K(t),$o(Ct,t.dep||(t.dep=Vo(()=>t.dep=void 0,t instanceof Zo?t:void 0))))}function Gn(t,e=2,n){t=K(t);const r=t.dep;r&&Bo(r,e)}function be(t){return!!(t&&t.__v_isRef===!0)}function _l(t){return ta(t,!1)}function vl(t){return ta(t,!0)}function ta(t,e){return be(t)?t:new yl(t,e)}class yl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:vn(e)}get value(){return ea(this),this._value}set value(e){const n=this.__v_isShallow||sr(e)||Qt(e);e=n?e:K(e),mt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vn(e),Gn(this,2))}}function Gt(t){return be(t)?t.value:t}const bl={get:(t,e,n)=>Gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function na(t){return zt(t)?t:new Proxy(t,bl)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ht(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Sr(i,e,n)}return s}function Pe(t,e,n,r){if(H(t)){const i=ht(t,e,n,r);return i&&ko(i)&&i.catch(o=>{Sr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Sr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ht(c,null,10,[t,o,a]);return}}El(t,n,s,r)}function El(t,e,n,r=!0){console.error(t)}let yn=!1,cs=!1;const ue=[];let Fe=0;const qt=[];let st=null,Tt=0;const ra=Promise.resolve();let Hs=null;function sa(t){const e=Hs||ra;return t?e.then(this?t.bind(this):t):e}function wl(t){let e=Fe+1,n=ue.length;for(;e<n;){const r=e+n>>>1,s=ue[r],i=bn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Vs(t){(!ue.length||!ue.includes(t,yn&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?ue.push(t):ue.splice(wl(t.id),0,t),ia())}function ia(){!yn&&!cs&&(cs=!0,Hs=ra.then(aa))}function Il(t){const e=ue.indexOf(t);e>Fe&&ue.splice(e,1)}function Tl(t){$(t)?qt.push(...t):(!st||!st.includes(t,t.allowRecurse?Tt+1:Tt))&&qt.push(t),ia()}function gi(t,e,n=yn?Fe+1:0){for(;n<ue.length;n++){const r=ue[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ue.splice(n,1),n--,r()}}}function oa(t){if(qt.length){const e=[...new Set(qt)].sort((n,r)=>bn(n)-bn(r));if(qt.length=0,st){st.push(...e);return}for(st=e,Tt=0;Tt<st.length;Tt++)st[Tt]();st=null,Tt=0}}const bn=t=>t.id==null?1/0:t.id,Sl=(t,e)=>{const n=bn(t)-bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function aa(t){cs=!1,yn=!0,ue.sort(Sl);try{for(Fe=0;Fe<ue.length;Fe++){const e=ue[Fe];e&&e.active!==!1&&ht(e,null,14)}}finally{Fe=0,ue.length=0,oa(),yn=!1,Hs=null,(ue.length||qt.length)&&aa()}}function Rl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||X;p&&(s=n.map(y=>re(y)?y.trim():y)),h&&(s=n.map(rs))}let a,c=r[a=Fr(e)]||r[a=Fr(Ve(e))];!c&&i&&(c=r[a=Fr(sn(e))]),c&&Pe(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(u,t,6,s)}}function ca(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const f=ca(u,e,!0);f&&(a=!0,ce(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ce(o,i),te(t)&&r.set(t,o),o)}function Rr(t,e){return!t||!yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,sn(e))||W(t,e))}let _e=null,Cr=null;function ir(t){const e=_e;return _e=t,Cr=t&&t.type.__scopeId||null,e}function dm(t){Cr=t}function hm(){Cr=null}function Cl(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ri(-1);const i=ir(e);let o;try{o=t(...s)}finally{ir(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:h,data:p,setupState:y,ctx:A,inheritAttrs:D}=t;let L,O;const M=ir(t);try{if(n.shapeFlag&4){const j=s||r,ne=j;L=Ue(f.call(ne,j,h,i,y,p,A)),O=c}else{const j=e;L=Ue(j.length>1?j(i,{attrs:c,slots:a,emit:u}):j(i,null)),O=e.props?c:Al(c)}}catch(j){gn.length=0,Sr(j,t,1),L=ve(Ot)}let U=L;if(O&&D!==!1){const j=Object.keys(O),{shapeFlag:ne}=U;j.length&&ne&7&&(o&&j.some(Ps)&&(O=Pl(O,o)),U=Zt(U,O))}return n.dirs&&(U=Zt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),L=U,ir(M),L}const Al=t=>{let e;for(const n in t)(n==="class"||n==="style"||yr(n))&&((e||(e={}))[n]=t[n]);return e},Pl=(t,e)=>{const n={};for(const r in t)(!Ps(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mi(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Rr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mi(r,o,u):!0:!!o;return!1}function mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function kl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const la="components";function Nl(t,e){return Ml(la,t,!0,e)||t}const Dl=Symbol.for("v-ndc");function Ml(t,e,n=!0,r=!1){const s=_e||fe;if(s){const i=s.type;if(t===la){const a=Au(i,!1);if(a&&(a===e||a===Ve(e)||a===wr(Ve(e))))return i}const o=_i(s[t]||i[t],e)||_i(s.appContext[t],e);return!o&&r?i:o}}function _i(t,e){return t&&(t[e]||t[Ve(e)]||t[wr(Ve(e))])}const Ll=t=>t.__isSuspense;function xl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Tl(t)}const Ul=Symbol.for("v-scx"),Fl=()=>$e(Ul),jn={};function qn(t,e,n){return ua(t,e,n)}function ua(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=X){if(e&&i){const F=e;e=(...se)=>{F(...se),ne()}}const c=fe,u=F=>r===!0?F:St(F,r===!1?1:void 0);let f,h=!1,p=!1;if(be(t)?(f=()=>t.value,h=sr(t)):zt(t)?(f=()=>u(t),h=!0):$(t)?(p=!0,h=t.some(F=>zt(F)||sr(F)),f=()=>t.map(F=>{if(be(F))return F.value;if(zt(F))return u(F);if(H(F))return ht(F,c,2)})):H(t)?e?f=()=>ht(t,c,2):f=()=>(y&&y(),Pe(t,c,3,[A])):f=Ie,e&&r){const F=f;f=()=>St(F())}let y,A=F=>{y=U.onStop=()=>{ht(F,c,4),y=U.onStop=void 0}},D;if(kr)if(A=Ie,e?n&&Pe(e,c,3,[f(),p?[]:void 0,A]):f(),s==="sync"){const F=Fl();D=F.__watcherHandles||(F.__watcherHandles=[])}else return Ie;let L=p?new Array(t.length).fill(jn):jn;const O=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(p?F.some((se,pe)=>mt(se,L[pe])):mt(F,L)))&&(y&&y(),Pe(e,c,3,[F,L===jn?void 0:p&&L[0]===jn?[]:L,A]),L=F)}else U.run()};O.allowRecurse=!!e;let M;s==="sync"?M=O:s==="post"?M=()=>me(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),M=()=>Vs(O));const U=new Ms(f,Ie,M),j=Yc(),ne=()=>{U.stop(),j&&Os(j.effects,U)};return e?n?O():L=U.run():s==="post"?me(U.run.bind(U),c&&c.suspense):U.run(),D&&D.push(ne),ne}function $l(t,e,n){const r=this.proxy,s=re(t)?t.includes(".")?fa(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Pn(this),a=ua(s,i.bind(r),n);return o(),a}function fa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(t,e,n=0,r){if(!te(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),be(t))St(t.value,e,n,r);else if($(t))for(let s=0;s<t.length;s++)St(t[s],e,n,r);else if(Oo(t)||Kt(t))t.forEach(s=>{St(s,e,n,r)});else if(Do(t))for(const s in t)St(t[s],e,n,r);return t}function pm(t,e){if(_e===null)return t;const n=Nr(_e)||_e.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=X]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&St(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Et(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mt(),Pe(c,n,8,[t.el,a,t,e]),Lt())}}/*! #__NO_SIDE_EFFECTS__ */function da(t,e){return H(t)?ce({name:t.name},e,{setup:t}):t}const Jn=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function Bl(t,e){pa(t,"a",e)}function Hl(t,e){pa(t,"da",e)}function pa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ar(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&Vl(r,e,n,s),s=s.parent}}function Vl(t,e,n,r){const s=Ar(e,t,r,!0);ga(()=>{Os(r[e],s)},n)}function Ar(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mt();const a=Pn(n),c=Pe(e,n,t,o);return a(),Lt(),c});return r?s.unshift(i):s.push(i),i}}const Ye=t=>(e,n=fe)=>(!kr||t==="sp")&&Ar(t,(...r)=>e(...r),n),jl=Ye("bm"),Wl=Ye("m"),Kl=Ye("bu"),zl=Ye("u"),Gl=Ye("bum"),ga=Ye("um"),ql=Ye("sp"),Jl=Ye("rtg"),Yl=Ye("rtc");function Xl(t,e=fe){Ar("ec",t,e)}function gm(t,e,n,r){let s;const i=n&&n[r];if($(t)||re(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ls=t=>t?Oa(t)?Nr(t)||t.proxy:ls(t.parent):null,pn=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ls(t.parent),$root:t=>ls(t.root),$emit:t=>t.emit,$options:t=>js(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vs(t.update)}),$nextTick:t=>t.n||(t.n=sa.bind(t.proxy)),$watch:t=>$l.bind(t)}),Hr=(t,e)=>t!==X&&!t.__isScriptSetup&&W(t,e),Ql={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Hr(r,e))return o[e]=1,r[e];if(s!==X&&W(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&W(u,e))return o[e]=3,i[e];if(n!==X&&W(n,e))return o[e]=4,n[e];us&&(o[e]=0)}}const f=pn[e];let h,p;if(f)return e==="$attrs"&&ye(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==X&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Hr(s,e)?(s[e]=n,!0):r!==X&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&W(t,o)||Hr(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(pn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let us=!0;function Zl(t){const e=js(t),n=t.proxy,r=t.ctx;us=!1,e.beforeCreate&&yi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:A,activated:D,deactivated:L,beforeDestroy:O,beforeUnmount:M,destroyed:U,unmounted:j,render:ne,renderTracked:F,renderTriggered:se,errorCaptured:pe,serverPrefetch:Te,expose:we,inheritAttrs:Qe,components:bt,directives:Ne,filters:an}=e;if(u&&eu(u,r,null),o)for(const q in o){const z=o[q];H(z)&&(r[q]=z.bind(n))}if(s){const q=s.call(n,n);te(q)&&(t.data=Tr(q))}if(us=!0,i)for(const q in i){const z=i[q],je=H(z)?z.bind(n,n):H(z.get)?z.get.bind(n,n):Ie,Ze=!H(z)&&H(z.set)?z.set.bind(n):Ie,De=Ce({get:je,set:Ze});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>De.value,set:ge=>De.value=ge})}if(a)for(const q in a)ma(a[q],r,n,q);if(c){const q=H(c)?c.call(n):c;Reflect.ownKeys(q).forEach(z=>{Yn(z,q[z])})}f&&yi(f,t,"c");function ie(q,z){$(z)?z.forEach(je=>q(je.bind(n))):z&&q(z.bind(n))}if(ie(jl,h),ie(Wl,p),ie(Kl,y),ie(zl,A),ie(Bl,D),ie(Hl,L),ie(Xl,pe),ie(Yl,F),ie(Jl,se),ie(Gl,M),ie(ga,j),ie(ql,Te),$(we))if(we.length){const q=t.exposed||(t.exposed={});we.forEach(z=>{Object.defineProperty(q,z,{get:()=>n[z],set:je=>n[z]=je})})}else t.exposed||(t.exposed={});ne&&t.render===Ie&&(t.render=ne),Qe!=null&&(t.inheritAttrs=Qe),bt&&(t.components=bt),Ne&&(t.directives=Ne)}function eu(t,e,n=Ie){$(t)&&(t=fs(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yi(t,e,n){Pe($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ma(t,e,n,r){const s=r.includes(".")?fa(n,r):()=>n[r];if(re(t)){const i=e[t];H(i)&&qn(s,i)}else if(H(t))qn(s,t.bind(n));else if(te(t))if($(t))t.forEach(i=>ma(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&qn(s,i,t)}}function js(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>or(c,u,o,!0)),or(c,e,o)),te(e)&&i.set(e,c),c}function or(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&or(t,i,n,!0),s&&s.forEach(o=>or(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tu={data:bi,props:Ei,emits:Ei,methods:fn,computed:fn,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:fn,directives:fn,watch:ru,provide:bi,inject:nu};function bi(t,e){return e?t?function(){return ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function nu(t,e){return fn(fs(t),fs(e))}function fs(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function fn(t,e){return t?ce(Object.create(null),t,e):e}function Ei(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ce(Object.create(null),vi(t),vi(e??{})):e}function ru(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function _a(){return{app:null,config:{isNativeTag:Uc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function iu(t,e){return function(r,s=null){H(r)||(r=ce({},r)),s!=null&&!te(s)&&(s=null);const i=_a(),o=new WeakSet;let a=!1;const c=i.app={_uid:su++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ou,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...f)):H(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,h){if(!a){const p=ve(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Nr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){ar=c;try{return u()}finally{ar=null}}};return c}}let ar=null;function Yn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=fe||_e;if(r||ar){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ar._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function ou(t,e,n,r=!1){const s={},i={};rr(i,Or,1),t.propsDefaults=Object.create(null),va(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function au(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Rr(t.emitsOptions,p))continue;const y=e[p];if(c)if(W(i,p))y!==i[p]&&(i[p]=y,u=!0);else{const A=Ve(p);s[A]=ds(c,a,A,y,t,!1)}else y!==i[p]&&(i[p]=y,u=!0)}}}else{va(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=sn(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=ds(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h))&&(delete i[h],u=!0)}u&&qe(t,"set","$attrs")}function va(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Kn(c))continue;const u=e[c];let f;s&&W(s,f=Ve(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Rr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=K(n),u=a||X;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ds(s,c,h,u[h],t,!W(u,h))}}return o}function ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Pn(s);r=u[n]=c.call(null,e),f()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function ya(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[p,y]=ya(h,e,!0);ce(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return te(t)&&r.set(t,Wt),Wt;if($(i))for(let f=0;f<i.length;f++){const h=Ve(i[f]);wi(h)&&(o[h]=X)}else if(i)for(const f in i){const h=Ve(f);if(wi(h)){const p=i[f],y=o[h]=$(p)||H(p)?{type:p}:ce({},p);if(y){const A=Si(Boolean,y.type),D=Si(String,y.type);y[0]=A>-1,y[1]=D<0||A<D,(A>-1||W(y,"default"))&&a.push(h)}}}const u=[o,a];return te(t)&&r.set(t,u),u}function wi(t){return t[0]!=="$"}function Ii(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ti(t,e){return Ii(t)===Ii(e)}function Si(t,e){return $(e)?e.findIndex(n=>Ti(n,t)):H(e)&&Ti(e,t)?0:-1}const ba=t=>t[0]==="_"||t==="$stable",Ws=t=>$(t)?t.map(Ue):[Ue(t)],cu=(t,e,n)=>{if(e._n)return e;const r=Cl((...s)=>Ws(e(...s)),n);return r._c=!1,r},Ea=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ba(s))continue;const i=t[s];if(H(i))e[s]=cu(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},wa=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},lu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),rr(e,"_",n)):Ea(e,t.slots={})}else t.slots={},e&&wa(t,e);rr(t.slots,Or,1)},uu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ea(e,s)),o=e}else e&&(wa(t,e),o={default:1});if(i)for(const a in s)!ba(a)&&o[a]==null&&delete s[a]};function hs(t,e,n,r,s=!1){if($(t)){t.forEach((p,y)=>hs(p,e&&($(e)?e[y]:e),n,r,s));return}if(Jn(r)&&!s)return;const i=r.shapeFlag&4?Nr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===X?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(re(u)?(f[u]=null,W(h,u)&&(h[u]=null)):be(u)&&(u.value=null)),H(c))ht(c,a,12,[o,f]);else{const p=re(c),y=be(c),A=t.f;if(p||y){const D=()=>{if(A){const L=p?W(h,c)?h[c]:f[c]:c.value;s?$(L)&&Os(L,i):$(L)?L.includes(i)||L.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):y&&(c.value=o,t.k&&(f[t.k]=o))};s||A?D():(D.id=-1,me(D,n))}}}const me=xl;function fu(t){return du(t)}function du(t,e){const n=Mo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Ie,insertStaticContent:A}=t,D=(l,d,g,v=null,m=null,w=null,S=void 0,E=null,I=!!d.dynamicChildren)=>{if(l===d)return;l&&!ln(l,d)&&(v=_(l),ge(l,m,w,!0),l=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:C,shapeFlag:N}=d;switch(b){case Pr:L(l,d,g,v);break;case Ot:O(l,d,g,v);break;case Xn:l==null&&M(d,g,v,S);break;case Ke:bt(l,d,g,v,m,w,S,E,I);break;default:N&1?ne(l,d,g,v,m,w,S,E,I):N&6?Ne(l,d,g,v,m,w,S,E,I):(N&64||N&128)&&b.process(l,d,g,v,m,w,S,E,I,P)}C!=null&&m&&hs(C,l&&l.ref,w,d||l,!d)},L=(l,d,g,v)=>{if(l==null)r(d.el=a(d.children),g,v);else{const m=d.el=l.el;d.children!==l.children&&u(m,d.children)}},O=(l,d,g,v)=>{l==null?r(d.el=c(d.children||""),g,v):d.el=l.el},M=(l,d,g,v)=>{[l.el,l.anchor]=A(l.children,d,g,v,l.el,l.anchor)},U=({el:l,anchor:d},g,v)=>{let m;for(;l&&l!==d;)m=p(l),r(l,g,v),l=m;r(d,g,v)},j=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),s(l),l=g;s(d)},ne=(l,d,g,v,m,w,S,E,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),l==null?F(d,g,v,m,w,S,E,I):Te(l,d,m,w,S,E,I)},F=(l,d,g,v,m,w,S,E)=>{let I,b;const{props:C,shapeFlag:N,transition:k,dirs:B}=l;if(I=l.el=o(l.type,w,C&&C.is,C),N&8?f(I,l.children):N&16&&pe(l.children,I,null,v,m,Vr(l,w),S,E),B&&Et(l,null,v,"created"),se(I,l,l.scopeId,S,v),C){for(const J in C)J!=="value"&&!Kn(J)&&i(I,J,null,C[J],w,l.children,v,m,le);"value"in C&&i(I,"value",null,C.value,w),(b=C.onVnodeBeforeMount)&&Le(b,v,l)}B&&Et(l,null,v,"beforeMount");const V=hu(m,k);V&&k.beforeEnter(I),r(I,d,g),((b=C&&C.onVnodeMounted)||V||B)&&me(()=>{b&&Le(b,v,l),V&&k.enter(I),B&&Et(l,null,v,"mounted")},m)},se=(l,d,g,v,m)=>{if(g&&y(l,g),v)for(let w=0;w<v.length;w++)y(l,v[w]);if(m){let w=m.subTree;if(d===w){const S=m.vnode;se(l,S,S.scopeId,S.slotScopeIds,m.parent)}}},pe=(l,d,g,v,m,w,S,E,I=0)=>{for(let b=I;b<l.length;b++){const C=l[b]=E?it(l[b]):Ue(l[b]);D(null,C,d,g,v,m,w,S,E)}},Te=(l,d,g,v,m,w,S)=>{const E=d.el=l.el;let{patchFlag:I,dynamicChildren:b,dirs:C}=d;I|=l.patchFlag&16;const N=l.props||X,k=d.props||X;let B;if(g&&wt(g,!1),(B=k.onVnodeBeforeUpdate)&&Le(B,g,d,l),C&&Et(d,l,g,"beforeUpdate"),g&&wt(g,!0),b?we(l.dynamicChildren,b,E,g,v,Vr(d,m),w):S||z(l,d,E,null,g,v,Vr(d,m),w,!1),I>0){if(I&16)Qe(E,d,N,k,g,v,m);else if(I&2&&N.class!==k.class&&i(E,"class",null,k.class,m),I&4&&i(E,"style",N.style,k.style,m),I&8){const V=d.dynamicProps;for(let J=0;J<V.length;J++){const Z=V[J],oe=N[Z],Se=k[Z];(Se!==oe||Z==="value")&&i(E,Z,oe,Se,m,l.children,g,v,le)}}I&1&&l.children!==d.children&&f(E,d.children)}else!S&&b==null&&Qe(E,d,N,k,g,v,m);((B=k.onVnodeUpdated)||C)&&me(()=>{B&&Le(B,g,d,l),C&&Et(d,l,g,"updated")},v)},we=(l,d,g,v,m,w,S)=>{for(let E=0;E<d.length;E++){const I=l[E],b=d[E],C=I.el&&(I.type===Ke||!ln(I,b)||I.shapeFlag&70)?h(I.el):g;D(I,b,C,null,v,m,w,S,!0)}},Qe=(l,d,g,v,m,w,S)=>{if(g!==v){if(g!==X)for(const E in g)!Kn(E)&&!(E in v)&&i(l,E,g[E],null,S,d.children,m,w,le);for(const E in v){if(Kn(E))continue;const I=v[E],b=g[E];I!==b&&E!=="value"&&i(l,E,b,I,S,d.children,m,w,le)}"value"in v&&i(l,"value",g.value,v.value,S)}},bt=(l,d,g,v,m,w,S,E,I)=>{const b=d.el=l?l.el:a(""),C=d.anchor=l?l.anchor:a("");let{patchFlag:N,dynamicChildren:k,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),l==null?(r(b,g,v),r(C,g,v),pe(d.children||[],g,C,m,w,S,E,I)):N>0&&N&64&&k&&l.dynamicChildren?(we(l.dynamicChildren,k,g,m,w,S,E),(d.key!=null||m&&d===m.subTree)&&Ia(l,d,!0)):z(l,d,g,C,m,w,S,E,I)},Ne=(l,d,g,v,m,w,S,E,I)=>{d.slotScopeIds=E,l==null?d.shapeFlag&512?m.ctx.activate(d,g,v,S,I):an(d,g,v,m,w,S,I):Ut(l,d,I)},an=(l,d,g,v,m,w,S)=>{const E=l.component=Iu(l,v,m);if(ha(l)&&(E.ctx.renderer=P),Tu(E),E.asyncDep){if(m&&m.registerDep(E,ie),!l.el){const I=E.subTree=ve(Ot);O(null,I,d,g)}}else ie(E,l,d,g,m,w,S)},Ut=(l,d,g)=>{const v=d.component=l.component;if(Ol(l,d,g))if(v.asyncDep&&!v.asyncResolved){q(v,d,g);return}else v.next=d,Il(v.update),v.effect.dirty=!0,v.update();else d.el=l.el,v.vnode=d},ie=(l,d,g,v,m,w,S)=>{const E=()=>{if(l.isMounted){let{next:C,bu:N,u:k,parent:B,vnode:V}=l;{const Bt=Ta(l);if(Bt){C&&(C.el=V.el,q(l,C,S)),Bt.asyncDep.then(()=>{l.isUnmounted||E()});return}}let J=C,Z;wt(l,!1),C?(C.el=V.el,q(l,C,S)):C=V,N&&zn(N),(Z=C.props&&C.props.onVnodeBeforeUpdate)&&Le(Z,B,C,V),wt(l,!0);const oe=Br(l),Se=l.subTree;l.subTree=oe,D(Se,oe,h(Se.el),_(Se),l,m,w),C.el=oe.el,J===null&&kl(l,oe.el),k&&me(k,m),(Z=C.props&&C.props.onVnodeUpdated)&&me(()=>Le(Z,B,C,V),m)}else{let C;const{el:N,props:k}=d,{bm:B,m:V,parent:J}=l,Z=Jn(d);if(wt(l,!1),B&&zn(B),!Z&&(C=k&&k.onVnodeBeforeMount)&&Le(C,J,d),wt(l,!0),N&&Q){const oe=()=>{l.subTree=Br(l),Q(N,l.subTree,l,m,null)};Z?d.type.__asyncLoader().then(()=>!l.isUnmounted&&oe()):oe()}else{const oe=l.subTree=Br(l);D(null,oe,g,v,l,m,w),d.el=oe.el}if(V&&me(V,m),!Z&&(C=k&&k.onVnodeMounted)){const oe=d;me(()=>Le(C,J,oe),m)}(d.shapeFlag&256||J&&Jn(J.vnode)&&J.vnode.shapeFlag&256)&&l.a&&me(l.a,m),l.isMounted=!0,d=g=v=null}},I=l.effect=new Ms(E,Ie,()=>Vs(b),l.scope),b=l.update=()=>{I.dirty&&I.run()};b.id=l.uid,wt(l,!0),b()},q=(l,d,g)=>{d.component=l;const v=l.vnode.props;l.vnode=d,l.next=null,au(l,d.props,v,g),uu(l,d.children,g),Mt(),gi(l),Lt()},z=(l,d,g,v,m,w,S,E,I=!1)=>{const b=l&&l.children,C=l?l.shapeFlag:0,N=d.children,{patchFlag:k,shapeFlag:B}=d;if(k>0){if(k&128){Ze(b,N,g,v,m,w,S,E,I);return}else if(k&256){je(b,N,g,v,m,w,S,E,I);return}}B&8?(C&16&&le(b,m,w),N!==b&&f(g,N)):C&16?B&16?Ze(b,N,g,v,m,w,S,E,I):le(b,m,w,!0):(C&8&&f(g,""),B&16&&pe(N,g,v,m,w,S,E,I))},je=(l,d,g,v,m,w,S,E,I)=>{l=l||Wt,d=d||Wt;const b=l.length,C=d.length,N=Math.min(b,C);let k;for(k=0;k<N;k++){const B=d[k]=I?it(d[k]):Ue(d[k]);D(l[k],B,g,null,m,w,S,E,I)}b>C?le(l,m,w,!0,!1,N):pe(d,g,v,m,w,S,E,I,N)},Ze=(l,d,g,v,m,w,S,E,I)=>{let b=0;const C=d.length;let N=l.length-1,k=C-1;for(;b<=N&&b<=k;){const B=l[b],V=d[b]=I?it(d[b]):Ue(d[b]);if(ln(B,V))D(B,V,g,null,m,w,S,E,I);else break;b++}for(;b<=N&&b<=k;){const B=l[N],V=d[k]=I?it(d[k]):Ue(d[k]);if(ln(B,V))D(B,V,g,null,m,w,S,E,I);else break;N--,k--}if(b>N){if(b<=k){const B=k+1,V=B<C?d[B].el:v;for(;b<=k;)D(null,d[b]=I?it(d[b]):Ue(d[b]),g,V,m,w,S,E,I),b++}}else if(b>k)for(;b<=N;)ge(l[b],m,w,!0),b++;else{const B=b,V=b,J=new Map;for(b=V;b<=k;b++){const Ee=d[b]=I?it(d[b]):Ue(d[b]);Ee.key!=null&&J.set(Ee.key,b)}let Z,oe=0;const Se=k-V+1;let Bt=!1,si=0;const cn=new Array(Se);for(b=0;b<Se;b++)cn[b]=0;for(b=B;b<=N;b++){const Ee=l[b];if(oe>=Se){ge(Ee,m,w,!0);continue}let Me;if(Ee.key!=null)Me=J.get(Ee.key);else for(Z=V;Z<=k;Z++)if(cn[Z-V]===0&&ln(Ee,d[Z])){Me=Z;break}Me===void 0?ge(Ee,m,w,!0):(cn[Me-V]=b+1,Me>=si?si=Me:Bt=!0,D(Ee,d[Me],g,null,m,w,S,E,I),oe++)}const ii=Bt?pu(cn):Wt;for(Z=ii.length-1,b=Se-1;b>=0;b--){const Ee=V+b,Me=d[Ee],oi=Ee+1<C?d[Ee+1].el:v;cn[b]===0?D(null,Me,g,oi,m,w,S,E,I):Bt&&(Z<0||b!==ii[Z]?De(Me,g,oi,2):Z--)}}},De=(l,d,g,v,m=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:b}=l;if(b&6){De(l.component.subTree,d,g,v);return}if(b&128){l.suspense.move(d,g,v);return}if(b&64){S.move(l,d,g,P);return}if(S===Ke){r(w,d,g);for(let N=0;N<I.length;N++)De(I[N],d,g,v);r(l.anchor,d,g);return}if(S===Xn){U(l,d,g);return}if(v!==2&&b&1&&E)if(v===0)E.beforeEnter(w),r(w,d,g),me(()=>E.enter(w),m);else{const{leave:N,delayLeave:k,afterLeave:B}=E,V=()=>r(w,d,g),J=()=>{N(w,()=>{V(),B&&B()})};k?k(w,V,J):J()}else r(w,d,g)},ge=(l,d,g,v=!1,m=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:b,shapeFlag:C,patchFlag:N,dirs:k}=l;if(E!=null&&hs(E,null,g,l,!0),C&256){d.ctx.deactivate(l);return}const B=C&1&&k,V=!Jn(l);let J;if(V&&(J=S&&S.onVnodeBeforeUnmount)&&Le(J,d,l),C&6)Un(l.component,g,v);else{if(C&128){l.suspense.unmount(g,v);return}B&&Et(l,null,d,"beforeUnmount"),C&64?l.type.remove(l,d,g,m,P,v):b&&(w!==Ke||N>0&&N&64)?le(b,d,g,!1,!0):(w===Ke&&N&384||!m&&C&16)&&le(I,d,g),v&&Ft(l)}(V&&(J=S&&S.onVnodeUnmounted)||B)&&me(()=>{J&&Le(J,d,l),B&&Et(l,null,d,"unmounted")},g)},Ft=l=>{const{type:d,el:g,anchor:v,transition:m}=l;if(d===Ke){$t(g,v);return}if(d===Xn){j(l);return}const w=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:E}=m,I=()=>S(g,w);E?E(l.el,w,I):I()}else w()},$t=(l,d)=>{let g;for(;l!==d;)g=p(l),s(l),l=g;s(d)},Un=(l,d,g)=>{const{bum:v,scope:m,update:w,subTree:S,um:E}=l;v&&zn(v),m.stop(),w&&(w.active=!1,ge(S,l,d,g)),E&&me(E,d),me(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},le=(l,d,g,v=!1,m=!1,w=0)=>{for(let S=w;S<l.length;S++)ge(l[S],d,g,v,m)},_=l=>l.shapeFlag&6?_(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el);let R=!1;const T=(l,d,g)=>{l==null?d._vnode&&ge(d._vnode,null,null,!0):D(d._vnode||null,l,d,null,null,null,g),R||(R=!0,gi(),oa(),R=!1),d._vnode=l},P={p:D,um:ge,m:De,r:Ft,mt:an,mc:pe,pc:z,pbc:we,n:_,o:t};let G,Q;return e&&([G,Q]=e(P)),{render:T,hydrate:G,createApp:iu(T,G)}}function Vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ia(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||Ia(o,a)),a.type===Pr&&(a.el=o.el)}}function pu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ta(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ta(e)}const gu=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),gn=[];let Ae=null;function Sa(t=!1){gn.push(Ae=t?null:[])}function mu(){gn.pop(),Ae=gn[gn.length-1]||null}let En=1;function Ri(t){En+=t}function Ra(t){return t.dynamicChildren=En>0?Ae||Wt:null,mu(),En>0&&Ae&&Ae.push(t),t}function mm(t,e,n,r,s,i){return Ra(Pa(t,e,n,r,s,i,!0))}function Ca(t,e,n,r,s){return Ra(ve(t,e,n,r,s,!0))}function ps(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const Or="__vInternal",Aa=({key:t})=>t??null,Qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||be(t)||H(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function Pa(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Aa(e),ref:e&&Qn(e),scopeId:Cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return a?(Ks(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),En>0&&!o&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const ve=_u;function _u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dl)&&(t=Ot),ps(t)){const a=Zt(t,e,!0);return n&&Ks(a,n),En>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag|=-2,a}if(Pu(t)&&(t=t.__vccOpts),e){e=vu(e);let{class:a,style:c}=e;a&&!re(a)&&(e.class=Ds(a)),te(c)&&(Xo(c)&&!$(c)&&(c=ce({},c)),e.style=Ns(c))}const o=re(t)?1:Ll(t)?128:gu(t)?64:te(t)?4:H(t)?2:0;return Pa(t,e,n,r,s,o,i,!0)}function vu(t){return t?Xo(t)||Or in t?ce({},t):t:null}function Zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Aa(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Qn(e)):[s,Qn(e)]:Qn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yu(t=" ",e=0){return ve(Pr,null,t,e)}function _m(t,e){const n=ve(Xn,null,t);return n.staticCount=e,n}function vm(t="",e=!1){return e?(Sa(),Ca(Ot,null,t)):ve(Ot,null,t)}function Ue(t){return t==null||typeof t=="boolean"?ve(Ot):$(t)?ve(Ke,null,t.slice()):typeof t=="object"?it(t):ve(Pr,null,String(t))}function it(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Or in e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[yu(e)]):n=8);t.children=e,t.shapeFlag|=n}function bu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ds([e.class,r.class]));else if(s==="style")e.style=Ns([e.style,r.style]);else if(yr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){Pe(t,e,7,[n,r])}const Eu=_a();let wu=0;function Iu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Eu,i={uid:wu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ya(r,s),emitsOptions:ca(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,cr,gs;{const t=Mo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};cr=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),gs=e("__VUE_SSR_SETTERS__",n=>kr=n)}const Pn=t=>{const e=fe;return cr(t),t.scope.on(),()=>{t.scope.off(),cr(e)}},Ci=()=>{fe&&fe.scope.off(),cr(null)};function Oa(t){return t.vnode.shapeFlag&4}let kr=!1;function Tu(t,e=!1){e&&gs(e);const{props:n,children:r}=t.vnode,s=Oa(t);ou(t,n,s,e),lu(t,r);const i=s?Su(t,e):void 0;return e&&gs(!1),i}function Su(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qo(new Proxy(t.ctx,Ql));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cu(t):null,i=Pn(t);Mt();const o=ht(r,t,0,[t.props,s]);if(Lt(),i(),ko(o)){if(o.then(Ci,Ci),e)return o.then(a=>{Ai(t,a,e)}).catch(a=>{Sr(a,t,0)});t.asyncDep=o}else Ai(t,o,e)}else ka(t,e)}function Ai(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=na(e)),ka(t,n)}let Pi;function ka(t,e,n){const r=t.type;if(!t.render){if(!e&&Pi&&!r.render){const s=r.template||js(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ce(ce({isCustomElement:i,delimiters:a},o),c);r.render=Pi(s,u)}}t.render=r.render||Ie}{const s=Pn(t);Mt();try{Zl(t)}finally{Lt(),s()}}}function Ru(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}}))}function Cu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ru(t)},slots:t.slots,emit:t.emit,expose:e}}function Nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(na(Qo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pn)return pn[n](t)},has(e,n){return n in e||n in pn}}))}function Au(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Pu(t){return H(t)&&"__vccOpts"in t}const Ce=(t,e)=>ml(t,e,kr);function Na(t,e,n){const r=arguments.length;return r===2?te(e)&&!$(e)?ps(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ps(n)&&(n=[n]),ve(t,e,n))}const Ou="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ku="http://www.w3.org/2000/svg",Nu="http://www.w3.org/1998/Math/MathML",ot=typeof document<"u"?document:null,Oi=ot&&ot.createElement("template"),Du={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ot.createElementNS(ku,t):e==="mathml"?ot.createElementNS(Nu,t):ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ot.createTextNode(t),createComment:t=>ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Oi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mu=Symbol("_vtc");function Lu(t,e,n){const r=t[Mu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xu=Symbol("_vod"),Uu=Symbol("");function Fu(t,e,n){const r=t.style,s=r.display,i=re(n);if(n&&!i){if(e&&!re(e))for(const o in e)n[o]==null&&ms(r,o,"");for(const o in n)ms(r,o,n[o])}else if(i){if(e!==n){const o=r[Uu];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");xu in t&&(r.display=s)}const ki=/\s*!important$/;function ms(t,e,n){if($(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$u(t,e);ki.test(n)?t.setProperty(sn(r),n.replace(ki,""),"important"):t[r]=n}}const Ni=["Webkit","Moz","ms"],jr={};function $u(t,e){const n=jr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return jr[e]=r;r=wr(r);for(let s=0;s<Ni.length;s++){const i=Ni[s]+r;if(i in t)return jr[e]=i}return e}const Di="http://www.w3.org/1999/xlink";function Bu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Di,e.slice(6,e.length)):t.setAttributeNS(Di,e,n);else{const i=Gc(e);n==null||i&&!Lo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,f=n??"";u!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Lo(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ht(t,e,n,r){t.addEventListener(e,n,r)}function Vu(t,e,n,r){t.removeEventListener(e,n,r)}const Mi=Symbol("_vei");function ju(t,e,n,r,s=null){const i=t[Mi]||(t[Mi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Wu(e);if(r){const u=i[e]=Gu(r,s);Ht(t,a,u,c)}else o&&(Vu(t,a,o,c),i[e]=void 0)}}const Li=/(?:Once|Passive|Capture)$/;function Wu(t){let e;if(Li.test(t)){e={};let r;for(;r=t.match(Li);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let Wr=0;const Ku=Promise.resolve(),zu=()=>Wr||(Ku.then(()=>Wr=0),Wr=Date.now());function Gu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(qu(r,n.value),e,5,[r])};return n.value=t,n.attached=zu(),n}function qu(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ju=(t,e,n,r,s,i,o,a,c)=>{const u=s==="svg";e==="class"?Lu(t,r,u):e==="style"?Fu(t,n,r):yr(e)?Ps(e)||ju(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yu(t,e,r,u))?Hu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bu(t,e,r,u))};function Yu(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xi(e)&&re(n)?!1:e in t}const Ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>zn(e,n):e};function Xu(t){t.target.composing=!0}function Fi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kr=Symbol("_assign"),ym={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kr]=Ui(s);const i=r||s.props&&s.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=rs(a)),t[Kr](a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",Xu),Ht(t,"compositionend",Fi),Ht(t,"change",Fi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Kr]=Ui(i),t.composing)return;const o=s||t.type==="number"?rs(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Qu=["ctrl","shift","alt","meta"],Zu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qu.some(n=>t[`${n}Key`]&&!e.includes(n))},bm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Zu[e[o]];if(a&&a(s,e))return}return t(s,...i)})},ef=ce({patchProp:Ju},Du);let $i;function tf(){return $i||($i=fu(ef))}const nf=(...t)=>{const e=tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,rf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sf(t){return re(t)?document.querySelector(t):t}const of=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},af={};function cf(t,e){const n=Nl("router-view");return Sa(),Ca(n)}const lf=of(af,[["render",cf]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vt=typeof document<"u";function uf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function zr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const mn=()=>{},Oe=Array.isArray,Da=/#/g,ff=/&/g,df=/\//g,hf=/=/g,pf=/\?/g,Ma=/\+/g,gf=/%5B/g,mf=/%5D/g,La=/%5E/g,_f=/%60/g,xa=/%7B/g,vf=/%7C/g,Ua=/%7D/g,yf=/%20/g;function zs(t){return encodeURI(""+t).replace(vf,"|").replace(gf,"[").replace(mf,"]")}function bf(t){return zs(t).replace(xa,"{").replace(Ua,"}").replace(La,"^")}function _s(t){return zs(t).replace(Ma,"%2B").replace(yf,"+").replace(Da,"%23").replace(ff,"%26").replace(_f,"`").replace(xa,"{").replace(Ua,"}").replace(La,"^")}function Ef(t){return _s(t).replace(hf,"%3D")}function wf(t){return zs(t).replace(Da,"%23").replace(pf,"%3F")}function If(t){return t==null?"":wf(t).replace(df,"%2F")}function wn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Tf=/\/$/,Sf=t=>t.replace(Tf,"");function Gr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Pf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:wn(o)}}function Rf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&en(e.matched[r],n.matched[s])&&Fa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Af(t[n],e[n]))return!1;return!0}function Af(t,e){return Oe(t)?Bi(t,e):Oe(e)?Bi(e,t):t===e}function Bi(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var In;(function(t){t.pop="pop",t.push="push"})(In||(In={}));var lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lr||(lr={}));const qr="";function Of(t){if(!t)if(Vt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Sf(t)}const kf=/^[^#]+#/;function Nf(t,e){return t.replace(kf,"#")+e}function Df(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mf=()=>({left:window.scrollX,top:window.scrollY});function Lf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Df(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hi(t,e){return(history.state?history.state.position-e:-1)+t}const vs=new Map;function xf(t,e){vs.set(t,e)}function Uf(t){const e=vs.get(t);return vs.delete(t),e}function Ff(t=""){let e=[],n=[qr],r=0;t=Of(t);function s(a){r++,r!==n.length&&n.splice(r),n.push(a)}function i(a,c,{direction:u,delta:f}){const h={direction:u,delta:f,type:In.pop};for(const p of e)p(a,c,h)}const o={location:qr,state:{},base:t,createHref:Nf.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[qr],r=0},go(a,c=!0){const u=this.location,f=a<0?lr.back:lr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,u,{direction:f,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function $f(t){return typeof t=="string"||t&&typeof t=="object"}function $a(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ba=Symbol("");var Vi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vi||(Vi={}));function tn(t,e){return ee(new Error,{type:t,[Ba]:!0},e)}function We(t,e){return t instanceof Error&&Ba in t&&(e==null||!!(t.type&e))}const ji="[^/]+?",Bf={sensitive:!1,strict:!1,start:!0,end:!0},Hf=/[.+*?^${}()[\]/\\]/g;function Vf(t,e){const n=ee({},Bf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Hf,"\\$&"),y+=40;else if(p.type===1){const{value:A,repeatable:D,optional:L,regexp:O}=p;i.push({name:A,repeatable:D,optional:L});const M=O||ji;if(M!==ji){y+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${A}" (${M}): `+j.message)}}let U=D?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(U=L&&u.length<2?`(?:/${U})`:"/"+U),L&&(U+="?"),s+=U,y+=20,L&&(y+=-8),D&&(y+=-20),M===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",A=i[p-1];h[A.name]=y&&A.repeatable?y.split("/"):y}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:A,repeatable:D,optional:L}=y,O=A in u?u[A]:"";if(Oe(O)&&!D)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const M=Oe(O)?O.join("/"):O;if(!M)if(L)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wi(r))return 1;if(Wi(s))return-1}return s.length-r.length}function Wi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kf={type:0,value:""},zf=/[a-zA-Z0-9_]/;function Gf(t){if(!t)return[[]];if(t==="/")return[[Kf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:zf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function qf(t,e,n){const r=Vf(Gf(t.path),n),s=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jf(t,e){const n=[],r=new Map;e=Gi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,A=Yf(f);A.aliasOf=p&&p.record;const D=Gi(e,f),L=[A];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of U)L.push(ee({},A,{components:p?p.record.components:A.components,path:j,aliasOf:p?p.record:A}))}let O,M;for(const U of L){const{path:j}=U;if(h&&j[0]!=="/"){const ne=h.record.path,F=ne[ne.length-1]==="/"?"":"/";U.path=h.record.path+(j&&F+j)}if(O=qf(U,h,D),p?p.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),y&&f.name&&!zi(O)&&o(f.name)),A.children){const ne=A.children;for(let F=0;F<ne.length;F++)i(ne[F],O,p&&p.children[F])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:mn}function o(f){if($a(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Wf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ha(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!zi(f)&&r.set(f.record.name,f)}function u(f,h){let p,y={},A,D;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw tn(1,{location:f});D=p.record.name,y=ee(Ki(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Ki(f.params,p.keys.map(M=>M.name))),A=p.stringify(y)}else if(f.path!=null)A=f.path,p=n.find(M=>M.re.test(A)),p&&(y=p.parse(A),D=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw tn(1,{location:f,currentLocation:h});D=p.record.name,y=ee({},h.params,f.params),A=p.stringify(y)}const L=[];let O=p;for(;O;)L.unshift(O.record),O=O.parent;return{name:D,path:A,params:y,matched:L,meta:Qf(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qf(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Gi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ha(t,e){return e.children.some(n=>n===t||Ha(t,n))}function Zf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ma," "),o=i.indexOf("="),a=wn(o<0?i:i.slice(0,o)),c=o<0?null:wn(i.slice(o+1));if(a in e){let u=e[a];Oe(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function qi(t){let e="";for(let n in t){const r=t[n];if(n=Ef(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&_s(i)):[r&&_s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ed(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const td=Symbol(""),Ji=Symbol(""),Dr=Symbol(""),Va=Symbol(""),ys=Symbol("");function un(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function at(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(tn(4,{from:n,to:e})):p instanceof Error?c(p):$f(p)?c(tn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>c(p))})}function Jr(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(nd(c)){const f=(c.__vccOpts||c)[e];f&&i.push(at(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=uf(f)?f.default:f;o.components[a]=h;const y=(h.__vccOpts||h)[e];return y&&at(y,n,r,o,a,s)()}))}}return i}function nd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yi(t){const e=$e(Dr),n=$e(Va),r=Ce(()=>e.resolve(Gt(t.to))),s=Ce(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(en.bind(null,f));if(p>-1)return p;const y=Xi(c[u-2]);return u>1&&Xi(f)===y&&h[h.length-1].path!==y?h.findIndex(en.bind(null,c[u-2])):p}),i=Ce(()=>s.value>-1&&od(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&Fa(n.params,r.value.params));function a(c={}){return id(c)?e[Gt(t.replace)?"replace":"push"](Gt(t.to)).catch(mn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const rd=da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yi,setup(t,{slots:e}){const n=Tr(Yi(t)),{options:r}=$e(Dr),s=Ce(()=>({[Qi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sd=rd;function id(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function od(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qi=(t,e,n)=>t??e??n,ad=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(ys),s=Ce(()=>t.route||r.value),i=$e(Ji,0),o=Ce(()=>{let u=Gt(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Ce(()=>s.value.matched[o.value]);Yn(Ji,Ce(()=>o.value+1)),Yn(td,a),Yn(ys,s);const c=_l();return qn(()=>[c.value,a.value,t.name],([u,f,h],[p,y,A])=>{f&&(f.instances[h]=u,y&&y!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!en(f,y)||!p)&&(f.enterCallbacks[h]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Zi(n.default,{Component:p,route:u});const y=h.props[f],A=y?y===!0?u.params:typeof y=="function"?y(u):y:null,L=Na(p,ee({},A,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return Zi(n.default,{Component:L,route:u})||L}}});function Zi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cd=ad;function ld(t){const e=Jf(t.routes,t),n=t.parseQuery||Zf,r=t.stringifyQuery||qi,s=t.history,i=un(),o=un(),a=un(),c=vl(tt);let u=tt;Vt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zr.bind(null,_=>""+_),h=zr.bind(null,If),p=zr.bind(null,wn);function y(_,R){let T,P;return $a(_)?(T=e.getRecordMatcher(_),P=R):P=_,e.addRoute(P,T)}function A(_){const R=e.getRecordMatcher(_);R&&e.removeRoute(R)}function D(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function O(_,R){if(R=ee({},R||c.value),typeof _=="string"){const d=Gr(n,_,R.path),g=e.resolve({path:d.path},R),v=s.createHref(d.fullPath);return ee(d,g,{params:p(g.params),hash:wn(d.hash),redirectedFrom:void 0,href:v})}let T;if(_.path!=null)T=ee({},_,{path:Gr(n,_.path,R.path).path});else{const d=ee({},_.params);for(const g in d)d[g]==null&&delete d[g];T=ee({},_,{params:h(d)}),R.params=h(R.params)}const P=e.resolve(T,R),G=_.hash||"";P.params=f(p(P.params));const Q=Rf(r,ee({},_,{hash:bf(G),path:P.path})),l=s.createHref(Q);return ee({fullPath:Q,hash:G,query:r===qi?ed(_.query):_.query||{}},P,{redirectedFrom:void 0,href:l})}function M(_){return typeof _=="string"?Gr(n,_,c.value.path):ee({},_)}function U(_,R){if(u!==_)return tn(8,{from:R,to:_})}function j(_){return se(_)}function ne(_){return j(ee(M(_),{replace:!0}))}function F(_){const R=_.matched[_.matched.length-1];if(R&&R.redirect){const{redirect:T}=R;let P=typeof T=="function"?T(_):T;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=M(P):{path:P},P.params={}),ee({query:_.query,hash:_.hash,params:P.path!=null?{}:_.params},P)}}function se(_,R){const T=u=O(_),P=c.value,G=_.state,Q=_.force,l=_.replace===!0,d=F(T);if(d)return se(ee(M(d),{state:typeof d=="object"?ee({},G,d.state):G,force:Q,replace:l}),R||T);const g=T;g.redirectedFrom=R;let v;return!Q&&Cf(r,P,T)&&(v=tn(16,{to:g,from:P}),De(P,P,!0,!1)),(v?Promise.resolve(v):we(g,P)).catch(m=>We(m)?We(m,2)?m:Ze(m):z(m,g,P)).then(m=>{if(m){if(We(m,2))return se(ee({replace:l},M(m.to),{state:typeof m.to=="object"?ee({},G,m.to.state):G,force:Q}),R||g)}else m=bt(g,P,!0,l,G);return Qe(g,P,m),m})}function pe(_,R){const T=U(_,R);return T?Promise.reject(T):Promise.resolve()}function Te(_){const R=$t.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(_):_()}function we(_,R){let T;const[P,G,Q]=ud(_,R);T=Jr(P.reverse(),"beforeRouteLeave",_,R);for(const d of P)d.leaveGuards.forEach(g=>{T.push(at(g,_,R))});const l=pe.bind(null,_,R);return T.push(l),le(T).then(()=>{T=[];for(const d of i.list())T.push(at(d,_,R));return T.push(l),le(T)}).then(()=>{T=Jr(G,"beforeRouteUpdate",_,R);for(const d of G)d.updateGuards.forEach(g=>{T.push(at(g,_,R))});return T.push(l),le(T)}).then(()=>{T=[];for(const d of Q)if(d.beforeEnter)if(Oe(d.beforeEnter))for(const g of d.beforeEnter)T.push(at(g,_,R));else T.push(at(d.beforeEnter,_,R));return T.push(l),le(T)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),T=Jr(Q,"beforeRouteEnter",_,R,Te),T.push(l),le(T))).then(()=>{T=[];for(const d of o.list())T.push(at(d,_,R));return T.push(l),le(T)}).catch(d=>We(d,8)?d:Promise.reject(d))}function Qe(_,R,T){a.list().forEach(P=>Te(()=>P(_,R,T)))}function bt(_,R,T,P,G){const Q=U(_,R);if(Q)return Q;const l=R===tt,d=Vt?history.state:{};T&&(P||l?s.replace(_.fullPath,ee({scroll:l&&d&&d.scroll},G)):s.push(_.fullPath,G)),c.value=_,De(_,R,T,l),Ze()}let Ne;function an(){Ne||(Ne=s.listen((_,R,T)=>{if(!Un.listening)return;const P=O(_),G=F(P);if(G){se(ee(G,{replace:!0}),P).catch(mn);return}u=P;const Q=c.value;Vt&&xf(Hi(Q.fullPath,T.delta),Mf()),we(P,Q).catch(l=>We(l,12)?l:We(l,2)?(se(l.to,P).then(d=>{We(d,20)&&!T.delta&&T.type===In.pop&&s.go(-1,!1)}).catch(mn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(l,P,Q))).then(l=>{l=l||bt(P,Q,!1),l&&(T.delta&&!We(l,8)?s.go(-T.delta,!1):T.type===In.pop&&We(l,20)&&s.go(-1,!1)),Qe(P,Q,l)}).catch(mn)}))}let Ut=un(),ie=un(),q;function z(_,R,T){Ze(_);const P=ie.list();return P.length?P.forEach(G=>G(_,R,T)):console.error(_),Promise.reject(_)}function je(){return q&&c.value!==tt?Promise.resolve():new Promise((_,R)=>{Ut.add([_,R])})}function Ze(_){return q||(q=!_,an(),Ut.list().forEach(([R,T])=>_?T(_):R()),Ut.reset()),_}function De(_,R,T,P){const{scrollBehavior:G}=t;if(!Vt||!G)return Promise.resolve();const Q=!T&&Uf(Hi(_.fullPath,0))||(P||!T)&&history.state&&history.state.scroll||null;return sa().then(()=>G(_,R,Q)).then(l=>l&&Lf(l)).catch(l=>z(l,_,R))}const ge=_=>s.go(_);let Ft;const $t=new Set,Un={currentRoute:c,listening:!0,addRoute:y,removeRoute:A,hasRoute:L,getRoutes:D,resolve:O,options:t,push:j,replace:ne,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:je,install(_){const R=this;_.component("RouterLink",sd),_.component("RouterView",cd),_.config.globalProperties.$router=R,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Gt(c)}),Vt&&!Ft&&c.value===tt&&(Ft=!0,j(s.location).catch(G=>{}));const T={};for(const G in tt)Object.defineProperty(T,G,{get:()=>c.value[G],enumerable:!0});_.provide(Dr,R),_.provide(Va,Jo(T)),_.provide(ys,c);const P=_.unmount;$t.add(_),_.unmount=function(){$t.delete(_),$t.size<1&&(u=tt,Ne&&Ne(),Ne=null,c.value=tt,Ft=!1,q=!1),P()}}};function le(_){return _.reduce((R,T)=>R.then(()=>Te(T)),Promise.resolve())}return Un}function ud(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>en(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>en(u,c))||s.push(c))}return[n,r,s]}function Em(){return $e(Dr)}const fd="modulepreload",dd=function(t){return"/"+t},eo={},nt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=dd(o),o in eo)return;eo[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const p=i[h];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":fd,a||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),a)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},hd=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var to={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new gd;const p=i<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const A=u<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const md=function(t){const e=ja(t);return Wa.encodeByteArray(e,!0)},Ka=function(t){return md(t).replace(/\./g,"")},za=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=()=>_d().__FIREBASE_DEFAULTS__,yd=()=>{if(typeof process>"u"||typeof to>"u")return;const t=to.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&za(t[1]);return e&&JSON.parse(e)},Gs=()=>{try{return vd()||yd()||bd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ga=t=>{var e,n;return(n=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wm=t=>{const e=Ga(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qa=()=>{var t;return(t=Gs())===null||t===void 0?void 0:t.config},Ja=t=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Id(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function Cd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ad,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _t(s,a,r)}}function Pd(t,e){return t.replace(Od,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Od=/\{\$([^}]+)}/g;function kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(no(i)&&no(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function no(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Nd(t,e){const n=new Dd(t,e);return n.subscribe.bind(n)}class Dd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Md(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yr),s.error===void 0&&(s.error=Yr),s.complete===void 0&&(s.complete=Yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Md(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ed;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ud(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xd(t){return t===It?void 0:t}function Ud(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ld(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const $d={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Bd=Y.INFO,Hd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Vd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=Bd,this._logHandler=Vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const jd=(t,e)=>e.some(n=>t instanceof n);let ro,so;function Wd(){return ro||(ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kd(){return so||(so=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,bs=new WeakMap,Qa=new WeakMap,Xr=new WeakMap,qs=new WeakMap;function zd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xa.set(n,t)}).catch(()=>{}),qs.set(e,t),e}function Gd(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let Es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qd(t){Es=t(Es)}function Jd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qr(this),e,...n);return Qa.set(r,e.sort?e.sort():[e]),pt(r)}:Kd().includes(t)?function(...e){return t.apply(Qr(this),e),pt(Xa.get(this))}:function(...e){return pt(t.apply(Qr(this),e))}}function Yd(t){return typeof t=="function"?Jd(t):(t instanceof IDBTransaction&&Gd(t),jd(t,Wd())?new Proxy(t,Es):t)}function pt(t){if(t instanceof IDBRequest)return zd(t);if(Xr.has(t))return Xr.get(t);const e=Yd(t);return e!==t&&(Xr.set(t,e),qs.set(e,t)),e}const Qr=t=>qs.get(t);function Xd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Qd=["get","getKey","getAll","getAllKeys","count"],Zd=["put","add","delete","clear"],Zr=new Map;function io(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zr.get(e))return Zr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Zr.set(e,i),i}qd(t=>({...t,get:(e,n,r)=>io(e,n)||t.get(e,n,r),has:(e,n)=>!!io(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(th(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function th(t){const e=t.getComponent();return e?.type==="VERSION"}const ws="@firebase/app",oo="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Ya("@firebase/app"),nh="@firebase/app-compat",rh="@firebase/analytics-compat",sh="@firebase/analytics",ih="@firebase/app-check-compat",oh="@firebase/app-check",ah="@firebase/auth",ch="@firebase/auth-compat",lh="@firebase/database",uh="@firebase/database-compat",fh="@firebase/functions",dh="@firebase/functions-compat",hh="@firebase/installations",ph="@firebase/installations-compat",gh="@firebase/messaging",mh="@firebase/messaging-compat",_h="@firebase/performance",vh="@firebase/performance-compat",yh="@firebase/remote-config",bh="@firebase/remote-config-compat",Eh="@firebase/storage",wh="@firebase/storage-compat",Ih="@firebase/firestore",Th="@firebase/firestore-compat",Sh="firebase",Rh="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]",Ch={[ws]:"fire-core",[nh]:"fire-core-compat",[sh]:"fire-analytics",[rh]:"fire-analytics-compat",[oh]:"fire-app-check",[ih]:"fire-app-check-compat",[ah]:"fire-auth",[ch]:"fire-auth-compat",[lh]:"fire-rtdb",[uh]:"fire-rtdb-compat",[fh]:"fire-fn",[dh]:"fire-fn-compat",[hh]:"fire-iid",[ph]:"fire-iid-compat",[gh]:"fire-fcm",[mh]:"fire-fcm-compat",[_h]:"fire-perf",[vh]:"fire-perf-compat",[yh]:"fire-rc",[bh]:"fire-rc-compat",[Eh]:"fire-gcs",[wh]:"fire-gcs-compat",[Ih]:"fire-fst",[Th]:"fire-fst-compat","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,Ts=new Map;function Ah(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Ts.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of fr.values())Ah(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new On("app","Firebase",Ph);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=Rh;function ec(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Is,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(n||(n=qa()),!n)throw gt.create("no-options");const i=fr.get(s);if(i){if(ur(n,i.options)&&ur(r,i.config))return i;throw gt.create("duplicate-app",{appName:s})}const o=new Fd(s);for(const c of Ts.values())o.addComponent(c);const a=new Oh(n,r,o);return fr.set(s,a),a}function kh(t=Is){const e=fr.get(t);if(!e&&t===Is&&qa())return ec();if(!e)throw gt.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=Ch[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}Tn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firebase-heartbeat-database",Dh=1,Sn="firebase-heartbeat-store";let es=null;function tc(){return es||(es=Xd(Nh,Dh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sn)}catch(n){console.warn(n)}}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),es}async function Mh(t){try{const n=(await tc()).transaction(Sn),r=await n.objectStore(Sn).get(nc(t));return await n.done,r}catch(e){if(e instanceof _t)kt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e?.message});kt.warn(n.message)}}}async function ao(t,e){try{const r=(await tc()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(e,nc(t)),await r.done}catch(n){if(n instanceof _t)kt.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n?.message});kt.warn(r.message)}}}function nc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1024,xh=30*24*60*60*1e3;class Uh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $h(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=co();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=co(),{heartbeatsToSend:r,unsentEntries:s}=Fh(this._heartbeatsCache.heartbeats),i=Ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function co(){return new Date().toISOString().substring(0,10)}function Fh(t,e=Lh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lo(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){Tn(new nn("platform-logger",e=>new eh(e),"PRIVATE")),Tn(new nn("heartbeat",e=>new Uh(e),"PRIVATE")),Jt(ws,oo,t),Jt(ws,oo,"esm2017"),Jt("fire-js","")}Bh("");function Js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function rc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hh=rc,sc=new On("auth","Firebase",rc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Ya("@firebase/auth");function Vh(t,...e){dr.logLevel<=Y.WARN&&dr.warn(`Auth (${Nn}): ${t}`,...e)}function Zn(t,...e){dr.logLevel<=Y.ERROR&&dr.error(`Auth (${Nn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw Ys(t,...e)}function Be(t,...e){return Ys(t,...e)}function jh(t,e,n){const r=Object.assign(Object.assign({},Hh()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function Ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sc.create(t,...e)}function x(t,e,...n){if(!t)throw Ys(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zn(e),new Error(e)}function Je(t,e){t||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wh(){return uo()==="http:"||uo()==="https:"}function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wh()||Id()||"connection"in navigator)?navigator.onLine:!0}function zh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=wd()||Td()}get(){return Kh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Dn(3e4,6e4);function vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,r,s={}){return oc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=kn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ic.fetch()(ac(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function oc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gh),e);try{const s=new Yh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jh(t,f,u);ke(t,f)}}catch(s){if(s instanceof _t)throw s;ke(t,"network-request-failed",{message:String(s)})}}async function Mn(t,e,n,r,s={}){const i=await yt(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ac(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xs(t.config,s):`${t.config.apiScheme}://${s}`}function Jh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),qh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}function fo(t){return t!==void 0&&t.enterprise!==void 0}class Xh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Qh(t,e){return yt(t,"GET","/v2/recaptchaConfig",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function ep(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tp(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Qs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:_n(ts(s.auth_time)),issuedAtTime:_n(ts(s.iat)),expirationTime:_n(ts(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ts(t){return Number(t)*1e3}function Qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const s=za(n);return s?JSON.parse(s):(Zn("Failed to decode base64 JWT payload"),null)}catch(s){return Zn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function np(t){const e=Qs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&rp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_n(this.lastLoginAt),this.creationTime=_n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rn(t,ep(n,{idToken:r}));x(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ap(i.providerUserInfo):[],a=op(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,f=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function ip(t){const e=Xe(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function op(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ap(t){return t.map(e=>{var{providerId:n}=e,r=Js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e){const n=await oc(t,{},async()=>{const r=kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ac(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ic.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lp(t,e){return yt(t,"POST","/v2/accounts:revokeToken",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):np(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tp(this,e)}reload(){return ip(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rn(this,Zh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:j,isAnonymous:ne,providerData:F,stsTokenManager:se}=n;x(U&&se,e,"internal-error");const pe=Cn.fromJSON(this.name,se);x(typeof U=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof j=="boolean",e,"internal-error"),x(typeof ne=="boolean",e,"internal-error"),rt(y,e.name),rt(A,e.name),rt(D,e.name),rt(L,e.name),rt(O,e.name),rt(M,e.name);const Te=new Pt({uid:U,auth:e,email:p,emailVerified:j,displayName:h,isAnonymous:ne,photoURL:A,phoneNumber:y,tenantId:D,stsTokenManager:pe,createdAt:O,lastLoginAt:M});return F&&Array.isArray(F)&&(Te.providerData=F.map(we=>Object.assign({},we))),L&&(Te._redirectEventId=L),Te}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;function Ge(t){Je(t instanceof Function,"Expected a class definition");let e=ho.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ho.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lc.type="NONE";const po=lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=er(this.userKey,s.apiKey,i),this.fullPersistenceKey=er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yt(Ge(po),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ge(po);const o=er(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=Pt._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Yt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Yt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pc(e))return"Blackberry";if(gc(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||fc(e))&&!e.includes("edge/"))return"Chrome";if(hc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function uc(t=de()){return/firefox\//i.test(t)}function Zs(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fc(t=de()){return/crios\//i.test(t)}function dc(t=de()){return/iemobile/i.test(t)}function hc(t=de()){return/android/i.test(t)}function pc(t=de()){return/blackberry/i.test(t)}function gc(t=de()){return/webos/i.test(t)}function Mr(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function up(t=de()){var e;return Mr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fp(){return Sd()&&document.documentMode===10}function mc(t=de()){return Mr(t)||hc(t)||gc(t)||pc(t)||/windows phone/i.test(t)||dc(t)}function dp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e=[]){let n;switch(t){case"Browser":n=go(de());break;case"Worker":n=`${go(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e={}){return yt(t,"GET","/v2/passwordPolicy",vt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=6;class mp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mo(this),this.idTokenSubscription=new mo(this),this.beforeStateQueue=new hp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pp(this),n=new mp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Vh(`Error while retrieving App Check token: ${n.error}`),n?.token}}function xt(t){return Xe(t)}class mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nd(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vp(t){Lr=t}function vc(t){return Lr.loadJS(t)}function yp(){return Lr.recaptchaEnterpriseScript}function bp(){return Lr.gapiScript}function Ep(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const wp="recaptcha-enterprise",Ip="NO_RECAPTCHA";class Tp{constructor(e){this.type=wp,this.auth=xt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Xh(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;fo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ip)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&fo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yp();c.length!==0&&(c+=a),vc(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function _o(t,e,n,r=!1){const s=new Tp(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _o(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _o(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){const n=Za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,e??{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function Rp(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ge);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Cp(t,e,n){const r=xt(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,i=yc(e),{host:o,port:a}=Ap(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Pp()}function yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ap(t){const e=yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vo(o)}}}function vo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function Op(t,e){return yt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,e){return Mn(t,"POST","/v1/accounts:signInWithPassword",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t,e){return Mn(t,"POST","/v1/accounts:signInWithEmailLink",vt(t,e))}async function Dp(t,e){return Mn(t,"POST","/v1/accounts:signInWithEmailLink",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ei{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new An(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,n,"signInWithPassword",kp);case"emailLink":return Np(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,r,"signUpPassword",Op);case"emailLink":return Dp(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return Mn(t,"POST","/v1/accounts:signInWithIdp",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="http://localhost";class Nt extends ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:Mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xp(t){const e=dn(hn(t)).link,n=e?dn(hn(e)).deep_link_id:null,r=dn(hn(t)).deep_link_id;return(r?dn(hn(r)).link:null)||r||n||e||t}class ti{constructor(e){var n,r,s,i,o,a;const c=dn(hn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Lp((s=c.mode)!==null&&s!==void 0?s:null);x(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xp(e);try{return new ti(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.providerId=on.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ti.parseLink(n);return x(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}on.PROVIDER_ID="password";on.EMAIL_PASSWORD_SIGN_IN_METHOD="password";on.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends bc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Ln{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Ln{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Ln{constructor(){super("twitter.com")}static credential(e,n){return Nt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e){return Mn(t,"POST","/v1/accounts:signUp",vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=yo(r);return new Dt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yo(r);return new Dt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends _t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pr(e,n,r,s)}}function Ec(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,r):i})}async function Fp(t,e,n=!1){const r=await Rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Rn(t,Ec(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Qs(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t,e,n=!1){const r="signIn",s=await Ec(t,r,e),i=await Dt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Bp(t,e){return wc(xt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){const e=xt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Im(t,e,n){const r=xt(t),o=await Rs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Up).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ic(t),c}),a=await Dt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Tm(t,e,n){return Bp(Xe(t),on.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ic(t),r})}function Hp(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Vp(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Sm(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function Rm(t){return Xe(t).signOut()}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){const t=de();return Zs(t)||Mr(t)}const Wp=1e3,Kp=10;class Sc extends Tc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jp()&&dp(),this.fallbackToPolling=mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Kp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sc.type="LOCAL";const zp=Sc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Tc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rc.type="SESSION";const Cc=Rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ni("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function Jp(t){He().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Yp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xp(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qp(){return Ac()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="firebaseLocalStorageDb",Zp=1,mr="firebaseLocalStorage",Oc="fbase_key";class xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ur(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function eg(){const t=indexedDB.deleteDatabase(Pc);return new xn(t).toPromise()}function Cs(){const t=indexedDB.open(Pc,Zp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mr,{keyPath:Oc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mr)?e(r):(r.close(),await eg(),e(await Cs()))})})}async function bo(t,e,n){const r=Ur(t,!0).put({[Oc]:e,value:n});return new xn(r).toPromise()}async function tg(t,e){const n=Ur(t,!1).get(e),r=await new xn(n).toPromise();return r===void 0?null:r.value}function Eo(t,e){const n=Ur(t,!0).delete(e);return new xn(n).toPromise()}const ng=800,rg=3;class kc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(Qp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yp(),!this.activeServiceWorker)return;this.sender=new qp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await bo(e,gr,"1"),await Eo(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ur(s,!1).getAll();return new xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kc.type="LOCAL";const sg=kc;new Dn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){return e?Ge(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function og(t){return wc(t.auth,new ri(t),t.bypassAuthState)}function ag(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),$p(n,new ri(t),t.bypassAuthState)}async function cg(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Fp(n,new ri(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return og;case"linkViaPopup":case"linkViaRedirect":return cg;case"reauthViaPopup":case"reauthViaRedirect":return ag;default:ke(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new Dn(2e3,1e4);class jt extends Nc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lg.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="pendingRedirect",tr=new Map;class fg extends Nc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const r=await dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dg(t,e){const n=gg(e),r=pg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hg(t,e){tr.set(t._key(),e)}function pg(t){return Ge(t._redirectPersistence)}function gg(t){return er(ug,t.config.apiKey,t.name)}async function mg(t,e,n=!1){const r=xt(t),s=ig(r,e),o=await new fg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=10*60*1e3;class vg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_g&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(e))}saveEventToCache(e){this.cachedEventUids.add(wo(e)),this.lastProcessedEventTime=Date.now()}}function wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dc({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function yg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wg=/^https?/;async function Ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bg(t);for(const n of e)try{if(Tg(n))return}catch{}ke(t,"unauthorized-domain")}function Tg(t){const e=Ss(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wg.test(n))return!1;if(Eg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Dn(3e4,6e4);function Io(){const t=He().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rg(t){return new Promise((e,n)=>{var r,s,i;function o(){Io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Io(),n(Be(t,"network-request-failed"))},timeout:Sg.get()})}if(!((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=He().gapi)===null||i===void 0)&&i.load)o();else{const a=Ep("iframefcb");return He()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},vc(`${bp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw nr=null,e})}let nr=null;function Cg(t){return nr=nr||Rg(t),nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Dn(5e3,15e3),Pg="__/auth/iframe",Og="emulator/auth/iframe",kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ng=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xs(e,Og):`https://${t.config.authDomain}/${Pg}`,r={apiKey:e.apiKey,appName:t.name,v:Nn},s=Ng.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${kn(r).slice(1)}`}async function Mg(t){const e=await Cg(t),n=He().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Dg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=He().setTimeout(()=>{i(o)},Ag.get());function c(){He().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xg=500,Ug=600,Fg="_blank",$g="http://localhost";class To{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,r=xg,s=Ug){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=de().toLowerCase();n&&(a=fc(u)?Fg:n),uc(u)&&(e=e||$g,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,A])=>`${p}${y}=${A},`,"");if(up(u)&&a!=="_self")return Hg(e||"",a),new To(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new To(h)}function Hg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__/auth/handler",jg="emulator/auth/handler",Wg=encodeURIComponent("fac");async function So(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nn,eventId:s};if(e instanceof bc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Ln){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${Wg}=${encodeURIComponent(c)}`:"";return`${Kg(t)}?${kn(a).slice(1)}${u}`}function Kg({config:t}){return t.emulator?Xs(t,jg):`https://${t.authDomain}/${Vg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="webStorageSupport";class zg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cc,this._completeRedirectFn=mg,this._overrideRedirectResult=hg}async _openPopup(e,n,r,s){var i;Je((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await So(e,n,r,Ss(),s);return Bg(e,o,ni())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await So(e,n,r,Ss(),s);return Jp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mg(e),r=new vg(e);return n.register("authEvent",s=>(x(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ns,{type:ns},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[ns];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mc()||Zs()||Mr()}}const Gg=zg;var Ro="@firebase/auth",Co="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yg(t){Tn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_c(t)},u=new _p(r,s,i,c);return Rp(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new nn("auth-internal",e=>{const n=xt(e.getProvider("auth").getImmediate());return(r=>new qg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Ro,Co,Jg(t)),Jt(Ro,Co,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=5*60,Qg=Ja("authIdTokenMaxAge")||Xg;let Ao=null;const Zg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qg)return;const s=n?.token;Ao!==s&&(Ao=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cm(t=kh()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sp(t,{popupRedirectResolver:Gg,persistence:[sg,zp,Cc]}),r=Ja("authTokenSyncURL");if(r){const i=Zg(r);Vp(n,i,()=>i(n.currentUser)),Hp(n,o=>i(o))}const s=Ga("auth");return s&&Cp(n,`http://${s}`),n}function em(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",em().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yg("Browser");var tm="firebase",nm="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(tm,nm,"app");const rm={apiKey:"AIzaSyBMMpq7AHUP_-bw0wJtLkDrVQoLTqWr2xE",authDomain:"test-5a9bd.firebaseapp.com",projectId:"test-5a9bd",storageBucket:"test-5a9bd.appspot.com",messagingSenderId:"328224332739",appId:"1:328224332739:web:39de7dd624f7296a55bb76"},Am=ec(rm);function xe(t){return()=>hd(Object.assign({"../pages/Contact.vue":()=>nt(()=>import("./Contact-d2yDl-05.js"),__vite__mapDeps([0,1,2])),"../pages/Feedback.vue":()=>nt(()=>import("./Feedback-kkY155nB.js"),__vite__mapDeps([3,1,2,4,5])),"../pages/Home.vue":()=>nt(()=>import("./Home-G_CNr2g9.js"),__vite__mapDeps([6,1,2,4])),"../pages/Login.vue":()=>nt(()=>import("./Login-Wj6N5j3h.js"),__vite__mapDeps([7,1,2,5])),"../pages/Registration.vue":()=>nt(()=>import("./Registration-dLZpEGz2.js"),__vite__mapDeps([8,1,2,4])),"../pages/Search.vue":()=>nt(()=>import("./Search-H9csKbk3.js"),__vite__mapDeps([9,1,2])),"../pages/Secure.vue":()=>nt(()=>import("./Secure-E0z9q_gD.js"),__vite__mapDeps([10,1,2,4])),"../pages/Trending.vue":()=>nt(()=>import("./Trending-vuwJoA5C.js"),__vite__mapDeps([11,1,2,5]))}),`../pages/${t}.vue`)}const sm=[{path:"/",component:xe("Login")},{path:"/PageTwo",component:xe("PageTwo")},{path:"/Blog",component:xe("Blog")},{path:"/Registration",component:xe("Registration")},{path:"/Home",component:xe("Home")},{path:"/Secure",component:xe("Secure")},{path:"/Search",component:xe("Search")},{path:"/Trending",component:xe("Trending")},{path:"/Feedback",component:xe("Feedback")},{path:"/Contact",component:xe("Contact")}];let im=ld({history:Ff(),routes:sm});const _r="a0c0387b7bb54be7b9794e2a3a0406af",om=new URLSearchParams(window.location.search),vr=om.get("code");let ae=localStorage.getItem("access_token"),Rt=localStorage.getItem("refresh_token");const Mc=nf(lf);Mc.use(im);Mc.mount("#app");console.log(vr);console.log(localStorage.getItem("access_token"));console.log(ae);console.log(localStorage.getItem("refresh_token"));if(!vr)console.log("Checking for refresh token"),console.log(await Po(ae,Rt));else{console.log("Getting access token");const t=await Lc(_r,vr);t?(ae=t,Rt=localStorage.getItem("refresh_token")):(Po(ae,Rt),ae=localStorage.getItem("access_token"),Rt=localStorage.getItem("refresh_token")),console.log(ae)}async function Po(t,e){const r=await(await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+t}})).json();return console.log(r.error),r.error!=null?(console.log("Access token invalid"),xc(e),!1):!0}async function Pm(t){const e=await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+ae}});return console.log(t),(await e.json()).error!=null?(console.log("Access token invalid"),await xc(t),ae=localStorage.getItem("access_token"),Rt=localStorage.getItem("refresh_token"),!1):!0}async function Om(){um(),await am(_r),ae=await Lc(_r,vr),Rt=localStorage.getItem("refresh_token"),console.log(ae)}async function am(t){const e=cm(128),n=await lm(e);localStorage.setItem("verifier",e);const r=new URLSearchParams;r.append("client_id",t),r.append("response_type","code"),r.append("redirect_uri","https://test-5a9bd.web.app/callback"),r.append("scope","user-read-private user-read-email user-top-read"),r.append("code_challenge_method","S256"),r.append("code_challenge",n),document.location=`https://accounts.spotify.com/authorize?${r.toString()}`}function cm(t){let e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}async function lm(t){const e=new TextEncoder().encode(t),n=await window.crypto.subtle.digest("SHA-256",e);return btoa(String.fromCharCode.apply(null,[...new Uint8Array(n)])).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Lc(t,e){const n=localStorage.getItem("verifier"),r=new URLSearchParams;r.append("client_id",t),r.append("grant_type","authorization_code"),r.append("code",e),r.append("redirect_uri","https://test-5a9bd.web.app/callback"),r.append("code_verifier",n);const i=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r})).json();console.log(i);const o=i.access_token;return i.error||(localStorage.setItem("access_token",i.access_token),localStorage.setItem("refresh_token",i.refresh_token),console.log(localStorage.getItem("access_token")),console.log(localStorage.getItem("refresh_token"))),o}async function xc(t){const e="https://accounts.spotify.com/api/token",n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:t,client_id:_r})},s=await(await fetch(e,n)).json();console.log(t),console.log(s),localStorage.setItem("access_token",s.access_token),localStorage.setItem("refresh_token",s.refresh_token),console.log("New access token: "+localStorage.getItem("access_token")),console.log("New refresh token: "+localStorage.getItem("refresh_token"))}async function km(t){const n=await(await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();console.log(n),n.error!=null?(t.profileName="You have not connected your Spotify account",console.log("fetchProfile() error")):t.profileName=n.display_name,console.log(n.display_name)}async function Nm(t){const n=await(await fetch("https://api.spotify.com/v1/me/top/artists",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();t.topArtists=n.items.slice(0,5)}async function Dm(t){const n=await(await fetch("https://api.spotify.com/v1/me/top/tracks",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();t.topTracks=n.items.slice(0,5)}async function Mm(t,e){const r=await(await fetch("https://api.spotify.com/v1/search?q="+t+"&type=track",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();console.log(r),e.searchResultTrack=r.tracks.items.slice(0,5)}async function Lm(t,e,n){const s=await(await fetch("https://api.spotify.com/v1/search?q="+t+"&type=track",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();console.log(s),e.trackImage[n]=s.tracks.items[0].album.images[0].url}async function xm(t,e){const r=await(await fetch("https://api.spotify.com/v1/search?q="+t+"&type=artist",{method:"GET",headers:{Authorization:`Bearer ${ae}`}})).json();console.log(r),e.searchResultArtist=r.artists.items.slice(0,5)}function um(){console.log("Tokens removed"),localStorage.setItem("access_token",null),localStorage.setItem("refresh_token",null),ae=null,Rt=null}export{Ca as A,Jt as B,nn as C,Za as D,Xe as E,Ke as F,wm as G,kh as H,_t as I,Lm as J,of as K,Rm as L,um as M,Nl as N,Ds as O,Cl as P,dm as Q,hm as R,Tn as _,ve as a,Pa as b,mm as c,_m as d,Am as e,Om as f,Nm as g,Dm as h,km as i,Cm as j,Rt as k,Pm as l,yu as m,bm as n,Sa as o,Sm as p,Im as q,gm as r,Tm as s,fm as t,Em as u,ym as v,pm as w,vm as x,Mm as y,xm as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Contact-d2yDl-05.js","assets/Navigation-uoN0Z8Ab.js","assets/Navigation-j-iqlOhE.css","assets/Feedback-kkY155nB.js","assets/index.esm2017-PULwSAig.js","assets/Feedback-MWhsedi0.css","assets/Home-G_CNr2g9.js","assets/Login-Wj6N5j3h.js","assets/Registration-dLZpEGz2.js","assets/Search-H9csKbk3.js","assets/Secure-E0z9q_gD.js","assets/Trending-vuwJoA5C.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
