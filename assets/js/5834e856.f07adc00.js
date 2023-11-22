"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[40364],{71461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(85893),s=t(11151);const r={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},i=void 0,o={id:"params",title:"Passing parameters to routes",description:'Remember when I said "more on that later when we talk about params!"? Well, the time has come.',source:"@site/versioned_docs/version-4.x/params.md",sourceDirName:".",slug:"/params",permalink:"/docs/4.x/params",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/params.md",tags:[],version:"4.x",frontMatter:{id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},sidebar:"version-4.x-docs",previous:{title:"Navigation lifecycle",permalink:"/docs/4.x/navigation-lifecycle"},next:{title:"Configuring the header bar",permalink:"/docs/4.x/headers"}},c={},l=[{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:['Remember when I said "more on that later when we talk about ',(0,a.jsx)(n.code,{children:"params"}),'!"? Well, the time has come.']}),"\n",(0,a.jsxs)(n.p,{children:["Now that we know how to ",(0,a.jsx)(n.a,{href:"/docs/4.x/hello-react-navigation",children:"create a stack navigator with some routes"})," and ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigating",children:"navigate between those routes"}),", let's look at how we can pass data to routes when we navigate to them."]}),"\n",(0,a.jsx)(n.p,{children:"There are two pieces to this:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Pass params to a route by putting them in an object as a second parameter to the ",(0,a.jsx)(n.code,{children:"navigation.navigate"})," function: ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName', { /* params go here */ })"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Read the params in your screen component: ",(0,a.jsx)(n.code,{children:"this.props.navigation.getParam(paramName, defaultValue)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",(0,a.jsx)(n.a,{href:"/docs/4.x/state-persistence",children:"state persistence"})," and your screen components will have the right contract for implementing ",(0,a.jsx)(n.a,{href:"/docs/4.x/deep-linking",children:"deep linking"}),"."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"passing-params"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => {\n            this.props.navigation.navigate('Details', {\n              itemId: 86,\n              otherParam: 'anything you want here',\n            });\n          }}\n        />\n      </View>\n    );\n  }\n}\n\nclass DetailsScreen extends React.Component {\n  render() {\n    const { navigation } = this.props;\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Text>\n          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}\n        </Text>\n        <Text>\n          otherParam:\n          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}\n        </Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() =>\n            navigation.push('Details', {\n              itemId: Math.floor(Math.random() * 100),\n            })\n          }\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["You can also directly access the params object with ",(0,a.jsx)(n.code,{children:"this.props.navigation.state.params"}),". This may be ",(0,a.jsx)(n.code,{children:"null"})," if no params were supplied, and so it's usually easier to just use ",(0,a.jsx)(n.code,{children:"getParam"})," so you don't have to deal with that case."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you want to access the params directly through props (eg. ",(0,a.jsx)(n.code,{children:"this.props.itemId"}),") rather than ",(0,a.jsx)(n.code,{children:"this.props.navigation.getParam"}),", you may use a community-developed ",(0,a.jsx)(n.a,{href:"https://github.com/vonovak/react-navigation-props-mapper",children:"react-navigation-props-mapper"})," package."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigate"})," and ",(0,a.jsx)(n.code,{children:"push"})," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName', {paramName: 'value'})"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["You can read the params through ",(0,a.jsx)(n.code,{children:"this.props.navigation.getParam"})]}),"\n",(0,a.jsxs)(n.li,{children:["As an alternative to ",(0,a.jsx)(n.code,{children:"getParam"}),", you may use ",(0,a.jsx)(n.code,{children:"this.props.navigation.state.params"}),". It is ",(0,a.jsx)(n.code,{children:"null"})," if no parameters are specified."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#example/passing-params",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);