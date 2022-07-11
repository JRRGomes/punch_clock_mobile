import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${moderateScale(20)}px;
`;

export const Heading = styled.Text`
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
`;

export const Content = styled.View`
  margin-top: ${moderateScale(20)}px;
`;
