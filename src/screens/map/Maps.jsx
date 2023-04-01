import { View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
export default Maps = () => {
  return (
    <View
      style={{
        minHeight: "100%",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
