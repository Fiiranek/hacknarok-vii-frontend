import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Start from './src/screens/start/Start';
import globalStyle from './globalStyle'
const Tab = createBottomTabNavigator();
const ICONS = {
  home: {
    regular: 'ios-home',
    outline: 'ios-home-outline',
  },
  profile: {
    regular: 'ios-person',
    outline: 'ios-person-outline',
  },
  maps: {
    regular: 'ios-map',
    outline: 'ios-map-outline',
  },
  ranks: {
    regular: 'ios-trophy',
    outline: 'ios-trophy-outline',
  },
  scan: {
    regular: 'ios-qr-code',
    outline: 'ios-qr-code-outline',
  },


}
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = ICONS[route.name.toLowerCase()].regular;
          if (route.name === "Scan")
            return <View style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              backgroundColor: globalStyle.colors.primaryGreen,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Ionicons name={iconName} size={30} color={"white"} />
            </View>

          return <Ionicons name={iconName} size={size} color={focused ? globalStyle.colors.primaryGreen : color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          if (route.name === "Scan") {
            return <Text style={{ fontSize: 12, height: 10, color: "#fff" }}></Text>
          }
          return <Text style={{ fontSize: 12, color: focused ? globalStyle.colors.primaryGreen : color }}>{route.name}</Text>
        }


      })}>
        <Tab.Screen name="Home" component={Start} />
        <Tab.Screen name="Maps" component={Start} />
        <Tab.Screen name="Scan" component={Start} />
        <Tab.Screen name="Ranks" component={Start} />
        <Tab.Screen name="Profile" component={Start} />


      </Tab.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
