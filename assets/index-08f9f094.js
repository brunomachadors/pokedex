(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nf={exports:{}},ll={},If={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),_0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),b0=Symbol.for("react.memo"),$0=Symbol.for("react.lazy"),Lc=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$f=Object.assign,zf={};function kr(e,t,n){this.props=e,this.context=t,this.refs=zf,this.updater=n||bf}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=kr.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=zf,this.updater=n||bf}var cu=uu.prototype=new Mf;cu.constructor=uu;$f(cu,kr.prototype);cu.isPureReactComponent=!0;var Ac=Array.isArray,Df=Object.prototype.hasOwnProperty,du={current:null},Bf={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Df.call(t,r)&&!Bf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ei,type:e,key:o,ref:l,props:i,_owner:du.current}}function M0(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function D0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?D0(""+e.key):t.toString(36)}function oo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ei:case _0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ls(l,0):r,Ac(i)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),oo(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=M0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Tc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ac(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+ls(o,s);l+=oo(o,t,n,a,i)}else if(a=z0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+ls(o,s++),l+=oo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bi(e,t,n){if(e==null)return e;var r=[],i=0;return oo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function B0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},lo={transition:null},U0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:lo,ReactCurrentOwner:du};$.Children={map:Bi,forEach:function(e,t,n){Bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bi(e,function(){t++}),t},toArray:function(e){return Bi(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=kr;$.Fragment=R0;$.Profiler=A0;$.PureComponent=uu;$.StrictMode=L0;$.Suspense=I0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$f({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Df.call(t,a)&&!Bf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:F0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:T0,_context:e},e.Consumer=e};$.createElement=Uf;$.createFactory=function(e){var t=Uf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:N0,render:e}};$.isValidElement=fu;$.lazy=function(e){return{$$typeof:$0,_payload:{_status:-1,_result:e},_init:B0}};$.memo=function(e,t){return{$$typeof:b0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.2.0";If.exports=$;var A=If.exports;const jn=O0(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=A,W0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,Q0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K0={key:!0,ref:!0,__self:!0,__source:!0};function Hf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)G0.call(t,r)&&!K0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W0,type:e,key:o,ref:l,props:i,_owner:Q0.current}}ll.Fragment=V0;ll.jsx=Hf;ll.jsxs=Hf;Nf.exports=ll;var v=Nf.exports,Ks={},Wf={exports:{}},$e={},Vf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,F){var N=_.length;_.push(F);e:for(;0<N;){var B=N-1>>>1,ne=_[B];if(0<i(ne,F))_[B]=F,_[N]=ne,N=B;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var F=_[0],N=_.pop();if(N!==F){_[0]=N;e:for(var B=0,ne=_.length,Nt=ne>>>1;B<Nt;){var De=2*(B+1)-1,vt=_[De],Be=De+1,at=_[Be];if(0>i(vt,N))Be<ne&&0>i(at,vt)?(_[B]=at,_[Be]=N,B=Be):(_[B]=vt,_[De]=N,B=De);else if(Be<ne&&0>i(at,N))_[B]=at,_[Be]=N,B=Be;else break e}}return F}function i(_,F){var N=_.sortIndex-F.sortIndex;return N!==0?N:_.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,p=3,w=!1,g=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=_)r(u),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(u)}}function x(_){if(y=!1,m(_),!g)if(n(a)!==null)g=!0,_r(E);else{var F=n(u);F!==null&&pn(x,F.startTime-_)}}function E(_,F){g=!1,y&&(y=!1,h(L),L=-1),w=!0;var N=p;try{for(m(F),c=n(a);c!==null&&(!(c.expirationTime>F)||_&&!se());){var B=c.callback;if(typeof B=="function"){c.callback=null,p=c.priorityLevel;var ne=B(c.expirationTime<=F);F=e.unstable_now(),typeof ne=="function"?c.callback=ne:c===n(a)&&r(a),m(F)}else r(a);c=n(a)}if(c!==null)var Nt=!0;else{var De=n(u);De!==null&&pn(x,De.startTime-F),Nt=!1}return Nt}finally{c=null,p=N,w=!1}}var O=!1,k=null,L=-1,M=5,T=-1;function se(){return!(e.unstable_now()-T<M)}function dn(){if(k!==null){var _=e.unstable_now();T=_;var F=!0;try{F=k(!0,_)}finally{F?fn():(O=!1,k=null)}}else O=!1}var fn;if(typeof f=="function")fn=function(){f(dn)};else if(typeof MessageChannel<"u"){var Mi=new MessageChannel,is=Mi.port2;Mi.port1.onmessage=dn,fn=function(){is.postMessage(null)}}else fn=function(){P(dn,0)};function _r(_){k=_,O||(O=!0,fn())}function pn(_,F){L=P(function(){_(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,_r(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var N=p;p=F;try{return _()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=p;p=_;try{return F()}finally{p=N}},e.unstable_scheduleCallback=function(_,F,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,_){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=N+ne,_={id:d++,callback:F,priorityLevel:_,startTime:N,expirationTime:ne,sortIndex:-1},N>B?(_.sortIndex=N,t(u,_),n(a)===null&&_===n(u)&&(y?(h(L),L=-1):y=!0,pn(x,N-B))):(_.sortIndex=ne,t(a,_),g||w||(g=!0,_r(E))),_},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(_){var F=p;return function(){var N=p;p=F;try{return _.apply(this,arguments)}finally{p=N}}}})(Gf);Vf.exports=Gf;var Y0=Vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=A,Ie=Y0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,ei={};function In(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(ei[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fc={},Nc={};function q0(e){return Ys.call(Nc,e)?!0:Ys.call(Fc,e)?!1:X0.test(e)?Nc[e]=!0:(Fc[e]=!0,!1)}function J0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z0(e,t,n,r){if(t===null||typeof t>"u"||J0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,hu);ge[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z0(t,n,i,r)&&(n=null),r||i===null?q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),Xs=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),Xf=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),qs=Symbol.for("react.suspense"),Js=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),qf=Symbol.for("react.offscreen"),Ic=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ss;function zr(e){if(ss===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ss=t&&t[1]||""}return`
`+ss+e}var as=!1;function us(e,t){if(!e||as)return"";as=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{as=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function eg(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function Zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Dn:return"Portal";case Xs:return"Profiler";case gu:return"StrictMode";case qs:return"Suspense";case Js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xf:return(e.displayName||"Context")+".Consumer";case Yf:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Zs(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Zs(e(t))}catch{}}return null}function tg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zs(t);case 8:return t===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e){var t=Jf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=ng(e))}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ep(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function ta(e,t){ep(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Mr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function tp(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function np(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?np(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,rp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rg=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){rg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function ip(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function op(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ip(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ig=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(ig[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function la(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,tr=null,nr=null;function Dc(e){if(e=ji(e)){if(typeof aa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=dl(t),aa(e.stateNode,e.type,t))}}function lp(e){tr?nr?nr.push(e):nr=[e]:tr=e}function sp(){if(tr){var e=tr,t=nr;if(nr=tr=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function ap(e,t){return e(t)}function up(){}var cs=!1;function cp(e,t,n){if(cs)return e(t,n);cs=!0;try{return ap(e,t,n)}finally{cs=!1,(tr!==null||nr!==null)&&(up(),sp())}}function ni(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ua=!1;if(jt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ua=!1}function og(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vr=!1,Oo=null,_o=!1,ca=null,lg={onError:function(e){Vr=!0,Oo=e}};function sg(e,t,n,r,i,o,l,s,a){Vr=!1,Oo=null,og.apply(lg,arguments)}function ag(e,t,n,r,i,o,l,s,a){if(sg.apply(this,arguments),Vr){if(Vr){var u=Oo;Vr=!1,Oo=null}else throw Error(C(198));_o||(_o=!0,ca=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if(bn(e)!==e)throw Error(C(188))}function ug(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bc(i),e;if(o===r)return Bc(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function fp(e){return e=ug(e),e!==null?pp(e):null}function pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pp(e);if(t!==null)return t;e=e.sibling}return null}var hp=Ie.unstable_scheduleCallback,Uc=Ie.unstable_cancelCallback,cg=Ie.unstable_shouldYield,dg=Ie.unstable_requestPaint,re=Ie.unstable_now,fg=Ie.unstable_getCurrentPriorityLevel,xu=Ie.unstable_ImmediatePriority,mp=Ie.unstable_UserBlockingPriority,Ro=Ie.unstable_NormalPriority,pg=Ie.unstable_LowPriority,gp=Ie.unstable_IdlePriority,sl=null,ht=null;function hg(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:yg,mg=Math.log,gg=Math.LN2;function yg(e){return e>>>=0,e===0?32:31-(mg(e)/gg|0)|0}var Vi=64,Gi=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Dr(s):(o&=l,o!==0&&(r=Dr(o)))}else l=n&~i,l!==0?r=Dr(l):o!==0&&(r=Dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function vg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-it(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=vg(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yp(){var e=Vi;return Vi<<=1,!(Vi&4194240)&&(Vi=64),e}function ds(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function xg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wp,ku,xp,Sp,kp,fa=!1,Qi=[],Gt=null,Qt=null,Kt=null,ri=new Map,ii=new Map,Bt=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function Ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kg(e,t,n,r,i){switch(t){case"focusin":return Gt=Ar(Gt,e,t,n,r,i),!0;case"dragenter":return Qt=Ar(Qt,e,t,n,r,i),!0;case"mouseover":return Kt=Ar(Kt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ri.set(o,Ar(ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ii.set(o,Ar(ii.get(o)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=dp(n),t!==null){e.blockedOn=t,kp(e.priority,function(){xp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return t=ji(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){so(e)&&n.delete(t)}function Eg(){fa=!1,Gt!==null&&so(Gt)&&(Gt=null),Qt!==null&&so(Qt)&&(Qt=null),Kt!==null&&so(Kt)&&(Kt=null),ri.forEach(Wc),ii.forEach(Wc)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,fa||(fa=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Eg)))}function oi(e){function t(i){return Tr(i,e)}if(0<Qi.length){Tr(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Tr(Gt,e),Qt!==null&&Tr(Qt,e),Kt!==null&&Tr(Kt,e),ri.forEach(t),ii.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&Bt.shift()}var rr=At.ReactCurrentBatchConfig,Ao=!0;function Cg(e,t,n,r){var i=H,o=rr.transition;rr.transition=null;try{H=1,Eu(e,t,n,r)}finally{H=i,rr.transition=o}}function Pg(e,t,n,r){var i=H,o=rr.transition;rr.transition=null;try{H=4,Eu(e,t,n,r)}finally{H=i,rr.transition=o}}function Eu(e,t,n,r){if(Ao){var i=pa(e,t,n,r);if(i===null)Ss(e,t,r,To,n),Hc(e,r);else if(kg(i,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<Sg.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&wp(o),o=pa(e,t,n,r),o===null&&Ss(e,t,r,To,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ss(e,t,r,null,n)}}var To=null;function pa(e,t,n,r){if(To=null,e=wu(r),e=vn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function Cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case xu:return 1;case mp:return 4;case Ro:case pg:return 16;case gp:return 536870912;default:return 16}default:return 16}}var Wt=null,Cu=null,ao=null;function Pp(){if(ao)return ao;var e,t=Cu,n=t.length,r,i="value"in Wt?Wt.value:Wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ao=i.slice(e,1<r?1-r:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function Vc(){return!1}function ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:Vc,this.isPropagationStopped=Vc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=ze(Er),Pi=ee({},Er,{view:0,detail:0}),jg=ze(Pi),fs,ps,Fr,al=ee({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(fs=e.screenX-Fr.screenX,ps=e.screenY-Fr.screenY):ps=fs=0,Fr=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),Gc=ze(al),Og=ee({},al,{dataTransfer:0}),_g=ze(Og),Rg=ee({},Pi,{relatedTarget:0}),hs=ze(Rg),Lg=ee({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=ze(Lg),Tg=ee({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=ze(Tg),Ng=ee({},Er,{data:0}),Qc=ze(Ng),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$g[e])?!!t[e]:!1}function ju(){return zg}var Mg=ee({},Pi,{key:function(e){if(e.key){var t=Ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dg=ze(Mg),Bg=ee({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=ze(Bg),Ug=ee({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Hg=ze(Ug),Wg=ee({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=ze(Wg),Gg=ee({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=ze(Gg),Kg=[9,13,27,32],Ou=jt&&"CompositionEvent"in window,Gr=null;jt&&"documentMode"in document&&(Gr=document.documentMode);var Yg=jt&&"TextEvent"in window&&!Gr,jp=jt&&(!Ou||Gr&&8<Gr&&11>=Gr),Yc=String.fromCharCode(32),Xc=!1;function Op(e,t){switch(e){case"keyup":return Kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Xg(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(Xc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Xc?null:e;default:return null}}function qg(e,t){if(Un)return e==="compositionend"||!Ou&&Op(e,t)?(e=Pp(),ao=Cu=Wt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jp&&t.locale!=="ko"?null:t.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jg[e.type]:t==="textarea"}function Rp(e,t,n,r){lp(r),t=Fo(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,li=null;function Zg(e){Dp(e,0)}function ul(e){var t=Vn(e);if(Zf(t))return e}function ey(e,t){if(e==="change")return t}var Lp=!1;if(jt){var ms;if(jt){var gs="oninput"in document;if(!gs){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),gs=typeof Jc.oninput=="function"}ms=gs}else ms=!1;Lp=ms&&(!document.documentMode||9<document.documentMode)}function Zc(){Qr&&(Qr.detachEvent("onpropertychange",Ap),li=Qr=null)}function Ap(e){if(e.propertyName==="value"&&ul(li)){var t=[];Rp(t,li,e,wu(e)),cp(Zg,t)}}function ty(e,t,n){e==="focusin"?(Zc(),Qr=t,li=n,Qr.attachEvent("onpropertychange",Ap)):e==="focusout"&&Zc()}function ny(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(li)}function ry(e,t){if(e==="click")return ul(t)}function iy(e,t){if(e==="input"||e==="change")return ul(t)}function oy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:oy;function si(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ys.call(t,i)||!st(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fp(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ly(e){var t=Fp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&_u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=td(n,o);var l=td(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sy=jt&&"documentMode"in document&&11>=document.documentMode,Hn=null,ha=null,Kr=null,ma=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ma||Hn==null||Hn!==jo(r)||(r=Hn,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&si(Kr,r)||(Kr=r,r=Fo(ha,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},ys={},Np={};jt&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function cl(e){if(ys[e])return ys[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Np)return ys[e]=t[n];return e}var Ip=cl("animationend"),bp=cl("animationiteration"),$p=cl("animationstart"),zp=cl("transitionend"),Mp=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Mp.set(e,t),In(t,[e])}for(var vs=0;vs<rd.length;vs++){var ws=rd[vs],ay=ws.toLowerCase(),uy=ws[0].toUpperCase()+ws.slice(1);sn(ay,"on"+uy)}sn(Ip,"onAnimationEnd");sn(bp,"onAnimationIteration");sn($p,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(zp,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ag(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;id(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;id(i,s,u),o=a}}}if(_o)throw e=ca,_o=!1,ca=null,e}function Q(e,t){var n=t[xa];n===void 0&&(n=t[xa]=new Set);var r=e+"__bubble";n.has(r)||(Bp(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),Bp(n,e,r,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Xi]){e[Xi]=!0,Kf.forEach(function(n){n!=="selectionchange"&&(cy.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,xs("selectionchange",!1,t))}}function Bp(e,t,n,r){switch(Cp(t)){case 1:var i=Cg;break;case 4:i=Pg;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ss(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=vn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}cp(function(){var u=o,d=wu(n),c=[];e:{var p=Mp.get(e);if(p!==void 0){var w=Pu,g=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":w=Dg;break;case"focusin":g="focus",w=hs;break;case"focusout":g="blur",w=hs;break;case"beforeblur":case"afterblur":w=hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Hg;break;case Ip:case bp:case $p:w=Ag;break;case zp:w=Vg;break;case"scroll":w=jg;break;case"wheel":w=Qg;break;case"copy":case"cut":case"paste":w=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Kc}var y=(t&4)!==0,P=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=ni(f,h),x!=null&&y.push(ui(f,x,m)))),P)break;f=f.return}0<y.length&&(p=new w(p,g,null,n,d),c.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==sa&&(g=n.relatedTarget||n.fromElement)&&(vn(g)||g[Ot]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?vn(g):null,g!==null&&(P=bn(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(y=Gc,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Kc,x="onPointerLeave",h="onPointerEnter",f="pointer"),P=w==null?p:Vn(w),m=g==null?p:Vn(g),p=new y(x,f+"leave",w,n,d),p.target=P,p.relatedTarget=m,x=null,vn(d)===u&&(y=new y(h,f+"enter",g,n,d),y.target=m,y.relatedTarget=P,x=y),P=x,w&&g)t:{for(y=w,h=g,f=0,m=y;m;m=zn(m))f++;for(m=0,x=h;x;x=zn(x))m++;for(;0<f-m;)y=zn(y),f--;for(;0<m-f;)h=zn(h),m--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=zn(y),h=zn(h)}y=null}else y=null;w!==null&&od(c,p,w,y,!1),g!==null&&P!==null&&od(c,P,g,y,!0)}}e:{if(p=u?Vn(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=ey;else if(qc(p))if(Lp)E=iy;else{E=ny;var O=ty}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=ry);if(E&&(E=E(e,u))){Rp(c,E,n,d);break e}O&&O(e,p,u),e==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&na(p,"number",p.value)}switch(O=u?Vn(u):window,e){case"focusin":(qc(O)||O.contentEditable==="true")&&(Hn=O,ha=u,Kr=null);break;case"focusout":Kr=ha=Hn=null;break;case"mousedown":ma=!0;break;case"contextmenu":case"mouseup":case"dragend":ma=!1,nd(c,n,d);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":nd(c,n,d)}var k;if(Ou)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Un?Op(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(jp&&n.locale!=="ko"&&(Un||L!=="onCompositionStart"?L==="onCompositionEnd"&&Un&&(k=Pp()):(Wt=d,Cu="value"in Wt?Wt.value:Wt.textContent,Un=!0)),O=Fo(u,L),0<O.length&&(L=new Qc(L,e,null,n,d),c.push({event:L,listeners:O}),k?L.data=k:(k=_p(n),k!==null&&(L.data=k)))),(k=Yg?Xg(e,n):qg(e,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(d=new Qc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Dp(c,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ni(e,n),o!=null&&r.unshift(ui(e,o,i)),o=ni(e,t),o!=null&&r.push(ui(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=ni(n,o),a!=null&&l.unshift(ui(n,a,s))):i||(a=ni(n,o),a!=null&&l.push(ui(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var dy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(dy,`
`).replace(fy,"")}function qi(e,t,n){if(t=ld(t),ld(e)!==t&&n)throw Error(C(425))}function No(){}var ga=null,ya=null;function va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(my)}:wa;function my(e){setTimeout(function(){throw e})}function ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Cr,ci="__reactProps$"+Cr,Ot="__reactContainer$"+Cr,xa="__reactEvents$"+Cr,gy="__reactListeners$"+Cr,yy="__reactHandles$"+Cr;function vn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[ft])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[ft]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function dl(e){return e[ci]||null}var Sa=[],Gn=-1;function an(e){return{current:e}}function Y(e){0>Gn||(e.current=Sa[Gn],Sa[Gn]=null,Gn--)}function G(e,t){Gn++,Sa[Gn]=e.current,e.current=t}var rn={},ke=an(rn),Re=an(!1),On=rn;function ur(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Io(){Y(Re),Y(ke)}function ud(e,t,n){if(ke.current!==rn)throw Error(C(168));G(ke,t),G(Re,n)}function Up(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,tg(e)||"Unknown",i));return ee({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,On=ke.current,G(ke,e),G(Re,Re.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Up(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,Y(Re),Y(ke),G(ke,e)):Y(Re),G(Re,n)}var St=null,fl=!1,Es=!1;function Hp(e){St===null?St=[e]:St.push(e)}function vy(e){fl=!0,Hp(e)}function un(){if(!Es&&St!==null){Es=!0;var e=0,t=H;try{var n=St;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,fl=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),hp(xu,un),i}finally{H=t,Es=!1}}return null}var Qn=[],Kn=0,$o=null,zo=0,Ue=[],He=0,_n=null,kt=1,Et="";function mn(e,t){Qn[Kn++]=zo,Qn[Kn++]=$o,$o=e,zo=t}function Wp(e,t,n){Ue[He++]=kt,Ue[He++]=Et,Ue[He++]=_n,_n=e;var r=kt;e=Et;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-it(t)+i|n<<i|r,Et=o+e}else kt=1<<o|n<<i|r,Et=e}function Ru(e){e.return!==null&&(mn(e,1),Wp(e,1,0))}function Lu(e){for(;e===$o;)$o=Qn[--Kn],Qn[Kn]=null,zo=Qn[--Kn],Qn[Kn]=null;for(;e===_n;)_n=Ue[--He],Ue[He]=null,Et=Ue[--He],Ue[He]=null,kt=Ue[--He],Ue[He]=null}var Ne=null,Fe=null,q=!1,nt=null;function Vp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:kt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Fe=null,!0):!1;default:return!1}}function ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(q){var t=Fe;if(t){var n=t;if(!dd(e,t)){if(ka(e))throw Error(C(418));t=Yt(n.nextSibling);var r=Ne;t&&dd(e,t)?Vp(r,n):(e.flags=e.flags&-4097|2,q=!1,Ne=e)}}else{if(ka(e))throw Error(C(418));e.flags=e.flags&-4097|2,q=!1,Ne=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ji(e){if(e!==Ne)return!1;if(!q)return fd(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!va(e.type,e.memoizedProps)),t&&(t=Fe)){if(ka(e))throw Gp(),Error(C(418));for(;t;)Vp(e,t),t=Yt(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ne?Yt(e.stateNode.nextSibling):null;return!0}function Gp(){for(var e=Fe;e;)e=Yt(e.nextSibling)}function cr(){Fe=Ne=null,q=!1}function Au(e){nt===null?nt=[e]:nt.push(e)}var wy=At.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Mo=an(null),Do=null,Yn=null,Tu=null;function Fu(){Tu=Yn=Do=null}function Nu(e){var t=Mo.current;Y(Mo),e._currentValue=t}function Ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Do=e,Tu=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Tu!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Do===null)throw Error(C(308));Yn=e,Do.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var wn=null;function Iu(e){wn===null?wn=[e]:wn.push(e)}function Qp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,Iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;l=0,d=u=a=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,w=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(w,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(w,c,p):g,p==null)break e;c=ee({},c,p);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=w,a=c):d=d.next=w,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=c}}function hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Yp=new Qf.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Jt(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(ot(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Jt(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(ot(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Jt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xt(e,i,r),t!==null&&(ot(t,e,r,n),co(t,e,r))}};function md(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!si(n,r)||!si(i,o):!0}function Xp(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Le(t)?On:ke.current,r=t.contextTypes,o=(r=r!=null)?ur(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yp,bu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Le(t)?On:ke.current,i.context=ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pl.enqueueReplaceState(i,i.state,null),Bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Yp&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function qp(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Zt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,x){return f===null||f.tag!==6?(f=Ls(m,h.mode,x),f.return=h,f):(f=i(f,m),f.return=h,f)}function a(h,f,m,x){var E=m.type;return E===Bn?d(h,f,m.props.children,x,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&yd(E)===f.type)?(x=i(f,m.props),x.ref=Nr(h,f,m),x.return=h,x):(x=yo(m.type,m.key,m.props,null,h.mode,x),x.ref=Nr(h,f,m),x.return=h,x)}function u(h,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=As(m,h.mode,x),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,x,E){return f===null||f.tag!==7?(f=En(m,h.mode,x,E),f.return=h,f):(f=i(f,m),f.return=h,f)}function c(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ls(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ui:return m=yo(f.type,f.key,f.props,null,h.mode,m),m.ref=Nr(h,null,f),m.return=h,m;case Dn:return f=As(f,h.mode,m),f.return=h,f;case Mt:var x=f._init;return c(h,x(f._payload),m)}if(Mr(f)||Rr(f))return f=En(f,h.mode,m,null),f.return=h,f;Zi(h,f)}return null}function p(h,f,m,x){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return m.key===E?a(h,f,m,x):null;case Dn:return m.key===E?u(h,f,m,x):null;case Mt:return E=m._init,p(h,f,E(m._payload),x)}if(Mr(m)||Rr(m))return E!==null?null:d(h,f,m,x,null);Zi(h,m)}return null}function w(h,f,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,s(f,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ui:return h=h.get(x.key===null?m:x.key)||null,a(f,h,x,E);case Dn:return h=h.get(x.key===null?m:x.key)||null,u(f,h,x,E);case Mt:var O=x._init;return w(h,f,m,O(x._payload),E)}if(Mr(x)||Rr(x))return h=h.get(m)||null,d(f,h,x,E,null);Zi(f,x)}return null}function g(h,f,m,x){for(var E=null,O=null,k=f,L=f=0,M=null;k!==null&&L<m.length;L++){k.index>L?(M=k,k=null):M=k.sibling;var T=p(h,k,m[L],x);if(T===null){k===null&&(k=M);break}e&&k&&T.alternate===null&&t(h,k),f=o(T,f,L),O===null?E=T:O.sibling=T,O=T,k=M}if(L===m.length)return n(h,k),q&&mn(h,L),E;if(k===null){for(;L<m.length;L++)k=c(h,m[L],x),k!==null&&(f=o(k,f,L),O===null?E=k:O.sibling=k,O=k);return q&&mn(h,L),E}for(k=r(h,k);L<m.length;L++)M=w(k,h,L,m[L],x),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?L:M.key),f=o(M,f,L),O===null?E=M:O.sibling=M,O=M);return e&&k.forEach(function(se){return t(h,se)}),q&&mn(h,L),E}function y(h,f,m,x){var E=Rr(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var O=E=null,k=f,L=f=0,M=null,T=m.next();k!==null&&!T.done;L++,T=m.next()){k.index>L?(M=k,k=null):M=k.sibling;var se=p(h,k,T.value,x);if(se===null){k===null&&(k=M);break}e&&k&&se.alternate===null&&t(h,k),f=o(se,f,L),O===null?E=se:O.sibling=se,O=se,k=M}if(T.done)return n(h,k),q&&mn(h,L),E;if(k===null){for(;!T.done;L++,T=m.next())T=c(h,T.value,x),T!==null&&(f=o(T,f,L),O===null?E=T:O.sibling=T,O=T);return q&&mn(h,L),E}for(k=r(h,k);!T.done;L++,T=m.next())T=w(k,h,L,T.value,x),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?L:T.key),f=o(T,f,L),O===null?E=T:O.sibling=T,O=T);return e&&k.forEach(function(dn){return t(h,dn)}),q&&mn(h,L),E}function P(h,f,m,x){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:e:{for(var E=m.key,O=f;O!==null;){if(O.key===E){if(E=m.type,E===Bn){if(O.tag===7){n(h,O.sibling),f=i(O,m.props.children),f.return=h,h=f;break e}}else if(O.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&yd(E)===O.type){n(h,O.sibling),f=i(O,m.props),f.ref=Nr(h,O,m),f.return=h,h=f;break e}n(h,O);break}else t(h,O);O=O.sibling}m.type===Bn?(f=En(m.props.children,h.mode,x,m.key),f.return=h,h=f):(x=yo(m.type,m.key,m.props,null,h.mode,x),x.ref=Nr(h,f,m),x.return=h,h=x)}return l(h);case Dn:e:{for(O=m.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=As(m,h.mode,x),f.return=h,h=f}return l(h);case Mt:return O=m._init,P(h,f,O(m._payload),x)}if(Mr(m))return g(h,f,m,x);if(Rr(m))return y(h,f,m,x);Zi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Ls(m,h.mode,x),f.return=h,h=f),l(h)):n(h,f)}return P}var dr=qp(!0),Jp=qp(!1),Oi={},mt=an(Oi),di=an(Oi),fi=an(Oi);function xn(e){if(e===Oi)throw Error(C(174));return e}function $u(e,t){switch(G(fi,t),G(di,e),G(mt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ia(t,e)}Y(mt),G(mt,t)}function fr(){Y(mt),Y(di),Y(fi)}function Zp(e){xn(fi.current);var t=xn(mt.current),n=ia(t,e.type);t!==n&&(G(di,e),G(mt,n))}function zu(e){di.current===e&&(Y(mt),Y(di))}var J=an(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function Mu(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var fo=At.ReactCurrentDispatcher,Ps=At.ReactCurrentBatchConfig,Rn=0,Z=null,ae=null,ce=null,Ho=!1,Yr=!1,pi=0,xy=0;function ye(){throw Error(C(321))}function Du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Bu(e,t,n,r,i,o){if(Rn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fo.current=e===null||e.memoizedState===null?Cy:Py,e=n(r,i),Yr){o=0;do{if(Yr=!1,pi=0,25<=o)throw Error(C(301));o+=1,ce=ae=null,t.updateQueue=null,fo.current=jy,e=n(r,i)}while(Yr)}if(fo.current=Wo,t=ae!==null&&ae.next!==null,Rn=0,ce=ae=Z=null,Ho=!1,t)throw Error(C(300));return e}function Uu(){var e=pi!==0;return pi=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function Ye(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function hi(e,t){return typeof t=="function"?t(e):t}function js(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if((Rn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,Z.lanes|=d,Ln|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,st(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);st(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function eh(){}function th(e,t){var n=Z,r=Ye(),i=t(),o=!st(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,Hu(ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,mi(9,rh.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(C(349));Rn&30||nh(n,t,i)}return i}function nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rh(e,t,n,r){t.value=n,t.getSnapshot=r,oh(t)&&lh(e)}function ih(e,t,n){return n(function(){oh(t)&&lh(e)})}function oh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function lh(e){var t=_t(e,1);t!==null&&ot(t,e,1,-1)}function vd(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ey.bind(null,Z,e),[t.memoizedState,e]}function mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sh(){return Ye().memoizedState}function po(e,t,n,r){var i=ct();Z.flags|=e,i.memoizedState=mi(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(ae!==null){var l=ae.memoizedState;if(o=l.destroy,r!==null&&Du(r,l.deps)){i.memoizedState=mi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=mi(1|t,n,o,r)}function wd(e,t){return po(8390656,8,e,t)}function Hu(e,t){return hl(2048,8,e,t)}function ah(e,t){return hl(4,2,e,t)}function uh(e,t){return hl(4,4,e,t)}function ch(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dh(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,ch.bind(null,t,e),n)}function Wu(){}function fh(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ph(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hh(e,t,n){return Rn&21?(st(n,t)||(n=yp(),Z.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Sy(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ps.transition;Ps.transition={};try{e(!1),t()}finally{H=n,Ps.transition=r}}function mh(){return Ye().memoizedState}function ky(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gh(e))yh(t,n);else if(n=Qp(e,t,n,r),n!==null){var i=Ce();ot(n,e,r,i),vh(n,t,r)}}function Ey(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gh(e))yh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,st(s,l)){var a=t.interleaved;a===null?(i.next=i,Iu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Qp(e,t,i,r),n!==null&&(i=Ce(),ot(n,e,r,i),vh(n,t,r))}}function gh(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function yh(e,t){Yr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var Wo={readContext:Ke,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Cy={readContext:Ke,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,po(4194308,4,ch.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){return po(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ky.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Wu,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=Sy.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ct();if(q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));Rn&30||nh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wd(ih.bind(null,r,o,e),[e]),r.flags|=2048,mi(9,rh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=fe.identifierPrefix;if(q){var n=Et,r=kt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:Ke,useCallback:fh,useContext:Ke,useEffect:Hu,useImperativeHandle:dh,useInsertionEffect:ah,useLayoutEffect:uh,useMemo:ph,useReducer:js,useRef:sh,useState:function(){return js(hi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ye();return hh(t,ae.memoizedState,e)},useTransition:function(){var e=js(hi)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:mh,unstable_isNewReconciler:!1},jy={readContext:Ke,useCallback:fh,useContext:Ke,useEffect:Hu,useImperativeHandle:dh,useInsertionEffect:ah,useLayoutEffect:uh,useMemo:ph,useReducer:Os,useRef:sh,useState:function(){return Os(hi)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ye();return ae===null?t.memoizedState=e:hh(t,ae.memoizedState,e)},useTransition:function(){var e=Os(hi)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:mh,unstable_isNewReconciler:!1};function pr(e,t){try{var n="",r=t;do n+=eg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function wh(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,$a=r),Oa(e,t)},n}function xh(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Oy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=By.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var _y=At.ReactCurrentOwner,_e=!1;function Ee(e,t,n,r){t.child=e===null?Jp(t,null,n,r):dr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var o=t.ref;return ir(t,i),r=Bu(e,t,n,r,o,i),n=Uu(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(q&&n&&Ru(t),t.flags|=1,Ee(e,t,r,i),t.child)}function Cd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ju(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Sh(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(l,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Sh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(si(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return _a(e,t,n,r,i)}function kh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(qn,Te),Te|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(qn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(qn,Te),Te|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(qn,Te),Te|=r;return Ee(e,t,i,n),t.child}function Eh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=Le(n)?On:ke.current;return o=ur(t,o),ir(t,i),n=Bu(e,t,n,r,o,i),r=Uu(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(q&&r&&Ru(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if(Le(n)){var o=!0;bo(t)}else o=!1;if(ir(t,i),t.stateNode===null)ho(e,t),Xp(t,n,r),ja(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Le(n)?On:ke.current,u=ur(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&gd(t,l,r,u),Dt=!1;var p=t.memoizedState;l.state=p,Bo(t,r,l,i),a=t.memoizedState,s!==r||p!==a||Re.current||Dt?(typeof d=="function"&&(Pa(t,n,d,r),a=t.memoizedState),(s=Dt||md(t,n,s,r,p,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:et(t.type,s),l.props=u,c=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=Le(n)?On:ke.current,a=ur(t,a));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||p!==a)&&gd(t,l,r,a),Dt=!1,p=t.memoizedState,l.state=p,Bo(t,r,l,i);var g=t.memoizedState;s!==c||p!==g||Re.current||Dt?(typeof w=="function"&&(Pa(t,n,w,r),g=t.memoizedState),(u=Dt||md(t,n,u,r,p,g,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,o,i)}function Ra(e,t,n,r,i,o){Eh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&cd(t,n,!1),Rt(e,t,o);r=t.stateNode,_y.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dr(t,e.child,null,o),t.child=dr(t,null,s,o)):Ee(e,t,s,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Ch(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),$u(e,t.containerInfo)}function jd(e,t,n,r,i){return cr(),Au(i),t.flags|=256,Ee(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ph(e,t,n){var r=t.pendingProps,i=J.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(J,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=yl(l,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Aa(n),t.memoizedState=La,e):Vu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ry(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Zt(s,o):(o=En(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Aa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=La,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&Au(r),dr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ry(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=_s(Error(C(422))),eo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=yl({mode:"visible",children:r.children},i,0,null),o=En(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dr(t,e.child,null,l),t.child.memoizedState=Aa(l),t.memoizedState=La,o);if(!(t.mode&1))return eo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=_s(o,r,void 0),eo(e,t,l,r)}if(s=(l&e.childLanes)!==0,_e||s){if(r=fe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),ot(r,e,i,-1))}return qu(),r=_s(Error(C(421))),eo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Uy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Fe=Yt(i.nextSibling),Ne=t,q=!0,nt=null,e!==null&&(Ue[He++]=kt,Ue[He++]=Et,Ue[He++]=_n,kt=e.id,Et=e.overflow,_n=t),t=Vu(t,r.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ca(e.return,t,n)}function Rs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,o);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ly(e,t,n){switch(t.tag){case 3:Ch(t),cr();break;case 5:Zp(t);break;case 1:Le(t.type)&&bo(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Ph(e,t,n):(G(J,J.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,kh(e,t,n)}return Rt(e,t,n)}var Oh,Ta,_h,Rh;Oh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ta=function(){};_h=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(mt.current);var o=null;switch(n){case"input":i=ea(e,i),r=ea(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=ra(e,i),r=ra(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}oa(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ei.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ay(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Le(t.type)&&Io(),ve(t),null;case 3:return r=t.stateNode,fr(),Y(Re),Y(ke),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Da(nt),nt=null))),Ta(e,t),ve(t),null;case 5:zu(t);var i=xn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)_h(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=xn(mt.current),Ji(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[ci]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)Q(Br[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":bc(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":zc(r,o),Q("invalid",r)}oa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&qi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&qi(r.textContent,s,e),i=["children",""+s]):ei.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Hi(r),$c(r,o,!0);break;case"textarea":Hi(r),Mc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=np(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[ci]=r,Oh(e,t,!1,!1),t.stateNode=e;e:{switch(l=la(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)Q(Br[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":bc(e,r),i=ea(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":zc(e,r),i=ra(e,r),Q("invalid",e);break;default:i=r}oa(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?op(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rp(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ti(e,a):typeof a=="number"&&ti(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ei.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",e):a!=null&&mu(e,o,a,l))}switch(n){case"input":Hi(e),$c(e,r,!1);break;case"textarea":Hi(e),Mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?er(e,!!r.multiple,o,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=xn(fi.current),xn(mt.current),Ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Fe!==null&&t.mode&1&&!(t.flags&128))Gp(),cr(),t.flags|=98560,o=!1;else if(o=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[ft]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else nt!==null&&(Da(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):qu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return fr(),Ta(e,t),e===null&&ai(t.stateNode.containerInfo),ve(t),null;case 10:return Nu(t.type._context),ve(t),null;case 17:return Le(t.type)&&Io(),ve(t),null;case 19:if(Y(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Uo(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>hr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Ty(e,t){switch(Lu(t),t.tag){case 1:return Le(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),Y(Re),Y(ke),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return fr(),null;case 10:return Nu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var to=!1,xe=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,R=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){te(e,t,r)}}var _d=!1;function Ny(e,t){if(ga=Ao,e=Fp(),_u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(s=l+i),c!==o||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)p=c,c=w;for(;;){if(c===e)break t;if(p===n&&++u===i&&(s=l),p===o&&++d===r&&(a=l),(w=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:e,selectionRange:n},Ao=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,P=g.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:et(t.type,y),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=_d,_d=!1,g}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fa(t,n,o)}i=i.next}while(i!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lh(e){var t=e.alternate;t!==null&&(e.alternate=null,Lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[ci],delete t[xa],delete t[gy],delete t[yy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}var he=null,tt=!1;function bt(e,t,n){for(n=n.child;n!==null;)Th(e,t,n),n=n.sibling}function Th(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:xe||Xn(n,t);case 6:var r=he,i=tt;he=null,bt(e,t,n),he=r,tt=i,he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?ks(e.parentNode,n):e.nodeType===1&&ks(e,n),oi(e)):ks(he,n.stateNode));break;case 4:r=he,i=tt,he=n.stateNode.containerInfo,tt=!0,bt(e,t,n),he=r,tt=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fa(n,t,l),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!xe&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,bt(e,t,n),xe=r):bt(e,t,n);break;default:bt(e,t,n)}}function Ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fy),t.forEach(function(r){var i=Hy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,tt=!1;break e;case 3:he=s.stateNode.containerInfo,tt=!0;break e;case 4:he=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(he===null)throw Error(C(160));Th(o,l,i),he=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}function Fh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ut(e),r&4){try{Xr(3,e,e.return),ml(3,e)}catch(y){te(e,e.return,y)}try{Xr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Ze(t,e),ut(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Ze(t,e),ut(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var i=e.stateNode;try{ti(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ep(i,o),la(s,l);var u=la(s,o);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?op(i,c):d==="dangerouslySetInnerHTML"?rp(i,c):d==="children"?ti(i,c):mu(i,d,c,u)}switch(s){case"input":ta(i,o);break;case"textarea":tp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?er(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?er(i,!!o.multiple,o.defaultValue,!0):er(i,!!o.multiple,o.multiple?[]:"",!1))}i[ci]=o}catch(y){te(e,e.return,y)}}break;case 6:if(Ze(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){te(e,e.return,y)}}break;case 3:if(Ze(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Ze(t,e),ut(e);break;case 13:Ze(t,e),ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=re())),r&4&&Ld(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,Ze(t,e),xe=u):Ze(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(p=R,w=p.child,p.tag){case 0:case 11:case 14:case 15:Xr(4,p,p.return);break;case 1:Xn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Xn(p,p.return);break;case 22:if(p.memoizedState!==null){Td(c);continue}}w!==null?(w.return=p,R=w):Td(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ip("display",l))}catch(y){te(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){te(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(t,e),ut(e),r&4&&Ld(e);break;case 21:break;default:Ze(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ah(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ti(i,""),r.flags&=-33);var o=Rd(e);ba(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Rd(e);Ia(e,s,l);break;default:throw Error(C(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Iy(e,t,n){R=e,Nh(e)}function Nh(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||to;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||xe;s=to;var u=xe;if(to=l,(xe=a)&&!u)for(R=i;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?Fd(i):a!==null?(a.return=l,R=a):Fd(i);for(;o!==null;)R=o,Nh(o),o=o.sibling;R=i,to=s,xe=u}Ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Ad(e)}}function Ad(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hd(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&oi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||t.flags&512&&Na(t)}catch(p){te(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Td(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Fd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{Na(t)}catch(a){te(t,o,a)}break;case 5:var l=t.return;try{Na(t)}catch(a){te(t,l,a)}}}catch(a){te(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var by=Math.ceil,Vo=At.ReactCurrentDispatcher,Gu=At.ReactCurrentOwner,Ve=At.ReactCurrentBatchConfig,D=0,fe=null,oe=null,me=0,Te=0,qn=an(0),ue=0,gi=null,Ln=0,gl=0,Qu=0,qr=null,Oe=null,Ku=0,hr=1/0,wt=null,Go=!1,$a=null,qt=null,no=!1,Vt=null,Qo=0,Jr=0,za=null,mo=-1,go=0;function Ce(){return D&6?re():mo!==-1?mo:mo=re()}function Jt(e){return e.mode&1?D&2&&me!==0?me&-me:wy.transition!==null?(go===0&&(go=yp()),go):(e=H,e!==0||(e=window.event,e=e===void 0?16:Cp(e.type)),e):1}function ot(e,t,n,r){if(50<Jr)throw Jr=0,za=null,Error(C(185));Ci(e,n,r),(!(D&2)||e!==fe)&&(e===fe&&(!(D&2)&&(gl|=n),ue===4&&Ut(e,me)),Ae(e,r),n===1&&D===0&&!(t.mode&1)&&(hr=re()+500,fl&&un()))}function Ae(e,t){var n=e.callbackNode;wg(e,t);var r=Lo(e,e===fe?me:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?vy(Nd.bind(null,e)):Hp(Nd.bind(null,e)),hy(function(){!(D&6)&&un()}),n=null;else{switch(vp(r)){case 1:n=xu;break;case 4:n=mp;break;case 16:n=Ro;break;case 536870912:n=gp;break;default:n=Ro}n=Uh(n,Ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ih(e,t){if(mo=-1,go=0,D&6)throw Error(C(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=Lo(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var i=D;D|=2;var o=$h();(fe!==e||me!==t)&&(wt=null,hr=re()+500,kn(e,t));do try{My();break}catch(s){bh(e,s)}while(1);Fu(),Vo.current=o,D=i,oe!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=da(e),i!==0&&(r=i,t=Ma(e,i))),t===1)throw n=gi,kn(e,0),Ut(e,r),Ae(e,re()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!$y(i)&&(t=Ko(e,r),t===2&&(o=da(e),o!==0&&(r=o,t=Ma(e,o))),t===1))throw n=gi,kn(e,0),Ut(e,r),Ae(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:gn(e,Oe,wt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Ku+500-re(),10<t)){if(Lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wa(gn.bind(null,e,Oe,wt),t);break}gn(e,Oe,wt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-it(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*by(r/1960))-r,10<r){e.timeoutHandle=wa(gn.bind(null,e,Oe,wt),r);break}gn(e,Oe,wt);break;case 5:gn(e,Oe,wt);break;default:throw Error(C(329))}}}return Ae(e,re()),e.callbackNode===n?Ih.bind(null,e):null}function Ma(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Da(t)),e}function Da(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function $y(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!st(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Qu,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(D&6)throw Error(C(327));or();var t=Lo(e,0);if(!(t&1))return Ae(e,re()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=da(e);r!==0&&(t=r,n=Ma(e,r))}if(n===1)throw n=gi,kn(e,0),Ut(e,t),Ae(e,re()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Oe,wt),Ae(e,re()),null}function Yu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hr=re()+500,fl&&un())}}function An(e){Vt!==null&&Vt.tag===0&&!(D&6)&&or();var t=D;D|=1;var n=Ve.transition,r=H;try{if(Ve.transition=null,H=1,e)return e()}finally{H=r,Ve.transition=n,D=t,!(D&6)&&un()}}function Xu(){Te=qn.current,Y(qn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,py(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:fr(),Y(Re),Y(ke),Mu();break;case 5:zu(r);break;case 4:fr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Nu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(fe=e,oe=e=Zt(e.current,null),me=Te=t,ue=0,gi=null,Qu=gl=Ln=0,Oe=qr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}wn=null}return e}function bh(e,t){do{var n=oe;try{if(Fu(),fo.current=Wo,Ho){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(Rn=0,ce=ae=Z=null,Yr=!1,pi=0,Gu.current=null,n===null||n.return===null){ue=1,gi=t,oe=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Sd(l);if(w!==null){w.flags&=-257,kd(w,l,s,o,t),w.mode&1&&xd(o,u,t),t=w,a=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(a),t.updateQueue=y}else g.add(a);break e}else{if(!(t&1)){xd(o,u,t),qu();break e}a=Error(C(426))}}else if(q&&s.mode&1){var P=Sd(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),kd(P,l,s,o,t),Au(pr(a,s));break e}}o=a=pr(a,s),ue!==4&&(ue=2),qr===null?qr=[o]:qr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=wh(o,a,t);pd(o,h);break e;case 1:s=a;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=xh(o,s,t);pd(o,x);break e}}o=o.return}while(o!==null)}Mh(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function $h(){var e=Vo.current;return Vo.current=Wo,e===null?Wo:e}function qu(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Ln&268435455)&&!(gl&268435455)||Ut(fe,me)}function Ko(e,t){var n=D;D|=2;var r=$h();(fe!==e||me!==t)&&(wt=null,kn(e,t));do try{zy();break}catch(i){bh(e,i)}while(1);if(Fu(),D=n,Vo.current=r,oe!==null)throw Error(C(261));return fe=null,me=0,ue}function zy(){for(;oe!==null;)zh(oe)}function My(){for(;oe!==null&&!cg();)zh(oe)}function zh(e){var t=Bh(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Mh(e):oe=t,Gu.current=null}function Mh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ty(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(n=Ay(n,t,Te),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function gn(e,t,n){var r=H,i=Ve.transition;try{Ve.transition=null,H=1,Dy(e,t,n,r)}finally{Ve.transition=i,H=r}return null}function Dy(e,t,n,r){do or();while(Vt!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xg(e,o),e===fe&&(oe=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Uh(Ro,function(){return or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var l=H;H=1;var s=D;D|=4,Gu.current=null,Ny(e,n),Fh(n,e),ly(ya),Ao=!!ga,ya=ga=null,e.current=n,Iy(n),dg(),D=s,H=l,Ve.transition=o}else e.current=n;if(no&&(no=!1,Vt=e,Qo=i),o=e.pendingLanes,o===0&&(qt=null),hg(n.stateNode),Ae(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=$a,$a=null,e;return Qo&1&&e.tag!==0&&or(),o=e.pendingLanes,o&1?e===za?Jr++:(Jr=0,za=e):Jr=0,un(),null}function or(){if(Vt!==null){var e=vp(Qo),t=Ve.transition,n=H;try{if(Ve.transition=null,H=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Qo=0,D&6)throw Error(C(331));var i=D;for(D|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Xr(8,d,o)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var p=d.sibling,w=d.return;if(Lh(d),d===u){R=null;break}if(p!==null){p.return=w,R=p;break}R=w}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=f;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(E){te(s,s.return,E)}if(s===l){R=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,R=x;break e}R=s.return}}if(D=i,un(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{H=n,Ve.transition=t}}return!1}function Id(e,t,n){t=pr(n,t),t=wh(e,t,1),e=Xt(e,t,1),t=Ce(),e!==null&&(Ci(e,1,t),Ae(e,t))}function te(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=pr(n,e),e=xh(t,e,1),t=Xt(t,e,1),e=Ce(),t!==null&&(Ci(t,1,e),Ae(t,e));break}}t=t.return}}function By(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-Ku?kn(e,0):Qu|=n),Ae(e,t)}function Dh(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var n=Ce();e=_t(e,t),e!==null&&(Ci(e,t,n),Ae(e,n))}function Uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dh(e,n)}function Hy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Dh(e,n)}var Bh;Bh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Ly(e,t,n);_e=!!(e.flags&131072)}else _e=!1,q&&t.flags&1048576&&Wp(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=ur(t,ke.current);ir(t,n),i=Bu(null,t,r,e,i,n);var o=Uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bu(t),i.updater=pl,t.stateNode=i,i._reactInternals=t,ja(t,r,e,n),t=Ra(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Ru(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vy(r),e=et(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=Cd(null,t,r,et(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Pd(e,t,r,i,n);case 3:e:{if(Ch(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kp(e,t),Bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pr(Error(C(423)),t),t=jd(e,t,r,n,i);break e}else if(r!==i){i=pr(Error(C(424)),t),t=jd(e,t,r,n,i);break e}else for(Fe=Yt(t.stateNode.containerInfo.firstChild),Ne=t,q=!0,nt=null,n=Jp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){t=Rt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Zp(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,va(r,i)?l=null:o!==null&&va(r,o)&&(t.flags|=32),Eh(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return Ph(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Ed(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,G(Mo,r._currentValue),r._currentValue=l,o!==null)if(st(o.value,l)){if(o.children===i.children&&!Re.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ct(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ca(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ca(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ir(t,n),i=Ke(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),Cd(e,t,r,i,n);case 15:return Sh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ho(e,t),t.tag=1,Le(r)?(e=!0,bo(t)):e=!1,ir(t,n),Xp(t,r,i),ja(t,r,i,n),Ra(null,t,r,!0,e,n);case 19:return jh(e,t,n);case 22:return kh(e,t,n)}throw Error(C(156,t.tag))};function Uh(e,t){return hp(e,t)}function Wy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Wy(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vy(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===vu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ju(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return En(n.children,i,o,t);case gu:l=8,i|=8;break;case Xs:return e=We(12,n,t,i|2),e.elementType=Xs,e.lanes=o,e;case qs:return e=We(13,n,t,i),e.elementType=qs,e.lanes=o,e;case Js:return e=We(19,n,t,i),e.elementType=Js,e.lanes=o,e;case qf:return yl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yf:l=10;break e;case Xf:l=9;break e;case yu:l=11;break e;case vu:l=14;break e;case Mt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=We(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=We(22,e,r,t),e.elementType=qf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function As(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ds(0),this.expirationTimes=ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,o,l,s,a){return e=new Gy(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(o),e}function Qy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hh(e){if(!e)return rn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Le(n))return Up(e,n,t)}return t}function Wh(e,t,n,r,i,o,l,s,a){return e=Zu(n,r,!0,e,i,o,l,s,a),e.context=Hh(null),n=e.current,r=Ce(),i=Jt(n),o=Ct(r,i),o.callback=t??null,Xt(n,o,i),e.current.lanes=i,Ci(e,i,r),Ae(e,r),e}function vl(e,t,n,r){var i=t.current,o=Ce(),l=Jt(i);return n=Hh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(i,t,l),e!==null&&(ot(e,i,l,o),co(e,i,l)),l}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function Ky(){return null}var Vh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}wl.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));vl(e,t,null,null)};wl.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){vl(null,e,null,null)}),t[Ot]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Ep(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Yy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Yo(l);o.call(u)}}var l=Wh(t,r,e,0,null,!1,!1,"",$d);return e._reactRootContainer=l,e[Ot]=l.current,ai(e.nodeType===8?e.parentNode:e),An(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Yo(a);s.call(u)}}var a=Zu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=a,e[Ot]=a.current,ai(e.nodeType===8?e.parentNode:e),An(function(){vl(t,a,n,r)}),a}function Sl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Yo(l);s.call(a)}}vl(t,l,e,i)}else l=Yy(n,t,e,i,r);return Yo(l)}wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(Su(t,n|1),Ae(t,re()),!(D&6)&&(hr=re()+500,un()))}break;case 13:An(function(){var r=_t(e,1);if(r!==null){var i=Ce();ot(r,e,1,i)}}),ec(e,1)}};ku=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ce();ot(t,e,134217728,n)}ec(e,134217728)}};xp=function(e){if(e.tag===13){var t=Jt(e),n=_t(e,t);if(n!==null){var r=Ce();ot(n,e,t,r)}ec(e,t)}};Sp=function(){return H};kp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};aa=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dl(r);if(!i)throw Error(C(90));Zf(r),ta(r,i)}}}break;case"textarea":tp(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};ap=Yu;up=An;var Xy={usingClientEntryPoint:!1,Events:[ji,Vn,dl,lp,sp,Yu]},br={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qy={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fp(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{sl=ro.inject(qy),ht=ro}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(C(200));return Qy(e,t,null,n)};$e.createRoot=function(e,t){if(!nc(e))throw Error(C(299));var n=!1,r="",i=Vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,ai(e.nodeType===8?e.parentNode:e),new tc(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=fp(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return An(e)};$e.hydrate=function(e,t,n){if(!xl(t))throw Error(C(200));return Sl(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Vh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wh(t,null,e,1,n??null,i,!1,o,l),e[Ot]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wl(t)};$e.render=function(e,t,n){if(!xl(t))throw Error(C(200));return Sl(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!xl(e))throw Error(C(40));return e._reactRootContainer?(An(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};$e.unstable_batchedUpdates=Yu;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Sl(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)}catch(e){console.error(e)}}Gh(),Wf.exports=$e;var Qh=Wf.exports,zd=Qh;Ks.createRoot=zd.createRoot,Ks.hydrateRoot=zd.hydrateRoot;var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Se.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",Zr="-moz-",U="-webkit-",Kh="comm",kl="rule",rc="decl",Jy="@import",Yh="@keyframes",Zy="@layer",ev=Math.abs,ic=String.fromCharCode,Ba=Object.assign;function tv(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function Xh(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function vo(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function mr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function qh(e){return e.length}function Ur(e,t){return t.push(e),e}function nv(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(n){return!xt(n,t)})}var El=1,gr=1,Jh=0,Xe=0,ie=0,Pr="";function Cl(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:El,column:gr,length:l,return:"",siblings:s}}function zt(e,t){return Ba(Cl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=zt(e.root,{children:[e]});Ur(e,e.siblings)}function rv(){return ie}function iv(){return ie=Xe>0?de(Pr,--Xe):0,gr--,ie===10&&(gr=1,El--),ie}function lt(){return ie=Xe<Jh?de(Pr,Xe++):0,gr++,ie===10&&(gr=1,El++),ie}function Cn(){return de(Pr,Xe)}function wo(){return Xe}function Pl(e,t){return mr(Pr,e,t)}function Ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ov(e){return El=gr=1,Jh=dt(Pr=e),Xe=0,[]}function lv(e){return Pr="",e}function Ts(e){return Xh(Pl(Xe-1,Ha(e===91?e+2:e===40?e+1:e)))}function sv(e){for(;(ie=Cn())&&ie<33;)lt();return Ua(e)>2||Ua(ie)>3?"":" "}function av(e,t){for(;--t&&lt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Pl(e,wo()+(t<6&&Cn()==32&&lt()==32))}function Ha(e){for(;lt();)switch(ie){case e:return Xe;case 34:case 39:e!==34&&e!==39&&Ha(ie);break;case 40:e===41&&Ha(e);break;case 92:lt();break}return Xe}function uv(e,t){for(;lt()&&e+ie!==47+10;)if(e+ie===42+42&&Cn()===47)break;return"/*"+Pl(t,Xe-1)+"*"+ic(e===47?e:lt())}function cv(e){for(;!Ua(Cn());)lt();return Pl(e,Xe)}function dv(e){return lv(xo("",null,null,null,[""],e=ov(e),0,[0],e))}function xo(e,t,n,r,i,o,l,s,a){for(var u=0,d=0,c=l,p=0,w=0,g=0,y=1,P=1,h=1,f=0,m="",x=i,E=o,O=r,k=m;P;)switch(g=f,f=lt()){case 40:if(g!=108&&de(k,c-1)==58){vo(k+=I(Ts(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Ts(f);break;case 9:case 10:case 13:case 32:k+=sv(g);break;case 92:k+=av(wo()-1,7);continue;case 47:switch(Cn()){case 42:case 47:Ur(fv(uv(lt(),wo()),t,n,a),a);break;default:k+="/"}break;case 123*y:s[u++]=dt(k)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+d:h==-1&&(k=I(k,/\f/g,"")),w>0&&dt(k)-c&&Ur(w>32?Bd(k+";",r,n,c-1,a):Bd(I(k," ","")+";",r,n,c-2,a),a);break;case 59:k+=";";default:if(Ur(O=Dd(k,t,n,u,d,i,s,m,x=[],E=[],c,o),o),f===123)if(d===0)xo(k,t,O,O,x,o,c,s,E);else switch(p===99&&de(k,3)===110?100:p){case 100:case 108:case 109:case 115:xo(e,O,O,r&&Ur(Dd(e,O,O,0,0,i,s,m,i,x=[],c,E),E),i,E,c,s,r?x:E);break;default:xo(k,O,O,O,[""],E,0,s,E)}}u=d=w=0,y=h=1,m=k="",c=l;break;case 58:c=1+dt(k),w=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&iv()==125)continue}switch(k+=ic(f),f*y){case 38:h=d>0?1:(k+="\f",-1);break;case 44:s[u++]=(dt(k)-1)*h,h=1;break;case 64:Cn()===45&&(k+=Ts(lt())),p=Cn(),d=c=dt(m=k+=cv(wo())),f++;break;case 45:g===45&&dt(k)==2&&(y=0)}}return o}function Dd(e,t,n,r,i,o,l,s,a,u,d,c){for(var p=i-1,w=i===0?o:[""],g=qh(w),y=0,P=0,h=0;y<r;++y)for(var f=0,m=mr(e,p+1,p=ev(P=l[y])),x=e;f<g;++f)(x=Xh(P>0?w[f]+" "+m:I(m,/&\f/g,w[f])))&&(a[h++]=x);return Cl(e,t,n,i===0?kl:s,a,u,d,c)}function fv(e,t,n,r){return Cl(e,t,n,Kh,ic(rv()),mr(e,2,-2),0,r)}function Bd(e,t,n,r,i){return Cl(e,t,n,rc,mr(e,0,r),mr(e,r+1,-1),r,i)}function Zh(e,t,n){switch(tv(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Zr+e+K+e+e;case 5936:switch(de(e,t+11)){case 114:return U+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+K+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+K+e+e;case 6165:return U+e+K+"flex-"+e+e;case 5187:return U+e+I(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return U+e+K+"flex-item-"+I(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":K+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return U+e+K+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+K+I(e,"shrink","negative")+e;case 5292:return U+e+K+I(e,"basis","preferred-size")+e;case 6060:return U+"box-"+I(e,"-grow","")+U+e+K+I(e,"grow","positive")+e;case 4554:return U+I(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!xt(e,/flex-|baseline/))return K+"grid-column-align"+mr(e,t)+e;break;case 2592:case 3360:return K+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xt(r.props,/grid-\w+-end/)})?~vo(e+(n=n[t].value),"span")?e:K+I(e,"-start","")+e+K+"grid-row-span:"+(~vo(n,"span")?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":K+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:K+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Zr+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vo(e,"stretch")?Zh(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return K+i+":"+o+u+(l?K+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(de(e,t+6)===121)return I(e,":",":"+U)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(de(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+K+"$2box$3")+e;case 100:return I(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Xo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pv(e,t,n,r){switch(e.type){case Zy:if(e.children.length)break;case Jy:case rc:return e.return=e.return||e.value;case Kh:return"";case Yh:return e.return=e.value+"{"+Xo(e.children,r)+"}";case kl:if(!dt(e.value=e.props.join(",")))return""}return dt(n=Xo(e.children,r))?e.return=e.value+"{"+n+"}":""}function hv(e){var t=qh(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function mv(e){return function(t){t.root||(t=t.return)&&e(t)}}function gv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rc:e.return=Zh(e.value,e.length,n);return;case Yh:return Xo([zt(e,{value:I(e.value,"@","@"+U)})],r);case kl:if(e.length)return nv(n=e.props,function(i){switch(xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(zt(e,{props:[I(i,/:(read-\w+)/,":"+Zr+"$1")]})),Mn(zt(e,{props:[i]})),Ba(e,{props:Md(n,r)});break;case"::placeholder":Mn(zt(e,{props:[I(i,/:(plac\w+)/,":"+U+"input-$1")]})),Mn(zt(e,{props:[I(i,/:(plac\w+)/,":"+Zr+"$1")]})),Mn(zt(e,{props:[I(i,/:(plac\w+)/,K+"input-$1")]})),Mn(zt(e,{props:[i]})),Ba(e,{props:Md(n,r)});break}return""})}}var yv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",oc=typeof window<"u"&&"HTMLElement"in window,vv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),jl=Object.freeze([]),vr=Object.freeze({});function wv(e,t,n){return n===void 0&&(n=vr),e.theme!==n.theme&&e.theme||t||n.theme}var em=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sv=/(^-|-$)/g;function Ud(e){return e.replace(xv,"-").replace(Sv,"")}var kv=/(a)(d)/gi,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hd(t%52)+n;return(Hd(t%52)+n).replace(kv,"$1-$2")}var Fs,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tm=function(e){return Jn(5381,e)};function nm(e){return Wa(tm(e)>>>0)}function Ev(e){return e.displayName||e.name||"Component"}function Ns(e){return typeof e=="string"&&!0}var rm=typeof Symbol=="function"&&Symbol.for,im=rm?Symbol.for("react.memo"):60115,Cv=rm?Symbol.for("react.forward_ref"):60112,Pv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ov=((Fs={})[Cv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fs[im]=om,Fs);function Wd(e){return("type"in(t=e)&&t.type.$$typeof)===im?om:"$$typeof"in e?Ov[e.$$typeof]:Pv;var t}var _v=Object.defineProperty,Rv=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,Lv=Object.getOwnPropertyDescriptor,Av=Object.getPrototypeOf,Gd=Object.prototype;function lm(e,t,n){if(typeof t!="string"){if(Gd){var r=Av(t);r&&r!==Gd&&lm(e,r,n)}var i=Rv(t);Vd&&(i=i.concat(Vd(t)));for(var o=Wd(e),l=Wd(t),s=0;s<i.length;++s){var a=i[s];if(!(a in jv||n&&n[a]||l&&a in l||o&&a in o)){var u=Lv(t,a);try{_v(e,a,u)}catch{}}}}return e}function Tn(e){return typeof e=="function"}function lc(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ga(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ga(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=Ga(e[r],t[r]);return e}function sc(e,t){Object.defineProperty(e,"toString",{value:t})}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Tv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),So=new Map,qo=new Map,ko=1,io=function(e){if(So.has(e))return So.get(e);for(;qo.has(ko);)ko++;var t=ko++;return So.set(e,t),qo.set(t,e),t},Fv=function(e,t){ko=t+1,So.set(e,t),qo.set(t,e)},Nv="style[".concat(yr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Iv=new RegExp("^".concat(yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},$v=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(Iv);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(Fv(d,u),bv(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function zv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(yr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(yr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=zv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Mv=function(){function e(t){this.element=sm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Dv=function(){function e(t){this.element=sm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Bv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=oc,Uv={isServer:!oc,useCSSOMInjection:!vv},am=function(){function e(t,n,r){t===void 0&&(t=vr),n===void 0&&(n={});var i=this;this.options=Se(Se({},Uv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oc&&Qd&&(Qd=!1,function(o){for(var l=document.querySelectorAll(Nv),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(yr)!=="active"&&($v(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sc(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(c){var p=function(h){return qo.get(h)}(c);if(p===void 0)return"continue";var w=o.names.get(p),g=l.getGroup(c);if(w===void 0||g.length===0)return"continue";var y="".concat(yr,".g").concat(c,'[id="').concat(p,'"]'),P="";w!==void 0&&w.forEach(function(h){h.length>0&&(P+="".concat(h,","))}),a+="".concat(g).concat(y,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return a}(i)})}return e.registerId=function(t){return io(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Bv(i):r?new Mv(i):new Dv(i)}(this.options),new Tv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(io(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Hv=/&/g,Wv=/^\s*\/\/.*$/gm;function um(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=um(n.children,t)),n})}function Vv(e){var t,n,r,i=e===void 0?vr:e,o=i.options,l=o===void 0?vr:o,s=i.plugins,a=s===void 0?jl:s,u=function(p,w,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},d=a.slice();d.push(function(p){p.type===kl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Hv,n).replace(r,u))}),l.prefix&&d.push(gv),d.push(pv);var c=function(p,w,g,y){w===void 0&&(w=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(Wv,""),h=dv(g||w?"".concat(g," ").concat(w," { ").concat(P," }"):P);l.namespace&&(h=um(h,l.namespace));var f=[];return Xo(h,hv(d.concat(mv(function(m){return f.push(m)})))),f};return c.hash=a.length?a.reduce(function(p,w){return w.name||Fn(15),Jn(p,w.name)},5381).toString():"",c}var Gv=new am,Qa=Vv(),cm=jn.createContext({shouldForwardProp:void 0,styleSheet:Gv,stylis:Qa});cm.Consumer;jn.createContext(void 0);function Kd(){return A.useContext(cm)}var dm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sc(this,function(){throw Fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qa),this.name+t.hash},e}(),Qv=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Qv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fm=function(e){return e==null||e===!1||e===""},pm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!fm(o)&&(Array.isArray(o)&&o.isCss||Tn(o)?r.push("".concat(Yd(i),":"),o,";"):vi(o)?r.push.apply(r,yi(yi(["".concat(i," {")],pm(o),!1),["}"],!1)):r.push("".concat(Yd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in yv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pn(e,t,n,r){if(fm(e))return[];if(lc(e))return[".".concat(e.styledComponentId)];if(Tn(e)){if(!Tn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Pn(i,t,n,r)}var o;return e instanceof dm?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?pm(e):Array.isArray(e)?Array.prototype.concat.apply(jl,e.map(function(l){return Pn(l,t,n,r)})):[e.toString()]}function Kv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Tn(n)&&!lc(n))return!1}return!0}var Yv=tm("6.1.1"),Xv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Kv(t),this.componentId=n,this.baseHash=Jn(Yv,n),this.baseStyle=r,am.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Sn(i,this.staticRulesId);else{var o=Va(Pn(this.rules,t,n,r)),l=Wa(Jn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Sn(i,l),this.staticRulesId=l}else{for(var a=Jn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var p=Va(Pn(c,t,n,r));a=Jn(a,p+d),u+=p}}if(u){var w=Wa(a>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=Sn(i,w)}}return i},e}(),Jo=jn.createContext(void 0);Jo.Consumer;function qv(e){var t=jn.useContext(Jo),n=A.useMemo(function(){return function(r,i){if(!r)throw Fn(14);if(Tn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fn(8);return i?Se(Se({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?jn.createElement(Jo.Provider,{value:n},e.children):null}var Is={};function Jv(e,t,n){var r=lc(e),i=e,o=!Ns(e),l=t.attrs,s=l===void 0?jl:l,a=t.componentId,u=a===void 0?function(x,E){var O=typeof x!="string"?"sc":Ud(x);Is[O]=(Is[O]||0)+1;var k="".concat(O,"-").concat(nm("6.1.1"+O+Is[O]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):a,d=t.displayName,c=d===void 0?function(x){return Ns(x)?"styled.".concat(x):"Styled(".concat(Ev(x),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Ud(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;g=function(x,E){return y(x,E)&&P(x,E)}}else g=y}var h=new Xv(n,p,r?i.componentStyle:void 0);function f(x,E){return function(O,k,L){var M=O.attrs,T=O.componentStyle,se=O.defaultProps,dn=O.foldedComponentIds,fn=O.styledComponentId,Mi=O.target,is=jn.useContext(Jo),_r=Kd(),pn=O.shouldForwardProp||_r.shouldForwardProp,_=function(De,vt,Be){for(var at,hn=Se(Se({},vt),{className:void 0,theme:Be}),os=0;os<De.length;os+=1){var Di=Tn(at=De[os])?at(hn):at;for(var It in Di)hn[It]=It==="className"?Sn(hn[It],Di[It]):It==="style"?Se(Se({},hn[It]),Di[It]):Di[It]}return vt.className&&(hn.className=Sn(hn.className,vt.className)),hn}(M,k,wv(k,is,se)||vr),F=_.as||Mi,N={};for(var B in _)_[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?N.as=_.forwardedAs:pn&&!pn(B,F)||(N[B]=_[B]));var ne=function(De,vt){var Be=Kd(),at=De.generateAndInjectStyles(vt,Be.styleSheet,Be.stylis);return at}(T,_),Nt=Sn(dn,fn);return ne&&(Nt+=" "+ne),_.className&&(Nt+=" "+_.className),N[Ns(F)&&!em.has(F)?"class":"className"]=Nt,N.ref=L,A.createElement(F,N)}(m,x,E)}f.displayName=c;var m=jn.forwardRef(f);return m.attrs=w,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=g,m.foldedComponentIds=r?Sn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var O=[],k=1;k<arguments.length;k++)O[k-1]=arguments[k];for(var L=0,M=O;L<M.length;L++)Ga(E,M[L],!0);return E}({},i.defaultProps,x):x}}),sc(m,function(){return".".concat(m.styledComponentId)}),o&&lm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Xd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qd=function(e){return Object.assign(e,{isCss:!0})};function hm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Tn(e)||vi(e)){var r=e;return qd(Pn(Xd(jl,yi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Pn(i):qd(Pn(Xd(i,t)))}function Ka(e,t,n){if(n===void 0&&(n=vr),!t)throw Fn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,hm.apply(void 0,yi([i],o,!1)))};return r.attrs=function(i){return Ka(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ka(e,t,Se(Se({},n),i))},r}var mm=function(e){return Ka(Jv,e)},j=mm;em.forEach(function(e){j[e]=mm(e)});function ac(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Va(hm.apply(void 0,yi([e],t,!1))),i=nm(r);return new dm(i,r)}const Zv=j.div`
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
`,e1=j.div`
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
`,t1=j.div`
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
`,Ol=j.div`
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
`,n1=j.div`
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
`,r1=j.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  height: 90%;
  gap: 2vh;
  justify-content: space-between;
  align-items: center;
`,i1=j.div`
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
`,o1=ac`
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
  animation: ${o1} 3s linear infinite;

  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
  }
`,a1=j.div`
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
`,u1=j.div`
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
`,c1=j.div`
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
`;var gm={exports:{}},ym={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=A;function d1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var f1=typeof Object.is=="function"?Object.is:d1,p1=wr.useState,h1=wr.useEffect,m1=wr.useLayoutEffect,g1=wr.useDebugValue;function y1(e,t){var n=t(),r=p1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return m1(function(){i.value=n,i.getSnapshot=t,bs(i)&&o({inst:i})},[e,n,t]),h1(function(){return bs(i)&&o({inst:i}),e(function(){bs(i)&&o({inst:i})})},[e]),g1(n),n}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!f1(e,n)}catch{return!0}}function v1(e,t){return t()}var w1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?v1:y1;ym.useSyncExternalStore=wr.useSyncExternalStore!==void 0?wr.useSyncExternalStore:w1;gm.exports=ym;var x1=gm.exports,vm={exports:{}},wm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=A,S1=x1;function k1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var E1=typeof Object.is=="function"?Object.is:k1,C1=S1.useSyncExternalStore,P1=_l.useRef,j1=_l.useEffect,O1=_l.useMemo,_1=_l.useDebugValue;wm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=P1(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=O1(function(){function a(w){if(!u){if(u=!0,d=w,w=r(w),i!==void 0&&l.hasValue){var g=l.value;if(i(g,w))return c=g}return c=w}if(g=c,E1(d,w))return g;var y=r(w);return i!==void 0&&i(g,y)?g:(d=w,c=y)}var u=!1,d,c,p=n===void 0?null:n;return[function(){return a(t())},p===null?void 0:function(){return a(p())}]},[t,n,r,i]);var s=C1(e,o[0],o[1]);return j1(function(){l.hasValue=!0,l.value=s},[s]),_1(s),s};vm.exports=wm;var R1=vm.exports;function L1(e){e()}let xm=L1;const A1=e=>xm=e,T1=()=>xm,Jd=Symbol.for("react-redux-context"),Zd=typeof globalThis<"u"?globalThis:{};function F1(){var e;if(!A.createContext)return{};const t=(e=Zd[Jd])!=null?e:Zd[Jd]=new Map;let n=t.get(A.createContext);return n||(n=A.createContext(null),t.set(A.createContext,n)),n}const on=F1();function uc(e=on){return function(){return A.useContext(e)}}const Sm=uc(),N1=()=>{throw new Error("uSES not initialized!")};let km=N1;const I1=e=>{km=e},b1=(e,t)=>e===t;function $1(e=on){const t=e===on?Sm:uc(e);return function(r,i={}){const{equalityFn:o=b1,stabilityCheck:l=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:d,stabilityCheck:c,noopCheck:p}=t();A.useRef(!0);const w=A.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,l]),g=km(u.addNestedSub,a.getState,d||a.getState,w,o);return A.useDebugValue(g),g}}const b=$1();var Em={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,cc=pe?Symbol.for("react.element"):60103,dc=pe?Symbol.for("react.portal"):60106,Rl=pe?Symbol.for("react.fragment"):60107,Ll=pe?Symbol.for("react.strict_mode"):60108,Al=pe?Symbol.for("react.profiler"):60114,Tl=pe?Symbol.for("react.provider"):60109,Fl=pe?Symbol.for("react.context"):60110,fc=pe?Symbol.for("react.async_mode"):60111,Nl=pe?Symbol.for("react.concurrent_mode"):60111,Il=pe?Symbol.for("react.forward_ref"):60112,bl=pe?Symbol.for("react.suspense"):60113,z1=pe?Symbol.for("react.suspense_list"):60120,$l=pe?Symbol.for("react.memo"):60115,zl=pe?Symbol.for("react.lazy"):60116,M1=pe?Symbol.for("react.block"):60121,D1=pe?Symbol.for("react.fundamental"):60117,B1=pe?Symbol.for("react.responder"):60118,U1=pe?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cc:switch(e=e.type,e){case fc:case Nl:case Rl:case Al:case Ll:case bl:return e;default:switch(e=e&&e.$$typeof,e){case Fl:case Il:case zl:case $l:case Tl:return e;default:return t}}case dc:return t}}}function Cm(e){return Me(e)===Nl}W.AsyncMode=fc;W.ConcurrentMode=Nl;W.ContextConsumer=Fl;W.ContextProvider=Tl;W.Element=cc;W.ForwardRef=Il;W.Fragment=Rl;W.Lazy=zl;W.Memo=$l;W.Portal=dc;W.Profiler=Al;W.StrictMode=Ll;W.Suspense=bl;W.isAsyncMode=function(e){return Cm(e)||Me(e)===fc};W.isConcurrentMode=Cm;W.isContextConsumer=function(e){return Me(e)===Fl};W.isContextProvider=function(e){return Me(e)===Tl};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cc};W.isForwardRef=function(e){return Me(e)===Il};W.isFragment=function(e){return Me(e)===Rl};W.isLazy=function(e){return Me(e)===zl};W.isMemo=function(e){return Me(e)===$l};W.isPortal=function(e){return Me(e)===dc};W.isProfiler=function(e){return Me(e)===Al};W.isStrictMode=function(e){return Me(e)===Ll};W.isSuspense=function(e){return Me(e)===bl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Rl||e===Nl||e===Al||e===Ll||e===bl||e===z1||typeof e=="object"&&e!==null&&(e.$$typeof===zl||e.$$typeof===$l||e.$$typeof===Tl||e.$$typeof===Fl||e.$$typeof===Il||e.$$typeof===D1||e.$$typeof===B1||e.$$typeof===U1||e.$$typeof===M1)};W.typeOf=Me;Em.exports=W;var H1=Em.exports,Pm=H1,W1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jm={};jm[Pm.ForwardRef]=W1;jm[Pm.Memo]=V1;var V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),hc=Symbol.for("react.portal"),Ml=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Ul=Symbol.for("react.provider"),Hl=Symbol.for("react.context"),G1=Symbol.for("react.server_context"),Wl=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Kl=Symbol.for("react.lazy"),Q1=Symbol.for("react.offscreen"),Om;Om=Symbol.for("react.module.reference");function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Ml:case Bl:case Dl:case Vl:case Gl:return e;default:switch(e=e&&e.$$typeof,e){case G1:case Hl:case Wl:case Kl:case Ql:case Ul:return e;default:return t}}case hc:return t}}}V.ContextConsumer=Hl;V.ContextProvider=Ul;V.Element=pc;V.ForwardRef=Wl;V.Fragment=Ml;V.Lazy=Kl;V.Memo=Ql;V.Portal=hc;V.Profiler=Bl;V.StrictMode=Dl;V.Suspense=Vl;V.SuspenseList=Gl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return qe(e)===Hl};V.isContextProvider=function(e){return qe(e)===Ul};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};V.isForwardRef=function(e){return qe(e)===Wl};V.isFragment=function(e){return qe(e)===Ml};V.isLazy=function(e){return qe(e)===Kl};V.isMemo=function(e){return qe(e)===Ql};V.isPortal=function(e){return qe(e)===hc};V.isProfiler=function(e){return qe(e)===Bl};V.isStrictMode=function(e){return qe(e)===Dl};V.isSuspense=function(e){return qe(e)===Vl};V.isSuspenseList=function(e){return qe(e)===Gl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ml||e===Bl||e===Dl||e===Vl||e===Gl||e===Q1||typeof e=="object"&&e!==null&&(e.$$typeof===Kl||e.$$typeof===Ql||e.$$typeof===Ul||e.$$typeof===Hl||e.$$typeof===Wl||e.$$typeof===Om||e.getModuleId!==void 0)};V.typeOf=qe;function K1(){const e=T1();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const ef={notify(){},get:()=>[]};function Y1(e,t){let n,r=ef,i=0,o=!1;function l(y){d();const P=r.subscribe(y);let h=!1;return()=>{h||(h=!0,P(),c())}}function s(){r.notify()}function a(){g.onStateChange&&g.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(a):e.subscribe(a),r=K1())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=ef)}function p(){o||(o=!0,d())}function w(){o&&(o=!1,c())}const g={addNestedSub:l,notifyNestedSubs:s,handleChangeWrapper:a,isSubscribed:u,trySubscribe:p,tryUnsubscribe:w,getListeners:()=>r};return g}const X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q1=X1?A.useLayoutEffect:A.useEffect;function J1({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const l=A.useMemo(()=>{const u=Y1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),s=A.useMemo(()=>e.getState(),[e]);q1(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,s]);const a=t||on;return A.createElement(a.Provider,{value:l},n)}function _m(e=on){const t=e===on?Sm:uc(e);return function(){const{store:r}=t();return r}}const Z1=_m();function ew(e=on){const t=e===on?Z1:_m(e);return function(){return t().dispatch}}const cn=ew();I1(R1.useSyncExternalStoreWithSelector);A1(Qh.unstable_batchedUpdates);const _i=j.div`
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
`,Rm=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 600px) {
  }
