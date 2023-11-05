import React, { FC, useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import {
  BottomNavigation,
  Input,
  Logo,
  StickyHeader,
  Cars,
  Button,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum } from "../../helpers/const";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";

const ProfileScreen: FC<RootDrawerScreenProps<"Profile">> = () => {

  // add function to change screen to home screen
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <S.Wrapper>
        <S.Wallet source={require("../../assets/gradient.png")} imageStyle={{ borderRadius: 27}}>
          <S.WalletWrapper>
          <S.WalletTextHead>Wallet</S.WalletTextHead>
          <S.WalletTextSubhead>3,0 €</S.WalletTextSubhead>
          </S.WalletWrapper>
        </S.Wallet>
        <Cars type="suv" color="red" />
        <Button label="+" onPress={() => {navigation.navigate(BottomNavigationEnum.CARCONFIG)}} />
      </S.Wrapper>

      <BottomNavigation active={BottomNavigationEnum.PROFILE} onChange={(e) => {navigation.navigate(e)}} />
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

export default ProfileScreen;
