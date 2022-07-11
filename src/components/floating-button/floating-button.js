import React from "react";
import { useNavigation } from "@react-navigation/native";
import FistIcon from "@assets/icons/fist.png";
import { Icon } from "./floating-button.styles";
import { FloatingAction as RNFab } from "react-native-floating-action";
import { useTheme } from "styled-components";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../styles/theme";

const routeActions = {
  multiple_punches: "CalendarScreen",
  single_punch: "NewPunchScreen",
};

const actions = [
  {
    text: "Múltiplos punches",
    icon: (
      <FontAwesome5
        name="calendar-alt"
        size={20}
        color={theme.colors.primary}
      />
    ),
    name: "multiple_punches",
    position: 2,
    color: theme.colors.white,
  },
  {
    text: "Novo punch",
    icon: (
      <FontAwesome5
        name="calendar-day"
        size={20}
        color={theme.colors.primary}
      />
    ),
    name: "single_punch",
    position: 1,
    color: theme.colors.white,
  },
];

const FloatingButton = () => {
  const navigation = useNavigation();

  return (
    <RNFab
      actions={actions}
      onPressItem={(name) => {
        navigation.navigate(routeActions[name]);
      }}
      color={theme.colors.primary}
      floatingIcon={<Icon source={FistIcon}></Icon>}
      buttonSize={moderateScale(70)}
      distanceToEdge={{
        horizontal: moderateScale(18),
        vertical: verticalScale(18),
      }}
    />
  );
};

export default FloatingButton;
