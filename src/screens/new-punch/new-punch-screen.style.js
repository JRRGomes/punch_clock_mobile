import styled, {css}from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.m}px;
  margin: ${({ theme }) => theme.spacing.s}px ${({ theme }) => theme.spacing.m}px;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.xl}px 0 ${({ theme }) => theme.spacing.xxl}px;
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

export const TimeInput = styled.TextInput`
  flex: 1;
  height: ${({ theme }) => theme.spacing.input}px;
  margin: ${({ theme }) => theme.spacing.s}px 0;
  margin-left: ${({ theme }) => theme.spacing.s}px
  padding: ${({ theme }) => theme.spacing.s}px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};

  ${({error}) => error && css`
    border: ${({ theme }) => theme.colors.primary};
  `}
`;

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.regular}px
  color: ${({ theme }) => theme.colors.primary};
`;
