import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import DashedLine from "react-native-dashed-line";
import rewards from './rewards'
import { HEXtoRGB, calculatePercents } from "../../utils";
const USER_DROPS = 450; //hardcoded for now - should be fetched from the server
const Rewards = () => {
  
  const theme = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: "#f4f4f4",
        width: "100%",
      }}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {rewards.map((r) => {
        const percents = calculatePercents(USER_DROPS, r.cost);
        return (
          <View
            style={{
              borderRadius: 20,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: Dimensions.get("window").width * 0.475,
              //   width: "50%",
              marginVertical: 5,
            }}
          >
            <View
              style={{
                backgroundColor: r.color,
             
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <Image
                source={{
                  uri: `http://172.20.47.147:5000/static/${r.shopIcon}.png`,
                }}
                style={{ width: 100, height: 100, objectFit: "contain" }}
              />
            </View>
            <View style={{  borderStyle: "dashed",
                borderWidth: 2,width:"100%",borderColor:r.color}}></View>
            <View
              style={{
                flexdDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                padding: 10,
                backgroundColor: "white",
              }}
            >
              <Text style={theme.text.h1}>{r.amount}% off</Text>
              <Text style={theme.text.h2}>{r.shopName}</Text>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{ width: 100, height: 50 }}
                  onPress={() => {
                    console.log("111");
                  }}
                >
                  <View
                    style={{
                      marginTop: 10,
                      width: 100,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        position: "relative",
                        borderRadius: 20,

                        width: 120,
                        display: "flex",
                        flexDirection: "row",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            position: "relative",
                            right: -10,
                            // top: 4,
                            fontWeight: "bold",
                          }}
                        >
                          {r.cost}{" "}
                        </Text>
                        <IconButton
                          icon="water"
                          iconColor={"white"}
                          size={20}
                        />
                      </View>

                      <View
                        style={{
                          width: percents[0],
                          height: 30,
                          position: "absolute",
                          left: -10,
                          backgroundColor: theme.colors.primaryBlue,
                          borderRadiusTopLeft: 100,
                          borderBottomLeftRadius: 20,
                          borderTopLeftRadius: 20,
                          zIndex: -1,
                        }}
                      ></View>
                      <View
                        style={{
                          position: "absolute",
                          width: percents[1],
                          left: percents[0] - 10,
                          height: 30,
                          backgroundColor: HEXtoRGB(
                            theme.colors.primaryBlue,
                            0.5
                          ),
                          borderTopRightRadius: 20,
                          borderBottomRightRadius: 20,
                          zIndex: -1,
                        }}
                      ></View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Rewards;
