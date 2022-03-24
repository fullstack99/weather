import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";

const SelectPicker = ({ onValueChange, items, placeholder }) => {
  return (
    <RNPickerSelect
      onValueChange={(val) => onValueChange(val)}
      placeholder={{
        label: placeholder,
        value: null,
      }}
      items={items}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 15,
          right: 10,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => <AntDesign name="down" size={16} color="black" />}
    />
  );
};

export default SelectPicker;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    width: "100%",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
