"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[38833],{84230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(85893),o=t(11151);const i={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},s=void 0,r={id:"tab-based-navigation",title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-4.x/tab-based-navigation.md",sourceDirName:".",slug:"/tab-based-navigation",permalink:"/docs/4.x/tab-based-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/tab-based-navigation.md",tags:[],version:"4.x",frontMatter:{id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},sidebar:"version-4.x-docs",previous:{title:"Limitations",permalink:"/docs/4.x/limitations"},next:{title:"Drawer navigation",permalink:"/docs/4.x/drawer-based-navigation"}},c={},d=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",level:2},{value:"Customizing the appearance",id:"customizing-the-appearance",level:2},{value:"Add badges to icons",id:"add-badges-to-icons",level:2},{value:"Jumping between tabs",id:"jumping-between-tabs",level:2},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",level:2},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",level:2},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."}),"\n",(0,a.jsxs)(n.p,{children:["This guide covers ",(0,a.jsx)(n.a,{href:"/docs/4.x/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})}),". You may also use ",(0,a.jsx)(n.a,{href:"/docs/4.x/material-bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"createMaterialBottomTabNavigator"})})," and ",(0,a.jsx)(n.a,{href:"/docs/4.x/material-top-tab-navigator",children:(0,a.jsx)(n.code,{children:"createMaterialTopTabNavigator"})})," to add tabs to your application."]}),"\n",(0,a.jsx)(n.h2,{id:"minimal-example-of-tab-based-navigation",children:"Minimal example of tab-based navigation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nconst TabNavigator = createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n\nexport default createAppContainer(TabNavigator);\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/basic-tabs-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.h2,{id:"customizing-the-appearance",children:"Customizing the appearance"}),"\n",(0,a.jsxs)(n.p,{children:["This is similar to how you would customize a stack navigator \u2014 there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",(0,a.jsx)(n.code,{children:"navigationOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// You can import Ionicons from @expo/vector-icons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nexport default createBottomTabNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    defaultNavigationOptions: ({ navigation }) => ({\n      tabBarIcon: ({ focused, horizontal, tintColor }) => {\n        const { routeName } = navigation.state;\n        let IconComponent = Ionicons;\n        let iconName;\n        if (routeName === 'Home') {\n          iconName = focused\n            ? 'ios-information-circle'\n            : 'ios-information-circle-outline';\n          // Sometimes we want to add badges to some icons.\n          // You can check the implementation below.\n          IconComponent = HomeIconWithBadge;\n        } else if (routeName === 'Settings') {\n          iconName = focused ? 'ios-list-box' : 'ios-list';\n        }\n\n        // You can return any component that you like here!\n        return <IconComponent name={iconName} size={25} color={tintColor} />;\n      },\n    }),\n    tabBarOptions: {\n      activeTintColor: 'tomato',\n      inactiveTintColor: 'gray',\n    },\n  }\n);\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/tabs-with-icons-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.p,{children:"Let's dissect this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a property on ",(0,a.jsx)(n.code,{children:"navigationOptions"}),", so we know we can use it on our screen components, but in this case chose to put it in the ",(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})," configuration in order to centralize the icon configuration for convenience."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a function that is given the ",(0,a.jsx)(n.code,{children:"focused"})," state, ",(0,a.jsx)(n.code,{children:"tintColor"}),", and ",(0,a.jsx)(n.code,{children:"horizontal"})," param, which is a boolean. If you take a peek further down in the configuration you will see ",(0,a.jsx)(n.code,{children:"tabBarOptions"})," and ",(0,a.jsx)(n.code,{children:"activeTintColor"})," and ",(0,a.jsx)(n.code,{children:"inactiveTintColor"}),". These default to the iOS platform defaults, but you can change them here. The ",(0,a.jsx)(n.code,{children:"tintColor"})," that is passed through to the ",(0,a.jsx)(n.code,{children:"tabBarIcon"})," is either the active or inactive one, depending on the ",(0,a.jsx)(n.code,{children:"focused"})," state (focused is active). The orientation state ",(0,a.jsx)(n.code,{children:"horizontal"})," is ",(0,a.jsx)(n.code,{children:"true"})," when the device is in landscape, otherwise is ",(0,a.jsx)(n.code,{children:"false"})," for portrait."]}),"\n",(0,a.jsxs)(n.li,{children:["Read the ",(0,a.jsx)(n.a,{href:"/docs/4.x/bottom-tab-navigator",children:"full API reference"})," for further information on ",(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})," configuration options."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"add-badges-to-icons",children:"Add badges to icons"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes we want to add badges to some icons. A common way is to use an extra view container and style the badge element with absolute positioning."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default class IconWithBadge extends React.Component {\n  render() {\n    const { name, badgeCount, color, size } = this.props;\n    return (\n      <View style={{ width: 24, height: 24, margin: 5 }}>\n        <Ionicons name={name} size={size} color={color} />\n        {badgeCount > 0 && (\n          <View\n            style={{\n              // If you're using react-native < 0.57 overflow outside of parent\n              // will not work on Android, see https://git.io/fhLJ8\n              position: 'absolute',\n              right: -6,\n              top: -3,\n              backgroundColor: 'red',\n              borderRadius: 6,\n              width: 12,\n              height: 12,\n              justifyContent: 'center',\n              alignItems: 'center',\n            }}\n          >\n            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>\n              {badgeCount}\n            </Text>\n          </View>\n        )}\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"React Context"}),", ",(0,a.jsx)(n.a,{href:"https://redux.js.org/",children:"Redux"}),", ",(0,a.jsx)(n.a,{href:"https://mobx.js.org/",children:"MobX"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js",children:"event emitters"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const HomeIconWithBadge = props => {\n  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.\n  return <IconWithBadge {...props} badgeCount={3} />;\n};\nexport default HomeIconWithBadge;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"jumping-between-tabs",children:"Jumping between tabs"}),"\n",(0,a.jsxs)(n.p,{children:["Switching from one tab to another has a familiar API \u2014 ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Button, Text, View } from 'react-native';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n        <Button\n          title=\"Go to Settings\"\n          onPress={() => this.props.navigation.navigate('Settings')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/jumping-between-tabs-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.h2,{id:"a-stack-navigator-for-each-tab",children:"A stack navigator for each tab"}),"\n",(0,a.jsx)(n.p,{children:"Usually tabs don't just display one screen \u2014 for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Details!</Text>\n      </View>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nconst HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Details: DetailsScreen,\n});\n\nexport default createAppContainer(\n  createBottomTabNavigator(\n    {\n      Home: HomeStack,\n      Settings: SettingsStack,\n    },\n    {\n      /* Other configuration remains unchanged */\n    }\n  )\n);\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/stacks-in-tabs-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.h2,{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:"Why do we need a TabNavigator instead of TabBarIOS or some other component?"}),"\n",(0,a.jsx)(n.p,{children:"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."}),"\n",(0,a.jsxs)(n.p,{children:["For example, React Navigation's ",(0,a.jsx)(n.code,{children:"TabNavigator"}),' takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components \u2014 for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component.']}),"\n",(0,a.jsx)(n.h2,{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:"A tab navigator contains a stack and you want to hide the tab bar on specific screens"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-options-resolution#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:"See the documentation here"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);