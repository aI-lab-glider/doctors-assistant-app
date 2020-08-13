import { createStackNavigator } from "@react-navigation/stack";

// IMPORT SCENES
import HomeScreen from "../../views/home/Home";
import UpdateProfileScreen from "../../views/home/UpdateProfile";

import {
  headerStyle,
  headerTitleStyle,
} from "../../constants/styles/authTheme";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    UpdateProfile: UpdateProfileScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: () => ({ headerStyle, headerTitleStyle }),
  }
);

export default HomeStack;
