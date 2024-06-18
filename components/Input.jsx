import React, { useState } from "react";
import { Input, InputField, Button } from "@gluestack-ui/themed";

const MyInput = ({onUsernameChange,OnPasswordChange}) => {

  return (
    <>
      <Input variant="underlined" size="xl" w={300} m={30}>
        <InputField 
          placeholder="Username"
          onChangeText={onUsernameChange}
        />
      </Input>
      <Input variant="underlined" size="xl" w={300} ml={30}>
        <InputField 
          placeholder="Password"
          secureTextEntry
          onChangeText={OnPasswordChange}
        />
      </Input>
    </>
  );
};

export default MyInput;
