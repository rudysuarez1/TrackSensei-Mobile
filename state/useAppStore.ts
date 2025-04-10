import { create } from "zustand";

interface AppState {
  isLogging: boolean;
  status: string;
  jetsonIp: string;
  setIsLogging: (val: boolean) => void;
  setStatus: (msg: string) => void;
  setJetsonIp: (ip: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLogging: false,
  status: "Ready",
  jetsonIp: "192.168.4.1:8000", // default IP (adjust as needed)
  setIsLogging: (val) => set({ isLogging: val }),
  setStatus: (msg) => set({ status: msg }),
  setJetsonIp: (ip) => set({ jetsonIp: ip }),
}));
