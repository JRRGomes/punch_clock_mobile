import Select from "./Select";
import { Controller } from "react-hook-form";

const SelectForm = ({ control, name, items, placeholder, size }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, onBlur } }) => (
      <Select
        value={value}
        onValueChange={onChange}
        onBlur={onBlur}
        items={items}
        placeholder={placeholder}
        size={size}
      />
    )}
  />
);

export default SelectForm;

