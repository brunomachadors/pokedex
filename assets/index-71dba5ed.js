(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Af={exports:{}},aa={},Ff={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),_0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),$0=Symbol.for("react.memo"),z0=Symbol.for("react.lazy"),Rc=Symbol.iterator;function M0(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var If={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nf=Object.assign,$f={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||If}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zf(){}zf.prototype=Sr.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||If}var cu=uu.prototype=new zf;cu.constructor=uu;Nf(cu,Sr.prototype);cu.isPureReactComponent=!0;var Lc=Array.isArray,Mf=Object.prototype.hasOwnProperty,du={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Bf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Mf.call(t,r)&&!Df.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ei,type:e,key:o,ref:a,props:i,_owner:du.current}}function D0(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function B0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B0(""+e.key):t.toString(36)}function io(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ei:case _0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+al(a,0):r,Lc(i)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),io(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=D0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Tc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Lc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+al(o,l);a+=io(o,t,n,s,i)}else if(s=M0(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+al(o,l++),a+=io(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Di(e,t,n){if(e==null)return e;var r=[],i=0;return io(e,r,"","",function(o){return t.call(n,o,i++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},oo={transition:null},H0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:oo,ReactCurrentOwner:du};$.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Sr;$.Fragment=R0;$.Profiler=T0;$.PureComponent=uu;$.StrictMode=L0;$.Suspense=N0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Mf.call(t,s)&&!Df.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:a}};$.createContext=function(e){return e={$$typeof:F0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:A0,_context:e},e.Consumer=e};$.createElement=Bf;$.createFactory=function(e){var t=Bf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:I0,render:e}};$.isValidElement=fu;$.lazy=function(e){return{$$typeof:z0,_payload:{_status:-1,_result:e},_init:U0}};$.memo=function(e,t){return{$$typeof:$0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.2.0";Ff.exports=$;var L=Ff.exports;const bn=O0(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=L,V0=Symbol.for("react.element"),G0=Symbol.for("react.fragment"),Q0=Object.prototype.hasOwnProperty,K0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Q0.call(t,r)&&!Y0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:V0,type:e,key:o,ref:a,props:i,_owner:K0.current}}aa.Fragment=G0;aa.jsx=Uf;aa.jsxs=Uf;Af.exports=aa;var y=Af.exports,Kl={},Hf={exports:{}},$e={},Wf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var F=O.length;O.push(A);e:for(;0<F;){var B=F-1>>>1,ne=O[B];if(0<i(ne,A))O[B]=A,O[F]=ne,F=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],F=O.pop();if(F!==A){O[0]=F;e:for(var B=0,ne=O.length,Ft=ne>>>1;B<Ft;){var Be=2*(B+1)-1,vt=O[Be],Ue=Be+1,st=O[Ue];if(0>i(vt,F))Ue<ne&&0>i(st,vt)?(O[B]=st,O[Ue]=F,B=Ue):(O[B]=vt,O[Be]=F,B=Be);else if(Ue<ne&&0>i(st,F))O[B]=st,O[Ue]=F,B=Ue;else break e}}return A}function i(O,A){var F=O.sortIndex-A.sortIndex;return F!==0?F:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,p=3,w=!1,g=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=O)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(O){if(v=!1,m(O),!g)if(n(s)!==null)g=!0,Or(E);else{var A=n(u);A!==null&&hn(x,A.startTime-O)}}function E(O,A){g=!1,v&&(v=!1,h(R),R=-1),w=!0;var F=p;try{for(m(A),c=n(s);c!==null&&(!(c.expirationTime>A)||O&&!le());){var B=c.callback;if(typeof B=="function"){c.callback=null,p=c.priorityLevel;var ne=B(c.expirationTime<=A);A=e.unstable_now(),typeof ne=="function"?c.callback=ne:c===n(s)&&r(s),m(A)}else r(s);c=n(s)}if(c!==null)var Ft=!0;else{var Be=n(u);Be!==null&&hn(x,Be.startTime-A),Ft=!1}return Ft}finally{c=null,p=F,w=!1}}var b=!1,k=null,R=-1,M=5,T=-1;function le(){return!(e.unstable_now()-T<M)}function fn(){if(k!==null){var O=e.unstable_now();T=O;var A=!0;try{A=k(!0,O)}finally{A?pn():(b=!1,k=null)}}else b=!1}var pn;if(typeof f=="function")pn=function(){f(fn)};else if(typeof MessageChannel<"u"){var zi=new MessageChannel,il=zi.port2;zi.port1.onmessage=fn,pn=function(){il.postMessage(null)}}else pn=function(){P(fn,0)};function Or(O){k=O,b||(b=!0,pn())}function hn(O,A){R=P(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Or(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var F=p;p=A;try{return O()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=p;p=O;try{return A()}finally{p=F}},e.unstable_scheduleCallback=function(O,A,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=F+ne,O={id:d++,callback:A,priorityLevel:O,startTime:F,expirationTime:ne,sortIndex:-1},F>B?(O.sortIndex=F,t(u,O),n(s)===null&&O===n(u)&&(v?(h(R),R=-1):v=!0,hn(x,F-B))):(O.sortIndex=ne,t(s,O),g||w||(g=!0,Or(E))),O},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(O){var A=p;return function(){var F=p;p=A;try{return O.apply(this,arguments)}finally{p=F}}}})(Vf);Wf.exports=Vf;var X0=Wf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf=L,Ie=X0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qf=new Set,ei={};function Nn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(ei[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Fc={};function J0(e){return Yl.call(Fc,e)?!0:Yl.call(Ac,e)?!1:q0.test(e)?Fc[e]=!0:(Ac[e]=!0,!1)}function Z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eg(e,t,n,r){if(t===null||typeof t>"u"||Z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eg(t,n,i,r)&&(n=null),r||i===null?J0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Xf=Symbol.for("react.offscreen"),Ic=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ll;function zr(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var sl=!1;function ul(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function tg(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Dn:return"Portal";case Xl:return"Profiler";case gu:return"StrictMode";case ql:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yf:return(e.displayName||"Context")+".Consumer";case Kf:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function ng(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rg(e){var t=qf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=rg(e))}function Jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function es(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zf(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function ts(e,t){Zf(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ns(e,t.type,n):t.hasOwnProperty("defaultValue")&&ns(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ns(e,t,n){(t!=="number"||Po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Mr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function ep(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hi,np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ig=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){ig.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function ip(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var og=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(og[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function as(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,er=null,tr=null;function Dc(e){if(e=ji(e)){if(typeof ss!="function")throw Error(C(280));var t=e.stateNode;t&&(t=da(t),ss(e.stateNode,e.type,t))}}function op(e){er?tr?tr.push(e):tr=[e]:er=e}function ap(){if(er){var e=er,t=tr;if(tr=er=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function lp(e,t){return e(t)}function sp(){}var cl=!1;function up(e,t,n){if(cl)return e(t,n);cl=!0;try{return lp(e,t,n)}finally{cl=!1,(er!==null||tr!==null)&&(sp(),ap())}}function ni(e,t){var n=e.stateNode;if(n===null)return null;var r=da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var us=!1;if(jt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){us=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{us=!1}function ag(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vr=!1,jo=null,bo=!1,cs=null,lg={onError:function(e){Vr=!0,jo=e}};function sg(e,t,n,r,i,o,a,l,s){Vr=!1,jo=null,ag.apply(lg,arguments)}function ug(e,t,n,r,i,o,a,l,s){if(sg.apply(this,arguments),Vr){if(Vr){var u=jo;Vr=!1,jo=null}else throw Error(C(198));bo||(bo=!0,cs=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if($n(e)!==e)throw Error(C(188))}function cg(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bc(i),e;if(o===r)return Bc(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function dp(e){return e=cg(e),e!==null?fp(e):null}function fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fp(e);if(t!==null)return t;e=e.sibling}return null}var pp=Ie.unstable_scheduleCallback,Uc=Ie.unstable_cancelCallback,dg=Ie.unstable_shouldYield,fg=Ie.unstable_requestPaint,re=Ie.unstable_now,pg=Ie.unstable_getCurrentPriorityLevel,xu=Ie.unstable_ImmediatePriority,hp=Ie.unstable_UserBlockingPriority,Oo=Ie.unstable_NormalPriority,hg=Ie.unstable_LowPriority,mp=Ie.unstable_IdlePriority,la=null,ht=null;function mg(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(la,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:vg,gg=Math.log,yg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(gg(e)/yg|0)|0}var Wi=64,Vi=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Dr(l):(o&=a,o!==0&&(r=Dr(o)))}else a=n&~i,a!==0?r=Dr(a):o!==0&&(r=Dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function wg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-it(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=wg(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gp(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Sg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,ku,wp,xp,Sp,fs=!1,Gi=[],Gt=null,Qt=null,Kt=null,ri=new Map,ii=new Map,Bt=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function Lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eg(e,t,n,r,i){switch(t){case"focusin":return Gt=Lr(Gt,e,t,n,r,i),!0;case"dragenter":return Qt=Lr(Qt,e,t,n,r,i),!0;case"mouseover":return Kt=Lr(Kt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ri.set(o,Lr(ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ii.set(o,Lr(ii.get(o)||null,e,t,n,r,i)),!0}return!1}function kp(e){var t=wn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=cp(n),t!==null){e.blockedOn=t,Sp(e.priority,function(){wp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ls=r,n.target.dispatchEvent(r),ls=null}else return t=ji(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){ao(e)&&n.delete(t)}function Cg(){fs=!1,Gt!==null&&ao(Gt)&&(Gt=null),Qt!==null&&ao(Qt)&&(Qt=null),Kt!==null&&ao(Kt)&&(Kt=null),ri.forEach(Wc),ii.forEach(Wc)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Cg)))}function oi(e){function t(i){return Tr(i,e)}if(0<Gi.length){Tr(Gi[0],e);for(var n=1;n<Gi.length;n++){var r=Gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Tr(Gt,e),Qt!==null&&Tr(Qt,e),Kt!==null&&Tr(Kt,e),ri.forEach(t),ii.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&Bt.shift()}var nr=Lt.ReactCurrentBatchConfig,Ro=!0;function Pg(e,t,n,r){var i=H,o=nr.transition;nr.transition=null;try{H=1,Eu(e,t,n,r)}finally{H=i,nr.transition=o}}function jg(e,t,n,r){var i=H,o=nr.transition;nr.transition=null;try{H=4,Eu(e,t,n,r)}finally{H=i,nr.transition=o}}function Eu(e,t,n,r){if(Ro){var i=ps(e,t,n,r);if(i===null)Sl(e,t,r,Lo,n),Hc(e,r);else if(Eg(i,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<kg.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&vp(o),o=ps(e,t,n,r),o===null&&Sl(e,t,r,Lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sl(e,t,r,null,n)}}var Lo=null;function ps(e,t,n,r){if(Lo=null,e=wu(r),e=wn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function Ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pg()){case xu:return 1;case hp:return 4;case Oo:case hg:return 16;case mp:return 536870912;default:return 16}default:return 16}}var Wt=null,Cu=null,lo=null;function Cp(){if(lo)return lo;var e,t=Cu,n=t.length,r,i="value"in Wt?Wt.value:Wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return lo=i.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function Vc(){return!1}function ze(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qi:Vc,this.isPropagationStopped=Vc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=ze(kr),Pi=ee({},kr,{view:0,detail:0}),bg=ze(Pi),fl,pl,Ar,sa=ee({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(fl=e.screenX-Ar.screenX,pl=e.screenY-Ar.screenY):pl=fl=0,Ar=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Gc=ze(sa),Og=ee({},sa,{dataTransfer:0}),_g=ze(Og),Rg=ee({},Pi,{relatedTarget:0}),hl=ze(Rg),Lg=ee({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=ze(Lg),Ag=ee({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=ze(Ag),Ig=ee({},kr,{data:0}),Qc=ze(Ig),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zg[e])?!!t[e]:!1}function ju(){return Mg}var Dg=ee({},Pi,{key:function(e){if(e.key){var t=Ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bg=ze(Dg),Ug=ee({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=ze(Ug),Hg=ee({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Wg=ze(Hg),Vg=ee({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=ze(Vg),Qg=ee({},sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=ze(Qg),Yg=[9,13,27,32],bu=jt&&"CompositionEvent"in window,Gr=null;jt&&"documentMode"in document&&(Gr=document.documentMode);var Xg=jt&&"TextEvent"in window&&!Gr,Pp=jt&&(!bu||Gr&&8<Gr&&11>=Gr),Yc=String.fromCharCode(32),Xc=!1;function jp(e,t){switch(e){case"keyup":return Yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function qg(e,t){switch(e){case"compositionend":return bp(t);case"keypress":return t.which!==32?null:(Xc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Xc?null:e;default:return null}}function Jg(e,t){if(Un)return e==="compositionend"||!bu&&jp(e,t)?(e=Cp(),lo=Cu=Wt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pp&&t.locale!=="ko"?null:t.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zg[e.type]:t==="textarea"}function Op(e,t,n,r){op(r),t=To(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ai=null;function ey(e){Mp(e,0)}function ua(e){var t=Vn(e);if(Jf(t))return e}function ty(e,t){if(e==="change")return t}var _p=!1;if(jt){var ml;if(jt){var gl="oninput"in document;if(!gl){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),gl=typeof Jc.oninput=="function"}ml=gl}else ml=!1;_p=ml&&(!document.documentMode||9<document.documentMode)}function Zc(){Qr&&(Qr.detachEvent("onpropertychange",Rp),ai=Qr=null)}function Rp(e){if(e.propertyName==="value"&&ua(ai)){var t=[];Op(t,ai,e,wu(e)),up(ey,t)}}function ny(e,t,n){e==="focusin"?(Zc(),Qr=t,ai=n,Qr.attachEvent("onpropertychange",Rp)):e==="focusout"&&Zc()}function ry(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ua(ai)}function iy(e,t){if(e==="click")return ua(t)}function oy(e,t){if(e==="input"||e==="change")return ua(t)}function ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:ay;function li(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function Lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tp(){for(var e=window,t=Po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Po(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ly(e){var t=Tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lp(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=td(n,o);var a=td(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sy=jt&&"documentMode"in document&&11>=document.documentMode,Hn=null,hs=null,Kr=null,ms=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ms||Hn==null||Hn!==Po(r)||(r=Hn,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&li(Kr,r)||(Kr=r,r=To(hs,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},yl={},Ap={};jt&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ca(e){if(yl[e])return yl[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return yl[e]=t[n];return e}var Fp=ca("animationend"),Ip=ca("animationiteration"),Np=ca("animationstart"),$p=ca("transitionend"),zp=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){zp.set(e,t),Nn(t,[e])}for(var vl=0;vl<rd.length;vl++){var wl=rd[vl],uy=wl.toLowerCase(),cy=wl[0].toUpperCase()+wl.slice(1);ln(uy,"on"+cy)}ln(Fp,"onAnimationEnd");ln(Ip,"onAnimationIteration");ln(Np,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln($p,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ug(r,t,void 0,e),e.currentTarget=null}function Mp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;id(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;id(i,l,u),o=s}}}if(bo)throw e=cs,bo=!1,cs=null,e}function Q(e,t){var n=t[xs];n===void 0&&(n=t[xs]=new Set);var r=e+"__bubble";n.has(r)||(Dp(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),Dp(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Yi]){e[Yi]=!0,Qf.forEach(function(n){n!=="selectionchange"&&(dy.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,xl("selectionchange",!1,t))}}function Dp(e,t,n,r){switch(Ep(t)){case 1:var i=Pg;break;case 4:i=jg;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=wn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}up(function(){var u=o,d=wu(n),c=[];e:{var p=zp.get(e);if(p!==void 0){var w=Pu,g=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":w=Bg;break;case"focusin":g="focus",w=hl;break;case"focusout":g="blur",w=hl;break;case"beforeblur":case"afterblur":w=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Wg;break;case Fp:case Ip:case Np:w=Tg;break;case $p:w=Gg;break;case"scroll":w=bg;break;case"wheel":w=Kg;break;case"copy":case"cut":case"paste":w=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Kc}var v=(t&4)!==0,P=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=ni(f,h),x!=null&&v.push(ui(f,x,m)))),P)break;f=f.return}0<v.length&&(p=new w(p,g,null,n,d),c.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==ls&&(g=n.relatedTarget||n.fromElement)&&(wn(g)||g[bt]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?wn(g):null,g!==null&&(P=$n(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=Gc,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Kc,x="onPointerLeave",h="onPointerEnter",f="pointer"),P=w==null?p:Vn(w),m=g==null?p:Vn(g),p=new v(x,f+"leave",w,n,d),p.target=P,p.relatedTarget=m,x=null,wn(d)===u&&(v=new v(h,f+"enter",g,n,d),v.target=m,v.relatedTarget=P,x=v),P=x,w&&g)t:{for(v=w,h=g,f=0,m=v;m;m=zn(m))f++;for(m=0,x=h;x;x=zn(x))m++;for(;0<f-m;)v=zn(v),f--;for(;0<m-f;)h=zn(h),m--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=zn(v),h=zn(h)}v=null}else v=null;w!==null&&od(c,p,w,v,!1),g!==null&&P!==null&&od(c,P,g,v,!0)}}e:{if(p=u?Vn(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=ty;else if(qc(p))if(_p)E=oy;else{E=ry;var b=ny}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=iy);if(E&&(E=E(e,u))){Op(c,E,n,d);break e}b&&b(e,p,u),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&ns(p,"number",p.value)}switch(b=u?Vn(u):window,e){case"focusin":(qc(b)||b.contentEditable==="true")&&(Hn=b,hs=u,Kr=null);break;case"focusout":Kr=hs=Hn=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,nd(c,n,d);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":nd(c,n,d)}var k;if(bu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Un?jp(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Pp&&n.locale!=="ko"&&(Un||R!=="onCompositionStart"?R==="onCompositionEnd"&&Un&&(k=Cp()):(Wt=d,Cu="value"in Wt?Wt.value:Wt.textContent,Un=!0)),b=To(u,R),0<b.length&&(R=new Qc(R,e,null,n,d),c.push({event:R,listeners:b}),k?R.data=k:(k=bp(n),k!==null&&(R.data=k)))),(k=Xg?qg(e,n):Jg(e,n))&&(u=To(u,"onBeforeInput"),0<u.length&&(d=new Qc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Mp(c,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function To(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ni(e,n),o!=null&&r.unshift(ui(e,o,i)),o=ni(e,t),o!=null&&r.push(ui(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ni(n,o),s!=null&&a.unshift(ui(n,s,l))):i||(s=ni(n,o),s!=null&&a.push(ui(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var fy=/\r\n?/g,py=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(fy,`
`).replace(py,"")}function Xi(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(C(425))}function Ao(){}var gs=null,ys=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(gy)}:ws;function gy(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),ft="__reactFiber$"+Er,ci="__reactProps$"+Er,bt="__reactContainer$"+Er,xs="__reactEvents$"+Er,yy="__reactListeners$"+Er,vy="__reactHandles$"+Er;function wn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[ft])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[ft]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function da(e){return e[ci]||null}var Ss=[],Gn=-1;function sn(e){return{current:e}}function Y(e){0>Gn||(e.current=Ss[Gn],Ss[Gn]=null,Gn--)}function G(e,t){Gn++,Ss[Gn]=e.current,e.current=t}var rn={},ke=sn(rn),_e=sn(!1),On=rn;function sr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Fo(){Y(_e),Y(ke)}function ud(e,t,n){if(ke.current!==rn)throw Error(C(168));G(ke,t),G(_e,n)}function Bp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,ng(e)||"Unknown",i));return ee({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,On=ke.current,G(ke,e),G(_e,_e.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Bp(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,Y(_e),Y(ke),G(ke,e)):Y(_e),G(_e,n)}var St=null,fa=!1,El=!1;function Up(e){St===null?St=[e]:St.push(e)}function wy(e){fa=!0,Up(e)}function un(){if(!El&&St!==null){El=!0;var e=0,t=H;try{var n=St;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,fa=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),pp(xu,un),i}finally{H=t,El=!1}}return null}var Qn=[],Kn=0,No=null,$o=0,He=[],We=0,_n=null,kt=1,Et="";function gn(e,t){Qn[Kn++]=$o,Qn[Kn++]=No,No=e,$o=t}function Hp(e,t,n){He[We++]=kt,He[We++]=Et,He[We++]=_n,_n=e;var r=kt;e=Et;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,kt=1<<32-it(t)+i|n<<i|r,Et=o+e}else kt=1<<o|n<<i|r,Et=e}function _u(e){e.return!==null&&(gn(e,1),Hp(e,1,0))}function Ru(e){for(;e===No;)No=Qn[--Kn],Qn[Kn]=null,$o=Qn[--Kn],Qn[Kn]=null;for(;e===_n;)_n=He[--We],He[We]=null,Et=He[--We],He[We]=null,kt=He[--We],He[We]=null}var Fe=null,Ae=null,q=!1,nt=null;function Wp(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ae=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:kt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ae=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Es(e){if(q){var t=Ae;if(t){var n=t;if(!dd(e,t)){if(ks(e))throw Error(C(418));t=Yt(n.nextSibling);var r=Fe;t&&dd(e,t)?Wp(r,n):(e.flags=e.flags&-4097|2,q=!1,Fe=e)}}else{if(ks(e))throw Error(C(418));e.flags=e.flags&-4097|2,q=!1,Fe=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function qi(e){if(e!==Fe)return!1;if(!q)return fd(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=Ae)){if(ks(e))throw Vp(),Error(C(418));for(;t;)Wp(e,t),t=Yt(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Fe?Yt(e.stateNode.nextSibling):null;return!0}function Vp(){for(var e=Ae;e;)e=Yt(e.nextSibling)}function ur(){Ae=Fe=null,q=!1}function Lu(e){nt===null?nt=[e]:nt.push(e)}var xy=Lt.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zo=sn(null),Mo=null,Yn=null,Tu=null;function Au(){Tu=Yn=Mo=null}function Fu(e){var t=zo.current;Y(zo),e._currentValue=t}function Cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Mo=e,Tu=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Tu!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Mo===null)throw Error(C(308));Yn=e,Mo.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var xn=null;function Iu(e){xn===null?xn=[e]:xn.push(e)}function Gp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var p=l.lane,w=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(p=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){c=g.call(w,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(w,c,p):g,p==null)break e;c=ee({},c,p);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,s=c):d=d.next=w,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=a,e.lanes=a,e.memoizedState=c}}function hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Kp=new Gf.Component().refs;function Ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pa={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Jt(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(ot(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Jt(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(ot(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Jt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xt(e,i,r),t!==null&&(ot(t,e,r,n),uo(t,e,r))}};function md(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,o):!0}function Yp(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Re(t)?On:ke.current,r=t.contextTypes,o=(r=r!=null)?sr(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pa.enqueueReplaceState(t,t.state,null)}function js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kp,Nu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Re(t)?On:ke.current,i.context=sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ps(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pa.enqueueReplaceState(i,i.state,null),Do(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Kp&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function Xp(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Zt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,m,x){return f===null||f.tag!==6?(f=Rl(m,h.mode,x),f.return=h,f):(f=i(f,m),f.return=h,f)}function s(h,f,m,x){var E=m.type;return E===Bn?d(h,f,m.props.children,x,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&yd(E)===f.type)?(x=i(f,m.props),x.ref=Fr(h,f,m),x.return=h,x):(x=go(m.type,m.key,m.props,null,h.mode,x),x.ref=Fr(h,f,m),x.return=h,x)}function u(h,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ll(m,h.mode,x),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,x,E){return f===null||f.tag!==7?(f=Cn(m,h.mode,x,E),f.return=h,f):(f=i(f,m),f.return=h,f)}function c(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Rl(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bi:return m=go(f.type,f.key,f.props,null,h.mode,m),m.ref=Fr(h,null,f),m.return=h,m;case Dn:return f=Ll(f,h.mode,m),f.return=h,f;case Mt:var x=f._init;return c(h,x(f._payload),m)}if(Mr(f)||_r(f))return f=Cn(f,h.mode,m,null),f.return=h,f;Ji(h,f)}return null}function p(h,f,m,x){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(h,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bi:return m.key===E?s(h,f,m,x):null;case Dn:return m.key===E?u(h,f,m,x):null;case Mt:return E=m._init,p(h,f,E(m._payload),x)}if(Mr(m)||_r(m))return E!==null?null:d(h,f,m,x,null);Ji(h,m)}return null}function w(h,f,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,l(f,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bi:return h=h.get(x.key===null?m:x.key)||null,s(f,h,x,E);case Dn:return h=h.get(x.key===null?m:x.key)||null,u(f,h,x,E);case Mt:var b=x._init;return w(h,f,m,b(x._payload),E)}if(Mr(x)||_r(x))return h=h.get(m)||null,d(f,h,x,E,null);Ji(f,x)}return null}function g(h,f,m,x){for(var E=null,b=null,k=f,R=f=0,M=null;k!==null&&R<m.length;R++){k.index>R?(M=k,k=null):M=k.sibling;var T=p(h,k,m[R],x);if(T===null){k===null&&(k=M);break}e&&k&&T.alternate===null&&t(h,k),f=o(T,f,R),b===null?E=T:b.sibling=T,b=T,k=M}if(R===m.length)return n(h,k),q&&gn(h,R),E;if(k===null){for(;R<m.length;R++)k=c(h,m[R],x),k!==null&&(f=o(k,f,R),b===null?E=k:b.sibling=k,b=k);return q&&gn(h,R),E}for(k=r(h,k);R<m.length;R++)M=w(k,h,R,m[R],x),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?R:M.key),f=o(M,f,R),b===null?E=M:b.sibling=M,b=M);return e&&k.forEach(function(le){return t(h,le)}),q&&gn(h,R),E}function v(h,f,m,x){var E=_r(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var b=E=null,k=f,R=f=0,M=null,T=m.next();k!==null&&!T.done;R++,T=m.next()){k.index>R?(M=k,k=null):M=k.sibling;var le=p(h,k,T.value,x);if(le===null){k===null&&(k=M);break}e&&k&&le.alternate===null&&t(h,k),f=o(le,f,R),b===null?E=le:b.sibling=le,b=le,k=M}if(T.done)return n(h,k),q&&gn(h,R),E;if(k===null){for(;!T.done;R++,T=m.next())T=c(h,T.value,x),T!==null&&(f=o(T,f,R),b===null?E=T:b.sibling=T,b=T);return q&&gn(h,R),E}for(k=r(h,k);!T.done;R++,T=m.next())T=w(k,h,R,T.value,x),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?R:T.key),f=o(T,f,R),b===null?E=T:b.sibling=T,b=T);return e&&k.forEach(function(fn){return t(h,fn)}),q&&gn(h,R),E}function P(h,f,m,x){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bi:e:{for(var E=m.key,b=f;b!==null;){if(b.key===E){if(E=m.type,E===Bn){if(b.tag===7){n(h,b.sibling),f=i(b,m.props.children),f.return=h,h=f;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&yd(E)===b.type){n(h,b.sibling),f=i(b,m.props),f.ref=Fr(h,b,m),f.return=h,h=f;break e}n(h,b);break}else t(h,b);b=b.sibling}m.type===Bn?(f=Cn(m.props.children,h.mode,x,m.key),f.return=h,h=f):(x=go(m.type,m.key,m.props,null,h.mode,x),x.ref=Fr(h,f,m),x.return=h,h=x)}return a(h);case Dn:e:{for(b=m.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ll(m,h.mode,x),f.return=h,h=f}return a(h);case Mt:return b=m._init,P(h,f,b(m._payload),x)}if(Mr(m))return g(h,f,m,x);if(_r(m))return v(h,f,m,x);Ji(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Rl(m,h.mode,x),f.return=h,h=f),a(h)):n(h,f)}return P}var cr=Xp(!0),qp=Xp(!1),bi={},mt=sn(bi),di=sn(bi),fi=sn(bi);function Sn(e){if(e===bi)throw Error(C(174));return e}function $u(e,t){switch(G(fi,t),G(di,e),G(mt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=is(t,e)}Y(mt),G(mt,t)}function dr(){Y(mt),Y(di),Y(fi)}function Jp(e){Sn(fi.current);var t=Sn(mt.current),n=is(t,e.type);t!==n&&(G(di,e),G(mt,n))}function zu(e){di.current===e&&(Y(mt),Y(di))}var J=sn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function Mu(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var co=Lt.ReactCurrentDispatcher,Pl=Lt.ReactCurrentBatchConfig,Rn=0,Z=null,se=null,ce=null,Uo=!1,Yr=!1,pi=0,Sy=0;function ye(){throw Error(C(321))}function Du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Bu(e,t,n,r,i,o){if(Rn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?Py:jy,e=n(r,i),Yr){o=0;do{if(Yr=!1,pi=0,25<=o)throw Error(C(301));o+=1,ce=se=null,t.updateQueue=null,co.current=by,e=n(r,i)}while(Yr)}if(co.current=Ho,t=se!==null&&se.next!==null,Rn=0,ce=se=Z=null,Uo=!1,t)throw Error(C(300));return e}function Uu(){var e=pi!==0;return pi=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function Xe(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function hi(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Rn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Z.lanes|=d,Ln|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,lt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);lt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zp(){}function eh(e,t){var n=Z,r=Xe(),i=t(),o=!lt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Hu(rh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,mi(9,nh.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(C(349));Rn&30||th(n,t,i)}return i}function th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nh(e,t,n,r){t.value=n,t.getSnapshot=r,ih(t)&&oh(e)}function rh(e,t,n){return n(function(){ih(t)&&oh(e)})}function ih(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function oh(e){var t=Ot(e,1);t!==null&&ot(t,e,1,-1)}function vd(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Cy.bind(null,Z,e),[t.memoizedState,e]}function mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ah(){return Xe().memoizedState}function fo(e,t,n,r){var i=ct();Z.flags|=e,i.memoizedState=mi(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var i=Xe();r=r===void 0?null:r;var o=void 0;if(se!==null){var a=se.memoizedState;if(o=a.destroy,r!==null&&Du(r,a.deps)){i.memoizedState=mi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=mi(1|t,n,o,r)}function wd(e,t){return fo(8390656,8,e,t)}function Hu(e,t){return ha(2048,8,e,t)}function lh(e,t){return ha(4,2,e,t)}function sh(e,t){return ha(4,4,e,t)}function uh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ch(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,uh.bind(null,t,e),n)}function Wu(){}function dh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ph(e,t,n){return Rn&21?(lt(n,t)||(n=gp(),Z.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function ky(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{H=n,Pl.transition=r}}function hh(){return Xe().memoizedState}function Ey(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mh(e))gh(t,n);else if(n=Gp(e,t,n,r),n!==null){var i=Ce();ot(n,e,r,i),yh(n,t,r)}}function Cy(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mh(e))gh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,lt(l,a)){var s=t.interleaved;s===null?(i.next=i,Iu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gp(e,t,i,r),n!==null&&(i=Ce(),ot(n,e,r,i),yh(n,t,r))}}function mh(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function gh(e,t){Yr=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var Ho={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Py={readContext:Ye,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,uh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ey.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Wu,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=ky.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ct();if(q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));Rn&30||th(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wd(rh.bind(null,r,o,e),[e]),r.flags|=2048,mi(9,nh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=fe.identifierPrefix;if(q){var n=Et,r=kt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jy={readContext:Ye,useCallback:dh,useContext:Ye,useEffect:Hu,useImperativeHandle:ch,useInsertionEffect:lh,useLayoutEffect:sh,useMemo:fh,useReducer:jl,useRef:ah,useState:function(){return jl(hi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Xe();return ph(t,se.memoizedState,e)},useTransition:function(){var e=jl(hi)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Zp,useSyncExternalStore:eh,useId:hh,unstable_isNewReconciler:!1},by={readContext:Ye,useCallback:dh,useContext:Ye,useEffect:Hu,useImperativeHandle:ch,useInsertionEffect:lh,useLayoutEffect:sh,useMemo:fh,useReducer:bl,useRef:ah,useState:function(){return bl(hi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Xe();return se===null?t.memoizedState=e:ph(t,se.memoizedState,e)},useTransition:function(){var e=bl(hi)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Zp,useSyncExternalStore:eh,useId:hh,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=tg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function vh(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,$s=r),bs(e,t)},n}function wh(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bs(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Oy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uy.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var _y=Lt.ReactCurrentOwner,Oe=!1;function Ee(e,t,n,r){t.child=e===null?qp(t,null,n,r):cr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Bu(e,t,n,r,o,i),n=Uu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(q&&n&&_u(t),t.flags|=1,Ee(e,t,r,i),t.child)}function Cd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ju(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xh(e,t,o,r,i)):(e=go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(a,r)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function xh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(li(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,_t(e,t,i)}return Os(e,t,n,r,i)}function Sh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(qn,Te),Te|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(qn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(qn,Te),Te|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(qn,Te),Te|=r;return Ee(e,t,i,n),t.child}function kh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Os(e,t,n,r,i){var o=Re(n)?On:ke.current;return o=sr(t,o),rr(t,i),n=Bu(e,t,n,r,o,i),r=Uu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(q&&r&&_u(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if(Re(n)){var o=!0;Io(t)}else o=!1;if(rr(t,i),t.stateNode===null)po(e,t),Yp(t,n,r),js(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Re(n)?On:ke.current,u=sr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&gd(t,a,r,u),Dt=!1;var p=t.memoizedState;a.state=p,Do(t,r,a,i),s=t.memoizedState,l!==r||p!==s||_e.current||Dt?(typeof d=="function"&&(Ps(t,n,d,r),s=t.memoizedState),(l=Dt||md(t,n,l,r,p,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:et(t.type,l),a.props=u,c=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=Re(n)?On:ke.current,s=sr(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||p!==s)&&gd(t,a,r,s),Dt=!1,p=t.memoizedState,a.state=p,Do(t,r,a,i);var g=t.memoizedState;l!==c||p!==g||_e.current||Dt?(typeof w=="function"&&(Ps(t,n,w,r),g=t.memoizedState),(u=Dt||md(t,n,u,r,p,g,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _s(e,t,n,r,o,i)}function _s(e,t,n,r,i,o){kh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cd(t,n,!1),_t(e,t,o);r=t.stateNode,_y.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,l,o)):Ee(e,t,l,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Eh(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),$u(e,t.containerInfo)}function jd(e,t,n,r,i){return ur(),Lu(i),t.flags|=256,Ee(e,t,n,r),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ch(e,t,n){var r=t.pendingProps,i=J.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(J,i&1),e===null)return Es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ya(a,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ls(n),t.memoizedState=Rs,e):Vu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ry(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Zt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Zt(l,o):(o=Cn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ls(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Rs,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zi(e,t,n,r){return r!==null&&Lu(r),cr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ry(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(C(422))),Zi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ya({mode:"visible",children:r.children},i,0,null),o=Cn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,a),t.child.memoizedState=Ls(a),t.memoizedState=Rs,o);if(!(t.mode&1))return Zi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Ol(o,r,void 0),Zi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Oe||l){if(r=fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),ot(r,e,i,-1))}return qu(),r=Ol(Error(C(421))),Zi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ae=Yt(i.nextSibling),Fe=t,q=!0,nt=null,e!==null&&(He[We++]=kt,He[We++]=Et,He[We++]=_n,kt=e.id,Et=e.overflow,_n=t),t=Vu(t,r.children),t.flags|=4096,t)}function bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cs(e.return,t,n)}function _l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ph(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,t);else if(e.tag===19)bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,o);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ly(e,t,n){switch(t.tag){case 3:Eh(t),ur();break;case 5:Jp(t);break;case 1:Re(t.type)&&Io(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Ch(e,t,n):(G(J,J.current&1),e=_t(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ph(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Sh(e,t,n)}return _t(e,t,n)}var jh,Ts,bh,Oh;jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ts=function(){};bh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sn(mt.current);var o=null;switch(n){case"input":i=es(e,i),r=es(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=rs(e,i),r=rs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}os(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ei.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ty(e,t,n){var r=t.pendingProps;switch(Ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Re(t.type)&&Fo(),ve(t),null;case 3:return r=t.stateNode,dr(),Y(_e),Y(ke),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Ds(nt),nt=null))),Ts(e,t),ve(t),null;case 5:zu(t);var i=Sn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)bh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Sn(mt.current),qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[ci]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)Q(Br[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Nc(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":zc(r,o),Q("invalid",r)}os(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",""+l]):ei.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ui(r),$c(r,o,!0);break;case"textarea":Ui(r),Mc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ft]=t,e[ci]=r,jh(e,t,!1,!1),t.stateNode=e;e:{switch(a=as(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)Q(Br[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":Nc(e,r),i=es(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":zc(e,r),i=rs(e,r),Q("invalid",e);break;default:i=r}os(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ip(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&np(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ti(e,s):typeof s=="number"&&ti(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ei.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Q("scroll",e):s!=null&&mu(e,o,s,a))}switch(n){case"input":Ui(e),$c(e,r,!1);break;case"textarea":Ui(e),Mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Sn(fi.current),Sn(mt.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ae!==null&&t.mode&1&&!(t.flags&128))Vp(),ur(),t.flags|=98560,o=!1;else if(o=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[ft]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else nt!==null&&(Ds(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):qu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return dr(),Ts(e,t),e===null&&si(t.stateNode.containerInfo),ve(t),null;case 10:return Fu(t.type._context),ve(t),null;case 17:return Re(t.type)&&Fo(),ve(t),null;case 19:if(Y(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ir(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bo(e),a!==null){for(t.flags|=128,Ir(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>pr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Ay(e,t){switch(Ru(t),t.tag){case 1:return Re(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Y(_e),Y(ke),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return dr(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var eo=!1,xe=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,_=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function As(e,t,n){try{n()}catch(r){te(e,t,r)}}var Od=!1;function Iy(e,t){if(gs=Ro,e=Tp(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(w=c.firstChild)!==null;)p=c,c=w;for(;;){if(c===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(s=a),(w=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ys={focusedElem:e,selectionRange:n},Ro=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,P=g.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:et(t.type,v),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=Od,Od=!1,g}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&As(t,n,o)}i=i.next}while(i!==r)}}function ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _h(e){var t=e.alternate;t!==null&&(e.alternate=null,_h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[ci],delete t[xs],delete t[yy],delete t[vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rh(e){return e.tag===5||e.tag===3||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function Ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}var he=null,tt=!1;function Nt(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(la,n)}catch{}switch(n.tag){case 5:xe||Xn(n,t);case 6:var r=he,i=tt;he=null,Nt(e,t,n),he=r,tt=i,he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),oi(e)):kl(he,n.stateNode));break;case 4:r=he,i=tt,he=n.stateNode.containerInfo,tt=!0,Nt(e,t,n),he=r,tt=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&As(n,t,a),i=i.next}while(i!==r)}Nt(e,t,n);break;case 1:if(!xe&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Nt(e,t,n),xe=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fy),t.forEach(function(r){var i=Wy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,tt=!1;break e;case 3:he=l.stateNode.containerInfo,tt=!0;break e;case 4:he=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(he===null)throw Error(C(160));Lh(o,a,i),he=null,tt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Th(t,e),t=t.sibling}function Th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ut(e),r&4){try{Xr(3,e,e.return),ma(3,e)}catch(v){te(e,e.return,v)}try{Xr(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:Ze(t,e),ut(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Ze(t,e),ut(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var i=e.stateNode;try{ti(i,"")}catch(v){te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Zf(i,o),as(l,a);var u=as(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?ip(i,c):d==="dangerouslySetInnerHTML"?np(i,c):d==="children"?ti(i,c):mu(i,d,c,u)}switch(l){case"input":ts(i,o);break;case"textarea":ep(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Zn(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ci]=o}catch(v){te(e,e.return,v)}}break;case 6:if(Ze(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){te(e,e.return,v)}}break;case 3:if(Ze(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:Ze(t,e),ut(e);break;case 13:Ze(t,e),ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=re())),r&4&&Rd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,Ze(t,e),xe=u):Ze(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(c=_=d;_!==null;){switch(p=_,w=p.child,p.tag){case 0:case 11:case 14:case 15:Xr(4,p,p.return);break;case 1:Xn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:Xn(p,p.return);break;case 22:if(p.memoizedState!==null){Td(c);continue}}w!==null?(w.return=p,_=w):Td(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=rp("display",a))}catch(v){te(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){te(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(t,e),ut(e),r&4&&Rd(e);break;case 21:break;default:Ze(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rh(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ti(i,""),r.flags&=-33);var o=_d(e);Ns(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=_d(e);Is(e,l,a);break;default:throw Error(C(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e,t,n){_=e,Ah(e)}function Ah(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||eo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||xe;l=eo;var u=xe;if(eo=a,(xe=s)&&!u)for(_=i;_!==null;)a=_,s=a.child,a.tag===22&&a.memoizedState!==null?Ad(i):s!==null?(s.return=a,_=s):Ad(i);for(;o!==null;)_=o,Ah(o),o=o.sibling;_=i,eo=l,xe=u}Ld(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Ld(e)}}function Ld(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&oi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||t.flags&512&&Fs(t)}catch(p){te(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Td(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ad(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ma(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){te(t,i,s)}}var o=t.return;try{Fs(t)}catch(s){te(t,o,s)}break;case 5:var a=t.return;try{Fs(t)}catch(s){te(t,a,s)}}}catch(s){te(t,t.return,s)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var $y=Math.ceil,Wo=Lt.ReactCurrentDispatcher,Gu=Lt.ReactCurrentOwner,Ge=Lt.ReactCurrentBatchConfig,D=0,fe=null,oe=null,me=0,Te=0,qn=sn(0),ue=0,gi=null,Ln=0,ga=0,Qu=0,qr=null,be=null,Ku=0,pr=1/0,wt=null,Vo=!1,$s=null,qt=null,to=!1,Vt=null,Go=0,Jr=0,zs=null,ho=-1,mo=0;function Ce(){return D&6?re():ho!==-1?ho:ho=re()}function Jt(e){return e.mode&1?D&2&&me!==0?me&-me:xy.transition!==null?(mo===0&&(mo=gp()),mo):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ep(e.type)),e):1}function ot(e,t,n,r){if(50<Jr)throw Jr=0,zs=null,Error(C(185));Ci(e,n,r),(!(D&2)||e!==fe)&&(e===fe&&(!(D&2)&&(ga|=n),ue===4&&Ut(e,me)),Le(e,r),n===1&&D===0&&!(t.mode&1)&&(pr=re()+500,fa&&un()))}function Le(e,t){var n=e.callbackNode;xg(e,t);var r=_o(e,e===fe?me:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?wy(Fd.bind(null,e)):Up(Fd.bind(null,e)),my(function(){!(D&6)&&un()}),n=null;else{switch(yp(r)){case 1:n=xu;break;case 4:n=hp;break;case 16:n=Oo;break;case 536870912:n=mp;break;default:n=Oo}n=Bh(n,Fh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fh(e,t){if(ho=-1,mo=0,D&6)throw Error(C(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=_o(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=D;D|=2;var o=Nh();(fe!==e||me!==t)&&(wt=null,pr=re()+500,En(e,t));do try{Dy();break}catch(l){Ih(e,l)}while(1);Au(),Wo.current=o,D=i,oe!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=ds(e),i!==0&&(r=i,t=Ms(e,i))),t===1)throw n=gi,En(e,0),Ut(e,r),Le(e,re()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!zy(i)&&(t=Qo(e,r),t===2&&(o=ds(e),o!==0&&(r=o,t=Ms(e,o))),t===1))throw n=gi,En(e,0),Ut(e,r),Le(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:yn(e,be,wt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Ku+500-re(),10<t)){if(_o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ws(yn.bind(null,e,be,wt),t);break}yn(e,be,wt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-it(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$y(r/1960))-r,10<r){e.timeoutHandle=ws(yn.bind(null,e,be,wt),r);break}yn(e,be,wt);break;case 5:yn(e,be,wt);break;default:throw Error(C(329))}}}return Le(e,re()),e.callbackNode===n?Fh.bind(null,e):null}function Ms(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=be,be=n,t!==null&&Ds(t)),e}function Ds(e){be===null?be=e:be.push.apply(be,e)}function zy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Qu,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Fd(e){if(D&6)throw Error(C(327));ir();var t=_o(e,0);if(!(t&1))return Le(e,re()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=ds(e);r!==0&&(t=r,n=Ms(e,r))}if(n===1)throw n=gi,En(e,0),Ut(e,t),Le(e,re()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,be,wt),Le(e,re()),null}function Yu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(pr=re()+500,fa&&un())}}function Tn(e){Vt!==null&&Vt.tag===0&&!(D&6)&&ir();var t=D;D|=1;var n=Ge.transition,r=H;try{if(Ge.transition=null,H=1,e)return e()}finally{H=r,Ge.transition=n,D=t,!(D&6)&&un()}}function Xu(){Te=qn.current,Y(qn)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hy(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:dr(),Y(_e),Y(ke),Mu();break;case 5:zu(r);break;case 4:dr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Fu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(fe=e,oe=e=Zt(e.current,null),me=Te=t,ue=0,gi=null,Qu=ga=Ln=0,be=qr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}xn=null}return e}function Ih(e,t){do{var n=oe;try{if(Au(),co.current=Ho,Uo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(Rn=0,ce=se=Z=null,Yr=!1,pi=0,Gu.current=null,n===null||n.return===null){ue=1,gi=t,oe=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=me,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Sd(a);if(w!==null){w.flags&=-257,kd(w,a,l,o,t),w.mode&1&&xd(o,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){xd(o,u,t),qu();break e}s=Error(C(426))}}else if(q&&l.mode&1){var P=Sd(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),kd(P,a,l,o,t),Lu(fr(s,l));break e}}o=s=fr(s,l),ue!==4&&(ue=2),qr===null?qr=[o]:qr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=vh(o,s,t);pd(o,h);break e;case 1:l=s;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=wh(o,l,t);pd(o,x);break e}}o=o.return}while(o!==null)}zh(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Nh(){var e=Wo.current;return Wo.current=Ho,e===null?Ho:e}function qu(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Ln&268435455)&&!(ga&268435455)||Ut(fe,me)}function Qo(e,t){var n=D;D|=2;var r=Nh();(fe!==e||me!==t)&&(wt=null,En(e,t));do try{My();break}catch(i){Ih(e,i)}while(1);if(Au(),D=n,Wo.current=r,oe!==null)throw Error(C(261));return fe=null,me=0,ue}function My(){for(;oe!==null;)$h(oe)}function Dy(){for(;oe!==null&&!dg();)$h(oe)}function $h(e){var t=Dh(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?zh(e):oe=t,Gu.current=null}function zh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ay(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(n=Ty(n,t,Te),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function yn(e,t,n){var r=H,i=Ge.transition;try{Ge.transition=null,H=1,By(e,t,n,r)}finally{Ge.transition=i,H=r}return null}function By(e,t,n,r){do ir();while(Vt!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sg(e,o),e===fe&&(oe=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Bh(Oo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var a=H;H=1;var l=D;D|=4,Gu.current=null,Iy(e,n),Th(n,e),ly(ys),Ro=!!gs,ys=gs=null,e.current=n,Ny(n),fg(),D=l,H=a,Ge.transition=o}else e.current=n;if(to&&(to=!1,Vt=e,Go=i),o=e.pendingLanes,o===0&&(qt=null),mg(n.stateNode),Le(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=$s,$s=null,e;return Go&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===zs?Jr++:(Jr=0,zs=e):Jr=0,un(),null}function ir(){if(Vt!==null){var e=yp(Go),t=Ge.transition,n=H;try{if(Ge.transition=null,H=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Go=0,D&6)throw Error(C(331));var i=D;for(D|=4,_=e.current;_!==null;){var o=_,a=o.child;if(_.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Xr(8,d,o)}var c=d.child;if(c!==null)c.return=d,_=c;else for(;_!==null;){d=_;var p=d.sibling,w=d.return;if(_h(d),d===u){_=null;break}if(p!==null){p.return=w,_=p;break}_=w}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,_=a;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,_=h;break e}_=o.return}}var f=e.current;for(_=f;_!==null;){a=_;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,_=m;else e:for(a=f;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ma(9,l)}}catch(E){te(l,l.return,E)}if(l===a){_=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,_=x;break e}_=l.return}}if(D=i,un(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(la,e)}catch{}r=!0}return r}finally{H=n,Ge.transition=t}}return!1}function Id(e,t,n){t=fr(n,t),t=vh(e,t,1),e=Xt(e,t,1),t=Ce(),e!==null&&(Ci(e,1,t),Le(e,t))}function te(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=fr(n,e),e=wh(t,e,1),t=Xt(t,e,1),e=Ce(),t!==null&&(Ci(t,1,e),Le(t,e));break}}t=t.return}}function Uy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-Ku?En(e,0):Qu|=n),Le(e,t)}function Mh(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=Ce();e=Ot(e,t),e!==null&&(Ci(e,t,n),Le(e,n))}function Hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mh(e,n)}function Wy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Mh(e,n)}var Dh;Dh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Ly(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,q&&t.flags&1048576&&Hp(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var i=sr(t,ke.current);rr(t,n),i=Bu(null,t,r,e,i,n);var o=Uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Io(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nu(t),i.updater=pa,t.stateNode=i,i._reactInternals=t,js(t,r,e,n),t=_s(null,t,r,!0,o,n)):(t.tag=0,q&&o&&_u(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gy(r),e=et(r,e),i){case 0:t=Os(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=Cd(null,t,r,et(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Os(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Pd(e,t,r,i,n);case 3:e:{if(Eh(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qp(e,t),Do(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fr(Error(C(423)),t),t=jd(e,t,r,n,i);break e}else if(r!==i){i=fr(Error(C(424)),t),t=jd(e,t,r,n,i);break e}else for(Ae=Yt(t.stateNode.containerInfo.firstChild),Fe=t,q=!0,nt=null,n=qp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=_t(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Jp(t),e===null&&Es(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,vs(r,i)?a=null:o!==null&&vs(r,o)&&(t.flags|=32),kh(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&Es(t),null;case 13:return Ch(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Ed(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(zo,r._currentValue),r._currentValue=a,o!==null)if(lt(o.value,a)){if(o.children===i.children&&!_e.current){t=_t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ct(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cs(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=Ye(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),Cd(e,t,r,i,n);case 15:return xh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),po(e,t),t.tag=1,Re(r)?(e=!0,Io(t)):e=!1,rr(t,n),Yp(t,r,i),js(t,r,i,n),_s(null,t,r,!0,e,n);case 19:return Ph(e,t,n);case 22:return Sh(e,t,n)}throw Error(C(156,t.tag))};function Bh(e,t){return pp(e,t)}function Vy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Vy(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gy(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===vu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ju(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Bn:return Cn(n.children,i,o,t);case gu:a=8,i|=8;break;case Xl:return e=Ve(12,n,t,i|2),e.elementType=Xl,e.lanes=o,e;case ql:return e=Ve(13,n,t,i),e.elementType=ql,e.lanes=o,e;case Jl:return e=Ve(19,n,t,i),e.elementType=Jl,e.lanes=o,e;case Xf:return ya(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kf:a=10;break e;case Yf:a=9;break e;case yu:a=11;break e;case vu:a=14;break e;case Mt:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ve(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function ya(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Xf,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function Ll(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,o,a,l,s){return e=new Qy(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ve(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(o),e}function Ky(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uh(e){if(!e)return rn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Re(n))return Bp(e,n,t)}return t}function Hh(e,t,n,r,i,o,a,l,s){return e=Zu(n,r,!0,e,i,o,a,l,s),e.context=Uh(null),n=e.current,r=Ce(),i=Jt(n),o=Ct(r,i),o.callback=t??null,Xt(n,o,i),e.current.lanes=i,Ci(e,i,r),Le(e,r),e}function va(e,t,n,r){var i=t.current,o=Ce(),a=Jt(i);return n=Uh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(i,t,a),e!==null&&(ot(e,i,a,o),uo(e,i,a)),a}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function Yy(){return null}var Wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}wa.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));va(e,t,null,null)};wa.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){va(null,e,null,null)}),t[bt]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&kp(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Xy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ko(a);o.call(u)}}var a=Hh(t,r,e,0,null,!1,!1,"",$d);return e._reactRootContainer=a,e[bt]=a.current,si(e.nodeType===8?e.parentNode:e),Tn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ko(s);l.call(u)}}var s=Zu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=s,e[bt]=s.current,si(e.nodeType===8?e.parentNode:e),Tn(function(){va(t,s,n,r)}),s}function Sa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ko(a);l.call(s)}}va(t,a,e,i)}else a=Xy(n,t,e,i,r);return Ko(a)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(Su(t,n|1),Le(t,re()),!(D&6)&&(pr=re()+500,un()))}break;case 13:Tn(function(){var r=Ot(e,1);if(r!==null){var i=Ce();ot(r,e,1,i)}}),ec(e,1)}};ku=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ce();ot(t,e,134217728,n)}ec(e,134217728)}};wp=function(e){if(e.tag===13){var t=Jt(e),n=Ot(e,t);if(n!==null){var r=Ce();ot(n,e,t,r)}ec(e,t)}};xp=function(){return H};Sp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ss=function(e,t,n){switch(t){case"input":if(ts(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=da(r);if(!i)throw Error(C(90));Jf(r),ts(r,i)}}}break;case"textarea":ep(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};lp=Yu;sp=Tn;var qy={usingClientEntryPoint:!1,Events:[ji,Vn,da,op,ap,Yu]},Nr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Jy={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dp(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{la=no.inject(Jy),ht=no}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(C(200));return Ky(e,t,null,n)};$e.createRoot=function(e,t){if(!nc(e))throw Error(C(299));var n=!1,r="",i=Wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[bt]=t.current,si(e.nodeType===8?e.parentNode:e),new tc(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=dp(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return Tn(e)};$e.hydrate=function(e,t,n){if(!xa(t))throw Error(C(200));return Sa(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hh(t,null,e,1,n??null,i,!1,o,a),e[bt]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wa(t)};$e.render=function(e,t,n){if(!xa(t))throw Error(C(200));return Sa(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!xa(e))throw Error(C(40));return e._reactRootContainer?(Tn(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};$e.unstable_batchedUpdates=Yu;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Sa(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh)}catch(e){console.error(e)}}Vh(),Hf.exports=$e;var Gh=Hf.exports,zd=Gh;Kl.createRoot=zd.createRoot,Kl.hydrateRoot=zd.hydrateRoot;var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Se.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",Zr="-moz-",U="-webkit-",Qh="comm",ka="rule",rc="decl",Zy="@import",Kh="@keyframes",ev="@layer",tv=Math.abs,ic=String.fromCharCode,Bs=Object.assign;function nv(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function Yh(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function yo(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Xh(e){return e.length}function Ur(e,t){return t.push(e),e}function rv(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(n){return!xt(n,t)})}var Ea=1,mr=1,qh=0,qe=0,ie=0,Cr="";function Ca(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ea,column:mr,length:a,return:"",siblings:l}}function zt(e,t){return Bs(Ca("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=zt(e.root,{children:[e]});Ur(e,e.siblings)}function iv(){return ie}function ov(){return ie=qe>0?de(Cr,--qe):0,mr--,ie===10&&(mr=1,Ea--),ie}function at(){return ie=qe<qh?de(Cr,qe++):0,mr++,ie===10&&(mr=1,Ea++),ie}function Pn(){return de(Cr,qe)}function vo(){return qe}function Pa(e,t){return hr(Cr,e,t)}function Us(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function av(e){return Ea=mr=1,qh=dt(Cr=e),qe=0,[]}function lv(e){return Cr="",e}function Tl(e){return Yh(Pa(qe-1,Hs(e===91?e+2:e===40?e+1:e)))}function sv(e){for(;(ie=Pn())&&ie<33;)at();return Us(e)>2||Us(ie)>3?"":" "}function uv(e,t){for(;--t&&at()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Pa(e,vo()+(t<6&&Pn()==32&&at()==32))}function Hs(e){for(;at();)switch(ie){case e:return qe;case 34:case 39:e!==34&&e!==39&&Hs(ie);break;case 40:e===41&&Hs(e);break;case 92:at();break}return qe}function cv(e,t){for(;at()&&e+ie!==47+10;)if(e+ie===42+42&&Pn()===47)break;return"/*"+Pa(t,qe-1)+"*"+ic(e===47?e:at())}function dv(e){for(;!Us(Pn());)at();return Pa(e,qe)}function fv(e){return lv(wo("",null,null,null,[""],e=av(e),0,[0],e))}function wo(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,p=0,w=0,g=0,v=1,P=1,h=1,f=0,m="",x=i,E=o,b=r,k=m;P;)switch(g=f,f=at()){case 40:if(g!=108&&de(k,c-1)==58){yo(k+=N(Tl(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Tl(f);break;case 9:case 10:case 13:case 32:k+=sv(g);break;case 92:k+=uv(vo()-1,7);continue;case 47:switch(Pn()){case 42:case 47:Ur(pv(cv(at(),vo()),t,n,s),s);break;default:k+="/"}break;case 123*v:l[u++]=dt(k)*h;case 125*v:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+d:h==-1&&(k=N(k,/\f/g,"")),w>0&&dt(k)-c&&Ur(w>32?Bd(k+";",r,n,c-1,s):Bd(N(k," ","")+";",r,n,c-2,s),s);break;case 59:k+=";";default:if(Ur(b=Dd(k,t,n,u,d,i,l,m,x=[],E=[],c,o),o),f===123)if(d===0)wo(k,t,b,b,x,o,c,l,E);else switch(p===99&&de(k,3)===110?100:p){case 100:case 108:case 109:case 115:wo(e,b,b,r&&Ur(Dd(e,b,b,0,0,i,l,m,i,x=[],c,E),E),i,E,c,l,r?x:E);break;default:wo(k,b,b,b,[""],E,0,l,E)}}u=d=w=0,v=h=1,m=k="",c=a;break;case 58:c=1+dt(k),w=g;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&ov()==125)continue}switch(k+=ic(f),f*v){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(dt(k)-1)*h,h=1;break;case 64:Pn()===45&&(k+=Tl(at())),p=Pn(),d=c=dt(m=k+=dv(vo())),f++;break;case 45:g===45&&dt(k)==2&&(v=0)}}return o}function Dd(e,t,n,r,i,o,a,l,s,u,d,c){for(var p=i-1,w=i===0?o:[""],g=Xh(w),v=0,P=0,h=0;v<r;++v)for(var f=0,m=hr(e,p+1,p=tv(P=a[v])),x=e;f<g;++f)(x=Yh(P>0?w[f]+" "+m:N(m,/&\f/g,w[f])))&&(s[h++]=x);return Ca(e,t,n,i===0?ka:l,s,u,d,c)}function pv(e,t,n,r){return Ca(e,t,n,Qh,ic(iv()),hr(e,2,-2),0,r)}function Bd(e,t,n,r,i){return Ca(e,t,n,rc,hr(e,0,r),hr(e,r+1,-1),r,i)}function Jh(e,t,n){switch(nv(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Zr+e+K+e+e;case 5936:switch(de(e,t+11)){case 114:return U+e+K+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+K+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+K+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+K+e+e;case 6165:return U+e+K+"flex-"+e+e;case 5187:return U+e+N(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return U+e+K+"flex-item-"+N(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":K+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return U+e+K+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+K+N(e,"shrink","negative")+e;case 5292:return U+e+K+N(e,"basis","preferred-size")+e;case 6060:return U+"box-"+N(e,"-grow","")+U+e+K+N(e,"grow","positive")+e;case 4554:return U+N(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!xt(e,/flex-|baseline/))return K+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return K+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xt(r.props,/grid-\w+-end/)})?~yo(e+(n=n[t].value),"span")?e:K+N(e,"-start","")+e+K+"grid-row-span:"+(~yo(n,"span")?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":K+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:K+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Zr+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yo(e,"stretch")?Jh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return K+i+":"+o+u+(a?K+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(de(e,t+6)===121)return N(e,":",":"+U)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(de(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+K+"$2box$3")+e;case 100:return N(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Yo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hv(e,t,n,r){switch(e.type){case ev:if(e.children.length)break;case Zy:case rc:return e.return=e.return||e.value;case Qh:return"";case Kh:return e.return=e.value+"{"+Yo(e.children,r)+"}";case ka:if(!dt(e.value=e.props.join(",")))return""}return dt(n=Yo(e.children,r))?e.return=e.value+"{"+n+"}":""}function mv(e){var t=Xh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function gv(e){return function(t){t.root||(t=t.return)&&e(t)}}function yv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rc:e.return=Jh(e.value,e.length,n);return;case Kh:return Yo([zt(e,{value:N(e.value,"@","@"+U)})],r);case ka:if(e.length)return rv(n=e.props,function(i){switch(xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(zt(e,{props:[N(i,/:(read-\w+)/,":"+Zr+"$1")]})),Mn(zt(e,{props:[i]})),Bs(e,{props:Md(n,r)});break;case"::placeholder":Mn(zt(e,{props:[N(i,/:(plac\w+)/,":"+U+"input-$1")]})),Mn(zt(e,{props:[N(i,/:(plac\w+)/,":"+Zr+"$1")]})),Mn(zt(e,{props:[N(i,/:(plac\w+)/,K+"input-$1")]})),Mn(zt(e,{props:[i]})),Bs(e,{props:Md(n,r)});break}return""})}}var vv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",oc=typeof window<"u"&&"HTMLElement"in window,wv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ja=Object.freeze([]),yr=Object.freeze({});function xv(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var Zh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kv=/(^-|-$)/g;function Ud(e){return e.replace(Sv,"-").replace(kv,"")}var Ev=/(a)(d)/gi,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ws(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hd(t%52)+n;return(Hd(t%52)+n).replace(Ev,"$1-$2")}var Al,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},em=function(e){return Jn(5381,e)};function tm(e){return Ws(em(e)>>>0)}function Cv(e){return e.displayName||e.name||"Component"}function Fl(e){return typeof e=="string"&&!0}var nm=typeof Symbol=="function"&&Symbol.for,rm=nm?Symbol.for("react.memo"):60115,Pv=nm?Symbol.for("react.forward_ref"):60112,jv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ov=((Al={})[Pv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Al[rm]=im,Al);function Wd(e){return("type"in(t=e)&&t.type.$$typeof)===rm?im:"$$typeof"in e?Ov[e.$$typeof]:jv;var t}var _v=Object.defineProperty,Rv=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,Lv=Object.getOwnPropertyDescriptor,Tv=Object.getPrototypeOf,Gd=Object.prototype;function om(e,t,n){if(typeof t!="string"){if(Gd){var r=Tv(t);r&&r!==Gd&&om(e,r,n)}var i=Rv(t);Vd&&(i=i.concat(Vd(t)));for(var o=Wd(e),a=Wd(t),l=0;l<i.length;++l){var s=i[l];if(!(s in bv||n&&n[s]||a&&s in a||o&&s in o)){var u=Lv(t,s);try{_v(e,s,u)}catch{}}}}return e}function An(e){return typeof e=="function"}function ac(e){return typeof e=="object"&&"styledComponentId"in e}function kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gs(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gs(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=Gs(e[r],t[r]);return e}function lc(e,t){Object.defineProperty(e,"toString",{value:t})}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Av=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),xo=new Map,Xo=new Map,So=1,ro=function(e){if(xo.has(e))return xo.get(e);for(;Xo.has(So);)So++;var t=So++;return xo.set(e,t),Xo.set(t,e),t},Fv=function(e,t){So=t+1,xo.set(e,t),Xo.set(t,e)},Iv="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Nv=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$v=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},zv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(Nv);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(Fv(d,u),$v(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function Mv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var am=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(gr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.1.1");var a=Mv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Dv=function(){function e(t){this.element=am(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Bv=function(){function e(t){this.element=am(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Uv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=oc,Hv={isServer:!oc,useCSSOMInjection:!wv},lm=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var i=this;this.options=Se(Se({},Hv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oc&&Qd&&(Qd=!1,function(o){for(var a=document.querySelectorAll(Iv),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(gr)!=="active"&&(zv(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),lc(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var p=function(h){return Xo.get(h)}(c);if(p===void 0)return"continue";var w=o.names.get(p),g=a.getGroup(c);if(w===void 0||g.length===0)return"continue";var v="".concat(gr,".g").concat(c,'[id="').concat(p,'"]'),P="";w!==void 0&&w.forEach(function(h){h.length>0&&(P+="".concat(h,","))}),s+="".concat(g).concat(v,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return ro(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Uv(i):r?new Dv(i):new Bv(i)}(this.options),new Av(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ro(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wv=/&/g,Vv=/^\s*\/\/.*$/gm;function sm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sm(n.children,t)),n})}function Gv(e){var t,n,r,i=e===void 0?yr:e,o=i.options,a=o===void 0?yr:o,l=i.plugins,s=l===void 0?ja:l,u=function(p,w,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},d=s.slice();d.push(function(p){p.type===ka&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Wv,n).replace(r,u))}),a.prefix&&d.push(yv),d.push(hv);var c=function(p,w,g,v){w===void 0&&(w=""),g===void 0&&(g=""),v===void 0&&(v="&"),t=v,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(Vv,""),h=fv(g||w?"".concat(g," ").concat(w," { ").concat(P," }"):P);a.namespace&&(h=sm(h,a.namespace));var f=[];return Yo(h,mv(d.concat(gv(function(m){return f.push(m)})))),f};return c.hash=s.length?s.reduce(function(p,w){return w.name||Fn(15),Jn(p,w.name)},5381).toString():"",c}var Qv=new lm,Qs=Gv(),um=bn.createContext({shouldForwardProp:void 0,styleSheet:Qv,stylis:Qs});um.Consumer;bn.createContext(void 0);function Kd(){return L.useContext(um)}var cm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qs);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lc(this,function(){throw Fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qs),this.name+t.hash},e}(),Kv=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Kv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dm=function(e){return e==null||e===!1||e===""},fm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!dm(o)&&(Array.isArray(o)&&o.isCss||An(o)?r.push("".concat(Yd(i),":"),o,";"):vi(o)?r.push.apply(r,yi(yi(["".concat(i," {")],fm(o),!1),["}"],!1)):r.push("".concat(Yd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in vv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jn(e,t,n,r){if(dm(e))return[];if(ac(e))return[".".concat(e.styledComponentId)];if(An(e)){if(!An(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return jn(i,t,n,r)}var o;return e instanceof cm?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?fm(e):Array.isArray(e)?Array.prototype.concat.apply(ja,e.map(function(a){return jn(a,t,n,r)})):[e.toString()]}function Yv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(An(n)&&!ac(n))return!1}return!0}var Xv=em("6.1.1"),qv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yv(t),this.componentId=n,this.baseHash=Jn(Xv,n),this.baseStyle=r,lm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=kn(i,this.staticRulesId);else{var o=Vs(jn(this.rules,t,n,r)),a=Ws(Jn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=kn(i,a),this.staticRulesId=a}else{for(var s=Jn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var p=Vs(jn(c,t,n,r));s=Jn(s,p+d),u+=p}}if(u){var w=Ws(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=kn(i,w)}}return i},e}(),qo=bn.createContext(void 0);qo.Consumer;function Jv(e){var t=bn.useContext(qo),n=L.useMemo(function(){return function(r,i){if(!r)throw Fn(14);if(An(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fn(8);return i?Se(Se({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?bn.createElement(qo.Provider,{value:n},e.children):null}var Il={};function Zv(e,t,n){var r=ac(e),i=e,o=!Fl(e),a=t.attrs,l=a===void 0?ja:a,s=t.componentId,u=s===void 0?function(x,E){var b=typeof x!="string"?"sc":Ud(x);Il[b]=(Il[b]||0)+1;var k="".concat(b,"-").concat(tm("6.1.1"+b+Il[b]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(x){return Fl(x)?"styled.".concat(x):"Styled(".concat(Cv(x),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Ud(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;g=function(x,E){return v(x,E)&&P(x,E)}}else g=v}var h=new qv(n,p,r?i.componentStyle:void 0);function f(x,E){return function(b,k,R){var M=b.attrs,T=b.componentStyle,le=b.defaultProps,fn=b.foldedComponentIds,pn=b.styledComponentId,zi=b.target,il=bn.useContext(qo),Or=Kd(),hn=b.shouldForwardProp||Or.shouldForwardProp,O=function(Be,vt,Ue){for(var st,mn=Se(Se({},vt),{className:void 0,theme:Ue}),ol=0;ol<Be.length;ol+=1){var Mi=An(st=Be[ol])?st(mn):st;for(var It in Mi)mn[It]=It==="className"?kn(mn[It],Mi[It]):It==="style"?Se(Se({},mn[It]),Mi[It]):Mi[It]}return vt.className&&(mn.className=kn(mn.className,vt.className)),mn}(M,k,xv(k,il,le)||yr),A=O.as||zi,F={};for(var B in O)O[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?F.as=O.forwardedAs:hn&&!hn(B,A)||(F[B]=O[B]));var ne=function(Be,vt){var Ue=Kd(),st=Be.generateAndInjectStyles(vt,Ue.styleSheet,Ue.stylis);return st}(T,O),Ft=kn(fn,pn);return ne&&(Ft+=" "+ne),O.className&&(Ft+=" "+O.className),F[Fl(A)&&!Zh.has(A)?"class":"className"]=Ft,F.ref=R,L.createElement(A,F)}(m,x,E)}f.displayName=c;var m=bn.forwardRef(f);return m.attrs=w,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=g,m.foldedComponentIds=r?kn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var b=[],k=1;k<arguments.length;k++)b[k-1]=arguments[k];for(var R=0,M=b;R<M.length;R++)Gs(E,M[R],!0);return E}({},i.defaultProps,x):x}}),lc(m,function(){return".".concat(m.styledComponentId)}),o&&om(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Xd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qd=function(e){return Object.assign(e,{isCss:!0})};function pm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(An(e)||vi(e)){var r=e;return qd(jn(Xd(ja,yi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?jn(i):qd(jn(Xd(i,t)))}function Ks(e,t,n){if(n===void 0&&(n=yr),!t)throw Fn(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,pm.apply(void 0,yi([i],o,!1)))};return r.attrs=function(i){return Ks(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ks(e,t,Se(Se({},n),i))},r}var hm=function(e){return Ks(Zv,e)},j=hm;Zh.forEach(function(e){j[e]=hm(e)});function sc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vs(pm.apply(void 0,yi([e],t,!1))),i=tm(r);return new cm(i,r)}const e1=j.div`
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
`,t1=j.div`
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
`,n1=j.div`
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
`,ba=j.div`
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
    gap: 2vw;
  }

  @media (max-width: 600px) {
    gap: 3vh;
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
`,r1=j.div`
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
`,i1=j.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  height: 90%;
  gap: 2vh;
  justify-content: space-between;
  align-items: center;
`,o1=j.div`
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
    margin-top: 1%;
  }
`,a1=sc`
  0% { opacity: 1  }
  50% { opacity: 0 }
  100% { opacity: 1 }
`,l1=j.div`
  font-size: 2vw;
  color: yellow;

  @media screen and (max-width: 1280px) {
    font-size: 7vw;
  }
`,s1=j.div`
  display: inline-block;
  animation: ${a1} 3s linear infinite;

  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
  }
`,u1=j.div`
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
`,c1=j.div`
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
`,d1=j.div`
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
`;var mm={exports:{}},gm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=L;function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p1=typeof Object.is=="function"?Object.is:f1,h1=vr.useState,m1=vr.useEffect,g1=vr.useLayoutEffect,y1=vr.useDebugValue;function v1(e,t){var n=t(),r=h1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return g1(function(){i.value=n,i.getSnapshot=t,Nl(i)&&o({inst:i})},[e,n,t]),m1(function(){return Nl(i)&&o({inst:i}),e(function(){Nl(i)&&o({inst:i})})},[e]),y1(n),n}function Nl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!p1(e,n)}catch{return!0}}function w1(e,t){return t()}var x1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?w1:v1;gm.useSyncExternalStore=vr.useSyncExternalStore!==void 0?vr.useSyncExternalStore:x1;mm.exports=gm;var S1=mm.exports,ym={exports:{}},vm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=L,k1=S1;function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var C1=typeof Object.is=="function"?Object.is:E1,P1=k1.useSyncExternalStore,j1=Oa.useRef,b1=Oa.useEffect,O1=Oa.useMemo,_1=Oa.useDebugValue;vm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=j1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=O1(function(){function s(w){if(!u){if(u=!0,d=w,w=r(w),i!==void 0&&a.hasValue){var g=a.value;if(i(g,w))return c=g}return c=w}if(g=c,C1(d,w))return g;var v=r(w);return i!==void 0&&i(g,v)?g:(d=w,c=v)}var u=!1,d,c,p=n===void 0?null:n;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,n,r,i]);var l=P1(e,o[0],o[1]);return b1(function(){a.hasValue=!0,a.value=l},[l]),_1(l),l};ym.exports=vm;var R1=ym.exports;function L1(e){e()}let wm=L1;const T1=e=>wm=e,A1=()=>wm,Jd=Symbol.for("react-redux-context"),Zd=typeof globalThis<"u"?globalThis:{};function F1(){var e;if(!L.createContext)return{};const t=(e=Zd[Jd])!=null?e:Zd[Jd]=new Map;let n=t.get(L.createContext);return n||(n=L.createContext(null),t.set(L.createContext,n)),n}const on=F1();function uc(e=on){return function(){return L.useContext(e)}}const xm=uc(),I1=()=>{throw new Error("uSES not initialized!")};let Sm=I1;const N1=e=>{Sm=e},$1=(e,t)=>e===t;function z1(e=on){const t=e===on?xm:uc(e);return function(r,i={}){const{equalityFn:o=$1,stabilityCheck:a=void 0,noopCheck:l=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:s,subscription:u,getServerState:d,stabilityCheck:c,noopCheck:p}=t();L.useRef(!0);const w=L.useCallback({[r.name](v){return r(v)}}[r.name],[r,c,a]),g=Sm(u.addNestedSub,s.getState,d||s.getState,w,o);return L.useDebugValue(g),g}}const I=z1();var km={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,cc=pe?Symbol.for("react.element"):60103,dc=pe?Symbol.for("react.portal"):60106,_a=pe?Symbol.for("react.fragment"):60107,Ra=pe?Symbol.for("react.strict_mode"):60108,La=pe?Symbol.for("react.profiler"):60114,Ta=pe?Symbol.for("react.provider"):60109,Aa=pe?Symbol.for("react.context"):60110,fc=pe?Symbol.for("react.async_mode"):60111,Fa=pe?Symbol.for("react.concurrent_mode"):60111,Ia=pe?Symbol.for("react.forward_ref"):60112,Na=pe?Symbol.for("react.suspense"):60113,M1=pe?Symbol.for("react.suspense_list"):60120,$a=pe?Symbol.for("react.memo"):60115,za=pe?Symbol.for("react.lazy"):60116,D1=pe?Symbol.for("react.block"):60121,B1=pe?Symbol.for("react.fundamental"):60117,U1=pe?Symbol.for("react.responder"):60118,H1=pe?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cc:switch(e=e.type,e){case fc:case Fa:case _a:case La:case Ra:case Na:return e;default:switch(e=e&&e.$$typeof,e){case Aa:case Ia:case za:case $a:case Ta:return e;default:return t}}case dc:return t}}}function Em(e){return Me(e)===Fa}W.AsyncMode=fc;W.ConcurrentMode=Fa;W.ContextConsumer=Aa;W.ContextProvider=Ta;W.Element=cc;W.ForwardRef=Ia;W.Fragment=_a;W.Lazy=za;W.Memo=$a;W.Portal=dc;W.Profiler=La;W.StrictMode=Ra;W.Suspense=Na;W.isAsyncMode=function(e){return Em(e)||Me(e)===fc};W.isConcurrentMode=Em;W.isContextConsumer=function(e){return Me(e)===Aa};W.isContextProvider=function(e){return Me(e)===Ta};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cc};W.isForwardRef=function(e){return Me(e)===Ia};W.isFragment=function(e){return Me(e)===_a};W.isLazy=function(e){return Me(e)===za};W.isMemo=function(e){return Me(e)===$a};W.isPortal=function(e){return Me(e)===dc};W.isProfiler=function(e){return Me(e)===La};W.isStrictMode=function(e){return Me(e)===Ra};W.isSuspense=function(e){return Me(e)===Na};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_a||e===Fa||e===La||e===Ra||e===Na||e===M1||typeof e=="object"&&e!==null&&(e.$$typeof===za||e.$$typeof===$a||e.$$typeof===Ta||e.$$typeof===Aa||e.$$typeof===Ia||e.$$typeof===B1||e.$$typeof===U1||e.$$typeof===H1||e.$$typeof===D1)};W.typeOf=Me;km.exports=W;var W1=km.exports,Cm=W1,V1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pm={};Pm[Cm.ForwardRef]=V1;Pm[Cm.Memo]=G1;var V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),hc=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Ua=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),Q1=Symbol.for("react.server_context"),Wa=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Ka=Symbol.for("react.lazy"),K1=Symbol.for("react.offscreen"),jm;jm=Symbol.for("react.module.reference");function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Ma:case Ba:case Da:case Va:case Ga:return e;default:switch(e=e&&e.$$typeof,e){case Q1:case Ha:case Wa:case Ka:case Qa:case Ua:return e;default:return t}}case hc:return t}}}V.ContextConsumer=Ha;V.ContextProvider=Ua;V.Element=pc;V.ForwardRef=Wa;V.Fragment=Ma;V.Lazy=Ka;V.Memo=Qa;V.Portal=hc;V.Profiler=Ba;V.StrictMode=Da;V.Suspense=Va;V.SuspenseList=Ga;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Je(e)===Ha};V.isContextProvider=function(e){return Je(e)===Ua};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};V.isForwardRef=function(e){return Je(e)===Wa};V.isFragment=function(e){return Je(e)===Ma};V.isLazy=function(e){return Je(e)===Ka};V.isMemo=function(e){return Je(e)===Qa};V.isPortal=function(e){return Je(e)===hc};V.isProfiler=function(e){return Je(e)===Ba};V.isStrictMode=function(e){return Je(e)===Da};V.isSuspense=function(e){return Je(e)===Va};V.isSuspenseList=function(e){return Je(e)===Ga};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ma||e===Ba||e===Da||e===Va||e===Ga||e===K1||typeof e=="object"&&e!==null&&(e.$$typeof===Ka||e.$$typeof===Qa||e.$$typeof===Ua||e.$$typeof===Ha||e.$$typeof===Wa||e.$$typeof===jm||e.getModuleId!==void 0)};V.typeOf=Je;function Y1(){const e=A1();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const ef={notify(){},get:()=>[]};function X1(e,t){let n,r=ef,i=0,o=!1;function a(v){d();const P=r.subscribe(v);let h=!1;return()=>{h||(h=!0,P(),c())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=Y1())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=ef)}function p(){o||(o=!0,d())}function w(){o&&(o=!1,c())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:p,tryUnsubscribe:w,getListeners:()=>r};return g}const q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J1=q1?L.useLayoutEffect:L.useEffect;function Z1({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const a=L.useMemo(()=>{const u=X1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),l=L.useMemo(()=>e.getState(),[e]);J1(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const s=t||on;return L.createElement(s.Provider,{value:a},n)}function bm(e=on){const t=e===on?xm:uc(e);return function(){const{store:r}=t();return r}}const ew=bm();function tw(e=on){const t=e===on?ew:bm(e);return function(){return t().dispatch}}const cn=tw();N1(R1.useSyncExternalStoreWithSelector);T1(Gh.unstable_batchedUpdates);const Pr=j.div`
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
`,mc=sc`
  from {
    opacity: 0;
    transform: scale(0); 
    
  }
  to {
    opacity: 1;
    transform: scale(1); 
  }
`,Om=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 600px) {
  }
`,nw=j.img`
  width: 55%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
`,rw=j.div`
  height: 100%;
  display: flex;
  justify-content: center;
`,iw=j.img`
  object-fit: cover;
  width: 100%;
`,ow=j.div`
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
`,_m=j.img`
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
`,aw=j.img`
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
`,Rm=j.div`
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
`,Lm=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;j.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;const lw=j.img`
  max-width: 80vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  position: relative;

  @media screen and (max-width: 1280px) {
    max-width: 95vw;
    max-height: 95vh;
  }
`,sw=j.img`
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  position: relative;
`,uw=j.div`
  color: white;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,cw=j.img`
  width: 1vw;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    width: 3vw;
  }

  @media screen and (max-width: 600px) {
    width: 4vw;
  }
`,dw=j.button`
  background-color: transparent;
  border: none;
`,fw=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
  position: relative;
`,pw=j.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`,hw=j.button`
  border-radius: 20px;
  background-color: #016009;
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
`,mw=j.button`
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
`,dn=j.div`
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
`,gw=j.div`
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
`,yw=j.div`
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
`,vw=j.div`
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
`,tf=j.div`
  color: white;
  font-size: 1vw;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1280px) {
    font-size: 2vh;
    justify-content: center;
  }
`,ww=j.div`
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
`,xw=j.div`
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
`,Sw=j.div`
  display: flex;
  gap: 10px;
  font-family: 'RetroGaming', sans-serif;
  justify-content: space-around;

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 90%;
    gap: 5px;
  }
`,kw=j.div`
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
`,Ew=j.div`
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
`;const Cw=j.div`
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
`,Pw=j.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 0;
`,jw=j.li`
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
`,bw=j.div`
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
`;const Ow=j.div`
  color: white;
  font-size: 2vw;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,_w=j.div`
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
`,Rw=j.div`
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
`,Lw=j.div`
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
`,Tw=j.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Aw=j.div`
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
`;const Fw={kanto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/kanto.png",johto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191839/maps/johtoLarger.jpg",hoenn:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/hoenn.png",sinnoh:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/sinnoh.png",unova:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/unova.png",kalos:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/kalos.png",alola:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/alola.png",galar:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/galar.png",hisui:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191298/maps/hisuiLarge.png",paldea:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701187942/maps/paldea.png"};function Iw(){const e=I(o=>o.pokemon.selectedPokemon),[t,n]=L.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return y.jsxs(Oi,{children:[e.name&&y.jsx(Om,{src:e.image,alt:`${e.name} image`,onClick:r,"aria-label":`Open image of ${e.name}`},e.id),t&&y.jsx(Rm,{onClick:i,"aria-label":"Close modal",children:y.jsx(Lm,{children:y.jsx(sw,{src:e.image,alt:`${e.name} enlarged image`})})})]})}function Nw(){const e=I(n=>n.type.selectedType);function t(n){return"types/"+n.toLowerCase()+".svg"}return y.jsx(nw,{src:t(e),alt:`${e} type icon`,"aria-label":`Image of ${e} type`},e)}function Tm(){var t,n;const e=I(r=>r.item.selectedItem);return y.jsxs(Oi,{children:[y.jsx(dn,{style:{color:"white"},children:e.name.toUpperCase()}),y.jsx(aw,{src:(t=e.sprites)==null?void 0:t.default,alt:`${e.name} image`,"aria-label":`Image of ${e.name}`},e.id),y.jsxs(d1,{children:["Category:",y.jsx(c1,{children:(n=e.category)==null?void 0:n.name.toUpperCase()})]})]})}function $w(){const e=I(l=>l.regions.lists.selected),[t,n]=L.useState("");L.useEffect(()=>{n(Fw[e.name])},[e.name]);const[r,i]=L.useState(!1),o=()=>{i(!0)},a=()=>{i(!1)};return y.jsxs(Oi,{children:[y.jsxs(rw,{children:[y.jsx(ow,{children:e.name.toUpperCase()}),y.jsx(iw,{src:t,onClick:o,"aria-label":`Open image of ${e.name} region`})]}),r&&y.jsx(Rm,{onClick:a,"aria-label":"Close modal",children:y.jsx(Lm,{children:y.jsx(lw,{src:t,alt:`${e.name} region map`})})})]})}function zw(){const e=()=>{window.open("https://github.com/brunomachadors","_blank")};return y.jsxs(y.Fragment,{children:[y.jsx(Om,{src:"https://i.gifer.com/4tym.gif",id:"pikachuGif","aria-label":"Animated Pikachu GIF"}),y.jsx(dw,{onClick:e,"aria-label":"Redirect to GitHub account",children:y.jsxs(uw,{id:"gitAccount",children:[y.jsx(cw,{src:"icons/git.png",alt:"GitHub icon"}),"/brunomachadors".toUpperCase()]})})]})}function rt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function an(e){return!!e&&!!e[X]}function Rt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Qw}(e)||Array.isArray(e)||!!e[uf]||!!(!((t=e.constructor)===null||t===void 0)&&t[uf])||gc(e)||yc(e))}function In(e,t,n){n===void 0&&(n=!1),jr(e)===0?(n?Object.keys:ar)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function jr(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:gc(e)?2:yc(e)?3:0}function or(e,t){return jr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Mw(e,t){return jr(e)===2?e.get(t):e[t]}function Am(e,t,n){var r=jr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Fm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function gc(e){return Vw&&e instanceof Map}function yc(e){return Gw&&e instanceof Set}function vn(e){return e.o||e.t}function vc(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Nm(e);delete t[X];for(var n=ar(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function wc(e,t){return t===void 0&&(t=!1),xc(e)||an(e)||!Rt(e)||(jr(e)>1&&(e.set=e.add=e.clear=e.delete=Dw),Object.freeze(e),t&&In(e,function(n,r){return wc(r,!0)},!0)),e}function Dw(){rt(2)}function xc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function gt(e){var t=Js[e];return t||rt(18,e),t}function Bw(e,t){Js[e]||(Js[e]=t)}function Ys(){return wi}function $l(e,t){t&&(gt("Patches"),e.u=[],e.s=[],e.v=t)}function Jo(e){Xs(e),e.p.forEach(Uw),e.p=null}function Xs(e){e===wi&&(wi=e.l)}function nf(e){return wi={p:[],l:wi,h:e,m:!0,_:0}}function Uw(e){var t=e[X];t.i===0||t.i===1?t.j():t.g=!0}function zl(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||gt("ES5").S(t,e,r),r?(n[X].P&&(Jo(t),rt(4)),Rt(e)&&(e=Zo(t,e),t.l||ea(t,e)),t.u&&gt("Patches").M(n[X].t,e,t.u,t.s)):e=Zo(t,n,[]),Jo(t),t.u&&t.v(t.u,t.s),e!==Im?e:void 0}function Zo(e,t,n){if(xc(t))return t;var r=t[X];if(!r)return In(t,function(l,s){return rf(e,r,t,l,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ea(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=vc(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),In(o,function(l,s){return rf(e,r,i,l,s,n,a)}),ea(e,i,!1),n&&e.u&&gt("Patches").N(r,n,e.u,e.s)}return r.o}function rf(e,t,n,r,i,o,a){if(an(i)){var l=Zo(e,i,o&&t&&t.i!==3&&!or(t.R,r)?o.concat(r):void 0);if(Am(n,r,l),!an(l))return;e.m=!1}else a&&n.add(i);if(Rt(i)&&!xc(i)){if(!e.h.D&&e._<1)return;Zo(e,i),t&&t.A.l||ea(e,i)}}function ea(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&wc(t,n)}function Ml(e,t){var n=e[X];return(n?vn(n):e)[t]}function of(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ht(e){e.P||(e.P=!0,e.l&&Ht(e.l))}function Dl(e){e.o||(e.o=vc(e.t))}function qs(e,t,n){var r=gc(t)?gt("MapSet").F(t,n):yc(t)?gt("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:Ys(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},s=l,u=xi;a&&(s=[l],u=Hr);var d=Proxy.revocable(s,u),c=d.revoke,p=d.proxy;return l.k=p,l.j=c,p}(t,n):gt("ES5").J(t,n);return(n?n.A:Ys()).p.push(r),r}function Hw(e){return an(e)||rt(22,e),function t(n){if(!Rt(n))return n;var r,i=n[X],o=jr(n);if(i){if(!i.P&&(i.i<4||!gt("ES5").K(i)))return i.t;i.I=!0,r=af(n,o),i.I=!1}else r=af(n,o);return In(r,function(a,l){i&&Mw(i.t,a)===l||Am(r,a,t(l))}),o===3?new Set(r):r}(e)}function af(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return vc(e)}function Ww(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var s=this[X];return xi.get(s,o)},set:function(s){var u=this[X];xi.set(u,o,s)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][X];if(!l.P)switch(l.i){case 5:r(l)&&Ht(l);break;case 4:n(l)&&Ht(l)}}}function n(o){for(var a=o.t,l=o.k,s=ar(l),u=s.length-1;u>=0;u--){var d=s[u];if(d!==X){var c=a[d];if(c===void 0&&!or(a,d))return!0;var p=l[d],w=p&&p[X];if(w?w.t!==c:!Fm(p,c))return!0}}var g=!!a[X];return s.length!==ar(a).length+(g?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var i={};Bw("ES5",{J:function(o,a){var l=Array.isArray(o),s=function(d,c){if(d){for(var p=Array(c.length),w=0;w<c.length;w++)Object.defineProperty(p,""+w,e(w,!0));return p}var g=Nm(c);delete g[X];for(var v=ar(g),P=0;P<v.length;P++){var h=v[P];g[h]=e(h,d||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(l,o),u={i:l?5:4,A:a?a.A:Ys(),P:!1,I:!1,R:{},l:a,t:o,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,X,{value:u,writable:!0}),s},S:function(o,a,l){l?an(a)&&a[X].A===o&&t(o.p):(o.u&&function s(u){if(u&&typeof u=="object"){var d=u[X];if(d){var c=d.t,p=d.k,w=d.R,g=d.i;if(g===4)In(p,function(m){m!==X&&(c[m]!==void 0||or(c,m)?w[m]||s(p[m]):(w[m]=!0,Ht(d)))}),In(c,function(m){p[m]!==void 0||or(p,m)||(w[m]=!1,Ht(d))});else if(g===5){if(r(d)&&(Ht(d),w.length=!0),p.length<c.length)for(var v=p.length;v<c.length;v++)w[v]=!1;else for(var P=c.length;P<p.length;P++)w[P]=!0;for(var h=Math.min(p.length,c.length),f=0;f<h;f++)p.hasOwnProperty(f)||(w[f]=!0),w[f]===void 0&&s(p[f])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var lf,wi,Sc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Vw=typeof Map<"u",Gw=typeof Set<"u",sf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Im=Sc?Symbol.for("immer-nothing"):((lf={})["immer-nothing"]=!0,lf),uf=Sc?Symbol.for("immer-draftable"):"__$immer_draftable",X=Sc?Symbol.for("immer-state"):"__$immer_state",Qw=""+Object.prototype.constructor,ar=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Nm=Object.getOwnPropertyDescriptors||function(e){var t={};return ar(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Js={},xi={get:function(e,t){if(t===X)return e;var n=vn(e);if(!or(n,t))return function(i,o,a){var l,s=of(o,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Rt(r)?r:r===Ml(e.t,t)?(Dl(e),e.o[t]=qs(e.A.h,r,e)):r},has:function(e,t){return t in vn(e)},ownKeys:function(e){return Reflect.ownKeys(vn(e))},set:function(e,t,n){var r=of(vn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ml(vn(e),t),o=i==null?void 0:i[X];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Fm(n,i)&&(n!==void 0||or(e.t,t)))return!0;Dl(e),Ht(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ml(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Dl(e),Ht(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){rt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){rt(12)}},Hr={};In(xi,function(e,t){Hr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Hr.deleteProperty=function(e,t){return Hr.set.call(this,e,t,void 0)},Hr.set=function(e,t,n){return xi.set.call(this,e[0],t,n,e[0])};var Kw=function(){function e(n){var r=this;this.O=sf,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var s=r;return function(v){var P=this;v===void 0&&(v=l);for(var h=arguments.length,f=Array(h>1?h-1:0),m=1;m<h;m++)f[m-1]=arguments[m];return s.produce(v,function(x){var E;return(E=o).call.apply(E,[P,x].concat(f))})}}var u;if(typeof o!="function"&&rt(6),a!==void 0&&typeof a!="function"&&rt(7),Rt(i)){var d=nf(r),c=qs(r,i,void 0),p=!0;try{u=o(c),p=!1}finally{p?Jo(d):Xs(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return $l(d,a),zl(v,d)},function(v){throw Jo(d),v}):($l(d,a),zl(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Im&&(u=void 0),r.D&&wc(u,!0),a){var w=[],g=[];gt("Patches").M(i,u,w,g),a(w,g)}return u}rt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,c=Array(d>1?d-1:0),p=1;p<d;p++)c[p-1]=arguments[p];return r.produceWithPatches(u,function(w){return i.apply(void 0,[w].concat(c))})};var a,l,s=r.produce(i,o,function(u,d){a=u,l=d});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,a,l]}):[s,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Rt(n)||rt(8),an(n)&&(n=Hw(n));var r=nf(this),i=qs(this,n,void 0);return i[X].C=!0,Xs(r),i},t.finishDraft=function(n,r){var i=n&&n[X],o=i.A;return $l(o,r),zl(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!sf&&rt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=gt("Patches").$;return an(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Ne=new Kw,$m=Ne.produce;Ne.produceWithPatches.bind(Ne);Ne.setAutoFreeze.bind(Ne);Ne.setUseProxies.bind(Ne);Ne.applyPatches.bind(Ne);Ne.createDraft.bind(Ne);Ne.finishDraft.bind(Ne);function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function Yw(e,t){if(Si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xw(e){var t=Yw(e,"string");return Si(t)==="symbol"?t:String(t)}function qw(e,t,n){return t=Xw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function df(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cf(Object(n),!0).forEach(function(r){qw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function we(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ff=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Bl=function(){return Math.random().toString(36).substring(7).split("").join(".")},ta={INIT:"@@redux/INIT"+Bl(),REPLACE:"@@redux/REPLACE"+Bl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Bl()}};function Jw(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function zm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(we(1));return n(zm)(e,t)}if(typeof e!="function")throw new Error(we(2));var i=e,o=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(we(3));return o}function c(v){if(typeof v!="function")throw new Error(we(4));if(s)throw new Error(we(5));var P=!0;return u(),l.push(v),function(){if(P){if(s)throw new Error(we(6));P=!1,u();var f=l.indexOf(v);l.splice(f,1),a=null}}}function p(v){if(!Jw(v))throw new Error(we(7));if(typeof v.type>"u")throw new Error(we(8));if(s)throw new Error(we(9));try{s=!0,o=i(o,v)}finally{s=!1}for(var P=a=l,h=0;h<P.length;h++){var f=P[h];f()}return v}function w(v){if(typeof v!="function")throw new Error(we(10));i=v,p({type:ta.REPLACE})}function g(){var v,P=c;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(we(11));function m(){f.next&&f.next(d())}m();var x=P(m);return{unsubscribe:x}}},v[ff]=function(){return this},v}return p({type:ta.INIT}),r={dispatch:p,subscribe:c,getState:d,replaceReducer:w},r[ff]=g,r}function Zw(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ta.INIT});if(typeof r>"u")throw new Error(we(12));if(typeof n(void 0,{type:ta.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(we(13))})}function ex(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{Zw(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var d=!1,c={},p=0;p<o.length;p++){var w=o[p],g=n[w],v=s[w],P=g(v,u);if(typeof P>"u")throw u&&u.type,new Error(we(14));c[w]=P,d=d||P!==v}return d=d||o.length!==Object.keys(s).length,d?c:s}}function na(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function tx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(we(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return o=na.apply(void 0,l)(i.dispatch),df(df({},i),{},{dispatch:o})}}}function Mm(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var Dm=Mm();Dm.withExtraArgument=Mm;const pf=Dm;var Bm=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),nx=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(d){return s([u,d])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},wr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},rx=Object.defineProperty,ix=Object.defineProperties,ox=Object.getOwnPropertyDescriptors,hf=Object.getOwnPropertySymbols,ax=Object.prototype.hasOwnProperty,lx=Object.prototype.propertyIsEnumerable,mf=function(e,t,n){return t in e?rx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},en=function(e,t){for(var n in t||(t={}))ax.call(t,n)&&mf(e,n,t[n]);if(hf)for(var r=0,i=hf(t);r<i.length;r++){var n=i[r];lx.call(t,n)&&mf(e,n,t[n])}return e},Ul=function(e,t){return ix(e,ox(t))},sx=function(e,t,n){return new Promise(function(r,i){var o=function(s){try{l(n.next(s))}catch(u){i(u)}},a=function(s){try{l(n.throw(s))}catch(u){i(u)}},l=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(o,a)};l((n=n.apply(e,t)).next())})},ux=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?na:na.apply(null,arguments)};function cx(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function tn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return en(en({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var dx=function(e){Bm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wr([void 0],n[0].concat(this)))):new(t.bind.apply(t,wr([void 0],n.concat(this))))},t}(Array),fx=function(e){Bm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wr([void 0],n[0].concat(this)))):new(t.bind.apply(t,wr([void 0],n.concat(this))))},t}(Array);function Zs(e){return Rt(e)?$m(e,function(){}):e}function px(e){return typeof e=="boolean"}function hx(){return function(t){return mx(t)}}function mx(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new dx;return n&&(px(n)?r.push(pf):r.push(pf.withExtraArgument(n.extraArgument))),r}var gx=!0;function yx(e){var t=hx(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,s=l===void 0?!0:l,u=n.preloadedState,d=u===void 0?void 0:u,c=n.enhancers,p=c===void 0?void 0:c,w;if(typeof i=="function")w=i;else if(cx(i))w=ex(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var v=tx.apply(void 0,g),P=na;s&&(P=ux(en({trace:!gx},typeof s=="object"&&s)));var h=new fx(v),f=h;Array.isArray(p)?f=wr([v],p):typeof p=="function"&&(f=p(h));var m=P.apply(void 0,f);return zm(w,d,m)}function Um(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function vx(e){return typeof e=="function"}function wx(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Um(t):[t,n,r],o=i[0],a=i[1],l=i[2],s;if(vx(e))s=function(){return Zs(e())};else{var u=Zs(e);s=function(){return u}}function d(c,p){c===void 0&&(c=s());var w=wr([o[p.type]],a.filter(function(g){var v=g.matcher;return v(p)}).map(function(g){var v=g.reducer;return v}));return w.filter(function(g){return!!g}).length===0&&(w=[l]),w.reduce(function(g,v){if(v)if(an(g)){var P=g,h=v(P,p);return h===void 0?g:h}else{if(Rt(g))return $m(g,function(f){return v(f,p)});var h=v(g,p);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return d.getInitialState=s,d}function xx(e,t){return e+"/"+t}function Tt(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Zs(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(d){var c=r[d],p=xx(t,d),w,g;"reducer"in c?(w=c.reducer,g=c.prepare):w=c,o[d]=w,a[p]=w,l[d]=g?tn(p,g):tn(p)});function s(){var d=typeof e.extraReducers=="function"?Um(e.extraReducers):[e.extraReducers],c=d[0],p=c===void 0?{}:c,w=d[1],g=w===void 0?[]:w,v=d[2],P=v===void 0?void 0:v,h=en(en({},p),a);return wx(n,function(f){for(var m in h)f.addCase(m,h[m]);for(var x=0,E=g;x<E.length;x++){var b=E[x];f.addMatcher(b.matcher,b.reducer)}P&&f.addDefaultCase(P)})}var u;return{name:t,reducer:function(d,c){return u||(u=s()),u(d,c)},actions:l,caseReducers:o,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var Sx="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kx=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Sx[Math.random()*64|0];return t},Ex=["name","message","stack","code"],Hl=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),gf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Cx=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Ex;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=tn(t+"/fulfilled",function(u,d,c,p){return{payload:u,meta:Ul(en({},p||{}),{arg:c,requestId:d,requestStatus:"fulfilled"})}}),o=tn(t+"/pending",function(u,d,c){return{payload:void 0,meta:Ul(en({},c||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),a=tn(t+"/rejected",function(u,d,c,p,w){return{payload:p,error:(r&&r.serializeError||Cx)(u||"Rejected"),meta:Ul(en({},w||{}),{arg:c,requestId:d,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(d,c,p){var w=r!=null&&r.idGenerator?r.idGenerator(u):kx(),g=new l,v;function P(f){v=f,g.abort()}var h=function(){return sx(this,null,function(){var f,m,x,E,b,k,R;return nx(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),E=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:c,extra:p}),jx(E)?[4,E]:[3,2];case 1:E=M.sent(),M.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise(function(T,le){return g.signal.addEventListener("abort",function(){return le({name:"AbortError",message:v||"Aborted"})})}),d(o(w,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:w,arg:u},{getState:c,extra:p}))),[4,Promise.race([b,Promise.resolve(n(u,{dispatch:d,getState:c,extra:p,requestId:w,signal:g.signal,abort:P,rejectWithValue:function(T,le){return new Hl(T,le)},fulfillWithValue:function(T,le){return new gf(T,le)}})).then(function(T){if(T instanceof Hl)throw T;return T instanceof gf?i(T.payload,w,u,T.meta):i(T,w,u)})])];case 3:return x=M.sent(),[3,5];case 4:return k=M.sent(),x=k instanceof Hl?a(null,w,u,k.payload,k.meta):a(k,w,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(x)&&x.meta.condition,R||d(x),[2,x]}})})}();return Object.assign(h,{abort:P,requestId:w,arg:u,unwrap:function(){return h.then(Px)}})}}return Object.assign(s,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Px(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function jx(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var kc="listenerMiddleware";tn(kc+"/add");tn(kc+"/removeAll");tn(kc+"/remove");var yf;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ww();const bx={selectedMenu:"photo"},Hm=Tt({name:"infoMenu",initialState:bx,reducers:{selectInfoMenu:(e,t)=>{e.selectedMenu=t.payload}}}),{selectInfoMenu:vf}=Hm.actions,Ox=Hm.reducer,De={colors:{background:{grass:"linear-gradient(to top, #67F70A, #204000, black)",fire:"linear-gradient(to top,  #D6CA23, #903F3F, black)",water:"linear-gradient(to top, #70A7F0, #557DEA, black)",poison:"linear-gradient(to top, #A819D7, #611380, black)",normal:"linear-gradient(to top, #CCC9AA, #ACA974, black)",bug:"linear-gradient(to top, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to top, #7AA9E8, black)",electric:"linear-gradient(to top, #D6CA23, black)",ground:"linear-gradient(to top, #B76D29, black)",fairy:"linear-gradient(to top, #FFA0C2, #F87EA7)",fighting:"linear-gradient(to top, #E81319, #800B11)",psychic:"linear-gradient(to top, #C82D5B, black)",rock:"linear-gradient(to top, #6C644F, black)",ghost:"linear-gradient(to top, #BD98CB, #816A9F, black)",ice:"linear-gradient(to top, #66D1E5, #176F73, black)",dragon:"linear-gradient(to top, #8A55FD, #7241E4, black)",steel:"linear-gradient(to top, #BBC5C4, #A0A0A0, #454545)",dark:"linear-gradient(to top, #5F4632, black)"},type:{grass:"linear-gradient(to right, #3E9709, #4BB36F)",fire:"linear-gradient(to right, #F67F0B, #F8B80E)",water:"linear-gradient(to right, #557DEA, #70A7F0)",poison:"linear-gradient(to right, #7A6696, #C89EC7)",normal:"linear-gradient(to right, #ACA974, #C5C5C5)",bug:"linear-gradient(to right, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to right, #7AA9E8, #B5D5F1)",electric:"linear-gradient(to right, #D6CA23, #FFFDB8)",ground:"linear-gradient(to right, #B76D29, #E78E4A)",fairy:"linear-gradient(to right, #F87EA7, #FFA0C2)",fighting:"linear-gradient(to right, #A85451, #D99C90)",psychic:"linear-gradient(to right, #C82D5B, #F67399)",rock:"linear-gradient(to right, #6C644F, #C2B993)",ghost:"linear-gradient(to right, #472B53, #B683B3)",ice:"linear-gradient(to right, #176F73, #9CE8F2)",dragon:"linear-gradient(to right, #7241E4, #A99EC3)",steel:"linear-gradient(to right, #A0A0A0, #454545)",dark:"linear-gradient(to right, #333333, #000000)"},buttonColor:{grass:"#2E6030",fire:"#8C3636",water:"#3B548A",poison:"#611380",normal:"#827F5A",bug:"#91BA2E",flying:"#759FCB",electric:"#E3D38E",ground:"#B9692B",fairy:"#CC38A3",fighting:"#E81319",psychic:"#C8436A",rock:"#8D8666",ghost:"#695D7E",ice:"#579AA9",dragon:"#70578B",steel:"#808080",dark:"#333333"},regionColorMap:{kanto:"linear-gradient(to right, #FF5733, #FF4500)",johto:"linear-gradient(to right, #FFD700, #C0C0C0)",hoenn:"linear-gradient(to right, #C0C0C0, #87CEEB)",sinnoh:"linear-gradient(to right, #87CEEB, #FF4500)",unova:"linear-gradient(to right, #FF4500, #008000)",kalos:"linear-gradient(to right, #008000, #CD5C5C)",alola:"linear-gradient(to right, #CD5C5C, #B0E0E6)",galar:"linear-gradient(to right, #B0E0E6, #FFA500)",hisui:"linear-gradient(to right, #FFA500, #9932CC)",paldea:"linear-gradient(to right, #9932CC, #8A2BE2)"},regionColorMapBackground:{kanto:"linear-gradient(to top, #FF5733, #FF4500, #000000)",johto:"linear-gradient(to top, #FFD700, #C0C0C0, #000000)",hoenn:"linear-gradient(to top, #C0C0C0, #87CEEB, #000000)",sinnoh:"linear-gradient(to top, #87CEEB, #FF4500, #000000)",unova:"linear-gradient(to top, #FF4500, #008000, #000000)",kalos:"linear-gradient(to top, #008000, #CD5C5C, #000000)",alola:"linear-gradient(to top, #CD5C5C, #B0E0E6, #000000)",galar:"linear-gradient(to top, #B0E0E6, #FFA500, #000000)",hisui:"linear-gradient(to top, #FFA500, #9932CC, #000000)",paldea:"linear-gradient(to top, #9932CC, #8A2BE2, #000000)"},itemTypeColorMap:{"stat-boosts":"#FFD700","effort-drop":"#FFA500",medicine:"#D3D3D3",other:"#B0C4DE","in-a-pinch":"#FF6347","picky-healing":"#7CFC00","type-protection":"#D2B48C","baking-only":"#D3D3D3",collectibles:"#FFDAB9",evolution:"#C71585",spelunking:"#98FB98","held-items":"#FFB6C1",choice:"#9370DB","effort-training":"#87CEEB","bad-held-items":"#CD853F",training:"#AFEEEE",plates:"#FF6347","species-specific":"#FFA07A","type-enhancement":"#8B4513","event-items":"#FFD700",gameplay:"#DCDCDC","plot-advancement":"#8A2BE2",unused:"#DCDCDC",loot:"#B8860B","all-mail":"#FFB6C1",vitamins:"#ADFF2F",healing:"#00FF7F","pp-recovery":"#6495ED",revival:"#FF6347","status-cures":"#00FA9A",mulch:"#DAA520","special-balls":"#8A2BE2","standard-balls":"#00BFFF","dex-completion":"#FFD700",scarves:"#FF69B4","all-machines":"#4682B4",flutes:"#87CEEB","apricorn-balls":"#00FF00","apricorn-box":"#FFD700","data-cards":"#8A2BE2",jewels:"#FF69B4","miracle-shooter":"#7B68EE","mega-stones":"#FF6347",memories:"#87CEFA","z-crystals":"#D8BFD8","species-candies":"#FF6347","catching-bonus":"#20B2AA","dynamax-crystals":"#FF8C00"},itemGradientMap:{"stat-boosts":"linear-gradient(to top, #FF9966, #FF4500, #000000)","effort-drop":"linear-gradient(to top, #FFD700, #DAA520, #000000)",medicine:"linear-gradient(to top, #CCCCCC, #A9A9A9, #000000)",other:"linear-gradient(to top, #A9D5EB, #4682B4, #000000)","in-a-pinch":"linear-gradient(to top, #FF6347, #8B0000, #000000)","picky-healing":"linear-gradient(to top, #7CFC00, #556B2F, #000000)","type-protection":"linear-gradient(to top, #D2B48C, #8B4513, #000000)","baking-only":"linear-gradient(to top, #B0C4DE, #696969, #000000)",collectibles:"linear-gradient(to top, #FFDAB9, #CD853F, #000000)",evolution:"linear-gradient(to top, #C71585, #8B008B, #000000)",spelunking:"linear-gradient(to top, #98FB98, #008000, #000000)","held-items":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",choice:"linear-gradient(to top, #9370DB, #4B0082, #000000)","effort-training":"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","bad-held-items":"linear-gradient(to top, #CD853F, #8B4513, #000000)",training:"linear-gradient(to top, #AFEEEE, #4682B4, #000000)",plates:"linear-gradient(to top, #FF6347, #8B4513, #000000)","species-specific":"linear-gradient(to top, #FFA07A, #CD5C5C, #000000)","type-enhancement":"linear-gradient(to top, #8B4513, #4B0082, #000000)","event-items":"linear-gradient(to top, #FFD700, #FF4500, #000000)",gameplay:"linear-gradient(to top, #D3D3D3, #A9A9A9, #000000)","plot-advancement":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",unused:"linear-gradient(to top, #808080, #696969, #000000)",loot:"linear-gradient(to top, #B8860B, #8B4513, #000000)","all-mail":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",vitamins:"linear-gradient(to top, #ADFF2F, #556B2F, #000000)",healing:"linear-gradient(to top, #00FF7F, #008000, #000000)","pp-recovery":"linear-gradient(to top, #6495ED, #000080, #000000)",revival:"linear-gradient(to top, #FF6347, #8B4513, #000000)","status-cures":"linear-gradient(to top, #00FA9A, #008000, #000000)",mulch:"linear-gradient(to top, #DAA520, #8B4513, #000000)","special-balls":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)","standard-balls":"linear-gradient(to top, #00BFFF, #000080, #000000)","dex-completion":"linear-gradient(to top, #FFD700, #FF4500, #000000)",scarves:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","all-machines":"linear-gradient(to top, #4682B4, #000080, #000000)",flutes:"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","apricorn-balls":"linear-gradient(to top, #00FF00, #008000, #000000)","apricorn-box":"linear-gradient(to top, #FFD700, #FF4500, #000000)","data-cards":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",jewels:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","miracle-shooter":"linear-gradient(to top, #7B68EE, #4B0082, #000000)","mega-stones":"linear-gradient(to top, #FF6347, #8B4513, #000000)"}}},Wm=j.div`
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
`,_x=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    width: 70%;
    gap: 5px;
  }
`,Vm=j.div`
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
`,Gm=j.img`
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
`;const ra=j.img`
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
`;function Rx(e){return e.toLowerCase()+".svg"}function Lx({pokemon:e}){var t;return y.jsx(_x,{id:"typeContainer","aria-label":"Pokemon Types",children:(t=e.types)==null?void 0:t.map((n,r)=>y.jsx(Wm,{color:De.colors.buttonColor[n],"aria-labelledby":`typeLabel-${r}`,children:y.jsxs(Vm,{id:`typeLabel-${r}`,children:[y.jsx(Gm,{src:Rx(n),alt:`${n} icon`}),n.toUpperCase()]})},r))})}function Qm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tx}=Object.prototype,{getPrototypeOf:Ec}=Object,Ya=(e=>t=>{const n=Tx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>Ya(t)===e),Xa=e=>t=>typeof t===e,{isArray:br}=Array,ki=Xa("undefined");function Ax(e){return e!==null&&!ki(e)&&e.constructor!==null&&!ki(e.constructor)&&Qe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Km=yt("ArrayBuffer");function Fx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Km(e.buffer),t}const Ix=Xa("string"),Qe=Xa("function"),Ym=Xa("number"),qa=e=>e!==null&&typeof e=="object",Nx=e=>e===!0||e===!1,ko=e=>{if(Ya(e)!=="object")return!1;const t=Ec(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$x=yt("Date"),zx=yt("File"),Mx=yt("Blob"),Dx=yt("FileList"),Bx=e=>qa(e)&&Qe(e.pipe),Ux=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Qe(e.append)&&((t=Ya(e))==="formdata"||t==="object"&&Qe(e.toString)&&e.toString()==="[object FormData]"))},Hx=yt("URLSearchParams"),Wx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _i(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),br(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function Xm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const qm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jm=e=>!ki(e)&&e!==qm;function eu(){const{caseless:e}=Jm(this)&&this||{},t={},n=(r,i)=>{const o=e&&Xm(t,i)||i;ko(t[o])&&ko(r)?t[o]=eu(t[o],r):ko(r)?t[o]=eu({},r):br(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&_i(arguments[r],n);return t}const Vx=(e,t,n,{allOwnKeys:r}={})=>(_i(t,(i,o)=>{n&&Qe(i)?e[o]=Qm(i,n):e[o]=i},{allOwnKeys:r}),e),Gx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Kx=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Ec(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Yx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Xx=e=>{if(!e)return null;if(br(e))return e;let t=e.length;if(!Ym(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ec(Uint8Array)),Jx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Zx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},eS=yt("HTMLFormElement"),tS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),wf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nS=yt("RegExp"),Zm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_i(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},rS=e=>{Zm(e,(t,n)=>{if(Qe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Qe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},iS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return br(e)?r(e):r(String(e).split(t)),n},oS=()=>{},aS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Wl="abcdefghijklmnopqrstuvwxyz",xf="0123456789",e0={DIGIT:xf,ALPHA:Wl,ALPHA_DIGIT:Wl+Wl.toUpperCase()+xf},lS=(e=16,t=e0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function sS(e){return!!(e&&Qe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const uS=e=>{const t=new Array(10),n=(r,i)=>{if(qa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=br(r)?[]:{};return _i(r,(a,l)=>{const s=n(a,i+1);!ki(s)&&(o[l]=s)}),t[i]=void 0,o}}return r};return n(e,0)},cS=yt("AsyncFunction"),dS=e=>e&&(qa(e)||Qe(e))&&Qe(e.then)&&Qe(e.catch),S={isArray:br,isArrayBuffer:Km,isBuffer:Ax,isFormData:Ux,isArrayBufferView:Fx,isString:Ix,isNumber:Ym,isBoolean:Nx,isObject:qa,isPlainObject:ko,isUndefined:ki,isDate:$x,isFile:zx,isBlob:Mx,isRegExp:nS,isFunction:Qe,isStream:Bx,isURLSearchParams:Hx,isTypedArray:qx,isFileList:Dx,forEach:_i,merge:eu,extend:Vx,trim:Wx,stripBOM:Gx,inherits:Qx,toFlatObject:Kx,kindOf:Ya,kindOfTest:yt,endsWith:Yx,toArray:Xx,forEachEntry:Jx,matchAll:Zx,isHTMLForm:eS,hasOwnProperty:wf,hasOwnProp:wf,reduceDescriptors:Zm,freezeMethods:rS,toObjectSet:iS,toCamelCase:tS,noop:oS,toFiniteNumber:aS,findKey:Xm,global:qm,isContextDefined:Jm,ALPHABET:e0,generateString:lS,isSpecCompliantForm:sS,toJSONObject:uS,isAsyncFn:cS,isThenable:dS};function z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const t0=z.prototype,n0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{n0[e]={value:e}});Object.defineProperties(z,n0);Object.defineProperty(t0,"isAxiosError",{value:!0});z.from=(e,t,n,r,i,o)=>{const a=Object.create(t0);return S.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),z.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const fS=null;function tu(e){return S.isPlainObject(e)||S.isArray(e)}function r0(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Sf(e,t,n){return e?e.concat(t).map(function(i,o){return i=r0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function pS(e){return S.isArray(e)&&!e.some(tu)}const hS=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Ja(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,P){return!S.isUndefined(P[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!s&&S.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,v,P){let h=g;if(g&&!P&&typeof g=="object"){if(S.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&pS(g)||(S.isFileList(g)||S.endsWith(v,"[]"))&&(h=S.toArray(g)))return v=r0(v),h.forEach(function(m,x){!(S.isUndefined(m)||m===null)&&t.append(a===!0?Sf([v],x,o):a===null?v:v+"[]",u(m))}),!1}return tu(g)?!0:(t.append(Sf(P,v,o),u(g)),!1)}const c=[],p=Object.assign(hS,{defaultVisitor:d,convertValue:u,isVisitable:tu});function w(g,v){if(!S.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));c.push(g),S.forEach(g,function(h,f){(!(S.isUndefined(h)||h===null)&&i.call(t,h,S.isString(f)?f.trim():f,v,p))===!0&&w(h,v?v.concat(f):[f])}),c.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return w(e),t}function kf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Cc(e,t){this._pairs=[],e&&Ja(e,this,t)}const i0=Cc.prototype;i0.append=function(t,n){this._pairs.push([t,n])};i0.toString=function(t){const n=t?function(r){return t.call(this,r,kf)}:kf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function mS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function o0(e,t,n){if(!t)return e;const r=n&&n.encode||mS,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Cc(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class gS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ef=gS,a0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yS=typeof URLSearchParams<"u"?URLSearchParams:Cc,vS=typeof FormData<"u"?FormData:null,wS=typeof Blob<"u"?Blob:null,xS={isBrowser:!0,classes:{URLSearchParams:yS,FormData:vS,Blob:wS},protocols:["http","https","file","blob","url","data"]},l0=typeof window<"u"&&typeof document<"u",SS=(e=>l0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),kS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ES=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:l0,hasStandardBrowserEnv:SS,hasStandardBrowserWebWorkerEnv:kS},Symbol.toStringTag,{value:"Module"})),pt={...ES,...xS};function CS(e,t){return Ja(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return pt.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function PS(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jS(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function s0(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,s?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=jS(i[a])),!l)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(PS(r),i,n,0)}),n}return null}function bS(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Pc={transitional:a0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(s0(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return CS(t,this.formSerializer).toString();if((l=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ja(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),bS(t)):t}],transformResponse:[function(t){const n=this.transitional||Pc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?z.from(l,z.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{Pc.headers[e]={}});const jc=Pc,OS=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_S=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&OS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Cf=Symbol("internals");function $r(e){return e&&String(e).trim().toLowerCase()}function Eo(e){return e===!1||e==null?e:S.isArray(e)?e.map(Eo):String(e)}function RS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const LS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Vl(e,t,n,r,i){if(S.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function TS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function AS(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Za{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,s,u){const d=$r(s);if(!d)throw new Error("header name must be a non-empty string");const c=S.findKey(i,d);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||s]=Eo(l))}const a=(l,s)=>S.forEach(l,(u,d)=>o(u,d,s));return S.isPlainObject(t)||t instanceof this.constructor?a(t,n):S.isString(t)&&(t=t.trim())&&!LS(t)?a(_S(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=$r(t),t){const r=S.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return RS(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$r(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Vl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=$r(a),a){const l=S.findKey(r,a);l&&(!n||Vl(r,r[l],l,n))&&(delete r[l],i=!0)}}return S.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Vl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return S.forEach(this,(i,o)=>{const a=S.findKey(r,o);if(a){n[a]=Eo(i),delete n[o];return}const l=t?TS(o):String(o).trim();l!==o&&delete n[o],n[l]=Eo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Cf]=this[Cf]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=$r(a);r[l]||(AS(i,a),r[l]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}}Za.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Za.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(Za);const Pt=Za;function Gl(e,t){const n=this||jc,r=t||n,i=Pt.from(r.headers);let o=r.data;return S.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function u0(e){return!!(e&&e.__CANCEL__)}function Ri(e,t,n){z.call(this,e??"canceled",z.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Ri,z,{__CANCEL__:!0});function FS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const IS=pt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),S.isString(r)&&a.push("path="+r),S.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function NS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $S(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function c0(e,t){return e&&!NS(t)?$S(e,t):t}const zS=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=S.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function MS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function DS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),d=r[o];a||(a=u),n[i]=s,r[i]=u;let c=o,p=0;for(;c!==i;)p+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const w=d&&u-d;return w?Math.round(p*1e3/w):void 0}}function Pf(e,t){let n=0;const r=DS(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const BS=typeof XMLHttpRequest<"u",US=BS&&function(e){return new Promise(function(n,r){let i=e.data;const o=Pt.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let d;if(S.isFormData(i)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[v,...P]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...P].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",P=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+P))}const p=c0(e.baseURL,e.url);c.open(e.method.toUpperCase(),o0(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const v=Pt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};FS(function(m){n(m),u()},function(m){r(m),u()},h),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new z("Request aborted",z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let P=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||a0;e.timeoutErrorMessage&&(P=e.timeoutErrorMessage),r(new z(P,h.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,c)),c=null},pt.hasStandardBrowserEnv&&(l&&S.isFunction(l)&&(l=l(e)),l||l!==!1&&zS(p))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&IS.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&S.forEach(o.toJSON(),function(P,h){c.setRequestHeader(h,P)}),S.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Pf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Pf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{c&&(r(!v||v.type?new Ri(null,e,c):v),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=MS(p);if(g&&pt.protocols.indexOf(g)===-1){r(new z("Unsupported protocol "+g+":",z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},nu={http:fS,xhr:US};S.forEach(nu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const jf=e=>`- ${e}`,HS=e=>S.isFunction(e)||e===null||e===!1,d0={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!HS(n)&&(r=nu[(a=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(jf).join(`
`):" "+jf(o[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:nu};function Ql(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ri(null,e)}function bf(e){return Ql(e),e.headers=Pt.from(e.headers),e.data=Gl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),d0.getAdapter(e.adapter||jc.adapter)(e).then(function(r){return Ql(e),r.data=Gl.call(e,e.transformResponse,r),r.headers=Pt.from(r.headers),r},function(r){return u0(r)||(Ql(e),r&&r.response&&(r.response.data=Gl.call(e,e.transformResponse,r.response),r.response.headers=Pt.from(r.response.headers))),Promise.reject(r)})}const Of=e=>e instanceof Pt?e.toJSON():e;function xr(e,t){t=t||{};const n={};function r(u,d,c){return S.isPlainObject(u)&&S.isPlainObject(d)?S.merge.call({caseless:c},u,d):S.isPlainObject(d)?S.merge({},d):S.isArray(d)?d.slice():d}function i(u,d,c){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function o(u,d){if(!S.isUndefined(d))return r(void 0,d)}function a(u,d){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>i(Of(u),Of(d),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=s[d]||i,p=c(e[d],t[d],d);S.isUndefined(p)&&c!==l||(n[d]=p)}),n}const f0="1.6.2",bc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{bc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _f={};bc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+f0+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new z(i(a," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!_f[a]&&(_f[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function WS(e,t,n){if(typeof e!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new z("option "+o+" must be "+s,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+o,z.ERR_BAD_OPTION)}}const ru={assertOptions:WS,validators:bc},$t=ru.validators;class ia{constructor(t){this.defaults=t,this.interceptors={request:new Ef,response:new Ef}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ru.assertOptions(r,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:ru.assertOptions(i,{encode:$t.function,serialize:$t.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&S.merge(o.common,o[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Pt.concat(a,o);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,c=0,p;if(!s){const g=[bf.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),p=g.length,d=Promise.resolve(n);c<p;)d=d.then(g[c++],g[c++]);return d}p=l.length;let w=n;for(c=0;c<p;){const g=l[c++],v=l[c++];try{w=g(w)}catch(P){v.call(this,P);break}}try{d=bf.call(this,w)}catch(g){return Promise.reject(g)}for(c=0,p=u.length;c<p;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=xr(this.defaults,t);const n=c0(t.baseURL,t.url);return o0(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){ia.prototype[t]=function(n,r){return this.request(xr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(xr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}ia.prototype[t]=n(),ia.prototype[t+"Form"]=n(!0)});const Co=ia;class Oc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Ri(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Oc(function(i){t=i}),cancel:t}}}const VS=Oc;function GS(e){return function(n){return e.apply(null,n)}}function QS(e){return S.isObject(e)&&e.isAxiosError===!0}const iu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(iu).forEach(([e,t])=>{iu[t]=e});const KS=iu;function p0(e){const t=new Co(e),n=Qm(Co.prototype.request,t);return S.extend(n,Co.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return p0(xr(e,i))},n}const ae=p0(jc);ae.Axios=Co;ae.CanceledError=Ri;ae.CancelToken=VS;ae.isCancel=u0;ae.VERSION=f0;ae.toFormData=Ja;ae.AxiosError=z;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=GS;ae.isAxiosError=QS;ae.mergeConfig=xr;ae.AxiosHeaders=Pt;ae.formToJSON=e=>s0(S.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=d0.getAdapter;ae.HttpStatusCode=KS;ae.default=ae;const At=ae;async function YS(e){const t={method:"get",maxBodyLength:1/0,url:`https://pokeapi.co/api/v2/pokemon-species/${e}/`,headers:{}};try{return(await At.request(t)).data}catch(n){console.error(n)}}const Li="https://pokeapi.co/api/v2",Ti={berries:{berry:"/berry",firmness:"berry-firmness",flavour:"/berry-flavor"},contests:{type:"/contest-type",effect:"/contest-effect",superEffect:"/super-contest-effect/"},encounters:{method:"/encounter-method",conditions:"/encounter-condition",conditionValue:"/encounter-condition-value"},evolutions:{chain:"/evolution-chain",triggers:"/evolution-trigger"},games:{generation:"/generation",pokedexes:"/pokedex",version:"/version",versionGroups:"/version-group",flingEffect:"/item-fling-effect",itemPockets:"/item-pocket"},items:{item:"/item",atribute:"/item-attribute",categories:"/item-category"},locations:{location:"/location",area:"/location-area",palParkArea:"/pal-park-area",region:"/region"},machines:{machine:"/machine"},moves:{move:"/move",ailment:"/move-ailment",battleStyle:"/move-battle-style",category:"/move-category",damageClasses:"/move-damage-class",learnMethods:"/move-learn-method",moveTargets:"/move-target"},pokemon:{ability:"/ability",characteristic:"/characteristic",eggGroup:"/egg-group",gender:"/gender",growthRates:"/growth-rate",nature:"/nature",pokeathlonStats:"/pokeathlon-stat",pokemon:"/pokemon",locationArea:e=>`/pokemon/${e}/encounters`,color:"/pokemon-color/",form:"/pokemon-form",habitat:"/pokemon-habitat",shape:"/pokemon-shape",species:"/pokemon-species",stats:"/stat",types:"/type"}},XS=async()=>{const e={method:"get",maxBodyLength:1/0,url:Li+Ti.pokemon.types,headers:{}};try{return(await At.request(e)).data.results}catch(t){console.error(t)}},h0=async e=>{const t={method:"get",maxBodyLength:1/0,url:Li+Ti.pokemon.types+"/"+e,headers:{}};try{return(await At.request(t)).data}catch(n){console.error(n)}};function Rf(e){return"types/"+e.toLowerCase()+".svg"}function qS(e){return De.colors.buttonColor[e]}function JS(e){return e.toLowerCase()+".svg"}function ZS(){const e=cn();function t(){e(vf("photo"))}function n(){e(vf("info"))}return y.jsxs(pw,{children:[y.jsx(hw,{onClick:t,"data-cy":"ButtonPhoto","aria-label":"Switch to Photo",children:"PHOTO"}),y.jsx(mw,{onClick:n,"data-cy":"ButtonInfo","aria-label":"Switch to Info",children:"INFO"})]})}function ek(){const e=I(r=>r.pokemon.selectedPokemon),[t,n]=L.useState();return L.useEffect(()=>{(async()=>{try{if(e.name!==void 0){const i=await YS(e.name),o=i.flavor_text_entries.find(l=>l.language.name==="en"),a=o?o.flavor_text:i.flavor_text_entries[0].flavor_text;n(a.replace(/\n/g," "))}}catch(i){console.error("Error fetching specie data:",i)}})()},[e.name]),e.name&&y.jsxs(Oi,{children:[y.jsxs(dn,{children:["#",e.id," ",e.name.toUpperCase()]}),y.jsx(Lx,{pokemon:e}),t&&y.jsx(ww,{children:t})]})}function tk(){var r,i,o,a,l,s,u,d;const e=I(c=>c.type.selectedType),[t,n]=L.useState(null);return L.useEffect(()=>{(async()=>{try{const p=await h0(e);n(p)}catch(p){console.error("Error loading Pokemon type:",p)}})()},[e]),y.jsxs(Oi,{children:[y.jsx(dn,{children:t==null?void 0:t.name.toUpperCase()}),y.jsxs(gw,{children:["DOUBLE DAMAGE",((r=t==null?void 0:t.damage_relations)==null?void 0:r.double_damage_from.length)!==0&&y.jsxs(yw,{children:["FROM:",(o=(i=t==null?void 0:t.damage_relations)==null?void 0:i.double_damage_from)==null?void 0:o.map(c=>y.jsx(tf,{children:y.jsx(ra,{src:Rf(c.name),alt:`${c.name} icon`})},c.name))]}),((a=t==null?void 0:t.damage_relations)==null?void 0:a.double_damage_to.length)!==0&&y.jsxs(vw,{children:["TO:",(s=(l=t==null?void 0:t.damage_relations)==null?void 0:l.double_damage_to)==null?void 0:s.map(c=>y.jsx(tf,{children:y.jsx(ra,{src:Rf(c.name),alt:`${c.name} icon`})},c.name))]})]}),((u=t==null?void 0:t.damage_relations)==null?void 0:u.no_damage_from.length)!==0&&y.jsxs(xw,{children:["IMUNITIES",y.jsx(Sw,{children:(d=t==null?void 0:t.damage_relations)==null?void 0:d.no_damage_from.map((c,p)=>y.jsx(Wm,{color:qS(c.name),"aria-label":`Immune to ${c.name}`,children:y.jsxs(Vm,{children:[y.jsx(Gm,{src:JS(c.name),alt:`${c.name} icon`}),c.name.toUpperCase()]})},p))})]})]})}function m0(){var t,n,r;const e=I(i=>i.item.selectedItem);return y.jsxs(kw,{children:[y.jsxs(Ew,{children:["#",e.id," - ",e.name.toUpperCase()]}),y.jsx(Cw,{children:((n=(t=e==null?void 0:e.effect_entries)==null?void 0:t[0])==null?void 0:n.short_effect)||"No short effect available"}),y.jsx(Pw,{children:(r=e.attributes)==null?void 0:r.map(i=>y.jsx(jw,{children:i.name.toUpperCase()},i.name))})]})}function nk(){var t,n;const e=I(r=>r.regions.lists.selected);return y.jsxs(bw,{children:[y.jsxs(Ow,{children:["#",e.id," - ",e.name.toUpperCase()]}),y.jsx(Lw,{children:(t=e.main_generation)==null?void 0:t.name.toUpperCase()}),y.jsxs(_w,{children:["VERSIONS:",(n=e.version_groups)==null?void 0:n.map((r,i)=>y.jsx(Rw,{children:r.name.toUpperCase()},i))]})]})}function rk(){return y.jsxs(Tw,{children:[y.jsx(Aw,{children:"A wild Pantufa appears!!"}),y.jsx(fw,{src:"pantufa.png"})]})}function g0(){const e=I(a=>a.mainMenu.selectedMainMenu),t=I(a=>a.pokemon.selectedPokemon.name),n=I(a=>a.type.selectedType),r=I(a=>a.item.selectedItem.name),i=I(a=>a.regions.lists.selected.name);let o=e!==""?e:"POKÉDEX";switch(e){case"POKÉMON":o=t?t.toUpperCase():"POKÉMON";break;case"TYPES":o=n?n.toUpperCase():"TYPES";break;case"ITEMS":o=r?r.toUpperCase():"ITEMS";break;case"FOSSILS":o=r?r.toUpperCase():"FOSSILS";break;case"REGIONS":o=i?i.toUpperCase():"REGIONS";break}return y.jsx(o1,{id:"blackScreen","aria-label":"Black Screen",children:y.jsx(l1,{id:"animatedText","aria-label":"Animated Text",children:y.jsx(s1,{id:"textDisplay","aria-label":"Text Display",children:o})})})}function el(){const e=I(n=>n.mainMenu.selectedMainMenu);let t;switch(e){case"POKÉMON":t=y.jsx(ik,{"aria-label":"Pokemon display"});break;case"TYPES":t=y.jsx(ok,{"aria-label":"Types display"});break;case"ITEMS":t=y.jsx(ak,{"aria-label":"Items display"});break;case"FOSSILS":t=y.jsx(lk,{"aria-label":"Fossils display"});break;case"REGIONS":t=y.jsx(sk,{"aria-label":"Regions display"});break;default:t=y.jsx(uk,{"aria-label":"No Selection display"})}return y.jsxs(u1,{id:"whiteScreen","aria-label":"White Screen",children:[t,y.jsx(ZS,{"aria-label":"Info Panel"})]})}function ik(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>{const i=r.pokemon.selectedPokemon.types;return i&&i.length>0?i[0]:null}),n=t&&De.colors.background[t];return y.jsxs(Pr,{color:n,id:"screen","aria-label":"Pokemon Display Screen",children:[!t&&y.jsx(dn,{id:"selectPokemon","aria-label":"Select Pokemon",children:"SELECT POKÉMON"}),t&&e==="photo"&&y.jsx(Iw,{"aria-label":"Pokemon Photo"}),t&&e==="info"&&y.jsx(ek,{"aria-label":"Pokemon Info"})]})}function ok(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>r.type.selectedType),n=t&&De.colors.background[t];return y.jsxs(Pr,{color:n,id:"screen","aria-label":"Types Display Screen",children:[!t&&y.jsx(dn,{id:"selectType","aria-label":"Select Type",children:"SELECT TYPE"}),t&&e==="photo"&&y.jsx(Nw,{"aria-label":"Type Photo"}),t&&e==="info"&&y.jsx(tk,{"aria-label":"Pokemon Type Info"})]})}function ak(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>{var i;return(i=r.item.selectedItem.category)==null?void 0:i.name}),n=De.colors.itemGradientMap[t];return y.jsxs(Pr,{color:n,id:"screen","aria-label":"Items Display Screen",children:[!t&&y.jsx(dn,{id:"selectItem","aria-label":"Select Item",children:"SELECT ITEM"}),t&&e==="photo"&&y.jsx(Tm,{"aria-label":"Item Photo"}),t&&e==="info"&&y.jsx(m0,{"aria-label":"Item Info"})]})}function lk(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>{var i;return(i=r.item.selectedItem.category)==null?void 0:i.name}),n=De.colors.itemGradientMap[t];return y.jsxs(Pr,{color:n,id:"screen","aria-label":"Fossils Display Screen",children:[!t&&y.jsx(dn,{id:"selectItem","aria-label":"Select Fossil",children:"SELECT FOSSIL"}),t&&e==="photo"&&y.jsx(Tm,{"aria-label":"Fossil Photo"}),t&&e==="info"&&y.jsx(m0,{"aria-label":"Fossil Info"})]})}function sk(){const e=I(r=>r.infoMenu.selectedMenu),t=I(r=>r.regions.lists.selected.name),n=De.colors.regionColorMapBackground[t];return y.jsxs(Pr,{color:n,id:"screen","aria-label":"Regions Display Screen",children:[!t&&y.jsx(dn,{id:"selectRegions","aria-label":"Select Region",children:"SELECT REGION"}),t&&e==="photo"&&y.jsx($w,{"aria-label":"Region Photo"}),t&&e==="info"&&y.jsx(nk,{"aria-label":"Region Info"})]})}function uk(){const e=I(t=>t.infoMenu.selectedMenu);return y.jsxs(Pr,{id:"screen","aria-label":"No Selection Screen",children:[e==="photo"&&y.jsx(zw,{"aria-label":"Landing Photo"}),e==="info"&&y.jsx(rk,{"aria-label":"Landing Info"})]})}const ck=j.input`
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
`,dk=j.div`
  height: 8%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 74%;
    height: 6%;
  }
`,fk=j.img`
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
`;const pk={lists:{originalList:[],filteredList:[]}},y0=Tt({name:"list",initialState:pk,reducers:{updateOriginalList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalList:hk,updateFilteredList:ou}=y0.actions,mk=y0.reducer,gk={lists:{originalList:[],filteredList:[]}},v0=Tt({name:"list",initialState:gk,reducers:{updateOriginalTypeList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredTypeList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalTypeList:yk,updateFilteredTypeList:au}=v0.actions,vk=v0.reducer,wk={lists:{originalList:[],filteredList:[]}},w0=Tt({name:"list",initialState:wk,reducers:{updateOriginalItemList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredItemList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalItemList:x0,updateFilteredItemList:oa}=w0.actions,Lf=w0.reducer,xk={lists:{originalList:[],filteredList:[],selected:{url:"",id:0,locations:[{name:"",url:""}],main_generation:{name:"",url:""},name:"",names:[{language:{name:"",url:""},name:""}],pokedexes:[{name:"",url:""}],version_groups:[{name:"",url:""}]}}},S0=Tt({name:"list",initialState:xk,reducers:{originalRegionList:(e,t)=>{e.lists.originalList=t.payload},filteredRegionList:(e,t)=>{e.lists.filteredList=t.payload},selectRegion:(e,t)=>{e.lists.selected=t.payload}}}),{originalRegionList:Sk,filteredRegionList:lu,selectRegion:kk}=S0.actions,Ek=S0.reducer;function tl(){const e=I(s=>s.pokemonList.lists),t=I(s=>s.typeList.lists),n=I(s=>s.itemList.lists),r=I(s=>s.regions.lists),i=cn(),o=I(s=>s.mainMenu.selectedMainMenu);function a(s){switch(o){case"POKÉMON":if(s==="")i(ou(e.originalList));else{const u=e.originalList.filter(d=>d.name.toLowerCase().includes(s.toLowerCase()));i(ou(u))}break;case"TYPES":if(s==="")i(au(t.originalList));else{const u=t.originalList.filter(d=>d.typeInfo.name.toLowerCase().includes(s.toLowerCase()));i(au(u))}break;case"ITEMS":case"FOSSILS":if(s==="")i(oa(n.originalList));else{const u=n.originalList.filter(d=>d.name.toLowerCase().includes(s.toLowerCase()));i(oa(u))}break;case"REGIONS":if(s==="")i(lu(r.originalList));else{const u=r.originalList.filter(d=>d.name.toLowerCase().includes(s.toLowerCase()));i(lu(u))}break}}const l=`Search ${o.toLocaleLowerCase()}...`;return y.jsxs(dk,{id:"searchContainer",children:[y.jsx(fk,{src:"icons/detetive.png",id:"detective",alt:"Detective Pikachu","aria-label":"Detective Pikachu"}),y.jsx(ck,{placeholder:l,id:"searchBox",onChange:s=>a(s.target.value),"aria-labelledby":"searchContainer"})]})}const Ck=j.div`
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
`,Pk=j.button`
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
`,Ai=j.button`
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
`,jk=j.p`
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
`,bk=j.img`
  display: flex;
  height: 40%;
  max-width: 50%;
  box-sizing: border-box;
`,Ok={selectedMainMenu:""},k0=Tt({name:"mainMenu",initialState:Ok,reducers:{selectMainMenu:(e,t)=>{e.selectedMainMenu=t.payload}}}),{selectMainMenu:_k}=k0.actions,Rk=k0.reducer;function nl({onButtonClick:e}){const[t,n]=L.useState(5),r=["POKÉMON","TYPES","ITEMS","REGIONS","FOSSILS"],i=cn(),o=I(s=>s.mainMenu.selectedMainMenu);L.useEffect(()=>{a(t,o)});const a=(s,u)=>{i(_k(u)),n(s),e&&e(s)},l=s=>`icons/${s.toLowerCase()}.png`;return y.jsx(Ck,{id:"buttonContainer","aria-label":"Button Container",children:r.map((s,u)=>y.jsxs(Pk,{id:s,selected:t===u,onClick:()=>a(u,s),"aria-label":`${s} Button`,children:[y.jsx(bk,{src:l(s),"aria-label":`${s} Icon`}),y.jsx(jk,{"aria-label":`${s} Text`,children:s})]},u))})}const Lk=j.div`
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
`,Ak=sc`
  0% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
`,Fk=j.div`
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
`,Ik=j.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`,Nk=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  gap: 20px;
  margin-left: 10px;
  position: relative;
  box-sizing: border-box;
`,$k=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f53d3d, #aa2727, #6b1818);
  border-radius: 50%;
  border: solid black 1px;
`,zk=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f5d03d, #aa9927, #6b5518);
  border-radius: 50%;

  border: solid black 1px;
`,Mk=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#3df543, #27aa38, #186b23);
  border-radius: 50%;
  border: solid black 1px;
`;function Dk(){return y.jsxs(Lk,{"aria-label":"Pokedex Header Container",children:[y.jsxs(Ik,{"aria-label":"Balls Container",children:[y.jsx(Fk,{"aria-label":"Pokedex Header Ball"}),y.jsxs(Nk,{"aria-label":"Lights Container",children:[y.jsx($k,{"aria-label":"Red Light"}),y.jsx(zk,{"aria-label":"Yellow Light"}),y.jsx(Mk,{"aria-label":"Green Light"})]})]}),y.jsx(Tk,{"aria-label":"Pokedex Header Lines"})]})}const Bk=j.div`
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
`,Fi=j.ul`
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
`,Ii=j.li`
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
`;const Ni=j.div`
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
`,Ke=j.div`
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
`,Uk=j.img`
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
`;var su=(e=>(e[e.First=1]="First",e[e.Second=152]="Second",e[e.Third=252]="Third",e[e.Fourth=387]="Fourth",e[e.Fifth=494]="Fifth",e[e.Sixth=650]="Sixth",e[e.Seventh=722]="Seventh",e[e.Eighth=810]="Eighth",e))(su||{});function Tf(e){let t,n;switch(e){case 1:t=1,n=151;break;case 152:t=152,n=251;break;case 252:t=252,n=386;break;case 387:t=387,n=493;break;case 494:t=494,n=649;break;case 650:t=650,n=721;break;case 722:t=722,n=809;break;case 810:t=810,n=1010;break;default:throw new Error("Invalid Pokémon Generation")}return{start:t,end:n}}const Hk=async(e=1,t=151)=>{const n={method:"get",maxBodyLength:1/0,url:`${Li}${Ti.pokemon.pokemon}?offset=${e-1}&limit=${t}`,headers:{}};try{return(await At.request(n)).data}catch(r){console.error(r)}},Wk=async e=>{const t={method:"get",maxBodyLength:1/0,url:`${Li}${Ti.pokemon.pokemon}/${e}`,headers:{}};try{return(await At.request(t)).data}catch(n){console.error(n)}},Vk={selectedPokemon:{name:"",url:"",id:0,image:"",types:[]}},E0=Tt({name:"pokemon",initialState:Vk,reducers:{selectPokemon:(e,t)=>{e.selectedPokemon=t.payload}}}),{selectPokemon:Gk}=E0.actions,Qk=E0.reducer,Kk={selectedType:""},C0=Tt({name:"type",initialState:Kk,reducers:{selectType:(e,t)=>{e.selectedType=t.payload}}}),{selectType:Yk}=C0.actions,Xk=C0.reducer;function $i(){return y.jsx(qk,{})}const qk=j.img.attrs({src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs",alt:"Pikachu Loading"})`
  width: 20vw;
`;async function Jk(){const e={method:"get",maxBodyLength:1/0,url:"https://pokeapi.co/api/v2/item/?offset=0&limit=1300",headers:{}};try{return(await At.request(e)).data.results}catch(t){console.error(t)}}async function _c(e){const t={method:"get",maxBodyLength:1/0,url:e,headers:{}};try{return(await At.request(t)).data}catch(n){console.error(n)}}const Zk={selectedItem:{attributes:[{name:"",url:""}],baby_trigger_for:null,category:{name:"",url:""},cost:0,effect_entries:[{effect:"",language:{name:"",url:""},short_effect:""}],flavor_text_entries:[{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},text:`The best BALL that
catches a POKéMON
without fail.`,version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}}],fling_effect:null,fling_power:null,game_indices:[{game_index:0,generation:{name:"",url:""}}],held_by_pokemon:[],id:0,machines:[],name:"",names:[{language:{name:"",url:""},name:""}],sprites:{default:""}}},P0=Tt({name:"item",initialState:Zk,reducers:{selectItem:(e,t)=>{e.selectedItem=t.payload}}}),{selectItem:j0}=P0.actions,eE=P0.reducer,tE=async()=>{const e={method:"get",maxBodyLength:1/0,url:`${Li}${Ti.locations.region}`,headers:{}};try{return(await At.request(e)).data.results}catch(t){console.error(t)}};async function nE(){const e={method:"get",maxBodyLength:1/0,url:"https://pokeapi.co/api/v2/item-category/35/",headers:{}};try{return(await At.request(e)).data.items}catch(t){console.error(t)}}function rl(){const e=I(t=>t.mainMenu.selectedMainMenu);return y.jsxs(Bk,{children:[e==="POKÉMON"&&y.jsx(rE,{}),e==="TYPES"&&y.jsx(iE,{}),e==="ITEMS"&&y.jsx(oE,{}),e==="REGIONS"&&y.jsx(aE,{}),e==="FOSSILS"&&y.jsx(lE,{})]})}function rE(){const[e,t]=L.useState(!0),n=I(s=>s.pokemonList.lists),r=cn(),i=Tf(su.First),o=Tf(su.Eighth);L.useEffect(()=>{async function s(){try{t(!0);const u=await Hk(i.start,o.end),d=await Promise.all(u.results.map(async c=>{const p=await Wk(c.name);return{...c,id:p.id,image:p.sprites.other["official-artwork"].front_default,types:p.types.map(g=>g.type.name)}}));r(hk(d)),r(ou(d))}catch(u){console.error("Error fetching Pokemon data:",u)}finally{t(!1)}}s()},[r,i.start,i.end]);const a=s=>{r(Gk(s))};function l(s){return"types/"+s.toLowerCase()+".svg"}return y.jsx(Ni,{children:e?y.jsx($i,{}):y.jsx(Fi,{"aria-label":"pokemon list",children:n.filteredList.map(s=>{var u,d;return y.jsx(Ai,{color:De.colors.type[(u=s.types)==null?void 0:u[0]],"aria-label":"Select the pokemon "+s.name,onClick:()=>a(s),children:y.jsxs(Ii,{"data-cy":s.name,children:[y.jsxs(Ke,{children:["#",s.id]}),y.jsx(Ke,{children:s.name.toUpperCase()}),y.jsx(Ke,{children:(d=s.types)==null?void 0:d.map(c=>y.jsx(ra,{src:l(c),alt:c},c))})]})},s.name)})})})}function iE(){const[e,t]=L.useState(!0),n=cn(),r=I(a=>a.typeList.lists.filteredList);L.useEffect(()=>{async function a(){t(!0);const l=await XS(),s=await Promise.all(l.map(async u=>({typeInfo:await h0(u.name)})));n(yk(s)),n(au(s)),t(!1)}a()},[n]);function i(a){return"types/"+a.toLowerCase()+".svg"}const o=a=>{n(Yk(a))};return y.jsx(Ni,{children:e?y.jsx($i,{}):y.jsx(Fi,{"aria-label":"Type list",children:r.map(a=>y.jsx(Ai,{color:De.colors.type[a.typeInfo.name],"aria-label":"Select the type "+a.typeInfo.name,onClick:()=>o(a.typeInfo.name),children:y.jsxs(Ii,{children:[y.jsxs(Ke,{children:["#",a.typeInfo.id]}),y.jsx(Ke,{children:a.typeInfo.name.toUpperCase()}),y.jsx(Ke,{children:y.jsx(ra,{src:i(a.typeInfo.name),alt:a.typeInfo.name})})]})},a.typeInfo.name))})})}function oE(){const[e,t]=L.useState(!0),n=cn(),r=I(o=>o.itemList.lists.filteredList);L.useEffect(()=>{async function o(){try{const a=await Jk(),l=await Promise.all(a.map(async s=>await _c(s.url)));n(x0(l)),n(oa(l)),t(!1)}catch(a){console.error("Error fetching items:",a),t(!1)}}o()},[n]);const i=o=>{n(j0(o))};return y.jsx(Ni,{children:e?y.jsx($i,{}):y.jsx(Fi,{"aria-label":"Item list",children:r.map(o=>{var a,l;return y.jsx(Ai,{color:De.colors.itemTypeColorMap[(a=o.category)==null?void 0:a.name],"aria-label":"Select the item "+o.name,onClick:()=>i(o),children:y.jsxs(Ii,{children:[y.jsxs(Ke,{children:["#",o.id]}),y.jsx(Ke,{children:o.name.toUpperCase()}),y.jsx(_m,{src:(l=o.sprites)==null?void 0:l.default})]})},o.id)})})})}function aE(){const[e,t]=L.useState(!0),n=I(o=>o.regions.lists.filteredList),r=cn();L.useEffect(()=>{async function o(){const a=await tE(),l=await Promise.all(a.map(async s=>await _c(s.url)));r(Sk(l)),r(lu(l)),t(!1)}o()},[r]);const i=o=>{r(kk(o))};return y.jsx(Ni,{children:e?y.jsx($i,{}):y.jsx(Fi,{"aria-label":"Region list",children:n.map(o=>y.jsx(Ai,{color:De.colors.regionColorMap[o.name],"aria-label":"Select the region "+o.name,onClick:()=>i(o),children:y.jsxs(Ii,{children:[y.jsxs(Ke,{children:["#",o.id]}),y.jsx(Ke,{children:o.name.toUpperCase()}),y.jsx(Uk,{src:"icons/map.png"})]})},o.name))})})}function lE(){const[e,t]=L.useState(!0),n=cn(),r=I(o=>o.itemList.lists.filteredList);L.useEffect(()=>{async function o(){try{const a=await nE(),l=await Promise.all(a.map(async s=>await _c(s.url)));n(x0(l)),n(oa(l)),t(!1)}catch(a){console.error("Error fetching items:",a),t(!1)}}o()},[n]);const i=o=>{n(j0(o))};return y.jsx(Ni,{children:e?y.jsx($i,{}):y.jsx(Fi,{"aria-label":"Fossil list",children:r.map(o=>{var a,l;return y.jsx(Ai,{color:De.colors.itemTypeColorMap[(a=o.category)==null?void 0:a.name],"aria-label":"Select the fossil"+o.name,onClick:()=>i(o),children:y.jsxs(Ii,{children:[y.jsxs(Ke,{children:["#",o.id]}),y.jsx(Ke,{children:o.name.toUpperCase()}),y.jsx(_m,{src:(l=o.sprites)==null?void 0:l.default})]})},o.id)})})})}const sE=j.audio`
  width: 250px;
  background-color: transparent;
  position: relative;
  bottom: 0;
  left: 0;

  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.55);
`,uE=()=>{const e=L.useRef(null);return L.useEffect(()=>{e.current&&(e.current.volume=.5)},[]),y.jsx(sE,{controls:!0,ref:e,id:"music",children:y.jsx("source",{src:"opening.mp3",type:"audio/mp3"})})};function cE(){const e=I(t=>t.mainMenu.selectedMainMenu);return y.jsxs(e1,{"aria-label":"Pokedex Web Container",children:[y.jsxs(t1,{"aria-label":"Pokedex Left Side",children:[y.jsx(Dk,{"aria-label":"Header"}),y.jsxs(ba,{"aria-label":"Pokedex Left Content",children:[y.jsx(g0,{"aria-label":"Display"}),y.jsx(nl,{"aria-label":"Buttons Menu"}),e!==""&&y.jsx(tl,{"aria-label":"Search"}),y.jsx(uE,{"aria-label":"Music Player"})]})]}),y.jsx(n1,{"aria-label":"Pokedex Right Side",children:y.jsxs(r1,{"aria-label":"Pokedex Right Content",children:[y.jsx(el,{"aria-label":"Display Monitor"}),y.jsx(rl,{"aria-label":"Lists"})]})})]})}function dE(){const e=I(t=>t.mainMenu.selectedMainMenu);return y.jsxs(ba,{"aria-label":"Pokedex Mobile Content",children:[y.jsx(el,{"aria-label":"Display Monitor"}),y.jsx(nl,{"aria-label":"Buttons Menu"}),e!==""&&y.jsx(tl,{"aria-label":"Search"}),y.jsx(rl,{"aria-label":"Lists"})]})}const fE=({size:e})=>{const t=I(n=>n.mainMenu.selectedMainMenu);return y.jsxs(ba,{"aria-label":"Pokedex Landscape Content",children:[y.jsx(el,{"aria-label":"Display Monitor"}),y.jsxs(i1,{"aria-label":"Pokedex Landscape Container",children:[y.jsx(nl,{"aria-label":"Buttons Menu"}),e>=800&&t!==""&&y.jsx(tl,{"aria-label":"Search"}),y.jsx(rl,{"aria-label":"Lists"})]})]})};function pE(){const e=I(t=>t.mainMenu.selectedMainMenu);return y.jsxs(ba,{"aria-label":"Pokedex Tablet Content",children:[y.jsx(g0,{"aria-label":"Display"}),y.jsx(nl,{"aria-label":"Buttons Menu"}),y.jsx(el,{"aria-label":"Display Monitor"}),e!==""&&y.jsx(tl,{"aria-label":"Search"}),y.jsx(rl,{"aria-label":"Lists"})]})}globalThis&&globalThis.__awaiter;function hE(e,t,n,r){const i=L.useRef(t);b0(()=>{i.current=t},[t]),L.useEffect(()=>{var o;const a=(o=n==null?void 0:n.current)!==null&&o!==void 0?o:window;if(!(a&&a.addEventListener))return;const l=s=>i.current(s);return a.addEventListener(e,l,r),()=>{a.removeEventListener(e,l,r)}},[e,n,r])}globalThis&&globalThis.__awaiter;const b0=typeof window<"u"?L.useLayoutEffect:L.useEffect;function mE(){const[e,t]=L.useState({width:0,height:0}),n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return hE("resize",n),b0(()=>{n()},[]),e}function gE(){const{width:e,height:t}=mE(),[n,r]=L.useState(null);return L.useEffect(()=>{t<e&&e<1367?r(y.jsx(fE,{size:t,"aria-label":"Pokedex in landscape mode"})):e<600?r(y.jsx(dE,{"aria-label":"Pokedex in mobile mode"})):e<1280?r(y.jsx(pE,{"aria-label":"Pokedex in tablet mode"})):r(y.jsx(cE,{"aria-label":"Pokedex in web mode"}))},[e,t]),y.jsx(y.Fragment,{children:n})}function yE(){return y.jsx(Jv,{theme:De,children:y.jsx(gE,{})})}const vE=yx({reducer:{pokemon:Qk,infoMenu:Ox,mainMenu:Rk,pokemonList:mk,typeList:vk,itemList:Lf,fossilList:Lf,type:Xk,item:eE,regions:Ek}});Kl.createRoot(document.getElementById("root")).render(y.jsx(Z1,{store:vE,children:y.jsx(yE,{})}));