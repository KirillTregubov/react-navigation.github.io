"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[81963],{47658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(85893),o=t(11151);const a={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},s=void 0,c={id:"stack-actions",title:"StackActions reference",description:"StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in CommonActions.",source:"@site/versioned_docs/version-5.x/stack-actions.md",sourceDirName:".",slug:"/stack-actions",permalink:"/docs/5.x/stack-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/stack-actions.md",tags:[],version:"5.x",frontMatter:{id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},sidebar:"docs",previous:{title:"CommonActions",permalink:"/docs/5.x/navigation-actions"},next:{title:"DrawerActions",permalink:"/docs/5.x/drawer-actions"}},r={},d=[{value:"replace",id:"replace",level:3},{value:"push",id:"push",level:3},{value:"pop",id:"pop",level:3},{value:"popToTop",id:"poptotop",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"StackActions"})," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",(0,i.jsx)(n.a,{href:"/docs/5.x/navigation-actions",children:(0,i.jsx)(n.code,{children:"CommonActions"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following actions are supported:"}),"\n",(0,i.jsx)(n.h3,{id:"replace",children:"replace"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"replace"})," action allows to replace a route in the ",(0,i.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"}),". It takes the following arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - ",(0,i.jsx)(n.em,{children:"string"})," - A destination name of the route that has been registered somewhere."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - Params to merge into the destination route."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"stack-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  StackActions.replace('Profile', {\n    user: 'jane',\n  })\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to replace a particular route, you can add a ",(0,i.jsx)(n.code,{children:"source"})," property referring to the route key and ",(0,i.jsx)(n.code,{children:"target"})," property referring to the navigation state key:"]}),"\n",(0,i.jsx)("samp",{id:"stack-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...StackActions.replace('Profile', {\n    user: 'jane',\n  }),\n  source: route.key,\n  target: navigation.getState().key,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"source"})," property is explicitly set to ",(0,i.jsx)(n.code,{children:"undefined"}),", it'll replace the focused route."]}),"\n",(0,i.jsx)(n.h3,{id:"push",children:"push"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"push"})," action adds a route on top of the stack and navigates forward to it. This differs from ",(0,i.jsx)(n.code,{children:"navigate"})," in that ",(0,i.jsx)(n.code,{children:"navigate"})," will pop back to earlier in the stack if a route of the given name is already present there. ",(0,i.jsx)(n.code,{children:"push"})," will always add on top, so a route can be present multiple times."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - ",(0,i.jsx)(n.em,{children:"string"})," - Name of the route to push onto the stack."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - Screen params to merge into the destination route (found in the pushed screen through ",(0,i.jsx)(n.code,{children:"route.params"}),")."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"stack-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nconst pushAction = StackActions.push('Profile', { user: 'Wojtek' });\n\nnavigation.dispatch(pushAction);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"pop",children:"pop"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pop"})," action takes you back to a previous screen in the stack. It takes one optional argument (",(0,i.jsx)(n.code,{children:"count"}),"), which allows you to specify how many screens to pop back by."]}),"\n",(0,i.jsx)("samp",{id:"stack-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nconst popAction = StackActions.pop(1);\n\nnavigation.dispatch(popAction);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"poptotop",children:"popToTop"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"popToTop"})," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",(0,i.jsx)(n.code,{children:"StackActions.pop({n: currentIndex})"}),"."]}),"\n",(0,i.jsx)("samp",{id:"stack-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch(StackActions.popToTop());\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);