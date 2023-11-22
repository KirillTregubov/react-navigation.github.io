"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5514],{67429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(85893),r=n(11151);const s={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},a=void 0,i={id:"custom-routers",title:"Custom routers",description:"The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators.",source:"@site/versioned_docs/version-7.x/custom-routers.md",sourceDirName:".",slug:"/custom-routers",permalink:"/docs/7.x/custom-routers",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/custom-routers.md",tags:[],version:"7.x",frontMatter:{id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},sidebar:"docs",previous:{title:"TabActions",permalink:"/docs/7.x/tab-actions"},next:{title:"Custom navigators",permalink:"/docs/7.x/custom-navigators"}},c={},u=[{value:"Built-In Routers",id:"built-in-routers",level:2},{value:"Customizing Routers",id:"customizing-routers",level:2},{value:"Custom Navigation Actions",id:"custom-navigation-actions",level:3},{value:"Blocking Navigation Actions",id:"blocking-navigation-actions",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators."}),"\n",(0,o.jsxs)(t.p,{children:["The router is responsible for handling actions dispatched by calling methods on the navigation object. If the router cannot handle an action, it can return ",(0,o.jsx)(t.code,{children:"null"}),", which would propagate the action to other routers until it's handled."]}),"\n",(0,o.jsx)(t.p,{children:"You can make your own router by building an object with the following functions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"type"})," - String representing the type of the router, e.g. ",(0,o.jsx)(t.code,{children:"'stack'"}),", ",(0,o.jsx)(t.code,{children:"'tab'"}),", ",(0,o.jsx)(t.code,{children:"'drawer'"})," etc."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"getInitialState"})," - Function which returns the initial state for the navigator. Receives an options object with ",(0,o.jsx)(t.code,{children:"routeNames"})," and ",(0,o.jsx)(t.code,{children:"routeParamList"})," properties."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"getRehydratedState"})," - Function which rehydrates the full ",(0,o.jsx)(t.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," from a given partial state. Receives a partial state object and an options object with ",(0,o.jsx)(t.code,{children:"routeNames"})," and ",(0,o.jsx)(t.code,{children:"routeParamList"})," properties."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"getStateForRouteNamesChange"})," - Function which takes the current state and updated list of route names, and returns a new state. Receives the state object and an options object with ",(0,o.jsx)(t.code,{children:"routeNames"})," and ",(0,o.jsx)(t.code,{children:"routeParamList"})," properties."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"getStateForAction"})," - function which takes the current state and action along with an options object with ",(0,o.jsx)(t.code,{children:"routeNames"})," and ",(0,o.jsx)(t.code,{children:"routeParamList"})," properties, and returns a new state. If the action cannot be handled, it should return ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"getStateForRouteFocus"})," - Function which takes the current state and key of a route, and returns a new state with that route focused."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"shouldActionChangeFocus"})," - Function which determines whether the action should also change focus in parent navigator. Some actions such as ",(0,o.jsx)(t.code,{children:"NAVIGATE"})," can change focus in the parent."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"actionCreators"})," - Optional object containing a list of action creators, such as ",(0,o.jsx)(t.code,{children:"push"}),", ",(0,o.jsx)(t.code,{children:"pop"})," etc. These will be used to add helper methods to the ",(0,o.jsx)(t.code,{children:"navigation"})," object to dispatch those actions."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const router = {\n  type: 'tab',\n\n  getInitialState({ routeNames, routeParamList }) {\n    const index =\n      options.initialRouteName === undefined\n        ? 0\n        : routeNames.indexOf(options.initialRouteName);\n\n    return {\n      stale: false,\n      type: 'tab',\n      key: shortid(),\n      index,\n      routeNames,\n      routes: routeNames.map(name => ({\n        name,\n        key: name,\n        params: routeParamList[name],\n      })),\n    };\n  },\n\n  getRehydratedState(partialState, { routeNames, routeParamList }) {\n    const state = partialState;\n\n    if (state.stale === false) {\n      return state as NavigationState;\n    }\n\n    const routes = state.routes\n      .filter(route => routeNames.includes(route.name))\n      .map(\n        route =>\n          ({\n            ...route,\n            key: route.key || `${route.name}-${shortid()}`,\n            params:\n              routeParamList[route.name] !== undefined\n                ? {\n                    ...routeParamList[route.name],\n                    ...route.params,\n                  }\n                : route.params,\n          } as Route<string>)\n      );\n\n    return {\n      stale: false,\n      type: 'tab',\n      key: shortid(),\n      index:\n        typeof state.index === 'number' && state.index < routes.length\n          ? state.index\n          : 0,\n      routeNames,\n      routes,\n    };\n  },\n\n  getStateForRouteNamesChange(state, { routeNames }) {\n    const routes = state.routes.filter(route =>\n      routeNames.includes(route.name)\n    );\n\n    return {\n      ...state,\n      routeNames,\n      routes,\n      index: Math.min(state.index, routes.length - 1),\n    };\n  },\n\n  getStateForRouteFocus(state, key) {\n    const index = state.routes.findIndex(r => r.key === key);\n\n    if (index === -1 || index === state.index) {\n      return state;\n    }\n\n    return { ...state, index };\n  },\n\n  getStateForAction(state, action) {\n    switch (action.type) {\n      case 'NAVIGATE': {\n        const index = state.routes.findIndex(\n          route => route.name === action.payload.name\n        );\n\n        if (index === -1) {\n          return null;\n        }\n\n        return { ...state, index };\n      }\n\n      default:\n        return BaseRouter.getStateForAction(state, action);\n    }\n  },\n\n  shouldActionChangeFocus() {\n    return false;\n  },\n};\n\nconst SimpleRouter = () => router;\n\nexport default SimpleRouter;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"built-in-routers",children:"Built-In Routers"}),"\n",(0,o.jsx)(t.p,{children:"The library ships with a few standard routers:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"StackRouter"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"TabRouter"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"DrawerRouter"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"customizing-routers",children:"Customizing Routers"}),"\n",(0,o.jsx)(t.p,{children:"You can reuse a router and override the router functions as per your needs, such as customizing how existing actions are handled, adding additional actions etc."}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/7.x/custom-navigators",children:"custom navigators"})," for details on how to override the router with a custom router in an existing navigator."]}),"\n",(0,o.jsx)(t.h3,{id:"custom-navigation-actions",children:"Custom Navigation Actions"}),"\n",(0,o.jsx)(t.p,{children:"Let's say you want to add a custom action to clear the history:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { TabRouter } from '@react-navigation/native';\n\nconst MyTabRouter = options => {\n  const router = TabRouter(options);\n\n  return {\n    ...router,\n    getStateForAction(state, action, options) {\n      switch (action.type) {\n        case 'CLEAR_HISTORY':\n          return {\n            ...state,\n            routeKeyHistory: [],\n          };\n        default:\n          return router.getStateForAction(state, action, options);\n      }\n    },\n\n    actionCreators: {\n      ...router.actionCreators,\n      clearHistory() {\n        return { type: 'CLEAR_HISTORY' };\n      },\n    },\n  };\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Instead of writing a custom router to handle custom actions, you can ",(0,o.jsxs)(t.a,{href:"/docs/7.x/navigation-prop#dispatch",children:["pass a function to ",(0,o.jsx)(t.code,{children:"dispatch"})]})," instead. It's cleaner and recommended instead of overriding routers."]}),"\n",(0,o.jsx)(t.h3,{id:"blocking-navigation-actions",children:"Blocking Navigation Actions"}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes you may want to prevent some navigation activity, depending on your route. Let's say, you want to prevent pushing a new screen if ",(0,o.jsx)(t.code,{children:"isEditing"})," is ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { StackRouter } from '@react-navigation/native';\n\nconst MyStackRouter = options => {\n  const router = StackRouter(options);\n\n  return {\n    ...router,\n    getStateForAction(state, action, options) {\n      const result = router.getStateForAction(state, action, options);\n\n      if (\n        result != null &&\n        result.index > state.index &&\n        state.routes[state.index].params?.isEditing\n      ) {\n        // Returning the current state means that the action has been handled, but we don't have a new state\n        return state;\n      }\n\n      return result;\n    },\n  };\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you want to prevent going back, the recommended approach is to use the ",(0,o.jsxs)(t.a,{href:"/docs/7.x/preventing-going-back",children:[(0,o.jsx)(t.code,{children:"beforeRemove"})," event"]}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);