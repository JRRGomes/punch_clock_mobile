import { useEffect } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { showToast, TOAST_POSITION, TOAST_TYPES } from "@utils/toast";

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

const useNewPunchScreen = () => {
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

  return {
    handleSubmit,
    control,
    navigation,
    today,
    onSubmit,
  };
};

export default useNewPunchScreen;
