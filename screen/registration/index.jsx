import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    marginLeft: 50,
    marginTop: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  subtitle: {
    marginLeft: 50,
    fontSize: 22,
    color: "#E2C8F1",
    marginTop: 10,
  },
  input: {
    width: wp("70%"),
    marginLeft: 50,
    marginTop: 50,
  },
  button: {
    width: wp("70%"),
    marginLeft: 60,
    marginTop: 60,
    height: 54,
    borderRadius: 9,
    backgroundColor: "#0F2B8F",
  },
  buttonText: {
    fontWeight: "700",
  },
});

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://supabase-test-flame.vercel.app/register", {
        username,
        password,
        name,
      });
      setName("");
      setUsername("");
      setPassword("");
      if (response.status === 200) {
        Alert.alert("Data", "berhasil", [{ text: "OK" }]);
      } else {
        console.error("Kesalahan:", response);
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AntDesign
        name="arrowleft"
        size={32}
        color="black"
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Hi!</Text>
        <Text style={styles.subtitle}>Buat Akun Baru</Text>
        <View>
          <Input w={wp("70%")} variant="underlined" ml={50} mt={50}>
            <InputField
              placeholder="Name"
              color="#0F2B8F"
              fontSize={17}
              onChangeText={setName}
              value={name}
            />
          </Input>
          <Input w={wp("70%")} variant="underlined" ml={50} mt={50}>
            <InputField
              placeholder="Username"
              color="#0F2B8F"
              fontSize={17}
              onChangeText={setUsername}
              value={username}
            />
          </Input>
          <Input w={wp("70%")} variant="underlined" ml={50} mt={50}>
            <InputField
              placeholder="Password"
              color="#0F2B8F"
              secureTextEntry
              fontSize={17}
              onChangeText={setPassword}
              value={password}
            />
          </Input>
        </View>
        <View>
          <Button
            w={wp("70%")}
            ml={60}
            mt={60}
            h={54}
            size="lg"
            borderRadius={9}
            backgroundColor="#0F2B8F"
            onPress={handleRegister}
          >
            <ButtonText fontWeight={700}>SIGN UP</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;
