"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[68493],{52010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(85893),i=t(11151);const s={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},a=void 0,r={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",description:"In this guide we will call an action on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-3.x/function-after-focusing-screen.md",sourceDirName:".",slug:"/function-after-focusing-screen",permalink:"/docs/3.x/function-after-focusing-screen",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/function-after-focusing-screen.md",tags:[],version:"3.x",frontMatter:{id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},sidebar:"version-3.x-docs",previous:{title:"Web support",permalink:"/docs/3.x/web-support"},next:{title:"Navigation prop",permalink:"/docs/3.x/navigation-prop"}},c={},d=[{value:"Triggering an action with the <code>withNavigationFocus</code> higher order component",id:"triggering-an-action-with-the-withnavigationfocus-higher-order-component",level:2},{value:"Example",id:"example",level:3},{value:"Triggering an action with a <code>&#39;didFocus&#39;</code> event listener",id:"triggering-an-action-with-a-didfocus-event-listener",level:2},{value:"Example",id:"example-1",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this guide we will call an action on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."}),"\n",(0,o.jsx)(n.p,{children:"There are two approaches to calling an action on screen focusing:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Using the ",(0,o.jsx)(n.code,{children:"withNavigationFocus"})," higher order component provided by react-navigation."]}),"\n",(0,o.jsxs)(n.li,{children:["Listening to the ",(0,o.jsx)(n.code,{children:"'didFocus'"})," event with an event listener."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"triggering-an-action-with-the-withnavigationfocus-higher-order-component",children:["Triggering an action with the ",(0,o.jsx)(n.code,{children:"withNavigationFocus"})," higher order component"]}),"\n",(0,o.jsxs)(n.p,{children:["react-navigation provides a ",(0,o.jsx)(n.a,{href:"https://reactjs.org/docs/higher-order-components.html",children:"higher order component"})," that passes an ",(0,o.jsx)(n.code,{children:"isFocused"})," prop to our component, along with the ",(0,o.jsx)(n.code,{children:"navigation"})," object we'd normally get with ",(0,o.jsx)(n.code,{children:"withNavigation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"isFocused"})," prop is passed to our component, it will pass ",(0,o.jsx)(n.code,{children:"true"})," when the screen is focused and ",(0,o.jsx)(n.code,{children:"false"})," when our component is no longer focused. This enables us to call actions on a user entering or leaving a screen. This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."]}),"\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.code,{children:"withNavigationFocus"})," passes a prop on every focus change, it will cause our component to re-render when we focus and unfocus a screen. Using this higher order component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing."]}),"\n",(0,o.jsxs)(n.p,{children:["For instance, if we are attempting to make an API call on focus to fetch some data, we only want to fetch data when the component is focused and not when the component becomes unfocused. To prevent extra component re-renders, we could write some logic in ",(0,o.jsx)(n.code,{children:"shouldComponentUpdate"})," to control when the component renders itself, however we may be better off using the event listener method detailed below. The event listener will only call an action and render the component when the screen is focused and will do nothing when a screen becomes unfocused."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import React, { Component } from "react";\nimport { View } from "react-native";\nimport { withNavigationFocus } from "react-navigation";\n\nclass TabScreen extends Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.isFocused !== this.props.isFocused) {\n      // Use the `this.props.isFocused` boolean\n      // Call any action\n    }\n  }\n\n  render() {\n    return <View />;\n  }\n}\n\n// withNavigationFocus returns a component that wraps TabScreen and passes\n// in the navigation prop\nexport default withNavigationFocus(TabScreen);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This example is also documented in the ",(0,o.jsxs)(n.a,{href:"/docs/3.x/with-navigation-focus",children:[(0,o.jsx)(n.code,{children:"withNavigationFocus"})," API documentation"]}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"triggering-an-action-with-a-didfocus-event-listener",children:["Triggering an action with a ",(0,o.jsx)(n.code,{children:"'didFocus'"})," event listener"]}),"\n",(0,o.jsxs)(n.p,{children:["We can also listen to the ",(0,o.jsx)(n.code,{children:"'didFocus'"})," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."]}),"\n",(0,o.jsx)(n.p,{children:"With this approach, we will only be able to call an action when the screen focuses. This is great for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import React, { Component } from "react";\nimport { View } from "react-native";\nimport { withNavigation } from "react-navigation";\n\nclass TabScreen extends Component {\n  componentDidMount() {\n    const { navigation } = this.props;\n    this.focusListener = navigation.addListener("didFocus", () => {\n      // The screen is focused\n      // Call any action\n    });\n  }\n\n  componentWillUnmount() {\n    // Remove the event listener\n    this.focusListener.remove();\n  }\n\n  render() {\n    return <View />;\n  }\n}\n\nexport default withNavigation(TabScreen);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);