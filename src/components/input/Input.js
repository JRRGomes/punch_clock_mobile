import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

const Input = styled.TextInput`
  height: ${({ theme }) => theme.spacing.xl}px;
  padding: ${({ theme }) => theme.spacing.s}px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
`;

export default Input;
