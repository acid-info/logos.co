(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3847)}])},8654:function(e,t,n){"use strict";n.d(t,{D:function(){return c},A:function(){return l}});var o=n(5893),r=n(7294),a=n(4775),i=(n(9447),{config:a,sitemap:n(2057),codeBlockStyle:n(1768)}),s=(0,r.createContext)(i),c=function(e){var t=e.children;return(0,o.jsx)(s.Provider,{value:i,children:t})},l=function(){return(0,r.useContext)(s)}},8027:function(e,t,n){"use strict";n.d(t,{t:function(){return f},h:function(){return g}});var o=n(5893),r=n(7294),a=n(8402),i=function(e){for(var t=[],n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],o=0;o<e.length;o+=2){var r=16*parseInt(e[o],16),a=parseInt(e[o+1],16)+r;a/=255,t.push(a.toFixed(2))}var i=t[0],s=t[1],c=t[2];return n[0]=i,n[6]=s,n[12]=c,n.join(" ")},s=n(8654),c=n(3457),l=n.n(c),u=a.h.EThemeMode,d={mode:u.DARK,toggleMode:function(){}},p=(0,r.createContext)(d),f=function(e){var t=e.children,n=(0,r.useState)(e.mode||d.mode),a=n[0],c=n[1],f=(0,s.A)().config.theme.palettes[u.DARK],g=f.background.replace("#","");return(0,o.jsxs)(p.Provider,{value:{mode:a,toggleMode:function(){if(window){var e=a===u.DARK?u.LIGHT:u.DARK;document.body.className=e,c(e)}}},children:[(0,o.jsx)("svg",{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:(0,o.jsx)("defs",{children:(0,o.jsx)("filter",{id:"colored",children:"000000"===g?(0,o.jsx)("feColorMatrix",{type:"matrix",values:"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"}):(0,o.jsx)("feColorMatrix",{type:"matrix",values:i(g)})})})}),(0,o.jsx)(l(),{color:f.text,startPosition:.3,stopDelayMs:200,height:3,showOnShallow:!0,options:{},nonce:"logos"}),t]})},g=function(){return(0,r.useContext)(p)}},3847:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(8654),a=n(8027);n(535),n(6774),n(1039);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.Component,n=e.pageProps,i=n.children,l=c(n,["children"]);return(0,o.jsx)(r.D,{children:(0,o.jsx)(a.t,{children:(0,o.jsx)(t,s({},l,{children:i}))})})}},8402:function(e,t,n){"use strict";var o,r,a;n.d(t,{h:function(){return o}}),a=o||(o={}),(r=a.EThemeMode||(a.EThemeMode={})).DARK="dark",r.LIGHT="light"},535:function(){},6774:function(){},1039:function(){},1163:function(e,t,n){e.exports=n(880)},3457:function(e,t,n){var o,r=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=e=>a(e,"__esModule",{value:!0}),d=(e,t)=>a(e,"name",{value:t,configurable:!0}),p=(e,t,n,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of s(t))!l.call(e,r)&&(n||"default"!==r)&&a(e,r,{get:()=>t[r],enumerable:!(o=i(t,r))||o.enumerable});return e},f=(e,t)=>p(u(a(null!=e?r(c(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),g=(o="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>o&&o.get(e)||(t=p(u({}),e,1),o&&o.set(e,t),t)),m={};((e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})})(m,{default:()=>x});var h=f(n(1163)),b=f(n(4865)),v=f(n(5697)),y=f(n(7294));function x({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:o=3,showOnShallow:r=!0,options:a,nonce:i}){let s=null;y.useEffect((()=>(a&&b.configure(a),h.default.events.on("routeChangeStart",c),h.default.events.on("routeChangeComplete",l),h.default.events.on("routeChangeError",l),()=>{h.default.events.off("routeChangeStart",c),h.default.events.off("routeChangeComplete",l),h.default.events.off("routeChangeError",l)})),[]);let c=d(((e,{shallow:n})=>{(!n||r)&&(b.set(t),b.start())}),"routeChangeStart"),l=d(((e,{shallow:t})=>{(!t||r)&&(s&&clearTimeout(s),s=setTimeout((()=>{b.done(!0)}),n))}),"routeChangeEnd");return y.createElement("style",{nonce:i},`\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ${e};\n        position: fixed;\n        z-index: 9999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ${o}px;\n      }\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};\n        opacity: 1;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n        -ms-transform: rotate(3deg) translate(0px, -4px);\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 1031;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ${e};\n        border-left-color: ${e};\n        border-radius: 50%;\n        -webkit-animation: nprogresss-spinner 400ms linear infinite;\n        animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @keyframes nprogress-spinner {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    `)}d(x,"NextNProgress"),x.propTypes={color:v.string,startPosition:v.number,stopDelayMs:v.number,height:v.number,showOnShallow:v.bool,options:v.object,nonce:v.string},e.exports=g(m)},4865:function(e,t,n){var o,r;o=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function o(e){return 100*(-1+e)}function r(e,n,r){var a;return(a="translate3d"===t.positionUsing?{transform:"translate3d("+o(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+o(e)+"%,0)"}:{"margin-left":o(e)+"%"}).transition="all "+n+"ms "+r,a}e.configure=function(e){var n,o;for(n in e)void 0!==(o=e[n])&&e.hasOwnProperty(n)&&(t[n]=o);return this},e.status=null,e.set=function(o){var s=e.isStarted();o=n(o,t.minimum,1),e.status=1===o?null:o;var c=e.render(!s),l=c.querySelector(t.barSelector),u=t.speed,d=t.easing;return c.offsetWidth,a((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),i(l,r(o,u,d)),1===o?(i(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){i(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),u)}),u)):setTimeout(n,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var o=e.status;return o?("number"!==typeof t&&(t=(1-o)*n(Math.random()*o,.1,.95)),o=n(o+t,0,.994),e.set(o)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(o){return o&&"resolved"!==o.state()?(0===n&&e.start(),t++,n++,o.always((function(){0===--n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=t.template;var a,s=r.querySelector(t.barSelector),l=n?"-100":o(e.status||0),u=document.querySelector(t.parent);return i(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),t.showSpinner||(a=r.querySelector(t.spinnerSelector))&&d(a),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(r),r},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function o(t){var n=document.body.style;if(t in n)return t;for(var o,r=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);r--;)if((o=e[r]+a)in n)return o;return t}function r(e){return e=n(e),t[e]||(t[e]=o(e))}function a(e,t,n){t=r(t),e.style[t]=n}return function(e,t){var n,o,r=arguments;if(2==r.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&a(e,n,o);else a(e,r[1],r[2])}}();function s(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=u(e),o=n+t;s(n,t)||(e.className=o.substring(1))}function l(e,t){var n,o=u(e);s(e,t)&&(n=o.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0===(r="function"===typeof o?o.call(t,n,t,e):o)||(e.exports=r)},2703:function(e,t,n){"use strict";var o=n(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1768:function(e){"use strict";e.exports=JSON.parse('{"code[class*=\\"language-\\"]":{"fontFamily":"Consolas, Menlo, Monaco, \\"Andale Mono WT\\", \\"Andale Mono\\", \\"Lucida Console\\", \\"Lucida Sans Typewriter\\", \\"DejaVu Sans Mono\\", \\"Bitstream Vera Sans Mono\\", \\"Liberation Mono\\", \\"Nimbus Mono L\\", \\"Courier New\\", Courier, monospace","fontSize":"14px","lineHeight":"1.375","direction":"ltr","textAlign":"left","whiteSpace":"pre","wordSpacing":"normal","wordBreak":"normal","MozTabSize":"4","OTabSize":"4","tabSize":"4","WebkitHyphens":"none","MozHyphens":"none","msHyphens":"none","hyphens":"none","background":"#2a2734","color":"#9a86fd"},"pre[class*=\\"language-\\"]":{"fontFamily":"Consolas, Menlo, Monaco, \\"Andale Mono WT\\", \\"Andale Mono\\", \\"Lucida Console\\", \\"Lucida Sans Typewriter\\", \\"DejaVu Sans Mono\\", \\"Bitstream Vera Sans Mono\\", \\"Liberation Mono\\", \\"Nimbus Mono L\\", \\"Courier New\\", Courier, monospace","fontSize":"14px","lineHeight":"1.375","direction":"ltr","textAlign":"left","whiteSpace":"pre","wordSpacing":"normal","wordBreak":"normal","MozTabSize":"4","OTabSize":"4","tabSize":"4","WebkitHyphens":"none","MozHyphens":"none","msHyphens":"none","hyphens":"none","background":"#2a2734","color":"#9a86fd","padding":"1em","margin":".5em 0","overflow":"auto"},"pre > code[class*=\\"language-\\"]":{"fontSize":"1em"},"pre[class*=\\"language-\\"]::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"] ::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"]::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"] ::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"]::selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"] ::selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"]::selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"] ::selection":{"textShadow":"none","background":"#6a51e6"},":not(pre) > code[class*=\\"language-\\"]":{"padding":".1em","borderRadius":".3em"},"comment":{"color":"#6c6783"},"prolog":{"color":"#6c6783"},"doctype":{"color":"#6c6783"},"cdata":{"color":"#6c6783"},"punctuation":{"color":"#6c6783"},"namespace":{"Opacity":".7"},"tag":{"color":"#e09142"},"operator":{"color":"#e09142"},"number":{"color":"#e09142"},"property":{"color":"#9a86fd"},"function":{"color":"#9a86fd"},"tag-id":{"color":"#eeebff"},"selector":{"color":"#eeebff"},"atrule-id":{"color":"#eeebff"},"code.language-javascript":{"color":"#c4b9fe"},"attr-name":{"color":"#c4b9fe"},"code.language-css":{"color":"#ffcc99"},"code.language-scss":{"color":"#ffcc99"},"boolean":{"color":"#ffcc99"},"string":{"color":"#ffcc99"},"entity":{"color":"#ffcc99","cursor":"help"},"url":{"color":"#ffcc99"},".language-css .token.string":{"color":"#ffcc99"},".language-scss .token.string":{"color":"#ffcc99"},".style .token.string":{"color":"#ffcc99"},"attr-value":{"color":"#ffcc99"},"keyword":{"color":"#ffcc99"},"control":{"color":"#ffcc99"},"directive":{"color":"#ffcc99"},"unit":{"color":"#ffcc99"},"statement":{"color":"#ffcc99"},"regex":{"color":"#ffcc99"},"atrule":{"color":"#ffcc99"},"placeholder":{"color":"#ffcc99"},"variable":{"color":"#ffcc99"},"deleted":{"textDecoration":"line-through"},"inserted":{"borderBottom":"1px dotted #eeebff","textDecoration":"none"},"italic":{"fontStyle":"italic"},"important":{"fontWeight":"bold","color":"#c4b9fe"},"bold":{"fontWeight":"bold"},"pre > code.highlight":{"Outline":".4em solid #8a75f5","OutlineOffset":".4em"},".line-numbers.line-numbers .line-numbers-rows":{"borderRightColor":"#2c2937"},".line-numbers .line-numbers-rows > span:before":{"color":"#3c3949"},".line-highlight.line-highlight":{"background":"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}}')},4775:function(e){"use strict";e.exports=JSON.parse('{"theme":{"palettes":{"dark":{"background":"#000000","text":"#FFFFFF","accentActive":"#7187ff","accentMute":"#30363d"},"light":{"background":"#FFFFFF","text":"#000000","accentActive":"#7187ff","accentMute":"#dedede"}},"fontFamily":"monospace","codeTheme":"prism/duotone-dark"},"template":"default","static_assets_folder":"static-assets","navigation":{"home":"main.md","fileOrdersInSidenav":["main.md","technology/overview","technology/process","About.md"],"folderOrdersInSidenav":["technology"],"exclude":["privacy-policy","term-of-use"],"homeTitle":"Main"},"ds_id":"logos","seo":{"title":"Logos Network State","description":"Logos is a grassroots movement to provide trust-minimized, corruption resistant governing services and social institutions to underserved citizens.","image":"logos-site-preview-image.png","url":"https://staging.logos.co","social_media":[]}}')},2057:function(e){"use strict";e.exports=JSON.parse('[{"metadata":{"published":true,"title":"About"},"navOrder":1678817720.669,"localPath":"About.md","path":["about"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Main"},"navOrder":1678817723.672,"localPath":"main.md","path":[],"children":[],"isDir":false},{"metadata":{"published":true,"title":"privacy-policy","permalink":"privacy-policy"},"navOrder":-1,"localPath":"privacy-policy.md","path":["privacy-policy"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"term-of-use","permalink":"term-of-use"},"navOrder":-1,"localPath":"term-of-use.md","path":["term-of-use"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"technology"},"navOrder":1678817723.673,"localPath":"technology/index.md","path":["technology"],"children":[],"isDir":true},{"metadata":{"published":true,"title":"overview"},"navOrder":-1,"localPath":"technology/overview.md","path":["technology","overview"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"process"},"navOrder":-1,"localPath":"technology/process.md","path":["technology","process"],"children":[],"isDir":false}]')},9447:function(e){"use strict";e.exports=JSON.parse('{"metadata":{"published":true,"title":"docs"},"navOrder":-1,"localPath":"","path":[""],"children":[{"metadata":{"published":true,"title":"technology"},"navOrder":1678817723.673,"localPath":"technology/index.md","path":["technology"],"children":[{"metadata":{"published":true,"title":"overview"},"navOrder":-1,"localPath":"technology/overview.md","path":["technology","overview"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"process"},"navOrder":-1,"localPath":"technology/process.md","path":["technology","process"],"children":[],"isDir":false}],"isDir":true},{"metadata":{"published":true,"title":"Main"},"navOrder":1678817723.672,"localPath":"main.md","path":[],"children":[],"isDir":false},{"metadata":{"published":true,"title":"About"},"navOrder":1678817720.669,"localPath":"About.md","path":["about"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"privacy-policy","permalink":"privacy-policy"},"navOrder":-1,"localPath":"privacy-policy.md","path":["privacy-policy"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"term-of-use","permalink":"term-of-use"},"navOrder":-1,"localPath":"term-of-use.md","path":["term-of-use"],"children":[],"isDir":false}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var n=e.O();_N_E=n}]);