"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[83340],{61663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(85893),a=n(11151);const r={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},s=void 0,i={id:"custom-routers",title:"Custom routers",description:"You can make your own router by building an object with the following functions:",source:"@site/versioned_docs/version-1.x/custom-routers.md",sourceDirName:".",slug:"/custom-routers",permalink:"/docs/1.x/custom-routers",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/custom-routers.md",tags:[],version:"1.x",frontMatter:{id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},sidebar:"docs",previous:{title:"Custom navigators",permalink:"/docs/1.x/custom-navigators"},next:{title:"Navigation views",permalink:"/docs/1.x/navigation-views"}},c={},d=[{value:"<code>getStateForAction(action, state)</code>",id:"getstateforactionaction-state",level:3},{value:"<code>getComponentForRouteName(routeName)</code>",id:"getcomponentforroutenameroutename",level:3},{value:"<code>getComponentForState(state)</code>",id:"getcomponentforstatestate",level:3},{value:"<code>getActionForPathAndParams(path, params)</code>",id:"getactionforpathandparamspath-params",level:3},{value:"<code>getPathAndParamsForState(state)</code>",id:"getpathandparamsforstatestate",level:3},{value:"<code>getScreenOptions(navigation, screenProps)</code>",id:"getscreenoptionsnavigation-screenprops",level:3}];function h(e){const t={code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You can make your own router by building an object with the following functions:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const MyRouter = {\n  getStateForAction: (action, state) => ({}),\n  getActionForPathAndParams: (path, params) => null,\n  getPathAndParamsForState: (state) => null,\n  getComponentForState: (state) => MyScreen,\n  getComponentForRouteName: (routeName) => MyScreen,\n};\n\n// Now, you can make a navigator by putting the router on it:\nclass MyNavigator extends React.Component {\n  static router = MyRouter;\n  render() {\n    ...\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Routers manage the relationship between URIs, actions, and navigation state",src:n(29258).Z+"",width:"1425",height:"1125"})}),"\n",(0,o.jsx)(t.h3,{id:"getstateforactionaction-state",children:(0,o.jsx)(t.code,{children:"getStateForAction(action, state)"})}),"\n",(0,o.jsxs)(t.p,{children:["Defines the navigation state in response to a given action. This function will be run when an action gets passed into ",(0,o.jsx)(t.code,{children:"props.navigation.dispatch("}),", or when any of the helper functions are called, like ",(0,o.jsx)(t.code,{children:"navigation.navigate("}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Typically this should return a navigation state, with the following form:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name to identify the type.\n      routeName: 'MyRouteName',\n\n      // A unique identifier for this route in the routes array:\n      key: 'myroute-123',\n      // (used to specify the re-ordering of routes)\n\n      // Routes can have any data, as long as key and routeName are correct\n      ...randomRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If the router has handled the action externally, or wants to swallow it without changing the navigation state, this function will return ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"getcomponentforroutenameroutename",children:(0,o.jsx)(t.code,{children:"getComponentForRouteName(routeName)"})}),"\n",(0,o.jsx)(t.p,{children:"Returns the child component or navigator for the given route name."}),"\n",(0,o.jsxs)(t.p,{children:["Say a router ",(0,o.jsx)(t.code,{children:"getStateForAction"})," outputs a state like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"{\n  index: 1,\n  routes: [\n    { key: 'A', routeName: 'Foo' },\n    { key: 'B', routeName: 'Bar' },\n  ],\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Based on the routeNames in the state, the router is responsible for returning valid components when calling ",(0,o.jsx)(t.code,{children:"router.getComponentForRouteName('Foo')"})," or ",(0,o.jsx)(t.code,{children:"router.getComponentForRouteName('Bar')"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"getcomponentforstatestate",children:(0,o.jsx)(t.code,{children:"getComponentForState(state)"})}),"\n",(0,o.jsx)(t.p,{children:"Returns the active component for a deep navigation state."}),"\n",(0,o.jsx)(t.h3,{id:"getactionforpathandparamspath-params",children:(0,o.jsx)(t.code,{children:"getActionForPathAndParams(path, params)"})}),"\n",(0,o.jsx)(t.p,{children:"Returns an optional navigation action that should be used when the user navigates to this path and provides optional query parameters."}),"\n",(0,o.jsx)(t.h3,{id:"getpathandparamsforstatestate",children:(0,o.jsx)(t.code,{children:"getPathAndParamsForState(state)"})}),"\n",(0,o.jsx)(t.p,{children:"Returns the path and params that can be put into the URL to link the user back to the same spot in the app."}),"\n",(0,o.jsxs)(t.p,{children:["The path/params that are output from this should form an action when passed back into the router's ",(0,o.jsx)(t.code,{children:"getActionForPathAndParams"}),". That action should take you to a similar state once passed through ",(0,o.jsx)(t.code,{children:"getStateForAction"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"getscreenoptionsnavigation-screenprops",children:(0,o.jsx)(t.code,{children:"getScreenOptions(navigation, screenProps)"})}),"\n",(0,o.jsx)(t.p,{children:"Used to retrieve the navigation options for a screen. Must provide the screen's current navigation prop and optionally, other props that your navigation options may need to consume."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"navigation"})," - This is the navigation prop that the screen will use, where the state refers to the screen's route/state. Dispatch will trigger actions in the context of that screen."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"screenProps"})," - Other props that your navigation options may need to consume"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"navigationOptions"})," - The previous set of options that are default or provided by the previous configurer"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Inside an example view, perhaps you need to fetch the configured title:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// First, prepare a navigation prop for your child, or re-use one if already available.\nconst screenNavigation = addNavigationHelpers({\n  // In this case we use navigation.state.index because we want the title for the active route.\n  state: navigation.state.routes[navigation.state.index],\n  dispatch: navigation.dispatch,\n});\nconst options = this.props.router.getScreenOptions(screenNavigation, {});\nconst title = options.title;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},29258:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/routers-concept-map-02d38b1cb8eceb18662323ecf39b042d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);