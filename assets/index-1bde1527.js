(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function k0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Af={exports:{}},el={},Lf={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),E0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),Rc=Symbol.iterator;function N0(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var Nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,bf={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||Nf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function If(){}If.prototype=Sr.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||Nf}var cu=uu.prototype=new If;cu.constructor=uu;Ff(cu,Sr.prototype);cu.isPureReactComponent=!0;var Tc=Array.isArray,$f=Object.prototype.hasOwnProperty,du={current:null},zf={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)$f.call(t,r)&&!zf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ki,type:e,key:o,ref:l,props:i,_owner:du.current}}function F0(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ac=/\/+/g;function os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function Zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ki:case E0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+os(l,0):r,Tc(i)?(n="",e!=null&&(n=e.replace(Ac,"$&/")+"/"),Zi(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=F0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ac,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Tc(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+os(o,s);l+=Zi(o,t,n,a,i)}else if(a=N0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+os(o,s++),l+=Zi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function bi(e,t,n){if(e==null)return e;var r=[],i=0;return Zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},eo={transition:null},$0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:eo,ReactCurrentOwner:du};$.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Sr;$.Fragment=C0;$.Profiler=j0;$.PureComponent=uu;$.StrictMode=P0;$.Suspense=T0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ff({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)$f.call(t,a)&&!zf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ki,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:O0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_0,_context:e},e.Consumer=e};$.createElement=Mf;$.createFactory=function(e){var t=Mf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:R0,render:e}};$.isValidElement=fu;$.lazy=function(e){return{$$typeof:L0,_payload:{_status:-1,_result:e},_init:I0}};$.memo=function(e,t){return{$$typeof:A0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.2.0";Lf.exports=$;var L=Lf.exports;const Pn=k0(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=L,M0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,U0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function Df(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)B0.call(t,r)&&!H0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:o,ref:l,props:i,_owner:U0.current}}el.Fragment=D0;el.jsx=Df;el.jsxs=Df;Af.exports=el;var w=Af.exports,Qs={},Bf={exports:{}},$e={},Uf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,N){var F=O.length;O.push(N);e:for(;0<F;){var B=F-1>>>1,ne=O[B];if(0<i(ne,N))O[B]=N,O[F]=ne,F=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var N=O[0],F=O.pop();if(F!==N){O[0]=F;e:for(var B=0,ne=O.length,Nt=ne>>>1;B<Nt;){var De=2*(B+1)-1,vt=O[De],Be=De+1,st=O[Be];if(0>i(vt,F))Be<ne&&0>i(st,vt)?(O[B]=st,O[Be]=F,B=Be):(O[B]=vt,O[De]=F,B=De);else if(Be<ne&&0>i(st,F))O[B]=st,O[Be]=F,B=Be;else break e}}return N}function i(O,N){var F=O.sortIndex-N.sortIndex;return F!==0?F:O.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,p=3,v=!1,g=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=O)r(u),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(u)}}function x(O){if(y=!1,m(O),!g)if(n(a)!==null)g=!0,_r(E);else{var N=n(u);N!==null&&fn(x,N.startTime-O)}}function E(O,N){g=!1,y&&(y=!1,h(T),T=-1),v=!0;var F=p;try{for(m(N),c=n(a);c!==null&&(!(c.expirationTime>N)||O&&!se());){var B=c.callback;if(typeof B=="function"){c.callback=null,p=c.priorityLevel;var ne=B(c.expirationTime<=N);N=e.unstable_now(),typeof ne=="function"?c.callback=ne:c===n(a)&&r(a),m(N)}else r(a);c=n(a)}if(c!==null)var Nt=!0;else{var De=n(u);De!==null&&fn(x,De.startTime-N),Nt=!1}return Nt}finally{c=null,p=F,v=!1}}var _=!1,k=null,T=-1,M=5,A=-1;function se(){return!(e.unstable_now()-A<M)}function cn(){if(k!==null){var O=e.unstable_now();A=O;var N=!0;try{N=k(!0,O)}finally{N?dn():(_=!1,k=null)}}else _=!1}var dn;if(typeof f=="function")dn=function(){f(cn)};else if(typeof MessageChannel<"u"){var Ni=new MessageChannel,rs=Ni.port2;Ni.port1.onmessage=cn,dn=function(){rs.postMessage(null)}}else dn=function(){P(cn,0)};function _r(O){k=O,_||(_=!0,dn())}function fn(O,N){T=P(function(){O(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,_r(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var F=p;p=N;try{return O()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,N){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=p;p=O;try{return N()}finally{p=F}},e.unstable_scheduleCallback=function(O,N,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=F+ne,O={id:d++,callback:N,priorityLevel:O,startTime:F,expirationTime:ne,sortIndex:-1},F>B?(O.sortIndex=F,t(u,O),n(a)===null&&O===n(u)&&(y?(h(T),T=-1):y=!0,fn(x,F-B))):(O.sortIndex=ne,t(a,O),g||v||(g=!0,_r(E))),O},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(O){var N=p;return function(){var F=p;p=N;try{return O.apply(this,arguments)}finally{p=F}}}})(Hf);Uf.exports=Hf;var W0=Uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=L,be=W0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vf=new Set,Zr={};function Fn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Vf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lc={},Nc={};function G0(e){return Ks.call(Nc,e)?!0:Ks.call(Lc,e)?!1:V0.test(e)?Nc[e]=!0:(Lc[e]=!0,!1)}function Q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K0(e,t,n,r){if(t===null||typeof t>"u"||Q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K0(t,n,i,r)&&(n=null),r||i===null?G0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),Gf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),Xs=Symbol.for("react.suspense"),qs=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Kf=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ls;function $r(e){if(ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ls=t&&t[1]||""}return`
`+ls+e}var ss=!1;function as(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function Y0(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=as(e.type,!1),e;case 11:return e=as(e.type.render,!1),e;case 1:return e=as(e.type,!0),e;default:return""}}function Js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Dn:return"Portal";case Ys:return"Profiler";case gu:return"StrictMode";case Xs:return"Suspense";case qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qf:return(e.displayName||"Context")+".Consumer";case Gf:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Js(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Js(e(t))}catch{}}return null}function X0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Js(t);case 8:return t===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e){var t=Yf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=q0(e))}function Xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qf(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function ea(e,t){qf(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&ta(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ta(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(zr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Jf(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zi,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zi=zi||document.createElement("div"),zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Z0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,er=null,tr=null;function Mc(e){if(e=Pi(e)){if(typeof sa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ol(t),sa(e.stateNode,e.type,t))}}function rp(e){er?tr?tr.push(e):tr=[e]:er=e}function ip(){if(er){var e=er,t=tr;if(tr=er=null,Mc(e),t)for(e=0;e<t.length;e++)Mc(t[e])}}function op(e,t){return e(t)}function lp(){}var us=!1;function sp(e,t,n){if(us)return e(t,n);us=!0;try{return op(e,t,n)}finally{us=!1,(er!==null||tr!==null)&&(lp(),ip())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var aa=!1;if(jt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){aa=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{aa=!1}function eg(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Wr=!1,So=null,ko=!1,ua=null,tg={onError:function(e){Wr=!0,So=e}};function ng(e,t,n,r,i,o,l,s,a){Wr=!1,So=null,eg.apply(tg,arguments)}function rg(e,t,n,r,i,o,l,s,a){if(ng.apply(this,arguments),Wr){if(Wr){var u=So;Wr=!1,So=null}else throw Error(C(198));ko||(ko=!0,ua=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ap(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dc(e){if(bn(e)!==e)throw Error(C(188))}function ig(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dc(i),e;if(o===r)return Dc(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function up(e){return e=ig(e),e!==null?cp(e):null}function cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cp(e);if(t!==null)return t;e=e.sibling}return null}var dp=be.unstable_scheduleCallback,Bc=be.unstable_cancelCallback,og=be.unstable_shouldYield,lg=be.unstable_requestPaint,re=be.unstable_now,sg=be.unstable_getCurrentPriorityLevel,xu=be.unstable_ImmediatePriority,fp=be.unstable_UserBlockingPriority,Eo=be.unstable_NormalPriority,ag=be.unstable_LowPriority,pp=be.unstable_IdlePriority,tl=null,pt=null;function ug(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(cg(e)/dg|0)|0}var Mi=64,Di=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Mr(s):(o&=l,o!==0&&(r=Mr(o)))}else l=n&~i,l!==0?r=Mr(l):o!==0&&(r=Mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function pg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-nt(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=pg(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function mg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gp,ku,yp,vp,wp,da=!1,Bi=[],Vt=null,Gt=null,Qt=null,ni=new Map,ri=new Map,Dt=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function Tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yg(e,t,n,r,i){switch(t){case"focusin":return Vt=Tr(Vt,e,t,n,r,i),!0;case"dragenter":return Gt=Tr(Gt,e,t,n,r,i),!0;case"mouseover":return Qt=Tr(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ni.set(o,Tr(ni.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ri.set(o,Tr(ri.get(o)||null,e,t,n,r,i)),!0}return!1}function xp(e){var t=yn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=ap(n),t!==null){e.blockedOn=t,wp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);la=r,n.target.dispatchEvent(r),la=null}else return t=Pi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Hc(e,t,n){to(e)&&n.delete(t)}function vg(){da=!1,Vt!==null&&to(Vt)&&(Vt=null),Gt!==null&&to(Gt)&&(Gt=null),Qt!==null&&to(Qt)&&(Qt=null),ni.forEach(Hc),ri.forEach(Hc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,da||(da=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,vg)))}function ii(e){function t(i){return Ar(i,e)}if(0<Bi.length){Ar(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&Ar(Vt,e),Gt!==null&&Ar(Gt,e),Qt!==null&&Ar(Qt,e),ni.forEach(t),ri.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)xp(n),n.blockedOn===null&&Dt.shift()}var nr=At.ReactCurrentBatchConfig,Po=!0;function wg(e,t,n,r){var i=H,o=nr.transition;nr.transition=null;try{H=1,Eu(e,t,n,r)}finally{H=i,nr.transition=o}}function xg(e,t,n,r){var i=H,o=nr.transition;nr.transition=null;try{H=4,Eu(e,t,n,r)}finally{H=i,nr.transition=o}}function Eu(e,t,n,r){if(Po){var i=fa(e,t,n,r);if(i===null)xs(e,t,r,jo,n),Uc(e,r);else if(yg(i,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<gg.indexOf(e)){for(;i!==null;){var o=Pi(i);if(o!==null&&gp(o),o=fa(e,t,n,r),o===null&&xs(e,t,r,jo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var jo=null;function fa(e,t,n,r){if(jo=null,e=wu(r),e=yn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ap(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sg()){case xu:return 1;case fp:return 4;case Eo:case ag:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Ht=null,Cu=null,no=null;function kp(){if(no)return no;var e,t=Cu,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function Wc(){return!1}function ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:Wc,this.isPropagationStopped=Wc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=ze(kr),Ci=ee({},kr,{view:0,detail:0}),Sg=ze(Ci),ds,fs,Lr,nl=ee({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(ds=e.screenX-Lr.screenX,fs=e.screenY-Lr.screenY):fs=ds=0,Lr=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:fs}}),Vc=ze(nl),kg=ee({},nl,{dataTransfer:0}),Eg=ze(kg),Cg=ee({},Ci,{relatedTarget:0}),ps=ze(Cg),Pg=ee({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=ze(Pg),_g=ee({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Og=ze(_g),Rg=ee({},kr,{data:0}),Gc=ze(Rg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lg[e])?!!t[e]:!1}function ju(){return Ng}var Fg=ee({},Ci,{key:function(e){if(e.key){var t=Tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bg=ze(Fg),Ig=ee({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=ze(Ig),$g=ee({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),zg=ze($g),Mg=ee({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=ze(Mg),Bg=ee({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=ze(Bg),Hg=[9,13,27,32],_u=jt&&"CompositionEvent"in window,Vr=null;jt&&"documentMode"in document&&(Vr=document.documentMode);var Wg=jt&&"TextEvent"in window&&!Vr,Ep=jt&&(!_u||Vr&&8<Vr&&11>=Vr),Kc=String.fromCharCode(32),Yc=!1;function Cp(e,t){switch(e){case"keyup":return Hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Vg(e,t){switch(e){case"compositionend":return Pp(t);case"keypress":return t.which!==32?null:(Yc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Yc?null:e;default:return null}}function Gg(e,t){if(Un)return e==="compositionend"||!_u&&Cp(e,t)?(e=kp(),no=Cu=Ht=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qg[e.type]:t==="textarea"}function jp(e,t,n,r){rp(r),t=_o(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,oi=null;function Kg(e){$p(e,0)}function rl(e){var t=Vn(e);if(Xf(t))return e}function Yg(e,t){if(e==="change")return t}var _p=!1;if(jt){var hs;if(jt){var ms="oninput"in document;if(!ms){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),ms=typeof qc.oninput=="function"}hs=ms}else hs=!1;_p=hs&&(!document.documentMode||9<document.documentMode)}function Jc(){Gr&&(Gr.detachEvent("onpropertychange",Op),oi=Gr=null)}function Op(e){if(e.propertyName==="value"&&rl(oi)){var t=[];jp(t,oi,e,wu(e)),sp(Kg,t)}}function Xg(e,t,n){e==="focusin"?(Jc(),Gr=t,oi=n,Gr.attachEvent("onpropertychange",Op)):e==="focusout"&&Jc()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(oi)}function Jg(e,t){if(e==="click")return rl(t)}function Zg(e,t){if(e==="input"||e==="change")return rl(t)}function ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:ey;function li(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ks.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tp(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ty(e){var t=Tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ed(n,o);var l=ed(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ny=jt&&"documentMode"in document&&11>=document.documentMode,Hn=null,pa=null,Qr=null,ha=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||Hn==null||Hn!==xo(r)||(r=Hn,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&li(Qr,r)||(Qr=r,r=_o(pa,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},gs={},Ap={};jt&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function il(e){if(gs[e])return gs[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return gs[e]=t[n];return e}var Lp=il("animationend"),Np=il("animationiteration"),Fp=il("animationstart"),bp=il("transitionend"),Ip=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Ip.set(e,t),Fn(t,[e])}for(var ys=0;ys<nd.length;ys++){var vs=nd[ys],ry=vs.toLowerCase(),iy=vs[0].toUpperCase()+vs.slice(1);ln(ry,"on"+iy)}ln(Lp,"onAnimationEnd");ln(Np,"onAnimationIteration");ln(Fp,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(bp,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rg(r,t,void 0,e),e.currentTarget=null}function $p(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;rd(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;rd(i,s,u),o=a}}}if(ko)throw e=ua,ko=!1,ua=null,e}function Q(e,t){var n=t[wa];n===void 0&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(zp(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),zp(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Wi]){e[Wi]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,ws("selectionchange",!1,t))}}function zp(e,t,n,r){switch(Sp(t)){case 1:var i=wg;break;case 4:i=xg;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=yn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}sp(function(){var u=o,d=wu(n),c=[];e:{var p=Ip.get(e);if(p!==void 0){var v=Pu,g=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":v=bg;break;case"focusin":g="focus",v=ps;break;case"focusout":g="blur",v=ps;break;case"beforeblur":case"afterblur":v=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=zg;break;case Lp:case Np:case Fp:v=jg;break;case bp:v=Dg;break;case"scroll":v=Sg;break;case"wheel":v=Ug;break;case"copy":case"cut":case"paste":v=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qc}var y=(t&4)!==0,P=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=ti(f,h),x!=null&&y.push(ai(f,x,m)))),P)break;f=f.return}0<y.length&&(p=new v(p,g,null,n,d),c.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==la&&(g=n.relatedTarget||n.fromElement)&&(yn(g)||g[_t]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?yn(g):null,g!==null&&(P=bn(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Vc,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Qc,x="onPointerLeave",h="onPointerEnter",f="pointer"),P=v==null?p:Vn(v),m=g==null?p:Vn(g),p=new y(x,f+"leave",v,n,d),p.target=P,p.relatedTarget=m,x=null,yn(d)===u&&(y=new y(h,f+"enter",g,n,d),y.target=m,y.relatedTarget=P,x=y),P=x,v&&g)t:{for(y=v,h=g,f=0,m=y;m;m=zn(m))f++;for(m=0,x=h;x;x=zn(x))m++;for(;0<f-m;)y=zn(y),f--;for(;0<m-f;)h=zn(h),m--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=zn(y),h=zn(h)}y=null}else y=null;v!==null&&id(c,p,v,y,!1),g!==null&&P!==null&&id(c,P,g,y,!0)}}e:{if(p=u?Vn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var E=Yg;else if(Xc(p))if(_p)E=Zg;else{E=qg;var _=Xg}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Jg);if(E&&(E=E(e,u))){jp(c,E,n,d);break e}_&&_(e,p,u),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&ta(p,"number",p.value)}switch(_=u?Vn(u):window,e){case"focusin":(Xc(_)||_.contentEditable==="true")&&(Hn=_,pa=u,Qr=null);break;case"focusout":Qr=pa=Hn=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,td(c,n,d);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":td(c,n,d)}var k;if(_u)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Un?Cp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ep&&n.locale!=="ko"&&(Un||T!=="onCompositionStart"?T==="onCompositionEnd"&&Un&&(k=kp()):(Ht=d,Cu="value"in Ht?Ht.value:Ht.textContent,Un=!0)),_=_o(u,T),0<_.length&&(T=new Gc(T,e,null,n,d),c.push({event:T,listeners:_}),k?T.data=k:(k=Pp(n),k!==null&&(T.data=k)))),(k=Wg?Vg(e,n):Gg(e,n))&&(u=_o(u,"onBeforeInput"),0<u.length&&(d=new Gc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}$p(c,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ti(e,n),o!=null&&r.unshift(ai(e,o,i)),o=ti(e,t),o!=null&&r.push(ai(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=ti(n,o),a!=null&&l.unshift(ai(n,a,s))):i||(a=ti(n,o),a!=null&&l.push(ai(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ly=/\r\n?/g,sy=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(sy,"")}function Vi(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(C(425))}function Oo(){}var ma=null,ga=null;function ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var va=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(cy)}:va;function cy(e){setTimeout(function(){throw e})}function Ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ii(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),dt="__reactFiber$"+Er,ui="__reactProps$"+Er,_t="__reactContainer$"+Er,wa="__reactEvents$"+Er,dy="__reactListeners$"+Er,fy="__reactHandles$"+Er;function yn(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[dt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[dt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ol(e){return e[ui]||null}var xa=[],Gn=-1;function sn(e){return{current:e}}function Y(e){0>Gn||(e.current=xa[Gn],xa[Gn]=null,Gn--)}function G(e,t){Gn++,xa[Gn]=e.current,e.current=t}var nn={},ke=sn(nn),Re=sn(!1),jn=nn;function ar(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Ro(){Y(Re),Y(ke)}function ad(e,t,n){if(ke.current!==nn)throw Error(C(168));G(ke,t),G(Re,n)}function Mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,X0(e)||"Unknown",i));return ee({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,jn=ke.current,G(ke,e),G(Re,Re.current),!0}function ud(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Mp(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,Y(Re),Y(ke),G(ke,e)):Y(Re),G(Re,n)}var St=null,ll=!1,ks=!1;function Dp(e){St===null?St=[e]:St.push(e)}function py(e){ll=!0,Dp(e)}function an(){if(!ks&&St!==null){ks=!0;var e=0,t=H;try{var n=St;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,ll=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),dp(xu,an),i}finally{H=t,ks=!1}}return null}var Qn=[],Kn=0,Ao=null,Lo=0,Ue=[],He=0,_n=null,kt=1,Et="";function hn(e,t){Qn[Kn++]=Lo,Qn[Kn++]=Ao,Ao=e,Lo=t}function Bp(e,t,n){Ue[He++]=kt,Ue[He++]=Et,Ue[He++]=_n,_n=e;var r=kt;e=Et;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var o=32-nt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-nt(t)+i|n<<i|r,Et=o+e}else kt=1<<o|n<<i|r,Et=e}function Ru(e){e.return!==null&&(hn(e,1),Bp(e,1,0))}function Tu(e){for(;e===Ao;)Ao=Qn[--Kn],Qn[Kn]=null,Lo=Qn[--Kn],Qn[Kn]=null;for(;e===_n;)_n=Ue[--He],Ue[He]=null,Et=Ue[--He],Ue[He]=null,kt=Ue[--He],Ue[He]=null}var Fe=null,Ne=null,q=!1,et=null;function Up(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ne=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:kt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ne=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(q){var t=Ne;if(t){var n=t;if(!cd(e,t)){if(Sa(e))throw Error(C(418));t=Kt(n.nextSibling);var r=Fe;t&&cd(e,t)?Up(r,n):(e.flags=e.flags&-4097|2,q=!1,Fe=e)}}else{if(Sa(e))throw Error(C(418));e.flags=e.flags&-4097|2,q=!1,Fe=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Gi(e){if(e!==Fe)return!1;if(!q)return dd(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ya(e.type,e.memoizedProps)),t&&(t=Ne)){if(Sa(e))throw Hp(),Error(C(418));for(;t;)Up(e,t),t=Kt(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Fe?Kt(e.stateNode.nextSibling):null;return!0}function Hp(){for(var e=Ne;e;)e=Kt(e.nextSibling)}function ur(){Ne=Fe=null,q=!1}function Au(e){et===null?et=[e]:et.push(e)}var hy=At.ReactCurrentBatchConfig;function Je(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var No=sn(null),Fo=null,Yn=null,Lu=null;function Nu(){Lu=Yn=Fo=null}function Fu(e){var t=No.current;Y(No),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Fo=e,Lu=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Lu!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Fo===null)throw Error(C(308));Yn=e,Fo.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var vn=null;function bu(e){vn===null?vn=[e]:vn.push(e)}function Wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;l=0,d=u=a=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(v,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(v,c,p):g,p==null)break e;c=ee({},c,p);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rn|=l,e.lanes=l,e.memoizedState=c}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Gp=new Wf.Component().refs;function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=qt(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(rt(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=qt(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(rt(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=qt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(rt(t,e,r,n),io(t,e,r))}};function hd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,o):!0}function Qp(e,t,n){var r=!1,i=nn,o=t.contextType;return typeof o=="object"&&o!==null?o=Qe(o):(i=Te(t)?jn:ke.current,r=t.contextTypes,o=(r=r!=null)?ar(e,i):nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Gp,Iu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qe(o):(o=Te(t)?jn:ke.current,i.context=ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ca(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sl.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Gp&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function Kp(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Jt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,x){return f===null||f.tag!==6?(f=Rs(m,h.mode,x),f.return=h,f):(f=i(f,m),f.return=h,f)}function a(h,f,m,x){var E=m.type;return E===Bn?d(h,f,m.props.children,x,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&gd(E)===f.type)?(x=i(f,m.props),x.ref=Nr(h,f,m),x.return=h,x):(x=co(m.type,m.key,m.props,null,h.mode,x),x.ref=Nr(h,f,m),x.return=h,x)}function u(h,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ts(m,h.mode,x),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,x,E){return f===null||f.tag!==7?(f=kn(m,h.mode,x,E),f.return=h,f):(f=i(f,m),f.return=h,f)}function c(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Rs(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ii:return m=co(f.type,f.key,f.props,null,h.mode,m),m.ref=Nr(h,null,f),m.return=h,m;case Dn:return f=Ts(f,h.mode,m),f.return=h,f;case zt:var x=f._init;return c(h,x(f._payload),m)}if(zr(f)||Or(f))return f=kn(f,h.mode,m,null),f.return=h,f;Qi(h,f)}return null}function p(h,f,m,x){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:return m.key===E?a(h,f,m,x):null;case Dn:return m.key===E?u(h,f,m,x):null;case zt:return E=m._init,p(h,f,E(m._payload),x)}if(zr(m)||Or(m))return E!==null?null:d(h,f,m,x,null);Qi(h,m)}return null}function v(h,f,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,s(f,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ii:return h=h.get(x.key===null?m:x.key)||null,a(f,h,x,E);case Dn:return h=h.get(x.key===null?m:x.key)||null,u(f,h,x,E);case zt:var _=x._init;return v(h,f,m,_(x._payload),E)}if(zr(x)||Or(x))return h=h.get(m)||null,d(f,h,x,E,null);Qi(f,x)}return null}function g(h,f,m,x){for(var E=null,_=null,k=f,T=f=0,M=null;k!==null&&T<m.length;T++){k.index>T?(M=k,k=null):M=k.sibling;var A=p(h,k,m[T],x);if(A===null){k===null&&(k=M);break}e&&k&&A.alternate===null&&t(h,k),f=o(A,f,T),_===null?E=A:_.sibling=A,_=A,k=M}if(T===m.length)return n(h,k),q&&hn(h,T),E;if(k===null){for(;T<m.length;T++)k=c(h,m[T],x),k!==null&&(f=o(k,f,T),_===null?E=k:_.sibling=k,_=k);return q&&hn(h,T),E}for(k=r(h,k);T<m.length;T++)M=v(k,h,T,m[T],x),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?T:M.key),f=o(M,f,T),_===null?E=M:_.sibling=M,_=M);return e&&k.forEach(function(se){return t(h,se)}),q&&hn(h,T),E}function y(h,f,m,x){var E=Or(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var _=E=null,k=f,T=f=0,M=null,A=m.next();k!==null&&!A.done;T++,A=m.next()){k.index>T?(M=k,k=null):M=k.sibling;var se=p(h,k,A.value,x);if(se===null){k===null&&(k=M);break}e&&k&&se.alternate===null&&t(h,k),f=o(se,f,T),_===null?E=se:_.sibling=se,_=se,k=M}if(A.done)return n(h,k),q&&hn(h,T),E;if(k===null){for(;!A.done;T++,A=m.next())A=c(h,A.value,x),A!==null&&(f=o(A,f,T),_===null?E=A:_.sibling=A,_=A);return q&&hn(h,T),E}for(k=r(h,k);!A.done;T++,A=m.next())A=v(k,h,T,A.value,x),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=o(A,f,T),_===null?E=A:_.sibling=A,_=A);return e&&k.forEach(function(cn){return t(h,cn)}),q&&hn(h,T),E}function P(h,f,m,x){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:e:{for(var E=m.key,_=f;_!==null;){if(_.key===E){if(E=m.type,E===Bn){if(_.tag===7){n(h,_.sibling),f=i(_,m.props.children),f.return=h,h=f;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&gd(E)===_.type){n(h,_.sibling),f=i(_,m.props),f.ref=Nr(h,_,m),f.return=h,h=f;break e}n(h,_);break}else t(h,_);_=_.sibling}m.type===Bn?(f=kn(m.props.children,h.mode,x,m.key),f.return=h,h=f):(x=co(m.type,m.key,m.props,null,h.mode,x),x.ref=Nr(h,f,m),x.return=h,h=x)}return l(h);case Dn:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ts(m,h.mode,x),f.return=h,h=f}return l(h);case zt:return _=m._init,P(h,f,_(m._payload),x)}if(zr(m))return g(h,f,m,x);if(Or(m))return y(h,f,m,x);Qi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Rs(m,h.mode,x),f.return=h,h=f),l(h)):n(h,f)}return P}var cr=Kp(!0),Yp=Kp(!1),ji={},ht=sn(ji),ci=sn(ji),di=sn(ji);function wn(e){if(e===ji)throw Error(C(174));return e}function $u(e,t){switch(G(di,t),G(ci,e),G(ht,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}Y(ht),G(ht,t)}function dr(){Y(ht),Y(ci),Y(di)}function Xp(e){wn(di.current);var t=wn(ht.current),n=ra(t,e.type);t!==n&&(G(ci,e),G(ht,n))}function zu(e){ci.current===e&&(Y(ht),Y(ci))}var J=sn(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function Mu(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var oo=At.ReactCurrentDispatcher,Cs=At.ReactCurrentBatchConfig,On=0,Z=null,ae=null,ce=null,$o=!1,Kr=!1,fi=0,my=0;function ye(){throw Error(C(321))}function Du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Bu(e,t,n,r,i,o){if(On=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?wy:xy,e=n(r,i),Kr){o=0;do{if(Kr=!1,fi=0,25<=o)throw Error(C(301));o+=1,ce=ae=null,t.updateQueue=null,oo.current=Sy,e=n(r,i)}while(Kr)}if(oo.current=zo,t=ae!==null&&ae.next!==null,On=0,ce=ae=Z=null,$o=!1,t)throw Error(C(300));return e}function Uu(){var e=fi!==0;return fi=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function pi(e,t){return typeof t=="function"?t(e):t}function Ps(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if((On&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,Z.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,ot(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ot(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qp(){}function Jp(e,t){var n=Z,r=Ke(),i=t(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Hu(th.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,hi(9,eh.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(C(349));On&30||Zp(n,t,i)}return i}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eh(e,t,n,r){t.value=n,t.getSnapshot=r,nh(t)&&rh(e)}function th(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function rh(e){var t=Ot(e,1);t!==null&&rt(t,e,1,-1)}function yd(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=vy.bind(null,Z,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ih(){return Ke().memoizedState}function lo(e,t,n,r){var i=ut();Z.flags|=e,i.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(ae!==null){var l=ae.memoizedState;if(o=l.destroy,r!==null&&Du(r,l.deps)){i.memoizedState=hi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=hi(1|t,n,o,r)}function vd(e,t){return lo(8390656,8,e,t)}function Hu(e,t){return al(2048,8,e,t)}function oh(e,t){return al(4,2,e,t)}function lh(e,t){return al(4,4,e,t)}function sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,sh.bind(null,t,e),n)}function Wu(){}function uh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dh(e,t,n){return On&21?(ot(n,t)||(n=hp(),Z.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function gy(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{H=n,Cs.transition=r}}function fh(){return Ke().memoizedState}function yy(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ph(e))hh(t,n);else if(n=Wp(e,t,n,r),n!==null){var i=Ce();rt(n,e,r,i),mh(n,t,r)}}function vy(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ph(e))hh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,ot(s,l)){var a=t.interleaved;a===null?(i.next=i,bu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Wp(e,t,i,r),n!==null&&(i=Ce(),rt(n,e,r,i),mh(n,t,r))}}function ph(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function hh(e,t){Kr=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var zo={readContext:Qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},wy={readContext:Qe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yy.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:Wu,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=gy.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ut();if(q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));On&30||Zp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vd(th.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,eh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ut(),t=fe.identifierPrefix;if(q){var n=Et,r=kt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=my++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xy={readContext:Qe,useCallback:uh,useContext:Qe,useEffect:Hu,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:ch,useReducer:Ps,useRef:ih,useState:function(){return Ps(pi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ke();return dh(t,ae.memoizedState,e)},useTransition:function(){var e=Ps(pi)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Jp,useId:fh,unstable_isNewReconciler:!1},Sy={readContext:Qe,useCallback:uh,useContext:Qe,useEffect:Hu,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:ch,useReducer:js,useRef:ih,useState:function(){return js(pi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ke();return ae===null?t.memoizedState=e:dh(t,ae.memoizedState,e)},useTransition:function(){var e=js(pi)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Jp,useId:fh,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=Y0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,Ia=r),ja(e,t)},n}function yh(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ja(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ja(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ky;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iy.bind(null,e,t,n),t.then(e,e))}function xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var Ey=At.ReactCurrentOwner,Oe=!1;function Ee(e,t,n,r){t.child=e===null?Yp(t,null,n,r):cr(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Bu(e,t,n,r,o,i),n=Uu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(q&&n&&Ru(t),t.flags|=1,Ee(e,t,r,i),t.child)}function Ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ju(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vh(e,t,o,r,i)):(e=co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(l,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function vh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(li(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return _a(e,t,n,r,i)}function wh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(qn,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(qn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(qn,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(qn,Le),Le|=r;return Ee(e,t,i,n),t.child}function xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=Te(n)?jn:ke.current;return o=ar(t,o),rr(t,i),n=Bu(e,t,n,r,o,i),r=Uu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(q&&r&&Ru(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Te(n)){var o=!0;To(t)}else o=!1;if(rr(t,i),t.stateNode===null)so(e,t),Qp(t,n,r),Pa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Te(n)?jn:ke.current,u=ar(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&md(t,l,r,u),Mt=!1;var p=t.memoizedState;l.state=p,bo(t,r,l,i),a=t.memoizedState,s!==r||p!==a||Re.current||Mt?(typeof d=="function"&&(Ca(t,n,d,r),a=t.memoizedState),(s=Mt||hd(t,n,s,r,p,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Je(t.type,s),l.props=u,c=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Te(n)?jn:ke.current,a=ar(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||p!==a)&&md(t,l,r,a),Mt=!1,p=t.memoizedState,l.state=p,bo(t,r,l,i);var g=t.memoizedState;s!==c||p!==g||Re.current||Mt?(typeof v=="function"&&(Ca(t,n,v,r),g=t.memoizedState),(u=Mt||hd(t,n,u,r,p,g,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,o,i)}function Oa(e,t,n,r,i,o){xh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ud(t,n,!1),Rt(e,t,o);r=t.stateNode,Ey.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,s,o)):Ee(e,t,s,o),t.memoizedState=r.state,i&&ud(t,n,!0),t.child}function Sh(e){var t=e.stateNode;t.pendingContext?ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(e,t.context,!1),$u(e,t.containerInfo)}function Pd(e,t,n,r,i){return ur(),Au(i),t.flags|=256,Ee(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function kh(e,t,n){var r=t.pendingProps,i=J.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(J,i&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=dl(l,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ta(n),t.memoizedState=Ra,e):Vu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Cy(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Jt(s,o):(o=kn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ta(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return o=e.child,e=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&Au(r),cr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cy(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=_s(Error(C(422))),Ki(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=dl({mode:"visible",children:r.children},i,0,null),o=kn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=Ta(l),t.memoizedState=Ra,o);if(!(t.mode&1))return Ki(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=_s(o,r,void 0),Ki(e,t,l,r)}if(s=(l&e.childLanes)!==0,Oe||s){if(r=fe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),rt(r,e,i,-1))}return qu(),r=_s(Error(C(421))),Ki(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$y.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Kt(i.nextSibling),Fe=t,q=!0,et=null,e!==null&&(Ue[He++]=kt,Ue[He++]=Et,Ue[He++]=_n,kt=e.id,Et=e.overflow,_n=t),t=Vu(t,r.children),t.flags|=4096,t)}function jd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,t);else if(e.tag===19)jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Os(t,!0,n,null,o);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Py(e,t,n){switch(t.tag){case 3:Sh(t),ur();break;case 5:Xp(t);break;case 1:Te(t.type)&&To(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(No,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?kh(e,t,n):(G(J,J.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,wh(e,t,n)}return Rt(e,t,n)}var Ch,Aa,Ph,jh;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Aa=function(){};Ph=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(ht.current);var o=null;switch(n){case"input":i=Zs(e,i),r=Zs(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=na(e,i),r=na(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}ia(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jy(e,t,n){var r=t.pendingProps;switch(Tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Te(t.type)&&Ro(),ve(t),null;case 3:return r=t.stateNode,dr(),Y(Re),Y(ke),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Ma(et),et=null))),Aa(e,t),ve(t),null;case 5:zu(t);var i=wn(di.current);if(n=t.type,e!==null&&t.stateNode!=null)Ph(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=wn(ht.current),Gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[dt]=t,r[ui]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)Q(Dr[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":bc(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":$c(r,o),Q("invalid",r)}ia(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",""+s]):Zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":$i(r),Ic(r,o,!0);break;case"textarea":$i(r),zc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[ui]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(l=oa(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)Q(Dr[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":bc(e,r),i=Zs(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":$c(e,r),i=na(e,r),Q("invalid",e);break;default:i=r}ia(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?np(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ep(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ei(e,a):typeof a=="number"&&ei(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",e):a!=null&&mu(e,o,a,l))}switch(n){case"input":$i(e),Ic(e,r,!1);break;case"textarea":$i(e),zc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=wn(di.current),wn(ht.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(o=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ne!==null&&t.mode&1&&!(t.flags&128))Hp(),ur(),t.flags|=98560,o=!1;else if(o=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[dt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&(Ma(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):qu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return dr(),Aa(e,t),e===null&&si(t.stateNode.containerInfo),ve(t),null;case 10:return Fu(t.type._context),ve(t),null;case 17:return Te(t.type)&&Ro(),ve(t),null;case 19:if(Y(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Fr(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Io(e),l!==null){for(t.flags|=128,Fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>pr&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Io(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _y(e,t){switch(Tu(t),t.tag){case 1:return Te(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Y(Re),Y(ke),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return dr(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var Yi=!1,xe=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,R=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function La(e,t,n){try{n()}catch(r){te(e,t,r)}}var _d=!1;function Ry(e,t){if(ma=Po,e=Tp(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(s=l+i),c!==o||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break t;if(p===n&&++u===i&&(s=l),p===o&&++d===r&&(a=l),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ga={focusedElem:e,selectionRange:n},Po=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,P=g.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Je(t.type,y),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=_d,_d=!1,g}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&La(t,n,o)}i=i.next}while(i!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _h(e){var t=e.alternate;t!==null&&(e.alternate=null,_h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[ui],delete t[wa],delete t[dy],delete t[fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oh(e){return e.tag===5||e.tag===3||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}var he=null,Ze=!1;function bt(e,t,n){for(n=n.child;n!==null;)Rh(e,t,n),n=n.sibling}function Rh(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:xe||Xn(n,t);case 6:var r=he,i=Ze;he=null,bt(e,t,n),he=r,Ze=i,he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?Ss(e.parentNode,n):e.nodeType===1&&Ss(e,n),ii(e)):Ss(he,n.stateNode));break;case 4:r=he,i=Ze,he=n.stateNode.containerInfo,Ze=!0,bt(e,t,n),he=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&La(n,t,l),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!xe&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,bt(e,t,n),xe=r):bt(e,t,n);break;default:bt(e,t,n)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oy),t.forEach(function(r){var i=zy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Ze=!1;break e;case 3:he=s.stateNode.containerInfo,Ze=!0;break e;case 4:he=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(he===null)throw Error(C(160));Rh(o,l,i),he=null,Ze=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Th(t,e),t=t.sibling}function Th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),at(e),r&4){try{Yr(3,e,e.return),ul(3,e)}catch(y){te(e,e.return,y)}try{Yr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:qe(t,e),at(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(qe(t,e),at(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var i=e.stateNode;try{ei(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&qf(i,o),oa(s,l);var u=oa(s,o);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?np(i,c):d==="dangerouslySetInnerHTML"?ep(i,c):d==="children"?ei(i,c):mu(i,d,c,u)}switch(s){case"input":ea(i,o);break;case"textarea":Jf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Zn(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ui]=o}catch(y){te(e,e.return,y)}}break;case 6:if(qe(t,e),at(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){te(e,e.return,y)}}break;case 3:if(qe(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:qe(t,e),at(e);break;case 13:qe(t,e),at(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=re())),r&4&&Rd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,qe(t,e),xe=u):qe(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(p=R,v=p.child,p.tag){case 0:case 11:case 14:case 15:Yr(4,p,p.return);break;case 1:Xn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Xn(p,p.return);break;case 22:if(p.memoizedState!==null){Ad(c);continue}}v!==null?(v.return=p,R=v):Ad(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tp("display",l))}catch(y){te(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){te(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qe(t,e),at(e),r&4&&Rd(e);break;case 21:break;default:qe(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oh(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ei(i,""),r.flags&=-33);var o=Od(e);ba(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Od(e);Fa(e,s,l);break;default:throw Error(C(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ty(e,t,n){R=e,Ah(e)}function Ah(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Yi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||xe;s=Yi;var u=xe;if(Yi=l,(xe=a)&&!u)for(R=i;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?Ld(i):a!==null?(a.return=l,R=a):Ld(i);for(;o!==null;)R=o,Ah(o),o=o.sibling;R=i,Yi=s,xe=u}Td(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Td(e)}}function Td(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ii(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||t.flags&512&&Na(t)}catch(p){te(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ad(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ld(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{Na(t)}catch(a){te(t,o,a)}break;case 5:var l=t.return;try{Na(t)}catch(a){te(t,l,a)}}}catch(a){te(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Ay=Math.ceil,Mo=At.ReactCurrentDispatcher,Gu=At.ReactCurrentOwner,Ve=At.ReactCurrentBatchConfig,D=0,fe=null,oe=null,me=0,Le=0,qn=sn(0),ue=0,mi=null,Rn=0,cl=0,Qu=0,Xr=null,_e=null,Ku=0,pr=1/0,wt=null,Do=!1,Ia=null,Xt=null,Xi=!1,Wt=null,Bo=0,qr=0,$a=null,ao=-1,uo=0;function Ce(){return D&6?re():ao!==-1?ao:ao=re()}function qt(e){return e.mode&1?D&2&&me!==0?me&-me:hy.transition!==null?(uo===0&&(uo=hp()),uo):(e=H,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function rt(e,t,n,r){if(50<qr)throw qr=0,$a=null,Error(C(185));Ei(e,n,r),(!(D&2)||e!==fe)&&(e===fe&&(!(D&2)&&(cl|=n),ue===4&&Bt(e,me)),Ae(e,r),n===1&&D===0&&!(t.mode&1)&&(pr=re()+500,ll&&an()))}function Ae(e,t){var n=e.callbackNode;hg(e,t);var r=Co(e,e===fe?me:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?py(Nd.bind(null,e)):Dp(Nd.bind(null,e)),uy(function(){!(D&6)&&an()}),n=null;else{switch(mp(r)){case 1:n=xu;break;case 4:n=fp;break;case 16:n=Eo;break;case 536870912:n=pp;break;default:n=Eo}n=Mh(n,Lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lh(e,t){if(ao=-1,uo=0,D&6)throw Error(C(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=Co(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uo(e,r);else{t=r;var i=D;D|=2;var o=Fh();(fe!==e||me!==t)&&(wt=null,pr=re()+500,Sn(e,t));do try{Fy();break}catch(s){Nh(e,s)}while(1);Nu(),Mo.current=o,D=i,oe!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=ca(e),i!==0&&(r=i,t=za(e,i))),t===1)throw n=mi,Sn(e,0),Bt(e,r),Ae(e,re()),n;if(t===6)Bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ly(i)&&(t=Uo(e,r),t===2&&(o=ca(e),o!==0&&(r=o,t=za(e,o))),t===1))throw n=mi,Sn(e,0),Bt(e,r),Ae(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:mn(e,_e,wt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Ku+500-re(),10<t)){if(Co(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=va(mn.bind(null,e,_e,wt),t);break}mn(e,_e,wt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-nt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ay(r/1960))-r,10<r){e.timeoutHandle=va(mn.bind(null,e,_e,wt),r);break}mn(e,_e,wt);break;case 5:mn(e,_e,wt);break;default:throw Error(C(329))}}}return Ae(e,re()),e.callbackNode===n?Lh.bind(null,e):null}function za(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=_e,_e=n,t!==null&&Ma(t)),e}function Ma(e){_e===null?_e=e:_e.push.apply(_e,e)}function Ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Qu,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(D&6)throw Error(C(327));ir();var t=Co(e,0);if(!(t&1))return Ae(e,re()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=ca(e);r!==0&&(t=r,n=za(e,r))}if(n===1)throw n=mi,Sn(e,0),Bt(e,t),Ae(e,re()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,_e,wt),Ae(e,re()),null}function Yu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(pr=re()+500,ll&&an())}}function Tn(e){Wt!==null&&Wt.tag===0&&!(D&6)&&ir();var t=D;D|=1;var n=Ve.transition,r=H;try{if(Ve.transition=null,H=1,e)return e()}finally{H=r,Ve.transition=n,D=t,!(D&6)&&an()}}function Xu(){Le=qn.current,Y(qn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ay(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:dr(),Y(Re),Y(ke),Mu();break;case 5:zu(r);break;case 4:dr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Fu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(fe=e,oe=e=Jt(e.current,null),me=Le=t,ue=0,mi=null,Qu=cl=Rn=0,_e=Xr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}vn=null}return e}function Nh(e,t){do{var n=oe;try{if(Nu(),oo.current=zo,$o){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(On=0,ce=ae=Z=null,Kr=!1,fi=0,Gu.current=null,n===null||n.return===null){ue=1,mi=t,oe=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=xd(l);if(v!==null){v.flags&=-257,Sd(v,l,s,o,t),v.mode&1&&wd(o,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(a),t.updateQueue=y}else g.add(a);break e}else{if(!(t&1)){wd(o,u,t),qu();break e}a=Error(C(426))}}else if(q&&s.mode&1){var P=xd(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Sd(P,l,s,o,t),Au(fr(a,s));break e}}o=a=fr(a,s),ue!==4&&(ue=2),Xr===null?Xr=[o]:Xr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=gh(o,a,t);fd(o,h);break e;case 1:s=a;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xt===null||!Xt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=yh(o,s,t);fd(o,x);break e}}o=o.return}while(o!==null)}Ih(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Fh(){var e=Mo.current;return Mo.current=zo,e===null?zo:e}function qu(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Rn&268435455)&&!(cl&268435455)||Bt(fe,me)}function Uo(e,t){var n=D;D|=2;var r=Fh();(fe!==e||me!==t)&&(wt=null,Sn(e,t));do try{Ny();break}catch(i){Nh(e,i)}while(1);if(Nu(),D=n,Mo.current=r,oe!==null)throw Error(C(261));return fe=null,me=0,ue}function Ny(){for(;oe!==null;)bh(oe)}function Fy(){for(;oe!==null&&!og();)bh(oe)}function bh(e){var t=zh(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Ih(e):oe=t,Gu.current=null}function Ih(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_y(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(n=jy(n,t,Le),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function mn(e,t,n){var r=H,i=Ve.transition;try{Ve.transition=null,H=1,by(e,t,n,r)}finally{Ve.transition=i,H=r}return null}function by(e,t,n,r){do ir();while(Wt!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mg(e,o),e===fe&&(oe=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,Mh(Eo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var l=H;H=1;var s=D;D|=4,Gu.current=null,Ry(e,n),Th(n,e),ty(ga),Po=!!ma,ga=ma=null,e.current=n,Ty(n),lg(),D=s,H=l,Ve.transition=o}else e.current=n;if(Xi&&(Xi=!1,Wt=e,Bo=i),o=e.pendingLanes,o===0&&(Xt=null),ug(n.stateNode),Ae(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,e=Ia,Ia=null,e;return Bo&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===$a?qr++:(qr=0,$a=e):qr=0,an(),null}function ir(){if(Wt!==null){var e=mp(Bo),t=Ve.transition,n=H;try{if(Ve.transition=null,H=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Bo=0,D&6)throw Error(C(331));var i=D;for(D|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Yr(8,d,o)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var p=d.sibling,v=d.return;if(_h(d),d===u){R=null;break}if(p!==null){p.return=v,R=p;break}R=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=f;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ul(9,s)}}catch(E){te(s,s.return,E)}if(s===l){R=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,R=x;break e}R=s.return}}if(D=i,an(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{H=n,Ve.transition=t}}return!1}function Fd(e,t,n){t=fr(n,t),t=gh(e,t,1),e=Yt(e,t,1),t=Ce(),e!==null&&(Ei(e,1,t),Ae(e,t))}function te(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=fr(n,e),e=yh(t,e,1),t=Yt(t,e,1),e=Ce(),t!==null&&(Ei(t,1,e),Ae(t,e));break}}t=t.return}}function Iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-Ku?Sn(e,0):Qu|=n),Ae(e,t)}function $h(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Ce();e=Ot(e,t),e!==null&&(Ei(e,t,n),Ae(e,n))}function $y(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$h(e,n)}function zy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),$h(e,n)}var zh;zh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Py(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,q&&t.flags&1048576&&Bp(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=ar(t,ke.current);rr(t,n),i=Bu(null,t,r,e,i,n);var o=Uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iu(t),i.updater=sl,t.stateNode=i,i._reactInternals=t,Pa(t,r,e,n),t=Oa(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Ru(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Dy(r),e=Je(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=Ed(null,t,r,Je(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Cd(e,t,r,i,n);case 3:e:{if(Sh(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vp(e,t),bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fr(Error(C(423)),t),t=Pd(e,t,r,n,i);break e}else if(r!==i){i=fr(Error(C(424)),t),t=Pd(e,t,r,n,i);break e}else for(Ne=Kt(t.stateNode.containerInfo.firstChild),Fe=t,q=!0,et=null,n=Yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=Rt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Xp(t),e===null&&ka(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ya(r,i)?l=null:o!==null&&ya(r,o)&&(t.flags|=32),xh(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&ka(t),null;case 13:return kh(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),kd(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,G(No,r._currentValue),r._currentValue=l,o!==null)if(ot(o.value,l)){if(o.children===i.children&&!Re.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ct(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ea(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ea(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=Qe(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Ed(e,t,r,i,n);case 15:return vh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),so(e,t),t.tag=1,Te(r)?(e=!0,To(t)):e=!1,rr(t,n),Qp(t,r,i),Pa(t,r,i,n),Oa(null,t,r,!0,e,n);case 19:return Eh(e,t,n);case 22:return wh(e,t,n)}throw Error(C(156,t.tag))};function Mh(e,t){return dp(e,t)}function My(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new My(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dy(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===vu)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ju(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return kn(n.children,i,o,t);case gu:l=8,i|=8;break;case Ys:return e=We(12,n,t,i|2),e.elementType=Ys,e.lanes=o,e;case Xs:return e=We(13,n,t,i),e.elementType=Xs,e.lanes=o,e;case qs:return e=We(19,n,t,i),e.elementType=qs,e.lanes=o,e;case Kf:return dl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gf:l=10;break e;case Qf:l=9;break e;case yu:l=11;break e;case vu:l=14;break e;case zt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=We(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=We(22,e,r,t),e.elementType=Kf,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function By(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,o,l,s,a){return e=new By(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(o),e}function Uy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return nn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Te(n))return Mp(e,n,t)}return t}function Bh(e,t,n,r,i,o,l,s,a){return e=Zu(n,r,!0,e,i,o,l,s,a),e.context=Dh(null),n=e.current,r=Ce(),i=qt(n),o=Ct(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,Ei(e,i,r),Ae(e,r),e}function fl(e,t,n,r){var i=t.current,o=Ce(),l=qt(i);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,l),e!==null&&(rt(e,i,l,o),io(e,i,l)),l}function Ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function Hy(){return null}var Uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}pl.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));fl(e,t,null,null)};pl.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){fl(null,e,null,null)}),t[_t]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&xp(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Wy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ho(l);o.call(u)}}var l=Bh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=l,e[_t]=l.current,si(e.nodeType===8?e.parentNode:e),Tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ho(a);s.call(u)}}var a=Zu(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=a,e[_t]=a.current,si(e.nodeType===8?e.parentNode:e),Tn(function(){fl(t,a,n,r)}),a}function ml(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Ho(l);s.call(a)}}fl(t,l,e,i)}else l=Wy(n,t,e,i,r);return Ho(l)}gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(Su(t,n|1),Ae(t,re()),!(D&6)&&(pr=re()+500,an()))}break;case 13:Tn(function(){var r=Ot(e,1);if(r!==null){var i=Ce();rt(r,e,1,i)}}),ec(e,1)}};ku=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ce();rt(t,e,134217728,n)}ec(e,134217728)}};yp=function(e){if(e.tag===13){var t=qt(e),n=Ot(e,t);if(n!==null){var r=Ce();rt(n,e,t,r)}ec(e,t)}};vp=function(){return H};wp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};sa=function(e,t,n){switch(t){case"input":if(ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ol(r);if(!i)throw Error(C(90));Xf(r),ea(r,i)}}}break;case"textarea":Jf(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};op=Yu;lp=Tn;var Vy={usingClientEntryPoint:!1,Events:[Pi,Vn,ol,rp,ip,Yu]},br={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gy={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{tl=qi.inject(Gy),pt=qi}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(C(200));return Uy(e,t,null,n)};$e.createRoot=function(e,t){if(!nc(e))throw Error(C(299));var n=!1,r="",i=Uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,si(e.nodeType===8?e.parentNode:e),new tc(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return Tn(e)};$e.hydrate=function(e,t,n){if(!hl(t))throw Error(C(200));return ml(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Uh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Bh(t,null,e,1,n??null,i,!1,o,l),e[_t]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pl(t)};$e.render=function(e,t,n){if(!hl(t))throw Error(C(200));return ml(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!hl(e))throw Error(C(40));return e._reactRootContainer?(Tn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};$e.unstable_batchedUpdates=Yu;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ml(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh)}catch(e){console.error(e)}}Hh(),Bf.exports=$e;var Wh=Bf.exports,$d=Wh;Qs.createRoot=$d.createRoot,Qs.hydrateRoot=$d.hydrateRoot;var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Se.apply(this,arguments)};function gi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",Jr="-moz-",U="-webkit-",Vh="comm",gl="rule",rc="decl",Qy="@import",Gh="@keyframes",Ky="@layer",Yy=Math.abs,ic=String.fromCharCode,Da=Object.assign;function Xy(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function Qh(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function fo(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function ct(e){return e.length}function Kh(e){return e.length}function Br(e,t){return t.push(e),e}function qy(e,t){return e.map(t).join("")}function zd(e,t){return e.filter(function(n){return!xt(n,t)})}var yl=1,mr=1,Yh=0,Ye=0,ie=0,Cr="";function vl(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yl,column:mr,length:l,return:"",siblings:s}}function $t(e,t){return Da(vl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=$t(e.root,{children:[e]});Br(e,e.siblings)}function Jy(){return ie}function Zy(){return ie=Ye>0?de(Cr,--Ye):0,mr--,ie===10&&(mr=1,yl--),ie}function it(){return ie=Ye<Yh?de(Cr,Ye++):0,mr++,ie===10&&(mr=1,yl++),ie}function En(){return de(Cr,Ye)}function po(){return Ye}function wl(e,t){return hr(Cr,e,t)}function Ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ev(e){return yl=mr=1,Yh=ct(Cr=e),Ye=0,[]}function tv(e){return Cr="",e}function As(e){return Qh(wl(Ye-1,Ua(e===91?e+2:e===40?e+1:e)))}function nv(e){for(;(ie=En())&&ie<33;)it();return Ba(e)>2||Ba(ie)>3?"":" "}function rv(e,t){for(;--t&&it()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return wl(e,po()+(t<6&&En()==32&&it()==32))}function Ua(e){for(;it();)switch(ie){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Ua(ie);break;case 40:e===41&&Ua(e);break;case 92:it();break}return Ye}function iv(e,t){for(;it()&&e+ie!==47+10;)if(e+ie===42+42&&En()===47)break;return"/*"+wl(t,Ye-1)+"*"+ic(e===47?e:it())}function ov(e){for(;!Ba(En());)it();return wl(e,Ye)}function lv(e){return tv(ho("",null,null,null,[""],e=ev(e),0,[0],e))}function ho(e,t,n,r,i,o,l,s,a){for(var u=0,d=0,c=l,p=0,v=0,g=0,y=1,P=1,h=1,f=0,m="",x=i,E=o,_=r,k=m;P;)switch(g=f,f=it()){case 40:if(g!=108&&de(k,c-1)==58){fo(k+=b(As(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=As(f);break;case 9:case 10:case 13:case 32:k+=nv(g);break;case 92:k+=rv(po()-1,7);continue;case 47:switch(En()){case 42:case 47:Br(sv(iv(it(),po()),t,n,a),a);break;default:k+="/"}break;case 123*y:s[u++]=ct(k)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+d:h==-1&&(k=b(k,/\f/g,"")),v>0&&ct(k)-c&&Br(v>32?Dd(k+";",r,n,c-1,a):Dd(b(k," ","")+";",r,n,c-2,a),a);break;case 59:k+=";";default:if(Br(_=Md(k,t,n,u,d,i,s,m,x=[],E=[],c,o),o),f===123)if(d===0)ho(k,t,_,_,x,o,c,s,E);else switch(p===99&&de(k,3)===110?100:p){case 100:case 108:case 109:case 115:ho(e,_,_,r&&Br(Md(e,_,_,0,0,i,s,m,i,x=[],c,E),E),i,E,c,s,r?x:E);break;default:ho(k,_,_,_,[""],E,0,s,E)}}u=d=v=0,y=h=1,m=k="",c=l;break;case 58:c=1+ct(k),v=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Zy()==125)continue}switch(k+=ic(f),f*y){case 38:h=d>0?1:(k+="\f",-1);break;case 44:s[u++]=(ct(k)-1)*h,h=1;break;case 64:En()===45&&(k+=As(it())),p=En(),d=c=ct(m=k+=ov(po())),f++;break;case 45:g===45&&ct(k)==2&&(y=0)}}return o}function Md(e,t,n,r,i,o,l,s,a,u,d,c){for(var p=i-1,v=i===0?o:[""],g=Kh(v),y=0,P=0,h=0;y<r;++y)for(var f=0,m=hr(e,p+1,p=Yy(P=l[y])),x=e;f<g;++f)(x=Qh(P>0?v[f]+" "+m:b(m,/&\f/g,v[f])))&&(a[h++]=x);return vl(e,t,n,i===0?gl:s,a,u,d,c)}function sv(e,t,n,r){return vl(e,t,n,Vh,ic(Jy()),hr(e,2,-2),0,r)}function Dd(e,t,n,r,i){return vl(e,t,n,rc,hr(e,0,r),hr(e,r+1,-1),r,i)}function Xh(e,t,n){switch(Xy(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Jr+e+K+e+e;case 5936:switch(de(e,t+11)){case 114:return U+e+K+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+K+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+K+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+K+e+e;case 6165:return U+e+K+"flex-"+e+e;case 5187:return U+e+b(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return U+e+K+"flex-item-"+b(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":K+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return U+e+K+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+K+b(e,"shrink","negative")+e;case 5292:return U+e+K+b(e,"basis","preferred-size")+e;case 6060:return U+"box-"+b(e,"-grow","")+U+e+K+b(e,"grow","positive")+e;case 4554:return U+b(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!xt(e,/flex-|baseline/))return K+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return K+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xt(r.props,/grid-\w+-end/)})?~fo(e+(n=n[t].value),"span")?e:K+b(e,"-start","")+e+K+"grid-row-span:"+(~fo(n,"span")?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":K+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:K+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ct(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Jr+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fo(e,"stretch")?Xh(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return K+i+":"+o+u+(l?K+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(de(e,t+6)===121)return b(e,":",":"+U)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(de(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+K+"$2box$3")+e;case 100:return b(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function Wo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function av(e,t,n,r){switch(e.type){case Ky:if(e.children.length)break;case Qy:case rc:return e.return=e.return||e.value;case Vh:return"";case Gh:return e.return=e.value+"{"+Wo(e.children,r)+"}";case gl:if(!ct(e.value=e.props.join(",")))return""}return ct(n=Wo(e.children,r))?e.return=e.value+"{"+n+"}":""}function uv(e){var t=Kh(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function cv(e){return function(t){t.root||(t=t.return)&&e(t)}}function dv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rc:e.return=Xh(e.value,e.length,n);return;case Gh:return Wo([$t(e,{value:b(e.value,"@","@"+U)})],r);case gl:if(e.length)return qy(n=e.props,function(i){switch(xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn($t(e,{props:[b(i,/:(read-\w+)/,":"+Jr+"$1")]})),Mn($t(e,{props:[i]})),Da(e,{props:zd(n,r)});break;case"::placeholder":Mn($t(e,{props:[b(i,/:(plac\w+)/,":"+U+"input-$1")]})),Mn($t(e,{props:[b(i,/:(plac\w+)/,":"+Jr+"$1")]})),Mn($t(e,{props:[b(i,/:(plac\w+)/,K+"input-$1")]})),Mn($t(e,{props:[i]})),Da(e,{props:zd(n,r)});break}return""})}}var fv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",oc=typeof window<"u"&&"HTMLElement"in window,pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xl=Object.freeze([]),yr=Object.freeze({});function hv(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var qh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gv=/(^-|-$)/g;function Bd(e){return e.replace(mv,"-").replace(gv,"")}var yv=/(a)(d)/gi,Ud=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ha(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ud(t%52)+n;return(Ud(t%52)+n).replace(yv,"$1-$2")}var Ls,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jh=function(e){return Jn(5381,e)};function Zh(e){return Ha(Jh(e)>>>0)}function vv(e){return e.displayName||e.name||"Component"}function Ns(e){return typeof e=="string"&&!0}var em=typeof Symbol=="function"&&Symbol.for,tm=em?Symbol.for("react.memo"):60115,wv=em?Symbol.for("react.forward_ref"):60112,xv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kv=((Ls={})[wv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[tm]=nm,Ls);function Hd(e){return("type"in(t=e)&&t.type.$$typeof)===tm?nm:"$$typeof"in e?kv[e.$$typeof]:xv;var t}var Ev=Object.defineProperty,Cv=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,Pv=Object.getOwnPropertyDescriptor,jv=Object.getPrototypeOf,Vd=Object.prototype;function rm(e,t,n){if(typeof t!="string"){if(Vd){var r=jv(t);r&&r!==Vd&&rm(e,r,n)}var i=Cv(t);Wd&&(i=i.concat(Wd(t)));for(var o=Hd(e),l=Hd(t),s=0;s<i.length;++s){var a=i[s];if(!(a in Sv||n&&n[a]||l&&a in l||o&&a in o)){var u=Pv(t,a);try{Ev(e,a,u)}catch{}}}}return e}function An(e){return typeof e=="function"}function lc(e){return typeof e=="object"&&"styledComponentId"in e}function xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function yi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Va(e,t,n){if(n===void 0&&(n=!1),!n&&!yi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Va(e[r],t[r]);else if(yi(t))for(var r in t)e[r]=Va(e[r],t[r]);return e}function sc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ln(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _v=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ln(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),mo=new Map,Vo=new Map,go=1,Ji=function(e){if(mo.has(e))return mo.get(e);for(;Vo.has(go);)go++;var t=go++;return mo.set(e,t),Vo.set(t,e),t},Ov=function(e,t){go=t+1,mo.set(e,t),Vo.set(t,e)},Rv="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Tv=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Av=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Lv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(Tv);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(Ov(d,u),Av(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function Nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var im=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(gr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=Nv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Fv=function(){function e(t){this.element=im(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Ln(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bv=function(){function e(t){this.element=im(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Iv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gd=oc,$v={isServer:!oc,useCSSOMInjection:!pv},om=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var i=this;this.options=Se(Se({},$v),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oc&&Gd&&(Gd=!1,function(o){for(var l=document.querySelectorAll(Rv),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(gr)!=="active"&&(Lv(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sc(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(c){var p=function(h){return Vo.get(h)}(c);if(p===void 0)return"continue";var v=o.names.get(p),g=l.getGroup(c);if(v===void 0||g.length===0)return"continue";var y="".concat(gr,".g").concat(c,'[id="').concat(p,'"]'),P="";v!==void 0&&v.forEach(function(h){h.length>0&&(P+="".concat(h,","))}),a+="".concat(g).concat(y,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return a}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Iv(i):r?new Fv(i):new bv(i)}(this.options),new _v(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zv=/&/g,Mv=/^\s*\/\/.*$/gm;function lm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lm(n.children,t)),n})}function Dv(e){var t,n,r,i=e===void 0?yr:e,o=i.options,l=o===void 0?yr:o,s=i.plugins,a=s===void 0?xl:s,u=function(p,v,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},d=a.slice();d.push(function(p){p.type===gl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(zv,n).replace(r,u))}),l.prefix&&d.push(dv),d.push(av);var c=function(p,v,g,y){v===void 0&&(v=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(Mv,""),h=lv(g||v?"".concat(g," ").concat(v," { ").concat(P," }"):P);l.namespace&&(h=lm(h,l.namespace));var f=[];return Wo(h,uv(d.concat(cv(function(m){return f.push(m)})))),f};return c.hash=a.length?a.reduce(function(p,v){return v.name||Ln(15),Jn(p,v.name)},5381).toString():"",c}var Bv=new om,Ga=Dv(),sm=Pn.createContext({shouldForwardProp:void 0,styleSheet:Bv,stylis:Ga});sm.Consumer;Pn.createContext(void 0);function Qd(){return L.useContext(sm)}var am=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ga);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sc(this,function(){throw Ln(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ga),this.name+t.hash},e}(),Uv=function(e){return e>="A"&&e<="Z"};function Kd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Uv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var um=function(e){return e==null||e===!1||e===""},cm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!um(o)&&(Array.isArray(o)&&o.isCss||An(o)?r.push("".concat(Kd(i),":"),o,";"):yi(o)?r.push.apply(r,gi(gi(["".concat(i," {")],cm(o),!1),["}"],!1)):r.push("".concat(Kd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cn(e,t,n,r){if(um(e))return[];if(lc(e))return[".".concat(e.styledComponentId)];if(An(e)){if(!An(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Cn(i,t,n,r)}var o;return e instanceof am?n?(e.inject(n,r),[e.getName(r)]):[e]:yi(e)?cm(e):Array.isArray(e)?Array.prototype.concat.apply(xl,e.map(function(l){return Cn(l,t,n,r)})):[e.toString()]}function Hv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(An(n)&&!lc(n))return!1}return!0}var Wv=Jh("6.1.1"),Vv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hv(t),this.componentId=n,this.baseHash=Jn(Wv,n),this.baseStyle=r,om.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=xn(i,this.staticRulesId);else{var o=Wa(Cn(this.rules,t,n,r)),l=Ha(Jn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=xn(i,l),this.staticRulesId=l}else{for(var a=Jn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var p=Wa(Cn(c,t,n,r));a=Jn(a,p+d),u+=p}}if(u){var v=Ha(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=xn(i,v)}}return i},e}(),Go=Pn.createContext(void 0);Go.Consumer;function Gv(e){var t=Pn.useContext(Go),n=L.useMemo(function(){return function(r,i){if(!r)throw Ln(14);if(An(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Ln(8);return i?Se(Se({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Pn.createElement(Go.Provider,{value:n},e.children):null}var Fs={};function Qv(e,t,n){var r=lc(e),i=e,o=!Ns(e),l=t.attrs,s=l===void 0?xl:l,a=t.componentId,u=a===void 0?function(x,E){var _=typeof x!="string"?"sc":Bd(x);Fs[_]=(Fs[_]||0)+1;var k="".concat(_,"-").concat(Zh("6.1.1"+_+Fs[_]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):a,d=t.displayName,c=d===void 0?function(x){return Ns(x)?"styled.".concat(x):"Styled(".concat(vv(x),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Bd(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;g=function(x,E){return y(x,E)&&P(x,E)}}else g=y}var h=new Vv(n,p,r?i.componentStyle:void 0);function f(x,E){return function(_,k,T){var M=_.attrs,A=_.componentStyle,se=_.defaultProps,cn=_.foldedComponentIds,dn=_.styledComponentId,Ni=_.target,rs=Pn.useContext(Go),_r=Qd(),fn=_.shouldForwardProp||_r.shouldForwardProp,O=function(De,vt,Be){for(var st,pn=Se(Se({},vt),{className:void 0,theme:Be}),is=0;is<De.length;is+=1){var Fi=An(st=De[is])?st(pn):st;for(var Ft in Fi)pn[Ft]=Ft==="className"?xn(pn[Ft],Fi[Ft]):Ft==="style"?Se(Se({},pn[Ft]),Fi[Ft]):Fi[Ft]}return vt.className&&(pn.className=xn(pn.className,vt.className)),pn}(M,k,hv(k,rs,se)||yr),N=O.as||Ni,F={};for(var B in O)O[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?F.as=O.forwardedAs:fn&&!fn(B,N)||(F[B]=O[B]));var ne=function(De,vt){var Be=Qd(),st=De.generateAndInjectStyles(vt,Be.styleSheet,Be.stylis);return st}(A,O),Nt=xn(cn,dn);return ne&&(Nt+=" "+ne),O.className&&(Nt+=" "+O.className),F[Ns(N)&&!qh.has(N)?"class":"className"]=Nt,F.ref=T,L.createElement(N,F)}(m,x,E)}f.displayName=c;var m=Pn.forwardRef(f);return m.attrs=v,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=g,m.foldedComponentIds=r?xn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var _=[],k=1;k<arguments.length;k++)_[k-1]=arguments[k];for(var T=0,M=_;T<M.length;T++)Va(E,M[T],!0);return E}({},i.defaultProps,x):x}}),sc(m,function(){return".".concat(m.styledComponentId)}),o&&rm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Yd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Xd=function(e){return Object.assign(e,{isCss:!0})};function dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(An(e)||yi(e)){var r=e;return Xd(Cn(Yd(xl,gi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Cn(i):Xd(Cn(Yd(i,t)))}function Qa(e,t,n){if(n===void 0&&(n=yr),!t)throw Ln(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,dm.apply(void 0,gi([i],o,!1)))};return r.attrs=function(i){return Qa(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qa(e,t,Se(Se({},n),i))},r}var fm=function(e){return Qa(Qv,e)},j=fm;qh.forEach(function(e){j[e]=fm(e)});function ac(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wa(dm.apply(void 0,gi([e],t,!1))),i=Zh(r);return new am(i,r)}const Kv=j.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: auto;
  height: 95vh;
  flex-direction: row;
  margin: 1vw;

  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 600px) {
  }
`,Yv=j.div`
  background: radial-gradient(#eb090d, #950406);
  width: 40%;
  height: 100%;
  border: solid black 4px;
  border-right: none;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
  padding-bottom: 10px;
  box-shadow: -10px 20px 20px 0px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-radius: 0px;
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 600px) {
  }
`,Xv=j.div`
  background: radial-gradient(#eb090d, #950406);
  width: 34%;
  height: 80%;
  border: solid black 4px;
  border-left: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
  margin-bottom: 10px;
  box-shadow: 10px 20px 20px 0px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 50%;
    flex-direction: row;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    box-shadow: none;
    border: none;
  }

  @media (max-width: 720px) {
  }
`,Sl=j.div`
  background: radial-gradient(#de0b0f, #750406);
  width: 90%;
  height: 80%;
  border: solid black 2px;
  border-left: 12px solid #680708;
  border-top: solid #680708 12px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;

  gap: 4vw;

  @media screen and (max-width: 1280px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    padding: 0;
    margin-bottom: 0;
    border: none;
    gap: 4vh;
  }

  @media (max-width: 600px) {
    gap: 5vh;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: none;
    margin: 0;
    padding: 0;
  }
`,qv=j.div`
  background: radial-gradient(#de0b0f, #750406);
  width: 95%;
  height: 94%;
  border-right: 6px solid #680708;
  border-top: 6px solid #680708;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 5px;
  gap: 1vw;

  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: none;
  }
`,Jv=j.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  height: 90%;
  gap: 2vh;
  justify-content: space-between;
  align-items: center;
`,Zv=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 15%;
  background-image: radial-gradient(#1d1e2c, #09090d);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 5%;

  @media screen and (max-width: 1280px) {
    height: 10%;
  }
`,e1=ac`
  0% { opacity: 1  }
  50% { opacity: 0 }
  100% { opacity: 1 }
`,t1=j.div`
  font-size: 2vw;
  color: yellow;

  @media screen and (max-width: 1280px) {
    font-size: 7vw;
  }
`,n1=j.div`
  display: inline-block;
  animation: ${e1} 3s linear infinite;

  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
  }
`,r1=j.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 55%;
  background-image: linear-gradient(to bottom, #f1f1f4, #a5a5a5);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;

  border-right: 6px solid #680708;
  border-top: 6px solid #680708;

  @media screen and (max-width: 1280px) {
    width: 70%;
    height: 40%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    height: 90%;
    width: 40%;
    margin-left: 2vw;
  }
`,i1=j.div`
  background-color: #0000008b;
  padding: 5px 10px;
  color: white;
  font-size: 1.1vw;
  border: 1px solid black;
  border-radius: 10px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,o1=j.div`
  color: black;
  font-size: 1vw;
  font-family: 'RetroGaming', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;var pm={exports:{}},hm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=L;function l1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var s1=typeof Object.is=="function"?Object.is:l1,a1=vr.useState,u1=vr.useEffect,c1=vr.useLayoutEffect,d1=vr.useDebugValue;function f1(e,t){var n=t(),r=a1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return c1(function(){i.value=n,i.getSnapshot=t,bs(i)&&o({inst:i})},[e,n,t]),u1(function(){return bs(i)&&o({inst:i}),e(function(){bs(i)&&o({inst:i})})},[e]),d1(n),n}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!s1(e,n)}catch{return!0}}function p1(e,t){return t()}var h1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p1:f1;hm.useSyncExternalStore=vr.useSyncExternalStore!==void 0?vr.useSyncExternalStore:h1;pm.exports=hm;var m1=pm.exports,mm={exports:{}},gm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=L,g1=m1;function y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var v1=typeof Object.is=="function"?Object.is:y1,w1=g1.useSyncExternalStore,x1=kl.useRef,S1=kl.useEffect,k1=kl.useMemo,E1=kl.useDebugValue;gm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=x1(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=k1(function(){function a(v){if(!u){if(u=!0,d=v,v=r(v),i!==void 0&&l.hasValue){var g=l.value;if(i(g,v))return c=g}return c=v}if(g=c,v1(d,v))return g;var y=r(v);return i!==void 0&&i(g,y)?g:(d=v,c=y)}var u=!1,d,c,p=n===void 0?null:n;return[function(){return a(t())},p===null?void 0:function(){return a(p())}]},[t,n,r,i]);var s=w1(e,o[0],o[1]);return S1(function(){l.hasValue=!0,l.value=s},[s]),E1(s),s};mm.exports=gm;var C1=mm.exports;function P1(e){e()}let ym=P1;const j1=e=>ym=e,_1=()=>ym,qd=Symbol.for("react-redux-context"),Jd=typeof globalThis<"u"?globalThis:{};function O1(){var e;if(!L.createContext)return{};const t=(e=Jd[qd])!=null?e:Jd[qd]=new Map;let n=t.get(L.createContext);return n||(n=L.createContext(null),t.set(L.createContext,n)),n}const rn=O1();function uc(e=rn){return function(){return L.useContext(e)}}const vm=uc(),R1=()=>{throw new Error("uSES not initialized!")};let wm=R1;const T1=e=>{wm=e},A1=(e,t)=>e===t;function L1(e=rn){const t=e===rn?vm:uc(e);return function(r,i={}){const{equalityFn:o=A1,stabilityCheck:l=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:d,stabilityCheck:c,noopCheck:p}=t();L.useRef(!0);const v=L.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,l]),g=wm(u.addNestedSub,a.getState,d||a.getState,v,o);return L.useDebugValue(g),g}}const I=L1();var xm={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,cc=pe?Symbol.for("react.element"):60103,dc=pe?Symbol.for("react.portal"):60106,El=pe?Symbol.for("react.fragment"):60107,Cl=pe?Symbol.for("react.strict_mode"):60108,Pl=pe?Symbol.for("react.profiler"):60114,jl=pe?Symbol.for("react.provider"):60109,_l=pe?Symbol.for("react.context"):60110,fc=pe?Symbol.for("react.async_mode"):60111,Ol=pe?Symbol.for("react.concurrent_mode"):60111,Rl=pe?Symbol.for("react.forward_ref"):60112,Tl=pe?Symbol.for("react.suspense"):60113,N1=pe?Symbol.for("react.suspense_list"):60120,Al=pe?Symbol.for("react.memo"):60115,Ll=pe?Symbol.for("react.lazy"):60116,F1=pe?Symbol.for("react.block"):60121,b1=pe?Symbol.for("react.fundamental"):60117,I1=pe?Symbol.for("react.responder"):60118,$1=pe?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cc:switch(e=e.type,e){case fc:case Ol:case El:case Pl:case Cl:case Tl:return e;default:switch(e=e&&e.$$typeof,e){case _l:case Rl:case Ll:case Al:case jl:return e;default:return t}}case dc:return t}}}function Sm(e){return Me(e)===Ol}W.AsyncMode=fc;W.ConcurrentMode=Ol;W.ContextConsumer=_l;W.ContextProvider=jl;W.Element=cc;W.ForwardRef=Rl;W.Fragment=El;W.Lazy=Ll;W.Memo=Al;W.Portal=dc;W.Profiler=Pl;W.StrictMode=Cl;W.Suspense=Tl;W.isAsyncMode=function(e){return Sm(e)||Me(e)===fc};W.isConcurrentMode=Sm;W.isContextConsumer=function(e){return Me(e)===_l};W.isContextProvider=function(e){return Me(e)===jl};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cc};W.isForwardRef=function(e){return Me(e)===Rl};W.isFragment=function(e){return Me(e)===El};W.isLazy=function(e){return Me(e)===Ll};W.isMemo=function(e){return Me(e)===Al};W.isPortal=function(e){return Me(e)===dc};W.isProfiler=function(e){return Me(e)===Pl};W.isStrictMode=function(e){return Me(e)===Cl};W.isSuspense=function(e){return Me(e)===Tl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===El||e===Ol||e===Pl||e===Cl||e===Tl||e===N1||typeof e=="object"&&e!==null&&(e.$$typeof===Ll||e.$$typeof===Al||e.$$typeof===jl||e.$$typeof===_l||e.$$typeof===Rl||e.$$typeof===b1||e.$$typeof===I1||e.$$typeof===$1||e.$$typeof===F1)};W.typeOf=Me;xm.exports=W;var z1=xm.exports,km=z1,M1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Em={};Em[km.ForwardRef]=M1;Em[km.Memo]=D1;var V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),hc=Symbol.for("react.portal"),Nl=Symbol.for("react.fragment"),Fl=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),$l=Symbol.for("react.context"),B1=Symbol.for("react.server_context"),zl=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Bl=Symbol.for("react.memo"),Ul=Symbol.for("react.lazy"),U1=Symbol.for("react.offscreen"),Cm;Cm=Symbol.for("react.module.reference");function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Nl:case bl:case Fl:case Ml:case Dl:return e;default:switch(e=e&&e.$$typeof,e){case B1:case $l:case zl:case Ul:case Bl:case Il:return e;default:return t}}case hc:return t}}}V.ContextConsumer=$l;V.ContextProvider=Il;V.Element=pc;V.ForwardRef=zl;V.Fragment=Nl;V.Lazy=Ul;V.Memo=Bl;V.Portal=hc;V.Profiler=bl;V.StrictMode=Fl;V.Suspense=Ml;V.SuspenseList=Dl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Xe(e)===$l};V.isContextProvider=function(e){return Xe(e)===Il};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};V.isForwardRef=function(e){return Xe(e)===zl};V.isFragment=function(e){return Xe(e)===Nl};V.isLazy=function(e){return Xe(e)===Ul};V.isMemo=function(e){return Xe(e)===Bl};V.isPortal=function(e){return Xe(e)===hc};V.isProfiler=function(e){return Xe(e)===bl};V.isStrictMode=function(e){return Xe(e)===Fl};V.isSuspense=function(e){return Xe(e)===Ml};V.isSuspenseList=function(e){return Xe(e)===Dl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nl||e===bl||e===Fl||e===Ml||e===Dl||e===U1||typeof e=="object"&&e!==null&&(e.$$typeof===Ul||e.$$typeof===Bl||e.$$typeof===Il||e.$$typeof===$l||e.$$typeof===zl||e.$$typeof===Cm||e.getModuleId!==void 0)};V.typeOf=Xe;function H1(){const e=_1();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Zd={notify(){},get:()=>[]};function W1(e,t){let n,r=Zd,i=0,o=!1;function l(y){d();const P=r.subscribe(y);let h=!1;return()=>{h||(h=!0,P(),c())}}function s(){r.notify()}function a(){g.onStateChange&&g.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(a):e.subscribe(a),r=H1())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Zd)}function p(){o||(o=!0,d())}function v(){o&&(o=!1,c())}const g={addNestedSub:l,notifyNestedSubs:s,handleChangeWrapper:a,isSubscribed:u,trySubscribe:p,tryUnsubscribe:v,getListeners:()=>r};return g}const V1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G1=V1?L.useLayoutEffect:L.useEffect;function Q1({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const l=L.useMemo(()=>{const u=W1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),s=L.useMemo(()=>e.getState(),[e]);G1(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,s]);const a=t||rn;return L.createElement(a.Provider,{value:l},n)}function Pm(e=rn){const t=e===rn?vm:uc(e);return function(){const{store:r}=t();return r}}const K1=Pm();function Y1(e=rn){const t=e===rn?K1:Pm(e);return function(){return t().dispatch}}const In=Y1();T1(C1.useSyncExternalStoreWithSelector);j1(Wh.unstable_batchedUpdates);const _i=j.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 40px;
  width: 90%;
  height: 80%;
  background-image: ${e=>e.color?e.color:"radial-gradient(#1d1e2c, #09090d)"};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`,mc=ac`
  from {
    opacity: 0;
    transform: scale(0); 
    
  }
  to {
    opacity: 1;
    transform: scale(1); 
  }
`,jm=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 600px) {
  }
`,X1=j.img`
  width: 55%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
`,q1=j.div`
  height: 100%;
  display: flex;
  justify-content: center;
`,J1=j.img`
  object-fit: cover;
  width: 100%;
`,Z1=j.div`
  position: absolute;
  background-color: #ffffffbb;
  color: black;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1vw;
  margin-top: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 6vw;
  }
`,ew=j.img`
  width: 1.8vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 5vw;
  }

  @media screen and (max-width: 600px) {
    width: 8vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 3vw;
  }
`,tw=j.img`
  width: 3vw;
  height: auto;
  border: 3px solid black;
  background-color: black;
  border: 2px solid white;

  @media screen and (max-width: 1280px) {
    width: 10vw;
  }

  @media screen and (max-width: 600px) {
    width: 18vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 8vw;
  }
`,_m=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,Om=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;j.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;const nw=j.img`
  max-width: 80vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  position: relative;

  @media screen and (max-width: 1280px) {
    max-width: 95vw;
    max-height: 95vh;
  }
`,rw=j.img`
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  position: relative;
`,iw=j.div`
  color: white;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,ow=j.img`
  width: 1vw;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    width: 3vw;
  }

  @media screen and (max-width: 600px) {
    width: 4vw;
  }
`,lw=j.button`
  background-color: transparent;
  border: none;
`,sw=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
  position: relative;
`,aw=j.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`,uw=j.button`
  border-radius: 20px;
  background-color: #038d0e;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 100%;
  }
`,cw=j.button`
  border-radius: 20px;
  background-color: #4747f7;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 100%;
  }
`;j.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 40px;
  width: 80%;
  height: 80%;
  background-image: ${e=>e.color?e.color:"#1d1e2c"};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`;const Oi=j.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    gap: 5px;
  }

  @media screen and (max-width: 600px) {
    gap: 0px;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    gap: 0px;
  }
`,$n=j.div`
  color: white;
  font-size: 1.5vw;
  margin-top: 5px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 5vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vw;
  }
`,dw=j.div`
  color: white;
  font-size: 0.8vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1px solid white;
  padding: 0.5vw;
  border-radius: 15px;
  background-color: #00000098;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
    width: 90%;
    height: 60%;
    justify-content: space-evenly;
    padding: 2vw;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 2vw;
    width: 80%;
    height: 50%;
    justify-content: space-evenly;
    gap: 0;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 2vw;
    width: 80%;
    height: 50%;
    justify-content: space-evenly;
    gap: 0;
    text-align: center;
  }
`,fw=j.div`
  color: white;
  font-size: 1.2vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    justify-content: center;
    margin-right: 0px;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 2vw;
  }
`,pw=j.div`
  color: white;
  font-size: 1.2vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5vw 0 4vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    padding: 0 5vw 0 4vw;
    font-size: 2vw;
  }
`,ef=j.div`
  color: white;
  font-size: 1vw;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1280px) {
    font-size: 2vh;
    justify-content: center;
  }
`,hw=j.div`
  font-size: 0.8vw;
  color: white;
  width: 90%;
  border: solid white 1px;
  border-radius: 12px;
  padding: 15px;
  background-color: #0000009d;
  text-align: left;
  line-height: 2;
  overflow-y: auto;
  font-family: 'RetroGaming', sans-serif;
  max-height: 40%;
  padding: 10px;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5vw;
    width: 70%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
    width: 70%;
  }
`,mw=j.div`
  color: black;
  font-size: 0.8vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: column-reverse;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`,gw=j.div`
  display: flex;
  gap: 10px;
  font-family: 'RetroGaming', sans-serif;
  justify-content: space-around;

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 90%;
    gap: 5px;
  }
`,yw=j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'RetroGaming', sans-serif;
  margin-top: 1vw;
  gap: 0.4vw;

  @media screen and (max-width: 1280px) {
    gap: 1vw;
  }

  @media screen and (max-width: 600px) {
    gap: 2vw;
    height: 100%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    gap: 2vh;
    height: 100%;
  }
`,vw=j.div`
  color: white;

  font-size: 1vw;
  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vh;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`;j.div`
  color: white;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`;const ww=j.div`
  font-size: 0.7vw;
  color: black;
  background-color: #ffffffac;
  width: 80%;
  border-radius: 15px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`,xw=j.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 0;
`,Sw=j.li`
  color: #ffffff;
  font-size: 0.8vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`,kw=j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'RetroGaming', sans-serif;
  width: 100%;

  height: 100%;
`;j.div`
  color: white;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;const Ew=j.div`
  color: white;
  font-size: 2vw;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,Cw=j.div`
  color: white;
  font-size: 0.8vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1px solid white;
  padding: 0.5vw;
  border-radius: 15px;
  background-color: #00000098;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
    width: 50%;
    height: 50%;
    padding: 1vw;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`,Pw=j.div`
  font-size: 0.5vw;

  @media screen and (max-width: 1280px) {
    font-size: 1vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 2vh;
  }
`,jw=j.div`
  color: black;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
  }
