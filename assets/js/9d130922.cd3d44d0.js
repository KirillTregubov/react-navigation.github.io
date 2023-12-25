"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[31762],{37626:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(85893),i=t(11151);const a={id:"use-navigation",title:"useNavigation",sidebar_label:"useNavigation"},s=void 0,c={id:"use-navigation",title:"useNavigation",description:"useNavigation is a hook that gives access to navigation object. It's useful when you cannot pass the navigation object as a prop to the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-7.x/use-navigation.md",sourceDirName:".",slug:"/use-navigation",permalink:"/docs/7.x/use-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-navigation.md",tags:[],version:"7.x",frontMatter:{id:"use-navigation",title:"useNavigation",sidebar_label:"useNavigation"},sidebar:"docs",previous:{title:"Link",permalink:"/docs/7.x/link"},next:{title:"useRoute",permalink:"/docs/7.x/use-route"}},r={},u=[{value:"Using with class component",id:"using-with-class-component",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"useNavigation"})," is a hook that gives access to ",(0,o.jsx)(e.code,{children:"navigation"})," object. It's useful when you cannot pass the ",(0,o.jsx)(e.code,{children:"navigation"})," object as a prop to the component directly, or don't want to pass it in case of a deeply nested child."]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"useNavigation"})," hook returns the ",(0,o.jsx)(e.code,{children:"navigation"})," object of the screen where it's used:"]}),"\n",(0,o.jsx)("samp",{id:"use-navigation-example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button } from 'react-native';\nimport { useNavigation } from '@react-navigation/native';\n\nfunction MyBackButton() {\n  const navigation = useNavigation();\n\n  return (\n    <Button\n      title=\"Back\"\n      onPress={() => {\n        navigation.goBack();\n      }}\n    />\n  );\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["See the documentation for the ",(0,o.jsxs)(e.a,{href:"/docs/7.x/navigation-object",children:[(0,o.jsx)(e.code,{children:"navigation"})," object"]})," for more info."]}),"\n",(0,o.jsx)(e.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,o.jsx)(e.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"class MyBackButton extends React.Component {\n  render() {\n    // Get it from props\n    const { navigation } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const navigation = useNavigation();\n\n  return <MyBackButton {...props} navigation={navigation} />;\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);