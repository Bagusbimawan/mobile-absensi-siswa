import { View, Text } from "react-native";
import React from "react";
import Navigation from "./navigartions";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; 

const App = () => {
  return (
    <>
      <GluestackUIProvider config={config}>
        <Navigation />
      </GluestackUIProvider>
    </>
  );
};

export default App;
