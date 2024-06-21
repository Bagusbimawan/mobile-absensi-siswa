import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
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

const Absent = () => {
  const [nama, Setnama] = useState("");
  const [status, Setstatus] = useState(null);
  const [keterangan, Setketerangan] = useState("");

  const handlePress = async () => {
    try {
      const response = await axios.post("http://192.168.43.223:3000/absen", {
        nama,
        status,
        keterangan,
      });
      Setnama(""); // Reset input materi setelah pengiriman berhasil
      Setstatus(null); // Reset input status setelah pengiriman berhasil
      Setketerangan(""); // Reset input summary setelah pengiriman berhasil
      if (response.status === 200) {
        Alert.alert("Absen", "berhasil", [{ text: "ok" }]);
      } else {
        console.error("Error: Unexpected status code", response.status);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginTop: 60,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            Absent Today
          </Text>
        </View>
        <View>
          <Text
            style={{
              margin: 10,
              fontSize: 18,
              marginLeft: 30,
              fontFamily: "Roboto",
              fontWeight: "600",
            }}
          >
            Name
          </Text>
          <Input variant="rounded" w={300} ml={20} h={50}>
            <InputField
              placeholder="Enter Your Name"
              onChangeText={Setnama}
              value={nama}
            ></InputField>
          </Input>
        </View>
        <View>
          <Text
            style={{ fontSize: 18, margin: 10, marginLeft: 30, marginTop: 20 }}
          >
            Status
          </Text>
          <Select
            h={40}
            onValueChange={(itemValue) => Setstatus(itemValue)}
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
                <SelectItem label="izin" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>
        <View>
          <Text
            style={{ fontSize: 18, margin: 10, marginLeft: 30, marginTop: 20 }}
          >
            Optional
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
              placeholder="Type if you sick"
              onChangeText={Setketerangan}
              value={keterangan}
            />
          </Textarea>
          <Button
            w={250}
            h={55}
            ml={45}
            borderRadius={30}
            mt={30}
            bgColor="#0F2B8F"
          >
            <ButtonText fontWeight={500} onPress={handlePress}>
              SUBMIT
            </ButtonText>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Absent;
