import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/tabs/home";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Platform } from "react-native";
import Absent from "../screen/tabs/absent";
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
              ios: "black",
              android: "black",
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
            tabBarIcon: ({focused}) => <MaterialIcons name="home" size={32} color={focused ? "#6A6868" :"#D0CBCB"} />,
          }}
        />
        <Tab.Screen
          name="Absent"
          component={Absent}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name="account" size={26} color={focused ? "#6A6868" : "#D0CBCB"}/>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
