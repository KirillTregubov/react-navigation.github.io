"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[47715],{42249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(85893),a=n(11151);const i={id:"routers",title:"Routers",sidebar_label:"Routers"},r=void 0,s={id:"routers",title:"Routers",description:"Routers define a component's navigation state, and they allow the developer to define paths and actions that can be handled.",source:"@site/versioned_docs/version-3.x/routers.md",sourceDirName:".",slug:"/routers",permalink:"/docs/3.x/routers",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/routers.md",tags:[],version:"3.x",frontMatter:{id:"routers",title:"Routers",sidebar_label:"Routers"},sidebar:"version-3.x-docs",previous:{title:"Overview",permalink:"/docs/3.x/custom-navigator-overview"},next:{title:"Custom navigators",permalink:"/docs/3.x/custom-navigators"}},c={},u=[{value:"Built-In Routers",id:"built-in-routers",level:2},{value:"Using Routers",id:"using-routers",level:2},{value:"Customizing Routers",id:"customizing-routers",level:2},{value:"Custom Navigation Actions",id:"custom-navigation-actions",level:3},{value:"Blocking Navigation Actions",id:"blocking-navigation-actions",level:3},{value:"Handling Custom URIs",id:"handling-custom-uris",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Routers define a component's navigation state, and they allow the developer to define paths and actions that can be handled."}),"\n",(0,o.jsx)(t.h2,{id:"built-in-routers",children:"Built-In Routers"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"react-navigation"})," ships with a few standard routers:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js",children:"StackRouter"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/TabRouter.js",children:"TabRouter"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"using-routers",children:"Using Routers"}),"\n",(0,o.jsxs)(t.p,{children:["To make a navigator manually, put a static ",(0,o.jsx)(t.code,{children:"router"})," on a component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"class MyNavigator extends React.Component {\n  static router = StackRouter(routes, config);\n  ...\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now you can use this component as a ",(0,o.jsx)(t.code,{children:"screen"})," in another navigator, and the navigation logic for ",(0,o.jsx)(t.code,{children:"MyNavigator"})," will be defined by this ",(0,o.jsx)(t.code,{children:"StackRouter"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"customizing-routers",children:"Customizing Routers"}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/docs/3.x/custom-routers",children:"Custom Router API spec"})," to learn about the API of ",(0,o.jsx)(t.code,{children:"StackRouter"})," and ",(0,o.jsx)(t.code,{children:"TabRouter"}),". You can override the router functions as you see fit:"]}),"\n",(0,o.jsx)(t.h3,{id:"custom-navigation-actions",children:"Custom Navigation Actions"}),"\n",(0,o.jsxs)(t.p,{children:["To override navigation behavior, you can override the navigation state logic in ",(0,o.jsx)(t.code,{children:"getStateForAction"}),", and manually manipulate the ",(0,o.jsx)(t.code,{children:"routes"})," and ",(0,o.jsx)(t.code,{children:"index"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const MyApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\n\nconst defaultGetStateForAction = MyApp.router.getStateForAction;\n\nMyApp.router.getStateForAction = (action, state) => {\n  if (state && action.type === 'PushTwoProfiles') {\n    const routes = [\n      ...state.routes,\n      {key: 'A', routeName: 'Profile', params: { name: action.name1 }},\n      {key: 'B', routeName: 'Profile', params: { name: action.name2 }},\n    ];\n    return {\n      ...state,\n      routes,\n      index: routes.length - 1,\n    };\n  }\n  return defaultGetStateForAction(action, state);\n};\n"})}),"\n",(0,o.jsx)(t.h3,{id:"blocking-navigation-actions",children:"Blocking Navigation Actions"}),"\n",(0,o.jsx)(t.p,{children:"Sometimes you may want to prevent some navigation activity, depending on your route."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { NavigationActions } from 'react-navigation'\n\nconst MyStackRouter = StackRouter({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\n\nconst defaultGetStateForAction = MyStackRouter.router.getStateForAction;\n\nMyStackRouter.router.getStateForAction = (action, state) => {\n  if (\n    state &&\n    action.type === NavigationActions.BACK &&\n    state.routes[state.index].params.isEditing\n  ) {\n    // Returning null from getStateForAction means that the action\n    // has been handled/blocked, but there is not a new state\n    return null;\n  }\n\n  return defaultGetStateForAction(action, state);\n};\n"})}),"\n",(0,o.jsx)(t.h3,{id:"handling-custom-uris",children:"Handling Custom URIs"}),"\n",(0,o.jsxs)(t.p,{children:["Perhaps your app has a unique URI which the built-in routers cannot handle. You can always extend the router ",(0,o.jsx)(t.code,{children:"getActionForPathAndParams"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { NavigationActions } from 'react-navigation'\n\nconst MyApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\nconst previousGetActionForPathAndParams = MyApp.router.getActionForPathAndParams;\n\nObject.assign(MyApp.router, {\n  getActionForPathAndParams(path, params) {\n    if (\n      path === 'my/custom/path' &&\n      params.magic === 'yes'\n    ) {\n      // returns a profile navigate action for /my/custom/path?magic=yes\n      return NavigationActions.navigate({\n        routeName: 'Profile',\n        action: NavigationActions.navigate({\n          // This child action will get passed to the child router\n          // ProfileScreen.router.getStateForAction to get the child\n          // navigation state.\n          routeName: 'Friends',\n        }),\n      });\n    }\n    return previousGetActionForPathAndParams(path, params);\n  },\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);