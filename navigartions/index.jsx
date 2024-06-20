import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/login/Index";
import React from "react";
import Tabs from "./Tabs";
import { useAuth } from "../context/auth";
import IPA from "../screen/class/IPA";
import RPL from "../screen/class/Rpl";
import Ingriss from "../screen/class/Inggris";
import Pkk from "../screen/class/PKK";
import Pai from "../screen/class/PAI";
import Registration from "../screen/registration";
import Splash from "../screen/splash";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          {!isAuthenticated ? (
            <>
              <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="registration" component={Registration} options={{headerShown:false}}/>
              <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
            </>
          ) : (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ipa"
                component={IPA}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="rpl"
                component={RPL}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ingriss"
                component={Ingriss}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="pkk"
                component={Pkk}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="pai"
                component={Pai}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
