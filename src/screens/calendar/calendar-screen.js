import React from 'react';
import { Text, View } from 'react-native';
import Template from '../../components/template/template';
import { Container, Icon } from '../../components/floating-button/floating-button.styles';
import FistIcon from '../../../assets/icons/fist.png';
import { useNavigation } from '@react-navigation/native';


const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <Template>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar Screen</Text>
      </View>
    <Container onPress={() => navigation.navigate('NewPunchScreen')}>
      <Icon source={FistIcon}></Icon>
    </Container>
    </Template>
  );
};

export default SettingsScreen;
