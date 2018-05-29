import { Navigation } from "react-native-navigation";
import { registerScreens } from "./screens/index";

registerScreens();

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Main page",
      screen: "Home" // this is a registered name for a screen
    }
    /*{
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      title: 'Screen Two'
    }*/
  ]
});
