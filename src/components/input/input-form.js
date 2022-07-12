import { Controller } from "react-hook-form";
import Input from "./input";

const InputForm = ({ control, name, placeholder, height }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, onBlur } }) => (
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor="grey"
        height={height}
      />
    )}
  />
);

export default InputForm;
