import React from "react";
import Template from "../../components/template/template";
import { moderateScale } from "react-native-size-matters";
import {
  Container,
  NewPunchDate,
  Title,
  Hours,
  Icon,
  InfoContainer,
  InputWrapper,
  SelectWrapper,
} from "./new-punch-screen.styles";
import Button from "../../components/button/button";
import SelectForm from "../../components/select/select-form";
import InputForm from "../../components/input/input-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import useNewPunchScreen from "./use-new-punch-screen";

const NewPunchScreen = () => {
  const { control, handleSubmit, navigation, today, onSubmit } =
    useNewPunchScreen();

  return (
    <Template>
      <Container>
        <Title>Novo Punch</Title>
        <InfoContainer>
          <NewPunchDate>{today}</NewPunchDate>
          <SelectWrapper>
            <SelectForm
              height={30}
              control={control}
              name="project"
              items={[
                { label: "Trainee", value: "trainee" },
                { label: "Umbrella", value: "umbrella" },
              ]}
              placeholder={{ label: "Selecione o projeto", value: null }}
            />
          </SelectWrapper>
          <Hours>
            <Icon>
              <FontAwesome5
                name="mug-hot"
                size={moderateScale(18)}
                color="grey"
              />
            </Icon>
            <InputWrapper>
              <InputForm
                name="morningFrom"
                placeholder="08:00"
                control={control}
                height={30}
              />
            </InputWrapper>
            <InputWrapper>
              <InputForm
                name="morningTo"
                placeholder="12:00"
                control={control}
                height={30}
              />
            </InputWrapper>
          </Hours>

          <Hours>
            <Icon>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={moderateScale(18)}
                color="grey"
              />
            </Icon>
            <InputWrapper>
              <InputForm
                name="afternoonFrom"
                placeholder="13:00"
                control={control}
                height={30}
              />
            </InputWrapper>
            <InputWrapper>
              <InputForm
                name="afternoonTo"
                placeholder="18:00"
                control={control}
                height={30}
              />
            </InputWrapper>
          </Hours>
        </InfoContainer>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Salvar"
          color="primary"
        />
        <Button
          onPress={() => navigation.navigate("PunchListScreen")}
          title="Cancelar"
          color="secondary"
        />
      </Container>
    </Template>
  );
};

export default NewPunchScreen;
