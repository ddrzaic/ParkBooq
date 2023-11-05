import React, { FC, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import {
  BottomNavigation,
  ClusterSelector,
  InfoComponent,
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
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGRyemFpYyIsImEiOiJjbG9qdnk0YWcyNXdwMmtvMjFzNWoyYWZpIn0.kWjM-b9vjLseJM3nz-_qIg"
);

import * as S from "./styled";
import { MainButton } from "../../components/MainButton/MainButton";
import { getAllClusters } from "../../helpers/getAllClusters";

const HomeScreen: FC<RootDrawerScreenProps<"Home">> = () => {
  const navigation = useNavigation();

  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  const [clusters, setClusters] = React.useState([]);

  const [mapData, setMapData] = React.useState<{ zoom: number }>({ zoom: 0 });

  useEffect(() => {
    const get = async () => {
      const data = await getAllClusters();
      setClusters(data);
    };
    get();
  }, []);

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

  const generatePointAnnotations = () => {
    return clusters?.map((item: any, index) => {
      return (
        <Mapbox.PointAnnotation
        onSelected={() => {navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS, {
          id: item._id,
        });} }
          key={index.toString()}
          id={index.toString()}
          coordinate={[item.longitude, item.latitude]}
        >

            <Pinpoint
              color={item.available ? "#53D160" : "#D15353"}
              width="27.8"
              height="32.2"
            />

        </Mapbox.PointAnnotation>
      );
    });
  };

  const modalItem = (item: any, index: number) => (
    <ClusterSelector
      key={index}
      handlePress={() => {
        navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS, {
          id: item._id,
        });
      }}
      name={item.name}
      address={item.address.split(",")[0]}
      distance={item.distance}
      hasAvailableSpaces={item.available}
      light
    />
  );

  const isReserved = false;

  const generateModalData = () => {
    if (isReserved) {
      return (
        <S.ModalWrapper>
          <S.ReservationTitle>Reservation</S.ReservationTitle>
          <S.HeadWrapper>
            <Pinpoint
              color={true ? "#D15353" : "#53D160"}
              width="27.8"
              height="32.2"
            />
            <View>
              <S.ReservationName>Wespa Parking</S.ReservationName>
              <S.ReservationAddress>
                Ul. Vesesljava Holjevca
              </S.ReservationAddress>
            </View>
          </S.HeadWrapper>

          <S.InfoText>
            Parked since 12:45. Your reservation expires in 2 hours.
          </S.InfoText>
          <S.ButtonWrapper>
            <MainButton primary={false} label="Directions" onPress={() => {}} />
          </S.ButtonWrapper>
        </S.ModalWrapper>
      );
    } else {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {clusters?.map((item, index) => {
            return modalItem(item, index);
          })}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>
      <InfoComponent content={generateModalData()} />
      <BottomNavigation
        drawerContent={generateModalData()}
        active={BottomNavigationEnum.MAP}
        onChange={(e) => {
          navigation.navigate(e);
        }}
      />
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
        onCameraChanged={(e) => {
          setMapData(e);
        }}
      >
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={[location?.longitude ?? 0, location?.latitude ?? 0]}
          animationMode="flyTo"
          animationDuration={2000}
          allowUpdates={true}
        />

        <Mapbox.UserLocation />

        {generatePointAnnotations()}
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
