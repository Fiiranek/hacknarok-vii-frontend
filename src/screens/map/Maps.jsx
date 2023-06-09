import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";
import React, { useEffect, useState, useRef } from 'react'
import ShopModal from '../home/ShopModal'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
// import axios from "axios";
import shops from './shops'
import RBSheet from 'react-native-raw-bottom-sheet'
import { IconButton, useTheme } from 'react-native-paper'
import { Searchbar } from 'react-native-paper'
export default Maps = () => {
  const sheetRef = useRef(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedShop, setSelectedShop] = useState(undefined)
  const theme = useTheme()
  const [markers, setMarkers] = useState(shops)
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  const [region, setRegion] = useState({
    latitude: 51.9189046,
    longitude: 20.1343786,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  })
  const [errorMsg, setErrorMsg] = useState(null)
  const mapRef = useRef(null)
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Lowest,
      })

      const latitude = location.coords.latitude
      const longitude = location.coords.longitude
      setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      })
      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        },
        500
      )
    })()
  }, [])

  // useEffect(() => {
  //   axios
  //     .request({
  //       method: "GET",
  //       url: "http://172.20.47.147:5000/api/shops",
  //     })
  //     .then((res) => {
  //       console.log("RES", res.data);
  //       setMarkers(res.data);
  //     });
  // }, []);
  useEffect(() => {
    console.log('markers', markers.length)
  }, [markers])
  return (
    <View
      style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Searchbar
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          top: 10,
          left: 0,
          right: 0,
          zIndex: 100,
          marginHorizontal: 10,
        }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <MapView
        ref={mapRef}
        provider="google"
        initialRegion={{
          latitude: 51.9189046,
          longitude: 20.1343786,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        mapPadding={{ top: 100, right: 0, bottom: 100, left: 0 }}
        showsCompass={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}>
        {markers.map((marker) => {
          marker.coordinate = {
            longitude: marker.coordinate.longitude,
            latitude: marker.coordinate.latitude,
          }
          return (
            <Marker
              key={`marker` + marker.id}
              {...marker}
              onPress={(e) => {
                sheetRef.current.open()
                setSelectedShop(marker)
              }}>
              {/* <TouchableOpacity
                onPress={(e) => {
                  console.log(marker);
                  setModalVisible(!modalVisible);
                }}
              > */}
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 20,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    objectFit: 'contain',
                  }}
                  source={{
                    // uri: `${Config.BACKEND_URL}/static/${marker.ticker}.png`,
                    uri: `http://172.20.47.147:5000/static/${marker.ticker}.png`,
                  }}
                />
                {/* <Text>{marker.title}</Text> */}
              </View>
              {/* </TouchableOpacity> */}
            </Marker>
          )
        })}
      </MapView>
      <RBSheet
        onClose={() => setSelectedShop(undefined)}
        ref={sheetRef}
        height={320}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            margin: 0,
            paddingHorizontal: 30,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          wrapper: {
            padding: 0,
            margin: 0,
          },
          draggableIcon: {},
        }}>
        {selectedShop ? (
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <Text style={theme.text.h1}>{selectedShop.name}</Text>
              <Text style={theme.text.h3}>{selectedShop.name}</Text>
              <Text style={theme.text.h3}>{selectedShop.street}</Text>
              <Text style={theme.text.h3}>
                {selectedShop.zip} {selectedShop.city}
              </Text>

              <Text
                style={{
                  ...theme.text.h3,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Hours
              </Text>
              <Text style={theme.text.h3}>
                Mon - Fri. {selectedShop.hours.workWeek}
              </Text>
              <Text style={theme.text.h3}>
                Sat - Sun. {selectedShop.hours.weekend}
              </Text>

              <Text
                style={{
                  ...theme.text.h3,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Contact
              </Text>
              <Text style={theme.text.h3}>{selectedShop.phone}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                // height: "100%",
              }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  objectFit: 'contain',
                  marginBottom: 120,
                }}
                source={{
                  // uri: `${Config.BACKEND_URL}/static/${marker.ticker}.png`,
                  uri: `http://172.20.47.147:5000/static/${selectedShop.ticker}.png`,
                }}
              />
              <IconButton
                onPress={() => {
                  Linking.openURL(
                    `https://www.google.com/maps/dir/?api=1&origin=${region.latitude},${region.longitude}&destination=${selectedShop.coordinate.latitude},${selectedShop.coordinate.longitude}`
                  )
                }}
                icon="navigate"
                containerColor={theme.colors.primaryGreen}
                iconColor={'white'}
                size={30}
              />
            </View>
          </View>
        ) : null}
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
