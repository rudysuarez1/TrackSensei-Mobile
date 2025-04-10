import React from "react";
import { Button } from "react-native";
import { useAppStore } from "../state/useAppStore";
import { startLogging, stopLogging } from "../api/jetson";

const StartStopButton = () => {
  const { isLogging, setIsLogging, setStatus } = useAppStore();

  const handleToggle = async () => {
    setStatus("Processing...");
    try {
      if (isLogging) {
        await stopLogging();
        setIsLogging(false);
        setStatus("Stopped");
      } else {
        await startLogging();
        setIsLogging(true);
        setStatus("Logging...");
      }
    } catch (err) {
      console.error("Failed to communicate with Jetson:", err);
      setStatus("❌ Error communicating with Jetson");
    }
  };

  return (
    <Button
      title={isLogging ? "Stop Logging" : "Start Logging"}
      onPress={handleToggle}
    />
  );
};

export default StartStopButton;
