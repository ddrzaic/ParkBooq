import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Homepage";
import ProfileScreen from "../screens/Profile";
import CarConfig from "../screens/CarConfig";
import FavoritesScreen from "../screens/Favorites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClusterDetailsScreen from "../screens/ClusterDetails";

const screenOptionStyle = {
  headerShown: false,
  animation: "none",
};

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CarConfig" component={CarConfig} />
        <Stack.Screen name="ClusterDetails" component={ClusterDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
