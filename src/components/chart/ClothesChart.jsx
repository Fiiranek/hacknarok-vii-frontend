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
  
  const ClothesChart = ({props}) => {
    const theme = useTheme();
    const data = [10,16,12,4,8,20];
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          paddingVertical: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: Dimensions.get("window").width,
        }}
      >
        <Text style={{ ...theme.text.h3, textAlign: "center", maxWidth: "80%" }}>
          {sum(data)} clothes returned
        </Text>
        <LineChart
     
          // fromZero={true}
          data={{
            labels: getLastMonths(data.length,3),
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
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
            color: (opacity = 1) => theme.colors.primaryGreen,
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
             {...props}
        />
      </View>
    );
  };
  
  export default ClothesChart;
  