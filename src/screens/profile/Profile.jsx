import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";
// import qr_code from "../../../assets/qr_code.png";
import { useTheme } from "react-native-paper";
import { DataTable } from "react-native-paper";
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
  ]);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={theme.text.h1}>Hi Tom!</Text>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            //   uri: qr_code,
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
          }}
        />
      </View>

      <List.Section
        style={{
          width: Dimensions.get("window").width * 0.95,
        }}
        title="Commitment to saving world <3"
      >
        <List.Accordion
          style={{
            maxHeight: 200,
          }}
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
          //   expanded={false}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        {transactions.map((transaction, index) => (
          <List.Accordion
            key={"transaction" + index}
            title={transaction.type.toUpperCase()}
            //   description={"Hour: 8:37 PM\nLocation: H&M St. John avenue"}
            description={
              <View>
                <Text style={theme.text.h4}>Hour: 8:37 PM</Text>
                <Text style={theme.text.h4}>Location: H&M St. John avenue</Text>
              </View>
            }
            descriptionNumberOfLines={3}
            left={(props) => <List.Icon {...props} icon="arrow-redo" />}
            expanded={false}
            right={(props) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: theme.colors.primaryBlue }}>+100 </Text>
                <List.Icon
                  {...props}
                  icon="water"
                  color={theme.colors.primaryBlue}
                />
              </View>
            )}
            //   onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        ))}
      </List.Section>
    </View>
  );
};

export default Profile;
