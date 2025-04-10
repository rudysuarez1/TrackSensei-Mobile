import axios from "axios";
import { useAppStore } from "../state/useAppStore";

export const startLogging = async () => {
  const { jetsonIp } = useAppStore.getState();
  const url = `http://${jetsonIp}/log/start`;
  await axios.post(url);
};

export const stopLogging = async () => {
  const { jetsonIp } = useAppStore.getState();
  const url = `http://${jetsonIp}/log/stop`;
  await axios.post(url);
};
