import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/tabs/home";
import History from "../screen/tabs/history";
import Activity from "../screen/tabs/activity";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Platform } from "react-native";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: "100%",
            height: Platform.select({
              ios: 95,
              android: 60,
            }),
          },
          tabBarLabelStyle: {
            fontSize: Platform.select({
              ios: 15,
              android: 14,
            }),
            marginBottom: 5,
            color: Platform.select({
              ios: "purple",
              android: "blue",
            }),
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialIcons name="home" size={32} />,
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="activity" size={30} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="history" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
