"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[93460],{68303:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=e(85893),i=e(11151);const a={id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},r=void 0,c={id:"connecting-navigation-prop",title:"Access the navigation prop from any component",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped Component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-1.x/connecting-navigation-prop.md",sourceDirName:".",slug:"/connecting-navigation-prop",permalink:"/docs/1.x/connecting-navigation-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/connecting-navigation-prop.md",tags:[],version:"1.x",frontMatter:{id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},sidebar:"docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/1.x/custom-android-back-button-handling"},next:{title:"Navigating without the navigation prop",permalink:"/docs/1.x/navigating-without-navigation-prop"}},s={},p=[];function d(n){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/1.x/with-navigation",children:(0,o.jsx)(t.code,{children:"withNavigation"})})," is a higher order component which passes the ",(0,o.jsx)(t.code,{children:"navigation"})," prop into a wrapped Component. It's useful when you cannot pass the ",(0,o.jsx)(t.code,{children:"navigation"})," prop into the component directly, or don't want to pass it in case of a deeply nested child."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import React from 'react';\nimport { Button } from 'react-native';\n\nexport default class MyBackButton extends React.Component {\n  render() {\n    // This will throw an 'undefined is not a function' exception because the navigation\n    // prop is undefined.\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To resolve this exception, you could pass the ",(0,o.jsx)(t.code,{children:"navigation"})," prop in to ",(0,o.jsx)(t.code,{children:"MyBackButton"})," when you render it from a screen, like so: ",(0,o.jsx)(t.code,{children:"<MyBackButton navigation={this.props.navigation} />"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,o.jsx)(t.code,{children:"withNavigation"})," function to provide the ",(0,o.jsx)(t.code,{children:"navigation"})," prop automatically (through React context, if you're curious). This function behaves similarly to Redux's ",(0,o.jsx)(t.code,{children:"connect"})," function, except rather than providing the ",(0,o.jsx)(t.code,{children:"dispatch"})," prop to the component it wraps, it provides the ",(0,o.jsx)(t.code,{children:"navigation"})," prop."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import React from 'react';\nimport { Button } from 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Using this approach, you can render ",(0,o.jsx)(t.code,{children:"MyBackButton"})," anywhere in your app without passing in a ",(0,o.jsx)(t.code,{children:"navigation"})," prop explicitly and it will work as expected."]})]})}function h(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>r});var o=e(67294);const i={},a=o.createContext(i);function r(n){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(a.Provider,{value:t},n.children)}}}]);