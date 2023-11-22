"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[25558],{32890:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(85893),o=t(11151);const a={id:"use-navigation",title:"useNavigation",sidebar_label:"useNavigation"},s=void 0,c={id:"use-navigation",title:"useNavigation",description:"useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-6.x/use-navigation.md",sourceDirName:".",slug:"/use-navigation",permalink:"/docs/use-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-navigation.md",tags:[],version:"6.x",frontMatter:{id:"use-navigation",title:"useNavigation",sidebar_label:"useNavigation"},sidebar:"docs",previous:{title:"Link",permalink:"/docs/link"},next:{title:"useRoute",permalink:"/docs/use-route"}},r={},d=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}];function u(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"useNavigation"})," is a hook which gives access to ",(0,i.jsx)(e.code,{children:"navigation"})," object. It's useful when you cannot pass the ",(0,i.jsx)(e.code,{children:"navigation"})," prop into the component directly, or don't want to pass it in case of a deeply nested child."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"useNavigation()"})," returns the ",(0,i.jsx)(e.code,{children:"navigation"})," prop of the screen it's inside."]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)("samp",{id:"use-navigation-example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button } from 'react-native';\nimport { useNavigation } from '@react-navigation/native';\n\nfunction MyBackButton() {\n  const navigation = useNavigation();\n\n  return (\n    <Button\n      title=\"Back\"\n      onPress={() => {\n        navigation.goBack();\n      }}\n    />\n  );\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["See the documentation for the ",(0,i.jsxs)(e.a,{href:"/docs/navigation-prop",children:[(0,i.jsx)(e.code,{children:"navigation"})," prop"]})," for more info."]}),"\n",(0,i.jsx)(e.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,i.jsx)(e.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class MyBackButton extends React.Component {\n  render() {\n    // Get it from props\n    const { navigation } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const navigation = useNavigation();\n\n  return <MyBackButton {...props} navigation={navigation} />;\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);