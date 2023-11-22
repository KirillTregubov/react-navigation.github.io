"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44501],{68793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(85893),i=n(11151);const s={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},r=void 0,o={id:"state-persistence",title:"State persistence",description:"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-2.x/state-persistence.md",sourceDirName:".",slug:"/state-persistence",permalink:"/docs/2.x/state-persistence",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/state-persistence.md",tags:[],version:"2.x",frontMatter:{id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},sidebar:"version-2.x-docs",previous:{title:"Screen tracking",permalink:"/docs/2.x/screen-tracking"},next:{title:"App containers",permalink:"/docs/2.x/app-containers"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Development Mode",id:"development-mode",level:3},{value:"Loading View",id:"loading-view",level:3},{value:"Warning: Serializable State",id:"warning-serializable-state",level:2},{value:"Warning: Route/Router definition changes",id:"warning-routerouter-definition-changes",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."}),"\n",(0,a.jsx)(t.p,{children:"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: This feature is currently considered experimental, because of the warnings listed at the end of this page. Use with caution!"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["You can enable persistence for your top-level navigator by rendering it with a ",(0,a.jsx)(t.code,{children:"persistenceKey"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const AppNavigator = createStackNavigator({...});\n\nconst App = () => <AppNavigator persistenceKey={"NavigationState"} />;\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This provided key will be used as the react native ",(0,a.jsx)(t.code,{children:"AsyncStorage"})," key to save the JSON navigation state."]}),"\n",(0,a.jsx)(t.h3,{id:"development-mode",children:"Development Mode"}),"\n",(0,a.jsx)(t.p,{children:"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const AppNavigator = createStackNavigator({...});\nconst navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;\nconst App = () => <AppNavigator persistenceKey={navigationPersistenceKey} />;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"loading-view",children:"Loading View"}),"\n",(0,a.jsxs)(t.p,{children:["Because the state is persisted asynchronously, the app must render an empty/loading view for a moment while the ",(0,a.jsx)(t.code,{children:"AsyncStorage"})," request completes. To customize the loading view that is rendered during this time, you can use the ",(0,a.jsx)(t.code,{children:"renderLoadingExperimental"})," prop:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"<AppNavigator\n  persistenceKey={...}\n  renderLoadingExperimental={() => <ActivityIndicator />}\n/>\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: This API may change in the future, which is why it is labeled experimental"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"warning-serializable-state",children:"Warning: Serializable State"}),"\n",(0,a.jsx)(t.p,{children:"Each param, route, and navigation state must be fully JSON-serializable for this feature to work. This means that your routes and params must contain no functions, class instances, or recursive data structures."}),"\n",(0,a.jsx)(t.h2,{id:"warning-routerouter-definition-changes",children:"Warning: Route/Router definition changes"}),"\n",(0,a.jsx)(t.p,{children:"When your application code changes to support new routes or different routers for a given route in your navigation state, the app may break when presented with the old navigation state."}),"\n",(0,a.jsx)(t.p,{children:"This may happen regularly during development as you re-configure your routes and navigator hierarchy. But it also may happen in production when you release a new version of your app!"}),"\n",(0,a.jsx)(t.p,{children:"The conservative behavior is to wipe the navigation state when the app has been updated. The easiest way to do this is to refer to a different persistence key for each version that you release to users."}),"\n",(0,a.jsxs)(t.p,{children:["React Navigation uses React's ",(0,a.jsx)(t.code,{children:"componentDidCatch"})," functionality to attempt to mitigate crashes caused by route definition changes, but this is considered experimental and may not catch all errors."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);