`,tw=j.img`
  width: 55%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
`,nw=j.div`
  height: 100%;
  display: flex;
  justify-content: center;
`,rw=j.img`
  object-fit: cover;
  width: 100%;
`,iw=j.div`
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
`,Lm=j.img`
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
`,ow=j.img`
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
`,Am=j.div`
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
`,Tm=j.div`
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
`,aw=j.div`
  color: white;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`,uw=j.img`
  width: 1vw;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    width: 3vw;
  }

  @media screen and (max-width: 600px) {
    width: 4vw;
  }
`,cw=j.button`
  background-color: transparent;
  border: none;
`,dw=j.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${mc} 1s ease-out;
  position: relative;
`,fw=j.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`,pw=j.button`
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
`,hw=j.button`
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
`;const Ri=j.div`
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
`,mw=j.div`
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
`,gw=j.div`
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
`,vw=j.div`
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
`,ww=j.div`
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
`,xw=j.div`
  display: flex;
  gap: 10px;
  font-family: 'RetroGaming', sans-serif;
  justify-content: space-around;

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 90%;
    gap: 5px;
  }
`,Sw=j.div`
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
`,kw=j.div`
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
`;const Ew=j.div`
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
`,Cw=j.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 0;
`,Pw=j.li`
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
`,jw=j.div`
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
`,Aw=j.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Tw=j.div`
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
`;const Fw={kanto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/kanto.png",johto:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191839/maps/johtoLarger.jpg",hoenn:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186873/maps/hoenn.png",sinnoh:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/sinnoh.png",unova:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/unova.png",kalos:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/kalos.png",alola:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186872/maps/alola.png",galar:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701186874/maps/galar.png",hisui:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701191298/maps/hisuiLarge.png",paldea:"https://res.cloudinary.com/dtglidvcw/image/upload/v1701187942/maps/paldea.png"};function Nw(){const e=b(o=>o.pokemon.selectedPokemon),[t,n]=A.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return v.jsxs(Ri,{children:[e.name&&v.jsx(Rm,{src:e.image,alt:"selectedPokemon",onClick:r},e.id),t&&v.jsx(Am,{onClick:i,children:v.jsx(Tm,{children:v.jsx(sw,{src:e.image,alt:"Pokemon Image"})})})]})}function Iw(){const e=b(n=>n.type.selectedType);function t(n){return"types/"+n.toLowerCase()+".svg"}return v.jsx(tw,{src:t(e),alt:"selectedPokemon"},e)}function bw(){var t,n;const e=b(r=>r.item.selectedItem);return v.jsxs(Ri,{children:[v.jsx($n,{style:{color:"white"},children:e.name.toUpperCase()}),v.jsx(ow,{src:(t=e.sprites)==null?void 0:t.default,alt:"selectedItem"},e.id),v.jsxs(c1,{children:["Category:",v.jsx(u1,{children:(n=e.category)==null?void 0:n.name.toUpperCase()})]})]})}function $w(){const e=b(s=>s.regions.lists.selected),[t,n]=A.useState("");A.useEffect(()=>{n(Fw[e.name])},[e.name]);const[r,i]=A.useState(!1),o=()=>{i(!0)},l=()=>{i(!1)};return v.jsxs(Ri,{children:[v.jsxs(nw,{children:[v.jsx(iw,{children:e.name.toUpperCase()}),v.jsx(rw,{src:t,onClick:o})]}),r&&v.jsx(Am,{onClick:l,children:v.jsx(Tm,{children:v.jsx(lw,{src:t,alt:"Region Map"})})})]})}function zw(){const e=()=>{window.open("https://github.com/brunomachadors","_blank")};return v.jsxs(v.Fragment,{children:[v.jsx(Rm,{src:"https://i.gifer.com/4tym.gif",id:"pikachuGif"}),v.jsx(cw,{onClick:e,children:v.jsxs(aw,{id:"gitAccount",children:[v.jsx(uw,{src:"icons/git.png"}),"/brunomachadors".toUpperCase()]})})]})}function rt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ln(e){return!!e&&!!e[X]}function Lt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Qw}(e)||Array.isArray(e)||!!e[uf]||!!(!((t=e.constructor)===null||t===void 0)&&t[uf])||gc(e)||yc(e))}function Nn(e,t,n){n===void 0&&(n=!1),jr(e)===0?(n?Object.keys:sr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function jr(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:gc(e)?2:yc(e)?3:0}function lr(e,t){return jr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Mw(e,t){return jr(e)===2?e.get(t):e[t]}function Fm(e,t,n){var r=jr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Nm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function gc(e){return Vw&&e instanceof Map}function yc(e){return Gw&&e instanceof Set}function yn(e){return e.o||e.t}function vc(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=bm(e);delete t[X];for(var n=sr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function wc(e,t){return t===void 0&&(t=!1),xc(e)||ln(e)||!Lt(e)||(jr(e)>1&&(e.set=e.add=e.clear=e.delete=Dw),Object.freeze(e),t&&Nn(e,function(n,r){return wc(r,!0)},!0)),e}function Dw(){rt(2)}function xc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function gt(e){var t=Ja[e];return t||rt(18,e),t}function Bw(e,t){Ja[e]||(Ja[e]=t)}function Ya(){return wi}function $s(e,t){t&&(gt("Patches"),e.u=[],e.s=[],e.v=t)}function Zo(e){Xa(e),e.p.forEach(Uw),e.p=null}function Xa(e){e===wi&&(wi=e.l)}function nf(e){return wi={p:[],l:wi,h:e,m:!0,_:0}}function Uw(e){var t=e[X];t.i===0||t.i===1?t.j():t.g=!0}function zs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||gt("ES5").S(t,e,r),r?(n[X].P&&(Zo(t),rt(4)),Lt(e)&&(e=el(t,e),t.l||tl(t,e)),t.u&&gt("Patches").M(n[X].t,e,t.u,t.s)):e=el(t,n,[]),Zo(t),t.u&&t.v(t.u,t.s),e!==Im?e:void 0}function el(e,t,n){if(xc(t))return t;var r=t[X];if(!r)return Nn(t,function(s,a){return rf(e,r,t,s,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return tl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=vc(r.k):r.o,o=i,l=!1;r.i===3&&(o=new Set(i),i.clear(),l=!0),Nn(o,function(s,a){return rf(e,r,i,s,a,n,l)}),tl(e,i,!1),n&&e.u&&gt("Patches").N(r,n,e.u,e.s)}return r.o}function rf(e,t,n,r,i,o,l){if(ln(i)){var s=el(e,i,o&&t&&t.i!==3&&!lr(t.R,r)?o.concat(r):void 0);if(Fm(n,r,s),!ln(s))return;e.m=!1}else l&&n.add(i);if(Lt(i)&&!xc(i)){if(!e.h.D&&e._<1)return;el(e,i),t&&t.A.l||tl(e,i)}}function tl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&wc(t,n)}function Ms(e,t){var n=e[X];return(n?yn(n):e)[t]}function of(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ht(e){e.P||(e.P=!0,e.l&&Ht(e.l))}function Ds(e){e.o||(e.o=vc(e.t))}function qa(e,t,n){var r=gc(t)?gt("MapSet").F(t,n):yc(t)?gt("MapSet").T(t,n):e.O?function(i,o){var l=Array.isArray(i),s={i:l?1:0,A:o?o.A:Ya(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},a=s,u=xi;l&&(a=[s],u=Hr);var d=Proxy.revocable(a,u),c=d.revoke,p=d.proxy;return s.k=p,s.j=c,p}(t,n):gt("ES5").J(t,n);return(n?n.A:Ya()).p.push(r),r}function Hw(e){return ln(e)||rt(22,e),function t(n){if(!Lt(n))return n;var r,i=n[X],o=jr(n);if(i){if(!i.P&&(i.i<4||!gt("ES5").K(i)))return i.t;i.I=!0,r=lf(n,o),i.I=!1}else r=lf(n,o);return Nn(r,function(l,s){i&&Mw(i.t,l)===s||Fm(r,l,t(s))}),o===3?new Set(r):r}(e)}function lf(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return vc(e)}function Ww(){function e(o,l){var s=i[o];return s?s.enumerable=l:i[o]=s={configurable:!0,enumerable:l,get:function(){var a=this[X];return xi.get(a,o)},set:function(a){var u=this[X];xi.set(u,o,a)}},s}function t(o){for(var l=o.length-1;l>=0;l--){var s=o[l][X];if(!s.P)switch(s.i){case 5:r(s)&&Ht(s);break;case 4:n(s)&&Ht(s)}}}function n(o){for(var l=o.t,s=o.k,a=sr(s),u=a.length-1;u>=0;u--){var d=a[u];if(d!==X){var c=l[d];if(c===void 0&&!lr(l,d))return!0;var p=s[d],w=p&&p[X];if(w?w.t!==c:!Nm(p,c))return!0}}var g=!!l[X];return a.length!==sr(l).length+(g?0:1)}function r(o){var l=o.k;if(l.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(l,l.length-1);if(s&&!s.get)return!0;for(var a=0;a<l.length;a++)if(!l.hasOwnProperty(a))return!0;return!1}var i={};Bw("ES5",{J:function(o,l){var s=Array.isArray(o),a=function(d,c){if(d){for(var p=Array(c.length),w=0;w<c.length;w++)Object.defineProperty(p,""+w,e(w,!0));return p}var g=bm(c);delete g[X];for(var y=sr(g),P=0;P<y.length;P++){var h=y[P];g[h]=e(h,d||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,o),u={i:s?5:4,A:l?l.A:Ya(),P:!1,I:!1,R:{},l,t:o,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,X,{value:u,writable:!0}),a},S:function(o,l,s){s?ln(l)&&l[X].A===o&&t(o.p):(o.u&&function a(u){if(u&&typeof u=="object"){var d=u[X];if(d){var c=d.t,p=d.k,w=d.R,g=d.i;if(g===4)Nn(p,function(m){m!==X&&(c[m]!==void 0||lr(c,m)?w[m]||a(p[m]):(w[m]=!0,Ht(d)))}),Nn(c,function(m){p[m]!==void 0||lr(p,m)||(w[m]=!1,Ht(d))});else if(g===5){if(r(d)&&(Ht(d),w.length=!0),p.length<c.length)for(var y=p.length;y<c.length;y++)w[y]=!1;else for(var P=c.length;P<p.length;P++)w[P]=!0;for(var h=Math.min(p.length,c.length),f=0;f<h;f++)p.hasOwnProperty(f)||(w[f]=!0),w[f]===void 0&&a(p[f])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var sf,wi,Sc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Vw=typeof Map<"u",Gw=typeof Set<"u",af=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Im=Sc?Symbol.for("immer-nothing"):((sf={})["immer-nothing"]=!0,sf),uf=Sc?Symbol.for("immer-draftable"):"__$immer_draftable",X=Sc?Symbol.for("immer-state"):"__$immer_state",Qw=""+Object.prototype.constructor,sr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,bm=Object.getOwnPropertyDescriptors||function(e){var t={};return sr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ja={},xi={get:function(e,t){if(t===X)return e;var n=yn(e);if(!lr(n,t))return function(i,o,l){var s,a=of(o,l);return a?"value"in a?a.value:(s=a.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Lt(r)?r:r===Ms(e.t,t)?(Ds(e),e.o[t]=qa(e.A.h,r,e)):r},has:function(e,t){return t in yn(e)},ownKeys:function(e){return Reflect.ownKeys(yn(e))},set:function(e,t,n){var r=of(yn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ms(yn(e),t),o=i==null?void 0:i[X];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Nm(n,i)&&(n!==void 0||lr(e.t,t)))return!0;Ds(e),Ht(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ms(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ds(e),Ht(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=yn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){rt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){rt(12)}},Hr={};Nn(xi,function(e,t){Hr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Hr.deleteProperty=function(e,t){return Hr.set.call(this,e,t,void 0)},Hr.set=function(e,t,n){return xi.set.call(this,e[0],t,n,e[0])};var Kw=function(){function e(n){var r=this;this.O=af,this.D=!0,this.produce=function(i,o,l){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var a=r;return function(y){var P=this;y===void 0&&(y=s);for(var h=arguments.length,f=Array(h>1?h-1:0),m=1;m<h;m++)f[m-1]=arguments[m];return a.produce(y,function(x){var E;return(E=o).call.apply(E,[P,x].concat(f))})}}var u;if(typeof o!="function"&&rt(6),l!==void 0&&typeof l!="function"&&rt(7),Lt(i)){var d=nf(r),c=qa(r,i,void 0),p=!0;try{u=o(c),p=!1}finally{p?Zo(d):Xa(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return $s(d,l),zs(y,d)},function(y){throw Zo(d),y}):($s(d,l),zs(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Im&&(u=void 0),r.D&&wc(u,!0),l){var w=[],g=[];gt("Patches").M(i,u,w,g),l(w,g)}return u}rt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,c=Array(d>1?d-1:0),p=1;p<d;p++)c[p-1]=arguments[p];return r.produceWithPatches(u,function(w){return i.apply(void 0,[w].concat(c))})};var l,s,a=r.produce(i,o,function(u,d){l=u,s=d});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,l,s]}):[a,l,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Lt(n)||rt(8),ln(n)&&(n=Hw(n));var r=nf(this),i=qa(this,n,void 0);return i[X].C=!0,Xa(r),i},t.finishDraft=function(n,r){var i=n&&n[X],o=i.A;return $s(o,r),zs(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!af&&rt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var l=gt("Patches").$;return ln(n)?l(n,r):this.produce(n,function(s){return l(s,r)})},e}(),be=new Kw,$m=be.produce;be.produceWithPatches.bind(be);be.setAutoFreeze.bind(be);be.setUseProxies.bind(be);be.applyPatches.bind(be);be.createDraft.bind(be);be.finishDraft.bind(be);function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function Yw(e,t){if(Si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xw(e){var t=Yw(e,"string");return Si(t)==="symbol"?t:String(t)}function qw(e,t,n){return t=Xw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function df(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cf(Object(n),!0).forEach(function(r){qw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function we(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ff=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Bs=function(){return Math.random().toString(36).substring(7).split("").join(".")},nl={INIT:"@@redux/INIT"+Bs(),REPLACE:"@@redux/REPLACE"+Bs(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Bs()}};function Jw(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function zm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(we(1));return n(zm)(e,t)}if(typeof e!="function")throw new Error(we(2));var i=e,o=t,l=[],s=l,a=!1;function u(){s===l&&(s=l.slice())}function d(){if(a)throw new Error(we(3));return o}function c(y){if(typeof y!="function")throw new Error(we(4));if(a)throw new Error(we(5));var P=!0;return u(),s.push(y),function(){if(P){if(a)throw new Error(we(6));P=!1,u();var f=s.indexOf(y);s.splice(f,1),l=null}}}function p(y){if(!Jw(y))throw new Error(we(7));if(typeof y.type>"u")throw new Error(we(8));if(a)throw new Error(we(9));try{a=!0,o=i(o,y)}finally{a=!1}for(var P=l=s,h=0;h<P.length;h++){var f=P[h];f()}return y}function w(y){if(typeof y!="function")throw new Error(we(10));i=y,p({type:nl.REPLACE})}function g(){var y,P=c;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(we(11));function m(){f.next&&f.next(d())}m();var x=P(m);return{unsubscribe:x}}},y[ff]=function(){return this},y}return p({type:nl.INIT}),r={dispatch:p,subscribe:c,getState:d,replaceReducer:w},r[ff]=g,r}function Zw(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:nl.INIT});if(typeof r>"u")throw new Error(we(12));if(typeof n(void 0,{type:nl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(we(13))})}function ex(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),l;try{Zw(n)}catch(s){l=s}return function(a,u){if(a===void 0&&(a={}),l)throw l;for(var d=!1,c={},p=0;p<o.length;p++){var w=o[p],g=n[w],y=a[w],P=g(y,u);if(typeof P>"u")throw u&&u.type,new Error(we(14));c[w]=P,d=d||P!==y}return d=d||o.length!==Object.keys(a).length,d?c:a}}function rl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function tx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(we(15))},l={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(a){return a(l)});return o=rl.apply(void 0,s)(i.dispatch),df(df({},i),{},{dispatch:o})}}}function Mm(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(l){return function(s){return typeof s=="function"?s(i,o,e):l(s)}}};return t}var Dm=Mm();Dm.withExtraArgument=Mm;const pf=Dm;var Bm=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),nx=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},xr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},rx=Object.defineProperty,ix=Object.defineProperties,ox=Object.getOwnPropertyDescriptors,hf=Object.getOwnPropertySymbols,lx=Object.prototype.hasOwnProperty,sx=Object.prototype.propertyIsEnumerable,mf=function(e,t,n){return t in e?rx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},en=function(e,t){for(var n in t||(t={}))lx.call(t,n)&&mf(e,n,t[n]);if(hf)for(var r=0,i=hf(t);r<i.length;r++){var n=i[r];sx.call(t,n)&&mf(e,n,t[n])}return e},Us=function(e,t){return ix(e,ox(t))},ax=function(e,t,n){return new Promise(function(r,i){var o=function(a){try{s(n.next(a))}catch(u){i(u)}},l=function(a){try{s(n.throw(a))}catch(u){i(u)}},s=function(a){return a.done?r(a.value):Promise.resolve(a.value).then(o,l)};s((n=n.apply(e,t)).next())})},ux=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?rl:rl.apply(null,arguments)};function cx(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function tn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return en(en({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var dx=function(e){Bm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,xr([void 0],n[0].concat(this)))):new(t.bind.apply(t,xr([void 0],n.concat(this))))},t}(Array),fx=function(e){Bm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,xr([void 0],n[0].concat(this)))):new(t.bind.apply(t,xr([void 0],n.concat(this))))},t}(Array);function Za(e){return Lt(e)?$m(e,function(){}):e}function px(e){return typeof e=="boolean"}function hx(){return function(t){return mx(t)}}function mx(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new dx;return n&&(px(n)?r.push(pf):r.push(pf.withExtraArgument(n.extraArgument))),r}var gx=!0;function yx(e){var t=hx(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,l=o===void 0?t():o,s=n.devTools,a=s===void 0?!0:s,u=n.preloadedState,d=u===void 0?void 0:u,c=n.enhancers,p=c===void 0?void 0:c,w;if(typeof i=="function")w=i;else if(cx(i))w=ex(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=l;typeof g=="function"&&(g=g(t));var y=tx.apply(void 0,g),P=rl;a&&(P=ux(en({trace:!gx},typeof a=="object"&&a)));var h=new fx(y),f=h;Array.isArray(p)?f=xr([y],p):typeof p=="function"&&(f=p(h));var m=P.apply(void 0,f);return zm(w,d,m)}function Um(e){var t={},n=[],r,i={addCase:function(o,l){var s=typeof o=="string"?o:o.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=l,i},addMatcher:function(o,l){return n.push({matcher:o,reducer:l}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function vx(e){return typeof e=="function"}function wx(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Um(t):[t,n,r],o=i[0],l=i[1],s=i[2],a;if(vx(e))a=function(){return Za(e())};else{var u=Za(e);a=function(){return u}}function d(c,p){c===void 0&&(c=a());var w=xr([o[p.type]],l.filter(function(g){var y=g.matcher;return y(p)}).map(function(g){var y=g.reducer;return y}));return w.filter(function(g){return!!g}).length===0&&(w=[s]),w.reduce(function(g,y){if(y)if(ln(g)){var P=g,h=y(P,p);return h===void 0?g:h}else{if(Lt(g))return $m(g,function(f){return y(f,p)});var h=y(g,p);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return d.getInitialState=a,d}function xx(e,t){return e+"/"+t}function Tt(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Za(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},l={},s={};i.forEach(function(d){var c=r[d],p=xx(t,d),w,g;"reducer"in c?(w=c.reducer,g=c.prepare):w=c,o[d]=w,l[p]=w,s[d]=g?tn(p,g):tn(p)});function a(){var d=typeof e.extraReducers=="function"?Um(e.extraReducers):[e.extraReducers],c=d[0],p=c===void 0?{}:c,w=d[1],g=w===void 0?[]:w,y=d[2],P=y===void 0?void 0:y,h=en(en({},p),l);return wx(n,function(f){for(var m in h)f.addCase(m,h[m]);for(var x=0,E=g;x<E.length;x++){var O=E[x];f.addMatcher(O.matcher,O.reducer)}P&&f.addDefaultCase(P)})}var u;return{name:t,reducer:function(d,c){return u||(u=a()),u(d,c)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var Sx="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kx=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Sx[Math.random()*64|0];return t},Ex=["name","message","stack","code"],Hs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),gf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Cx=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Ex;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=tn(t+"/fulfilled",function(u,d,c,p){return{payload:u,meta:Us(en({},p||{}),{arg:c,requestId:d,requestStatus:"fulfilled"})}}),o=tn(t+"/pending",function(u,d,c){return{payload:void 0,meta:Us(en({},c||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),l=tn(t+"/rejected",function(u,d,c,p,w){return{payload:p,error:(r&&r.serializeError||Cx)(u||"Rejected"),meta:Us(en({},w||{}),{arg:c,requestId:d,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function a(u){return function(d,c,p){var w=r!=null&&r.idGenerator?r.idGenerator(u):kx(),g=new s,y;function P(f){y=f,g.abort()}var h=function(){return ax(this,null,function(){var f,m,x,E,O,k,L;return nx(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),E=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:c,extra:p}),jx(E)?[4,E]:[3,2];case 1:E=M.sent(),M.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return O=new Promise(function(T,se){return g.signal.addEventListener("abort",function(){return se({name:"AbortError",message:y||"Aborted"})})}),d(o(w,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:w,arg:u},{getState:c,extra:p}))),[4,Promise.race([O,Promise.resolve(n(u,{dispatch:d,getState:c,extra:p,requestId:w,signal:g.signal,abort:P,rejectWithValue:function(T,se){return new Hs(T,se)},fulfillWithValue:function(T,se){return new gf(T,se)}})).then(function(T){if(T instanceof Hs)throw T;return T instanceof gf?i(T.payload,w,u,T.meta):i(T,w,u)})])];case 3:return x=M.sent(),[3,5];case 4:return k=M.sent(),x=k instanceof Hs?l(null,w,u,k.payload,k.meta):l(k,w,u),[3,5];case 5:return L=r&&!r.dispatchConditionRejection&&l.match(x)&&x.meta.condition,L||d(x),[2,x]}})})}();return Object.assign(h,{abort:P,requestId:w,arg:u,unwrap:function(){return h.then(Px)}})}}return Object.assign(a,{pending:o,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Px(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function jx(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var kc="listenerMiddleware";tn(kc+"/add");tn(kc+"/removeAll");tn(kc+"/remove");var yf;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ww();const Ox={selectedMenu:"photo"},Hm=Tt({name:"infoMenu",initialState:Ox,reducers:{selectInfoMenu:(e,t)=>{e.selectedMenu=t.payload}}}),{selectInfoMenu:vf}=Hm.actions,_x=Hm.reducer,Je={colors:{background:{grass:"linear-gradient(to top, #67F70A, #204000, black)",fire:"linear-gradient(to top,  #D6CA23, #903F3F, black)",water:"linear-gradient(to top, #70A7F0, #557DEA, black)",poison:"linear-gradient(to top, #A819D7, #611380, black)",normal:"linear-gradient(to top, #CCC9AA, #ACA974, black)",bug:"linear-gradient(to top, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to top, #7AA9E8, black)",electric:"linear-gradient(to top, #D6CA23, black)",ground:"linear-gradient(to top, #B76D29, black)",fairy:"linear-gradient(to top, #FFA0C2, #F87EA7)",fighting:"linear-gradient(to top, #E81319, #800B11)",psychic:"linear-gradient(to top, #C82D5B, black)",rock:"linear-gradient(to top, #6C644F, black)",ghost:"linear-gradient(to top, #BD98CB, #816A9F, black)",ice:"linear-gradient(to top, #66D1E5, #176F73, black)",dragon:"linear-gradient(to top, #8A55FD, #7241E4, black)",steel:"linear-gradient(to top, #BBC5C4, #A0A0A0, #454545)",dark:"linear-gradient(to top, #5F4632, black)"},type:{grass:"linear-gradient(to right, #3E9709, #4BB36F)",fire:"linear-gradient(to right, #F67F0B, #F8B80E)",water:"linear-gradient(to right, #557DEA, #70A7F0)",poison:"linear-gradient(to right, #7A6696, #C89EC7)",normal:"linear-gradient(to right, #ACA974, #C5C5C5)",bug:"linear-gradient(to right, #D9FE9E, #BDDD6E, #91BA2E)",flying:"linear-gradient(to right, #7AA9E8, #B5D5F1)",electric:"linear-gradient(to right, #D6CA23, #FFFDB8)",ground:"linear-gradient(to right, #B76D29, #E78E4A)",fairy:"linear-gradient(to right, #F87EA7, #FFA0C2)",fighting:"linear-gradient(to right, #A85451, #D99C90)",psychic:"linear-gradient(to right, #C82D5B, #F67399)",rock:"linear-gradient(to right, #6C644F, #C2B993)",ghost:"linear-gradient(to right, #472B53, #B683B3)",ice:"linear-gradient(to right, #176F73, #9CE8F2)",dragon:"linear-gradient(to right, #7241E4, #A99EC3)",steel:"linear-gradient(to right, #A0A0A0, #454545)",dark:"linear-gradient(to right, #333333, #000000)"},buttonColor:{grass:"#2E6030",fire:"#8C3636",water:"#3B548A",poison:"#611380",normal:"#827F5A",bug:"#91BA2E",flying:"#759FCB",electric:"#E3D38E",ground:"#B9692B",fairy:"#CC38A3",fighting:"#E81319",psychic:"#C8436A",rock:"#8D8666",ghost:"#695D7E",ice:"#579AA9",dragon:"#70578B",steel:"#808080",dark:"#333333"},regionColorMap:{kanto:"linear-gradient(to right, #FF5733, #FF4500)",johto:"linear-gradient(to right, #FFD700, #C0C0C0)",hoenn:"linear-gradient(to right, #C0C0C0, #87CEEB)",sinnoh:"linear-gradient(to right, #87CEEB, #FF4500)",unova:"linear-gradient(to right, #FF4500, #008000)",kalos:"linear-gradient(to right, #008000, #CD5C5C)",alola:"linear-gradient(to right, #CD5C5C, #B0E0E6)",galar:"linear-gradient(to right, #B0E0E6, #FFA500)",hisui:"linear-gradient(to right, #FFA500, #9932CC)",paldea:"linear-gradient(to right, #9932CC, #8A2BE2)"},regionColorMapBackground:{kanto:"linear-gradient(to top, #FF5733, #FF4500, #000000)",johto:"linear-gradient(to top, #FFD700, #C0C0C0, #000000)",hoenn:"linear-gradient(to top, #C0C0C0, #87CEEB, #000000)",sinnoh:"linear-gradient(to top, #87CEEB, #FF4500, #000000)",unova:"linear-gradient(to top, #FF4500, #008000, #000000)",kalos:"linear-gradient(to top, #008000, #CD5C5C, #000000)",alola:"linear-gradient(to top, #CD5C5C, #B0E0E6, #000000)",galar:"linear-gradient(to top, #B0E0E6, #FFA500, #000000)",hisui:"linear-gradient(to top, #FFA500, #9932CC, #000000)",paldea:"linear-gradient(to top, #9932CC, #8A2BE2, #000000)"},itemTypeColorMap:{"stat-boosts":"#FFD700","effort-drop":"#FFA500",medicine:"#D3D3D3",other:"#B0C4DE","in-a-pinch":"#FF6347","picky-healing":"#7CFC00","type-protection":"#D2B48C","baking-only":"#D3D3D3",collectibles:"#FFDAB9",evolution:"#C71585",spelunking:"#98FB98","held-items":"#FFB6C1",choice:"#9370DB","effort-training":"#87CEEB","bad-held-items":"#CD853F",training:"#AFEEEE",plates:"#FF6347","species-specific":"#FFA07A","type-enhancement":"#8B4513","event-items":"#FFD700",gameplay:"#DCDCDC","plot-advancement":"#8A2BE2",unused:"#DCDCDC",loot:"#B8860B","all-mail":"#FFB6C1",vitamins:"#ADFF2F",healing:"#00FF7F","pp-recovery":"#6495ED",revival:"#FF6347","status-cures":"#00FA9A",mulch:"#DAA520","special-balls":"#8A2BE2","standard-balls":"#00BFFF","dex-completion":"#FFD700",scarves:"#FF69B4","all-machines":"#4682B4",flutes:"#87CEEB","apricorn-balls":"#00FF00","apricorn-box":"#FFD700","data-cards":"#8A2BE2",jewels:"#FF69B4","miracle-shooter":"#7B68EE","mega-stones":"#FF6347",memories:"#87CEFA","z-crystals":"#D8BFD8","species-candies":"#FF6347","catching-bonus":"#20B2AA","dynamax-crystals":"#FF8C00"},itemGradientMap:{"stat-boosts":"linear-gradient(to top, #FF9966, #FF4500, #000000)","effort-drop":"linear-gradient(to top, #FFD700, #DAA520, #000000)",medicine:"linear-gradient(to top, #CCCCCC, #A9A9A9, #000000)",other:"linear-gradient(to top, #A9D5EB, #4682B4, #000000)","in-a-pinch":"linear-gradient(to top, #FF6347, #8B0000, #000000)","picky-healing":"linear-gradient(to top, #7CFC00, #556B2F, #000000)","type-protection":"linear-gradient(to top, #D2B48C, #8B4513, #000000)","baking-only":"linear-gradient(to top, #B0C4DE, #696969, #000000)",collectibles:"linear-gradient(to top, #FFDAB9, #CD853F, #000000)",evolution:"linear-gradient(to top, #C71585, #8B008B, #000000)",spelunking:"linear-gradient(to top, #98FB98, #008000, #000000)","held-items":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",choice:"linear-gradient(to top, #9370DB, #4B0082, #000000)","effort-training":"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","bad-held-items":"linear-gradient(to top, #CD853F, #8B4513, #000000)",training:"linear-gradient(to top, #AFEEEE, #4682B4, #000000)",plates:"linear-gradient(to top, #FF6347, #8B4513, #000000)","species-specific":"linear-gradient(to top, #FFA07A, #CD5C5C, #000000)","type-enhancement":"linear-gradient(to top, #8B4513, #4B0082, #000000)","event-items":"linear-gradient(to top, #FFD700, #FF4500, #000000)",gameplay:"linear-gradient(to top, #D3D3D3, #A9A9A9, #000000)","plot-advancement":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",unused:"linear-gradient(to top, #808080, #696969, #000000)",loot:"linear-gradient(to top, #B8860B, #8B4513, #000000)","all-mail":"linear-gradient(to top, #FFB6C1, #FF69B4, #000000)",vitamins:"linear-gradient(to top, #ADFF2F, #556B2F, #000000)",healing:"linear-gradient(to top, #00FF7F, #008000, #000000)","pp-recovery":"linear-gradient(to top, #6495ED, #000080, #000000)",revival:"linear-gradient(to top, #FF6347, #8B4513, #000000)","status-cures":"linear-gradient(to top, #00FA9A, #008000, #000000)",mulch:"linear-gradient(to top, #DAA520, #8B4513, #000000)","special-balls":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)","standard-balls":"linear-gradient(to top, #00BFFF, #000080, #000000)","dex-completion":"linear-gradient(to top, #FFD700, #FF4500, #000000)",scarves:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","all-machines":"linear-gradient(to top, #4682B4, #000080, #000000)",flutes:"linear-gradient(to top, #87CEEB, #1E90FF, #000000)","apricorn-balls":"linear-gradient(to top, #00FF00, #008000, #000000)","apricorn-box":"linear-gradient(to top, #FFD700, #FF4500, #000000)","data-cards":"linear-gradient(to top, #8A2BE2, #4B0082, #000000)",jewels:"linear-gradient(to top, #FF69B4, #8B4513, #000000)","miracle-shooter":"linear-gradient(to top, #7B68EE, #4B0082, #000000)","mega-stones":"linear-gradient(to top, #FF6347, #8B4513, #000000)"}}},Wm=j.div`
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
`,Rx=j.div`
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
`;const il=j.img`
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
`;function Lx(e){return e.toLowerCase()+".svg"}function Ax({pokemon:e}){var t;return v.jsx(Rx,{id:"typeContainer",children:(t=e.types)==null?void 0:t.map((n,r)=>v.jsx(Wm,{color:Je.colors.buttonColor[n],children:v.jsxs(Vm,{children:[v.jsx(Gm,{src:Lx(n),alt:`${n} icon`,id:n}),n.toUpperCase()]})},r))})}function Qm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tx}=Object.prototype,{getPrototypeOf:Ec}=Object,Yl=(e=>t=>{const n=Tx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>Yl(t)===e),Xl=e=>t=>typeof t===e,{isArray:Or}=Array,ki=Xl("undefined");function Fx(e){return e!==null&&!ki(e)&&e.constructor!==null&&!ki(e.constructor)&&Ge(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Km=yt("ArrayBuffer");function Nx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Km(e.buffer),t}const Ix=Xl("string"),Ge=Xl("function"),Ym=Xl("number"),ql=e=>e!==null&&typeof e=="object",bx=e=>e===!0||e===!1,Eo=e=>{if(Yl(e)!=="object")return!1;const t=Ec(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$x=yt("Date"),zx=yt("File"),Mx=yt("Blob"),Dx=yt("FileList"),Bx=e=>ql(e)&&Ge(e.pipe),Ux=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ge(e.append)&&((t=Yl(e))==="formdata"||t==="object"&&Ge(e.toString)&&e.toString()==="[object FormData]"))},Hx=yt("URLSearchParams"),Wx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Li(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Or(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function Xm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const qm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jm=e=>!ki(e)&&e!==qm;function eu(){const{caseless:e}=Jm(this)&&this||{},t={},n=(r,i)=>{const o=e&&Xm(t,i)||i;Eo(t[o])&&Eo(r)?t[o]=eu(t[o],r):Eo(r)?t[o]=eu({},r):Or(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Li(arguments[r],n);return t}const Vx=(e,t,n,{allOwnKeys:r}={})=>(Li(t,(i,o)=>{n&&Ge(i)?e[o]=Qm(i,n):e[o]=i},{allOwnKeys:r}),e),Gx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Kx=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Ec(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Yx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Xx=e=>{if(!e)return null;if(Or(e))return e;let t=e.length;if(!Ym(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ec(Uint8Array)),Jx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Zx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},eS=yt("HTMLFormElement"),tS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),wf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nS=yt("RegExp"),Zm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Li(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},rS=e=>{Zm(e,(t,n)=>{if(Ge(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ge(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},iS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Or(e)?r(e):r(String(e).split(t)),n},oS=()=>{},lS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ws="abcdefghijklmnopqrstuvwxyz",xf="0123456789",e0={DIGIT:xf,ALPHA:Ws,ALPHA_DIGIT:Ws+Ws.toUpperCase()+xf},sS=(e=16,t=e0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function aS(e){return!!(e&&Ge(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const uS=e=>{const t=new Array(10),n=(r,i)=>{if(ql(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Or(r)?[]:{};return Li(r,(l,s)=>{const a=n(l,i+1);!ki(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},cS=yt("AsyncFunction"),dS=e=>e&&(ql(e)||Ge(e))&&Ge(e.then)&&Ge(e.catch),S={isArray:Or,isArrayBuffer:Km,isBuffer:Fx,isFormData:Ux,isArrayBufferView:Nx,isString:Ix,isNumber:Ym,isBoolean:bx,isObject:ql,isPlainObject:Eo,isUndefined:ki,isDate:$x,isFile:zx,isBlob:Mx,isRegExp:nS,isFunction:Ge,isStream:Bx,isURLSearchParams:Hx,isTypedArray:qx,isFileList:Dx,forEach:Li,merge:eu,extend:Vx,trim:Wx,stripBOM:Gx,inherits:Qx,toFlatObject:Kx,kindOf:Yl,kindOfTest:yt,endsWith:Yx,toArray:Xx,forEachEntry:Jx,matchAll:Zx,isHTMLForm:eS,hasOwnProperty:wf,hasOwnProp:wf,reduceDescriptors:Zm,freezeMethods:rS,toObjectSet:iS,toCamelCase:tS,noop:oS,toFiniteNumber:lS,findKey:Xm,global:qm,isContextDefined:Jm,ALPHABET:e0,generateString:sS,isSpecCompliantForm:aS,toJSONObject:uS,isAsyncFn:cS,isThenable:dS};function z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const t0=z.prototype,n0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{n0[e]={value:e}});Object.defineProperties(z,n0);Object.defineProperty(t0,"isAxiosError",{value:!0});z.from=(e,t,n,r,i,o)=>{const l=Object.create(t0);return S.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),z.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const fS=null;function tu(e){return S.isPlainObject(e)||S.isArray(e)}function r0(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Sf(e,t,n){return e?e.concat(t).map(function(i,o){return i=r0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function pS(e){return S.isArray(e)&&!e.some(tu)}const hS=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Jl(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,P){return!S.isUndefined(P[y])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!a&&S.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,y,P){let h=g;if(g&&!P&&typeof g=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&pS(g)||(S.isFileList(g)||S.endsWith(y,"[]"))&&(h=S.toArray(g)))return y=r0(y),h.forEach(function(m,x){!(S.isUndefined(m)||m===null)&&t.append(l===!0?Sf([y],x,o):l===null?y:y+"[]",u(m))}),!1}return tu(g)?!0:(t.append(Sf(P,y,o),u(g)),!1)}const c=[],p=Object.assign(hS,{defaultVisitor:d,convertValue:u,isVisitable:tu});function w(g,y){if(!S.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));c.push(g),S.forEach(g,function(h,f){(!(S.isUndefined(h)||h===null)&&i.call(t,h,S.isString(f)?f.trim():f,y,p))===!0&&w(h,y?y.concat(f):[f])}),c.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return w(e),t}function kf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Cc(e,t){this._pairs=[],e&&Jl(e,this,t)}const i0=Cc.prototype;i0.append=function(t,n){this._pairs.push([t,n])};i0.toString=function(t){const n=t?function(r){return t.call(this,r,kf)}:kf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function mS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function o0(e,t,n){if(!t)return e;const r=n&&n.encode||mS,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Cc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class gS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ef=gS,l0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yS=typeof URLSearchParams<"u"?URLSearchParams:Cc,vS=typeof FormData<"u"?FormData:null,wS=typeof Blob<"u"?Blob:null,xS={isBrowser:!0,classes:{URLSearchParams:yS,FormData:vS,Blob:wS},protocols:["http","https","file","blob","url","data"]},s0=typeof window<"u"&&typeof document<"u",SS=(e=>s0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),kS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ES=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:s0,hasStandardBrowserEnv:SS,hasStandardBrowserWebWorkerEnv:kS},Symbol.toStringTag,{value:"Module"})),pt={...ES,...xS};function CS(e,t){return Jl(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return pt.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function PS(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jS(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function a0(e){function t(n,r,i,o){let l=n[o++];const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&S.isArray(i)?i.length:l,a?(S.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!S.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&S.isArray(i[l])&&(i[l]=jS(i[l])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(PS(r),i,n,0)}),n}return null}function OS(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Pc={transitional:l0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(a0(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return CS(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Jl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),OS(t)):t}],transformResponse:[function(t){const n=this.transitional||Pc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?z.from(s,z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{Pc.headers[e]={}});const jc=Pc,_S=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),RS=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&_S[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Cf=Symbol("internals");function $r(e){return e&&String(e).trim().toLowerCase()}function Co(e){return e===!1||e==null?e:S.isArray(e)?e.map(Co):String(e)}function LS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const AS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Vs(e,t,n,r,i){if(S.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function TS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function FS(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Zl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,u){const d=$r(a);if(!d)throw new Error("header name must be a non-empty string");const c=S.findKey(i,d);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||a]=Co(s))}const l=(s,a)=>S.forEach(s,(u,d)=>o(u,d,a));return S.isPlainObject(t)||t instanceof this.constructor?l(t,n):S.isString(t)&&(t=t.trim())&&!AS(t)?l(RS(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=$r(t),t){const r=S.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return LS(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$r(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Vs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=$r(l),l){const s=S.findKey(r,l);s&&(!n||Vs(r,r[s],s,n))&&(delete r[s],i=!0)}}return S.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Vs(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return S.forEach(this,(i,o)=>{const l=S.findKey(r,o);if(l){n[l]=Co(i),delete n[o];return}const s=t?TS(o):String(o).trim();s!==o&&delete n[o],n[s]=Co(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Cf]=this[Cf]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=$r(l);r[s]||(FS(i,l),r[s]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}}Zl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Zl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(Zl);const Pt=Zl;function Gs(e,t){const n=this||jc,r=t||n,i=Pt.from(r.headers);let o=r.data;return S.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function u0(e){return!!(e&&e.__CANCEL__)}function Ai(e,t,n){z.call(this,e??"canceled",z.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Ai,z,{__CANCEL__:!0});function NS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const IS=pt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),S.isString(r)&&l.push("path="+r),S.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $S(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function c0(e,t){return e&&!bS(t)?$S(e,t):t}const zS=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=S.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function MS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function DS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];l||(l=u),n[i]=a,r[i]=u;let c=o,p=0;for(;c!==i;)p+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const w=d&&u-d;return w?Math.round(p*1e3/w):void 0}}function Pf(e,t){let n=0;const r=DS(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-n,a=r(s),u=o<=l;n=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:a||void 0,estimated:a&&l&&u?(l-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const BS=typeof XMLHttpRequest<"u",US=BS&&function(e){return new Promise(function(n,r){let i=e.data;const o=Pt.from(e.headers).normalize();let{responseType:l,withXSRFToken:s}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let d;if(S.isFormData(i)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[y,...P]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...P].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",P=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+P))}const p=c0(e.baseURL,e.url);c.open(e.method.toUpperCase(),o0(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const y=Pt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};NS(function(m){n(m),u()},function(m){r(m),u()},h),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new z("Request aborted",z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let P=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||l0;e.timeoutErrorMessage&&(P=e.timeoutErrorMessage),r(new z(P,h.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,c)),c=null},pt.hasStandardBrowserEnv&&(s&&S.isFunction(s)&&(s=s(e)),s||s!==!1&&zS(p))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&IS.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&S.forEach(o.toJSON(),function(P,h){c.setRequestHeader(h,P)}),S.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),l&&l!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Pf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Pf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{c&&(r(!y||y.type?new Ai(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=MS(p);if(g&&pt.protocols.indexOf(g)===-1){r(new z("Unsupported protocol "+g+":",z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},nu={http:fS,xhr:US};S.forEach(nu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const jf=e=>`- ${e}`,HS=e=>S.isFunction(e)||e===null||e===!1,d0={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!HS(n)&&(r=nu[(l=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(jf).join(`
`):" "+jf(o[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:nu};function Qs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ai(null,e)}function Of(e){return Qs(e),e.headers=Pt.from(e.headers),e.data=Gs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),d0.getAdapter(e.adapter||jc.adapter)(e).then(function(r){return Qs(e),r.data=Gs.call(e,e.transformResponse,r),r.headers=Pt.from(r.headers),r},function(r){return u0(r)||(Qs(e),r&&r.response&&(r.response.data=Gs.call(e,e.transformResponse,r.response),r.response.headers=Pt.from(r.response.headers))),Promise.reject(r)})}const _f=e=>e instanceof Pt?e.toJSON():e;function Sr(e,t){t=t||{};const n={};function r(u,d,c){return S.isPlainObject(u)&&S.isPlainObject(d)?S.merge.call({caseless:c},u,d):S.isPlainObject(d)?S.merge({},d):S.isArray(d)?d.slice():d}function i(u,d,c){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function o(u,d){if(!S.isUndefined(d))return r(void 0,d)}function l(u,d){if(S.isUndefined(d)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>i(_f(u),_f(d),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=a[d]||i,p=c(e[d],t[d],d);S.isUndefined(p)&&c!==s||(n[d]=p)}),n}const f0="1.6.2",Oc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Oc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Rf={};Oc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+f0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new z(i(l," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!Rf[l]&&(Rf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function WS(e,t,n){if(typeof e!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new z("option "+o+" must be "+a,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+o,z.ERR_BAD_OPTION)}}const ru={assertOptions:WS,validators:Oc},$t=ru.validators;class ol{constructor(t){this.defaults=t,this.interceptors={request:new Ef,response:new Ef}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Sr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ru.assertOptions(r,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:ru.assertOptions(i,{encode:$t.function,serialize:$t.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&S.merge(o.common,o[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Pt.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,c=0,p;if(!a){const g=[Of.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),p=g.length,d=Promise.resolve(n);c<p;)d=d.then(g[c++],g[c++]);return d}p=s.length;let w=n;for(c=0;c<p;){const g=s[c++],y=s[c++];try{w=g(w)}catch(P){y.call(this,P);break}}try{d=Of.call(this,w)}catch(g){return Promise.reject(g)}for(c=0,p=u.length;c<p;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=Sr(this.defaults,t);const n=c0(t.baseURL,t.url);return o0(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){ol.prototype[t]=function(n,r){return this.request(Sr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(Sr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}ol.prototype[t]=n(),ol.prototype[t+"Form"]=n(!0)});const Po=ol;class _c{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new Ai(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new _c(function(i){t=i}),cancel:t}}}const VS=_c;function GS(e){return function(n){return e.apply(null,n)}}function QS(e){return S.isObject(e)&&e.isAxiosError===!0}const iu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(iu).forEach(([e,t])=>{iu[t]=e});const KS=iu;function p0(e){const t=new Po(e),n=Qm(Po.prototype.request,t);return S.extend(n,Po.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return p0(Sr(e,i))},n}const le=p0(jc);le.Axios=Po;le.CanceledError=Ai;le.CancelToken=VS;le.isCancel=u0;le.VERSION=f0;le.toFormData=Jl;le.AxiosError=z;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=GS;le.isAxiosError=QS;le.mergeConfig=Sr;le.AxiosHeaders=Pt;le.formToJSON=e=>a0(S.isHTMLForm(e)?new FormData(e):e);le.getAdapter=d0.getAdapter;le.HttpStatusCode=KS;le.default=le;const Ft=le;async function YS(e){const t={method:"get",maxBodyLength:1/0,url:`https://pokeapi.co/api/v2/pokemon-species/${e}/`,headers:{}};try{return(await Ft.request(t)).data}catch(n){console.error(n)}}const Ti="https://pokeapi.co/api/v2",Fi={berries:{berry:"/berry",firmness:"berry-firmness",flavour:"/berry-flavor"},contests:{type:"/contest-type",effect:"/contest-effect",superEffect:"/super-contest-effect/"},encounters:{method:"/encounter-method",conditions:"/encounter-condition",conditionValue:"/encounter-condition-value"},evolutions:{chain:"/evolution-chain",triggers:"/evolution-trigger"},games:{generation:"/generation",pokedexes:"/pokedex",version:"/version",versionGroups:"/version-group",flingEffect:"/item-fling-effect",itemPockets:"/item-pocket"},items:{item:"/item",atribute:"/item-attribute",categories:"/item-category"},locations:{location:"/location",area:"/location-area",palParkArea:"/pal-park-area",region:"/region"},machines:{machine:"/machine"},moves:{move:"/move",ailment:"/move-ailment",battleStyle:"/move-battle-style",category:"/move-category",damageClasses:"/move-damage-class",learnMethods:"/move-learn-method",moveTargets:"/move-target"},pokemon:{ability:"/ability",characteristic:"/characteristic",eggGroup:"/egg-group",gender:"/gender",growthRates:"/growth-rate",nature:"/nature",pokeathlonStats:"/pokeathlon-stat",pokemon:"/pokemon",locationArea:e=>`/pokemon/${e}/encounters`,color:"/pokemon-color/",form:"/pokemon-form",habitat:"/pokemon-habitat",shape:"/pokemon-shape",species:"/pokemon-species",stats:"/stat",types:"/type"}},XS=async()=>{const e={method:"get",maxBodyLength:1/0,url:Ti+Fi.pokemon.types,headers:{}};try{return(await Ft.request(e)).data.results}catch(t){console.error(t)}},h0=async e=>{const t={method:"get",maxBodyLength:1/0,url:Ti+Fi.pokemon.types+"/"+e,headers:{}};try{return(await Ft.request(t)).data}catch(n){console.error(n)}};function Lf(e){return"types/"+e.toLowerCase()+".svg"}function qS(e){return Je.colors.buttonColor[e]}function JS(e){return e.toLowerCase()+".svg"}function ZS(){const e=cn();function t(){e(vf("photo"))}function n(){e(vf("info"))}return v.jsxs(fw,{children:[v.jsx(pw,{onClick:t,"data-cy":"ButtonPhoto",children:"PHOTO"}),v.jsx(hw,{onClick:n,"data-cy":"ButtonInfo",children:"INFO"})]})}function ek(){const e=b(r=>r.pokemon.selectedPokemon),[t,n]=A.useState();return A.useEffect(()=>{(async()=>{try{if(e.name!==void 0){const i=await YS(e.name),o=i.flavor_text_entries.find(s=>s.language.name==="en"),l=o?o.flavor_text:i.flavor_text_entries[0].flavor_text;n(l.replace(/\n/g," "))}}catch(i){console.error("Error fetching specie data:",i)}})()},[e.name]),e.name&&v.jsxs(Ri,{children:[v.jsxs($n,{children:["#",e.id," ",e.name.toUpperCase()]}),v.jsx(Ax,{pokemon:e}),t&&v.jsx(vw,{children:t})]})}function tk(){var r,i,o,l,s,a,u,d;const e=b(c=>c.type.selectedType),[t,n]=A.useState(null);return A.useEffect(()=>{(async()=>{try{const p=await h0(e);n(p)}catch(p){console.error("Error loading Pokemon type:",p)}})()},[e]),v.jsxs(Ri,{children:[v.jsx($n,{children:t==null?void 0:t.name.toUpperCase()}),v.jsxs(mw,{children:["DOUBLE DAMAGE",((r=t==null?void 0:t.damage_relations)==null?void 0:r.double_damage_from.length)!==0&&v.jsxs(gw,{children:["FROM:",(o=(i=t==null?void 0:t.damage_relations)==null?void 0:i.double_damage_from)==null?void 0:o.map(c=>v.jsx(tf,{children:v.jsx(il,{src:Lf(c.name)})},c.name))]}),((l=t==null?void 0:t.damage_relations)==null?void 0:l.double_damage_to.length)!==0&&v.jsxs(yw,{children:["TO:",(a=(s=t==null?void 0:t.damage_relations)==null?void 0:s.double_damage_to)==null?void 0:a.map(c=>v.jsx(tf,{children:v.jsx(il,{src:Lf(c.name)})},c.name))]})]}),((u=t==null?void 0:t.damage_relations)==null?void 0:u.no_damage_from.length)!==0&&v.jsxs(ww,{children:["IMUNITIES",v.jsx(xw,{children:(d=t==null?void 0:t.damage_relations)==null?void 0:d.no_damage_from.map((c,p)=>v.jsx(Wm,{color:qS(c.name),children:v.jsxs(Vm,{children:[v.jsx(Gm,{src:JS(c.name),alt:`${c.name} icon`}),c.name.toUpperCase()]})},p))})]})]})}function nk(){var t,n,r;const e=b(i=>i.item.selectedItem);return v.jsxs(Sw,{children:[v.jsxs(kw,{children:["#",e.id," - ",e.name.toUpperCase()]}),v.jsx(Ew,{children:((n=(t=e==null?void 0:e.effect_entries)==null?void 0:t[0])==null?void 0:n.short_effect)||"No short effect available"}),v.jsx(Cw,{children:(r=e.attributes)==null?void 0:r.map(i=>v.jsx(Pw,{children:i.name.toUpperCase()},i.name))})]})}function rk(){var t,n;const e=b(r=>r.regions.lists.selected);return v.jsxs(jw,{children:[v.jsxs(Ow,{children:["#",e.id," - ",e.name.toUpperCase()]}),v.jsx(Lw,{children:(t=e.main_generation)==null?void 0:t.name.toUpperCase()}),v.jsxs(_w,{children:["VERSIONS:",(n=e.version_groups)==null?void 0:n.map(r=>v.jsx(Rw,{children:r.name.toUpperCase()}))]})]})}function ik(){return v.jsxs(Aw,{children:[v.jsx(Tw,{children:"A wild Pantufa appears!!"}),v.jsx(dw,{src:"pantufa.png"})]})}function m0(){const e=b(l=>l.mainMenu.selectedMainMenu),t=b(l=>l.pokemon.selectedPokemon.name),n=b(l=>l.type.selectedType),r=b(l=>l.item.selectedItem.name),i=b(l=>l.regions.lists.selected.name);let o=e!==""?e:"POKÉDEX";switch(e){case"POKÉMON":o=t?t.toUpperCase():"POKÉMON";break;case"TYPES":o=n?n.toUpperCase():"TYPES";break;case"ITEMS":o=r?r.toUpperCase():"ITEMS";break;case"FOSSILS":o=r?r.toUpperCase():"FOSSILS";break;case"REGIONS":o=i?i.toUpperCase():"REGIONS";break}return v.jsx(i1,{id:"blackScreen",children:v.jsx(l1,{id:"animatedText",children:v.jsx(s1,{id:"textDisplay",children:o})})})}function es(){const e=b(n=>n.mainMenu.selectedMainMenu);let t;switch(e){case"POKÉMON":t=v.jsx(ok,{});break;case"TYPES":t=v.jsx(lk,{});break;case"ITEMS":t=v.jsx(Af,{});break;case"FOSSILS":t=v.jsx(Af,{});break;case"REGIONS":t=v.jsx(sk,{});break;default:t=v.jsx(ak,{})}return v.jsxs(a1,{id:"whiteScreen",children:[t,v.jsx(ZS,{})]})}function ok(){const e=b(r=>r.infoMenu.selectedMenu),t=b(r=>{const i=r.pokemon.selectedPokemon.types;return i&&i.length>0?i[0]:null}),n=t&&Je.colors.background[t];return v.jsxs(_i,{color:n,id:"screen",children:[!t&&v.jsx($n,{id:"selectPokemon",children:"SELECT POKÉMON"}),t&&e==="photo"&&v.jsx(Nw,{}),t&&e==="info"&&v.jsx(ek,{})]})}function lk(){const e=b(r=>r.infoMenu.selectedMenu),t=b(r=>r.type.selectedType),n=t&&Je.colors.background[t];return v.jsxs(_i,{color:n,children:[!t&&v.jsx($n,{id:"selectType",children:"SELECT TYPE"}),t&&e==="photo"&&v.jsx(Iw,{}),t&&e==="info"&&v.jsx(tk,{})]})}function Af(){const e=b(r=>r.infoMenu.selectedMenu),t=b(r=>{var i;return(i=r.item.selectedItem.category)==null?void 0:i.name}),n=Je.colors.itemGradientMap[t];return v.jsxs(_i,{color:n,id:"screen",children:[!t&&v.jsx($n,{id:"selectItem",children:"SELECT ITEM"}),t&&e==="photo"&&v.jsx(bw,{}),t&&e==="info"&&v.jsx(nk,{})]})}function sk(){const e=b(r=>r.infoMenu.selectedMenu),t=b(r=>r.regions.lists.selected.name),n=Je.colors.regionColorMapBackground[t];return v.jsxs(_i,{color:n,children:[!t&&v.jsx($n,{id:"selectRegions",children:"SELECT REGION"}),t&&e==="photo"&&v.jsx($w,{}),t&&e==="info"&&v.jsx(rk,{})]})}function ak(){const e=b(t=>t.infoMenu.selectedMenu);return v.jsxs(_i,{id:"screen",children:[e==="photo"&&v.jsx(zw,{}),e==="info"&&v.jsx(ik,{})]})}const uk=j.input`
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
`,ck=j.div`
  height: 8%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 74%;
    height: 6%;
  }