`,_w=j.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Ow=j.div`
  position: absolute;
  top: 25vh;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1vw;
  margin-top: 0;
  font-family: 'RetroGaming', sans-serif;
  z-index: 2;
  background-color: #0000006e;
  border: 1px white solid;
  border-radius: 7px;
  padding: 5px;
  width: 80%;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 5vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vw;
  }
`;j.img`
  position: relative;
  z-index: 1;
`;const Rw={kanto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/kanto.png",johto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191839/maps/johtoLarger.jpg",hoenn:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/hoenn.png",sinnoh:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/sinnoh.png",unova:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/unova.png",kalos:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/kalos.png",alola:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/alola.png",galar:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/galar.png",hisui:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191298/maps/hisuiLarge.png",paldea:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701187942/maps/paldea.png"};function Tw(){const e=I(o=>o.pokemon.selectedPokemon),[t,n]=L.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return w.jsxs(Oi,{children:[e.name&&w.jsx(jm,{src:e.image,alt:"selectedPokemon",onClick:r},e.id),t&&w.jsx(_m,{onClick:i,children:w.jsx(Om,{children:w.jsx(rw,{src:e.image,alt:"Pokemon Image"})})})]})}function Aw(){const e=I(n=>n.type.selectedType);function t(n){return"types/"+n.toLowerCase()+".svg"}return w.jsx(X1,{src:t(e),alt:"selectedPokemon"},e)}function Lw(){var t,n;const e=I(r=>r.item.selectedItem);return w.jsxs(Oi,{children:[w.jsx($n,{style:{color:"white"},children:e.name.toUpperCase()}),w.jsx(tw,{src:(t=e.sprites)==null?void 0:t.default,alt:"selectedItem"},e.id),w.jsxs(o1,{children:["Category:",w.jsx(i1,{children:(n=e.category)==null?void 0:n.name.toUpperCase()})]})]})}function Nw(){const e=I(s=>s.regions.lists.selected),[t,n]=L.useState("");L.useEffect(()=>{n(Rw[e.name])},[e.name]);const[r,i]=L.useState(!1),o=()=>{i(!0)},l=()=>{i(!1)};return w.jsxs(Oi,{children:[w.jsxs(q1,{children:[w.jsx(Z1,{children:e.name.toUpperCase()}),w.jsx(J1,{src:t,onClick:o})]}),r&&w.jsx(_m,{onClick:l,children:w.jsx(Om,{children:w.jsx(nw,{src:t,alt:"Region Map"})})})]})}function Fw(){const e=()=>{window.open("https://github.com/brunomachadors","_blank")};return w.jsxs(w.Fragment,{children:[w.jsx(jm,{src:"https://i.gifer.com/4tym.gif",id:"pikachuGif"}),w.jsx(lw,{onClick:e,children:w.jsxs(iw,{id:"gitAccount",children:[w.jsx(ow,{src:"icons/git.png"}),"/brunomachadors".toUpperCase()]})})]})}function tt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function on(e){return!!e&&!!e[X]}function Tt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Hw}(e)||Array.isArray(e)||!!e[af]||!!(!((t=e.constructor)===null||t===void 0)&&t[af])||gc(e)||yc(e))}function Nn(e,t,n){n===void 0&&(n=!1),Pr(e)===0?(n?Object.keys:lr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Pr(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:gc(e)?2:yc(e)?3:0}function or(e,t){return Pr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bw(e,t){return Pr(e)===2?e.get(t):e[t]}function Rm(e,t,n){var r=Pr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Tm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function gc(e){return Bw&&e instanceof Map}function yc(e){return Uw&&e instanceof Set}function gn(e){return e.o||e.t}function vc(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Lm(e);delete t[X];for(var n=lr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function wc(e,t){return t===void 0&&(t=!1),xc(e)||on(e)||!Tt(e)||(Pr(e)>1&&(e.set=e.add=e.clear=e.delete=Iw),Object.freeze(e),t&&Nn(e,function(n,r){return wc(r,!0)},!0)),e}function Iw(){tt(2)}function xc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function mt(e){var t=qa[e];return t||tt(18,e),t}function $w(e,t){qa[e]||(qa[e]=t)}function Ka(){return vi}function Is(e,t){t&&(mt("Patches"),e.u=[],e.s=[],e.v=t)}function Qo(e){Ya(e),e.p.forEach(zw),e.p=null}function Ya(e){e===vi&&(vi=e.l)}function tf(e){return vi={p:[],l:vi,h:e,m:!0,_:0}}function zw(e){var t=e[X];t.i===0||t.i===1?t.j():t.g=!0}function $s(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||mt("ES5").S(t,e,r),r?(n[X].P&&(Qo(t),tt(4)),Tt(e)&&(e=Ko(t,e),t.l||Yo(t,e)),t.u&&mt("Patches").M(n[X].t,e,t.u,t.s)):e=Ko(t,n,[]),Qo(t),t.u&&t.v(t.u,t.s),e!==Am?e:void 0}function Ko(e,t,n){if(xc(t))return t;var r=t[X];if(!r)return Nn(t,function(s,a){return nf(e,r,t,s,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Yo(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=vc(r.k):r.o,o=i,l=!1;r.i===3&&(o=new Set(i),i.clear(),l=!0),Nn(o,function(s,a){return nf(e,r,i,s,a,n,l)}),Yo(e,i,!1),n&&e.u&&mt("Patches").N(r,n,e.u,e.s)}return r.o}function nf(e,t,n,r,i,o,l){if(on(i)){var s=Ko(e,i,o&&t&&t.i!==3&&!or(t.R,r)?o.concat(r):void 0);if(Rm(n,r,s),!on(s))return;e.m=!1}else l&&n.add(i);if(Tt(i)&&!xc(i)){if(!e.h.D&&e._<1)return;Ko(e,i),t&&t.A.l||Yo(e,i)}}function Yo(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&wc(t,n)}function zs(e,t){var n=e[X];return(n?gn(n):e)[t]}function rf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ut(e){e.P||(e.P=!0,e.l&&Ut(e.l))}function Ms(e){e.o||(e.o=vc(e.t))}function Xa(e,t,n){var r=gc(t)?mt("MapSet").F(t,n):yc(t)?mt("MapSet").T(t,n):e.O?function(i,o){var l=Array.isArray(i),s={i:l?1:0,A:o?o.A:Ka(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},a=s,u=wi;l&&(a=[s],u=Ur);var d=Proxy.revocable(a,u),c=d.revoke,p=d.proxy;return s.k=p,s.j=c,p}(t,n):mt("ES5").J(t,n);return(n?n.A:Ka()).p.push(r),r}function Mw(e){return on(e)||tt(22,e),function t(n){if(!Tt(n))return n;var r,i=n[X],o=Pr(n);if(i){if(!i.P&&(i.i<4||!mt("ES5").K(i)))return i.t;i.I=!0,r=of(n,o),i.I=!1}else r=of(n,o);return Nn(r,function(l,s){i&&bw(i.t,l)===s||Rm(r,l,t(s))}),o===3?new Set(r):r}(e)}function of(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return vc(e)}function Dw(){function e(o,l){var s=i[o];return s?s.enumerable=l:i[o]=s={configurable:!0,enumerable:l,get:function(){var a=this[X];return wi.get(a,o)},set:function(a){var u=this[X];wi.set(u,o,a)}},s}function t(o){for(var l=o.length-1;l>=0;l--){var s=o[l][X];if(!s.P)switch(s.i){case 5:r(s)&&Ut(s);break;case 4:n(s)&&Ut(s)}}}function n(o){for(var l=o.t,s=o.k,a=lr(s),u=a.length-1;u>=0;u--){var d=a[u];if(d!==X){var c=l[d];if(c===void 0&&!or(l,d))return!0;var p=s[d],v=p&&p[X];if(v?v.t!==c:!Tm(p,c))return!0}}var g=!!l[X];return a.length!==lr(l).length+(g?0:1)}function r(o){var l=o.k;if(l.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(l,l.length-1);if(s&&!s.get)return!0;for(var a=0;a<l.length;a++)if(!l.hasOwnProperty(a))return!0;return!1}var i={};$w("ES5",{J:function(o,l){var s=Array.isArray(o),a=function(d,c){if(d){for(var p=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(p,""+v,e(v,!0));return p}var g=Lm(c);delete g[X];for(var y=lr(g),P=0;P<y.length;P++){var h=y[P];g[h]=e(h,d||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,o),u={i:s?5:4,A:l?l.A:Ka(),P:!1,I:!1,R:{},l,t:o,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,X,{value:u,writable:!0}),a},S:function(o,l,s){s?on(l)&&l[X].A===o&&t(o.p):(o.u&&function a(u){if(u&&typeof u=="object"){var d=u[X];if(d){var c=d.t,p=d.k,v=d.R,g=d.i;if(g===4)Nn(p,function(m){m!==X&&(c[m]!==void 0||or(c,m)?v[m]||a(p[m]):(v[m]=!0,Ut(d)))}),Nn(c,function(m){p[m]!==void 0||or(p,m)||(v[m]=!1,Ut(d))});else if(g===5){if(r(d)&&(Ut(d),v.length=!0),p.length<c.length)for(var y=p.length;y<c.length;y++)v[y]=!1;else for(var P=c.length;P<p.length;P++)v[P]=!0;for(var h=Math.min(p.length,c.length),f=0;f<h;f++)p.hasOwnProperty(f)||(v[f]=!0),v[f]===void 0&&a(p[f])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var lf,vi,Sc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Bw=typeof Map<"u",Uw=typeof Set<"u",sf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Am=Sc?Symbol.for("immer-nothing"):((lf={})["immer-nothing"]=!0,lf),af=Sc?Symbol.for("immer-draftable"):"__$immer_draftable",X=Sc?Symbol.for("immer-state"):"__$immer_state",Hw=""+Object.prototype.constructor,lr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Lm=Object.getOwnPropertyDescriptors||function(e){var t={};return lr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},qa={},wi={get:function(e,t){if(t===X)return e;var n=gn(e);if(!or(n,t))return function(i,o,l){var s,a=rf(o,l);return a?"value"in a?a.value:(s=a.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Tt(r)?r:r===zs(e.t,t)?(Ms(e),e.o[t]=Xa(e.A.h,r,e)):r},has:function(e,t){return t in gn(e)},ownKeys:function(e){return Reflect.ownKeys(gn(e))},set:function(e,t,n){var r=rf(gn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=zs(gn(e),t),o=i==null?void 0:i[X];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Tm(n,i)&&(n!==void 0||or(e.t,t)))return!0;Ms(e),Ut(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return zs(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ms(e),Ut(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=gn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){tt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){tt(12)}},Ur={};Nn(wi,function(e,t){Ur[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ur.deleteProperty=function(e,t){return Ur.set.call(this,e,t,void 0)},Ur.set=function(e,t,n){return wi.set.call(this,e[0],t,n,e[0])};var Ww=function(){function e(n){var r=this;this.O=sf,this.D=!0,this.produce=function(i,o,l){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var a=r;return function(y){var P=this;y===void 0&&(y=s);for(var h=arguments.length,f=Array(h>1?h-1:0),m=1;m<h;m++)f[m-1]=arguments[m];return a.produce(y,function(x){var E;return(E=o).call.apply(E,[P,x].concat(f))})}}var u;if(typeof o!="function"&&tt(6),l!==void 0&&typeof l!="function"&&tt(7),Tt(i)){var d=tf(r),c=Xa(r,i,void 0),p=!0;try{u=o(c),p=!1}finally{p?Qo(d):Ya(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Is(d,l),$s(y,d)},function(y){throw Qo(d),y}):(Is(d,l),$s(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Am&&(u=void 0),r.D&&wc(u,!0),l){var v=[],g=[];mt("Patches").M(i,u,v,g),l(v,g)}return u}tt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,c=Array(d>1?d-1:0),p=1;p<d;p++)c[p-1]=arguments[p];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(c))})};var l,s,a=r.produce(i,o,function(u,d){l=u,s=d});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,l,s]}):[a,l,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Tt(n)||tt(8),on(n)&&(n=Mw(n));var r=tf(this),i=Xa(this,n,void 0);return i[X].C=!0,Ya(r),i},t.finishDraft=function(n,r){var i=n&&n[X],o=i.A;return Is(o,r),$s(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!sf&&tt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var l=mt("Patches").$;return on(n)?l(n,r):this.produce(n,function(s){return l(s,r)})},e}(),Ie=new Ww,Nm=Ie.produce;Ie.produceWithPatches.bind(Ie);Ie.setAutoFreeze.bind(Ie);Ie.setUseProxies.bind(Ie);Ie.applyPatches.bind(Ie);Ie.createDraft.bind(Ie);Ie.finishDraft.bind(Ie);function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function Vw(e,t){if(xi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gw(e){var t=Vw(e,"string");return xi(t)==="symbol"?t:String(t)}function Qw(e,t,n){return t=Gw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(n),!0).forEach(function(r){Qw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function we(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var df=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ds=function(){return Math.random().toString(36).substring(7).split("").join(".")},Xo={INIT:"@@redux/INIT"+Ds(),REPLACE:"@@redux/REPLACE"+Ds(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ds()}};function Kw(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Fm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(we(1));return n(Fm)(e,t)}if(typeof e!="function")throw new Error(we(2));var i=e,o=t,l=[],s=l,a=!1;function u(){s===l&&(s=l.slice())}function d(){if(a)throw new Error(we(3));return o}function c(y){if(typeof y!="function")throw new Error(we(4));if(a)throw new Error(we(5));var P=!0;return u(),s.push(y),function(){if(P){if(a)throw new Error(we(6));P=!1,u();var f=s.indexOf(y);s.splice(f,1),l=null}}}function p(y){if(!Kw(y))throw new Error(we(7));if(typeof y.type>"u")throw new Error(we(8));if(a)throw new Error(we(9));try{a=!0,o=i(o,y)}finally{a=!1}for(var P=l=s,h=0;h<P.length;h++){var f=P[h];f()}return y}function v(y){if(typeof y!="function")throw new Error(we(10));i=y,p({type:Xo.REPLACE})}function g(){var y,P=c;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(we(11));function m(){f.next&&f.next(d())}m();var x=P(m);return{unsubscribe:x}}},y[df]=function(){return this},y}return p({type:Xo.INIT}),r={dispatch:p,subscribe:c,getState:d,replaceReducer:v},r[df]=g,r}function Yw(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Xo.INIT});if(typeof r>"u")throw new Error(we(12));if(typeof n(void 0,{type:Xo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(we(13))})}function Xw(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),l;try{Yw(n)}catch(s){l=s}return function(a,u){if(a===void 0&&(a={}),l)throw l;for(var d=!1,c={},p=0;p<o.length;p++){var v=o[p],g=n[v],y=a[v],P=g(y,u);if(typeof P>"u")throw u&&u.type,new Error(we(14));c[v]=P,d=d||P!==y}return d=d||o.length!==Object.keys(a).length,d?c:a}}function qo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function qw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(we(15))},l={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(a){return a(l)});return o=qo.apply(void 0,s)(i.dispatch),cf(cf({},i),{},{dispatch:o})}}}function bm(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(l){return function(s){return typeof s=="function"?s(i,o,e):l(s)}}};return t}var Im=bm();Im.withExtraArgument=bm;const ff=Im;var $m=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Jw=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},wr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Zw=Object.defineProperty,ex=Object.defineProperties,tx=Object.getOwnPropertyDescriptors,pf=Object.getOwnPropertySymbols,nx=Object.prototype.hasOwnProperty,rx=Object.prototype.propertyIsEnumerable,hf=function(e,t,n){return t in e?Zw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Zt=function(e,t){for(var n in t||(t={}))nx.call(t,n)&&hf(e,n,t[n]);if(pf)for(var r=0,i=pf(t);r<i.length;r++){var n=i[r];rx.call(t,n)&&hf(e,n,t[n])}return e},Bs=function(e,t){return ex(e,tx(t))},ix=function(e,t,n){return new Promise(function(r,i){var o=function(a){try{s(n.next(a))}catch(u){i(u)}},l=function(a){try{s(n.throw(a))}catch(u){i(u)}},s=function(a){return a.done?r(a.value):Promise.resolve(a.value).then(o,l)};s((n=n.apply(e,t)).next())})},ox=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qo:qo.apply(null,arguments)};function lx(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function en(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Zt(Zt({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var sx=function(e){$m(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wr([void 0],n[0].concat(this)))):new(t.bind.apply(t,wr([void 0],n.concat(this))))},t}(Array),ax=function(e){$m(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wr([void 0],n[0].concat(this)))):new(t.bind.apply(t,wr([void 0],n.concat(this))))},t}(Array);function Ja(e){return Tt(e)?Nm(e,function(){}):e}function ux(e){return typeof e=="boolean"}function cx(){return function(t){return dx(t)}}function dx(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new sx;return n&&(ux(n)?r.push(ff):r.push(ff.withExtraArgument(n.extraArgument))),r}var fx=!0;function px(e){var t=cx(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,l=o===void 0?t():o,s=n.devTools,a=s===void 0?!0:s,u=n.preloadedState,d=u===void 0?void 0:u,c=n.enhancers,p=c===void 0?void 0:c,v;if(typeof i=="function")v=i;else if(lx(i))v=Xw(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=l;typeof g=="function"&&(g=g(t));var y=qw.apply(void 0,g),P=qo;a&&(P=ox(Zt({trace:!fx},typeof a=="object"&&a)));var h=new ax(y),f=h;Array.isArray(p)?f=wr([y],p):typeof p=="function"&&(f=p(h));var m=P.apply(void 0,f);return Fm(v,d,m)}function zm(e){var t={},n=[],r,i={addCase:function(o,l){var s=typeof o=="string"?o:o.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=l,i},addMatcher:function(o,l){return n.push({matcher:o,reducer:l}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function hx(e){return typeof e=="function"}function mx(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?zm(t):[t,n,r],o=i[0],l=i[1],s=i[2],a;if(hx(e))a=function(){return Ja(e())};else{var u=Ja(e);a=function(){return u}}function d(c,p){c===void 0&&(c=a());var v=wr([o[p.type]],l.filter(function(g){var y=g.matcher;return y(p)}).map(function(g){var y=g.reducer;return y}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,y){if(y)if(on(g)){var P=g,h=y(P,p);return h===void 0?g:h}else{if(Tt(g))return Nm(g,function(f){return y(f,p)});var h=y(g,p);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return d.getInitialState=a,d}function gx(e,t){return e+"/"+t}function Lt(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ja(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},l={},s={};i.forEach(function(d){var c=r[d],p=gx(t,d),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,o[d]=v,l[p]=v,s[d]=g?en(p,g):en(p)});function a(){var d=typeof e.extraReducers=="function"?zm(e.extraReducers):[e.extraReducers],c=d[0],p=c===void 0?{}:c,v=d[1],g=v===void 0?[]:v,y=d[2],P=y===void 0?void 0:y,h=Zt(Zt({},p),l);return mx(n,function(f){for(var m in h)f.addCase(m,h[m]);for(var x=0,E=g;x<E.length;x++){var _=E[x];f.addMatcher(_.matcher,_.reducer)}P&&f.addDefaultCase(P)})}var u;return{name:t,reducer:function(d,c){return u||(u=a()),u(d,c)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var yx="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",vx=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=yx[Math.random()*64|0];return t},wx=["name","message","stack","code"],Us=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),mf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),xx=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=wx;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=en(t+"/fulfilled",function(u,d,c,p){return{payload:u,meta:Bs(Zt({},p||{}),{arg:c,requestId:d,requestStatus:"fulfilled"})}}),o=en(t+"/pending",function(u,d,c){return{payload:void 0,meta:Bs(Zt({},c||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),l=en(t+"/rejected",function(u,d,c,p,v){return{payload:p,error:(r&&r.serializeError||xx)(u||"Rejected"),meta:Bs(Zt({},v||{}),{arg:c,requestId:d,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function a(u){return function(d,c,p){var v=r!=null&&r.idGenerator?r.idGenerator(u):vx(),g=new s,y;function P(f){y=f,g.abort()}var h=function(){return ix(this,null,function(){var f,m,x,E,_,k,T;return Jw(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),E=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:c,extra:p}),kx(E)?[4,E]:[3,2];case 1:E=M.sent(),M.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(A,se){return g.signal.addEventListener("abort",function(){return se({name:"AbortError",message:y||"Aborted"})})}),d(o(v,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:v,arg:u},{getState:c,extra:p}))),[4,Promise.race([_,Promise.resolve(n(u,{dispatch:d,getState:c,extra:p,requestId:v,signal:g.signal,abort:P,rejectWithValue:function(A,se){return new Us(A,se)},fulfillWithValue:function(A,se){return new mf(A,se)}})).then(function(A){if(A instanceof Us)throw A;return A instanceof mf?i(A.payload,v,u,A.meta):i(A,v,u)})])];case 3:return x=M.sent(),[3,5];case 4:return k=M.sent(),x=k instanceof Us?l(null,v,u,k.payload,k.meta):l(k,v,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&l.match(x)&&x.meta.condition,T||d(x),[2,x]}})})}();return Object.assign(h,{abort:P,requestId:v,arg:u,unwrap:function(){return h.then(Sx)}})}}return Object.assign(a,{pending:o,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Sx(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function kx(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var kc="listenerMiddleware";en(kc+"/add");en(kc+"/removeAll");en(kc+"/remove");var gf;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Dw();const Ex={selectedMenu:"photo"},Mm=Lt({name:"infoMenu",initialState:Ex,reducers:{selectInfoMenu:(e,t)=>{e.selectedMenu=t.payload}}}),{selectInfoMenu:yf}=Mm.actions,Cx=Mm.reducer,lt={colors:{background:{grass:"linear-gradient(to top, #67F70A, #204000, black)",fire:"linear-gradient(to top,  #D6CA23, #903F3F, black)",water:"linear-gradient(to top, #70A7F0, #557DEA, black)",poison:"linear-gradient(to top, #A819D7, #611380, black)",normal:"linear-gradient(to top, #CCC9AA, #ACA974, black)",bug:"linear-gradient(to top, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to top, #7AA9E8, black)",electric:"linear-gradient(to top, #D6CA23, black)",ground:"linear-gradient(to top, #B76D29, black)",fairy:"linear-gradient(to top, #FFA0C2, #F87EA7)",fighting:"linear-gradient(to top, #E81319, #800B11)",psychic:"linear-gradient(to top, #C82D5B, black)",rock:"linear-gradient(to top, #6C644F, black)",ghost:"linear-gradient(to top, #BD98CB, #816A9F, black)",ice:"linear-gradient(to top, #66D1E5, #176F73, black)",dragon:"linear-gradient(to top, #8A55FD, #7241E4, black)",steel:"linear-gradient(to top, #BBC5C4, #A0A0A0, #454545)",dark:"linear-gradient(to top, #5F4632, black)"},type:{grass:"linear-gradient(to right, #3E9709, #4BB36F)",fire:"linear-gradient(to right, #F67F0B, #F8B80E)",water:"linear-gradient(to right, #557DEA, #70A7F0)",poison:"linear-gradient(to right, #7A6696, #C89EC7)",normal:"linear-gradient(to right, #ACA974, #C5C5C5)",bug:"linear-gradient(to right, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to right, #7AA9E8, #B5D5F1)",electric:"linear-gradient(to right, #D6CA23, #FFFDB8)",ground:"linear-gradient(to right, #B76D29, #E78E4A)",fairy:"linear-gradient(to right, #F87EA7, #FFA0C2)",fighting:"linear-gradient(to right, #A85451, #D99C90)",psychic:"linear-gradient(to right, #C82D5B, #F67399)",rock:"linear-gradient(to right, #6C644F, #C2B993)",ghost:"linear-gradient(to right, #472B53, #B683B3)",ice:"linear-gradient(to right, #176F73, #9CE8F2)",dragon:"linear-gradient(to right, #7241E4, #A99EC3)",steel:"linear-gradient(to right, #A0A0A0, #454545)",dark:"linear-gradient(to right, #333333, #000000)"},buttonColor:{grass:"#2E6030",fire:"#8C3636",water:"#3B548A",poison:"#611380",normal:"#827F5A",bug:"#91BA2E",flying:"#759FCB",electric:"#E3D38E",ground:"#B9692B",fairy:"#CC38A3",fighting:"#E81319",psychic:"#C8436A",rock:"#8D8666",ghost:"#695D7E",ice:"#579AA9",dragon:"#70578B",steel:"#808080",dark:"#333333"},regionColorMap:{kanto:"linear-gradient(to right, #FF5733, #FF4500)",johto:"linear-gradient(to right, #FFD700, #C0C0C0)",hoenn:"linear-gradient(to right, #C0C0C0, #87CEEB)",sinnoh:"linear-gradient(to right, #87CEEB, #FF4500)",unova:"linear-gradient(to right, #FF4500, #008000)",kalos:"linear-gradient(to right, #008000, #CD5C5C)",alola:"linear-gradient(to right, #CD5C5C, #B0E0E6)",galar:"linear-gradient(to right, #B0E0E6, #FFA500)",hisui:"linear-gradient(to right, #FFA500, #9932CC)",paldea:"linear-gradient(to right, #9932CC, #8A2BE2)"},regionColorMapBackground:{kanto:"linear-gradient(to top, #FF5733, #FF4500, #000000)",johto:"linear-gradient(to top, #FFD700, #C0C0C0, #000000)",hoenn:"linear-gradient(to top, #C0C0C0, #87CEEB, #000000)",sinnoh:"linear-gradient(to top, #87CEEB, #FF4500, #000000)",unova:"linear-gradient(to top, #FF4500, #008000, #000000)",kalos:"linear-gradient(to top, #008000, #CD5C5C, #000000)",alola:"linear-gradient(to top, #CD5C5C, #B0E0E6, #000000)",galar:"linear-gradient(to top, #B0E0E6, #FFA500, #000000)",hisui:"linear-gradient(to top, #FFA500, #9932CC, #000000)",paldea:"linear-gradient(to top, #9932CC, #8A2BE2, #000000)"},itemTypeColorMap:{"stat-boosts":"#FFD700","effort-drop":"#FFA500",medicine:"#D3D3D3",other:"#B0C4DE","in-a-pinch":"#FF6347","picky-healing":"#7CFC00","type-protection":"#D2B48C","baking-only":"#D3D3D3",collectibles:"#FFDAB9",evolution:"#C71585",spelunking:"#98FB98","held-items":"#FFB6C1",choice:"#9370DB","effort-training":"#87CEEB","bad-held-items":"#CD853F",training:"#AFEEEE",plates:"#FF6347","species-specific":"#FFA07A","type-enhancement":"#8B4513","event-items":"#FFD700",gameplay:"#DCDCDC","plot-advancement":"#8A2BE2",unused:"#DCDCDC",loot:"#B8860B","all-mail":"#FFB6C1",vitamins:"#ADFF2F",healing:"#00FF7F","pp-recovery":"#6495ED",revival:"#FF6347","status-cures":"#00FA9A",mulch:"#DAA520","special-balls":"#8A2BE2","standard-balls":"#00BFFF","dex-completion":"#FFD700",scarves:"#FF69B4","all-machines":"#4682B4",flutes:"#87CEEB","apricorn-balls":"#00FF00","apricorn-box":"#FFD700","data-cards":"#8A2BE2",jewels:"#FF69B4","miracle-shooter":"#7B68EE","mega-stones":"#FF6347",memories:"#87CEFA","z-crystals":"#D8BFD8","species-candies":"#FF6347","catching-bonus":"#20B2AA","dynamax-crystals":"#FF8C00"},itemGradientMap:{"stat-boosts":"linear-gradient(to top, #FF9966, #FF4500, #000000)","effort-drop":"linear-gradient(to top, #FFD700, #DAA520, #000000)",medicine:"linear-gradient(to top, #CCCCCC, #A9A9A9, #000000)",other:"linear-gradient(to top, #A9D5EB, #4682B4, #000000)","in-a-pinch":"linear-gradient(to top, #FF6347, #8B0000, #000000)","picky-healing":"linear-gradient(to top, #7CFC00, #556B2F, #000000)","type-protection":"linear-gradient(to top, #D2B48C, #8B4513, #000000)","baking-only":"linear-gradient(to top, #B0C4DE, #696969, #000000)",collectibles:"linear-gradient(to top, #FFDAB9, #CD853F, #000000)",evolution:"linear-gradient(to top, #C71585, #8B008B, #000000)",spelunking:"linear-gradient(to top, #98FB98, #008000, #000000)","held-items":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",choice:"linear-gradient(to top, #9370DB, #4B0082, #000000)","effort-training":"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","bad-held-items":"linear-gradient(to top, #CD853F, #8B4513, #000000)",training:"linear-gradient(to top, #AFEEEE, #4682B4, #000000)",plates:"linear-gradient(to top, #FF6347, #8B4513, #000000)","species-specific":"linear-gradient(to top, #FFA07A, #CD5C5C, #000000)","type-enhancement":"linear-gradient(to top, #8B4513, #4B0082, #000000)","event-items":"linear-gradient(to top, #FFD700, #FF4500, #000000)",gameplay:"linear-gradient(to top, #D3D3D3, #A9A9A9, #000000)","plot-advancement":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",unused:"linear-gradient(to top, #808080, #696969, #000000)",loot:"linear-gradient(to top, #B8860B, #8B4513, #000000)","all-mail":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",vitamins:"linear-gradient(to top, #ADFF2F, #556B2F, #000000)",healing:"linear-gradient(to top, #00FF7F, #008000, #000000)","pp-recovery":"linear-gradient(to top, #6495ED, #000080, #000000)",revival:"linear-gradient(to top, #FF6347, #8B4513, #000000)","status-cures":"linear-gradient(to top, #00FA9A, #008000, #000000)",mulch:"linear-gradient(to top, #DAA520, #8B4513, #000000)","special-balls":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)","standard-balls":"linear-gradient(to top, #00BFFF, #000080, #000000)","dex-completion":"linear-gradient(to top, #FFD700, #FF4500, #000000)",scarves:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","all-machines":"linear-gradient(to top, #4682B4, #000080, #000000)",flutes:"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","apricorn-balls":"linear-gradient(to top, #00FF00, #008000, #000000)","apricorn-box":"linear-gradient(to top, #FFD700, #FF4500, #000000)","data-cards":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",jewels:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","miracle-shooter":"linear-gradient(to top, #7B68EE, #4B0082, #000000)","mega-stones":"linear-gradient(to top, #FF6347, #8B4513, #000000)"}}},Dm=j.div`
  background-color: ${e=>e.color||"black"};
  padding: 5px 10px;
  color: ${e=>e.color==="#E3D38E"?"black":"white"};
  font-size: 1.1vw;
  border: 0.5px solid black;
  border-radius: 10px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 1vw;
    padding: 0 3vw 0 3vw;
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    padding: 0 30px;
    font-size: 1vw;
    width: 15vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
    padding: 5px 15px;
  }
