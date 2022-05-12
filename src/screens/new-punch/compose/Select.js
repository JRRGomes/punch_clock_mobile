import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";
import RNPickerSelect from 'react-native-picker-select';

export const SelectContainer = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacing.input}px;
  margin: ${({ theme }) => theme.spacing.s}px 0;
  padding: ${({ theme }) => theme.spacing.s}px;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
`;

const placeholder = {
  label: 'Selecione o projeto',
  value: null,
  color: '#808080',
};

export const Select = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder= {placeholder}
            items={[
                { label: 'Trainee', value: 'trainee' },
                { label: 'Umbrella', value: 'umbrella' },
            ]}
        />
    );
};
