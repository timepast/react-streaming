import React, { createContext, useContext } from "react";

// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.
import { jsx as _jsx } from "react/jsx-runtime";
var DataContext = /*#__PURE__*/createContext(null);
export function DataProvider(_ref) {
  var children = _ref.children,
    data = _ref.data;
  return /*#__PURE__*/_jsx(DataContext.Provider, {
    value: data,
    children: children
  });
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
var fakeData = ["Wait, it doesn't wait for React to load?", "How does this even work?", "I like marshmallows"];
export function useData() {
  var ctx = useContext(DataContext);
  if (ctx) {
    // 服务端渲染时
    console.log("Server Data:", ctx.read());
    return ctx.read().comments;
  } else if (typeof window !== "undefined" && window.__INITIAL_DATA__) {
    // 客户端渲染时，使用注入的数据
    return window.__INITIAL_DATA__.comments;
  }
  return ["Wait, it doesn't wait for React to load?", "How does this even work?", "I like marshmallows"];
}