"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[53473],{44841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(85893),a=t(11151);const o={id:"static-combine-with-dynamic",title:"Combining static and dynamic APIs",sidebar_label:"Combining with dynamic API"},s=void 0,c={id:"static-combine-with-dynamic",title:"Combining static and dynamic APIs",description:"While the static API has many advantages, it doesn't fit use cases where the navigation configuration needs to be dynamic. So React Navigation supports interop between the static and dynamic APIs.",source:"@site/versioned_docs/version-7.x/static-combine-with-dynamic.md",sourceDirName:".",slug:"/static-combine-with-dynamic",permalink:"/docs/7.x/static-combine-with-dynamic",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/static-combine-with-dynamic.md",tags:[],version:"7.x",frontMatter:{id:"static-combine-with-dynamic",title:"Combining static and dynamic APIs",sidebar_label:"Combining with dynamic API"},sidebar:"docs",previous:{title:"Authentication flow",permalink:"/docs/7.x/static-authentication"},next:{title:"Stack",permalink:"/docs/7.x/stack-navigator"}},r={},d=[{value:"Static root navigator, dynamic nested navigator",id:"static-root-navigator-dynamic-nested-navigator",level:2},{value:"Dynamic root navigator, static nested navigator",id:"dynamic-root-navigator-static-nested-navigator",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"While the static API has many advantages, it doesn't fit use cases where the navigation configuration needs to be dynamic. So React Navigation supports interop between the static and dynamic APIs."}),"\n",(0,i.jsx)(n.p,{children:"Keep in mind that the features provided by the static API such as automatic linking configuration and automatic TypeScript types need the whole configuration to be static. If part of the configuration is dynamic, you'll need to handle those parts manually."}),"\n",(0,i.jsx)(n.p,{children:"There are 2 ways you may want to combine the static and dynamic APIs:"}),"\n",(0,i.jsx)(n.h2,{id:"static-root-navigator-dynamic-nested-navigator",children:"Static root navigator, dynamic nested navigator"}),"\n",(0,i.jsx)(n.p,{children:"This is useful if you want to keep your configuration static, but need to use a dynamic configuration for a specific navigator."}),"\n",(0,i.jsx)(n.p,{children:"Let's consider the following example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have a root stack navigator that contains a tab navigator in a screen."}),"\n",(0,i.jsx)(n.li,{children:"The tab navigator is defined using the dynamic API."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Our static configuration would look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n    },\n    Feed: {\n      screen: FeedScreen,\n      linking: {\n        path: 'feed',\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"FeedScreen"})," is a component that renders a tab navigator and is defined using the dynamic API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction FeedScreen() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Latest" component={LatestScreen} />\n      <Tab.Screen name="Popular" component={PopularScreen} />\n    </Tab.Navigator>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This code will work, but we're missing 2 things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Linking configuration for the screens in the top tab navigator."}),"\n",(0,i.jsx)(n.li,{children:"TypeScript types for the screens in the top tab navigator."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since the nested navigator is defined using the dynamic API, we need to handle these manually. For the linking configuration, we can define the screens in the ",(0,i.jsx)(n.code,{children:"linking"})," property of the ",(0,i.jsx)(n.code,{children:"Feed"})," screen:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n    },\n    Feed: {\n      screen: FeedScreen,\n      linking: {\n        path: 'feed',\n        screens: {\n          Latest: 'latest',\n          Popular: 'popular',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here the ",(0,i.jsx)(n.code,{children:"screens"})," property is the same as how you'd define it with ",(0,i.jsx)(n.code,{children:"linking"})," config with the dynamic API. It can contain configuration for any nested navigators as well. See ",(0,i.jsx)(n.a,{href:"/docs/7.x/configuring-links",children:"configuring links"})," for more details on the API."]}),"\n",(0,i.jsxs)(n.p,{children:["For the TypeScript types, we can define the type of the ",(0,i.jsx)(n.code,{children:"FeedScreen"})," component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {\n  StaticScreenProps,\n  NavigatorScreenParams,\n} from '@react-navigation/native';\n\ntype FeedParamList = {\n  Latest: undefined;\n  Popular: undefined;\n};\n\ntype Props = StaticScreenProps<NavigatorScreenParams<FeedParamList>>;\n\nfunction FeedScreen(_: Props) {\n  // ...\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the above snippet:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"We first define the param list type for screens in the navigator that defines params for each screen"}),"\n",(0,i.jsxs)(n.li,{children:["Then we use the ",(0,i.jsx)(n.code,{children:"NavigatorScreenParams"})," type to get the type of route's ",(0,i.jsx)(n.code,{children:"params"})," which will include types for the nested screens"]}),"\n",(0,i.jsxs)(n.li,{children:["Finally, we use the type of ",(0,i.jsx)(n.code,{children:"params"})," with ",(0,i.jsx)(n.code,{children:"StaticScreenProps"})," to define the type of the screen component"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is based on how we'd define the type for a screen with a nested navigator with the dynamic API. See ",(0,i.jsx)(n.a,{href:"/docs/7.x/typescript#type-checking-screens-and-params-in-nested-navigator",children:"Type checking screens and params in nested navigator"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-root-navigator-static-nested-navigator",children:"Dynamic root navigator, static nested navigator"}),"\n",(0,i.jsx)(n.p,{children:"This is useful if you already have a dynamic configuration, but want to migrate to the static API. This way you can migrate one navigator at a time."}),"\n",(0,i.jsx)(n.p,{children:"TODO"})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);