"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[86478],{16635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(85893),i=a(11151);const r={id:"native-stack-navigator",title:"Native Stack Navigator",sidebar_label:"Native Stack"},o=void 0,s={id:"native-stack-navigator",title:"Native Stack Navigator",description:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack.",source:"@site/versioned_docs/version-5.x/native-stack-navigator.md",sourceDirName:".",slug:"/native-stack-navigator",permalink:"/docs/5.x/native-stack-navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/native-stack-navigator.md",tags:[],version:"5.x",frontMatter:{id:"native-stack-navigator",title:"Native Stack Navigator",sidebar_label:"Native Stack"},sidebar:"docs",previous:{title:"Stack",permalink:"/docs/5.x/stack-navigator"},next:{title:"Drawer",permalink:"/docs/5.x/drawer-navigator"}},c={},d=[{value:"API Definition",id:"api-definition",level:2}];function v(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack."}),"\n",(0,n.jsxs)(t.p,{children:["This navigator uses the native APIs ",(0,n.jsx)(t.code,{children:"UINavigationController"})," on iOS and ",(0,n.jsx)(t.code,{children:"Fragment"})," on Android so that navigation built with ",(0,n.jsx)(t.code,{children:"createNativeStackNavigator"})," will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs."]}),"\n",(0,n.jsxs)(t.p,{children:["The tradeoff is that ",(0,n.jsx)(t.code,{children:"createNativeStackNavigator"})," isn't quite as customizable, so sometimes you may want to use ",(0,n.jsx)(t.code,{children:"createStackNavigator"})," instead in order to achieve the exact appearance or behaviour that you desire for your app."]}),"\n",(0,n.jsxs)(t.p,{children:["This navigator does not currently support web. Use ",(0,n.jsx)(t.code,{children:"createStackNavigator"})," for the web navigation in your app instead."]}),"\n",(0,n.jsxs)(t.p,{children:["To use this navigator, ensure that you have ",(0,n.jsxs)(t.a,{href:"/docs/5.x/getting-started",children:[(0,n.jsx)(t.code,{children:"@react-navigation/native"})," and its dependencies (follow this guide)"]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\ud83d\udca1 If you encounter any bugs while using ",(0,n.jsx)(t.code,{children:"createNativeStackNavigator"}),", please open issues on ",(0,n.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens",children:(0,n.jsx)(t.code,{children:"react-native-screens"})})," rather than the ",(0,n.jsx)(t.code,{children:"react-navigation"})," repository!"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To use this navigator, import ",(0,n.jsx)(t.code,{children:"enableScreens"})," from ",(0,n.jsx)(t.code,{children:"react-native-screens"})," and invoke it, and import ",(0,n.jsx)(t.code,{children:"createNativeStackNavigator"})," from ",(0,n.jsx)(t.code,{children:"react-native-screens/native-stack"}),":"]}),"\n",(0,n.jsx)("samp",{id:"simple-native-stack"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'import { enableScreens } from \'react-native-screens\';\nimport { createNativeStackNavigator } from \'react-native-screens/native-stack\';\n\nenableScreens();\nconst Stack = createNativeStackNavigator();\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Notifications" component={Notifications} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For the full, up-to-date API reference, please refer to the README for ",(0,n.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack",children:"react-native-screens/native-stack"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var n=a(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);