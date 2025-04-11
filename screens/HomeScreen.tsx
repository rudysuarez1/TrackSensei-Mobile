import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppStore } from "../providers/useAppStore";
import StartStopButton from "../components/StartStopButton";

const HomeScreen = () => {
  // implement the isLogging state later on when we have the logging functionality
  const { status, jetsonIp } = useAppStore();
  const navigation = useNavigation();

  const handleRefresh = () => {
    // TODO: Pull live data from Jetson or server
    console.log("Refreshing telemetry...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrackSensei Dashboard</Text>
      <Text>Welcome to TrackSensei Mobile!</Text>

      <Text style={styles.status}>Status: {status}</Text>
      <Text style={styles.status}>Jetson IP: {jetsonIp}</Text>

      <View style={styles.buttonWrapper}>
        <StartStopButton />
      </View>
      <Button title="Refresh Data" onPress={handleRefresh} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings" as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  status: {
    fontSize: 16,
    marginVertical: 4,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});

export default HomeScreen;
