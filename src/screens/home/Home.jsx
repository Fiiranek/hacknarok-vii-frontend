import { View, Text } from "react-native";
import React from "react";
import Chart from "../../components/chart/Chart";

export default Home = () => {
  return (
    <View
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chart />
      <Chart />
    </View>
  );
};
