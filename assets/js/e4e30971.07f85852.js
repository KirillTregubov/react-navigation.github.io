"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8550],{63711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const a={id:"use-linking",title:"useLinking",sidebar_label:"useLinking"},o=void 0,r={id:"use-linking",title:"useLinking",description:"The useLinking hook lets us handle deep links in our apps. This is used internally by React Navigation to implement deep linking support.",source:"@site/versioned_docs/version-5.x/use-linking.md",sourceDirName:".",slug:"/use-linking",permalink:"/docs/5.x/use-linking",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-linking.md",tags:[],version:"5.x",frontMatter:{id:"use-linking",title:"useLinking",sidebar_label:"useLinking"},sidebar:"docs",previous:{title:"useLinkBuilder",permalink:"/docs/5.x/use-link-builder"},next:{title:"useScrollToTop",permalink:"/docs/5.x/use-scroll-to-top"}},c={},l=[{value:"Options",id:"options",level:3},{value:"<code>prefixes</code>",id:"prefixes",level:4},{value:"<code>config</code>",id:"config",level:4},{value:"<code>enabled</code>",id:"enabled",level:4},{value:"<code>getStateFromPath</code>",id:"getstatefrompath",level:4},{value:"<code>getPathFromState</code>",id:"getpathfromstate",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"useLinking"})," hook lets us handle deep links in our apps. This is used internally by React Navigation to implement deep linking support."]}),"\n",(0,i.jsxs)(n.p,{children:["You should use the ",(0,i.jsxs)(n.a,{href:"/docs/5.x/navigation-container#linking",children:[(0,i.jsx)(n.code,{children:"linking"})," prop on ",(0,i.jsx)(n.code,{children:"NavigationContainer"})]})," instead of using this hook directly.\nThis documentation exists for users who were already using this hook before the ",(0,i.jsx)(n.code,{children:"linking"})," prop was added."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useLinking , NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  const ref = React.useRef();\n\n  const { getInitialState } = useLinking(ref, {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      }\n    },\n  });\n\n  const [isReady, setIsReady] = React.useState(false);\n  const [initialState, setInitialState] = React.useState();\n\n  React.useEffect(() => {\n    getInitialState()\n      .catch(() => {})\n      .then(state => {\n        if (state !== undefined) {\n          setInitialState(state);\n        }\n\n        setIsReady(true);\n      });\n  }, [getInitialState]);\n\n  if (!isReady) {\n    return null;\n  }\n\n  return (\n    <NavigationContainer initialState={initialState} ref={ref}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/5.x/deep-linking",children:"deep linking guide"})," for a complete guide on how to configure deep linking."]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h4,{id:"prefixes",children:(0,i.jsx)(n.code,{children:"prefixes"})}),"\n",(0,i.jsxs)(n.p,{children:["URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"universal links"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is only supported on iOS and Android."}),"\n",(0,i.jsx)(n.h4,{id:"config",children:(0,i.jsx)(n.code,{children:"config"})}),"\n",(0,i.jsx)(n.p,{children:"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if we have ",(0,i.jsx)(n.code,{children:"Catalog"})," screen inside ",(0,i.jsx)(n.code,{children:"Home"})," screen and want it to handle the ",(0,i.jsx)(n.code,{children:"item/:id"})," pattern:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The options for parsing can be an object or a string:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When a string is specified, it's equivalent to providing the ",(0,i.jsx)(n.code,{children:"path"})," option."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"path"})," option is a pattern to match against the path. Any segments starting with ",(0,i.jsx)(n.code,{children:":"})," are recognized as a param with the same name. For example ",(0,i.jsx)(n.code,{children:"item/42"})," will be parsed to ",(0,i.jsx)(n.code,{children:"{ name: 'item', params: { id: '42' } }"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"initialRouteName"})," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and URL : ",(0,i.jsx)(n.code,{children:"/item/42"}),", the state will look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"parse"})," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If no custom function is provided for parsing a param, it'll be parsed as a string."}),"\n",(0,i.jsx)(n.h4,{id:"enabled",children:(0,i.jsx)(n.code,{children:"enabled"})}),"\n",(0,i.jsxs)(n.p,{children:["Optional boolean to enable or disable the linking integration. Defaults to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"getstatefrompath",children:(0,i.jsx)(n.code,{children:"getStateFromPath"})}),"\n",(0,i.jsx)(n.p,{children:"You can optionally override the way React Navigation parses deep links to a state object by providing your own implementation."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getStateFromPath(path, config) {\n    // Return a state object here\n    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"getpathfromstate",children:(0,i.jsx)(n.code,{children:"getPathFromState"})}),"\n",(0,i.jsxs)(n.p,{children:["You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",(0,i.jsx)(n.code,{children:"getStateFromPath"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getPathFromState(state, config) {\n    // Return a path string here\n    // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);