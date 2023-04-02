import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { IconButton, List } from "react-native-paper";
import avatar from "../../../assets/avatar.png";
import medal from "../../../assets/medal.png";
import history from "../../../assets/history.png";
import levelUp from "../../../assets/level-up.png";
import { useTheme } from "react-native-paper";
import { HEXtoRGB, capitalize } from "../../utils";
import { ProgressBar } from "react-native-paper";
import Chart from "../../components/chart/Chart";
import TXHistory from "../tx-ihstory/TXHistory";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default ProfileWrapper = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="tx-history" component={TXHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
