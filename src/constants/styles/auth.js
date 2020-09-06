import { StyleSheet } from "react-native";
import { Colors, Typography } from "./index";

export const AUTH_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
  },
  login: {
    marginTop: 50,
  },
  inputs: {
    fontSize: Typography.FONT_SIZE_16,
    borderColor: Colors.AUTH_VIOLET,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
});

export default AUTH_STYLES;
