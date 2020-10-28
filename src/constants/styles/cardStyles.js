import { StyleSheet } from "react-native";
import { Colors, Typography } from "./index";

export default StyleSheet.create({
  cardItem: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    padding: 6,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: Typography.BORDER_RADIUS,
    ...Typography.BOX_SHADOW,
  },
});
