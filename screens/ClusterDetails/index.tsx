import React, { FC, useEffect } from "react";
import {
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  View,
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
import { BottomNavigationEnum } from "../../helpers/const";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import { Pinpoint } from "../../components";
import { OccupancyPrediction } from "../../components/OccupancyPrediction/OccupancyPrediction";
import { MainButton } from "../../components/MainButton/MainButton";
import Mapbox from "@rnmapbox/maps";

const ClusterDetailsScreen: FC<
  RootDrawerScreenProps<"ClusterDetails">
> = () => {
  // add function to change screen to home screen
  const navigation = useNavigation();

  const hasAvailableSpaces = true;

  const openMaps = (lat: string, lng: string) => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const label = "Wespa parking";
    const url: string = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <S.Wrapper>
        <S.TopWrapper>
          <Pinpoint
            color={hasAvailableSpaces ? "#D15353" : "#53D160"}
            width="48"
            height="52"
          />
          <S.TextWrapper>
            <S.TopText>Wespa parking</S.TopText>
            <S.BottomText>Ul. Vjekoslava Heinzla 60</S.BottomText>
            <S.BottomText>120m from your location</S.BottomText>
            <S.BottomText showGreen>10 spaces left</S.BottomText>
          </S.TextWrapper>
        </S.TopWrapper>

        <Mapbox.MapView
        style={styles.map}
        styleURL={Mapbox.StyleURL.Street}
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
      >
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={[45.026199 ?? 0, 14.573340 ?? 0]}
          animationMode="flyTo"
          animationDuration={2000}
          allowUpdates={true}
        />

        <Mapbox.UserLocation />

        <Mapbox.PointAnnotation
          id="marker"
          coordinate={[
            45.026199 + 0.001 ?? 0,
            14.573340 + 0.001 ?? 0,
          ]}
        >
          <Pinpoint color="#D15353" />
        </Mapbox.PointAnnotation>
      </Mapbox.MapView>



        <S.MainButtonWrapper>
          <MainButton
            label="Directions"
            handlePress={() => {openMaps("45.026199","14.573340")}}
            primary={false}
          />
          <MainButton label="Reserve" handlePress={() => {}} />
        </S.MainButtonWrapper>
        <S.SectionTitle>Occupancy prediction</S.SectionTitle>
        <S.SelectorWrapper>
          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Mon</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Tue</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}} selected>
            <S.ButtonText selected>Wed</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Thu</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Fri</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Sat</S.ButtonText>
          </S.StyledButton>

          <S.StyledButton onPress={() => {}}>
            <S.ButtonText>Sun</S.ButtonText>
          </S.StyledButton>
        </S.SelectorWrapper>
        <OccupancyPrediction />
      </S.Wrapper>
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

export default ClusterDetailsScreen;
