import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as PaperProvider } from 'react-native-paper'
import Start from './src/screens/start/Start'
import Login from './src/screens/Login/Login'
const Tab = createBottomTabNavigator()
export default function App() {
  const Stack = createStackNavigator()
  function HomeTabs() {
    return (
      <Tab.Navigator options={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Start}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
