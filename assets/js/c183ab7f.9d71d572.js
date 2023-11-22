"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[64737],{8986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const s={id:"tab-actions",title:"TabActions reference",sidebar_label:"TabActions"},a=void 0,c={id:"tab-actions",title:"TabActions reference",description:"TabActions is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in CommonActions.",source:"@site/versioned_docs/version-5.x/tab-actions.md",sourceDirName:".",slug:"/tab-actions",permalink:"/docs/5.x/tab-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/tab-actions.md",tags:[],version:"5.x",frontMatter:{id:"tab-actions",title:"TabActions reference",sidebar_label:"TabActions"},sidebar:"docs",previous:{title:"DrawerActions",permalink:"/docs/5.x/drawer-actions"},next:{title:"Custom routers",permalink:"/docs/5.x/custom-routers"}},r={},d=[{value:"jumpTo",id:"jumpto",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TabActions"})," is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in ",(0,o.jsx)(n.a,{href:"/docs/5.x/navigation-actions",children:(0,o.jsx)(n.code,{children:"CommonActions"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The following actions are supported:"}),"\n",(0,o.jsx)(n.h3,{id:"jumpto",children:"jumpTo"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"jumpTo"})," action can be used to jump to an existing route in the tab navigator."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"})," - ",(0,o.jsx)(n.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"params"})," - ",(0,o.jsx)(n.em,{children:"object"})," - Screen params to merge into the destination route (found in the pushed screen through ",(0,o.jsx)(n.code,{children:"route.params"}),")."]}),"\n"]}),"\n",(0,o.jsx)("samp",{id:"tab-actions"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { TabActions } from '@react-navigation/native';\n\nconst jumpToAction = TabActions.jumpTo('Profile', { user: 'Satya' });\n\nnavigation.dispatch(jumpToAction);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);