`,Px=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    width: 70%;
    gap: 5px;
  }
`,Bm=j.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    padding: 0 15px;
  }

  @media screen and (max-width: 600px) {
    gap: 1px;
    font-size: 3vw;
    padding: 0 15px;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 1.5vw;
    padding: 0 2px;
  }
`,Um=j.img`
  width: 1vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 16%;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 3vw;
    padding: 0;
    gap: 2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 15%;
  }
`;j.img`
  display: flex;
  flex-direction: row;
`;const Jo=j.img`
  width: 1.5vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 4vw;
    padding: 6px;
  }

  @media (max-width: 600px) {
    width: 6vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 100%;
    max-height: 3vh;
  }

  @media (orientation: landscape) and (max-width: 800px) {
    width: 100%;
    max-height: 5vh;
  }
`;function jx(e){return e.toLowerCase()+".svg"}function _x({pokemon:e}){var t;return w.jsx(Px,{id:"typeContainer",children:(t=e.types)==null?void 0:t.map((n,r)=>w.jsx(Dm,{color:lt.colors.buttonColor[n],children:w.jsxs(Bm,{children:[w.jsx(Um,{src:jx(n),alt:`${n} icon`,id:n}),n.toUpperCase()]})},r))})}function Hm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ox}=Object.prototype,{getPrototypeOf:Ec}=Object,Hl=(e=>t=>{const n=Ox.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>Hl(t)===e),Wl=e=>t=>typeof t===e,{isArray:jr}=Array,Si=Wl("undefined");function Rx(e){return e!==null&&!Si(e)&&e.constructor!==null&&!Si(e.constructor)&&Ge(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Wm=yt("ArrayBuffer");function Tx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Wm(e.buffer),t}const Ax=Wl("string"),Ge=Wl("function"),Vm=Wl("number"),Vl=e=>e!==null&&typeof e=="object",Lx=e=>e===!0||e===!1,yo=e=>{if(Hl(e)!=="object")return!1;const t=Ec(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Nx=yt("Date"),Fx=yt("File"),bx=yt("Blob"),Ix=yt("FileList"),$x=e=>Vl(e)&&Ge(e.pipe),zx=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ge(e.append)&&((t=Hl(e))==="formdata"||t==="object"&&Ge(e.toString)&&e.toString()==="[object FormData]"))},Mx=yt("URLSearchParams"),Dx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ri(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),jr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function Gm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Qm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Km=e=>!Si(e)&&e!==Qm;function Za(){const{caseless:e}=Km(this)&&this||{},t={},n=(r,i)=>{const o=e&&Gm(t,i)||i;yo(t[o])&&yo(r)?t[o]=Za(t[o],r):yo(r)?t[o]=Za({},r):jr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ri(arguments[r],n);return t}const Bx=(e,t,n,{allOwnKeys:r}={})=>(Ri(t,(i,o)=>{n&&Ge(i)?e[o]=Hm(i,n):e[o]=i},{allOwnKeys:r}),e),Ux=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Wx=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Ec(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Vx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gx=e=>{if(!e)return null;if(jr(e))return e;let t=e.length;if(!Vm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Qx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ec(Uint8Array)),Kx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Yx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xx=yt("HTMLFormElement"),qx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),vf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jx=yt("RegExp"),Ym=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ri(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},Zx=e=>{Ym(e,(t,n)=>{if(Ge(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ge(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},eS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return jr(e)?r(e):r(String(e).split(t)),n},tS=()=>{},nS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Hs="abcdefghijklmnopqrstuvwxyz",wf="0123456789",Xm={DIGIT:wf,ALPHA:Hs,ALPHA_DIGIT:Hs+Hs.toUpperCase()+wf},rS=(e=16,t=Xm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function iS(e){return!!(e&&Ge(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const oS=e=>{const t=new Array(10),n=(r,i)=>{if(Vl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=jr(r)?[]:{};return Ri(r,(l,s)=>{const a=n(l,i+1);!Si(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},lS=yt("AsyncFunction"),sS=e=>e&&(Vl(e)||Ge(e))&&Ge(e.then)&&Ge(e.catch),S={isArray:jr,isArrayBuffer:Wm,isBuffer:Rx,isFormData:zx,isArrayBufferView:Tx,isString:Ax,isNumber:Vm,isBoolean:Lx,isObject:Vl,isPlainObject:yo,isUndefined:Si,isDate:Nx,isFile:Fx,isBlob:bx,isRegExp:Jx,isFunction:Ge,isStream:$x,isURLSearchParams:Mx,isTypedArray:Qx,isFileList:Ix,forEach:Ri,merge:Za,extend:Bx,trim:Dx,stripBOM:Ux,inherits:Hx,toFlatObject:Wx,kindOf:Hl,kindOfTest:yt,endsWith:Vx,toArray:Gx,forEachEntry:Kx,matchAll:Yx,isHTMLForm:Xx,hasOwnProperty:vf,hasOwnProp:vf,reduceDescriptors:Ym,freezeMethods:Zx,toObjectSet:eS,toCamelCase:qx,noop:tS,toFiniteNumber:nS,findKey:Gm,global:Qm,isContextDefined:Km,ALPHABET:Xm,generateString:rS,isSpecCompliantForm:iS,toJSONObject:oS,isAsyncFn:lS,isThenable:sS};function z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qm=z.prototype,Jm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Jm[e]={value:e}});Object.defineProperties(z,Jm);Object.defineProperty(qm,"isAxiosError",{value:!0});z.from=(e,t,n,r,i,o)=>{const l=Object.create(qm);return S.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),z.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const aS=null;function eu(e){return S.isPlainObject(e)||S.isArray(e)}function Zm(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function xf(e,t,n){return e?e.concat(t).map(function(i,o){return i=Zm(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function uS(e){return S.isArray(e)&&!e.some(eu)}const cS=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Gl(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,P){return!S.isUndefined(P[y])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!a&&S.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,y,P){let h=g;if(g&&!P&&typeof g=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&uS(g)||(S.isFileList(g)||S.endsWith(y,"[]"))&&(h=S.toArray(g)))return y=Zm(y),h.forEach(function(m,x){!(S.isUndefined(m)||m===null)&&t.append(l===!0?xf([y],x,o):l===null?y:y+"[]",u(m))}),!1}return eu(g)?!0:(t.append(xf(P,y,o),u(g)),!1)}const c=[],p=Object.assign(cS,{defaultVisitor:d,convertValue:u,isVisitable:eu});function v(g,y){if(!S.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));c.push(g),S.forEach(g,function(h,f){(!(S.isUndefined(h)||h===null)&&i.call(t,h,S.isString(f)?f.trim():f,y,p))===!0&&v(h,y?y.concat(f):[f])}),c.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Sf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Cc(e,t){this._pairs=[],e&&Gl(e,this,t)}const e0=Cc.prototype;e0.append=function(t,n){this._pairs.push([t,n])};e0.toString=function(t){const n=t?function(r){return t.call(this,r,Sf)}:Sf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function dS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t0(e,t,n){if(!t)return e;const r=n&&n.encode||dS,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Cc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class fS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const kf=fS,n0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pS=typeof URLSearchParams<"u"?URLSearchParams:Cc,hS=typeof FormData<"u"?FormData:null,mS=typeof Blob<"u"?Blob:null,gS={isBrowser:!0,classes:{URLSearchParams:pS,FormData:hS,Blob:mS},protocols:["http","https","file","blob","url","data"]},r0=typeof window<"u"&&typeof document<"u",yS=(e=>r0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),wS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:r0,hasStandardBrowserEnv:yS,hasStandardBrowserWebWorkerEnv:vS},Symbol.toStringTag,{value:"Module"})),ft={...wS,...gS};function xS(e,t){return Gl(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ft.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function SS(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kS(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function i0(e){function t(n,r,i,o){let l=n[o++];const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&S.isArray(i)?i.length:l,a?(S.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!S.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&S.isArray(i[l])&&(i[l]=kS(i[l])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(SS(r),i,n,0)}),n}return null}function ES(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Pc={transitional:n0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(i0(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xS(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Gl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),ES(t)):t}],transformResponse:[function(t){const n=this.transitional||Pc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?z.from(s,z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{Pc.headers[e]={}});const jc=Pc,CS=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PS=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&CS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ef=Symbol("internals");function Ir(e){return e&&String(e).trim().toLowerCase()}function vo(e){return e===!1||e==null?e:S.isArray(e)?e.map(vo):String(e)}function jS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _S=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ws(e,t,n,r,i){if(S.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function OS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function RS(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Ql{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,u){const d=Ir(a);if(!d)throw new Error("header name must be a non-empty string");const c=S.findKey(i,d);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||a]=vo(s))}const l=(s,a)=>S.forEach(s,(u,d)=>o(u,d,a));return S.isPlainObject(t)||t instanceof this.constructor?l(t,n):S.isString(t)&&(t=t.trim())&&!_S(t)?l(PS(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Ir(t),t){const r=S.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return jS(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ir(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ws(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Ir(l),l){const s=S.findKey(r,l);s&&(!n||Ws(r,r[s],s,n))&&(delete r[s],i=!0)}}return S.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ws(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return S.forEach(this,(i,o)=>{const l=S.findKey(r,o);if(l){n[l]=vo(i),delete n[o];return}const s=t?OS(o):String(o).trim();s!==o&&delete n[o],n[s]=vo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ef]=this[Ef]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=Ir(l);r[s]||(RS(i,l),r[s]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}}Ql.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Ql.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(Ql);const Pt=Ql;function Vs(e,t){const n=this||jc,r=t||n,i=Pt.from(r.headers);let o=r.data;return S.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function o0(e){return!!(e&&e.__CANCEL__)}function Ti(e,t,n){z.call(this,e??"canceled",z.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Ti,z,{__CANCEL__:!0});function TS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const AS=ft.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),S.isString(r)&&l.push("path="+r),S.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function NS(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function l0(e,t){return e&&!LS(t)?NS(e,t):t}const FS=ft.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=S.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function bS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function IS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];l||(l=u),n[i]=a,r[i]=u;let c=o,p=0;for(;c!==i;)p+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const v=d&&u-d;return v?Math.round(p*1e3/v):void 0}}function Cf(e,t){let n=0;const r=IS(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-n,a=r(s),u=o<=l;n=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:a||void 0,estimated:a&&l&&u?(l-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const $S=typeof XMLHttpRequest<"u",zS=$S&&function(e){return new Promise(function(n,r){let i=e.data;const o=Pt.from(e.headers).normalize();let{responseType:l,withXSRFToken:s}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let d;if(S.isFormData(i)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[y,...P]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...P].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",P=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+P))}const p=l0(e.baseURL,e.url);c.open(e.method.toUpperCase(),t0(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const y=Pt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};TS(function(m){n(m),u()},function(m){r(m),u()},h),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new z("Request aborted",z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let P=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||n0;e.timeoutErrorMessage&&(P=e.timeoutErrorMessage),r(new z(P,h.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,c)),c=null},ft.hasStandardBrowserEnv&&(s&&S.isFunction(s)&&(s=s(e)),s||s!==!1&&FS(p))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&AS.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&S.forEach(o.toJSON(),function(P,h){c.setRequestHeader(h,P)}),S.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),l&&l!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Cf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Cf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{c&&(r(!y||y.type?new Ti(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=bS(p);if(g&&ft.protocols.indexOf(g)===-1){r(new z("Unsupported protocol "+g+":",z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},tu={http:aS,xhr:zS};S.forEach(tu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pf=e=>`- ${e}`,MS=e=>S.isFunction(e)||e===null||e===!1,s0={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!MS(n)&&(r=tu[(l=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(Pf).join(`
`):" "+Pf(o[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:tu};function Gs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ti(null,e)}function jf(e){return Gs(e),e.headers=Pt.from(e.headers),e.data=Vs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),s0.getAdapter(e.adapter||jc.adapter)(e).then(function(r){return Gs(e),r.data=Vs.call(e,e.transformResponse,r),r.headers=Pt.from(r.headers),r},function(r){return o0(r)||(Gs(e),r&&r.response&&(r.response.data=Vs.call(e,e.transformResponse,r.response),r.response.headers=Pt.from(r.response.headers))),Promise.reject(r)})}const _f=e=>e instanceof Pt?e.toJSON():e;function xr(e,t){t=t||{};const n={};function r(u,d,c){return S.isPlainObject(u)&&S.isPlainObject(d)?S.merge.call({caseless:c},u,d):S.isPlainObject(d)?S.merge({},d):S.isArray(d)?d.slice():d}function i(u,d,c){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function o(u,d){if(!S.isUndefined(d))return r(void 0,d)}function l(u,d){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>i(_f(u),_f(d),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=a[d]||i,p=c(e[d],t[d],d);S.isUndefined(p)&&c!==s||(n[d]=p)}),n}const a0="1.6.2",_c={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_c[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Of={};_c.transitional=function(t,n,r){function i(o,l){return"[Axios v"+a0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new z(i(l," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!Of[l]&&(Of[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function DS(e,t,n){if(typeof e!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new z("option "+o+" must be "+a,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+o,z.ERR_BAD_OPTION)}}const nu={assertOptions:DS,validators:_c},It=nu.validators;class Zo{constructor(t){this.defaults=t,this.interceptors={request:new kf,response:new kf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&nu.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:nu.assertOptions(i,{encode:It.function,serialize:It.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&S.merge(o.common,o[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Pt.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,c=0,p;if(!a){const g=[jf.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),p=g.length,d=Promise.resolve(n);c<p;)d=d.then(g[c++],g[c++]);return d}p=s.length;let v=n;for(c=0;c<p;){const g=s[c++],y=s[c++];try{v=g(v)}catch(P){y.call(this,P);break}}try{d=jf.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,p=u.length;c<p;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=xr(this.defaults,t);const n=l0(t.baseURL,t.url);return t0(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){Zo.prototype[t]=function(n,r){return this.request(xr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(xr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Zo.prototype[t]=n(),Zo.prototype[t+"Form"]=n(!0)});const wo=Zo;class Oc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new Ti(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Oc(function(i){t=i}),cancel:t}}}const BS=Oc;function US(e){return function(n){return e.apply(null,n)}}function HS(e){return S.isObject(e)&&e.isAxiosError===!0}const ru={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ru).forEach(([e,t])=>{ru[t]=e});const WS=ru;function u0(e){const t=new wo(e),n=Hm(wo.prototype.request,t);return S.extend(n,wo.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return u0(xr(e,i))},n}const le=u0(jc);le.Axios=wo;le.CanceledError=Ti;le.CancelToken=BS;le.isCancel=o0;le.VERSION=a0;le.toFormData=Gl;le.AxiosError=z;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=US;le.isAxiosError=HS;le.mergeConfig=xr;le.AxiosHeaders=Pt;le.formToJSON=e=>i0(S.isHTMLForm(e)?new FormData(e):e);le.getAdapter=s0.getAdapter;le.HttpStatusCode=WS;le.default=le;const un=le;async function VS(e){const t={method:"get",maxBodyLength:1/0,url:`https://pokeapi.co/api/v2/pokemon-species/${e}/`,headers:{}};try{return(await un.request(t)).data}catch(n){console.error(n)}}const Ai="https://pokeapi.co/api/v2",Li={berries:{berry:"/berry",firmness:"berry-firmness",flavour:"/berry-flavor"},contests:{type:"/contest-type",effect:"/contest-effect",superEffect:"/super-contest-effect/"},encounters:{method:"/encounter-method",conditions:"/encounter-condition",conditionValue:"/encounter-condition-value"},evolutions:{chain:"/evolution-chain",triggers:"/evolution-trigger"},games:{generation:"/generation",pokedexes:"/pokedex",version:"/version",versionGroups:"/version-group",flingEffect:"/item-fling-effect",itemPockets:"/item-pocket"},items:{item:"/item",atribute:"/item-attribute",categories:"/item-category"},locations:{location:"/location",area:"/location-area",palParkArea:"/pal-park-area",region:"/region"},machines:{machine:"/machine"},moves:{move:"/move",ailment:"/move-ailment",battleStyle:"/move-battle-style",category:"/move-category",damageClasses:"/move-damage-class",learnMethods:"/move-learn-method",moveTargets:"/move-target"},pokemon:{ability:"/ability",characteristic:"/characteristic",eggGroup:"/egg-group",gender:"/gender",growthRates:"/growth-rate",nature:"/nature",pokeathlonStats:"/pokeathlon-stat",pokemon:"/pokemon",locationArea:e=>`/pokemon/${e}/encounters`,color:"/pokemon-color/",form:"/pokemon-form",habitat:"/pokemon-habitat",shape:"/pokemon-shape",species:"/pokemon-species",stats:"/stat",types:"/type"}},GS=async()=>{const e={method:"get",maxBodyLength:1/0,url:Ai+Li.pokemon.types,headers:{}};try{return(await un.request(e)).data.results}catch(t){console.error(t)}},c0=async e=>{const t={method:"get",maxBodyLength:1/0,url:Ai+Li.pokemon.types+"/"+e,headers:{}};try{return(await un.request(t)).data}catch(n){console.error(n)}};function Rf(e){return"types/"+e.toLowerCase()+".svg"}function QS(e){return lt.colors.buttonColor[e]}function KS(e){return e.toLowerCase()+".svg"}function YS(){const e=In();function t(){e(yf("photo"))}function n(){e(yf("info"))}return w.jsxs(aw,{children:[w.jsx(uw,{onClick:t,children:"PHOTO"}),w.jsx(cw,{onClick:n,children:"INFO"})]})}function XS(){const e=I(r=>r.pokemon.selectedPokemon),[t,n]=L.useState();return L.useEffect(()=>{(async()=>{try{if(e.name!==void 0){const i=await VS(e.name),o=i.flavor_text_entries.find(s=>s.language.name==="en"),l=o?o.flavor_text:i.flavor_text_entries[0].flavor_text;n(l.replace(/\n/g," "))}}catch(i){console.error("Error fetching specie data:",i)}})()},[e.name]),e.name&&w.jsxs(Oi,{children:[w.jsxs($n,{children:["#",e.id," ",e.name.toUpperCase()]}),w.jsx(_x,{pokemon:e}),t&&w.jsx(hw,{children:t})]})}function qS(){var r,i,o,l,s,a,u,d;const e=I(c=>c.type.selectedType),[t,n]=L.useState(null);return L.useEffect(()=>{(async()=>{try{const p=await c0(e);n(p)}catch(p){console.error("Error loading Pokemon type:",p)}})()},[e]),w.jsxs(Oi,{children:[w.jsx($n,{children:t==null?void 0:t.name.toUpperCase()}),w.jsxs(dw,{children:["DOUBLE DAMAGE",((r=t==null?void 0:t.damage_relations)==null?void 0:r.double_damage_from.length)!==0&&w.jsxs(fw,{children:["FROM:",(o=(i=t==null?void 0:t.damage_relations)==null?void 0:i.double_damage_from)==null?void 0:o.map(c=>w.jsx(ef,{children:w.jsx(Jo,{src:Rf(c.name)})},c.name))]}),((l=t==null?void 0:t.damage_relations)==null?void 0:l.double_damage_to.length)!==0&&w.jsxs(pw,{children:["TO:",(a=(s=t==null?void 0:t.damage_relations)==null?void 0:s.double_damage_to)==null?void 0:a.map(c=>w.jsx(ef,{children:w.jsx(Jo,{src:Rf(c.name)})},c.name))]})]}),((u=t==null?void 0:t.damage_relations)==null?void 0:u.no_damage_from.length)!==0&&w.jsxs(mw,{children:["IMUNITIES",w.jsx(gw,{children:(d=t==null?void 0:t.damage_relations)==null?void 0:d.no_damage_from.map((c,p)=>w.jsx(Dm,{color:QS(c.name),children:w.jsxs(Bm,{children:[w.jsx(Um,{src:KS(c.name),alt:`${c.name} icon`}),c.name.toUpperCase()]})},p))})]})]})}function JS(){var t,n,r;const e=I(i=>i.item.selectedItem);return w.jsxs(yw,{children:[w.jsxs(vw,{children:["#",e.id," - ",e.name.toUpperCase()]}),w.jsx(ww,{children:((n=(t=e==null?void 0:e.effect_entries)==null?void 0:t[0])==null?void 0:n.short_effect)||"No short effect available"}),w.jsx(xw,{children:(r=e.attributes)==null?void 0:r.map(i=>w.jsx(Sw,{children:i.name.toUpperCase()},i.name))})]})}function ZS(){var t,n;const e=I(r=>r.regions.lists.selected);return w.jsxs(kw,{children:[w.jsxs(Ew,{children:["#",e.id," - ",e.name.toUpperCase()]}),w.jsx(jw,{children:(t=e.main_generation)==null?void 0:t.name.toUpperCase()}),w.jsxs(Cw,{children:["VERSIONS:",(n=e.version_groups)==null?void 0:n.map(r=>w.jsx(Pw,{children:r.name.toUpperCase()}))]})]})}function ek(){return w.jsxs(_w,{children:[w.jsx(Ow,{children:"A wild Pantufa appears!!"}),w.jsx(sw,{src:"pantufa.png"})]})}function d0(){const e=I(l=>l.mainMenu.selectedMainMenu),t=I(l=>l.pokemon.selectedPokemon.name),n=I(l=>l.type.selectedType),r=I(l=>l.item.selectedItem.name),i=I(l=>l.regions.lists.selected.name);let o=e!==""?e:"POKÉDEX";switch(e){case"POKÉMON":o=t?t.toUpperCase():"POKÉMON";break;case"TYPES":o=n?n.toUpperCase():"TYPES";break;case"ITEMS":o=r?r.toUpperCase():"ITEMS";break;case"REGIONS":o=i?i.toUpperCase():"REGIONS";break}return w.jsx(Zv,{id:"blackScreen",children:w.jsx(t1,{id:"animatedText",children:w.jsx(n1,{id:"textDisplay",children:o})})})}function Kl(){const e=I(n=>n.mainMenu.selectedMainMenu);let t;switch(e){case"POKÉMON":t=w.jsx(tk,{});break;case"TYPES":t=w.jsx(nk,{});break;case"ITEMS":t=w.jsx(rk,{});break;case"REGIONS":t=w.jsx(ik,{});break;default:t=w.jsx(ok,{})}return w.jsxs(r1,{id:"whiteScreen",children:[t,w.jsx(YS,{})]})}function tk(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>{const i=r.pokemon.selectedPokemon.types;return i&&i.length>0?i[0]:null}),n=t&&lt.colors.background[t];return w.jsxs(_i,{color:n,id:"screen",children:[!t&&w.jsx($n,{id:"selectPokemon",children:"SELECT POKÉMON"}),t&&e==="photo"&&w.jsx(Tw,{}),t&&e==="info"&&w.jsx(XS,{})]})}function nk(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>r.type.selectedType),n=t&&lt.colors.background[t];return w.jsxs(_i,{color:n,children:[!t&&w.jsx($n,{id:"selectType",children:"SELECT TYPE"}),t&&e==="photo"&&w.jsx(Aw,{}),t&&e==="info"&&w.jsx(qS,{})]})}function rk(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>{var i;return(i=r.item.selectedItem.category)==null?void 0:i.name}),n=lt.colors.itemGradientMap[t];return w.jsxs(_i,{color:n,id:"screen",children:[!t&&w.jsx($n,{id:"selectItem",children:"SELECT ITEM"}),t&&e==="photo"&&w.jsx(Lw,{}),t&&e==="info"&&w.jsx(JS,{})]})}function ik(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>r.regions.lists.selected.name),n=lt.colors.regionColorMapBackground[t];return w.jsxs(_i,{color:n,children:[!t&&w.jsx($n,{id:"selectRegions",children:"SELECT REGION"}),t&&e==="photo"&&w.jsx(Nw,{}),t&&e==="info"&&w.jsx(ZS,{})]})}function ok(){const e=I(t=>t.infoMenu.selectedMenu);return w.jsxs(_i,{id:"screen",children:[e==="photo"&&w.jsx(Fw,{}),e==="info"&&w.jsx(ek,{})]})}const lk=j.input`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1.3vw;
  border: 3px solid #1d1e2c;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  padding-left: 3vw;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    padding-left: 8vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    padding-left: 12vw;
  }
