import React from "react";
import { Text, View } from "react-native";
import Template from "@components/template/template";

const CalendarScreen = () => {
  return (
    <Template>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Calendar Screen</Text>
      </View>
    <Container onPress={() => navigation.navigate('NewPunchScreen')}>
      <Icon source={FistIcon}></Icon>
    </Container>
    </Template>
  );
};

export default CalendarScreen;
