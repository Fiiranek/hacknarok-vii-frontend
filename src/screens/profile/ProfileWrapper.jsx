import React, { useState } from 'react'
import TXHistory from '../tx-ihstory/TXHistory'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './Profile'
import Ranks from '../ranks/Ranks'

const Stack = createNativeStackNavigator()

export default ProfileWrapper = () => {
  const [expanded, setExpanded] = useState(true)

  const handlePress = () => setExpanded(!expanded)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="profile"
        screenOptions={{
          // headerShown: false,
          headerTitle: '',
          headerBackButtonMenuEnabled: true,
        }}>
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="tx-history" component={TXHistory} />
        <Stack.Screen name="ranks" component={Ranks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
