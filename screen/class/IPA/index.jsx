import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { jadwal } from "../../../data/jadwal";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Input,
  InputField,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Textarea,
  TextareaInput,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import axios from "axios";

const Style = StyleSheet.create({
  icon: {
    marginLeft: 20,
    marginTop: 40,
  },
});

const IPA = ({ navigation }) => {
  const schedule = jadwal[0];
  const [materi, setMateri] = useState("");
  const [status, setStatus] = useState(null);
  const [summary, setSummary] = useState("");
  
  const handlePress = async () => {
    try {
      const response = await axios.post("https://supabase-test-flame.vercel.app/ipa", {
        materi,
        status,
        summary,
      });
      setMateri("");
      setStatus(null);
      setSummary("");
      if (response.status === 200) {
        Alert.alert("Data", "berhasil", [{ text: "ok" }]);
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          width: "100%",
          height: 130,
        }}
      >
        <View style={{ flexDirection: "row", gap: 255 }}>
          <AntDesign
            name="arrowleft"
            size={32}
            color="black"
            style={Style.icon}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={{ textAlign: "center", fontSize: 25, marginTop: 6 }}>
          {schedule.subject}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#D7E6EB",
          width: "100%",
          height: hp("88%"),
        }}
      >
        <View>
          <Text
            style={{
              margin: 25,
              fontSize: 30,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            Learning Materials
          </Text>

          <Input
            w={270}
            ml={25}
            h={50}
            bgColor="#F2EDED"
            borderColor="#E1DFDF"
            borderRadius={10}
            size="2xl"
          >
            <InputField
              placeholder="Enter Text There"
              color="#464545"
              onChangeText={setMateri}
              value={materi}
            />
          </Input>
        </View>

        <View>
          <Text
            style={{
              margin: 25,
              fontSize: 30,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            Status
          </Text>

          <Select
            onValueChange={(itemValue) => setStatus(itemValue)}
            selectedValue={status}
          >
            <SelectTrigger
              variant="rounded"
              size="md"
              w={250}
              ml={25}
              bgColor="#F2EDED"
            >
              <SelectInput placeholder="Select option" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Sakit" value="sakit" />
                <SelectItem label="Hadir" value="hadir" />
                <SelectItem label="izin" value="izin"/>
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        <View>
          <Text
            style={{
              margin: 25,
              fontSize: 30,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            Summary
          </Text>
          <Textarea
            size="md"
            w={300}
            ml={30}
            borderColor="#E1DFDF"
            h={200}
            bgColor="#F2EDED"
            borderRadius={15}
          >
            <TextareaInput
              onChangeText={setSummary}
              value={summary}
            ></TextareaInput>
          </Textarea>
          <Button
            size="lg"
            w={250}
            ml={55}
            mt={35}
            variant="solid"
            borderRadius={50}
            bgColor="#75BCE4"
            onPress={handlePress}
          >
            <ButtonText>Done</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default IPA;
