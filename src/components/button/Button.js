import styled, { css } from "styled-components/native";
import { moderateScale } from "react-native-size-matters";
import theme from "../../styles/theme";

export const Button = ({ color, size, onPress, title }) => (
  <ButtonContainer onPress={onPress} color={color} size={getButtonSize(size)}>
    <ButtonText color={color} size={getFontSize(size)}>{title}</ButtonText>
  </ButtonContainer>
);

const getButtonSize = (size) => {
  const variantButtonSize = {
    small: moderateScale(5),
    regular: moderateScale(7),
    large: moderateScale(9),
  }
  return variantButtonSize[size] || moderateScale(7)
}

const getFontSize = (size) => {
  const variantFontSize = {
    small: theme.fontSizes.small,
    regular: theme.fontSizes.medium,
    large: theme.fontSizes.large,
  }
  return variantFontSize[size] || theme.fontSizes.medium
}

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

const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  padding: ${(props) => props.size}px;
  border-radius: ${moderateScale(8)}px;
  ${(props) => buttonStyles[props.color]};

`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.size}px;
  text-align: center;
  ${(props) => buttonTextStyles[props.color]};
`;
