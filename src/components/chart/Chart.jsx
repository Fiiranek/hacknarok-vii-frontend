import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import "react-native-svg";
import { View, Text, Dimensions } from "react-native";
import React from "react";
import { getLastMonths, sum } from "../../utils";
import { useTheme } from "react-native-paper";

const Chart = () => {
  const theme = useTheme();
  const data = [20, 35, 28];
  return (
    <View>
      <Text style={{ ...theme.text.h2, textAlign: "center" }}>
        {sum(data)} L of water saved in last 3 months!
      </Text>
      <LineChart
        // fromZero={true}
        data={{
          labels: getLastMonths(3),
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.8} // from react-native
        height={200}
        // yAxisLabel="L"
        yAxisSuffix=" L"
        // yAxisInterva{}l={1} // optional, defaults to 1
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: "#e26a00",

          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => theme.colors.primaryBlue,
          //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => "black",

          style: {
            borderRadius: 10,
          },

          propsForDots: {
            r: "6",
            strokeWidth: "2",
            // stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Chart;
