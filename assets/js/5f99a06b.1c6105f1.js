"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[32065],{41559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const s={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},r=void 0,o={id:"state-persistence",title:"State persistence",description:"You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-6.x/state-persistence.md",sourceDirName:".",slug:"/state-persistence",permalink:"/docs/state-persistence",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/state-persistence.md",tags:[],version:"6.x",frontMatter:{id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},sidebar:"docs",previous:{title:"Themes",permalink:"/docs/themes"},next:{title:"Testing with Jest",permalink:"/docs/testing"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Development Mode",id:"development-mode",level:3},{value:"Loading View",id:"loading-view",level:3},{value:"Warning: Serializable State",id:"warning-serializable-state",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."}),"\n",(0,a.jsx)(t.p,{children:"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["To be able to persist the ",(0,a.jsx)(t.a,{href:"/docs/navigation-state",children:"navigation state"}),", we can use the ",(0,a.jsx)(t.code,{children:"onStateChange"})," and ",(0,a.jsx)(t.code,{children:"initialState"})," props of the container."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"onStateChange"})," - This prop notifies us of any state changes. We can persist the state in this callback."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"initialState"})," - This prop allows us to pass an initial state to use for ",(0,a.jsx)(t.a,{href:"/docs/navigation-state",children:"navigation state"}),". We can pass the restored state in this prop."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"state-persistance"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { Linking, Platform } from 'react-native';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\nimport { NavigationContainer } from '@react-navigation/native';\n\nconst PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';\n\nexport default function App() {\n  const [isReady, setIsReady] = React.useState(false);\n  const [initialState, setInitialState] = React.useState();\n\n  React.useEffect(() => {\n    const restoreState = async () => {\n      try {\n        const initialUrl = await Linking.getInitialURL();\n\n        if (Platform.OS !== 'web' && initialUrl == null) {\n          // Only restore state if there's no deep link and we're not on web\n          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);\n          const state = savedStateString ? JSON.parse(savedStateString) : undefined;\n\n          if (state !== undefined) {\n            setInitialState(state);\n          }\n        }\n      } finally {\n        setIsReady(true);\n      }\n    };\n\n    if (!isReady) {\n      restoreState();\n    }\n  }, [isReady]);\n\n  if (!isReady) {\n    return null;\n  }\n\n  return (\n    <NavigationContainer\n      initialState={initialState}\n      onStateChange={(state) =>\n        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))\n      }\n    >\n      {/* ... */}\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"development-mode",children:"Development Mode"}),"\n",(0,a.jsx)(t.p,{children:"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);\n"})}),"\n",(0,a.jsx)(t.p,{children:"While it can be used for production as well, use it with caution as it can make the app unusable if the app is crashing on a particular screen - as the user will still be on the same screen after restarting."}),"\n",(0,a.jsx)(t.h3,{id:"loading-view",children:"Loading View"}),"\n",(0,a.jsxs)(t.p,{children:["Because the state is restored asynchronously, the app must render an empty/loading view for a moment before we have the initial state. To handle this, we can return a loading view when ",(0,a.jsx)(t.code,{children:"isReady"})," is ",(0,a.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"if (!isReady) {\n  return <ActivityIndicator />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"warning-serializable-state",children:"Warning: Serializable State"}),"\n",(0,a.jsxs)(t.p,{children:["Each param, route, and navigation state must be fully serializable for this feature to work. Typically, you would serialize the state as a JSON string. This means that your routes and params must contain no functions, class instances, or recursive data structures. React Navigation already ",(0,a.jsx)(t.a,{href:"/docs/troubleshooting#i-get-the-warning-%22non-serializable-values-were-found-in-the-navigation-state%22",children:"warns you during development"})," if it encounters non-serializable data, so watch out for the warning if you plan to persist navigation state."]}),"\n",(0,a.jsxs)(t.p,{children:["You can modify the initial state object before passing it to container, but note that if your ",(0,a.jsx)(t.code,{children:"initialState"})," isn't a ",(0,a.jsx)(t.a,{href:"/docs/navigation-state#partial-state-objects",children:"valid navigation state"}),", React Navigation may not be able to handle the situation gracefully."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);