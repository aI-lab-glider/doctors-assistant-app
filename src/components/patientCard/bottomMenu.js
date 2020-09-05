import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const BottomMenu = () => {
  const onButtonPressed = () => {};

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={onButtonPressed} style={styles.button}>
        <View style={styles.menuIcon}>
          <FontForgeIcon
            name="history"
            size={44}
            color={Colors.PINK_MEDIUM}
            style={styles.instaIcon}
          />
          <Text style={styles.instaText}>Historia</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onButtonPressed} style={styles.button}>
        <View style={styles.menuIcon}>
          <FontForgeIcon
            name="new_examination"
            size={44}
            color={Colors.GREEN}
            style={styles.instaIcon}
          />
          <Text style={[styles.instaText, { color: Colors.GREEN }]}>
            Nowe badanie
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onButtonPressed} style={styles.button}>
        <View style={styles.menuIcon}>
          <FontForgeIcon
            name="results"
            size={44}
            color={Colors.PINK}
            style={styles.instaIcon}
          />
          <Text style={styles.instaText}>Wyniki</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    flex: 1,
  },
  menuIcon: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  instaIcon: {
    alignSelf: "center",
  },
  instaText: {
    color: Colors.PINK,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "center",
    paddingTop: 5,
  },
});

export default BottomMenu;
