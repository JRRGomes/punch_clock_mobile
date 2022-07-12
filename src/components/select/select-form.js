import Select from "./select";
import { Controller } from "react-hook-form";

const SelectForm = ({ control, name, items, placeholder, height }) => (
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
        height={height}
      />
    )}
  />
);

export default SelectForm;
