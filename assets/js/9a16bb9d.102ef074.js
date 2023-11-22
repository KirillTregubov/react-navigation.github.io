"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[57842],{67641:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(85893),r=t(11151);const i={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},o=void 0,s={id:"drawer-based-navigation",title:"Drawer navigation",description:"This guide covers createDrawerNavigator.",source:"@site/versioned_docs/version-4.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/4.x/drawer-based-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/drawer-based-navigation.md",tags:[],version:"4.x",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-4.x-docs",previous:{title:"Tab navigation",permalink:"/docs/4.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/4.x/auth-flow"}},c={},d=[];function l(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["This guide covers ",(0,a.jsx)(e.a,{href:"/docs/4.x/drawer-navigator",children:"createDrawerNavigator"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"class MyHomeScreen extends React.Component {\n  static navigationOptions = {\n    drawerLabel: 'Home',\n    drawerIcon: ({ tintColor }) => (\n      <Image\n        source={require('./chats-icon.png')}\n        style={[styles.icon, { tintColor: tintColor }]}\n      />\n    ),\n  };\n\n  render() {\n    return (\n      <Button\n        onPress={() => this.props.navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    );\n  }\n}\n\nclass MyNotificationsScreen extends React.Component {\n  static navigationOptions = {\n    drawerLabel: 'Notifications',\n    drawerIcon: ({ tintColor }) => (\n      <Image\n        source={require('./notif-icon.png')}\n        style={[styles.icon, { tintColor: tintColor }]}\n      />\n    ),\n  };\n\n  render() {\n    return (\n      <Button\n        onPress={() => this.props.navigation.goBack()}\n        title=\"Go back home\"\n      />\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  icon: {\n    width: 24,\n    height: 24,\n  },\n});\n\nconst MyDrawerNavigator = createDrawerNavigator({\n  Home: {\n    screen: MyHomeScreen,\n  },\n  Notifications: {\n    screen: MyNotificationsScreen,\n  },\n});\n\nconst MyApp = createAppContainer(MyDrawerNavigator);\n"})}),"\n",(0,a.jsx)(e.p,{children:"To open and close drawer, use the following helpers to open and close the drawer:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n"})}),"\n",(0,a.jsx)(e.p,{children:"If you would like to toggle the drawer you call the following:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"this.props.navigation.toggleDrawer();\n"})}),"\n",(0,a.jsx)(e.p,{children:"Each of these functions, behind the scenes, are simply dispatching actions:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n"})}),"\n",(0,a.jsx)(e.p,{children:"If you would like to determine if drawer is open or closed, you can do the following:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const parent = this.props.navigation.dangerouslyGetParent();\nconst isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);