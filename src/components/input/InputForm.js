import { Controller } from "react-hook-form";
import Input from "./Input";

const InputForm = ({ control, name, placeholder, error }) => (
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
        error={error}
      />
    )}
  />
);

export default InputForm;
