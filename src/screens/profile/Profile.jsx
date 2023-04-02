import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { IconButton, List } from "react-native-paper";
import avatar from "../../../assets/avatar.png";
import medal from "../../../assets/medal.png";
import history from "../../../assets/history.png";
import levelUp from "../../../assets/level-up.png";
import stats from "../../../assets/stats.png";
import shirt from "../../../assets/shirt.png";
import { useTheme } from "react-native-paper";
import { HEXtoRGB } from "../../utils";
import { ProgressBar } from "react-native-paper";
import Chart from "../../components/chart/Chart";
import TXHistory from "../tx-ihstory/TXHistory";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
export default Profile = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const data = [
    { component: <Chart /> },
    {
      component: (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              margin: 0,
              backgroundColor: "white",

              padding: 10,
              height: "100%",
            }}
          >
            <Text style={theme.text.h2}>Tshirts saved</Text>
            <View
              style={{
                borderRadius: 100,
                backgroundColor: HEXtoRGB(theme.colors.primaryBlue, 0.2),
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image source={shirt} style={{ height: 64, width: 64 }} />
            </View>

            <Text style={theme.text.h1}>20</Text>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      component: (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              margin: 0,
              backgroundColor: "white",

              padding: 10,
              height: "100%",
            }}
          >
            <Text style={theme.text.h2}>Water saved</Text>
            <View
              style={{
                borderRadius: 100,
                backgroundColor: HEXtoRGB(theme.colors.primaryBlue, 0.2),
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <IconButton
                icon="water"
                iconColor={theme.colors.primaryBlue}
                size={64}
                onPress={() => console.log("Pressed")}
              />
            </View>

            <Text style={theme.text.h1}>256 L</Text>
          </View>
        </TouchableOpacity>
      ),
    },
    { component: <Chart /> },
  ];
  const tiles = [
    {
      id: 1,
      title: "History",
      icon: history,
      screen: "tx-history",
    },
    {
      id: 2,
      title: "Badges",
      icon: medal,
      screen: TXHistory,
    },
    {
      id: 3,
      title: "Ranks",
      icon: levelUp,
      screen: "ranks",
    },
    {
      id: 4,
      title: "Stats",
      icon: stats,
      screen: "stats",
    },
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: "#f4f4f4",
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          margin: 5,
          backgroundColor: "white",
          width: Dimensions.get("window").width * 0.95,
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={avatar}
        />
        <View
          style={{
            position: "relative",
            top: -10,
            backgroundColor: theme.colors.primaryLightGreen,
            borderRadius: 50,
            borderColor: "white",
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Lvl. 8
          </Text>
        </View>
        <Text style={theme.text.h2}>Hi Tom!</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: Dimensions.get("window").width * 0.7,
          }}
        >
          <ProgressBar
            style={{
              width: Dimensions.get("window").width * 0.7,
              marginVertical: 10,
              height: 20,
              borderRadius: 100,
              backgroundColor: HEXtoRGB(theme.colors.primaryBlue, 0.5),
            }}
            progress={0.45}
            color={theme.colors.primaryBlue}
          />

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IconButton
                icon="water"
                iconColor={theme.colors.primaryBlue}
                size={30}
              />
              <Text style={theme.text.h1}>45/100</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        horizontal={true}
        data={data}
        style={{
          padding: 0,
          marginVertical: 5,
          backgroundColor: "#f4f4f4",
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginHorizontal: 7,
                display: "flex",

                // width: Dimensions.get("window").width * 0.6,
              }}
            >
              {item.component}
            </View>
          );
        }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {tiles.map((tile, index) => {
          return (
            <TouchableOpacity
              key={`${tile}-${index}`}
              onPress={() => {
                console.log(tile.screen);
                if (navigation) navigation.navigate(tile.screen);
                else console.log("NO NAV");
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  margin: 5,
                  backgroundColor: "white",
                  width: (Dimensions.get("window").width * 0.95) / 2 - 5,
                  padding: 10,
                }}
              >
                <Image
                  source={tile.icon}
                  style={{ height: 64, width: 64, marginBottom: 10 }}
                />
                <Text style={theme.text.h2}>{tile.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