`,dk=j.img`
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
`;const fk={lists:{originalList:[],filteredList:[]}},g0=Tt({name:"list",initialState:fk,reducers:{updateOriginalList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalList:pk,updateFilteredList:ou}=g0.actions,hk=g0.reducer,mk={lists:{originalList:[],filteredList:[]}},y0=Tt({name:"list",initialState:mk,reducers:{updateOriginalTypeList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredTypeList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalTypeList:gk,updateFilteredTypeList:lu}=y0.actions,yk=y0.reducer,vk={lists:{originalList:[],filteredList:[]}},v0=Tt({name:"list",initialState:vk,reducers:{updateOriginalItemList:(e,t)=>{e.lists.originalList=t.payload},updateFilteredItemList:(e,t)=>{e.lists.filteredList=t.payload}}}),{updateOriginalItemList:w0,updateFilteredItemList:Zn}=v0.actions,Tf=v0.reducer,wk={lists:{originalList:[],filteredList:[],selected:{url:"",id:0,locations:[{name:"",url:""}],main_generation:{name:"",url:""},name:"",names:[{language:{name:"",url:""},name:""}],pokedexes:[{name:"",url:""}],version_groups:[{name:"",url:""}]}}},x0=Tt({name:"list",initialState:wk,reducers:{originalRegionList:(e,t)=>{e.lists.originalList=t.payload},filteredRegionList:(e,t)=>{e.lists.filteredList=t.payload},selectRegion:(e,t)=>{e.lists.selected=t.payload}}}),{originalRegionList:xk,filteredRegionList:su,selectRegion:Sk}=x0.actions,kk=x0.reducer;function ts(){const e=b(a=>a.pokemonList.lists),t=b(a=>a.typeList.lists),n=b(a=>a.itemList.lists),r=b(a=>a.regions.lists),i=cn(),o=b(a=>a.mainMenu.selectedMainMenu);function l(a){switch(o){case"POKÉMON":if(a==="")i(ou(e.originalList));else{const u=e.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(ou(u))}break;case"TYPES":if(a==="")i(lu(t.originalList));else{const u=t.originalList.filter(d=>d.typeInfo.name.toLowerCase().includes(a.toLowerCase()));i(lu(u))}break;case"ITEMS":if(a==="")i(Zn(n.originalList));else{const u=n.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(Zn(u))}break;case"FOSSILS":if(a==="")i(Zn(n.originalList));else{const u=n.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(Zn(u))}break;case"REGIONS":if(a==="")i(su(r.originalList));else{const u=r.originalList.filter(d=>d.name.toLowerCase().includes(a.toLowerCase()));i(su(u))}break}}const s=`Search ${o.toLocaleLowerCase()}...`;return v.jsxs(ck,{id:"searchContainer",children:[v.jsx(dk,{src:"icons/detetive.png",id:"detective"}),v.jsx(uk,{placeholder:s,id:"searchBox",onChange:a=>l(a.target.value)})]})}const Ek=j.div`
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
`,Ck=j.button`
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
`,Ni=j.button`
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
`,Pk=j.p`
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
`,jk=j.img`
  display: flex;
  height: 40%;
  max-width: 50%;
  box-sizing: border-box;
