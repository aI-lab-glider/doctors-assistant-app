import React from "react";
import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import ProfileIcon from "../../components/common/ProfileIcon";
import BackIcon from "../../components/common/BackIcon";

export default {
  headerStyle: {
    backgroundColor: Colors.PURPLE,
    height: 105,
    borderBottomLeftRadius: 50,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: Colors.WHITE,
  headerTitleStyle: {
    fontSize: Typography.FONT_SIZE_17,
    alignSelf: "center",
    color: Colors.PURPLE_VERY_LIGHT,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingBottom: 7,
  },
  animationEnabled: false,
  headerRight: () => <ProfileIcon style={styles.profile} />,
  headerBackImage: () => <BackIcon style={styles.backIcon} />,
};

const styles = StyleSheet.create({
  profile: { marginRight: 20, marginBottom: 7 },
  backIcon: { paddingTop: 8, marginLeft: 11, alignSelf: "flex-start" },
});
