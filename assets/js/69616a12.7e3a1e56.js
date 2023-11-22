"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[31756],{92357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(85893),s=t(11151);const a={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},i=void 0,r={id:"glossary-of-terms",title:"Glossary of terms",description:"This is a new section of the documentation and it's missing a lot of terms! Please submit a pull request or an issue with a term that you think should be explained here.",source:"@site/versioned_docs/version-1.x/glossary-of-terms.md",sourceDirName:".",slug:"/glossary-of-terms",permalink:"/docs/1.x/glossary-of-terms",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/glossary-of-terms.md",tags:[],version:"1.x",frontMatter:{id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},sidebar:"docs",previous:{title:"Next steps",permalink:"/docs/1.x/next-steps"},next:{title:"Tab navigation",permalink:"/docs/1.x/tab-based-navigation"}},c={},l=[{value:"Header",id:"header",level:2},{value:"Screen component",id:"screen-component",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This is a new section of the documentation and it's missing a lot of terms! Please ",(0,o.jsx)(n.a,{href:"https://github.com/react-navigation/website",children:"submit a pull request or an issue"})," with a term that you think should be explained here."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.p,{children:"Also known as navigation header, navigation bar, navbar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."}),"\n",(0,o.jsx)(n.h2,{id:"screen-component",children:"Screen component"}),"\n",(0,o.jsx)(n.p,{children:"A screen component is a component that we use in our route configuration."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const RootStack = StackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,    // <----\n    },\n    Details: {\n      screen: DetailsScreen, // <----\n    },\n  },\n  {\n    initialRouteName: 'Home',\n  }\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The suffix ",(0,o.jsx)(n.code,{children:"Screen"})," in the component name is entirely optional, but a frequently used convention; we could call it ",(0,o.jsx)(n.code,{children:"CasaPantalla"})," and this would work just the same."]}),"\n",(0,o.jsxs)(n.p,{children:["We saw earlier that our screen components are provided with the ",(0,o.jsx)(n.code,{children:"navigator"})," prop. It's important to note that ",(0,o.jsx)(n.em,{children:"this only happens if the screen is rendered as a route by React Navigation"})," (for example, in response to ",(0,o.jsx)(n.code,{children:"this.props.navigation.navigate"}),"). For example, if we render ",(0,o.jsx)(n.code,{children:"DetailsScreen"})," as a child of ",(0,o.jsx)(n.code,{children:"HomeScreen"}),", then ",(0,o.jsx)(n.code,{children:"DetailsScreen"})," won't be provided with the ",(0,o.jsx)(n.code,{children:"navigation"}),' prop, and when you press the "Go to Details... again" button on the Home screen, the app will throw one of the quintessential JavaScript exceptions "undefined is not an object".']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n        <DetailsScreen />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/screen-components",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/1.x/navigation-prop",children:'"Navigation prop reference"'})," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",(0,o.jsx)(n.code,{children:"this.props.navigation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);