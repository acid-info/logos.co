"use strict";(self.webpackChunklogos_docusaurus_template=self.webpackChunklogos_docusaurus_template||[]).push([[407],{59251:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={title:"Process",sidebar_position:6,description:"Research Process for the Logos Network State"},s=void 0,a={unversionedId:"process",id:"process",title:"Process",description:"Research Process for the Logos Network State",source:"@site/docs/process.md",sourceDirName:".",slug:"/process",permalink:"/process",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Process",sidebar_position:6,description:"Research Process for the Logos Network State"},sidebar:"main",previous:{title:"Storage",permalink:"/storage"},next:{title:"Culture",permalink:"/culture"}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We build public good protocols for everyone, then implement them the way that works for us."),(0,n.kt)("p",null,"Public goods are for the people, and thus should be owned and controlled by them. How they are built influences this outcome. To this end, we have come up with a process that helps to ensure that the products of our effort are not solely controlled by us and our potentially limited self-interests and opinions. "),(0,n.kt)("p",null,"In a nutshell, Logos projects will work hand-in-hand with our sister research organization, Vac, to create agnostic protocols for everyone to share and contribute to. You can read more about Vac and their mission ",(0,n.kt)("a",{parentName:"p",href:"https://vac.dev"},"here"),". "),(0,n.kt)("p",null,"The general flow of how a given project within Logos collaborates with Vac is summarized in the following diagram. "),(0,n.kt)("mermaid",{value:'flowchart\n    O1[Unopinionated Protocols]\n    O2[Users]\n    subgraph Project\n    L1[Engineering]--\x3e|Delivers|L2[Opinionated Products]\n    L3[Research]--\x3e|Delivers|L4[PoC Implementation]\n    end\n\n    subgraph Vac \n    V1[Principles]--\x3e|Aligns|V2[Agnostic Specifications]\n    V3[Protocol Development Process]--\x3e|Structures|V2\n    click V3 "https://rfc.vac.dev" "Specifications"\n    click V1 "https://status.im/about/" "Principles"\n    end\n    \n    L3--\x3e|Delivers|V2\n    V2--\x3e|Informs|L1\n    V2--\x3e|Allow for|O1\n    L2--\x3e|Serves|O2\n    O2--\x3e|Provides user feedback to|L1\n    L1--\x3e|Updates|V2'}),(0,n.kt)("p",null,"A Logos project will perform research on a problem. Their initial deliverables will be a Proof of Concept (PoC) and a set of specifications that detail explicitly how that solution is built. Vac will provide resources to the Logos project by facilitating in the process writing and hardening the specifications being developed. "),(0,n.kt)("p",null,"In addition to helping in the process of spec writing, they also serve as an embodiment of the foundational principles that maintain the ethical development of public good infrastructure. This means that specifications written, developed, and housed with Vac are not tied to any given chain, biased ideology, and the subsequent control that comes from it. These specifications can then be used by the general public in any way they see fit, free and open source. "),(0,n.kt)("p",null,"The Logos project will then pull back an opinionated view of these specifications to implement their vision of how the product should be built for their particular use case. "),(0,n.kt)("p",null,"This process is our commitment to build in the open and work to maintain an ethos of building for the public good while also allowing ourselves to create opinionated products that suit our specific needs."))}u.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return o?r.createElement(f,s(s({ref:t},p),{},{components:o})):r.createElement(f,s({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);