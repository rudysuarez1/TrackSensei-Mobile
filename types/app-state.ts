export interface AppState {
  isLogging: boolean;
  status: string;
  jetsonIp: string;
  setIsLogging: (val: boolean) => void;
  setStatus: (msg: string) => void;
  setJetsonIp: (ip: string) => void;
}
