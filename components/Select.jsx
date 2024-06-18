import { View, Text } from "react-native";
import React from "react";
import {
  Select,
  SelectIcon,
  SelectTrigger,
  SelectContent,
  SelectInput,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
const MySelect = () => {
  return (
    <>
      <Select w={220} ml={10}>
        <SelectTrigger variant="rounded" size="md">
          <SelectInput placeholder="Harap Isi" />
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
            <SelectItem label="Hadir" value="ux" />
            <SelectItem label="Sakit" value="web" />
            <SelectItem label="Izin" value="cross-platform" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </>
  );
};

export default MySelect;
