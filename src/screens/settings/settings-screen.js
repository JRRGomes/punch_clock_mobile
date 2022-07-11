import React from "react";
import { Text } from "react-native";
import Template from "../../components/template/template";
import RNPickerSelect from "react-native-picker-select";
import { Container, Heading, Content } from "./settings-screen.styles";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@store/modules/user-preferences/user-preferences-actions";

const SettingsScreen = () => {
  const userPreferences = useSelector((store) => store.userPreferences);
  const dispatch = useDispatch();

  const handleValueChange = (value) => {
    dispatch(changeLanguage(value));
  };

  return (
    <Template>
      <Container>
        <Heading>Configurações</Heading>

        <Content>
          <Text>Idioma</Text>
          <RNPickerSelect
            onValueChange={handleValueChange}
            value={userPreferences.language}
            items={[
              { label: "Português", value: "pt-BR" },
              { label: "Inglês", value: "en" },
            ]}
          />
        </Content>
      </Container>
    </Template>
  );
};

export default SettingsScreen;
