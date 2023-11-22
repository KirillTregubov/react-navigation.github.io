"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[11545],{53235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(85893),r=t(11151);const i={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},o=void 0,s={id:"drawer-based-navigation",title:"Drawer navigation",description:"&rarr; Run this code",source:"@site/versioned_docs/version-2.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/2.x/drawer-based-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/drawer-based-navigation.md",tags:[],version:"2.x",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-2.x-docs",previous:{title:"Tab navigation",permalink:"/docs/2.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/2.x/auth-flow"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>\n      </View>\n    );\n  }\n}\n\nconst DrawerNavigator = createDrawerNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    drawerBackgroundColor: 'rgba(255,255,255,.9)',\n    contentOptions: {\n      activeTintColor: '#fff',\n      activeBackgroundColor: '#6b52ae',\n    },\n  }\n);\n\nexport default createAppContainer(DrawerNavigator);\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/basic-drawer-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.p,{children:"To open and close drawer, use the following helpers to open and close the drawer:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you would like to toggle the drawer you call the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"this.props.navigation.toggleDrawer();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Each of these functions, behind the scenes, are simply dispatching actions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);