import { useState } from "react";
import Home from "./src/screens/home/Home";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, Appbar } from "react-native-paper";
import Profile from "./src/screens/profile/Profile";
import Maps from "./src/screens/map/Maps";
import { Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryBlack: "#1F2421",
    primaryAqua: "#216869",
    primaryBlue: "#1CB4E5",
    primaryGreen: "#49A078",
    primaryLightGreen: "#9CC5A1",
    primaryPlatinium: "DCE1DE",
  },
  text: {

    h1: {
      ...DefaultTheme.text,
      fontSize: 20,
      fontWeight: 'bold'
    },
    h2: {
      ...DefaultTheme.text,
      fontSize: 18,
      fontWeight: 'bold'
    },
    h3: {
      ...DefaultTheme.text,
      fontSize: 16,
      fontWeight: 'bold'
    },
    h4: {
      ...DefaultTheme.text,
      fontSize: 14,
      fontWeight: 'bold'
    },
    h5: {
      ...DefaultTheme.text,
      fontSize: 12,
      fontWeight: 'bold'
    },
    h6: {
      ...DefaultTheme.text,
      fontSize: 10
    }
  }
};

export default function App() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'home', title: 'Favorites', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'maps', title: 'Maps', focusedIcon: 'map', unfocusedIcon: 'map-outline' },
    { key: 'scan', title: 'Scan', focusedIcon: 'qr-code', unfocusedIcon: 'qr-code-outline' },

    { key: 'ranks', title: 'Ranks', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'person', unfocusedIcon: 'person-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
    maps: Maps

  });

  return (
    // <SafeAreaView style={{
    //   minHeight: '100%',
    // }}>
    <PaperProvider

      theme={theme}
      settings={{

        icon: props => <Ionicons {...props} />,
      }}>

      <View style={{
        // backgroundColor: theme.colors.primaryLightGreen,
        height: 40,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50

      }}>
      </View>
      <BottomNavigation


        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider >
    // </SafeAreaView>

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
