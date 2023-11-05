import React, { FC, useEffect } from "react";
import {
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import {
  BottomNavigation,
  Input,
  Logo,
  StickyHeader,
  Cars,
  Button,
  ClusterSelector,
  ButtonSelector,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";


const LoginScreen: FC<
  RootDrawerScreenProps<"ClusterDetails">
> = ({}) => {



  // add function to change screen to home screen
  const navigation = useNavigation();

  

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <Input label="Username" placeholder="Ivan" value={username} onChangeText={(e) => setUsername(e)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  stickyHeaderContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: wp("2%"),
  },
});

export default LoginScreen;
