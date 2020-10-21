import { StyleSheet } from "react-native";
import { Colors, Typography } from "./index";

export default StyleSheet.create({
  titleText: {
    marginLeft: 30,
    marginBottom: 20,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  subtitleText: {
    color: Colors.PURPLE,
    marginLeft: 30,
    paddingTop: 10,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  listItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    marginRight: 20,
    paddingTop: 7,
  },
  nestedListItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 70,
    paddingTop: 7,
  },
  commentFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    marginRight: 20,
    paddingTop: 7,
  },
  choice: {
    marginRight: 15,
    marginLeft: 60,
  },
});
