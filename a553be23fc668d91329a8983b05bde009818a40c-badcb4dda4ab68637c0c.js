(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[395],{4731:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},941:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},1822:function(e,t,n){"use strict";var r=n(7294),o=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.Z=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=o(e),r=o(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},6149:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,i){var a=r||"<<anonymous>>",s=i||n;if(null==t[n])return new Error("The "+o+" `"+s+"` is required to make `"+a+"` accessible for users of assistive technologies such as screen readers.");for(var u=arguments.length,c=Array(u>5?u-5:0),f=5;f<u;f++)c[f-5]=arguments[f];return e.apply(void 0,[t,n,r,o,i].concat(c))}},e.exports=t.default},7408:function(e,t,n){"use strict";var r=n(2122),o=n(9756),i=n(5900),a=n.n(i),s=n(7294),u=n(9541),c=["xl","lg","md","sm","xs"],f=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,f=e.as,l=void 0===f?"div":f,d=(0,o.Z)(e,["bsPrefix","className","as"]),p=(0,u.vE)(n,"col"),m=[],v=[];return c.forEach((function(e){var t,n,r,o=d[e];if(delete d[e],null!=o&&"object"==typeof o){var i=o.span;t=void 0===i||i,n=o.offset,r=o.order}else t=o;var a="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+a:""+p+a+"-"+t),null!=r&&v.push("order"+a+"-"+r),null!=n&&v.push("offset"+a+"-"+n)})),m.length||m.push(p),s.createElement(l,(0,r.Z)({},d,{ref:t,className:a().apply(void 0,[i].concat(m,v))}))}));f.displayName="Col",t.Z=f},7441:function(e,t,n){"use strict";n.d(t,{Z:function(){return ft}});var r,o=n(2122),i=n(9756),a=n(5900),s=n.n(a),u=n(7294);var c=n(930),f=n(5513);function l(){return(0,u.useState)(null)}var d=n(941),p=n(4731),m=u.createContext(null);var v=function(e){var t=function(){var e=(0,u.useRef)(!0),t=(0,u.useRef)((function(){return e.current}));return(0,u.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}();return[e[0],(0,u.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function h(e){return e.split("-")[0]}function g(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function y(e){return e instanceof g(e).Element||e instanceof Element}function b(e){return e instanceof g(e).HTMLElement||e instanceof HTMLElement}function w(e){return"undefined"!=typeof ShadowRoot&&(e instanceof g(e).ShadowRoot||e instanceof ShadowRoot)}var x=Math.max,O=Math.min,E=Math.round;function Z(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(b(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=E(n.width)/a||1),i>0&&(o=E(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function P(e){var t=Z(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function C(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&w(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function R(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){return g(e).getComputedStyle(e)}function k(e){return["table","td","th"].indexOf(R(e))>=0}function M(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return"html"===R(e)?e:e.assignedSlot||e.parentNode||(w(e)?e.host:null)||M(e)}function N(e){return b(e)&&"fixed"!==D(e).position?e.offsetParent:null}function A(e){for(var t=g(e),n=N(e);n&&k(n)&&"static"===D(n).position;)n=N(n);return n&&("html"===R(n)||"body"===R(n)&&"static"===D(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&b(e)&&"fixed"===D(e).position)return null;for(var n=S(e);b(n)&&["html","body"].indexOf(R(n))<0;){var r=D(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function T(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function j(e,t,n){return x(e,O(t,n))}function L(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}n(5827);function B(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var W="top",H="bottom",F="right",q="left",I="auto",V=[W,H,F,q],_="start",K="end",U="viewport",z="popper",G=V.reduce((function(e,t){return e.concat([t+"-"+_,t+"-"+K])}),[]),X=[].concat(V,[I]).reduce((function(e,t){return e.concat([t,t+"-"+_,t+"-"+K])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function $(e){return e.split("-")[1]}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,l=e.isFixed,d=a.x,p=void 0===d?0:d,m=a.y,v=void 0===m?0:m,h="function"==typeof f?f({x:p,y:v}):{x:p,y:v};p=h.x,v=h.y;var y=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=q,x=W,O=window;if(c){var Z=A(n),P="clientHeight",C="clientWidth";if(Z===g(n)&&"static"!==D(Z=M(n)).position&&"absolute"===s&&(P="scrollHeight",C="scrollWidth"),Z=Z,o===W||(o===q||o===F)&&i===K)x=H,v-=(l&&O.visualViewport?O.visualViewport.height:Z[P])-r.height,v*=u?1:-1;if(o===q||(o===W||o===H)&&i===K)w=F,p-=(l&&O.visualViewport?O.visualViewport.width:Z[C])-r.width,p*=u?1:-1}var R,k=Object.assign({position:s},c&&J),S=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:E(t*r)/r||0,y:E(n*r)/r||0}}({x:p,y:v}):{x:p,y:v};return p=S.x,v=S.y,u?Object.assign({},k,((R={})[x]=b?"0":"",R[w]=y?"0":"",R.transform=(O.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",R)):Object.assign({},k,((t={})[x]=b?v+"px":"",t[w]=y?p+"px":"",t.transform="",t))}var ee={passive:!0};var te={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var re={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ie(e){var t=g(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(e){return Z(M(e)).left+ie(e).scrollLeft}function se(e){var t=D(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ue(e){return["html","body","#document"].indexOf(R(e))>=0?e.ownerDocument.body:b(e)&&se(e)?e:ue(S(e))}function ce(e,t){var n;void 0===t&&(t=[]);var r=ue(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=g(r),a=o?[i].concat(i.visualViewport||[],se(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ce(S(a)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t){return t===U?fe(function(e){var t=g(e),n=M(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+ae(e),y:s}}(e)):y(t)?function(e){var t=Z(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):fe(function(e){var t,n=M(e),r=ie(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=x(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=x(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ae(e),u=-r.scrollTop;return"rtl"===D(o||n).direction&&(s+=x(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}(M(e)))}function de(e,t,n){var r="clippingParents"===t?function(e){var t=ce(S(e)),n=["absolute","fixed"].indexOf(D(e).position)>=0&&b(e)?A(e):e;return y(n)?t.filter((function(e){return y(e)&&C(e,n)&&"body"!==R(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=le(e,n);return t.top=x(r.top,t.top),t.right=O(r.right,t.right),t.bottom=O(r.bottom,t.bottom),t.left=x(r.left,t.left),t}),le(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function pe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?h(o):null,a=o?$(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case W:t={x:s,y:n.y-r.height};break;case H:t={x:s,y:n.y+n.height};break;case F:t={x:n.x+n.width,y:u};break;case q:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var c=i?T(i):null;if(null!=c){var f="y"===c?"height":"width";switch(a){case _:t[c]=t[c]-(n[f]/2-r[f]/2);break;case K:t[c]=t[c]+(n[f]/2-r[f]/2)}}return t}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,u=void 0===s?U:s,c=n.elementContext,f=void 0===c?z:c,l=n.altBoundary,d=void 0!==l&&l,p=n.padding,m=void 0===p?0:p,v=L("number"!=typeof m?m:B(m,V)),h=f===z?"reference":z,g=e.rects.popper,b=e.elements[d?h:f],w=de(y(b)?b:b.contextElement||M(e.elements.popper),a,u),x=Z(e.elements.reference),O=pe({reference:x,element:g,strategy:"absolute",placement:o}),E=fe(Object.assign({},g,O)),P=f===z?E:x,C={top:w.top-P.top+v.top,bottom:P.bottom-w.bottom+v.bottom,left:w.left-P.left+v.left,right:P.right-w.right+v.right},R=e.modifiersData.offset;if(f===z&&R){var D=R[o];Object.keys(C).forEach((function(e){var t=[F,H].indexOf(e)>=0?1:-1,n=[W,H].indexOf(e)>=0?"y":"x";C[e]+=D[n]*t}))}return C}function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function he(e){return[W,F,H,q].some((function(t){return e[t]>=0}))}function ge(e,t,n){void 0===n&&(n=!1);var r,o,i=b(t),a=b(t)&&function(e){var t=e.getBoundingClientRect(),n=E(t.width)/e.offsetWidth||1,r=E(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=M(t),u=Z(e,a),c={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==R(t)||se(s))&&(c=(r=t)!==g(r)&&b(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ie(r)),b(t)?((f=Z(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=ae(s))),{x:u.left+c.scrollLeft-f.x,y:u.top+c.scrollTop-f.y,width:u.width,height:u.height}}function ye(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var be={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?be:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},be,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,f={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:y(e)?ce(e):e.contextElement?ce(e.contextElement):[],popper:ce(t)};var a=function(e){var t=ye(e);return Y.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:f,options:r}),a=function(){};u.push(i||a)}})),f.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(we(t,n)){s.rects={reference:ge(t,A(n),"fixed"===s.options.strategy),popper:P(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,u=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:u,name:l,instance:f})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),c=!0}};if(!we(e,t))return f;function l(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Oe=xe({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),u=ve(a,r),c=ve(s,o,i),f=he(u),l=he(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,c={placement:h(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=g(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,ee)})),s&&u.addEventListener("resize",n.update,ee),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,ee)})),s&&u.removeEventListener("resize",n.update,ee)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=X.reduce((function(e,n){return e[n]=function(e,t,n){var r=h(e),o=[q,W].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[q,F].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,c=n.padding,f=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,g=t.options.placement,y=h(g),b=u||(y===g||!m?[ne(g)]:function(e){if(h(e)===I)return[];var t=ne(e);return[oe(e),t,oe(t)]}(g)),w=[g].concat(b).reduce((function(e,n){return e.concat(h(n)===I?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=void 0===u?X:u,f=$(r),l=f?s?G:G.filter((function(e){return $(e)===f})):V,d=l.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=l);var p=d.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[h(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:f,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,O=t.rects.popper,E=new Map,Z=!0,P=w[0],C=0;C<w.length;C++){var R=w[C],D=h(R),k=$(R)===_,M=[W,H].indexOf(D)>=0,S=M?"width":"height",N=me(t,{placement:R,boundary:f,rootBoundary:l,altBoundary:d,padding:c}),A=M?k?F:q:k?H:W;x[S]>O[S]&&(A=ne(A));var T=ne(A),j=[];if(i&&j.push(N[D]<=0),s&&j.push(N[A]<=0,N[T]<=0),j.every((function(e){return e}))){P=R,Z=!1;break}E.set(R,j)}if(Z)for(var L=function(e){var t=w.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},B=m?3:1;B>0;B--){if("break"===L(B))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,u=n.boundary,c=n.rootBoundary,f=n.altBoundary,l=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,g=me(t,{boundary:u,rootBoundary:c,padding:l,altBoundary:f}),y=h(t.placement),b=$(t.placement),w=!b,E=T(y),Z="x"===E?"y":"x",C=t.modifiersData.popperOffsets,R=t.rects.reference,D=t.rects.popper,k="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,M="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(C){if(i){var L,B="y"===E?W:q,I="y"===E?H:F,V="y"===E?"height":"width",K=C[E],U=K+g[B],z=K-g[I],G=p?-D[V]/2:0,X=b===_?R[V]:D[V],Y=b===_?-D[V]:-R[V],J=t.elements.arrow,Q=p&&J?P(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[B],ne=ee[I],re=j(0,R[V],Q[V]),oe=w?R[V]/2-G-re-te-M.mainAxis:X-re-te-M.mainAxis,ie=w?-R[V]/2+G+re+ne+M.mainAxis:Y+re+ne+M.mainAxis,ae=t.elements.arrow&&A(t.elements.arrow),se=ae?"y"===E?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(L=null==S?void 0:S[E])?L:0,ce=K+ie-ue,fe=j(p?O(U,K+oe-ue-se):U,K,p?x(z,ce):z);C[E]=fe,N[E]=fe-K}if(s){var le,de="x"===E?W:q,pe="x"===E?H:F,ve=C[Z],he="y"===Z?"height":"width",ge=ve+g[de],ye=ve-g[pe],be=-1!==[W,q].indexOf(y),we=null!=(le=null==S?void 0:S[Z])?le:0,xe=be?ge:ve-R[he]-D[he]-we+M.altAxis,Oe=be?ve+R[he]+D[he]-we-M.altAxis:ye,Ee=p&&be?function(e,t,n){var r=j(e,t,n);return r>n?n:r}(xe,ve,Oe):j(p?xe:ge,ve,p?Oe:ye);C[Z]=Ee,N[Z]=Ee-ve}t.modifiersData[r]=N}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=h(n.placement),u=T(s),c=[q,F].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return L("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:B(e,V))}(o.padding,n),l=P(i),d="y"===u?W:q,p="y"===u?H:F,m=n.rects.reference[c]+n.rects.reference[u]-a[u]-n.rects.popper[c],v=a[u]-n.rects.reference[u],g=A(i),y=g?"y"===u?g.clientHeight||0:g.clientWidth||0:0,b=m/2-v/2,w=f[d],x=y-l[c]-f[p],O=y/2-l[c]/2+b,E=j(w,O,x),Z=u;n.modifiersData[r]=((t={})[Z]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&C(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}),Ee={position:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"},Ze={};var Pe=function(e,t,n){var r,a=void 0===n?{}:n,s=a.enabled,c=void 0===s||s,f=a.placement,l=void 0===f?"bottom":f,d=a.strategy,p=void 0===d?"absolute":d,m=a.eventsEnabled,h=void 0===m||m,g=a.modifiers,y=(0,i.Z)(a,["enabled","placement","strategy","eventsEnabled","modifiers"]),b=(0,u.useRef)(),w=(0,u.useCallback)((function(){b.current&&b.current.update()}),[]),x=v((0,u.useState)({placement:l,scheduleUpdate:w,outOfBoundaries:!1,styles:Ee,arrowStyles:Ze})),O=x[0],E=x[1],Z=(0,u.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"afterWrite",requires:["computeStyles"],fn:function(e){var t,n,r;E({scheduleUpdate:w,outOfBoundaries:!!(null==(t=e.state.modifiersData.hide)?void 0:t.isReferenceHidden),placement:e.state.placement,styles:(0,o.Z)({},null==(n=e.state.styles)?void 0:n.popper),arrowStyles:(0,o.Z)({},null==(r=e.state.styles)?void 0:r.arrow),state:e.state})}}}),[w,E]),P=(void 0===(r=g)&&(r={}),Array.isArray(r)?r:Object.keys(r).map((function(e){return r[e].name=e,r[e]}))),C=P.find((function(e){return"eventListeners"===e.name}));return!C&&h&&(P=[].concat(P,[C={name:"eventListeners",enabled:!0}])),(0,u.useEffect)((function(){w()}),[O.placement,w]),(0,u.useEffect)((function(){b.current&&c&&b.current.setOptions({placement:l,strategy:p,modifiers:[].concat(P,[Z])})}),[p,l,C.enabled,Z,c]),(0,u.useEffect)((function(){if(c&&null!=e&&null!=t)return b.current=Oe(e,t,(0,o.Z)((0,o.Z)({},y),{},{placement:l,strategy:p,modifiers:[].concat(P,[Z])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{styles:Ee,arrowStyles:Ze})})))}}),[c,e,t]),O};var Ce=n(4302),Re=n(2473),De=n.n(Re),ke=n(7216),Me=n(3935);var Se=function(e){return(0,ke.Z)(function(e){return e&&"setState"in e?Me.findDOMNode(e):null!=e?e:null}(e))},Ne=function(){};var Ae=function(e){return e&&("current"in e?e.current:e)};var Te=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,i=r.clickTrigger,a=void 0===i?"click":i,s=(0,u.useRef)(!1),c=t||Ne,f=(0,u.useCallback)((function(t){var n,r,o,i=Ae(e);De()(!!i,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),s.current=!(i&&(o=t,!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey))&&function(e){return 0===e.button}(t)&&(n=i,r=t.target,!(n.contains?n.contains(r):n.compareDocumentPosition?n===r||16&n.compareDocumentPosition(r):void 0)))}),[e]),l=(0,p.Z)((function(e){s.current||c(e)})),d=(0,p.Z)((function(e){27===e.keyCode&&c(e)}));(0,u.useEffect)((function(){if(!o&&null!=e){var t=Se(Ae(e)),n=(0,Ce.Z)(t,a,f,!0),r=(0,Ce.Z)(t,a,l),i=(0,Ce.Z)(t,"keyup",d),s=[];return"ontouchstart"in t.documentElement&&(s=[].slice.call(t.body.children).map((function(e){return(0,Ce.Z)(e,"mousemove",Ne)}))),function(){n(),r(),i(),s.forEach((function(e){return e()}))}}}),[e,o,a,f,l,d])},je=function(){};function Le(e){var t;void 0===e&&(e={});var n=(0,u.useContext)(m),r=l(),i=r[0],a=r[1],s=(0,u.useRef)(!1),c=e,f=c.flip,d=c.rootCloseEvent,p=c.popperConfig,v=void 0===p?{}:p,h=c.usePopper,g=void 0===h?!!n:h,y=null==(null==n?void 0:n.show)?e.show:n.show,b=null==(null==n?void 0:n.alignEnd)?e.alignEnd:n.alignEnd;y&&!s.current&&(s.current=!0);var w=function(e){null==n||n.toggle(!1,e)},x=n||{},O=x.drop,E=x.setMenu,Z=x.menuElement,P=x.toggleElement,C=b?"bottom-end":"bottom-start";"up"===O?C=b?"top-end":"top-start":"right"===O?C=b?"right-end":"right-start":"left"===O&&(C=b?"left-end":"left-start");var R,D=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers),k=Pe(P,Z,(0,o.Z)((0,o.Z)({},v),{},{placement:C,enabled:!(!g||!y),modifiers:(0,o.Z)((0,o.Z)({},D),{},{eventListeners:{enabled:!!y},arrow:(0,o.Z)((0,o.Z)({},D.arrow),{},{enabled:!!i,options:(0,o.Z)((0,o.Z)({},null==(t=D.arrow)?void 0:t.options),{},{element:i})}),flip:(0,o.Z)({enabled:!!f},D.flip)})})),M={ref:E||je,"aria-labelledby":null==P?void 0:P.id},S={show:y,alignEnd:b,hasShown:s.current,close:w};return R=g?(0,o.Z)((0,o.Z)((0,o.Z)({},k),S),{},{props:(0,o.Z)((0,o.Z)({},M),{},{style:k.styles}),arrowProps:{ref:a,style:k.arrowStyles}}):(0,o.Z)((0,o.Z)({},S),{},{props:M}),Te(Z,w,{clickTrigger:d,disabled:!(R&&y)}),R}function Be(e){var t=e.children,n=Le((0,i.Z)(e,["children"]));return u.createElement(u.Fragment,null,n.hasShown?t(n):null)}Be.displayName="ReactOverlaysDropdownMenu",Be.defaultProps={usePopper:!0};var We=Be,He=function(){};function Fe(){var e=(0,u.useContext)(m)||{},t=e.show,n=void 0!==t&&t,r=e.toggle,o=void 0===r?He:r;return[{ref:e.setToggle||He,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:o}]}function qe(e){var t=e.children,n=Fe(),r=n[0],o=n[1],i=o.show,a=o.toggle;return u.createElement(u.Fragment,null,t({show:i,toggle:a,props:r}))}qe.displayName="ReactOverlaysDropdownToggle";var Ie=qe;function Ve(e){var t,n,o=e.drop,i=e.alignEnd,a=e.defaultShow,s=e.show,v=e.onToggle,h=e.itemSelector,g=void 0===h?"* > *":h,y=e.focusFirstItemOnShow,b=e.children,w=(0,d.Z)(),x=(0,f.$c)(s,a,v),O=x[0],E=x[1],Z=l(),P=Z[0],C=Z[1],R=(0,u.useRef)(null),D=R.current,k=(0,u.useCallback)((function(e){R.current=e,w()}),[w]),M=(t=O,n=(0,u.useRef)(null),(0,u.useEffect)((function(){n.current=t})),n.current),S=(0,u.useRef)(null),N=(0,u.useRef)(!1),A=(0,u.useCallback)((function(e){E(!O,e)}),[E,O]),T=(0,u.useMemo)((function(){return{toggle:A,drop:o,show:O,alignEnd:i,menuElement:D,toggleElement:P,setMenu:k,setToggle:C}}),[A,o,O,i,D,P,k,C]);D&&M&&!O&&(N.current=D.contains(document.activeElement));var j=(0,p.Z)((function(){P&&P.focus&&P.focus()})),L=(0,p.Z)((function(){var e=S.current,t=y;if(null==t&&(t=!(!R.current||!function(e,t){if(!r){var n=document.body,o=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;r=function(e,t){return o.call(e,t)}}return r(e,t)}(R.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=(0,c.Z)(R.current,g)[0];n&&n.focus&&n.focus()}}));(0,u.useEffect)((function(){O?L():N.current&&(N.current=!1,j())}),[O,N,j,L]),(0,u.useEffect)((function(){S.current=null}));var B=function(e,t){if(!R.current)return null;var n=(0,c.Z)(R.current,g),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return u.createElement(m.Provider,{value:T},b({props:{onKeyDown:function(e){var t=e.key,n=e.target;if(!/input|textarea/i.test(n.tagName)||!(" "===t||"Escape"!==t&&R.current&&R.current.contains(n)))switch(S.current=e.type,t){case"ArrowUp":var r=B(n,-1);return r&&r.focus&&r.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),O){var o=B(n,1);o&&o.focus&&o.focus()}else A(e);return;case"Escape":case"Tab":E(!1,e)}}}}))}Ve.displayName="ReactOverlaysDropdown",Ve.Menu=We,Ve.Toggle=Ie;var _e=Ve,Ke=n(6306),Ue=n(8120),ze=n(9541),Ge=n(5439),Xe={as:Ke.Z,disabled:!1},Ye=u.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,c=e.eventKey,f=e.disabled,l=e.href,d=e.onClick,m=e.onSelect,v=e.active,h=e.as,g=(0,i.Z)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),y=(0,ze.vE)(n,"dropdown-item"),b=(0,u.useContext)(Ue.Z),w=((0,u.useContext)(Ge.Z)||{}).activeKey,x=(0,Ue.h)(c,l),O=null==v&&null!=x?(0,Ue.h)(w)===x:v,E=(0,p.Z)((function(e){f||(d&&d(e),b&&b(x,e),m&&m(x,e))}));return u.createElement(h,(0,o.Z)({},g,{ref:t,href:l,disabled:f,className:s()(r,y,O&&"active",f&&"disabled"),onClick:E}),a)}));Ye.displayName="DropdownItem",Ye.defaultProps=Xe;var $e=Ye,Je=n(1822),Qe=n(3374);n(1143);function et(e,t){return e}function tt(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function nt(){var e=(0,u.useRef)(null),t=(0,u.useRef)(null);return[(0,u.useCallback)((function(n){var r;n&&(tt(n,"popover")||tt(n,"dropdown-menu"))&&(t.current=(r=getComputedStyle(n),{top:parseFloat(r.marginTop)||0,right:parseFloat(r.marginRight)||0,bottom:parseFloat(r.marginBottom)||0,left:parseFloat(r.marginLeft)||0}),n.style.margin=0,e.current=n)}),[]),[(0,u.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,i=r.left,a=r.bottom,s=r.right;switch(n.split("-")[0]){case"top":return[0,a];case"left":return[0,s];case"bottom":return[0,o];case"right":return[0,i];default:return[0,0]}}}}}),[t])]]}var rt=u.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.alignRight,c=e.rootCloseEvent,f=e.flip,l=e.show,d=e.renderOnMount,p=e.as,m=void 0===p?"div":p,v=e.popperConfig,h=void 0===v?{}:v,g=(0,i.Z)(e,["bsPrefix","className","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),y=(0,u.useContext)(Qe.Z),b=(0,ze.vE)(n,"dropdown-menu"),w=nt(),x=w[0],O=w[1],E=Le({flip:f,rootCloseEvent:c,show:l,alignEnd:a,usePopper:!y,popperConfig:(0,o.Z)({},h,{modifiers:O.concat(h.modifiers||[])})}),Z=E.hasShown,P=E.placement,C=E.show,R=E.alignEnd,D=E.close,k=E.props;if(k.ref=(0,Je.Z)(x,(0,Je.Z)(et(t),k.ref)),!Z&&!d)return null;"string"!=typeof m&&(k.show=C,k.close=D,k.alignRight=R);var M=g.style;return P&&(M=(0,o.Z)({},M,{},k.style),g["x-placement"]=P),u.createElement(m,(0,o.Z)({},g,k,{style:M,className:s()(r,b,C&&"show",R&&b+"-right")}))}));rt.displayName="DropdownMenu",rt.defaultProps={alignRight:!1,flip:!0};var ot=rt,it=(n(6149),n(6594)),at=u.forwardRef((function(e,t){var n=e.bsPrefix,r=e.split,a=e.className,c=e.children,f=e.childBsPrefix,l=e.as,d=void 0===l?it.Z:l,p=(0,i.Z)(e,["bsPrefix","split","className","children","childBsPrefix","as"]),m=(0,ze.vE)(n,"dropdown-toggle");void 0!==f&&(p.bsPrefix=f);var v=Fe(),h=v[0],g=v[1].toggle;return h.ref=(0,Je.Z)(h.ref,et(t)),u.createElement(d,(0,o.Z)({onClick:g,className:s()(a,m,r&&m+"-split")},h,p),c)}));at.displayName="DropdownToggle";var st=at,ut=n(8870),ct=u.forwardRef((function(e,t){var n=(0,f.Ch)(e,{show:"onToggle"}),r=n.bsPrefix,a=n.drop,c=n.show,l=n.className,d=n.alignRight,m=n.onSelect,v=n.onToggle,h=n.focusFirstItemOnShow,g=n.as,y=void 0===g?"div":g,b=(n.navbar,(0,i.Z)(n,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),w=(0,u.useContext)(Ue.Z),x=(0,ze.vE)(r,"dropdown"),O=(0,p.Z)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget===document&&(n="rootClose"),v(e,t,{source:n})})),E=(0,p.Z)((function(e,t){w&&w(e,t),m&&m(e,t),O(!1,t,"select")}));return u.createElement(Ue.Z.Provider,{value:E},u.createElement(_e,{drop:a,show:c,alignEnd:d,onToggle:O,focusFirstItemOnShow:h,itemSelector:"."+x+"-item:not(.disabled):not(:disabled)"},(function(e){var n=e.props;return u.createElement(y,(0,o.Z)({},b,n,{ref:t,className:s()(l,c&&"show",(!a||"down"===a)&&x,"up"===a&&"dropup","right"===a&&"dropright","left"===a&&"dropleft")}))})))}));ct.displayName="Dropdown",ct.defaultProps={navbar:!1},ct.Toggle=st,ct.Menu=ot,ct.Item=$e,ct.Header=(0,ut.Z)("dropdown-header",{defaultProps:{role:"heading"}}),ct.Divider=(0,ut.Z)("dropdown-divider",{defaultProps:{role:"separator"}});var ft=ct},5439:function(e,t,n){"use strict";var r=n(7294).createContext(null);t.Z=r},3374:function(e,t,n){"use strict";var r=n(7294);t.Z=r.createContext(null)},994:function(e,t,n){"use strict";var r=n(2122),o=n(9756),i=n(5900),a=n.n(i),s=n(7294),u=n(9541),c=["xl","lg","md","sm","xs"],f=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,f=e.noGutters,l=e.as,d=void 0===l?"div":l,p=(0,o.Z)(e,["bsPrefix","className","noGutters","as"]),m=(0,u.vE)(n,"row"),v=m+"-cols",h=[];return c.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+v+r+"-"+t)})),s.createElement(d,(0,r.Z)({ref:t},p,{className:a().apply(void 0,[i,m,f&&"no-gutters"].concat(h))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.Z=f},930:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=a553be23fc668d91329a8983b05bde009818a40c-badcb4dda4ab68637c0c.js.map