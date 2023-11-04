import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import Container from "../../components/layout/container";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGRyemFpYyIsImEiOiJjbG9qdnk0YWcyNXdwMmtvMjFzNWoyYWZpIn0.kWjM-b9vjLseJM3nz-_qIg"
);

const HomeScreen: FC<RootDrawerScreenProps<"Home">> = () => {
  return (
    <Container>
      <Mapbox.MapView style={styles.map} />
    </Container>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
