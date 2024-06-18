import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";

const MyButton = ({onPress}) => {
  return (
    <>
      <Button w={250} m={60} h={50} onPress={onPress} >
        <ButtonText>login</ButtonText>
      </Button>
    </>
  );
};

export default MyButton;