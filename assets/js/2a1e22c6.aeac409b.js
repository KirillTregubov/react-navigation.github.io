"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[36234],{66751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=t(85893),o=t(11151),r=t(74866),i=t(85162);const s={id:"bottom-tab-navigator",title:"Bottom Tabs Navigator",sidebar_label:"Bottom Tabs"},l=void 0,c={id:"bottom-tab-navigator",title:"Bottom Tabs Navigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-6.x/bottom-tab-navigator.md",sourceDirName:".",slug:"/bottom-tab-navigator",permalink:"/docs/bottom-tab-navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/bottom-tab-navigator.md",tags:[],version:"6.x",frontMatter:{id:"bottom-tab-navigator",title:"Bottom Tabs Navigator",sidebar_label:"Bottom Tabs"},sidebar:"docs",previous:{title:"Drawer",permalink:"/docs/drawer-navigator"},next:{title:"Material Bottom Tabs",permalink:"/docs/material-bottom-tab-navigator"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"API Definition",id:"api-definition",level:2},{value:"Props",id:"props",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>initialRouteName</code>",id:"initialroutename",level:4},{value:"<code>screenOptions</code>",id:"screenoptions",level:4},{value:"<code>backBehavior</code>",id:"backbehavior",level:4},{value:"<code>detachInactiveScreens</code>",id:"detachinactivescreens",level:4},{value:"<code>sceneContainerStyle</code>",id:"scenecontainerstyle",level:4},{value:"<code>tabBar</code>",id:"tabbar",level:4},{value:"Options",id:"options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarShowLabel</code>",id:"tabbarshowlabel",level:4},{value:"<code>tabBarLabelPosition</code>",id:"tabbarlabelposition",level:4},{value:"<code>tabBarLabelStyle</code>",id:"tabbarlabelstyle",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarIconStyle</code>",id:"tabbariconstyle",level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",level:4},{value:"<code>tabBarBadgeStyle</code>",id:"tabbarbadgestyle",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",level:4},{value:"<code>tabBarButton</code>",id:"tabbarbutton",level:4},{value:"<code>tabBarActiveTintColor</code>",id:"tabbaractivetintcolor",level:4},{value:"<code>tabBarInactiveTintColor</code>",id:"tabbarinactivetintcolor",level:4},{value:"<code>tabBarActiveBackgroundColor</code>",id:"tabbaractivebackgroundcolor",level:4},{value:"<code>tabBarInactiveBackgroundColor</code>",id:"tabbarinactivebackgroundcolor",level:4},{value:"<code>tabBarHideOnKeyboard</code>",id:"tabbarhideonkeyboard",level:4},{value:"<code>tabBarItemStyle</code>",id:"tabbaritemstyle",level:4},{value:"<code>tabBarStyle</code>",id:"tabbarstyle",level:4},{value:"<code>tabBarBackground</code>",id:"tabbarbackground",level:4},{value:"<code>lazy</code>",id:"lazy",level:4},{value:"<code>unmountOnBlur</code>",id:"unmountonblur",level:4},{value:"<code>freezeOnBlur</code>",id:"freezeonblur",level:4},{value:"Header related options",id:"header-related-options",level:3},{value:"<code>header</code>",id:"header",level:4},{value:"Specify a <code>height</code> in <code>headerStyle</code>",id:"specify-a-height-in-headerstyle",level:5},{value:"<code>headerShown</code>",id:"headershown",level:4},{value:"Events",id:"events",level:3},{value:"<code>tabPress</code>",id:"tabpress",level:4},{value:"<code>tabLongPress</code>",id:"tablongpress",level:4},{value:"Helpers",id:"helpers",level:3},{value:"<code>jumpTo</code>",id:"jumpto",level:4},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."}),"\n",(0,a.jsx)("div",{style:{display:"flex",margin:"16px 0"},children:(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/navigators/tabs/bottom-tabs-demo.mov"})})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["To use this navigator, ensure that you have ",(0,a.jsxs)(n.a,{href:"/docs/getting-started",children:[(0,a.jsx)(n.code,{children:"@react-navigation/native"})," and its dependencies (follow this guide)"]}),", then install ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs",children:(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})}),":"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @react-navigation/bottom-tabs\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @react-navigation/bottom-tabs\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @react-navigation/bottom-tabs\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,a.jsxs)(n.p,{children:["To use this tab navigator, import it from ",(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"}),":"]}),"\n",(0,a.jsx)("samp",{id:"tab-based-navigation-minimal"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For a complete usage guide please visit ",(0,a.jsx)(n.a,{href:"/docs/tab-based-navigation",children:"Tab Navigation"})]})}),"\n",(0,a.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Tab.Navigator"})," component accepts following props:"]}),"\n",(0,a.jsx)(n.h4,{id:"id",children:(0,a.jsx)(n.code,{children:"id"})}),"\n",(0,a.jsxs)(n.p,{children:["Optional unique ID for the navigator. This can be used with ",(0,a.jsx)(n.a,{href:"/docs/navigation-prop#getparent",children:(0,a.jsx)(n.code,{children:"navigation.getParent"})})," to refer to this navigator in a child navigator."]}),"\n",(0,a.jsx)(n.h4,{id:"initialroutename",children:(0,a.jsx)(n.code,{children:"initialRouteName"})}),"\n",(0,a.jsx)(n.p,{children:"The name of the route to render on first load of the navigator."}),"\n",(0,a.jsx)(n.h4,{id:"screenoptions",children:(0,a.jsx)(n.code,{children:"screenOptions"})}),"\n",(0,a.jsx)(n.p,{children:"Default options to use for the screens in the navigator."}),"\n",(0,a.jsx)(n.h4,{id:"backbehavior",children:(0,a.jsx)(n.code,{children:"backBehavior"})}),"\n",(0,a.jsxs)(n.p,{children:["This controls what happens when ",(0,a.jsx)(n.code,{children:"goBack"})," is called in the navigator. This includes pressing the device's back button or back gesture on Android."]}),"\n",(0,a.jsx)(n.p,{children:"It supports the following values:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"firstRoute"})," - return to the first screen defined in the navigator (default)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"initialRoute"})," - return to initial screen passed in ",(0,a.jsx)(n.code,{children:"initialRouteName"})," prop, if not passed, defaults to the first screen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"order"})," - return to screen defined before the focused screen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"history"})," - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"none"})," - do not handle back button"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"detachinactivescreens",children:(0,a.jsx)(n.code,{children:"detachInactiveScreens"})}),"\n",(0,a.jsxs)(n.p,{children:["Boolean used to indicate whether inactive screens should be detached from the view hierarchy to save memory. This enables integration with ",(0,a.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-screens",children:"react-native-screens"}),". Defaults to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"scenecontainerstyle",children:(0,a.jsx)(n.code,{children:"sceneContainerStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the component wrapping the screen content."}),"\n",(0,a.jsx)(n.h4,{id:"tabbar",children:(0,a.jsx)(n.code,{children:"tabBar"})}),"\n",(0,a.jsx)(n.p,{children:"Function that returns a React element to display as the tab bar."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)("samp",{id:"custom-tab-bar"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { View, Text, TouchableOpacity } from 'react-native';\n\nfunction MyTabBar({ state, descriptors, navigation }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name, route.params);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>\n              {label}\n            </Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This example will render a basic tab bar with labels."}),"\n",(0,a.jsxs)(n.p,{children:["Note that you ",(0,a.jsx)(n.strong,{children:"cannot"})," use the ",(0,a.jsx)(n.code,{children:"useNavigation"})," hook inside the ",(0,a.jsx)(n.code,{children:"tabBar"})," since ",(0,a.jsx)(n.code,{children:"useNavigation"})," is only available inside screens. You get a ",(0,a.jsx)(n.code,{children:"navigation"})," prop for your ",(0,a.jsx)(n.code,{children:"tabBar"})," which you can use instead:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.p,{children:["The following ",(0,a.jsx)(n.a,{href:"/docs/screen-options",children:"options"})," can be used to configure the screens in the navigator. These can be specified under ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.navigator"})," or ",(0,a.jsx)(n.code,{children:"options"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.Screen"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"title",children:(0,a.jsx)(n.code,{children:"title"})}),"\n",(0,a.jsxs)(n.p,{children:["Generic title that can be used as a fallback for ",(0,a.jsx)(n.code,{children:"headerTitle"})," and ",(0,a.jsx)(n.code,{children:"tabBarLabel"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbarlabel",children:(0,a.jsx)(n.code,{children:"tabBarLabel"})}),"\n",(0,a.jsxs)(n.p,{children:["Title string of a tab displayed in the tab bar or a function that given ",(0,a.jsx)(n.code,{children:"{ focused: boolean, color: string }"})," returns a React.Node, to display in tab bar. When undefined, scene ",(0,a.jsx)(n.code,{children:"title"})," is used. To hide, see ",(0,a.jsx)(n.code,{children:"tabBarShowLabel"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbarshowlabel",children:(0,a.jsx)(n.code,{children:"tabBarShowLabel"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether the tab label should be visible. Defaults to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbarlabelposition",children:(0,a.jsx)(n.code,{children:"tabBarLabelPosition"})}),"\n",(0,a.jsx)(n.p,{children:"Whether the label is shown below the icon or beside the icon."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"below-icon"}),": the label is shown below the icon (typical for iPhones)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"beside-icon"})," the label is shown next to the icon (typical for iPad)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"By default, the position is chosen automatically based on device width."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarlabelstyle",children:(0,a.jsx)(n.code,{children:"tabBarLabelStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the tab label."}),"\n",(0,a.jsx)(n.h4,{id:"tabbaricon",children:(0,a.jsx)(n.code,{children:"tabBarIcon"})}),"\n",(0,a.jsxs)(n.p,{children:["Function that given ",(0,a.jsx)(n.code,{children:"{ focused: boolean, color: string, size: number }"})," returns a React.Node, to display in the tab bar."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbariconstyle",children:(0,a.jsx)(n.code,{children:"tabBarIconStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the tab icon."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarbadge",children:(0,a.jsx)(n.code,{children:"tabBarBadge"})}),"\n",(0,a.jsxs)(n.p,{children:["Text to show in a badge on the tab icon. Accepts a ",(0,a.jsx)(n.code,{children:"string"})," or a ",(0,a.jsx)(n.code,{children:"number"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbarbadgestyle",children:(0,a.jsx)(n.code,{children:"tabBarBadgeStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style for the badge on the tab icon. You can specify a background color or text color here."}),"\n",(0,a.jsx)(n.h4,{id:"tabbaraccessibilitylabel",children:(0,a.jsx)(n.code,{children:"tabBarAccessibilityLabel"})}),"\n",(0,a.jsx)(n.p,{children:"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."}),"\n",(0,a.jsx)(n.h4,{id:"tabbartestid",children:(0,a.jsx)(n.code,{children:"tabBarTestID"})}),"\n",(0,a.jsx)(n.p,{children:"ID to locate this tab button in tests."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarbutton",children:(0,a.jsx)(n.code,{children:"tabBarButton"})}),"\n",(0,a.jsxs)(n.p,{children:["Function which returns a React element to render as the tab bar button. It wraps the icon and label. Renders ",(0,a.jsx)(n.code,{children:"Pressable"})," by default."]}),"\n",(0,a.jsx)(n.p,{children:"You can specify a custom implementation here:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"tabBarButton: (props) => <TouchableOpacity {...props} />;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"tabbaractivetintcolor",children:(0,a.jsx)(n.code,{children:"tabBarActiveTintColor"})}),"\n",(0,a.jsx)(n.p,{children:"Color for the icon and label in the active tab."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarinactivetintcolor",children:(0,a.jsx)(n.code,{children:"tabBarInactiveTintColor"})}),"\n",(0,a.jsx)(n.p,{children:"Color for the icon and label in the inactive tabs."}),"\n",(0,a.jsx)(n.h4,{id:"tabbaractivebackgroundcolor",children:(0,a.jsx)(n.code,{children:"tabBarActiveBackgroundColor"})}),"\n",(0,a.jsx)(n.p,{children:"Background color for the active tab."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarinactivebackgroundcolor",children:(0,a.jsx)(n.code,{children:"tabBarInactiveBackgroundColor"})}),"\n",(0,a.jsx)(n.p,{children:"Background color for the inactive tabs."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarhideonkeyboard",children:(0,a.jsx)(n.code,{children:"tabBarHideOnKeyboard"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether the tab bar is hidden when the keyboard opens. Defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"tabbaritemstyle",children:(0,a.jsx)(n.code,{children:"tabBarItemStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the tab item container."}),"\n",(0,a.jsx)(n.h4,{id:"tabbarstyle",children:(0,a.jsx)(n.code,{children:"tabBarStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the tab bar. You can configure styles such as background color here."}),"\n",(0,a.jsxs)(n.p,{children:["To show your screen under the tab bar, you can set the ",(0,a.jsx)(n.code,{children:"position"})," style to absolute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Tab.Navigator\n  screenOptions={{\n    tabBarStyle: { position: 'absolute' },\n  }}\n>\n"})}),"\n",(0,a.jsx)(n.p,{children:"You also might need to add a bottom margin to your content if you have a absolutely positioned tab bar. React Navigation won't do it automatically."}),"\n",(0,a.jsxs)(n.p,{children:["To get the height of the bottom tab bar, you can use ",(0,a.jsx)(n.code,{children:"BottomTabBarHeightContext"})," with ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/context.html#contextconsumer",children:"React's Context API"})," or ",(0,a.jsx)(n.code,{children:"useBottomTabBarHeight"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';\n\n// ...\n\n<BottomTabBarHeightContext.Consumer>\n  {tabBarHeight => (\n    /* render something */\n  )}\n</BottomTabBarHeightContext.Consumer>\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';\n\n// ...\n\nconst tabBarHeight = useBottomTabBarHeight();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"tabbarbackground",children:(0,a.jsx)(n.code,{children:"tabBarBackground"})}),"\n",(0,a.jsx)(n.p,{children:"Function which returns a React Element to use as background for the tab bar. You could render an image, a gradient, blur view etc.:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { BlurView } from 'expo-blur';\n\n// ...\n\n<Tab.Navigator\n  screenOptions={{\n    tabBarStyle: { position: 'absolute' },\n    tabBarBackground: () => (\n      <BlurView tint=\"light\" intensity={100} style={StyleSheet.absoluteFill} />\n    ),\n  }}\n>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When using ",(0,a.jsx)(n.code,{children:"BlurView"}),", make sure to set ",(0,a.jsx)(n.code,{children:"position: 'absolute'"})," in ",(0,a.jsx)(n.code,{children:"tabBarStyle"})," as well. You'd also need to use ",(0,a.jsx)(n.code,{children:"useBottomTabBarHeight()"})," to add a bottom padding to your content."]}),"\n",(0,a.jsx)(n.h4,{id:"lazy",children:(0,a.jsx)(n.code,{children:"lazy"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether this screens should render the first time it's accessed. Defaults to ",(0,a.jsx)(n.code,{children:"true"}),". Set it to ",(0,a.jsx)(n.code,{children:"false"})," if you want to render the screen on initial render."]}),"\n",(0,a.jsx)(n.h4,{id:"unmountonblur",children:(0,a.jsx)(n.code,{children:"unmountOnBlur"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether this screen should be unmounted when navigating away from it. Unmounting a screen resets any local state in the screen as well as state of nested navigators in the screen. Defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Normally, we don't recommend enabling this prop as users don't expect their navigation history to be lost when switching tabs. If you enable this prop, please consider if this will actually provide a better experience for the user."}),"\n",(0,a.jsx)(n.h4,{id:"freezeonblur",children:(0,a.jsx)(n.code,{children:"freezeOnBlur"})}),"\n",(0,a.jsxs)(n.p,{children:["Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to ",(0,a.jsx)(n.code,{children:"false"}),".\nDefaults to ",(0,a.jsx)(n.code,{children:"true"})," when ",(0,a.jsx)(n.code,{children:"enableFreeze()"})," from ",(0,a.jsx)(n.code,{children:"react-native-screens"})," package is run at the top of the application."]}),"\n",(0,a.jsxs)(n.p,{children:["Requires ",(0,a.jsx)(n.code,{children:"react-native-screens"})," version >=3.16.0."]}),"\n",(0,a.jsx)(n.p,{children:"Only supported on iOS and Android."}),"\n",(0,a.jsx)(n.h3,{id:"header-related-options",children:"Header related options"}),"\n",(0,a.jsxs)(n.p,{children:["You can find the list of header related options ",(0,a.jsx)(n.a,{href:"/docs/elements#header",children:"here"}),". These ",(0,a.jsx)(n.a,{href:"/docs/screen-options",children:"options"})," can be specified under ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.navigator"})," or ",(0,a.jsx)(n.code,{children:"options"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.Screen"}),". You don't have to be using ",(0,a.jsx)(n.code,{children:"@react-navigation/elements"})," directly to use these options, they are just documented in that page."]}),"\n",(0,a.jsx)(n.p,{children:"In addition to those, the following options are also supported in bottom tabs:"}),"\n",(0,a.jsx)(n.h4,{id:"header",children:(0,a.jsx)(n.code,{children:"header"})}),"\n",(0,a.jsx)(n.p,{children:"Custom header to use instead of the default header."}),"\n",(0,a.jsx)(n.p,{children:"This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigation"})," - The navigation object for the current screen."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"route"})," - The route object for the current screen."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"options"})," - The options for the current screen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"layout"})," - Dimensions of the screen, contains ",(0,a.jsx)(n.code,{children:"height"})," and ",(0,a.jsx)(n.code,{children:"width"})," properties."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { getHeaderTitle } from '@react-navigation/elements';\n\n// ..\n\nheader: ({ navigation, route, options }) => {\n  const title = getHeaderTitle(options, route.name);\n\n  return <MyHeader title={title} style={options.headerStyle} />;\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To set a custom header for all the screens in the navigator, you can specify this option in the ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop of the navigator."]}),"\n",(0,a.jsxs)(n.h5,{id:"specify-a-height-in-headerstyle",children:["Specify a ",(0,a.jsx)(n.code,{children:"height"})," in ",(0,a.jsx)(n.code,{children:"headerStyle"})]}),"\n",(0,a.jsx)(n.p,{children:"If your custom header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"headerStyle: {\n  height: 80, // Specify the height of your custom header\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use ",(0,a.jsx)(n.code,{children:"options.headerStyle"})," from the props."]}),"\n",(0,a.jsx)(n.h4,{id:"headershown",children:(0,a.jsx)(n.code,{children:"headerShown"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether to show or hide the header for the screen. The header is shown by default. Setting this to ",(0,a.jsx)(n.code,{children:"false"})," hides the header."]}),"\n",(0,a.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(n.p,{children:["The navigator can ",(0,a.jsx)(n.a,{href:"/docs/navigation-events",children:"emit events"})," on certain actions. Supported events are:"]}),"\n",(0,a.jsx)(n.h4,{id:"tabpress",children:(0,a.jsx)(n.code,{children:"tabPress"})}),"\n",(0,a.jsx)(n.p,{children:"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the tab is not focused, tab press will focus that tab"}),"\n",(0,a.jsxs)(n.li,{children:["If the tab is already focused:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the screen for the tab renders a scroll view, you can use ",(0,a.jsx)(n.a,{href:"/docs/use-scroll-to-top",children:(0,a.jsx)(n.code,{children:"useScrollToTop"})})," to scroll it to top"]}),"\n",(0,a.jsxs)(n.li,{children:["If the screen for the tab renders a stack navigator, a ",(0,a.jsx)(n.code,{children:"popToTop"})," action is performed on the stack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To prevent the default behavior, you can call ",(0,a.jsx)(n.code,{children:"event.preventDefault"}),":"]}),"\n",(0,a.jsx)("samp",{id:"bottom-tab-prevent-default"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you have a custom tab bar, make sure to emit this event."}),"\n",(0,a.jsx)(n.h4,{id:"tablongpress",children:(0,a.jsx)(n.code,{children:"tabLongPress"})}),"\n",(0,a.jsx)(n.p,{children:"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period. If you have a custom tab bar, make sure to emit this event."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"helpers",children:"Helpers"}),"\n",(0,a.jsx)(n.p,{children:"The tab navigator adds the following methods to the navigation prop:"}),"\n",(0,a.jsx)(n.h4,{id:"jumpto",children:(0,a.jsx)(n.code,{children:"jumpTo"})}),"\n",(0,a.jsx)(n.p,{children:"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," - ",(0,a.jsx)(n.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - ",(0,a.jsx)(n.em,{children:"object"})," - Screen params to use for the destination route."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"tab-jump-to"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.jumpTo('Profile', { owner: 'Micha\u015b' });\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)("samp",{id:"bottom-tab-example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      screenOptions={{\n        tabBarActiveTintColor: \'#e91e63\',\n      }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="home" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={size} />\n          ),\n          tabBarBadge: 3,\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="account" color={color} size={size} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>B});var a=t(67294),o=t(86010),r=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[i,l]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),v=(()=>{const e=null!=c?c:x;return b({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),i(o))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=l.indexOf(e.currentTarget)+1;t=null!=(a=l[n])?a:l[0];break}case"ArrowLeft":{var o;const n=l.indexOf(e.currentTarget)-1;t=null!=(o=l[n])?o:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(f,{...e,...n})]})}function B(e){const n=(0,j.Z)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);