import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Style = StyleSheet.create({
  icon: {
    marginLeft: 20,
    marginTop: 40,
  },
});

const Registration = ({ navigation }) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AntDesign
          name="arrowleft"
          size={32}
          color="black"
          style={Style.icon}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text
            style={{
              fontSize: Platform.select({
                ios: 40,
                android: 40,
              }),
              marginLeft: 50,
              marginTop: 30,
              fontFamily: "Roboto",
              fontWeight: Platform.select({
                ios: "700",
                android: "600",
              }),
            }}
          >
            Hi!
          </Text>
          <Text style={{ marginLeft: 50, fontSize: 22, color: "#E2C8F1",marginTop:10 }}>
            Create A new Account
          </Text>
          <View>
            <Input w={wp("70")} variant="underlined" ml={50} mt={50}>
              <InputField
                placeholder="Name"
                color="#0F2B8F"
                fontSize={17}
              ></InputField>
            </Input>
            <Input w={wp("70")} variant="underlined" ml={50} mt={50}>
              <InputField
                placeholder="Username"
                color="#0F2B8F"
                fontSize={17}
              ></InputField>
            </Input>
            <Input w={wp("70")} variant="underlined" ml={50} mt={50}>
              <InputField
                placeholder="Password"
                color="#0F2B8F"
                secureTextEntry
                fontSize={17}
              ></InputField>
            </Input>
          </View>
          <View>
            <Button
              w={wp("70")}
              ml={60}
              mt={60}
              h={54}
              size="lg"
              borderRadius={9}
              backgroundColor="#0F2B8F"
              onPress={() => navigation.navigate("login")}
            >
              <ButtonText fontWeight={700}>SIGN UP</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Registration;
