"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[62019],{80150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(85893),i=t(11151);const o={title:"3.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},r=void 0,s={permalink:"/blog/2018/11/01/react-navigation-3.0-rc",source:"@site/blog/2018-11-01-react-navigation-3.0-rc.md",title:"3.0 release candidate",description:"We are excited to announce the release candidate of version 3.0 today!",date:"2018-11-01T00:00:00.000Z",formattedDate:"November 1, 2018",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:7.97,hasTruncateMarker:!0,authors:[{name:"Brent Vatne",title:"Core Team",url:"https://twitter.com/notbrent",imageURL:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4"}],frontMatter:{title:"3.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},unlisted:!1,prevItem:{title:"React Navigation 3.0",permalink:"/blog/2018/11/17/react-navigation-3.0"},nextItem:{title:"React Navigation 2.0",permalink:"/blog/2018/05/07/react-navigation-2.0"}},c={authorsImageUrls:[void 0]},l=[{value:"Installation",id:"installation",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Explicit app container required for the root navigator",id:"explicit-app-container-required-for-the-root-navigator",level:3},{value:"Renamed navigationOptions in navigator configuration",id:"renamed-navigationoptions-in-navigator-configuration",level:3},{value:"Drawer now keeps inactive tabs in memory by default",id:"drawer-now-keeps-inactive-tabs-in-memory-by-default",level:3},{value:"New features",id:"new-features",level:2},{value:"Assorted fixes &amp; improvements",id:"assorted-fixes--improvements",level:2},{value:"Ecosystem and web support",id:"ecosystem-and-web-support",level:2},{value:"Independent Projects",id:"independent-projects",level:3},{value:"Web Support",id:"web-support",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"We are excited to announce the release candidate of version 3.0 today!"}),"\n",(0,a.jsxs)(n.p,{children:["This is the first release where React Navigation depends on a native module outside of React Native core: it now depends on react-native-gesture-handler. This library provides an excellent set of primitives for leveraging the operating systems\u2019 native gesture APIs and has enabled us to fix a variety of issues with stack and drawer navigators. React Navigation also depends on react-native-screens, but you don\u2019t need to install the native module if you prefer not to use it (we have a blog post coming soon that will explain what react-native-screens is and why you may want to use it, or you can watch ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Z0Jl1KCWiag",children:"this talk"})," by the author of the library)."]}),"\n",(0,a.jsx)(n.p,{children:"We didn\u2019t get around to every feature that we wanted to land for this release, but we also didn\u2019t want to hold it up further because we expect that you will want to start using it right away - the release includes performance improvements, bugfixes, ergonomics improvements, some handy new features, and a re-organizing of the internals to improve support for web as a target of React Navigation."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s get started with react-navigation 3.0."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["First, install the library using your favorite package manager: ",(0,a.jsx)(n.code,{children:"yarn add react-navigation@^3.0.0-rc.0"})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, install react-native-gesture-handler. If you\u2019re using Expo you don\u2019t need to do anything here, it\u2019s included in the SDK. Otherwise: ",(0,a.jsx)(n.code,{children:"yarn add react-native-gesture-handler && react-native link"})]}),"\n",(0,a.jsxs)(n.p,{children:["Optionally, you can install react-native-screens. If you\u2019re using Expo you don\u2019t need to do anything here, it\u2019s included in SDK 30 and higher. Otherwise, follow the instructions in the README on ",(0,a.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-screens",children:(0,a.jsx)(n.code,{children:"react-native-screens"})}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning"}),": if you have manually installed any navigators in your project, for example react-navigation-material-bottom-tabs, you will need to update those to a version that is compatible with 3.0.0. In the case of react-navigation-material-bottom-tabs, 1.0.0-alpha.2 is compatible."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,a.jsx)(n.p,{children:"When you first run your app after updating it won\u2019t work because react-navigation@^3 requires you to add an app container to the root navigator. Once you get that in place, you may notice that your navigation options aren\u2019t being applied as you expect - this is due to navigationOptions in navigator configuration being renamed to defaultNavigationOptions. If you use a drawer, you may notice that it feels quicker, but if you depend on inactive screens being unmounted you\u2019ll be surprised. More details on these changes and how to update your app to work just as well (probably better) than before below."}),"\n",(0,a.jsx)(n.h3,{id:"explicit-app-container-required-for-the-root-navigator",children:"Explicit app container required for the root navigator"}),"\n",(0,a.jsx)(n.p,{children:"In the past, any navigator could act as the navigation container at the top-level of your app because they were all wrapped in \u201cnavigation containers\u201d. The navigation container, now known as an app container, is a higher-order-component that maintains the navigation state of your app and handles interacting with the outside world to turn linking events into navigation actions and so on."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {\n  createStackNavigator,\n  createAppContainer\n} from 'react-navigation';\nconst MainNavigator = createStackNavigator({...});\nconst App = createAppContainer(MainNavigator);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This should be an easy change - import ",(0,a.jsx)(n.code,{children:"createAppContainer"})," in the root of your app and use it to wrap the root navigator."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning"}),": if you have any custom navigators, you may have used  ",(0,a.jsx)(n.code,{children:"createNavigationContainer"}),", you can remove this now because it\u2019s only used at the root of the app and provided by the user."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"renamed-navigationoptions-in-navigator-configuration",children:"Renamed navigationOptions in navigator configuration"}),"\n",(0,a.jsx)(n.p,{children:"When configuring navigators it\u2019s often useful to pass in default navigation options for the screens inside of that navigator. For example in a stack you might want to set a background color and tint color for each screen. Previously, you would write something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  navigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  }\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As of this release, ",(0,a.jsx)(n.code,{children:"navigationOptions"})," in navigator configuration like this has been renamed to ",(0,a.jsx)(n.code,{children:"defaultNavigationOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  defaultNavigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  },\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you need to configure the ",(0,a.jsx)(n.code,{children:"navigationOptions"})," for a navigator itself. Typically you\u2019d do something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Home.navigationOptions = { tabBarLabel: 'Home!' };\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As of this release, you can use ",(0,a.jsx)(n.code,{children:"navigationOptions"})," in the navigator config for this instead."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  defaultNavigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  },\n  navigationOptions: {\n    tabBarLabel: 'Home!',\n  },\n});\n\nconst Tabs = createBottomTabNavigator({ Home });\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://snack.expo.io/@notbrent/belligerent-pizza",children:"See this example on Snack"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We\u2019re sorry to make you go hunt through your code and rename a handful of strings, the hope is that this change makes the code more readable and more intuitive to new users in the future."}),"\n",(0,a.jsx)(n.h3,{id:"drawer-now-keeps-inactive-tabs-in-memory-by-default",children:"Drawer now keeps inactive tabs in memory by default"}),"\n",(0,a.jsxs)(n.p,{children:["Previously when using the drawer navigator screens would unmount when inactive, and when you switch back to them you\u2019d need to re-render the entire thing. In tabs these stay in memory as you would expect, so once you switch to the screen once it\u2019s faster to go back there again and you don\u2019t lose your place in a scroll view or anything. Drawer now behaves the same way, but you can go back to the old behavior if you like by passing in ",(0,a.jsx)(n.code,{children:"unmountInactiveRoutes: true"})," in the drawer navigation configuration."]}),"\n",(0,a.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["react-navigation now exports ",(0,a.jsx)(n.code,{children:"ScrollView"}),", ",(0,a.jsx)(n.code,{children:"FlatList"}),", and ",(0,a.jsx)(n.code,{children:"SectionList"})," that will scroll to top when tapping on the active tab as you would expect from native tab bars."]}),"\n",(0,a.jsx)(n.li,{children:"Drawer supports two more types in addition to the default \u2018front\u2019 behavior that you expect from typical Android drawers: back and slide."}),"\n",(0,a.jsx)(n.li,{children:"You can now provide default params inside of route definitions:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Store = createStackNavigator({\n  Playstation: { screen: ProductScreen, params: { product: 'Playstation' } },\n  Xbox: { screen: ProductScreen, params: { product: 'Xbox' } },\n});\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Basic support for hooks in ",(0,a.jsx)(n.code,{children:"react-navigation-hooks"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"headerBackgroundTransitionPreset: 'toggle' | 'fade' | 'translate'"})," lets you choose how to transition your custom ",(0,a.jsx)(n.code,{children:"headerBackground"})," components between screens."]}),"\n",(0,a.jsxs)(n.li,{children:["Add options to opt in/out of the stack card overlay and shadow that are visible during transitions: ",(0,a.jsx)(n.code,{children:"cardShadowEnabled"})," defaults to ",(0,a.jsx)(n.code,{children:"true"})," and  ",(0,a.jsx)(n.code,{children:"cardOverlayEnabled"})," defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Export ",(0,a.jsx)(n.code,{children:"StackGestureContext"})," and ",(0,a.jsx)(n.code,{children:"DrawerGestureContext"})," from react-navigation-stack and react-navigation-drawer, so you can use the ref from the corresponding gestures with other gesture handlers (eg: ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation-drawer/blob/bf4bdba7f6a4fbc12192f5d5ba2285f6280431b7/example/src/GestureInteraction.js",children:"GestureInteraction.js"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"assorted-fixes--improvements",children:"Assorted fixes & improvements"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Stack transition performance improved greatly by removing the shadow from the entire card and rendering it only on the slice where it is needed. The card opacity is also no longer directly animated but instead an overlay is put on top to create a similar effect but with better performance."}),"\n",(0,a.jsxs)(n.li,{children:["Fix long-standing issues with stack that led to quietly re-mounting screens when navigating quickly in certain patterns: ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/issues/4155",children:"react-navigation/issues/415"})]}),"\n",(0,a.jsx)(n.li,{children:"Support inverted gesture in modals."}),"\n",(0,a.jsx)(n.li,{children:"Stack card gesture uses react-native-gesture-handler and native driver so the gesture runs on the UI thread (except when the gesture ends, then it calls back to JS)."}),"\n",(0,a.jsxs)(n.li,{children:["Fix a variety of issues with drawer navigator, including issues around nesting (",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/issues/4154",children:"react-navigation/issues/4154"}),") and bugs with firing open / close (eg: ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/issues/5146",children:"react-navigation/issues/5146"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ecosystem-and-web-support",children:"Ecosystem and web support"}),"\n",(0,a.jsx)(n.p,{children:"React Navigation 3.0 brings some important changes to the React Navigation ecosystem: the project now lives across a number of repositories and packages, we have an exciting new transitioner on the way, and the core finally has first-class support for web apps on the client and server!"}),"\n",(0,a.jsx)(n.h3,{id:"independent-projects",children:"Independent Projects"}),"\n",(0,a.jsx)(n.p,{children:"React Navigation has always been a set of loosely-coupled navigation components: Stack, Tabs, Drawer, etc. But until now they have always lived in the main navigation repo, which has been difficult to maintain. People often struggle to use different versions of these components, or they want to fork them for their own app."}),"\n",(0,a.jsx)(n.p,{children:"In v3, all of our main packages and repos are separated. There are the following core packages in our new NPM org:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@react-navigation/core"})," - The primitives and utilities that define our patterns, plus several routers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@react-navigation/native"})," - Container and support for navigators on React Native apps. ",(0,a.jsx)(n.code,{children:"createAppContainer"})," from the main ",(0,a.jsx)(n.code,{children:"react-navigation"})," package actually comes from this package."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@react-navigation/web"})," - Web browser app container, and utilities for server rendering"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In addition, we have published our community-maintained components as standalone repos and packages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"react-navigation-stack"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"react-navigation-tabs"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"react-navigation-drawer"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"react-navigation-transitioner"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"react-navigation-hooks"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To keep the experience as simple as possible the ",(0,a.jsx)(n.code,{children:"react-navigation"})," package will continue to be supported, and will contain most of the above components as it did before."]}),"\n",(0,a.jsx)(n.h3,{id:"web-support",children:"Web Support"}),"\n",(0,a.jsxs)(n.p,{children:["Now that the core of React Navigation can be used outside of React Native, we can provide first-class web support to anyone using React.js on the web, including those who do not want to use ",(0,a.jsx)(n.code,{children:"react-native-web"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is an example web app which demonstrates the new ",(0,a.jsx)(n.code,{children:"createBrowserApp"})," container and the built-in  ",(0,a.jsx)(n.code,{children:"Link"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { createSwitchNavigator } from "@react-navigation/core";\nimport { createBrowserApp, Link } from "@react-navigation/web";\n\nclass Home extends React.Component {\n  static path = "";\n  static navigationOptions = {\n    title: "Home",\n  };\n  render () {\n    return (\n      <div>\n        <h2>Home Screen</h2>\n        <Link toRoute="Profile" params={{ name: "Brent", view: "photos" }}>\n          Brent\'s photos\n        </Link>\n      </div>\n    );\n  }\n}\nclass Profile extends React.Component {\n  static path = "/profile/:name";\n  ...\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Home,\n  Profile,\n});\n\nconst App = createBrowserApp(AppNavigator);\n\nexport default App;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The above ",(0,a.jsx)(n.code,{children:"Link"})," tag will render to:\n",(0,a.jsx)(n.code,{children:'<a href=``"``/profile/Brent?view=photos``"``>Brent\'s Photos</a>'})]}),"\n",(0,a.jsxs)(n.p,{children:["See a simple web app with Create React App ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/example-web",children:"here"}),". Or take a look at ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/web-server-example",children:"this razzle app"})," for a more complicated example including server rendering."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["Thanks for reading, please post any issues you encounter to ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/issues",children:"react-navigation/issues"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);