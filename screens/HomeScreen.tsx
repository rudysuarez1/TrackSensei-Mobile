import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StartStopButton from "../components/StartStopButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrackSensei</Text>
      <StartStopButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default HomeScreen;
