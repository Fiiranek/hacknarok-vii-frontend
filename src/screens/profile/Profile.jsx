import { View, Text, Image } from "react-native";
import React from "react";
import qr_code from "../../../assets/qr_code.png";
import { useTheme } from "react-native-paper";

const Profile = () => {
  const theme = useTheme();
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
          minHeight: "100%",
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

      <View></View>
    </View>
  );
};

export default Profile;