`,sk=j.div`
  height: 8%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 74%;
    height: 6%;
  }
`,ak=j.img`
  width: 2vw;
  height: auto;
  position: absolute;
  margin-left: 1vw;

  @media (max-width: 1280px) {
    margin-left: 4vw;
    width: 6vw;
  }

  @media (max-width: 600px) {
    margin-left: 8vw;
    width: 8vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    height: 7vh;
    width: auto;
  }
`;j.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;j.li`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;j.div`
  font-size: 14px;
  color: #333;
`;const uk={lists:{originalList:[],filteredList:[]}},f0=Lt({name:"list",initialState:uk,reducers:{updateOriginalList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalList:ck,updateFilteredList:iu}=f0.actions,dk=f0.reducer,fk={lists:{originalList:[],filteredList:[]}},p0=Lt({name:"list",initialState:fk,reducers:{updateOriginalTypeList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredTypeList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalTypeList:pk,updateFilteredTypeList:ou}=p0.actions,hk=p0.reducer,mk={lists:{originalList:[],filteredList:[]}},h0=Lt({name:"list",initialState:mk,reducers:{updateOriginalItemList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredItemList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalItemList:gk,updateFilteredItemList:lu}=h0.actions,yk=h0.reducer,vk={lists:{originalList:[],filteredList:[],selected:{url:"",id:0,locations:[{name:"",url:""}],main_generation:{name:"",url:""},name:"",names:[{language:{name:"",url:""},name:""}],pokedexes:[{name:"",url:""}],version_groups:[{name:"",url:""}]}}},m0=Lt({name:"list",initialState:vk,reducers:{originalRegionList:(e,t)=>{e.lists.originalList=t.payload},filteredRegionList:(e,t)=>{e.lists.filteredList=t.payload},selectRegion:(e,t)=>{e.lists.selected=t.payload}}}),{originalRegionList:wk,filteredRegionList:su,selectRegion:xk}=m0.actions,Sk=m0.reducer;function Yl(){const e=I(a=>a.pokemonList.lists),t=I(a=>a.typeList.lists),n=I(a=>a.itemList.lists),r=I(a=>a.regions.lists),i=In(),o=I(a=>a.mainMenu.selectedMainMenu);function l(a){switch(o){case"POKÉMON":if(a==="")i(iu(e.originalList));else{const u=e.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(iu(u))}break;case"TYPES":if(a==="")i(ou(t.originalList));else{const u=t.originalList.filter(d=>d.typeInfo.name.toLowerCase().includes(a.toLowerCase()));i(ou(u))}break;case"ITEMS":if(a==="")i(lu(n.originalList));else{const u=n.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(lu(u))}break;case"REGIONS":if(a==="")i(su(r.originalList));else{const u=r.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(su(u))}break}}const s=`Search ${o.toLocaleLowerCase()}...`;return w.jsxs(sk,{id:"searchContainer",children:[w.jsx(ak,{src:"icons/detetive.png",id:"detective"}),w.jsx(lk,{placeholder:s,id:"searchBox",onChange:a=>l(a.target.value)})]})}const kk=j.div`
  display: flex;
  width: 75%;
  height: 15%;
  gap: 6px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    height: 12%;
  }

  @media (max-width: 600px) {
    height: 10%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    height: 10vw;
    width: 50vw;
  }
`,Ek=j.button`
  background-color: ${e=>e.selected?"#325a6d":"#437c90"};
  color: ${e=>e.selected?"#b9e9f9":"white"};
  width: 25%;
  height: 100%;
  font-family: 'RetroGaming', sans-serif;
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-top: ${e=>e.selected?"2px solid #1c2d37":"none"};
  border-left: ${e=>e.selected?"2px solid #1c2d37":"none"};
  border-right: ${e=>e.selected?"none":"3px solid #4990a9"};
  border-bottom: ${e=>e.selected?"none":"3px solid #4990a9"};
  transition: background-color 0.1s;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
    width: 30%;
  }

  @media (max-width: 720px) {
    font-size: 6px;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
  }
`,Xl=j.button`
  width: 100%;
  position: relative;
  background: ${e=>e.color?e.color:"linear-gradient(to right, #afafaf, #929292)"};
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 300px;
    padding: 10px;
    max-width: 20vw;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    height: 5vw;
  }
`,Ck=j.p`
  position: relative;
  font-size: 0.8vw;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 1.5vw;
  }
`,Pk=j.img`
  display: flex;
  height: 40%;
  max-width: 50%;
  box-sizing: border-box;
`,jk={selectedMainMenu:""},g0=Lt({name:"mainMenu",initialState:jk,reducers:{selectMainMenu:(e,t)=>{e.selectedMainMenu=t.payload}}}),{selectMainMenu:_k}=g0.actions,Ok=g0.reducer;function ql({onButtonClick:e}){const[t,n]=L.useState(5),r=["POKÉMON","TYPES","ITEMS","REGIONS"],i=In(),o=I(a=>a.mainMenu.selectedMainMenu);L.useEffect(()=>{l(t,o)});const l=(a,u)=>{i(_k(u)),n(a),e&&e(a)},s=a=>`icons/${a.toLowerCase()}.png`;return w.jsx(kk,{id:"buttonContainer",children:r.map((a,u)=>w.jsxs(Ek,{id:a,selected:t===u,onClick:()=>l(u,a),children:[w.jsx(Pk,{src:s(a)}),w.jsx(Ck,{children:a})]},u))})}const Rk=j.div`
  display: flex;
  width: 100%;
  height: 18%;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`,Tk=j.div`
  display: flex;
  width: 50%;
  height: 10%;
  border-top: 5px solid black;
`,Ak=ac`
  0% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
`,Lk=j.div`
  display: flex;
  width: 25%;
  height: 50%;
  border-top: 2px solid black;
  background: radial-gradient(#3db8f5, #277eaa, #184f6b);
  border-radius: 50%;
  margin-left: 30px;
  border: solid white 5px;

  animation: ${Ak} 3s ease-in-out infinite;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`,Nk=j.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`,Fk=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  gap: 20px;
  margin-left: 10px;
  position: relative;
  box-sizing: border-box;
`,bk=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f53d3d, #aa2727, #6b1818);
  border-radius: 50%;
  border: solid black 1px;
`,Ik=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f5d03d, #aa9927, #6b5518);
  border-radius: 50%;

  border: solid black 1px;
`,$k=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#3df543, #27aa38, #186b23);
  border-radius: 50%;
  border: solid black 1px;
`;function zk(){return w.jsxs(Rk,{children:[w.jsxs(Nk,{children:[w.jsx(Lk,{}),w.jsxs(Fk,{children:[w.jsx(bk,{}),w.jsx(Ik,{}),w.jsx($k,{})]})]}),w.jsx(Tk,{})]})}const Mk=j.div`
  display: flex;
  height: 40%;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    height: 30%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 30%;
    width: 80%;
  }

  @media screen and (orientation: landscape) and (max-width: 1366px) {
    height: 60%;
    width: 100%;
  }
`,Jl=j.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff0101;
    border: 2px solid black;
    height: 2vw;
  }

  &::-webkit-scrollbar-track {
    background-color: #494949;
  }

  @media screen and (max-width: 1280px) {
    height: 100%;
    flex-direction: row;
    width: 100%;

    &::-webkit-scrollbar {
      height: 30px;
      display: flex;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff0101;
      border: 2px solid black;
      height: 10vw;
      width: 5vw;
    }

    &::-webkit-scrollbar-track {
      background-color: #494949;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      width: 30px;
      display: flex;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff0101;
      border: 2px solid black;
      height: 5vw;
    }

    &::-webkit-scrollbar-track {
      background-color: #494949;
    }
  }

  @media screen and (orientation: landscape) and (max-width: 1366px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`,Zl=j.li`
  font-size: 2vw;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'RetroGaming', sans-serif;
  text-shadow: -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    1px 1px 1px black;

  @media screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
    width: 150px;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: row;
  }
`;j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 45%;
  background-image: linear-gradient(to bottom, #f1f1f4, #a5a5a5);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
`;const es=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 100%;
  }
`,gt=j.div`
  font-size: 0.7vw;

  @media screen and (max-width: 1280px) {
    font-size: 1.8vw;
    overflow-x: auto;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    overflow-y: auto;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 80%;
    display: flex;
  }
`,Dk=j.img`
  width: 1.6vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 6vw;
    padding: 6px;
  }

  @media (max-width: 600px) {
    width: 8vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 7%;
  }
`;var au=(e=>(e[e.First=1]="First",e[e.Second=152]="Second",e[e.Third=252]="Third",e[e.Fourth=387]="Fourth",e[e.Fifth=494]="Fifth",e[e.Sixth=650]="Sixth",e[e.Seventh=722]="Seventh",e[e.Eighth=810]="Eighth",e))(au||{});function Tf(e){let t,n;switch(e){case 1:t=1,n=151;break;case 152:t=152,n=251;break;case 252:t=252,n=386;break;case 387:t=387,n=493;break;case 494:t=494,n=649;break;case 650:t=650,n=721;break;case 722:t=722,n=809;break;case 810:t=810,n=1010;break;default:throw new Error("Invalid Pokémon Generation")}return{start:t,end:n}}const Bk=async(e=1,t=151)=>{const n={method:"get",maxBodyLength:1/0,url:`${Ai}${Li.pokemon.pokemon}?offset=${e-1}&limit=${t}`,headers:{}};try{return(await un.request(n)).data}catch(r){console.error(r)}},Uk=async e=>{const t={method:"get",maxBodyLength:1/0,url:`${Ai}${Li.pokemon.pokemon}/${e}`,headers:{}};try{return(await un.request(t)).data}catch(n){console.error(n)}},Hk={selectedPokemon:{name:"",url:"",id:0,image:"",types:[]}},y0=Lt({name:"pokemon",initialState:Hk,reducers:{selectPokemon:(e,t)=>{e.selectedPokemon=t.payload}}}),{selectPokemon:Wk}=y0.actions,Vk=y0.reducer,Gk={selectedType:""},v0=Lt({name:"type",initialState:Gk,reducers:{selectType:(e,t)=>{e.selectedType=t.payload}}}),{selectType:Qk}=v0.actions,Kk=v0.reducer;function ts(){return w.jsx(Yk,{})}const Yk=j.img.attrs({src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs",alt:"Pikachu Loading"})`
  width: 100%;

  @media screen and (max-width: 1280px) {
    width: 30%;
  }

  @media screen and (max-width: 600px) {
    width: 30%;
  }
`;async function Xk(){const e={method:"get",maxBodyLength:1/0,url:"https://pokeapi.co/api/v2/item/?offset=0&limit=954",headers:{}};try{return(await un.request(e)).data.results}catch(t){console.error(t)}}async function w0(e){const t={method:"get",maxBodyLength:1/0,url:e,headers:{}};try{return(await un.request(t)).data}catch(n){console.error(n)}}const qk={selectedItem:{attributes:[{name:"",url:""}],baby_trigger_for:null,category:{name:"",url:""},cost:0,effect_entries:[{effect:"",language:{name:"",url:""},short_effect:""}],flavor_text_entries:[{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},text:`The best BALL that
catches a POKéMON
without fail.`,version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}}],fling_effect:null,fling_power:null,game_indices:[{game_index:0,generation:{name:"",url:""}}],held_by_pokemon:[],id:0,machines:[],name:"",names:[{language:{name:"",url:""},name:""}],sprites:{default:""}}},x0=Lt({name:"item",initialState:qk,reducers:{selectItem:(e,t)=>{e.selectedItem=t.payload}}}),{selectItem:Jk}=x0.actions,Zk=x0.reducer,e2=async()=>{const e={method:"get",maxBodyLength:1/0,url:`${Ai}${Li.locations.region}`,headers:{}};try{return(await un.request(e)).data.results}catch(t){console.error(t)}};function ns(){const e=I(t=>t.mainMenu.selectedMainMenu);return w.jsxs(Mk,{children:[e==="POKÉMON"&&w.jsx(t2,{}),e==="TYPES"&&w.jsx(n2,{}),e==="ITEMS"&&w.jsx(r2,{}),e==="REGIONS"&&w.jsx(i2,{})]})}function t2(){const[e,t]=L.useState(!0),n=I(a=>a.pokemonList.lists),r=In(),i=Tf(au.First),o=Tf(au.Eighth);L.useEffect(()=>{async function a(){try{t(!0);const u=await Bk(i.start,o.end),d=await Promise.all(u.results.map(async c=>{const p=await Uk(c.name);return{...c,id:p.id,image:p.sprites.other["official-artwork"].front_default,types:p.types.map(g=>g.type.name)}}));r(ck(d)),r(iu(d))}catch(u){console.error("Error fetching Pokemon data:",u)}finally{t(!1)}}a()},[r,i.start,o.end]);const l=a=>{r(Wk(a))};function s(a){return"types/"+a.toLowerCase()+".svg"}return w.jsx(es,{children:e?w.jsx(ts,{}):w.jsx(Jl,{children:n.filteredList.map(a=>{var u,d;return w.jsx(Xl,{color:lt.colors.type[(u=a.types)==null?void 0:u[0]],onClick:()=>l(a),children:w.jsxs(Zl,{children:[w.jsxs(gt,{children:["#",a.id]}),w.jsx(gt,{children:a.name.toUpperCase()}),w.jsx(gt,{children:(d=a.types)==null?void 0:d.map(c=>w.jsx(Jo,{src:s(c),alt:c},c))})]})},a.name)})})})}function n2(){const[e,t]=L.useState(!0),n=In(),r=I(l=>l.typeList.lists.filteredList);L.useEffect(()=>{async function l(){t(!0);const s=await GS(),a=await Promise.all(s.map(async u=>({typeInfo:await c0(u.name)})));n(pk(a)),n(ou(a)),t(!1)}l()},[n]);function i(l){return"types/"+l.toLowerCase()+".svg"}const o=l=>{n(Qk(l))};return w.jsx(es,{children:e?w.jsx(ts,{}):w.jsx(Jl,{children:r.map(l=>w.jsx(Xl,{color:lt.colors.type[l.typeInfo.name],onClick:()=>o(l.typeInfo.name),children:w.jsxs(Zl,{children:[w.jsxs(gt,{children:["#",l.typeInfo.id]}),w.jsx(gt,{children:l.typeInfo.name.toUpperCase()}),w.jsx(gt,{children:w.jsx(Jo,{src:i(l.typeInfo.name),alt:l.typeInfo.name})})]})},l.typeInfo.name))})})}function r2(){const[e,t]=L.useState(!0),n=In(),r=I(o=>o.itemList.lists.filteredList);L.useEffect(()=>{async function o(){try{const l=await Xk(),s=await Promise.all(l.map(async a=>await w0(a.url)));n(gk(s)),n(lu(s)),t(!1)}catch(l){console.error("Error fetching items:",l),t(!1)}}o()},[n]);const i=o=>{n(Jk(o))};return w.jsx(es,{children:e?w.jsx(ts,{}):w.jsx(Jl,{children:r.map(o=>{var l,s;return w.jsx(Xl,{color:lt.colors.itemTypeColorMap[(l=o.category)==null?void 0:l.name],onClick:()=>i(o),children:w.jsxs(Zl,{children:[w.jsxs(gt,{children:["#",o.id]}),w.jsx(gt,{children:o.name.toUpperCase()}),w.jsx(ew,{src:(s=o.sprites)==null?void 0:s.default})]})},o.id)})})})}function i2(){const[e,t]=L.useState(!0),n=I(o=>o.regions.lists.filteredList),r=In();L.useEffect(()=>{async function o(){const l=await e2(),s=await Promise.all(l.map(async a=>await w0(a.url)));r(wk(s)),r(su(s)),t(!1)}o()},[r]);const i=o=>{r(xk(o))};return w.jsx(es,{children:e?w.jsx(ts,{}):w.jsx(Jl,{children:n.map(o=>w.jsx(Xl,{color:lt.colors.regionColorMap[o.name],onClick:()=>i(o),children:w.jsxs(Zl,{children:[w.jsxs(gt,{children:["#",o.id]}),w.jsx(gt,{children:o.name.toUpperCase()}),w.jsx(Dk,{src:"icons/map.png"})]})},o.name))})})}const o2=j.audio`
  width: 250px;
  background-color: transparent;
  position: relative;
  bottom: 0;
  left: 0;

  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.55);
`,l2=()=>{const e=L.useRef(null);return L.useEffect(()=>{e.current&&(e.current.volume=.5)},[]),w.jsx(o2,{controls:!0,ref:e,id:"music",children:w.jsx("source",{src:"opening.mp3",type:"audio/mp3"})})};function s2(){const e=I(t=>t.mainMenu.selectedMainMenu);return w.jsxs(Kv,{children:[w.jsxs(Yv,{children:[w.jsx(zk,{}),w.jsxs(Sl,{children:[w.jsx(d0,{}),w.jsx(ql,{}),e!==""&&w.jsx(Yl,{}),w.jsx(l2,{})]})]}),w.jsx(Xv,{children:w.jsxs(qv,{children:[w.jsx(Kl,{}),w.jsx(ns,{})]})})]})}function a2(){const e=I(t=>t.mainMenu.selectedMainMenu);return w.jsxs(Sl,{children:[w.jsx(Kl,{}),w.jsx(ql,{}),e!==""&&w.jsx(Yl,{}),w.jsx(ns,{})]})}const u2=({size:e})=>{const t=I(n=>n.mainMenu.selectedMainMenu);return w.jsxs(Sl,{children:[w.jsx(Kl,{}),w.jsxs(Jv,{children:[w.jsx(ql,{}),e>=800&&t!==""&&w.jsx(Yl,{}),w.jsx(ns,{})]})]})};function c2(){const e=I(t=>t.mainMenu.selectedMainMenu);return w.jsxs(Sl,{children:[w.jsx(d0,{}),w.jsx(Kl,{}),w.jsx(ql,{}),e!==""&&w.jsx(Yl,{}),w.jsx(ns,{})]})}globalThis&&globalThis.__awaiter;function d2(e,t,n,r){const i=L.useRef(t);S0(()=>{i.current=t},[t]),L.useEffect(()=>{var o;const l=(o=n==null?void 0:n.current)!==null&&o!==void 0?o:window;if(!(l&&l.addEventListener))return;const s=a=>i.current(a);return l.addEventListener(e,s,r),()=>{l.removeEventListener(e,s,r)}},[e,n,r])}globalThis&&globalThis.__awaiter;const S0=typeof window<"u"?L.useLayoutEffect:L.useEffect;function f2(){const[e,t]=L.useState({width:0,height:0}),n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return d2("resize",n),S0(()=>{n()},[]),e}function p2(){const{width:e,height:t}=f2(),[n,r]=L.useState(null);return L.useEffect(()=>{t<e&&e<1367?r(w.jsx(u2,{size:t})):e<600?r(w.jsx(a2,{})):e<1280?r(w.jsx(c2,{})):r(w.jsx(s2,{}))},[e,t]),w.jsx(w.Fragment,{children:n})}function h2(){return w.jsx(Gv,{theme:lt,children:w.jsx(p2,{})})}const m2=px({reducer:{pokemon:Vk,infoMenu:Cx,mainMenu:Ok,pokemonList:dk,typeList:hk,itemList:yk,type:Kk,item:Zk,regions:Sk}});Qs.createRoot(document.getElementById("root")).render(w.jsx(Q1,{store:m2,children:w.jsx(h2,{})}));
