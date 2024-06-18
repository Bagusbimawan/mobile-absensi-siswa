import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { jadwal } from "../../data/jadwal";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Style = StyleSheet.create({
  box1: {
    width: 310,
    height: 150,
    backgroundColor: "#EDE7E7",
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
  
  },
  childbox: {
    flexDirection: "row",
  },
  date: {
    width: 100,
    height: "100%",
    backgroundColor: "#F2E7E7",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightWidth: 1.4,
    borderRightColor: "#807C7C",
  },
  textdate: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  textinformation: {
    fontFamily: "Roboto",
    fontWeight: Platform.select({
      ios:"700",
      android:"700"
    }),
    marginTop: 25,
    marginLeft: 5,
    flexWrap:"wrap",
    fontSize:Platform.select({
      ios:17,
      android:16
    })
  },
  iconlocation: {
    margin: 10,
  },
  iconperson:{
    margin:10
  }
});

const Box = () => {
  const schedule = jadwal[0];
  return (
    <>
      <View style={Style.box1}>
        <View style={Style.childbox}>
          <View style={Style.date}>
            <Text style={Style.textdate}>{schedule.time}</Text>
            <Text style={{ marginLeft: 35 }}>AM</Text>
          </View>
          <View>
            <Text style={Style.textinformation}>{schedule.subject}</Text>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="location-pin"
                size={26}
                style={Style.iconlocation}
              />
              <Text style={{ marginTop: Platform.select({
                ios:15,
                android:13
              }),
              fontSize:Platform.select({
                ios:17,
                android:15
              })
              }}>{schedule.room}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="account" size={26} style={Style.iconperson}/>
              <Text style={{marginTop:Platform.select({
                ios:14,
                android:15
              })}}>{schedule.teacher}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Box;
