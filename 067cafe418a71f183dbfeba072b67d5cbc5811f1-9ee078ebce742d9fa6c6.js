(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[139],{7526:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function l(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}return(0,i.default)(l)};var l,r=t(1060),i=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},1060:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,i,s){var o=r||"<<anonymous>>",n=s||l;if(null==t[l])return a?new Error("Required "+i+" `"+n+"` was not specified in `"+o+"`."):null;for(var d=arguments.length,c=Array(d>6?d-6:0),m=6;m<d;m++)c[m-6]=arguments[m];return e.apply(void 0,[t,l,o,i,n].concat(c))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},3013:function(e,a,t){"use strict";t.d(a,{Z:function(){return T}});var l=t(2122),r=t(9756),i=t(5900),s=t.n(i),o=t(7294),n=(t(7526),o.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,n=e.className,d=e.type,c=void 0===d?"valid":d,m=e.tooltip,u=void 0!==m&&m,f=(0,r.Z)(e,["as","className","type","tooltip"]);return o.createElement(i,(0,l.Z)({},f,{ref:a,className:s()(n,c+"-"+(u?"tooltip":"feedback"))}))})));n.displayName="Feedback";var d=n,c=o.createContext({controlId:void 0}),m=t(9541),u=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,u=e.type,f=void 0===u?"checkbox":u,v=e.isValid,b=void 0!==v&&v,p=e.isInvalid,x=void 0!==p&&p,y=e.isStatic,N=e.as,P=void 0===N?"input":N,E=(0,r.Z)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),h=(0,o.useContext)(c),I=h.controlId,C=h.custom?[n,"custom-control-input"]:[i,"form-check-input"],F=C[0],w=C[1];return i=(0,m.vE)(F,w),o.createElement(P,(0,l.Z)({},E,{ref:a,type:f,id:t||I,className:s()(d,i,b&&"is-valid",x&&"is-invalid",y&&"position-static")}))}));u.displayName="FormCheckInput";var f=u,v=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,d=e.htmlFor,u=(0,r.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,o.useContext)(c),v=f.controlId,b=f.custom?[i,"custom-control-label"]:[t,"form-check-label"],p=b[0],x=b[1];return t=(0,m.vE)(p,x),o.createElement("label",(0,l.Z)({},u,{ref:a,htmlFor:d||v,className:s()(n,t)}))}));v.displayName="FormCheckLabel";var b=v,p=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,u=e.inline,v=void 0!==u&&u,p=e.disabled,x=void 0!==p&&p,y=e.isValid,N=void 0!==y&&y,P=e.isInvalid,E=void 0!==P&&P,h=e.feedbackTooltip,I=void 0!==h&&h,C=e.feedback,F=e.className,w=e.style,Z=e.title,k=void 0===Z?"":Z,g=e.type,R=void 0===g?"checkbox":g,V=e.label,_=e.children,O=e.custom,L=e.as,S=void 0===L?"input":L,M=(0,r.Z)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),T="switch"===R||O,z=T?[n,"custom-control"]:[i,"form-check"],A=z[0],j=z[1];i=(0,m.vE)(A,j);var q=(0,o.useContext)(c).controlId,G=(0,o.useMemo)((function(){return{controlId:t||q,custom:T}}),[q,T,t]),B=T||null!=V&&!1!==V&&!_,D=o.createElement(f,(0,l.Z)({},M,{type:"switch"===R?"checkbox":R,ref:a,isValid:N,isInvalid:E,isStatic:!B,disabled:x,as:S}));return o.createElement(c.Provider,{value:G},o.createElement("div",{style:w,className:s()(F,i,T&&"custom-"+R,v&&i+"-inline")},_||o.createElement(o.Fragment,null,D,B&&o.createElement(b,{title:k},V),(N||E)&&o.createElement(d,{type:N?"valid":"invalid",tooltip:I},C))))}));p.displayName="FormCheck",p.Input=f,p.Label=b;var x=p,y=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,u=e.isValid,f=e.isInvalid,v=e.lang,b=e.as,p=void 0===b?"input":b,x=(0,r.Z)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=(0,o.useContext)(c),N=y.controlId,P=y.custom?[n,"custom-file-input"]:[i,"form-control-file"],E=P[0],h=P[1];return i=(0,m.vE)(E,h),o.createElement(p,(0,l.Z)({},x,{ref:a,id:t||N,type:"file",lang:v,className:s()(d,i,u&&"is-valid",f&&"is-invalid")}))}));y.displayName="FormFileInput";var N=y,P=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,d=e.htmlFor,u=(0,r.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=(0,o.useContext)(c),v=f.controlId,b=f.custom?[i,"custom-file-label"]:[t,"form-file-label"],p=b[0],x=b[1];return t=(0,m.vE)(p,x),o.createElement("label",(0,l.Z)({},u,{ref:a,htmlFor:d||v,className:s()(n,t),"data-browse":u["data-browse"]}))}));P.displayName="FormFileLabel";var E=P,h=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,u=e.disabled,f=void 0!==u&&u,v=e.isValid,b=void 0!==v&&v,p=e.isInvalid,x=void 0!==p&&p,y=e.feedbackTooltip,P=void 0!==y&&y,h=e.feedback,I=e.className,C=e.style,F=e.label,w=e.children,Z=e.custom,k=e.lang,g=e["data-browse"],R=e.as,V=void 0===R?"div":R,_=e.inputAs,O=void 0===_?"input":_,L=(0,r.Z)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=Z?[n,"custom"]:[i,"form-file"],M=S[0],T=S[1];i=(0,m.vE)(M,T);var z=(0,o.useContext)(c).controlId,A=(0,o.useMemo)((function(){return{controlId:t||z,custom:Z}}),[z,Z,t]),j=null!=F&&!1!==F&&!w,q=o.createElement(N,(0,l.Z)({},L,{ref:a,isValid:b,isInvalid:x,disabled:f,as:O,lang:k}));return o.createElement(c.Provider,{value:A},o.createElement(V,{style:C,className:s()(I,i,Z&&"custom-file")},w||o.createElement(o.Fragment,null,Z?o.createElement(o.Fragment,null,q,j&&o.createElement(E,{"data-browse":g},F)):o.createElement(o.Fragment,null,j&&o.createElement(E,null,F),q),(b||x)&&o.createElement(d,{type:b?"valid":"invalid",tooltip:P},h))))}));h.displayName="FormFile",h.Input=N,h.Label=E;var I=h,C=(t(2473),o.forwardRef((function(e,a){var t,i,n=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,f=e.size,v=e.htmlSize,b=e.id,p=e.className,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,P=void 0!==N&&N,E=e.plaintext,h=e.readOnly,I=e.custom,C=e.as,F=void 0===C?"input":C,w=(0,r.Z)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),Z=(0,o.useContext)(c).controlId,k=I?[d,"custom"]:[n,"form-control"],g=k[0],R=k[1];if(n=(0,m.vE)(g,R),E)(i={})[n+"-plaintext"]=!0,t=i;else if("file"===u){var V;(V={})[n+"-file"]=!0,t=V}else if("range"===u){var _;(_={})[n+"-range"]=!0,t=_}else if("select"===F&&I){var O;(O={})[n+"-select"]=!0,O[n+"-select-"+f]=f,t=O}else{var L;(L={})[n]=!0,L[n+"-"+f]=f,t=L}return o.createElement(F,(0,l.Z)({},w,{type:u,size:v,ref:a,readOnly:h,id:b||Z,className:s()(p,t,y&&"is-valid",P&&"is-invalid")}))})));C.displayName="FormControl";var F=Object.assign(C,{Feedback:d}),w=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.children,d=e.controlId,u=e.as,f=void 0===u?"div":u,v=(0,r.Z)(e,["bsPrefix","className","children","controlId","as"]);t=(0,m.vE)(t,"form-group");var b=(0,o.useMemo)((function(){return{controlId:d}}),[d]);return o.createElement(c.Provider,{value:b},o.createElement(f,(0,l.Z)({},v,{ref:a,className:s()(i,t)}),n))}));w.displayName="FormGroup";var Z=w,k=t(7408),g=o.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,n=e.bsPrefix,d=e.column,u=e.srOnly,f=e.className,v=e.htmlFor,b=(0,r.Z)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=(0,o.useContext)(c).controlId;n=(0,m.vE)(n,"form-label");var x="col-form-label";"string"==typeof d&&(x=x+" "+x+"-"+d);var y=s()(f,n,u&&"sr-only",d&&x);return v=v||p,d?o.createElement(k.Z,(0,l.Z)({as:"label",className:y,htmlFor:v},b)):o.createElement(i,(0,l.Z)({ref:a,className:y,htmlFor:v},b))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var R=g,V=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.as,d=void 0===n?"small":n,c=e.muted,u=(0,r.Z)(e,["bsPrefix","className","as","muted"]);return t=(0,m.vE)(t,"form-text"),o.createElement(d,(0,l.Z)({},u,{ref:a,className:s()(i,t,c&&"text-muted")}))}));V.displayName="FormText";var _=V,O=o.forwardRef((function(e,a){return o.createElement(x,(0,l.Z)({},e,{ref:a,type:"switch"}))}));O.displayName="Switch",O.Input=x.Input,O.Label=x.Label;var L=O,S=(0,t(8870).Z)("form-row"),M=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,n=e.className,d=e.validated,c=e.as,u=void 0===c?"form":c,f=(0,r.Z)(e,["bsPrefix","inline","className","validated","as"]);return t=(0,m.vE)(t,"form"),o.createElement(u,(0,l.Z)({},f,{ref:a,className:s()(n,d&&"was-validated",i&&t+"-inline")}))}));M.displayName="Form",M.defaultProps={inline:!1},M.Row=S,M.Group=Z,M.Control=F,M.Check=x,M.File=I,M.Switch=L,M.Label=R,M.Text=_;var T=M}}]);
//# sourceMappingURL=067cafe418a71f183dbfeba072b67d5cbc5811f1-9ee078ebce742d9fa6c6.js.map