"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[76474],{80132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(85893),r=t(11151);const i={id:"route-prop",title:"Route prop reference",sidebar_label:"Route prop"},a=void 0,s={id:"route-prop",title:"Route prop reference",description:"Each screen component in your app is provided with the route prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).",source:"@site/versioned_docs/version-7.x/route-prop.md",sourceDirName:".",slug:"/route-prop",permalink:"/docs/7.x/route-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/route-prop.md",tags:[],version:"7.x",frontMatter:{id:"route-prop",title:"Route prop reference",sidebar_label:"Route prop"},sidebar:"docs",previous:{title:"Options for screens",permalink:"/docs/7.x/screen-options"},next:{title:"Navigation prop",permalink:"/docs/7.x/navigation-prop"}},c={},p=[];function d(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.code,{children:"screen"})," component in your app is provided with the ",(0,o.jsx)(n.code,{children:"route"})," prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives)."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"route"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"key"})," - Unique key of the screen. Created automatically or added while navigating to this screen."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"})," - Name of the screen. Defined in navigator component hierarchy."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"path"})," - An optional string containing the path that opened the screen, exists when the screen was opened via a deep link."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"params"})," - An optional object containing params which is defined while navigating e.g. ",(0,o.jsx)(n.code,{children:"navigate('Twitter', { user: 'Dan Abramov' })"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("samp",{id:"route-prop"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function ProfileScreen({ route }) {\n  return (\n    <View>\n      <Text>This is the profile screen of the app</Text>\n      <Text>{route.name}</Text>\n    </View>\n  );\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);