"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[23273],{11893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(85893),i=t(11151);const o={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},s=void 0,r={id:"navigating",title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-2.x/navigating.md",sourceDirName:".",slug:"/navigating",permalink:"/docs/2.x/navigating",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/navigating.md",tags:[],version:"2.x",frontMatter:{id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},sidebar:"version-2.x-docs",previous:{title:"Supported React Native versions",permalink:"/docs/2.x/supported-react-native-versions"},next:{title:"Navigation lifecycle",permalink:"/docs/2.x/navigation-lifecycle"}},c={},l=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",level:2},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",level:2},{value:"Going back",id:"going-back",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In the previous section, ",(0,a.jsx)(n.a,{href:"/docs/2.x/hello-react-navigation",children:'"Hello React Navigation"'}),", we defined a stack navigator with two routes (",(0,a.jsx)(n.code,{children:"Home"})," and ",(0,a.jsx)(n.code,{children:"Details"}),"), but we didn't learn how to let a user navigate from ",(0,a.jsx)(n.code,{children:"Home"})," to ",(0,a.jsx)(n.code,{children:"Details"})," (although we did learn how to change the ",(0,a.jsx)(n.em,{children:"initial"})," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."]}),"\n",(0,a.jsx)(n.p,{children:"If this was a web browser, we'd be able to write something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<a href="details.html">Go to Details</a>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Another way to write this would be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We'll do something similar to the latter, but rather than using a ",(0,a.jsx)(n.code,{children:"document"})," global we'll use the ",(0,a.jsx)(n.code,{children:"navigation"})," prop that is passed down to our screen components."]}),"\n",(0,a.jsx)(n.h2,{id:"navigating-to-a-new-screen",children:"Navigating to a new screen"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { createStackNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\n// ... other code from the previous section\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/our-first-navigate-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.p,{children:"Let's break this down:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation"}),": the ",(0,a.jsx)(n.code,{children:"navigation"})," prop is passed in to every ",(0,a.jsx)(n.strong,{children:"screen component"})," (",(0,a.jsx)(n.a,{href:"/docs/2.x/glossary-of-terms#screen-component",children:"definition"}),") in stack navigator (more about this later in ",(0,a.jsx)(n.a,{href:"/docs/2.x/navigation-prop",children:'"The navigation prop in depth"'}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigate('Details')"}),": we call the ",(0,a.jsx)(n.code,{children:"navigate"})," function (on the ",(0,a.jsx)(n.code,{children:"navigation"})," prop \u2014 naming is hard!) with the name of the route that we'd like to move the user to."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If we call ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate"})," with a route name that we haven't defined on a stack navigator, nothing will happen. Said another way, we can only navigate to routes that have been defined on our stack navigator \u2014 we cannot navigate to an arbitrary component."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?"}),"\n",(0,a.jsx)(n.h2,{id:"navigate-to-a-route-multiple-times",children:"Navigate to a route multiple times"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/navigating-to-details-again-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsxs)(n.p,{children:["If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",(0,a.jsx)(n.code,{children:"navigate"}),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.']}),"\n",(0,a.jsxs)(n.p,{children:["Let's suppose that we actually ",(0,a.jsx)(n.em,{children:"want"})," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",(0,a.jsx)(n.code,{children:"params"}),"!). To do this, we can change ",(0,a.jsx)(n.code,{children:"navigate"})," to ",(0,a.jsx)(n.code,{children:"push"}),". This allows us to express the intent to add another route regardless of the existing navigation history."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Button\n  title=\"Go to Details... again\"\n  onPress={() => this.props.navigation.push('Details')}\n/>\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/pushing-details-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsxs)(n.p,{children:["Each time you call ",(0,a.jsx)(n.code,{children:"push"})," we add a new route to the navigation stack. When you call ",(0,a.jsx)(n.code,{children:"navigate"})," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."]}),"\n",(0,a.jsx)(n.h2,{id:"going-back",children:"Going back"}),"\n",(0,a.jsx)(n.p,{children:"The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",(0,a.jsx)(n.code,{children:"this.props.navigation.goBack();"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.push('Details')}\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/going-back-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["On Android, React Navigation hooks in to the hardware back button and fires the ",(0,a.jsx)(n.code,{children:"goBack()"})," function for you when the user presses it, so it behaves as the user would expect."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Another common requirement is to be able to go back ",(0,a.jsx)(n.em,{children:"multiple"})," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",(0,a.jsx)(n.code,{children:"Home"})," so we can use ",(0,a.jsx)(n.code,{children:"navigate('Home')"})," (not ",(0,a.jsx)(n.code,{children:"push"}),"! try that out and see the difference). Another alternative would be ",(0,a.jsx)(n.code,{children:"navigation.popToTop()"}),", which goes back to the first screen in the stack."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName')"})," pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen."]}),"\n",(0,a.jsxs)(n.li,{children:["We can call ",(0,a.jsx)(n.code,{children:"this.props.navigation.push('RouteName')"})," as many times as we like and it will continue pushing routes."]}),"\n",(0,a.jsxs)(n.li,{children:["The header bar will automatically show a back button, but you can programmatically go back by calling ",(0,a.jsx)(n.code,{children:"this.props.navigation.goBack()"}),". On Android, the hardware back button just works as expected."]}),"\n",(0,a.jsxs)(n.li,{children:["You can go back to an existing screen in the stack with ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName')"}),", and you can go back to the first screen in the stack with ",(0,a.jsx)(n.code,{children:"this.props.navigation.popToTop()"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"navigation"})," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://snack.expo.io/@react-navigation/going-back-v2",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);