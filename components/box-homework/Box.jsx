import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { pekerjaanrumah } from "../../data/pr";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Style = StyleSheet.create({
  box: {
    width: 180,
    height: 200,
    backgroundColor: "#E1DFDF",
    borderRadius: 16,
    flexWrap: "nowrap",
  },
  textdeadline: {
    fontSize: 15,
    margin: 10,
    color: "#6A6868",
    fontWeight: "400",
  },
  deadline: {
    fontSize: 17,
    marginLeft: 7,
    fontWeight: Platform.select({
      ios:"700",
      android:"500"
    }),
    marginTop:Platform.select({
      ios:3,
      android:0
    })
  },
  nama: {
    fontSize: 16,
    fontWeight: "500",
    margin: 10,
  },
  tugas: {
    fontSize: Platform.select({
      ios:16,
      android:15
    }),
    fontFamily: "sans-serif",
    fontWeight: "500",
    margin: 10,
    lineHeight: 20,
  },
});
const BoxHomework1 = () => {
  const pr = pekerjaanrumah[2];
  return (
    <>
      <View style={Style.box}>
        <Text style={Style.textdeadline}>Deadline</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="time-sharp"
            size={23}
            color="black"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <Text style={Style.deadline}>{pr.deadline}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <FontAwesome name="book" size={24} color="black" style={{marginTop:10, marginLeft:8}}/>
          <Text style={Style.nama}>{pr.nama}</Text>
        </View>
      <View style={{flexDirection:"row"}}>
      <MaterialIcons
            name="home-work"
            size={24}
            color="black"
            style={{ marginLeft: 7, marginTop: 10 }}
          />
        <Text style={Style.tugas}>{pr.tugas}</Text>
      </View>
      </View>
    </>
  );
};

export default BoxHomework1;
