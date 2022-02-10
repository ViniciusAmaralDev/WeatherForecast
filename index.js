import React from "react";
import { ContextProvider } from "./src/context";

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

const Main = () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);

AppRegistry.registerComponent(appName, () => Main);
