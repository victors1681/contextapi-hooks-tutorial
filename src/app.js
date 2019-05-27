import React from "react";
import { hot } from "react-hot-loader";
import AppProvider from "./AppProvider";
import Child from "./components/child";
import Comments from "./components/comments";

const App = () => {
  return (
    <AppProvider>
      <Comments />
      <Child />
    </AppProvider>
  );
};

export default hot(module)(App);
