"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[53556],{79316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const o={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},a=void 0,r={id:"auth-flow",title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-5.x/auth-flow.md",sourceDirName:".",slug:"/auth-flow",permalink:"/docs/5.x/auth-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/auth-flow.md",tags:[],version:"5.x",frontMatter:{id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},sidebar:"docs",previous:{title:"Drawer navigation",permalink:"/docs/5.x/drawer-based-navigation"},next:{title:"Supporting safe areas",permalink:"/docs/5.x/handling-safe-area"}},c={},l=[{value:"What we need",id:"what-we-need",level:2},{value:"How it will work",id:"how-it-will-work",level:2},{value:"Don&#39;t manually navigate when conditionally rendering screens",id:"dont-manually-navigate-when-conditionally-rendering-screens",level:2},{value:"Define our screens",id:"define-our-screens",level:2},{value:"Implement the logic for restoring the token",id:"implement-the-logic-for-restoring-the-token",level:2},{value:"Fill in other components",id:"fill-in-other-components",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The user opens the app."}),"\n",(0,i.jsxs)(n.li,{children:["The app loads some authentication state from encrypted persistent storage (for example, ",(0,i.jsx)(n.a,{href:"https://docs.expo.io/versions/latest/sdk/securestore/",children:(0,i.jsx)(n.code,{children:"SecureStore"})}),")."]}),"\n",(0,i.jsx)(n.li,{children:"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."}),"\n",(0,i.jsx)(n.li,{children:"When the user signs out, we clear the authentication state and send them back to authentication screens."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'Note: We say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-we-need",children:"What we need"}),"\n",(0,i.jsx)(n.p,{children:"This is the behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens related to authentication, and when we press the hardware back button we expect to not be able to go back to the authentication flow."}),"\n",(0,i.jsx)(n.h2,{id:"how-it-will-work",children:"How it will work"}),"\n",(0,i.jsxs)(n.p,{children:["We can define different screens based on some condition. For example, if the user is signed in, we can define ",(0,i.jsx)(n.code,{children:"Home"}),", ",(0,i.jsx)(n.code,{children:"Profile"}),", ",(0,i.jsx)(n.code,{children:"Settings"})," etc. If the user is not signed in, we can define ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignUp"})," screens."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)("samp",{id:"conditional-screens"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n    <Stack.Screen name="Settings" component={SettingsScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n  </>\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When we define screens like this, when ",(0,i.jsx)(n.code,{children:"isSignedIn"})," is ",(0,i.jsx)(n.code,{children:"true"}),", React Navigation will only see the ",(0,i.jsx)(n.code,{children:"Home"}),", ",(0,i.jsx)(n.code,{children:"Profile"})," and ",(0,i.jsx)(n.code,{children:"Settings"})," screens, and when it's ",(0,i.jsx)(n.code,{children:"false"}),", React Navigation will see the ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignUp"})," screens. This makes it impossible to navigate to the ",(0,i.jsx)(n.code,{children:"Home"}),", ",(0,i.jsx)(n.code,{children:"Profile"})," and ",(0,i.jsx)(n.code,{children:"Settings"})," screens when the user is not signed in, and to ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignUp"})," screens when the user is signed in."]}),"\n",(0,i.jsx)(n.p,{children:'This pattern has been in use by other routing libraries such as React Router for a long time, and is commonly known as "Protected routes". Here, our screens which need the user to be signed in are "protected" and cannot be navigated to by other means if the user is not signed in.'}),"\n",(0,i.jsxs)(n.p,{children:["The magic happens when the value of the ",(0,i.jsx)(n.code,{children:"isSignedIn"})," variable changes. Let's say, initially ",(0,i.jsx)(n.code,{children:"isSignedIn"})," is ",(0,i.jsx)(n.code,{children:"false"}),". This means, either ",(0,i.jsx)(n.code,{children:"SignIn"})," or ",(0,i.jsx)(n.code,{children:"SignUp"})," screens are shown. After the user signs in, the value of ",(0,i.jsx)(n.code,{children:"isSignedIn"})," will change to ",(0,i.jsx)(n.code,{children:"true"}),". React Navigation will see that the ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignUp"})," screens are no longer defined and so it will remove them. Then it'll show the ",(0,i.jsx)(n.code,{children:"Home"})," screen automatically because that's the first screen defined when ",(0,i.jsx)(n.code,{children:"isSignedIn"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The example shows stack navigator, but you can use the same approach with any navigator."}),"\n",(0,i.jsx)(n.p,{children:"By conditionally defining different screens based on a variable, we can implement auth flow in a simple way that doesn't require additional logic to make sure that the correct screen is shown."}),"\n",(0,i.jsx)(n.h2,{id:"dont-manually-navigate-when-conditionally-rendering-screens",children:"Don't manually navigate when conditionally rendering screens"}),"\n",(0,i.jsxs)(n.p,{children:["It's important to note that when using such a setup, you ",(0,i.jsx)(n.strong,{children:"don't manually navigate"})," to the ",(0,i.jsx)(n.code,{children:"Home"})," screen by calling ",(0,i.jsx)(n.code,{children:"navigation.navigate('Home')"})," or any other method. ",(0,i.jsx)(n.strong,{children:"React Navigation will automatically navigate to the correct screen"})," when ",(0,i.jsx)(n.code,{children:"isSignedIn"})," changes - ",(0,i.jsx)(n.code,{children:"Home"})," screen when ",(0,i.jsx)(n.code,{children:"isSignedIn"})," becomes ",(0,i.jsx)(n.code,{children:"true"}),", and to ",(0,i.jsx)(n.code,{children:"SignIn"})," screen when ",(0,i.jsx)(n.code,{children:"isSignedIn"})," becomes ",(0,i.jsx)(n.code,{children:"false"}),". You'll get an error if you attempt to navigate manually."]}),"\n",(0,i.jsx)(n.h2,{id:"define-our-screens",children:"Define our screens"}),"\n",(0,i.jsx)(n.p,{children:"In our navigator, we can conditionally define appropriate screens. For our case, let's say we have 3 screens:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SplashScreen"})," - This will show a splash or loading screen when we're restoring the token."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SignInScreen"})," - This is the screen we show if the user isn't signed in already (we couldn't find a token)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HomeScreen"})," - This is the screen we show if the user is already signed in."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So our navigator will look like:"}),"\n",(0,i.jsx)("samp",{id:"conditional-screens-advanced"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (state.isLoading) {\n  // We haven't finished checking the token yet\n  return <SplashScreen />;\n}\n\nreturn (\n  <Stack.Navigator>\n    {state.userToken == null ? (\n      // No token found, user isn't signed in\n      <Stack.Screen\n        name=\"SignIn\"\n        component={SignInScreen}\n        options={{\n          title: 'Sign in',\n          // When logging out, a pop animation feels intuitive\n          // You can remove this if you want the default 'push' animation\n          animationTypeForReplace: state.isSignout ? 'pop' : 'push',\n        }}\n      />\n    ) : (\n      // User is signed in\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    )}\n  </Stack.Navigator>\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above snippet, ",(0,i.jsx)(n.code,{children:"isLoading"})," means that we're still checking if we have a token. This can usually be done by checking if we have a token in ",(0,i.jsx)(n.code,{children:"SecureStore"})," and validating the token. After we get the token and if it's valid, we need to set the ",(0,i.jsx)(n.code,{children:"userToken"}),". We also have another state called ",(0,i.jsx)(n.code,{children:"isSignout"})," to have a different animation on sign out."]}),"\n",(0,i.jsx)(n.p,{children:"The main thing to notice is that we're conditionally defining screens based on these state variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SignIn"})," screen is only defined if ",(0,i.jsx)(n.code,{children:"userToken"})," is ",(0,i.jsx)(n.code,{children:"null"})," (user is not signed in)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Home"})," screen is only defined if ",(0,i.jsx)(n.code,{children:"userToken"})," is non-null (user is signed in)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here, we're conditionally defining one screen for each case. But you could also define multiple screens. For example, you probably want to define password reset, signup, etc screens as well when the user isn't signed in. Similarly for the screens accessible after sign in, you probably have more than one screen. We can use ",(0,i.jsx)(n.code,{children:"React.Fragment"})," to define multiple screens:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'state.userToken == null ? (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n    <Stack.Screen name="ResetPassword" component={ResetPassword} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n  </>\n);\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If you have both your login-related screens and rest of the screens in Stack navigators, we recommend to use a single Stack navigator and place the conditional inside instead of using 2 different navigators. This makes it possible to have a proper transition animation during login/logout."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implement-the-logic-for-restoring-the-token",children:"Implement the logic for restoring the token"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: The following is just an example of how you might implement the logic for authentication in your app. You don't need to follow it as is."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"From the previous snippet, we can see that we need 3 state variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isLoading"})," - We set this to ",(0,i.jsx)(n.code,{children:"true"})," when we're trying to check if we already have a token saved in ",(0,i.jsx)(n.code,{children:"SecureStore"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isSignout"})," - We set this to ",(0,i.jsx)(n.code,{children:"true"})," when user is signing out, otherwise set it to ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"userToken"})," - The token for the user. If it's non-null, we assume the user is logged in, otherwise not."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So we need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add some logic for restoring token, sign in and sign out"}),"\n",(0,i.jsx)(n.li,{children:"Expose methods for sign in and sign out to other components"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We'll use ",(0,i.jsx)(n.code,{children:"React.useReducer"})," and ",(0,i.jsx)(n.code,{children:"React.useContext"})," in this guide. But if you're using a state management library such as Redux or Mobx, you can use them for this functionality instead. In fact, in bigger apps, a global state management library is more suitable for storing authentication tokens. You can adapt the same approach to your state management library."]}),"\n",(0,i.jsx)(n.p,{children:"First we'll need to create a context for auth where we can expose necessary methods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\n\nconst AuthContext = React.createContext();\n"})}),"\n",(0,i.jsx)(n.p,{children:"So our component will look like this:"}),"\n",(0,i.jsx)("samp",{id:"auth-flow"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport * as SecureStore from 'expo-secure-store';\n\nexport default function App({ navigation }) {\n  const [state, dispatch] = React.useReducer(\n    (prevState, action) => {\n      switch (action.type) {\n        case 'RESTORE_TOKEN':\n          return {\n            ...prevState,\n            userToken: action.token,\n            isLoading: false,\n          };\n        case 'SIGN_IN':\n          return {\n            ...prevState,\n            isSignout: false,\n            userToken: action.token,\n          };\n        case 'SIGN_OUT':\n          return {\n            ...prevState,\n            isSignout: true,\n            userToken: null,\n          };\n      }\n    },\n    {\n      isLoading: true,\n      isSignout: false,\n      userToken: null,\n    }\n  );\n\n  React.useEffect(() => {\n    // Fetch the token from storage then navigate to our appropriate place\n    const bootstrapAsync = async () => {\n      let userToken;\n\n      try {\n        userToken = await SecureStore.getItemAsync('userToken');\n      } catch (e) {\n        // Restoring token failed\n      }\n\n      // After restoring token, we may need to validate it in production apps\n\n      // This will switch to the App screen or Auth screen and this loading\n      // screen will be unmounted and thrown away.\n      dispatch({ type: 'RESTORE_TOKEN', token: userToken });\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  const authContext = React.useMemo(\n    () => ({\n      signIn: async data => {\n        // In a production app, we need to send some data (usually username, password) to server and get a token\n        // We will also need to handle errors if sign in failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n      signOut: () => dispatch({ type: 'SIGN_OUT' }),\n      signUp: async data => {\n        // In a production app, we need to send user data to server and get a token\n        // We will also need to handle errors if sign up failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n    }),\n    []\n  );\n\n  return (\n    <AuthContext.Provider value={authContext}>\n      <Stack.Navigator>\n        {state.userToken == null ? (\n          <Stack.Screen name=\"SignIn\" component={SignInScreen} />\n        ) : (\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n        )}\n      </Stack.Navigator>\n    </AuthContext.Provider>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fill-in-other-components",children:"Fill in other components"}),"\n",(0,i.jsx)(n.p,{children:"We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'function SignInScreen() {\n  const [username, setUsername] = React.useState(\'\');\n  const [password, setPassword] = React.useState(\'\');\n\n  const { signIn } = React.useContext(AuthContext);\n\n  return (\n    <View>\n      <TextInput\n        placeholder="Username"\n        value={username}\n        onChangeText={setUsername}\n      />\n      <TextInput\n        placeholder="Password"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Button title="Sign in" onPress={() => signIn({ username, password })} />\n    </View>\n  );\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);