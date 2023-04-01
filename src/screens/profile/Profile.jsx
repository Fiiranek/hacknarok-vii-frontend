import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { IconButton, List } from "react-native-paper";
import avatar from "../../../assets/avatar.png";
import medal from "../../../assets/medal.png";
import levelUp from "../../../assets/level-up.png";
import { useTheme } from "react-native-paper";
import { HEXtoRGB, capitalize } from "../../utils";
import { ProgressBar } from "react-native-paper";
import Chart from "../../components/chart/Chart";

const Profile = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "H&M St. John avenue",
      amount: 100,
      type: "deposit",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "H&M St. John avenue",
      amount: 100,
      type: "pick-up",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "House av. Saint Paul",
      amount: 300,
      type: "deposit",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "House av. Saint Paul",
      amount: 300,
      type: "deposit",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "House av. Saint Paul",
      amount: 300,
      type: "deposit",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "House av. Saint Paul",
      amount: 300,
      type: "deposit",
    },
  ]);
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
              <List.Icon icon="water" color={theme.colors.primaryBlue} />
              <Text style={theme.text.h2}>45/100</Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              top: -54,
            }}
          >
            <Text
              style={{ ...theme.text.h5, color: "white", fontWeight: "bold" }}
            >
              8
            </Text>
            <Text style={{ ...theme.text.h5, fontWeight: "bold" }}>9</Text>
          </View>
        </View>
      </View>
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
        <Chart />
      </View>
      {/* BADGES */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
            width: (Dimensions.get("window").width * 0.95) / 2 - 5,
            padding: 10,
          }}
        >
          <Image
            source={medal}
            style={{ height: 64, width: 64, marginBottom: 10 }}
          />
          <Text style={theme.text.h2}>Badges</Text>
        </View>
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
            source={levelUp}
            style={{ height: 64, width: 64, marginBottom: 10 }}
          />
          <Text style={theme.text.h2}>Levels</Text>
        </View>
      </View>

      {transactions.map((tx, index) => {
        let deposit = tx.type === "deposit";
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 10,
              marginVertical: 5,
              width: "95%",
            }}
          >
            <IconButton icon={deposit ? "shirt" : "add-circle"} size={30} />
            <View>
              <Text style={theme.text.h2}>
                {capitalize(tx.type).replace("-", " ")}
              </Text>
              <Text style={theme.text.h4}>Hour: {tx.time}</Text>
              <Text style={theme.text.h4}>Location: {tx.location}</Text>
            </View>
          </View>
        );
      })}

      <List.Section
        style={{
          width: Dimensions.get("window").width * 0.95,
          backgroundColor: "#f4f4f4",
        }}
        titleStyle={{
          backgroundColor: "#f4f4f4",
        }}
        // title="Commitment to saving world <3"
      >
        {transactions.map((tx, index) => {
          let deposit = tx.type === "deposit";
          return (
            <List.Accordion
              style={{
                // backgroundColor: HEXtoRGB(theme.colors.primaryLightGreen, 0.2),
                backgroundColor: "white",
                borderRadius: 20,
                marginVertical: 5,
              }}
              key={"tx" + index}
              title={capitalize(tx.type).replace("-", " ")}
              //   description={"Hour: 8:37 PM\nLocation: H&M St. John avenue"}
              description={
                <View>
                  <Text style={theme.text.h4}>Hour: {tx.time}</Text>
                  <Text style={theme.text.h4}>Location: {tx.location}</Text>
                </View>
              }
              descriptionNumberOfLines={3}
              left={(props) => (
                <List.Icon {...props} icon={deposit ? "shirt" : "add-circle"} />
              )}
              expanded={false}
              right={(props) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: deposit ? theme.colors.primaryBlue : theme.primary,
                    }}
                  >
                    {deposit ? "+" : "-"}
                    {tx.amount}
                  </Text>
                  <List.Icon
                    {...props}
                    icon="water"
                    color={deposit ? theme.colors.primaryBlue : theme.primary}
                  />
                </View>
              )}
              //   onPress={handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
            </List.Accordion>
          );
        })}
      </List.Section>
    </ScrollView>
  );
};

export default Profile;