`,Ok={selectedMainMenu:""},S0=Tt({name:"mainMenu",initialState:Ok,reducers:{selectMainMenu:(e,t)=>{e.selectedMainMenu=t.payload}}}),{selectMainMenu:_k}=S0.actions,Rk=S0.reducer;function ns({onButtonClick:e}){const[t,n]=A.useState(5),r=["POKÉMON","TYPES","ITEMS","REGIONS","FOSSILS"],i=cn(),o=b(a=>a.mainMenu.selectedMainMenu);A.useEffect(()=>{l(t,o)});const l=(a,u)=>{i(_k(u)),n(a),e&&e(a)},s=a=>`icons/${a.toLowerCase()}.png`;return v.jsx(Ek,{id:"buttonContainer",children:r.map((a,u)=>v.jsxs(Ck,{id:a,selected:t===u,onClick:()=>l(u,a),children:[v.jsx(jk,{src:s(a)}),v.jsx(Pk,{children:a})]},u))})}const Lk=j.div`
  display: flex;
  width: 100%;
  height: 18%;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`,Ak=j.div`
  display: flex;
  width: 50%;
  height: 10%;
  border-top: 5px solid black;
`,Tk=ac`
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

  animation: ${Tk} 3s ease-in-out infinite;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`,Nk=j.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`,Ik=j.div`
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
`,$k=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f5d03d, #aa9927, #6b5518);
  border-radius: 50%;

  border: solid black 1px;
