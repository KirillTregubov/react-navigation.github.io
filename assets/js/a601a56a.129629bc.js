"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6039],{98876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(85893),i=t(11151);const o={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},s=void 0,r={id:"custom-navigators",title:"Custom navigators",description:"A navigator is any React component that has a router on it, to define the navigation behavior. Each navigator is given a navigation prop, which allows the parent to control the navigation state.",source:"@site/versioned_docs/version-4.x/custom-navigators.md",sourceDirName:".",slug:"/custom-navigators",permalink:"/docs/4.x/custom-navigators",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/custom-navigators.md",tags:[],version:"4.x",frontMatter:{id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},sidebar:"version-4.x-docs",previous:{title:"Routers",permalink:"/docs/4.x/routers"},next:{title:"Custom routers",permalink:"/docs/4.x/custom-routers"}},c={},d=[{value:"Extending Navigators",id:"extending-navigators",level:2},{value:"Navigator Navigation Prop",id:"navigator-navigation-prop",level:2},{value:"Navigation State",id:"navigation-state",level:3},{value:"Navigation Dispatchers",id:"navigation-dispatchers",level:3},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",level:2},{value:"<code>createNavigator</code>",id:"createnavigator",level:3},{value:"Scene Descriptors",id:"scene-descriptors",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A navigator is any React component that has a ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/core/src/routers/StackRouter.js",children:"router"})," on it, to define the navigation behavior. Each navigator is given a ",(0,a.jsx)(n.code,{children:"navigation"})," prop, which allows the parent to control the navigation state."]}),"\n",(0,a.jsx)(n.h2,{id:"extending-navigators",children:"Extending Navigators"}),"\n",(0,a.jsx)(n.p,{children:"It is possible to take an existing Navigator and extend its behavior, using the following approach:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = MyStack.router;\n  render() {\n    const { navigation } = this.props;\n\n    return <MyStack navigation={navigation} />;\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now it is possible to render additional things, observe the navigation prop, and override behavior of the router:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = {\n    ...MyStack.router,\n    getStateForAction: (action, lastState) => {\n      // check for custom actions and return a different navigation state.\n      return MyStack.router.getStateForAction(action, lastState);\n    },\n  };\n  componentDidUpdate(lastProps) {\n    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state\n  }\n  render() {\n    const { navigation } = this.props;\n\n    return (\n      <View>\n        <MyStack navigation={navigation} />\n        {...}\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"navigator-navigation-prop",children:"Navigator Navigation Prop"}),"\n",(0,a.jsxs)(n.p,{children:["The navigation prop passed down to a navigator only includes ",(0,a.jsx)(n.code,{children:"state"}),", ",(0,a.jsx)(n.code,{children:"dispatch"}),", and ",(0,a.jsx)(n.code,{children:"addListener"}),". This is the current state of the navigator, and an event channel to send action requests."]}),"\n",(0,a.jsxs)(n.p,{children:["All navigators are controlled components: they always display what is coming in through ",(0,a.jsx)(n.code,{children:"props.navigation.state"}),", and their only way to change the state is to send actions into ",(0,a.jsx)(n.code,{children:"props.navigation.dispatch"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Navigators can specify custom behavior to parent navigators by ",(0,a.jsx)(n.a,{href:"/docs/4.x/custom-routers",children:"customizing their router"}),". For example, a navigator is able to specify when actions should be blocked by returning null from ",(0,a.jsx)(n.code,{children:"router.getStateForAction"}),". Or a navigator can specify custom URI handling by overriding ",(0,a.jsx)(n.code,{children:"router.getActionForPathAndParams"})," to output a relevant navigation action, and handling that action in ",(0,a.jsx)(n.code,{children:"router.getStateForAction"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"navigation-state",children:"Navigation State"}),"\n",(0,a.jsxs)(n.p,{children:["The navigation state that is passed into a navigator's ",(0,a.jsx)(n.code,{children:"props.navigation.state"})," has the following structure:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"navigation-dispatchers",children:"Navigation Dispatchers"}),"\n",(0,a.jsx)(n.p,{children:"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."}),"\n",(0,a.jsxs)(n.p,{children:["The dispatcher will return ",(0,a.jsx)(n.code,{children:"true"})," if the action was successfully handled, otherwise ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"api-for-building-custom-navigators",children:"API for building custom navigators"}),"\n",(0,a.jsx)(n.p,{children:"To help developers implement custom navigators, the following utilities are provided with React Navigation:"}),"\n",(0,a.jsx)(n.h3,{id:"createnavigator",children:(0,a.jsx)(n.code,{children:"createNavigator"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: The ",(0,a.jsx)(n.code,{children:"createNavigator"})," API has changed in version 2. The old doc for v1 can be accessed here: ",(0,a.jsx)(n.a,{href:"https://v1.reactnavigation.org/docs/custom-navigators.html",children:"v1.reactnavigation.org/docs/custom-navigators.html"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This utility combines a ",(0,a.jsx)(n.a,{href:"/docs/4.x/routers",children:"router"})," and a ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-views",children:"navigation view"})," together in a standard way:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { createNavigator } from 'react-navigation';\n\nconst AppNavigator = createNavigator(NavigationView, router, navigationConfig);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The new ",(0,a.jsx)(n.code,{children:"AppNavigator"})," can be rendered as such:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<AppNavigator\n  navigation={{ state, dispatch, addListener }}\n  screenProps={...}\n/>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then the view will be rendered in the following way:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationView\n  screenProps={screenProps}\n  navigation={navigation}\n  navigationConfig={navigationConfig}\n  descriptors={descriptors}\n/>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"navigation"})," prop is the same navigation prop that was passed into the navigator."]}),"\n",(0,a.jsxs)(n.p,{children:["Both ",(0,a.jsx)(n.code,{children:"navigationConfig"})," and ",(0,a.jsx)(n.code,{children:"screenProps"})," are simply passed through, as defined above."]}),"\n",(0,a.jsxs)(n.p,{children:["Most information about child screens comes through the ",(0,a.jsx)(n.code,{children:"descriptors"})," prop. The descriptors is an object map of route keys to scene descriptors. There is one descriptor for each child route."]}),"\n",(0,a.jsx)(n.h3,{id:"scene-descriptors",children:"Scene Descriptors"}),"\n",(0,a.jsx)(n.p,{children:"A scene descriptor has the following properties:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getComponent"}),", a function that returns the component for the screen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"options"}),", the flattened navigationOptions for the route"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigation"}),", the child navigation prop, including actions and the route ",(0,a.jsx)(n.code,{children:"state"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state"}),", the navigation state for the child screen (a shortcut for ",(0,a.jsx)(n.code,{children:"navigation.state"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"}),", the key of the route (a shortcut for ",(0,a.jsx)(n.code,{children:"navigation.state.key"}),")"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);