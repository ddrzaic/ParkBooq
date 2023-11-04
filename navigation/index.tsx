import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Homepage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const screenOptionStyle = {
  headerShown: false,
};

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
