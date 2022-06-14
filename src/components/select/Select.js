import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const Select = ({ items, height, onValueChange, placeholder }) => {
  return (
    <SelectContainer height={height}>
      <RNPickerSelect
      onValueChange={onValueChange}
      placeholder={placeholder}
      items={items}
      Icon={() => {
        return <MaterialCommunityIcons name="chevron-down" size={30} color="#C61515" />;
      }}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: -5,
        },
      }}
      />
    </SelectContainer>
    );
  };

  const getHeight = ({ height, theme }) => {
    const variantHeight = {
      small: moderateScale(20),
      regular: moderateScale(30),
      large: theme.spacing.xl,
    }
    return variantHeight[height] || moderateScale(30)
  }

  const SelectContainer = styled.View`
    justify-content: center;
    height: ${getHeight}px;
    margin: ${({ theme }) => theme.spacing.s}px 0;
    padding: ${({ theme }) => theme.spacing.s}px;
    border-radius: ${moderateScale(8)}px;
    border: ${({ theme }) => theme.colors.disabled};
  `;

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      paddingRight: 30
    },
    inputAndroid: {
      paddingRight: 30
    },
  });
