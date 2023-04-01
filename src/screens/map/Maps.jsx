import { View, StyleSheet, Dimensions, Text } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
export default Maps = () => {
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: 50.0110458,
        longitude: 19.8165725,
      },
      pin: "red",
      title: "title",
      description: "description",
    },
  ]);

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("LOCATION", location);
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        3 * 1000
      );
    })();
  }, []);

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
      <MapView
        ref={mapRef}
        provider="google"
        mapPadding={{ top: 100, right: 0, bottom: 100, left: 0 }}
        showsCompass={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
      >
        {markers.map((marker) => {
          return (
            <Marker {...marker}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              >
                <Text>{marker.title}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
