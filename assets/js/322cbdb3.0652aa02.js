"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[12665],{51490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=n(85893),a=n(11151);const r={id:"themes",title:"Themes",sidebar_label:"Themes"},i="Built-in themes",s={id:"themes",title:"Themes",description:"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day.",source:"@site/versioned_docs/version-3.x/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/3.x/themes",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/themes.md",tags:[],version:"3.x",frontMatter:{id:"themes",title:"Themes",sidebar_label:"Themes"},sidebar:"version-3.x-docs",previous:{title:"Screen tracking for analytics",permalink:"/docs/3.x/screen-tracking"},next:{title:"State persistence",permalink:"/docs/3.x/state-persistence"}},c={},h=[{value:"Using the operating system preferences",id:"using-the-operating-system-preferences",level:2},{value:"Using the currently selected theme",id:"using-the-currently-selected-theme",level:2},{value:"Using default theme colors",id:"using-default-theme-colors",level:3},{value:"Default themed components",id:"default-themed-components",level:3},{value:"Built-in themes inside <code>navigationOptions</code>",id:"built-in-themes-inside-navigationoptions",level:2},{value:"Built-in themes inside static navigator configuration",id:"built-in-themes-inside-static-navigator-configuration",level:2},{value:"Themes inside <code>navigationOptions</code>",id:"themes-inside-navigationoptions",level:2},{value:"Theming tabs and other similar navigators",id:"theming-tabs-and-other-similar-navigators",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day."}),"\n",(0,o.jsx)(t.h1,{id:"built-in-themes",children:"Built-in themes"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note: support for built-in themes requires react-navigation@>=3.12.0!"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["As operating systems add built-in support for light and dark modes, supporting dark mode is less about keeping hip to trends and more about conforming to the average user expectations for how apps should work. In order to provide support for light and dark mode in a way that is reasonably consistent with the OS defaults, these themes are built in to React Navigation. You can pass in a ",(0,o.jsx)(t.code,{children:"theme"})," prop to your app container component in order to switch between light and dark mode, and the value of that ",(0,o.jsx)(t.code,{children:"theme"})," prop can come from whichever API you use to detect user preferences for dark mode, or in the case of older operating system versions, from a custom configuration within your app UI."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'let Navigation = createAppContainer(RootStack);\n\n// `theme` can be `light` or `dark`. It defaults to `light` if not specified.\nexport default () => <Navigation theme="light">;\n'})}),"\n",(0,o.jsx)(t.p,{children:"This will take care of styling the stack navigator, bottom tab navigator, and drawer navigator for you. React Navigation also provides several tools to help you make your customizations of those navigators and the screens within the navigators support both themes too."}),"\n",(0,o.jsx)(t.h2,{id:"using-the-operating-system-preferences",children:"Using the operating system preferences"}),"\n",(0,o.jsxs)(t.p,{children:["At the time of writing, ",(0,o.jsx)(t.code,{children:"react-native"})," does not currently support detecting the operating system color scheme preferences in the core (",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react-native/pull/26172",children:"you can follow this pull request"}),"). Until it is part of core and you have updated to the version that includes it, you can use ",(0,o.jsx)(t.code,{children:"react-native-appearance"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"You will need iOS 13 to actually be able to toggle dark mode through system settings."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note: if you use the Expo managed workflow, this requires SDK 35+"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["First, you need to install ",(0,o.jsx)(t.code,{children:"react-native-appearance"}),". ",(0,o.jsx)(t.a,{href:"https://github.com/expo/react-native-appearance",children:"Follow the instructions in the README"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Once you've installed it, set your root component up as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { AppearanceProvider, useColorScheme } from 'react-native-appearance';\n\n// Other navigation code goes here...\nlet Navigation = createAppContainer(RootStack);\n\nexport default () => {\n  let theme = useColorScheme();\n\n  return (\n    <AppearanceProvider>\n      <Navigation theme={theme}>\n    </AppearanceProvider>\n  )\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If the version of React Native you are using doesn't support hooks yet, you can use the ",(0,o.jsx)(t.code,{children:"Appearance.addChangeListener(cb)"})," and ",(0,o.jsx)(t.code,{children:"Appearance.getColorScheme()"})," functions as described in the ",(0,o.jsx)(t.a,{href:"https://github.com/expo/react-native-appearance#usage",children:"usage section of the README"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["See a full working example of theme integration in ",(0,o.jsx)(t.a,{href:"https://github.com/react-navigation/theme-example",children:"react-navigation/theme-example"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"using-the-currently-selected-theme",children:"Using the currently selected theme"}),"\n",(0,o.jsxs)(t.p,{children:["Two tools are available to gain access to the theme in any component that descends from the app navigation container: ",(0,o.jsx)(t.code,{children:"useTheme"})," and ",(0,o.jsx)(t.code,{children:"ThemeConext"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"useTheme"})," is a simple custom hook that returns the theme."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { useTheme } from 'react-navigation';\n\n// Black background and white text in light theme, inverted on dark theme\nfunction MyButton() {\n  let theme = useTheme();\n\n  return (\n    <TouchableOpacity\n      style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n      <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n        Button!\n      </Text>\n    </TouchableOpacity>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ThemeContext"})," lets you access the theme using the ",(0,o.jsx)(t.code,{children:"ThemeContext.Consumer"})," pattern or with ",(0,o.jsx)(t.code,{children:"static contextType"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => (\n        <TouchableOpacity\n          style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n          <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>Button!</Text>\n        </TouchableOpacity>\n      )}\n    <ThemeContext.Consumer>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nclass MyButton extends React.Component {\n  static contextType = ThemeContext;\n\n  render() {\n    return (\n      <TouchableOpacity\n        style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n        <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n          Button!\n        </Text>\n      </TouchableOpacity>\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"using-default-theme-colors",children:"Using default theme colors"}),"\n",(0,o.jsxs)(t.p,{children:["There is a small but perhaps useful list of colors that are used to style navigators according to the theme. This list of colors is exported under ",(0,o.jsx)(t.code,{children:"ThemeColors"}),". See the TypeScript definition for a full list of colors."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeColors, useTheme } from 'react-navigation';\n\nfunction MyButton() {\n  let theme = useTheme();\n  let colors = ThemeColors[theme];\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n      <Text style={{ color: colors.label }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"default-themed-components",children:"Default themed components"}),"\n",(0,o.jsxs)(t.p,{children:["Several components have defaults that are biased to a specific theme. ",(0,o.jsx)(t.code,{children:"Text"}),", for example, defaults to black. ",(0,o.jsx)(t.code,{children:"StatusBar"})," defaults to dark text. React Navigation provides themed alternatives to these."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { Themed } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n        <Themed.Text>Button!</Themed.Text>\n      </TouchableOpacity>\n      <Themed.StatusBar />\n    </View>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"built-in-themes-inside-navigationoptions",children:["Built-in themes inside ",(0,o.jsx)(t.code,{children:"navigationOptions"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import {\n  ThemeColors,\n  createAppContainer,\n  createStackNavigator,\n} from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ theme }) => {\n    return {\n      title: 'Home',\n      headerLeft: (\n        <Button\n          color={theme === 'dark' ? 'white' : 'blue'}\n          title=\"Press me\"\n          onPress={() => alert('success!')}\n        />\n      ),\n    };\n  };\n\n  render() {\n    // etc...\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"built-in-themes-inside-static-navigator-configuration",children:"Built-in themes inside static navigator configuration"}),"\n",(0,o.jsxs)(t.p,{children:["Colors that are specified within the static configuration options for a navigator can now be specified as objects with ",(0,o.jsx)(t.code,{children:"light"})," and ",(0,o.jsx)(t.code,{children:"dark"})," keys:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: {\n        light: '#000',\n        dark: '#fff',\n      },\n      inactiveTintColor: {\n        light: 'rgba(0,0,0,0.2)',\n        dark: 'rgba(255,255,255,0.2)',\n      },\n    },\n  }\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"The old format still works too, but colors specified in the following way will not adapt to themes:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: '#000',\n      inactiveTintColor: 'rgba(0,0,0,0.2)',\n    },\n  }\n);\n"})}),"\n",(0,o.jsx)(t.h1,{id:"custom-themes-using-react-context",children:"Custom themes using React context"}),"\n",(0,o.jsx)(t.p,{children:"You may want more control than what you're given with just the built-in themes. In this case, you can build your own themes entirely from scratch."}),"\n",(0,o.jsxs)(t.p,{children:["Building custom themes into an app with React Navigation is not too much different than a React app without it; the main differences are that you will need to use ",(0,o.jsx)(t.code,{children:"screenProps"})," in order to update style properties controlled by ",(0,o.jsx)(t.code,{children:"navigationOptions"}),", and when style properties are controlled in navigator configuration we'll need to take another approach. First we're going to recap how you would theme a React app without React Navigation, then we will dive deeper into these differences. Additionally, this guide assumes that you are already comfortable with React Navigation, in particular how to use and configure navigators."]}),"\n",(0,o.jsxs)(t.p,{children:['React\'s context API allows you to share state from an ancestor component to any of its descendants without explicitly passing the value through layers and layers of components ("prop drilling"). This is a useful tool in order to build themes because we can define the theme at the root of the app, and then access it from anywhere else and re-render every themed component whenever the theme changes. If you are not familiar with how to use context already, you might want to read the ',(0,o.jsx)(t.a,{href:"https://reactjs.org/docs/context.html",children:"React documentation"})," for it before continuing."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { Text, TouchableOpacity, View } from 'react-native';\n\nconst ThemeContext = React.createContext(null);\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n  },\n};\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>\n        <HomeScreen />\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nclass ThemedButton extends React.Component {\n  render() {\n    let { title, ...props } = this.props;\n    return (\n      <TouchableOpacity {...props}>\n        <ThemeContext.Consumer>\n          {({ theme }) => (\n            <Text style={{ color: ThemeConstants[theme].fontColor }}>\n              {title}\n            </Text>\n          )}\n        </ThemeContext.Consumer>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass ThemedView extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <View\n            {...this.props}\n            style={[\n              this.props.style,\n              { backgroundColor: ThemeConstants[theme].backgroundColor },\n            ]}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Okay, that's a lot of code. There isn't much going on here aside from passing the theme around through context and then pulling it out of context when we need it inside of themed component. Themed components like ",(0,o.jsx)(t.code,{children:"ThemedView"})," and ",(0,o.jsx)(t.code,{children:"ThemedButton"})," are useful to help you avoid constantly repeating theme context related boilerplate."]}),"\n",(0,o.jsxs)(t.h2,{id:"themes-inside-navigationoptions",children:["Themes inside ",(0,o.jsx)(t.code,{children:"navigationOptions"})]}),"\n",(0,o.jsxs)(t.p,{children:["A regrettable limitation of the current implementation of ",(0,o.jsx)(t.code,{children:"navigationOptions"})," is that we are unable to access React context for use in properties such as ",(0,o.jsx)(t.code,{children:"headerStyle"})," and ",(0,o.jsx)(t.code,{children:"headerTintColor"}),". We can and should use them in properties that access React components, for example in ",(0,o.jsx)(t.code,{children:"headerRight"})," we could provide a component like ",(0,o.jsx)(t.code,{children:"ThemedHeaderButton"}),". To apply the theme to other properties we need to use ",(0,o.jsx)(t.code,{children:"screenProps"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import { createAppContainer, createStackNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ screenProps }) => {\n    let currentTheme = ThemeConstants[screenProps.theme];\n\n    return {\n      title: 'Home',\n      headerTintColor: currentTheme.fontColor,\n      headerStyle: { backgroundColor: currentTheme.backgroundColor },\n    };\n  };\n\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Navigation = createAppContainer(Stack);\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>\n        <Navigation screenProps={{ theme: this.state.theme }} />\n      </ThemeContext.Provider>\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Success! The stack header style now updates when the theme changes."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: in the future we would like to deprecate ",(0,o.jsx)(t.code,{children:"screenProps"})," and move entirely over to React context. For now, ",(0,o.jsx)(t.code,{children:"screenProps"})," is the best way to do that, and when this changes it will be easy to migrate."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"theming-tabs-and-other-similar-navigators",children:"Theming tabs and other similar navigators"}),"\n",(0,o.jsxs)(t.p,{children:["Some navigators may have their styles configured in the navigator configuration object when they are initialized. While it may be best to update these navigators so that they can be configured more easily through ",(0,o.jsx)(t.code,{children:"navigationOptions"}),", as long as they allow us to override the UI that they render with our own component and give us access to the default component, we can work with them just fine. We'll look at how to theme a bottom tab navigator."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import {\n  createAppContainer,\n  createStackNavigator,\n  createBottomTabNavigator,\n  BottomTabBar,\n} from 'react-navigation';\n\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n    activeTintColor: 'blue',\n    inactiveTintColor: '#ccc',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n    activeTintColor: '#fff',\n    inactiveTintColor: '#888',\n  },\n};\n\n// Notice how we override the `activeTintColor`, `inactiveTintColor` and\n// `backgroundColor` of the tab bar with our theme styles.\nclass ThemedBottomTabBar extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <BottomTabBar\n            {...this.props}\n            activeTintColor={ThemeConstants[theme].activeTintColor}\n            inactiveTintColor={ThemeConstants[theme].inactiveTintColor}\n            style={{\n              backgroundColor: ThemeConstants[theme].backgroundColor,\n            }}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Tabs = createBottomTabNavigator(\n  { Stack },\n  { tabBarComponent: ThemedBottomTabBar }\n);\nconst Navigation = createAppContainer(Tabs);\n\n// And the rest of the code goes here...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You will likely want to go a bit further than we detailed in this guide, such as change the status bar color depending on the theme and customize the border color for the header and tab bar as well. You can see all of the above code plus some more changes to make it more complete in ",(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/themes-example",children:"this Snack"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"I never said it was easy, but this about covers what you need to know to theme an app that uses React Navigation. Good luck, remember me you're a billionaire."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(67294);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);