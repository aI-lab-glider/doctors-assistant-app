// THIS IS TEMPORARY FILE, TO BE MERGED WITH OTHER CONST OR DELETED
import { Platform } from "react-native";

export const font = Platform.OS === "ios" ? "HelveticaNeue" : "Roboto";
export const titleColor = "#363434";

// Nav Shared Styles
export const headerStyle = {
  backgroundColor: "#fff",
  borderBottomWidth: 0,
  shadowColor: "transparent",
};
export const headerTitleStyle = {
  fontWeight: "bold",
  fontSize: 17,
  fontFamily: font,
  color: titleColor,
};

export const imageOptions = { allowsEditing: true, aspect: [4, 3] };
