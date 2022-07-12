import styled, { css } from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

const buttonPrimaryStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: ${moderateScale(1)}px;
`;

const buttonTextPrimaryStyles = css`
  color: ${({ theme }) => theme.colors.accent};
`;

const buttonSecondaryStyles = css`
  background-color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: ${moderateScale(1)}px;
`;

const buttonTextSecondaryStyles = css`
  color: ${({ theme }) => theme.colors.primary};
`;

const buttonStyles = {
  primary: buttonPrimaryStyles,
  secondary: buttonSecondaryStyles,
}

const buttonTextStyles = {
  primary: buttonTextPrimaryStyles,
  secondary: buttonTextSecondaryStyles,
}

export const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  padding: ${(props) => props.size}px;
  border-radius: ${moderateScale(8)}px;
  ${(props) => buttonStyles[props.color]};
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.size}px;
  text-align: center;
  ${(props) => buttonTextStyles[props.color]};
`;
