import styled from 'styled-components/native';

import { moderateScale } from 'react-native-size-matters';

export const Container = styled.TouchableOpacity`
  position: absolute;

  width: ${moderateScale(70)}px;
  height: ${moderateScale(70)}px;

  border-radius: ${moderateScale(35)}px;

  bottom: ${moderateScale(20)}px;
  right: ${moderateScale(16)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  shadow-color: #000;
  shadow-offset: 0px ${moderateScale(5)}px;
  shadow-opacity: 0.34;
  shadow-radius: ${moderateScale(6.27)}px;

  elevation: 10;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: ${moderateScale(36)}px;
  height: ${moderateScale(36)}px;
`;
