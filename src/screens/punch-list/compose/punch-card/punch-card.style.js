import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.disabled};
  padding: ${({ theme }) => theme.spacing.m}px;
  margin: ${({ theme }) => theme.spacing.m}px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: ${moderateScale(8)}px;
`;

export const Hours = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Info = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
  font-weight: bold;
`;
