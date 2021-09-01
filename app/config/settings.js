import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.0.231:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.0.231:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.0.231:9000/api",
  },
};

const getCurrentSettings = () => {
  if (_DEV_) return settings.dev;
  if (Constants.mainfest.releaseChannerl === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings;
