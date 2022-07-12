import RNPickerSelect from "react-native-picker-select";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { SelectContainer } from "./select.styles";

const Select = ({ items, height, onValueChange, placeholder }) => {
  return (
    <SelectContainer height={height}>
      <RNPickerSelect
        onValueChange={onValueChange}
        placeholder={placeholder}
        items={items}
        Icon={() => {
          return (
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color="#C61515"
            />
          );
        }}
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            top: -8,
          },
        }}
      />
    </SelectContainer>
  );
};

export default Select;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingRight: 30,
  },
  inputAndroid: {
    paddingRight: 30,
  },
});
