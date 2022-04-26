import React from "react";
import { View, FlatList } from "react-native";
import PunchCard from "./compose/punch-card/punch-card";
import Template from "../../components/template/template";

const DATA = [
  {
    id: 1,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "01/10/2021",
  },
  {
    id: 2,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "01/10/2021",
  },
  {
    id: 3,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "01/10/2021",
  },
  {
    id: 4,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "01/10/2021",
  },
];

const PunchListScreen = () => {
  return (
    <Template>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          data={DATA}
          renderItem={PunchCard}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Template>
  );
};

export default PunchListScreen;
