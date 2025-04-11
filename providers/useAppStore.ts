import { create } from "zustand";
import { AppState } from "../types/app-state";

export const useAppStore = create<AppState>((set) => ({
  isLogging: false,
  status: "Ready",
  jetsonIp: "192.168.4.1:8000", // default IP (adjust as needed)
  setIsLogging: (val) => set({ isLogging: val }),
  setStatus: (msg) => set({ status: msg }),
  setJetsonIp: (ip) => set({ jetsonIp: ip }),
}));
