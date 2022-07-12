import React from "react";
import { View } from "react-native";
import Template from "../../components/template/template";
import { moderateScale } from "react-native-size-matters";
import {
  Container,
  NewPunchDate,
  Title,
  Hours,
  Icon,
  InfoContainer,
  ErrorMessage,
  SelectErrorMessage,
  InputWrapper,
  SelectWrapper,
} from "./new-punch-screen.styles";
import Button from "../../components/button/button";
import SelectForm from "../../components/select/select-form";
import InputForm from "../../components/input/input-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

const schema = yup
  .object({
    morningFrom: yup.string().required(),
    morningTo: yup.string().required(),
    afternoonFrom: yup.string().required(),
    afternoonTo: yup.string().required(),
    project: yup.string().required(),
  })
  .required();

const NewPunchScreen = () => {
  const navigation = useNavigation();
  const today = format(new Date(), "dd/MM/yyyy");

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      project: "",
      morningFrom: "08:00",
      morningTo: "12:00",
      afternoonFrom: "13:00",
      afternoonTo: "18:00",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Template>
      <View>
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
              {errors.project && (
                <SelectErrorMessage>Escolha um projeto.</SelectErrorMessage>
              )}
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
                {errors.morningFrom && (
                  <ErrorMessage>Insira uma hora.</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <InputForm
                  name="morningTo"
                  placeholder="12:00"
                  control={control}
                  height={30}
                />
                {errors.morningTo && (
                  <ErrorMessage>Insira uma hora.</ErrorMessage>
                )}
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
                {errors.afternoonFrom && (
                  <ErrorMessage>Insira uma hora.</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <InputForm
                  name="afternoonTo"
                  placeholder="18:00"
                  control={control}
                  height={30}
                />
                {errors.afternoonTo && (
                  <ErrorMessage>Insira uma hora.</ErrorMessage>
                )}
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
      </View>
    </Template>
  );
};

export default NewPunchScreen;
