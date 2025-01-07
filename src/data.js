import React, { createContext, useContext } from "react";

// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const DataContext = createContext(null);

export function DataProvider({ children, data }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
const fakeData = [
  "Wait, it doesn't wait for React to load?",
  "How does this even work?",
  "I like marshmallows",
];

export function useData() {
  const ctx = useContext(DataContext);

  if (ctx) {
    // if server render
    console.log("Server Data:", ctx.read());
    return ctx.read().comments;
  } else if (typeof window !== "undefined" && window.__INITIAL_DATA__) {
    // use inject data by client render
    return window.__INITIAL_DATA__.comments;
  }

  return [
    "Wait, it doesn't wait for React to load?",
    "How does this even work?",
    "I like marshmallows",
  ];
}
