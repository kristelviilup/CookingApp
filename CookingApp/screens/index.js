import { Navigation } from "react-native-navigation";

import Home from "./home";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("Home", () => Home);
}
