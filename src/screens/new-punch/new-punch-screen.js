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
  TimeInput,
  ErrorMessage,
} from "./new-punch-screen.styles";
import Button from "../../components/button/Button";
import SelectForm from "../../components/select/SelectForm";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const today = format(new Date(), "dd/MM/yyyy");

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      project: "",
      morningFrom: "",
      morningTo: "",
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
            <SelectForm
              size="small"
              control={control}
              name="project"
              items={[
                { label: "Trainee", value: "trainee" },
                { label: "Umbrella", value: "umbrella" },
              ]}
              placeholder={{ label: "Selecione o projeto", value: null }}
            />
            {errors.project && <ErrorMessage>Escolha um projeto.</ErrorMessage>}
            <Hours>
              <Icon>
                <FontAwesome5
                  name="mug-hot"
                  size={moderateScale(18)}
                  color="grey"
                />
              </Icon>
              <TimeInput
                name="morningFrom"
                placeholder="08:00"
                control={control}
                error={errors.morningFrom}
              />
              {errors.morningFrom && (
                <ErrorMessage>Insira uma hora.</ErrorMessage>
              )}

              <TimeInput
                name="morningTo"
                placeholder="12:00"
                control={control}
              />
              {errors.morningTo && (
                <ErrorMessage>Insira uma hora.</ErrorMessage>
              )}
            </Hours>

            <Hours>
              <Icon>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={moderateScale(18)}
                  color="grey"
                />
              </Icon>
              <TimeInput
                name="afternoonFrom"
                placeholder="13:00"
                control={control}
              />
              {errors.afternoonFrom && (
                <ErrorMessage>Insira uma hora.</ErrorMessage>
              )}
              <TimeInput
                name="afternoonTo"
                placeholder="18:00"
                control={control}
              />
              {errors.afternoonTo && (
                <ErrorMessage>Insira uma hora.</ErrorMessage>
              )}
            </Hours>
          </InfoContainer>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Salvar"
            color="primary"
          />
          <Button onPress={() => true} title="Cancelar" color="secondary" />
        </Container>
      </View>
    </Template>
  );
};

export default NewPunchScreen;
