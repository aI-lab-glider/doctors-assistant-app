import { createStackNavigator } from "@react-navigation/stack";

// IMPORT SCENES
import HomeScreen from "../../views/home/Home";
import UpdateProfileScreen from "../../views/home/UpdateProfile";

import {
  headerStyle,
  headerTitleStyle,
} from "../../constants/styles/authTheme";

const HomeStack = createStackNavigator();

// TODO theme options
const HomeStackScreen = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
  </HomeStack.Navigator>;
};
// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     UpdateProfile: UpdateProfileScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: () => ({ headerStyle, headerTitleStyle }),
//   }
// );

export default HomeStackScreen;
