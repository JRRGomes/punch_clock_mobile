import RNPickerSelect from "react-native-picker-select";
import { SelectContainer } from "./select.styles";

const Select = ({ items, height, onValueChange, placeholder }) => {
  return (
    <SelectContainer height={height}>
      <RNPickerSelect
        onValueChange={onValueChange}
        placeholder={placeholder}
        items={items}
      />
    </SelectContainer>
  );
};

export default Select;
