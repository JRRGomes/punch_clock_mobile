import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  padding: ${moderateScale(20)}px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  flex: 1;
`;

export const NewPunchDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const Hours = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;

export const InputWrapper = styled.TouchableOpacity`
  flex: 1;
  margin: ${({ theme }) => theme.spacing.s}px 0;
  margin-left: ${({ theme }) => theme.spacing.s}px;
`;

export const SelectWrapper = styled.View``;
