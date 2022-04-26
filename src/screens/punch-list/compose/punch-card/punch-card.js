import React from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Label, Info, Hours } from "./punch-card.style";

const PunchCard = ({ item }) => {
  return (
    <Container>
      <View>
        <Label>Projeto</Label>
        <Info>{item.projectName}</Info>

        <Label>Horários</Label>
        <Hours>
          <FontAwesome5 name="mug-hot" size={moderateScale(12)} color="black" />
          <Info>
            {item.morningFrom} - {item.morningTo}
          </Info>
        </Hours>

        <Hours>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={moderateScale(14)}
            color="black"
          />
          <Info>
            {item.afternoonFrom} - {item.afternoonTo}
          </Info>
        </Hours>
      </View>

      <View>
        <Label>Quando</Label>
        <Info>{item.date}</Info>

        <Label>Total de horas</Label>
        <Info>{item.totalHours}</Info>
      </View>
    </Container>
  );
};

export default PunchCard;
