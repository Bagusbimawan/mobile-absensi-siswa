import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import MyImage from "../../assets/images/teacher.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "@gluestack-ui/themed";
import MyInput from "../../components/Input";
import MyButton from "../../components/Button";
import { useAuth } from "../../context/auth";

const Style = StyleSheet.create({
  image: {
    width: wp("85%"),
    height: hp("40%"),
    marginLeft: 30,
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  errorText: {
    color: "red",
    marginLeft: 30,
    marginTop: 10,
  },
});

const Login = () => {
  const [username, Setusername] = useState("");
  const [Password, setPassword] = useState("");
  const { login,nama } = useAuth();

  const handlelogin = () => {
    login(username,Password,nama)
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Style.container}>
        <Image source={MyImage} style={Style.image} />
        <MyInput onUsernameChange={Setusername} 
        OnPasswordChange={setPassword}/>
        <MyButton  onPress={handlelogin}/>
      </View>
    </ScrollView>
  );
};

export default Login;
