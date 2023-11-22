"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[25932],{38069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(85893),i=t(11151);const a={id:"modal",title:"Opening a modal",sidebar_label:"Opening a modal"},s=void 0,r={id:"modal",title:"Opening a modal",description:"Modal shown on screen",source:"@site/versioned_docs/version-6.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/modal",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/modal.md",tags:[],version:"6.x",frontMatter:{id:"modal",title:"Opening a modal",sidebar_label:"Opening a modal"},sidebar:"docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/status-bar"},next:{title:"Multiple drawers",permalink:"/docs/multiple-drawers"}},c={},l=[{value:"Creating a stack with modal screens",id:"creating-a-stack-with-modal-screens",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Modal shown on screen",src:t(8682).Z+"",width:"320",height:"569"})}),"\n",(0,o.jsx)(n.p,{children:"A modal displays content that temporarily blocks interactions with the main view."}),"\n",(0,o.jsx)(n.p,{children:"A modal is like a popup \u2014 it's not part of your primary navigation flow \u2014 it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-stack-with-modal-screens",children:"Creating a stack with modal screens"}),"\n",(0,o.jsx)("samp",{id:"modal"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate('MyModal')}\n        title=\"Open Modal\"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nfunction ModalScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Dismiss\" />\n    </View>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nfunction RootStackScreen() {\n  return (\n    <RootStack.Navigator>\n      <RootStack.Group>\n        <RootStack.Screen name=\"Home\" component={HomeScreen} />\n        <RootStack.Screen name=\"Details\" component={DetailsScreen} />\n      </RootStack.Group>\n      <RootStack.Group screenOptions={{ presentation: 'modal' }}>\n        <RootStack.Screen name=\"MyModal\" component={ModalScreen} />\n      </RootStack.Group>\n    </RootStack.Navigator>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, we are creating 2 groups of screens using the ",(0,o.jsx)(n.code,{children:"RootStack.Group"})," component. The first group is for our regular screens, and the second group is for our modal screens. For the modal group, we have specified ",(0,o.jsx)(n.code,{children:"presentation: 'modal'"})," in ",(0,o.jsx)(n.code,{children:"screenOptions"}),". This will apply this option to all the screens inside the group. This option will change the animation for the screens to animate from bottom-to-top rather than right to left. The ",(0,o.jsx)(n.code,{children:"presentation"})," option for stack navigator can be either ",(0,o.jsx)(n.code,{children:"card"})," (default) or ",(0,o.jsx)(n.code,{children:"modal"}),". The ",(0,o.jsx)(n.code,{children:"modal"})," behavior slides the screen in from the bottom and allows the user to swipe down from the top to dismiss it on iOS."]}),"\n",(0,o.jsxs)(n.p,{children:["Instead of specifying this option for a group, it's also possible to specify it for a single screen using the ",(0,o.jsx)(n.code,{children:"options"})," prop on ",(0,o.jsx)(n.code,{children:"RootStack.Screen"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To change the type of transition on a stack navigator you can use the ",(0,o.jsx)(n.code,{children:"presentation"})," option. When set to ",(0,o.jsx)(n.code,{children:"modal"}),", all modal screens animate-in from bottom to top rather than right to left by default. This applies to that entire group, so to use non-modal transitions on other screens, we add another group with the default configuration."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8682:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/modal-demo-c21e394139257ff16390d46aa6ba5bc2.gif"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);