`,zk=j.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#3df543, #27aa38, #186b23);
  border-radius: 50%;
  border: solid black 1px;
`;function Mk(){return v.jsxs(Lk,{children:[v.jsxs(Nk,{children:[v.jsx(Fk,{}),v.jsxs(Ik,{children:[v.jsx(bk,{}),v.jsx($k,{}),v.jsx(zk,{})]})]}),v.jsx(Ak,{})]})}const Dk=j.div`
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
`,Ii=j.ul`
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
`,bi=j.li`
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
`;const $i=j.div`
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
`,Qe=j.div`
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
`,Bk=j.img`
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
`;var au=(e=>(e[e.First=1]="First",e[e.Second=152]="Second",e[e.Third=252]="Third",e[e.Fourth=387]="Fourth",e[e.Fifth=494]="Fifth",e[e.Sixth=650]="Sixth",e[e.Seventh=722]="Seventh",e[e.Eighth=810]="Eighth",e))(au||{});function Ff(e){let t,n;switch(e){case 1:t=1,n=151;break;case 152:t=152,n=251;break;case 252:t=252,n=386;break;case 387:t=387,n=493;break;case 494:t=494,n=649;break;case 650:t=650,n=721;break;case 722:t=722,n=809;break;case 810:t=810,n=1010;break;default:throw new Error("Invalid Pokémon Generation")}return{start:t,end:n}}const Uk=async(e=1,t=151)=>{const n={method:"get",maxBodyLength:1/0,url:`${Ti}${Fi.pokemon.pokemon}?offset=${e-1}&limit=${t}`,headers:{}};try{return(await Ft.request(n)).data}catch(r){console.error(r)}},Hk=async e=>{const t={method:"get",maxBodyLength:1/0,url:`${Ti}${Fi.pokemon.pokemon}/${e}`,headers:{}};try{return(await Ft.request(t)).data}catch(n){console.error(n)}},Wk={selectedPokemon:{name:"",url:"",id:0,image:"",types:[]}},k0=Tt({name:"pokemon",initialState:Wk,reducers:{selectPokemon:(e,t)=>{e.selectedPokemon=t.payload}}}),{selectPokemon:Vk}=k0.actions,Gk=k0.reducer,Qk={selectedType:""},E0=Tt({name:"type",initialState:Qk,reducers:{selectType:(e,t)=>{e.selectedType=t.payload}}}),{selectType:Kk}=E0.actions,Yk=E0.reducer;function zi(){return v.jsx(Xk,{})}const Xk=j.img.attrs({src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs",alt:"Pikachu Loading"})`
  width: 20vw;
`;async function qk(){const e={method:"get",maxBodyLength:1/0,url:"https://pokeapi.co/api/v2/item/?offset=0&limit=1300",headers:{}};try{return(await Ft.request(e)).data.results}catch(t){console.error(t)}}async function Rc(e){const t={method:"get",maxBodyLength:1/0,url:e,headers:{}};try{return(await Ft.request(t)).data}catch(n){console.error(n)}}const Jk={selectedItem:{attributes:[{name:"",url:""}],baby_trigger_for:null,category:{name:"",url:""},cost:0,effect_entries:[{effect:"",language:{name:"",url:""},short_effect:""}],flavor_text_entries:[{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},text:`The best BALL that
catches a POKéMON
without fail.`,version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}}],fling_effect:null,fling_power:null,game_indices:[{game_index:0,generation:{name:"",url:""}}],held_by_pokemon:[],id:0,machines:[],name:"",names:[{language:{name:"",url:""},name:""}],sprites:{default:""}}},C0=Tt({name:"item",initialState:Jk,reducers:{selectItem:(e,t)=>{e.selectedItem=t.payload}}}),{selectItem:P0}=C0.actions,Zk=C0.reducer,e2=async()=>{const e={method:"get",maxBodyLength:1/0,url:`${Ti}${Fi.locations.region}`,headers:{}};try{return(await Ft.request(e)).data.results}catch(t){console.error(t)}};async function t2(){const e={method:"get",maxBodyLength:1/0,url:"https://pokeapi.co/api/v2/item-category/35/",headers:{}};try{return(await Ft.request(e)).data.items}catch(t){console.error(t)}}function rs(){const e=b(t=>t.mainMenu.selectedMainMenu);return v.jsxs(Dk,{children:[e==="POKÉMON"&&v.jsx(n2,{}),e==="TYPES"&&v.jsx(r2,{}),e==="ITEMS"&&v.jsx(i2,{}),e==="REGIONS"&&v.jsx(o2,{}),e==="FOSSILS"&&v.jsx(l2,{})]})}function n2(){const[e,t]=A.useState(!0),n=b(a=>a.pokemonList.lists),r=cn(),i=Ff(au.First),o=Ff(au.Eighth);A.useEffect(()=>{async function a(){try{t(!0);const u=await Uk(i.start,o.end),d=await Promise.all(u.results.map(async c=>{const p=await Hk(c.name);return{...c,id:p.id,image:p.sprites.other["official-artwork"].front_default,types:p.types.map(g=>g.type.name)}}));r(pk(d)),r(ou(d))}catch(u){console.error("Error fetching Pokemon data:",u)}finally{t(!1)}}a()},[r,i.start,i.end]);const l=a=>{r(Vk(a))};function s(a){return"types/"+a.toLowerCase()+".svg"}return v.jsx($i,{children:e?v.jsx(zi,{}):v.jsx(Ii,{children:n.filteredList.map(a=>{var u,d;return v.jsx(Ni,{color:Je.colors.type[(u=a.types)==null?void 0:u[0]],onClick:()=>l(a),children:v.jsxs(bi,{"data-cy":a.name,children:[v.jsxs(Qe,{children:["#",a.id]}),v.jsx(Qe,{children:a.name.toUpperCase()}),v.jsx(Qe,{children:(d=a.types)==null?void 0:d.map(c=>v.jsx(il,{src:s(c),alt:c},c))})]})},a.name)})})})}function r2(){const[e,t]=A.useState(!0),n=cn(),r=b(l=>l.typeList.lists.filteredList);A.useEffect(()=>{async function l(){t(!0);const s=await XS(),a=await Promise.all(s.map(async u=>({typeInfo:await h0(u.name)})));n(gk(a)),n(lu(a)),t(!1)}l()},[n]);function i(l){return"types/"+l.toLowerCase()+".svg"}const o=l=>{n(Kk(l))};return v.jsx($i,{children:e?v.jsx(zi,{}):v.jsx(Ii,{children:r.map(l=>v.jsx(Ni,{color:Je.colors.type[l.typeInfo.name],onClick:()=>o(l.typeInfo.name),children:v.jsxs(bi,{children:[v.jsxs(Qe,{children:["#",l.typeInfo.id]}),v.jsx(Qe,{children:l.typeInfo.name.toUpperCase()}),v.jsx(Qe,{children:v.jsx(il,{src:i(l.typeInfo.name),alt:l.typeInfo.name})})]})},l.typeInfo.name))})})}function i2(){const[e,t]=A.useState(!0),n=cn(),r=b(o=>o.itemList.lists.filteredList);A.useEffect(()=>{async function o(){try{const l=await qk(),s=await Promise.all(l.map(async a=>await Rc(a.url)));n(w0(s)),n(Zn(s)),t(!1)}catch(l){console.error("Error fetching items:",l),t(!1)}}o()},[n]);const i=o=>{n(P0(o))};return v.jsx($i,{children:e?v.jsx(zi,{}):v.jsx(Ii,{children:r.map(o=>{var l,s;return v.jsx(Ni,{color:Je.colors.itemTypeColorMap[(l=o.category)==null?void 0:l.name],onClick:()=>i(o),children:v.jsxs(bi,{children:[v.jsxs(Qe,{children:["#",o.id]}),v.jsx(Qe,{children:o.name.toUpperCase()}),v.jsx(Lm,{src:(s=o.sprites)==null?void 0:s.default})]})},o.id)})})})}function o2(){const[e,t]=A.useState(!0),n=b(o=>o.regions.lists.filteredList),r=cn();A.useEffect(()=>{async function o(){const l=await e2(),s=await Promise.all(l.map(async a=>await Rc(a.url)));r(xk(s)),r(su(s)),t(!1)}o()},[r]);const i=o=>{r(Sk(o))};return v.jsx($i,{children:e?v.jsx(zi,{}):v.jsx(Ii,{children:n.map(o=>v.jsx(Ni,{color:Je.colors.regionColorMap[o.name],onClick:()=>i(o),children:v.jsxs(bi,{children:[v.jsxs(Qe,{children:["#",o.id]}),v.jsx(Qe,{children:o.name.toUpperCase()}),v.jsx(Bk,{src:"icons/map.png"})]})},o.name))})})}function l2(){const[e,t]=A.useState(!0),n=cn(),r=b(o=>o.itemList.lists.filteredList);A.useEffect(()=>{async function o(){try{const l=await t2(),s=await Promise.all(l.map(async a=>await Rc(a.url)));n(w0(s)),n(Zn(s)),t(!1)}catch(l){console.error("Error fetching items:",l),t(!1)}}o()},[n]);const i=o=>{n(P0(o))};return v.jsx($i,{children:e?v.jsx(zi,{}):v.jsx(Ii,{children:r.map(o=>{var l,s;return v.jsx(Ni,{color:Je.colors.itemTypeColorMap[(l=o.category)==null?void 0:l.name],onClick:()=>i(o),children:v.jsxs(bi,{children:[v.jsxs(Qe,{children:["#",o.id]}),v.jsx(Qe,{children:o.name.toUpperCase()}),v.jsx(Lm,{src:(s=o.sprites)==null?void 0:s.default})]})},o.id)})})})}const s2=j.audio`
  width: 250px;
  background-color: transparent;
  position: relative;
  bottom: 0;
  left: 0;

  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.55);
`,a2=()=>{const e=A.useRef(null);return A.useEffect(()=>{e.current&&(e.current.volume=.5)},[]),v.jsx(s2,{controls:!0,ref:e,id:"music",children:v.jsx("source",{src:"opening.mp3",type:"audio/mp3"})})};function u2(){const e=b(t=>t.mainMenu.selectedMainMenu);return v.jsxs(Zv,{children:[v.jsxs(e1,{children:[v.jsx(Mk,{}),v.jsxs(Ol,{children:[v.jsx(m0,{}),v.jsx(ns,{}),e!==""&&v.jsx(ts,{}),v.jsx(a2,{})]})]}),v.jsx(t1,{children:v.jsxs(n1,{children:[v.jsx(es,{}),v.jsx(rs,{})]})})]})}function c2(){const e=b(t=>t.mainMenu.selectedMainMenu);return v.jsxs(Ol,{children:[v.jsx(es,{}),v.jsx(ns,{}),e!==""&&v.jsx(ts,{}),v.jsx(rs,{})]})}const d2=({size:e})=>{const t=b(n=>n.mainMenu.selectedMainMenu);return v.jsxs(Ol,{children:[v.jsx(es,{}),v.jsxs(r1,{children:[v.jsx(ns,{}),e>=800&&t!==""&&v.jsx(ts,{}),v.jsx(rs,{})]})]})};function f2(){const e=b(t=>t.mainMenu.selectedMainMenu);return v.jsxs(Ol,{children:[v.jsx(m0,{}),v.jsx(ns,{}),v.jsx(es,{}),e!==""&&v.jsx(ts,{}),v.jsx(rs,{})]})}globalThis&&globalThis.__awaiter;function p2(e,t,n,r){const i=A.useRef(t);j0(()=>{i.current=t},[t]),A.useEffect(()=>{var o;const l=(o=n==null?void 0:n.current)!==null&&o!==void 0?o:window;if(!(l&&l.addEventListener))return;const s=a=>i.current(a);return l.addEventListener(e,s,r),()=>{l.removeEventListener(e,s,r)}},[e,n,r])}globalThis&&globalThis.__awaiter;const j0=typeof window<"u"?A.useLayoutEffect:A.useEffect;function h2(){const[e,t]=A.useState({width:0,height:0}),n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return p2("resize",n),j0(()=>{n()},[]),e}function m2(){const{width:e,height:t}=h2(),[n,r]=A.useState(null);return A.useEffect(()=>{t<e&&e<1367?r(v.jsx(d2,{size:t})):e<600?r(v.jsx(c2,{})):e<1280?r(v.jsx(f2,{})):r(v.jsx(u2,{}))},[e,t]),v.jsx(v.Fragment,{children:n})}function g2(){return v.jsx(qv,{theme:Je,children:v.jsx(m2,{})})}const y2=yx({reducer:{pokemon:Gk,infoMenu:_x,mainMenu:Rk,pokemonList:hk,typeList:yk,itemList:Tf,fossilList:Tf,type:Yk,item:Zk,regions:kk}});Ks.createRoot(document.getElementById("root")).render(v.jsx(J1,{store:y2,children:v.jsx(g2,{})}));
