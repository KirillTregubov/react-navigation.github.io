"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[17506],{25530:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(85893),t=r(11151);const i={id:"drawer-actions",title:"DrawerActions reference",sidebar_label:"DrawerActions"},o=void 0,s={id:"drawer-actions",title:"DrawerActions reference",description:"DrawerActions is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in CommonActions.",source:"@site/versioned_docs/version-6.x/drawer-actions.md",sourceDirName:".",slug:"/drawer-actions",permalink:"/docs/drawer-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/drawer-actions.md",tags:[],version:"6.x",frontMatter:{id:"drawer-actions",title:"DrawerActions reference",sidebar_label:"DrawerActions"},sidebar:"docs",previous:{title:"StackActions",permalink:"/docs/stack-actions"},next:{title:"TabActions",permalink:"/docs/tab-actions"}},c={},d=[{value:"openDrawer",id:"opendrawer",level:3},{value:"closeDrawer",id:"closedrawer",level:3},{value:"toggleDrawer",id:"toggledrawer",level:3},{value:"jumpTo",id:"jumpto",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DrawerActions"})," is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in ",(0,a.jsx)(n.a,{href:"/docs/navigation-actions",children:"CommonActions"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The following actions are supported:"}),"\n",(0,a.jsx)(n.h3,{id:"opendrawer",children:"openDrawer"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"openDrawer"})," action can be used to open the drawer pane."]}),"\n",(0,a.jsx)("samp",{id:"drawer-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { DrawerActions } from '@react-navigation/native';\n\nnavigation.dispatch(DrawerActions.openDrawer());\n"})}),"\n",(0,a.jsx)(n.h3,{id:"closedrawer",children:"closeDrawer"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"closeDrawer"})," action can be used to close the drawer pane."]}),"\n",(0,a.jsx)("samp",{id:"drawer-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { DrawerActions } from '@react-navigation/native';\n\nnavigation.dispatch(DrawerActions.closeDrawer());\n"})}),"\n",(0,a.jsx)(n.h3,{id:"toggledrawer",children:"toggleDrawer"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"toggleDrawer"})," action can be used to open the drawer pane if closed, or close if open."]}),"\n",(0,a.jsx)("samp",{id:"drawer-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { DrawerActions } from '@react-navigation/native';\n\nnavigation.dispatch(DrawerActions.toggleDrawer());\n"})}),"\n",(0,a.jsx)(n.h3,{id:"jumpto",children:"jumpTo"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"jumpTo"})," action can be used to jump to an existing route in the drawer navigator."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," - ",(0,a.jsx)(n.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - ",(0,a.jsx)(n.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"drawer-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { DrawerActions } from '@react-navigation/native';\n\nconst jumpToAction = DrawerActions.jumpTo('Profile', { name: 'Satya' });\n\nnavigation.dispatch(jumpToAction);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var a=r(67294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);