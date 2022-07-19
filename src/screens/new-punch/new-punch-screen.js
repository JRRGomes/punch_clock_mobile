import React, { useEffect } from "react";
import Template from "../../components/template/template";
import { moderateScale } from "react-native-size-matters";
import { showToast, TOAST_POSITION, TOAST_TYPES } from "@utils/toast";
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
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

const schema = yup
  .object({
    project: yup.string().required("Projeto obrigatório"),
    morningFrom: yup
      .string()
      .required("Horário início de expediente obrigatório"),
    morningTo: yup.string().required("Horário início de almoço obrigatório"),
    afternoonFrom: yup.string().required("Horário final de almoço obrigatório"),
    afternoonTo: yup
      .string()
      .required("Horário final de expediente obrigatório"),
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
      morningFrom: "",
      morningTo: "",
      afternoonFrom: "",
      afternoonTo: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const firstErrorKey = Object.keys(errors)[0];
    const firstError = errors?.[firstErrorKey]?.message;

    if (firstError) {
      showToast({
        text: firstError,
        type: TOAST_TYPES.ERROR,
        position: TOAST_POSITION.TOP,
      });
    }
  }, [errors]);

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
