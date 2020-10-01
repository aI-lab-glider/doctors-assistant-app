import { StyleSheet } from "react-native";
import { Colors, Typography } from "./index";

export const AUTH_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomColor: Colors.PURPLE,
    paddingTop: 16,
    justifyContent: "center",
  },
  login: {
    marginTop: 50,
  },
  inputs: {
    fontSize: Typography.FONT_SIZE_16,
    borderColor: Colors.GRAY_VERY_LIGHT,
    borderWidth: 3,
    padding: 10,
    borderRadius: 5,
    borderBottomColor: Colors.PURPLE,
  },
});

export default AUTH_STYLES;
