import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import React from "react";
import Box from "../../../components/boxs/Box";
import Box2 from "../../../components/boxs/Box2";
import Box3 from "../../../components/boxs/Box3";
import Box4 from "../../../components/boxs/Box4";
import Box5 from "../../../components/boxs/Box5";
import BoxHomework1 from "../../../components/box-homework/Box";
import BoxHomework2 from "../../../components/box-homework/Box2";
import BoxHomework3 from "../../../components/box-homework/Box3";
import BoxHomework4 from "../../../components/box-homework/Box4";
import { useAuth } from "../../../context/auth";

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "#A0D5E6",
    width: "100%",
    height: 200,
  },
  container: {
    backgroundColor: "#EFEDED",
    height: "auto",
    marginLeft:Platform.select({
      ios:10,
      android:2
    })
  },
  text: {
    margin: 15,
    fontSize: Platform.select({
      ios: 30,
      android: 27,
    }),
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Inter',
    }),
    fontWeight:"bold"
  },
  taskText: {
    fontSize: 25,
    margin: 10,
    fontWeight: "bold",
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Inter',
    }),
  },
  taskContainer: {
    flexDirection: "row",
    gap: 10,
    margin: 10,
  },
  textinformation:{
    margin:10,
    fontSize:16,
    fontFamily:"Roboto",
    fontStyle:"normal",
    fontWeight:"ultralight"
  },
  name:{
    marginLeft:12,
    marginTop:35,
    fontSize:20,
    fontWeight:"bold",
    color:"#003483"
  }
});

const Home = () => {
const {nama} = useAuth()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container2}>
        <Text style={styles.name}>HI, {nama}</Text>
        <Text style={styles.textinformation}>Welcome to Mobile Application
        student absence SMK Bakti Idhata</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Today Class</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box />
          <Box2 />
          <Box3 />
          <Box4 />
          <Box5 />
        </ScrollView>
        <View>
          <Text style={styles.taskText}>My Task</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.taskContainer}>
              <BoxHomework1 />
              <BoxHomework2 />
            </View>
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.taskContainer}>
              <BoxHomework3 />
              <BoxHomework4 />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
