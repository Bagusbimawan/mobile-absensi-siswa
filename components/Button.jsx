import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";

const MyButton = ({ onPress }) => {
  return (
    <>
      <Button
        w={250}
        m={60}
        h={50}
        onPress={onPress}
        bgColor="#0F2B8F"
        borderRadius={10}
      >
        <ButtonText fontWeight={600}>Login</ButtonText>
      </Button>
    </>
  );
};

export default MyButton;
