import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/login/Index";
import React from "react";
import Tabs from "./Tabs";
import { useAuth } from "../context/auth";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          {!isAuthenticated ? (
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
