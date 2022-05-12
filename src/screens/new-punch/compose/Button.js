import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

const getBgCollor = ({ bgColor, theme }) => {
  const variantColors = {
    primary: theme.colors.primary,
    cancel: theme.colors.cancelButton,
  }
  return variantColors[bgColor] || theme.colors.primary
}

const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  width: 100%;
  height: ${({ theme }) => theme.spacing.button}px;
  border-radius: ${moderateScale(8)}px;
  background-color: ${getBgCollor};
`;

const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = ({ bgColor, onPress, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
