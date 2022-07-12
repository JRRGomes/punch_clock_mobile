import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

const getHeight = ({ height, theme }) =>
  moderateScale(height) || theme.spacing.xl;

export const SelectContainer = styled.View`
  justify-content: center;
  height: ${getHeight}px;
  margin: ${({ theme }) => theme.spacing.s}px 0;
  padding: ${({ theme }) => theme.spacing.s}px;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
`;
