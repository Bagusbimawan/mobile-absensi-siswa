import { View, Text, Platform } from "react-native";
import React from "react";
import Myimage from "../../assets/images/course.png";
import { Button, ButtonText, Image } from "@gluestack-ui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Splash = ({navigation}) => {
  return (
    <>
      <View>
        <Image
          source={Myimage}
          alt="Image"
          w={wp("88")}
          h={hp("45")}
          mt={80}
          ml={20}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 40,
            fontWeight: "600",
            fontFamily: "Roboto",
          }}
        >
          Hello !
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: Platform.select({
                ios:"700",
                android:"700"
            }),
            fontSize: Platform.select({
                ios:18,
                android:18
            }),
            color: "#6A6868",
            marginTop: 15,
          }}
        >
          Hello, welcome To Our Attendance Application
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: Platform.select({
                ios:18,
                android:18
            }),
            color: "#6A6868",
            marginTop: 5,
            fontWeight: Platform.select({
                ios:"700",
                android:"700"
            }),
          }}
        >
          Happy Exploring
        </Text>
      </View>
      <View>
        <Button
          w={wp("70")}
          ml={60}
          mt={30}
          h={54}
          size="lg"
          borderRadius={9}
          backgroundColor="#0F2B8F"
          onPress={()=>navigation.navigate("login")}
        >
          <ButtonText fontWeight={700}>LOGIN</ButtonText>
        </Button>
        <Button
          w={wp("70")}
          ml={60}
          mt={20}
          size="lg"
          h={54}
          borderRadius={9}
          borderWidth={2}
          borderColor="#0F2B8F"
          backgroundColor="white"
          onPress={()=>navigation.navigate("registration")}
        >
          <ButtonText color="#0F2B8F" fontWeight={700}>
            REGISTER
          </ButtonText>
        </Button>
      </View>
    </>
  );
};

export default Splash;
