import React from 'react';
import { Text, View } from 'react-native';
import Template from '../../components/template/template';
import FloatingButton from '../../components/floating-button/floating-button';

const PunchListScreen = () => {
  return (
    <Template>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ margin: 'auto' }}>Listagem de punches</Text>
      </View>
      <FloatingButton />
    </Template>
  );
};

export default PunchListScreen;
