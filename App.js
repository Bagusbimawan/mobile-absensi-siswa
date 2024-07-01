import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "expo-status-bar";
import MyNavigation from "./navigartions";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <GluestackUIProvider config={config}>
      <MyNavigation/>
      </GluestackUIProvider>
    </>
  );
};

export default App;
