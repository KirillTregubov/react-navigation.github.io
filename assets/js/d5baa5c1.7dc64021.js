"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[81848],{27541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(85893),i=n(11151);const o={id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},s=void 0,r={id:"MST-integration",title:"Integrating with MobX State Tree",description:"TODO: This guide is incomplete. Please help improve this by sending pull requests.",source:"@site/versioned_docs/version-5.x/MST-integration.md",sourceDirName:".",slug:"/MST-integration",permalink:"/docs/5.x/MST-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/MST-integration.md",tags:[],version:"5.x",frontMatter:{id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},sidebar:"docs",previous:{title:"Redux integration",permalink:"/docs/5.x/redux-integration"},next:{title:"Optimize memory usage and performance",permalink:"/docs/5.x/react-native-screens"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Guide",id:"guide",level:2},{value:"Navigation params",id:"navigation-params",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"TODO: This guide is incomplete. Please help improve this by sending pull requests."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This guide explores possible way to use React Navigation in a React Native project that uses ",(0,a.jsx)(t.a,{href:"https://github.com/mobxjs/mobx-state-tree",children:"MobX State Tree"}),"(MST) for state management. The guide is accompanied by a ",(0,a.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-mst-demo",children:"sample app"}),". Parts of the guide may be relevant also for users of ",(0,a.jsx)(t.a,{href:"https://github.com/mobxjs/mobx",children:"MobX"})," but please be aware of the fact that MobX does not come with a built-in solution for (de)serializing its state."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Please note that in this guide, Mobx State Tree is not used to manage the navigation state itself - just the navigation params!"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Our goal with this guide is to use MST with React Navigation and achieve optimal developer experience. In the scope of this guide, this means allowing us to do a full JS reload and be brought back to the state before the reload happened."}),"\n",(0,a.jsxs)(t.p,{children:["We will do this by persisting the ",(0,a.jsx)(t.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," using the React Navigation's ",(0,a.jsx)(t.a,{href:"/docs/5.x/state-persistence",children:"built-in mechanism"}),". We also need to persist the app state and navigation params - that way, when you're working on a screen in your app and do a full JS reload, you will be brought back to the same screen, with the same data in it."]}),"\n",(0,a.jsx)(t.h2,{id:"guide",children:"Guide"}),"\n",(0,a.jsxs)(t.p,{children:["First, start by creating initial navigation structure and React components. When you're done with that, continue with modelling your state in MST. If you want to learn more about this, check out the ",(0,a.jsx)(t.a,{href:"https://egghead.io/lessons/react-describe-your-application-domain-using-mobx-state-tree-mst-models",children:"egghead.io course"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["At this point, you're probably wondering how to connect your MST objects with the components. The answer is in the ",(0,a.jsx)(t.a,{href:"https://github.com/mobxjs/mobx-react",children:"mobx-react package"})," that contains React bindings for MobX (they also work for MST). You will likely be using the ",(0,a.jsx)(t.code,{children:"Provider"})," component and the ",(0,a.jsx)(t.code,{children:"inject"})," and ",(0,a.jsx)(t.code,{children:"observer"})," functions."]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"Provider"})," to wrap what you return from your root component's render method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"<Provider myObject={this.myObject}>\n  <NavigationContainer>{/* Screen configuration */}</NavigationContainer>\n</Provider>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["this will allow you to access ",(0,a.jsx)(t.code,{children:"myObject"})," from any React component in the application through the ",(0,a.jsx)(t.code,{children:"inject"})," function which can be quite useful."]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"observer"})," function to wrap all components that render observable data. This will make sure the components re-render once the data they render changes."]}),"\n",(0,a.jsx)(t.h3,{id:"navigation-params",children:"Navigation params"}),"\n",(0,a.jsxs)(t.p,{children:["Screens in your application often depend on params. React Navigation allows you to ",(0,a.jsx)(t.a,{href:"/docs/5.x/params",children:"send params"})," from one screen to another. These params are stored in the navigation state. However, in order to persist the navigation state, it needs to be serializable. This requirement does not play well with MST, because the MST objects are complex objects and React Navigation doesn't know how to (de)serialize them. In this guide, we will work around this by storing the navigation params ourselves."]}),"\n",(0,a.jsxs)(t.p,{children:["This means that rather than sending the params from one screen to another (eg. with ",(0,a.jsx)(t.code,{children:"props.navigation.navigate('MyScreen', { complexMSTObject })"}),") we will store the params to a navigation store, then navigate without sending any params, and on the target screen, we'll pick the params up from the navigation store."]}),"\n",(0,a.jsx)(t.p,{children:"To give an example, the navigation store may look similar to this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { types, onSnapshot, getRoot } from 'mobx-state-tree';\nimport { Product } from '../models/Product';\nimport { User } from '../models/User';\n\nexport const NavigationStore = types\n  .model('NavigationStore', {\n    productDetailScreenParams: types.map(\n      types.model('ProductDetailScreenParams', {\n        product: types.optional(types.safeReference(Product)),\n      })\n    ),\n    userProfileScreenParams: types.model('UserProfileScreenParams', {\n      user: types.maybe(types.safeReference(User)),\n    }),\n  })\n  .actions(self => ({\n    ...\n  }));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"userProfileScreenParams"})," is a simple model with a ",(0,a.jsx)(t.code,{children:"user"})," entry, while ",(0,a.jsx)(t.code,{children:"productDetailScreenParams"})," is a map of ",(0,a.jsx)(t.code,{children:"ProductDetailScreenParams"})," model. The reason we chose this shape of data is that we only have a single user profile screen in our app which reads its params from ",(0,a.jsx)(t.code,{children:"userProfileScreenParams"}),". ",(0,a.jsx)(t.code,{children:"productDetailScreenParams"})," is a map because the app can have several product screens on a stack. Each screen points to a ",(0,a.jsx)(t.code,{children:"Product"})," instance saved in the map. The keys into the map are the React Navigation ",(0,a.jsx)(t.a,{href:"/docs/5.x/navigation-state",children:"keys"}),": think of the ",(0,a.jsx)(t.code,{children:"key"})," as of an identifier of the route."]}),"\n",(0,a.jsxs)(t.p,{children:["Your navigation store may also be just one map where for each screen (regardless if it is a product or user profile screen), we store its navigation params. This is the approach taken in the ",(0,a.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-mst-demo",children:"sample app"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"you can use React Navigation with MobX State Tree in a React Native app"}),"\n",(0,a.jsxs)(t.li,{children:["use the ",(0,a.jsx)(t.code,{children:"Provider"})," component and the ",(0,a.jsx)(t.code,{children:"inject"})," and ",(0,a.jsx)(t.code,{children:"observer"})," functions to wire up MobX or MST with React"]}),"\n",(0,a.jsx)(t.li,{children:"it's possible to persist the entire application state and restore it upon JS reload"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);