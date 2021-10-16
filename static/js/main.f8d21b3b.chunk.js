(this.webpackJsonpbitbay=this.webpackJsonpbitbay||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t);var r,c=n(0),i=n.n(c),s=n(13),a=n.n(s),o=n(2);!function(e){e.BTCPLN="btc-pln",e.ETHPLN="eth-pln"}(r||(r={}));var d,b=n(1),u=Object(c.createContext)({state:r.BTCPLN,setCurrencyPair:function(e){}}),l=function(e){var t=e.children,n=Object(c.useState)(r.BTCPLN),i=Object(o.a)(n,2),s=i[0],a=i[1];return Object(b.jsx)(u.Provider,{value:{state:s,setCurrencyPair:function(e){return a(e)}},children:t})},j=n(6),O=n(11);!function(e){e.BUY="Buy",e.SELL="Sell"}(d||(d={}));var x,h,f,p,v,g,y,m={buyOrder:[],sellOrder:[]},k=Object(c.createContext)(m),C=function(e){var t=e.children,n=Object(c.useState)(m),r=Object(o.a)(n,2),i=r[0],s=r[1],a=Object(c.useContext)(u).state;return Object(c.useEffect)((function(){var e=new WebSocket("wss://api.bitbay.net/websocket/");return e.onopen=function(){var t={action:"subscribe-public",module:"trading",path:"orderbook/".concat(a)};s(m),e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);if("push"===t.action)switch(Object(o.a)(t.message.changes,1)[0].entryType){case d.BUY:s((function(e){var n=e.buyOrder.slice();return n.unshift.apply(n,Object(O.a)(t.message.changes)),Object(j.a)(Object(j.a)({},e),{},{buyOrder:n})}));break;case d.SELL:s((function(e){var n=e.sellOrder.slice();return n.unshift.apply(n,Object(O.a)(t.message.changes)),Object(j.a)(Object(j.a)({},e),{},{sellOrder:n})}))}},function(){var t={action:"unsubscribe",module:"trading",path:"orderbook/".concat(a)};e.send(JSON.stringify(t)),e.close()}}),[a]),Object(b.jsx)(k.Provider,{value:i,children:t})},S=n(3),B=n(4),w={OrderRow:B.b.div(x||(x=Object(S.a)(["\n  display: flex;\n  padding: 6px 4px;\n  transition: 0.3s ease background;\n\n  &:nth-child(2n) {\n    background: #f7f7f7;\n  }\n\n  & > div {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    margin: 0 2px;\n  }\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.ask?"rgba(255, 0, 0, 0.3)":"rgba(0, 255, 0, 0.3)"}))},L=function(e){var t=e.ask,n=e.state,r=n.ca,c=n.ra,i=(parseFloat(r)*parseFloat(c)).toFixed(2);return Object(b.jsxs)(w.OrderRow,{ask:t,children:[Object(b.jsx)("div",{children:c}),Object(b.jsx)("div",{children:r}),Object(b.jsx)("div",{children:i}),Object(b.jsx)("div",{children:n.co})]})},N={OrderBook:B.b.div(h||(h=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),OrderBookContainer:B.b.div(f||(f=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  width: 800px;\n"]))),OrderBookHeader:B.b.div(p||(p=Object(S.a)(["\n  background: rgba(31, 94, 190, 0.5);\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 8px;\n"]))),OrderBookList:B.b.div(v||(v=Object(S.a)(["\n  display: flex;\n  min-height: 328px;\n  max-height: 328px;\n  overflow: hidden;\n  width: 100%;\n\n  & > div {\n    flex: 1;\n  }\n"]))),OrderBookListTitle:B.b.div(g||(g=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n"])))},P={min24:null,max24:null},T=Object(c.createContext)(P),F=function(e){var t=e.children,n=Object(c.useState)(P),r=Object(o.a)(n,2),i=r[0],s=r[1],a=Object(c.useContext)(u).state;return Object(c.useEffect)((function(){var e=new WebSocket("wss://api.bitbay.net/websocket/");return e.onopen=function(){var t={action:"subscribe-public",module:"trading",path:"stats/".concat(a)};s(P),e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);if("push"===t.action){var n=Object(o.a)(t.message,1)[0],r=n.h,c=n.l;s({min24:c.toFixed(2),max24:r.toFixed(2)})}},function(){var t={action:"unsubscribe",module:"trading",path:"stats/".concat(a)};e.send(JSON.stringify(t)),e.close()}}),[a]),Object(b.jsx)(T.Provider,{value:i,children:t})},J={spread:null},E=Object(c.createContext)(J),H=function(e){var t=e.children,n=Object(c.useState)(J),r=Object(o.a)(n,2),i=r[0],s=r[1],a=Object(c.useContext)(u).state;return Object(c.useEffect)((function(){var e=new WebSocket("wss://api.bitbay.net/websocket/");return e.onopen=function(){var t={action:"subscribe-public",module:"trading",path:"ticker/".concat(a)};s(J),e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);if("push"===t.action){var n=t.message,r=n.highestBid,c=n.lowestAsk,i=(parseFloat(c)-parseFloat(r)).toFixed(2);s({spread:i})}},function(){var t={action:"unsubscribe",module:"trading",path:"ticker/".concat(a)};e.send(JSON.stringify(t)),e.close()}}),[a]),Object(b.jsx)(E.Provider,{value:i,children:t})},I=function(){var e=Object(c.useContext)(E).spread;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:["spread ",e]})})},W=function(){var e=Object(c.useContext)(T),t=e.min24,n=e.max24;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["24h max ",n]}),Object(b.jsxs)("div",{children:["24h min ",t]})]})},z=function(){var e=Object(c.useContext)(u).setCurrencyPair,t=Object(c.useContext)(k),n=t.buyOrder,i=t.sellOrder;return Object(b.jsx)(N.OrderBook,{children:Object(b.jsxs)(N.OrderBookContainer,{children:[Object(b.jsxs)(N.OrderBookHeader,{children:[Object(b.jsxs)("select",{onChange:function(t){return e(t.target.value)},children:[Object(b.jsx)("option",{value:r.BTCPLN,children:"BTC-PLN"}),Object(b.jsx)("option",{value:r.ETHPLN,children:"ETH-PLN"})]}),Object(b.jsx)(H,{children:Object(b.jsx)(I,{})}),Object(b.jsx)(F,{children:Object(b.jsx)(W,{})})]}),Object(b.jsxs)(N.OrderBookList,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(N.OrderBookListTitle,{children:"BID kupno"}),Object(b.jsx)("div",{children:n.slice(0,30).map((function(e){var t=e.state;return t?Object(b.jsx)(L,{state:t}):null}))})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(N.OrderBookListTitle,{children:"ASK sprzeda\u017c"}),Object(b.jsx)("div",{children:i.slice(0,30).map((function(e){var t=e.state;return t?Object(b.jsx)(L,{ask:!0,state:t}):null}))})]})]})]})})},A={GlobalStyle:Object(B.a)(y||(y=Object(S.a)(["\n  * {\n    box-sizing: border-box;\n    color: #222222;\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  body {\n    margin: 0;\n    padding: 0; \n  }\n"])))},D=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A.GlobalStyle,{}),Object(b.jsx)(l,{children:Object(b.jsx)(C,{children:Object(b.jsx)(z,{})})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),G()}},[[24,1,2]]]);
//# sourceMappingURL=main.f8d21b3b.chunk.js.map