import { useState } from 'react';
import Home from './src/screens/home/Home';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation, } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryBlack: "#1F2421",
    primaryAqua: "#216869",
    primaryGreen: "#49A078",
    primaryLightGreen: "#9CC5A1",
    primaryPlatinium: "DCE1DE",
  },
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

  });

  return (
    <PaperProvider theme={theme}
      settings={{
        icon: props => <Ionicons {...props} />,
      }}>
      <BottomNavigation


        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>

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
