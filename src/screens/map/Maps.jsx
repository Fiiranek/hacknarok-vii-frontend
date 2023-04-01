import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
export default Maps = () => {
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
            />
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
