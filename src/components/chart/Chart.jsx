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
import { getLastMonths } from "../../utils";
import { useTheme } from "react-native-paper";

const Chart = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: getLastMonths(3),
          datasets: [
            {
              data: [156, 120, 187],
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.96} // from react-native
        height={200}
        yAxisLabel="L"
        // yAxisSuffix="k"
        yAxisInterval={10000} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: "#e26a00",
          backgroundGradientFrom: theme.colors.primaryGreen,
          backgroundGradientTo: theme.colors.primaryLightGreen,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
