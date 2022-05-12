import React from "react";
import { View } from "react-native";
import Template from "../../components/template/template";
import { moderateScale } from "react-native-size-matters";
import { Container, Date, Title, Hours, Icon, InfoContainer, TimeInput } from "./new-punch-screen.style";
import { Button, Select, SelectContainer } from "./compose"
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const NewPunchScreen = () => {
  return (
    <Template>
      <View>
        <Container>
          <Title>Novo Punch</Title>
          <InfoContainer>
            <Date>27, Segunda-feira</Date>
            <SelectContainer>
              <Select/>
            </SelectContainer>
            <Hours>
              <Icon>
                <FontAwesome5 name="mug-hot" size={moderateScale(18)} color="grey" />
              </Icon>
              <TimeInput placeholder='08:00' keyboardType='numeric' placeholderTextColor='grey' />
              <TimeInput placeholder='12:00' keyboardType='numeric' placeholderTextColor='grey' />
            </Hours>

            <Hours>
              <Icon>
                <MaterialCommunityIcons name="silverware-fork-knife" size={moderateScale(18)} color="grey" />
              </Icon>
              <TimeInput placeholder='13:00' keyboardType='numeric' placeholderTextColor='grey' />
              <TimeInput placeholder='18:00' keyboardType='numeric' placeholderTextColor='grey' />
            </Hours>
          </InfoContainer>
          <Button
            onPress={() => true}
            title='Salvar'
          />
          <Button
            onPress={() => true}
            title='Cancelar'
            bgColor='cancel'
          />
        </Container>
      </View>
    </Template>
  );
};

export default NewPunchScreen;
