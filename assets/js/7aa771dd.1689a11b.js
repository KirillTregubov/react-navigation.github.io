"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[10888],{3981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(85893),r=a(11151),i=a(74866),s=a(85162);const o={title:"React Navigation 7.0 Release Candidate",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["announcement"]},l=void 0,c={permalink:"/blog/2024/06/27/react-navigation-7.0-rc",source:"@site/blog/2024-06-27-react-navigation-7.0-rc.md",title:"React Navigation 7.0 Release Candidate",description:"We're excited to announce the release candidate of React Navigation 7.0.",date:"2024-06-27T00:00:00.000Z",formattedDate:"June 27, 2024",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:3.14,hasTruncateMarker:!0,authors:[{name:"Satyajit Sahoo",title:"Core Team",url:"https://twitter.com/satya164",imageURL:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4"}],frontMatter:{title:"React Navigation 7.0 Release Candidate",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["announcement"]},unlisted:!1,nextItem:{title:"Introducing Static API",permalink:"/blog/2024/03/25/introducing-static-api"}},u={authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Static API",id:"static-api",level:3},{value:"Preloading screens",id:"preloading-screens",level:3},{value:"Sidebar support in Bottom Tab Navigator",id:"sidebar-support-in-bottom-tab-navigator",level:3},{value:"Animation support in Bottom Tab Navigator",id:"animation-support-in-bottom-tab-navigator",level:3},{value:"<code>react-native-drawer-layout</code> package",id:"react-native-drawer-layout-package",level:3},{value:"Try it out",id:"try-it-out",level:2},{value:"Special thanks",id:"special-thanks",level:2},{value:"Sponsor us",id:"sponsor-us",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"We're excited to announce the release candidate of React Navigation 7.0."}),"\n",(0,n.jsx)(t.p,{children:"This release includes a new static API that simplifies the configuration of navigators and improves TypeScript and deep linking support. As well as various other improvements and new features."}),"\n",(0,n.jsxs)(t.p,{children:["You can read the full list of changes in the ",(0,n.jsx)(t.a,{href:"/docs/7.x/upgrading-from-6.x",children:"upgrade guide"}),". Here are some highlights:"]}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"static-api",children:"Static API"}),"\n",(0,n.jsx)(t.p,{children:"The new static API is an optional API that simplifies the configuration of navigators and makes it easier to work with TypeScript and deep linking."}),"\n",(0,n.jsx)(t.p,{children:"It follows the same principles as the dynamic API, but instead of defining screens using functions, you define them using a configuration object, similar to React Navigation 4:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const Stack = createStackNavigator({\n  screens: {\n    Home: {\n      screen: Home,\n    },\n    Profile: {\n      screen: Profile,\n    },\n    Settings: {\n      screen: Settings,\n    },\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more details and examples, checkout the ",(0,n.jsx)(t.a,{href:"/blog/2024/03/25/introducing-static-api",children:"introduction to the static API"})," blog post."]}),"\n",(0,n.jsx)(t.h3,{id:"preloading-screens",children:"Preloading screens"}),"\n",(0,n.jsx)(t.p,{children:"Many navigators now support preloading screens prior to navigating to them. This can be useful to improve the perceived performance of the app by preloading the screens that the user is likely to navigate to next. Preloading a screen will render it off-screen and execute its side-effects such as data fetching."}),"\n",(0,n.jsxs)(t.p,{children:["To preload a screen, you can use the ",(0,n.jsx)(t.code,{children:"preload"})," method on the navigation object:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"navigation.preload('Details', { id: 42 });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"sidebar-support-in-bottom-tab-navigator",children:"Sidebar support in Bottom Tab Navigator"}),"\n",(0,n.jsxs)(t.p,{children:["The Bottom Tab Navigator now supports showing tabs on the side by specifying ",(0,n.jsx)(t.code,{children:"tabBarPosition"})," option as ",(0,n.jsx)(t.code,{children:"'left'"})," or ",(0,n.jsx)(t.code,{children:"'right'"}),". This will make it easier to build responsive UIs for where you want to show tabs on the bottom on smaller screens and switch to a sidebar on larger screens."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sidebar support in Bottom Tab Navigator",src:a(86113).Z+"",width:"2048",height:"1536"})}),"\n",(0,n.jsx)(t.h3,{id:"animation-support-in-bottom-tab-navigator",children:"Animation support in Bottom Tab Navigator"}),"\n",(0,n.jsxs)(t.p,{children:["The Bottom Tab Navigator now supports animations when switching between tabs. You can customize the animation using the ",(0,n.jsx)(t.code,{children:"animation"})," option."]}),"\n",(0,n.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,n.jsx)("source",{src:"/assets/7.x/bottom-tabs-shift.mp4"})}),"\n",(0,n.jsxs)(t.h3,{id:"react-native-drawer-layout-package",children:[(0,n.jsx)(t.code,{children:"react-native-drawer-layout"})," package"]}),"\n",(0,n.jsxs)(t.p,{children:["The drawer implementation used in ",(0,n.jsx)(t.code,{children:"@react-navigation/drawer"})," is now available as a standalone package called ",(0,n.jsx)(t.code,{children:"react-native-drawer-layout"}),". This makes it easier to use the drawer implementation even if you're not using React Navigation, or if you want to use it without a navigator."]}),"\n",(0,n.jsx)(t.p,{children:"You can install it with:"}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install react-native-drawer-layout@next\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add react-native-drawer-layout@next\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add react-native-drawer-layout@next\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/7.x/drawer-layout",children:(0,n.jsx)(t.code,{children:"react-native-drawer-layout"})})," for usage."]}),"\n",(0,n.jsx)(t.h2,{id:"try-it-out",children:"Try it out"}),"\n",(0,n.jsxs)(t.p,{children:["If you'd like to try it out, add ",(0,n.jsx)(t.code,{children:"@next"})," to the package, you're installing. For example:"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install @react-navigation/nativ@next @react-navigation/bottom-tabs@next\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add @react-navigation/nativ@next @react-navigation/bottom-tabs@next\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"pnpm add @react-navigation/nativ@next @react-navigation/bottom-tabs@next\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["This is the best time to try it out and provide feedback before the final release. If you encounter any issues or have any feedback or suggestions, please let us know on ",(0,n.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/issues",children:"GitHub issues"})," or our ",(0,n.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/discussions",children:"GitHub Discussions forum"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"special-thanks",children:"Special thanks"}),"\n",(0,n.jsx)(t.p,{children:"I'd like to extend a big thank you to all the contributors who helped with this release. Your contributions are what make React Navigation great."}),"\n",(0,n.jsxs)(t.p,{children:["I want to give a special shoutout to ",(0,n.jsx)(t.a,{href:"https://twitter.com/mosdnk",children:"Micha\u0142 Osadnik"})," for working through many of the features and improvements in this release as well as providing much-needed motivation."]}),"\n",(0,n.jsxs)(t.p,{children:["Many thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/patrycjakalinska",children:"Patrycja Kali\u0144ska"})," from ",(0,n.jsx)(t.a,{href:"https://swmansion.com/",children:"Software Mansion"})," for helping with the documentation."]}),"\n",(0,n.jsxs)(t.p,{children:["I'd also like to thank ",(0,n.jsx)(t.a,{href:"https://x.com/tboba_",children:"Tymoteusz Boba"})," and ",(0,n.jsx)(t.a,{href:"https://x.com/kafara_kacper",children:"Kacper Kafara"})," from the ",(0,n.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens",children:"React Native Screens"}),". React Navigation wouldn't be where it is today without React Native Screens."]}),"\n",(0,n.jsxs)(t.p,{children:["Last but not least, without dedicated time from ",(0,n.jsx)(t.a,{href:"https://callstack.com/",children:"Callstack"}),", it would be impossible to maintain and improve React Navigation."]}),"\n",(0,n.jsx)(t.h2,{id:"sponsor-us",children:"Sponsor us"}),"\n",(0,n.jsx)(t.p,{children:"If React Navigation helps you to deliver value to your customers, it'd mean a lot if you could sponsor us. Sponsorships will help us to move more quickly towards our goal of building the best cross-platform navigation library and continue to provide timely support for bug reports in our GitHub issues."}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udc49 ",(0,n.jsx)(t.a,{href:"https://github.com/sponsors/react-navigation",children:"Visit our GitHub Sponsors page"})," \ud83d\udc48"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var n=a(86010);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(86010),i=a(12466),s=a(16550),o=a(20469),l=a(91980),c=a(67392),u=a(50012);function d(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:a,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[r,i]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(c(t),s(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{var r;const t=l.indexOf(e.currentTarget)-1;a=null!=(r=l[t])?r:l[l.length-1];break}}null==(t=a)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===t}),children:null!=a?a:t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function w(e){const t=(0,v.Z)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},86113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bottom-tabs-sidebar-d2e59277dcaccd8ecf82f9a2794eb863.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(67294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);