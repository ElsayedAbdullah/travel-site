!function(r){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=r,n.c=i,n.p="",n(0)}({0:function(e,t,r){"use strict";r(8),r(9)},8:function(e,t){var r,i;r="undefined"!=typeof window?window:{},i=function(l,N,u){"use strict";var $,k;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};k=l.lazySizesConfig||l.lazysizesConfig||{};for(e in t){if(!(e in k)){k[e]=t[e]}}}(),!N||!N.getElementsByClassName){return{init:function(){},cfg:k,noSupport:true}}var I=N.documentElement,i=l.HTMLPictureElement,U="addEventListener",F="getAttribute",H=l[U].bind(l),O=l.setTimeout,Q=l.requestAnimationFrame||O,c=l.requestIdleCallback,G=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],r={},q=Array.prototype.forEach,j=function(e,t){if(!r[t]){r[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return r[t].test(e[F]("class")||"")&&r[t]},V=function(e,t){if(!j(e,t)){e.setAttribute("class",(e[F]("class")||"").trim()+" "+t)}},K=function(e,t){var r;if(r=j(e,t)){e.setAttribute("class",(e[F]("class")||"").replace(r," "))}},J=function(t,r,e){var i=e?U:"removeEventListener";if(e){J(t,r)}n.forEach(function(e){t[i](e,r)})},X=function(e,t,r,i,n){var s=N.createEvent("Event");if(!r){r={}}r.instance=$;s.initEvent(t,!i,!n);s.detail=r;e.dispatchEvent(s);return s},Y=function(e,t){var r;if(!i&&(r=l.picturefill||k.pf)){if(t&&t.src&&!e[F]("srcset")){e.setAttribute("srcset",t.src)}r({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},a=function(e,t,r){r=r||e.offsetWidth;while(r<k.minSize&&t&&!e._lazysizesWidth){r=t.offsetWidth;t=t.parentNode}return r},ee=function(){var r,i;var t=[];var n=[];var s=t;var a=function(){var e=s;s=t.length?n:t;r=true;i=false;while(e.length){e.shift()()}r=false};var e=function(e,t){if(r&&!t){e.apply(this,arguments)}else{s.push(e);if(!i){i=true;(N.hidden?O:Q)(a)}}};e._lsFlush=a;return e}(),te=function(r,e){return e?function(){ee(r)}:function(){var e=this;var t=arguments;ee(function(){r.apply(e,t)})}},re=function(e){var r;var i=0;var n=k.throttleDelay;var s=k.ricTimeout;var t=function(){r=false;i=u.now();e()};var a=c&&s>49?function(){c(t,{timeout:s});if(s!==k.ricTimeout){s=k.ricTimeout}}:te(function(){O(t)},true);return function(e){var t;if(e=e===true){s=33}if(r){return}r=true;t=n-(u.now()-i);if(t<0){t=0}if(e||t<9){a()}else{O(a,t)}}},ie=function(e){var t,r;var i=99;var n=function(){t=null;e()};var s=function(){var e=u.now()-r;if(e<i){O(s,i-e)}else{(c||n)(n)}};return function(){r=u.now();if(!t){t=O(s,i)}}},e=function(){var p,m,f,h,e;var v,A,g,y,z,w,C;var s=/^img$/i;var d=/^iframe$/i;var E="onscroll"in l&&!/(gle|ing)bot/.test(navigator.userAgent);var b=0;var S=0;var x=0;var T=-1;var M=function(e){x--;if(!e||x<0||!e.target){x=0}};var R=function(e){if(C==null){C=Z(N.body,"visibility")=="hidden"}return C||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var L=function(e,t){var r;var i=e;var n=R(e);g-=t;w+=t;y-=t;z+=t;while(n&&(i=i.offsetParent)&&i!=N.body&&i!=I){n=(Z(i,"opacity")||1)>0;if(n&&Z(i,"overflow")!="visible"){r=i.getBoundingClientRect();n=z>r.left&&y<r.right&&w>r.top-1&&g<r.bottom+1}}return n};var t=function(){var e,t,r,i,n,s,a,c,o,l,u,f;var d=$.elements;if((h=k.loadMode)&&x<8&&(e=d.length)){t=0;T++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||$.prematureUnveil&&$.prematureUnveil(d[t])){W(d[t]);continue}if(!(c=d[t][F]("data-expand"))||!(s=c*1)){s=S}if(!l){l=!k.expand||k.expand<1?I.clientHeight>500&&I.clientWidth>500?500:370:k.expand;$._defEx=l;u=l*k.expFactor;f=k.hFac;C=null;if(S<u&&x<1&&T>2&&h>2&&!N.hidden){S=u;T=0}else if(h>1&&T>1&&x<6){S=l}else{S=b}}if(o!==s){v=innerWidth+s*f;A=innerHeight+s;a=s*-1;o=s}r=d[t].getBoundingClientRect();if((w=r.bottom)>=a&&(g=r.top)<=A&&(z=r.right)>=a*f&&(y=r.left)<=v&&(w||z||y||g)&&(k.loadHidden||R(d[t]))&&(m&&x<3&&!c&&(h<3||T<4)||L(d[t],s))){W(d[t]);n=true;if(x>9){break}}else if(!n&&m&&!i&&x<4&&T<4&&h>2&&(p[0]||k.preloadAfterLoad)&&(p[0]||!c&&(w||z||y||g||d[t][F](k.sizesAttr)!="auto"))){i=p[0]||d[t]}}if(i&&!n){W(i)}}};var r=re(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}M(e);V(t,k.loadedClass);K(t,k.loadingClass);J(t,_);X(t,"lazyloaded")};var i=te(B);var _=function(e){i({target:e.target})};var D=function(t,r){try{t.contentWindow.location.replace(r)}catch(e){t.src=r}};var P=function(e){var t;var r=e[F](k.srcsetAttr);if(t=k.customMedia[e[F]("data-media")||e[F]("media")]){e.setAttribute("media",t)}if(r){e.setAttribute("srcset",r)}};var a=te(function(t,e,r,i,n){var s,a,c,o,l,u;if(!(l=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(r){V(t,k.autosizesClass)}else{t.setAttribute("sizes",i)}}a=t[F](k.srcsetAttr);s=t[F](k.srcAttr);if(n){c=t.parentNode;o=c&&G.test(c.nodeName||"")}u=e.firesLoad||"src"in t&&(a||s||o);l={target:t};V(t,k.loadingClass);if(u){clearTimeout(f);f=O(M,2500);J(t,_,true)}if(o){q.call(c.getElementsByTagName("source"),P)}if(a){t.setAttribute("srcset",a)}else if(s&&!o){if(d.test(t.nodeName)){D(t,s)}else{t.src=s}}if(n&&(a||o)){Y(t,{src:s})}}if(t._lazyRace){delete t._lazyRace}K(t,k.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!u||e){if(e){V(t,"ls-is-cached")}B(l);t._lazyCache=true;O(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){x--}},true)});var W=function(e){if(e._lazyRace){return}var t;var r=s.test(e.nodeName);var i=r&&(e[F](k.sizesAttr)||e[F]("sizes"));var n=i=="auto";if((n||!m)&&r&&(e[F]("src")||e.srcset)&&!e.complete&&!j(e,k.errorClass)&&j(e,k.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(n){ne.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;x++;a(e,t,n,i,r)};var n=ie(function(){k.loadMode=3;r()});var c=function(){if(k.loadMode==3){k.loadMode=2}n()};var o=function(){if(m){return}if(u.now()-e<999){O(o,999);return}m=true;k.loadMode=3;r();H("scroll",c,true)};return{_:function(){e=u.now();$.elements=N.getElementsByClassName(k.lazyClass);p=N.getElementsByClassName(k.lazyClass+" "+k.preloadClass);H("scroll",r,true);H("resize",r,true);H("pageshow",function(e){if(e.persisted){var t=N.querySelectorAll("."+k.loadingClass);if(t.length&&t.forEach){Q(function(){t.forEach(function(e){if(e.complete){W(e)}})})}}});if(l.MutationObserver){new MutationObserver(r).observe(I,{childList:true,subtree:true,attributes:true})}else{I[U]("DOMNodeInserted",r,true);I[U]("DOMAttrModified",r,true);setInterval(r,999)}H("hashchange",r,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){N[U](e,r,true)});if(/d$|^c/.test(N.readyState)){o()}else{H("load",o);N[U]("DOMContentLoaded",r);O(o,2e4)}if($.elements.length){t();ee._lsFlush()}else{r()}},checkElems:r,unveil:W,_aLSL:c}}(),ne=function(){var r;var s=te(function(e,t,r,i){var n,s,a;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(G.test(t.nodeName||"")){n=t.getElementsByTagName("source");for(s=0,a=n.length;s<a;s++){n[s].setAttribute("sizes",i)}}if(!r.detail.dataAttr){Y(e,r.detail)}});var i=function(e,t,r){var i;var n=e.parentNode;if(n){r=a(e,n,r);i=X(e,"lazybeforesizes",{width:r,dataAttr:!!t});if(!i.defaultPrevented){r=i.detail.width;if(r&&r!==e._lazysizesWidth){s(e,n,i,r)}}}};var e=function(){var e;var t=r.length;if(t){e=0;for(;e<t;e++){i(r[e])}}};var t=ie(e);return{_:function(){r=N.getElementsByClassName(k.autosizesClass);H("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&N.getElementsByClassName){t.i=true;ne._();e._()}};return O(function(){k.init&&t()}),$={cfg:k,autoSizer:ne,loader:e,init:t,uP:Y,aC:V,rC:K,hC:j,fire:X,gW:a,rAF:ee}}(r,r.document,Date),r.lazySizes=i,"object"==typeof e&&e.exports&&(e.exports=i)},9:function(de,pe,me){var he,e,t,n,r,i;function s(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))}function a(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])}function c(){clearTimeout(t),t=setTimeout(a,99)}function o(){c(),r&&r.addListener&&r.addListener(c)}e=window,i=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(i)&&i.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),r=e.matchMedia&&matchMedia("(orientation: landscape)"),n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),c)),function(e,s,l){"use strict";var n,u,o;s.createElement("picture");function t(){}function r(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i||!1):e.attachEvent&&e.attachEvent("on"+t,r)}function i(t){var r={};return function(e){return e in r||(r[e]=t(e)),r[e]}}var E={},a=!1,c=s.createElement("img"),f=c.getAttribute,d=c.setAttribute,p=c.removeAttribute,m=s.documentElement,h={},b={algorithm:""},v="data-pfsrc",A=v+"set",g=navigator.userAgent,S=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",y=/\s+\+?\d+(e\d+)?w/,z=/(\([^)]+\))?\s*(.+)/,w=e.picturefillCFG,C="font-size:100%!important;",T=!0,M={},R={},L=e.devicePixelRatio,B={px:1,in:96},_=s.createElement("a"),D=!1,P=/^[ \t\n\r\u000c]+/,W=/^[, \t\n\r\u000c]+/,N=/^[^ \t\n\r\u000c]+/,$=/[,]+$/,k=/^\d+$/,I=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function F(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var H,O,Q,G,q,j,V,K,J,X,Y,Z,ee,te,re,ie,ne,se,ae=(H=/^([\d\.]+)(em|vw|px)$/,O=i(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var r;if(!(e in M))if(M[e]=!1,t&&(r=e.match(H)))M[e]=r[1]*B[r[2]];else try{M[e]=new Function("e",O(e))(B)}catch(e){}return M[e]}),ce=function(e){if(a){var t,r,i,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),i=(t=n.elements||E.qsa(n.context||s,n.reevaluate||n.reselect?E.sel:E.selShort)).length){for(E.setupRun(n),D=!0,r=0;r<i;r++)E.fillImg(t[r],n);E.teardownRun(n)}}};function oe(e,t){return e.res-t.res}function le(e,t){var r,i,n;if(e&&t)for(n=E.parseSet(t),e=E.makeUrl(e),r=0;r<n.length;r++)if(e===E.makeUrl(n[r].url)){i=n[r];break}return i}function ue(e){var t,r,i,n,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){var t,r="",i=[],n=[],s=0,a=0,c=!1;function o(){r&&(i.push(r),r="")}function l(){i[0]&&(n.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),n;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(U(t)){if(e.charAt(a-1)&&U(e.charAt(a-1))||!r){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)--s;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}r+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(s=(n=r[t])[n.length-1],c=s,o.test(c)&&0<=parseFloat(c)||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,n.pop(),0===n.length)return a;if(n=n.join(" "),E.matchesMedia(n))return a}return"100vw"}function fe(){2===q.width&&(E.supSizes=!0),u=E.supSrcset&&!E.supSizes,a=!0,setTimeout(ce)}e.console&&console.warn,x in c||(x="src"),h["image/jpeg"]=!0,h["image/gif"]=!0,h["image/png"]=!0,h["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in c,E.supSizes="sizes"in c,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(Q=s.createElement("img"),c.srcset="data:,a",Q.src="data:,a",E.supSrcset=c.complete===Q.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(G="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(q=s.createElement("img")).onload=fe,q.onerror=fe,q.setAttribute("sizes","9px"),q.srcset=G+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=G):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=b,E.DPR=L||1,E.u=B,E.types=h,E.setSize=t,E.makeUrl=i(function(e){return _.href=e,_.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ae(e)},E.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||h[e]},E.parseSize=i(function(e){var t=(e||"").match(z);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(i,f){function e(e){var t,r=e.exec(i.substring(a));if(r)return t=r[0],a+=t.length,t}var d,p,t,r,n,s=i.length,a=0,m=[];function c(){var e,t,r,i,n,s,a,c,o,l=!1,u={};for(i=0;i<p.length;i++)s=(n=p[i])[n.length-1],a=n.substring(0,n.length-1),c=parseInt(a,10),o=parseFloat(a),k.test(a)&&"w"===s?((e||t)&&(l=!0),0===c?l=!0:e=c):I.test(a)&&"x"===s?((e||t||r)&&(l=!0),o<0?l=!0:t=o):k.test(a)&&"h"===s?((r||t)&&(l=!0),0===c?l=!0:r=c):l=!0;l||(u.url=d,e&&(u.w=e),t&&(u.d=t),r&&(u.h=r),r||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function o(){for(e(P),t="",r="in descriptor";;){if(n=i.charAt(a),"in descriptor"===r)if(U(n))t&&(p.push(t),t="",r="after descriptor");else{if(","===n)return a+=1,t&&p.push(t),void c();if("("===n)t+=n,r="in parens";else{if(""===n)return t&&p.push(t),void c();t+=n}}else if("in parens"===r)if(")"===n)t+=n,r="in descriptor";else{if(""===n)return p.push(t),void c();t+=n}else if("after descriptor"===r&&!U(n)){if(""===n)return void c();r="in descriptor",--a}a+=1}}for(;;){if(e(W),s<=a)return m;d=e(N),p=[],","===d.slice(-1)?(d=d.replace($,""),c()):o()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!n&&(e=s.body)){var t=s.createElement("div"),r=m.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",m.style.cssText=C,e.style.cssText=C,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),m.style.cssText=r,e.style.cssText=i}return n||16},E.calcListLength=function(e){if(!(e in R)||b.uT){var t=E.calcLength(ue(e));R[e]=t||B.width}return R[e]},E.setRes=function(e){var t;if(e)for(var r=0,i=(t=E.parseSet(e)).length;r<i;r++)F(t[r],e.sizes);return t},E.setRes.res=F,E.applySetCandidate=function(e,t){if(e.length){var r,i,n,s,a,c,o,l,u,f,d,p,m,h,v,A,g,y,z,w=t[E.ns],C=E.DPR;if(c=w.curSrc||t[x],(o=w.curCan||(f=t,d=c,!(p=e[0].set)&&d&&(p=(p=f[E.ns].sets)&&p[p.length-1]),(m=le(d,p))&&(d=E.makeUrl(d),f[E.ns].curSrc=d,(f[E.ns].curCan=m).res||F(m,m.set.sizes)),m))&&o.set===e[0].set&&((u=S&&!t.complete&&o.res-.1>C)||(o.cached=!0,o.res>=C&&(a=o))),!a)for(e.sort(oe),a=e[(s=e.length)-1],i=0;i<s;i++)if((r=e[i]).res>=C){a=e[n=i-1]&&(u||c!==E.makeUrl(r.url))&&(h=e[n].res,v=r.res,A=C,g=e[n].cached,z=y=void 0,A<("saveData"===b.algorithm?2.7<h?A+1:(z=(v-A)*(y=Math.pow(h-.6,1.5)),g&&(z+=.1*y),h+z):1<A?Math.sqrt(h*v):h))?e[n]:r;break}a&&(l=E.makeUrl(a.url),w.curSrc=l,w.curCan=a,l!==c&&E.setSrc(t,a),E.setSize(t))}},E.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},E.getSet=function(e){var t,r,i,n=!1,s=e[E.ns].sets;for(t=0;t<s.length&&!n;t++)if((r=s[t]).srcset&&E.matchesMedia(r.media)&&(i=E.supportsType(r.type))){"pending"===i&&(r=i),n=r;break}return n},E.parseSets=function(e,t,r){var i,n,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[E.ns];o.src!==l&&!r.src||(o.src=f.call(e,"src"),o.src?d.call(e,v,o.src):p.call(e,v)),o.srcset!==l&&!r.srcset&&E.supSrcset&&!e.srcset||(i=f.call(e,"srcset"),o.srcset=i,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var r,i,n,s,a=e.getElementsByTagName("source");for(r=0,i=a.length;r<i;r++)(n=a[r])[E.ns]=!0,(s=n.getAttribute("srcset"))&&t.push({srcset:s,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,o.sets)),o.srcset?(n={srcset:o.srcset,sizes:f.call(e,"sizes")},o.sets.push(n),(s=(u||o.src)&&y.test(o.srcset||""))||!o.src||le(o.src,n)||n.has1x||(n.srcset+=", "+o.src,n.cands.push({url:o.src,d:1,set:n}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=l,o.supported=!(c||n&&!E.supSrcset||s&&!E.supSizes),a&&E.supSrcset&&!o.supported&&(i?(d.call(e,A,i),e.srcset=""):p.call(e,A)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==E.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},E.fillImg=function(e,t){var r,i,n,s,a,c=t.reselect||t.reevaluate;e[E.ns]||(e[E.ns]={}),r=e[E.ns],!c&&r.evaled===o||(r.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),r.supported?r.evaled=o:(i=e,s=E.getSet(i),a=!1,"pending"!==s&&(a=o,s&&(n=E.setRes(s),E.applySetCandidate(n,i))),i[E.ns].evaled=a))},E.setupRun=function(){D&&!T&&L===e.devicePixelRatio||(T=!1,L=e.devicePixelRatio,M={},R={},E.DPR=L||1,B.width=Math.max(e.innerWidth||0,m.clientWidth),B.height=Math.max(e.innerHeight||0,m.clientHeight),B.vw=B.width/100,B.vh=B.height/100,o=[B.height,B.width,L].join("-"),B.em=E.getEmValue(),B.rem=B.em)},E.supPicture?(ce=t,E.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=s.readyState||"";te=setTimeout(ee,"loading"===e?200:999),s.body&&(E.fillImgs(),(j=j||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,s.body?9:99),re=m.clientHeight,r(e,"resize",(V=function(){T=Math.max(e.innerWidth||0,m.clientWidth)!==B.width||m.clientHeight!==re,re=m.clientHeight,T&&E.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,V())},function(){X=new Date,J=J||setTimeout(Y,K)})),r(s,"readystatechange",ee)),E.picturefill=ce,E.fillImgs=ce,E.teardownRun=t,ce._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(b[t]=e[0],D&&E.fillImgs({reselect:!0}))}};for(;w&&w.length;)e.picturefillCFG.push(w.shift());e.picturefill=ce,"object"==typeof de&&"object"==typeof de.exports?de.exports=ce:(he=function(){return ce}.call(pe,me,pe,de))===l||(de.exports=he),E.supPicture||(h["image/webp"]=(ie="image/webp",ne="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(se=new e.Image).onerror=function(){h[ie]=!1,ce()},se.onload=function(){h[ie]=1===se.width,ce()},se.src=ne,"pending"))}(window,document)}});