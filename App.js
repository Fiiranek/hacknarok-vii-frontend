import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from './src/screens/start/Start';
const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Start} />

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
