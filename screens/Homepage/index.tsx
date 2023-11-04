import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import {
  BottomNavigation,
  Input,
  Logo,
  Pinpoint,
  SearchIcon,
  StickyHeader,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum } from "../../helpers/const";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGRyemFpYyIsImEiOiJjbG9qdnk0YWcyNXdwMmtvMjFzNWoyYWZpIn0.kWjM-b9vjLseJM3nz-_qIg"
);

const HomeScreen: FC<RootDrawerScreenProps<"Home">> = () => {
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  Mapbox.requestAndroidLocationPermissions();

  Mapbox.setTelemetryEnabled(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude ?? 0,
        longitude: currentLocation.coords.longitude ?? 0,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
          <Input
            placeholder="Search..."
            onChangeText={function (value: string): void {
              console.log(value);
            }}
            borderRadius={wp("50%")}
            leftChild={
              <View style={{ paddingLeft: wp("3%") }}>
                <SearchIcon />
              </View>
            }
          />
        </View>
      </StickyHeader>
      <BottomNavigation active={BottomNavigationEnum.MAP} onChange={() => {}} />
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
        interactive={true}
      >
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={[location?.longitude ?? 0, location?.latitude ?? 0]}
          animationMode="flyTo"
          animationDuration={2000}
          allowUpdates={true}
        />

        <Mapbox.UserLocation />

        <Mapbox.PointAnnotation
          id="marker"
          coordinate={[
            location?.longitude + 0.001 ?? 0,
            location?.latitude + 0.001 ?? 0,
          ]}
        >
          <Pinpoint color="#D15353" />
        </Mapbox.PointAnnotation>
      </Mapbox.MapView>
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

export default HomeScreen;
