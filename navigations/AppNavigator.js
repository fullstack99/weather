import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Weather from "../screens/Weather";

const Stack = createStackNavigator();
const defaultScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
