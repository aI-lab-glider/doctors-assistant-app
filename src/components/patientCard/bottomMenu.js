import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";
import ButtonWithLabel from "./ButtonWithLabel";

const BottomMenu = () => {
  const onButtonPressed = () => {};

  return (
    <View style={styles.iconContainer}>
      <ButtonWithLabel
        label="Historia"
        onPress={onButtonPressed}
        icon="history"
        size={44}
      />
      <ButtonWithLabel
        label="Nowe badanie"
        onPress={onButtonPressed}
        icon="new_examination"
        size={44}
        color={Colors.GREEN}
      />
      <ButtonWithLabel
        label="Wyniki"
        onPress={onButtonPressed}
        icon="results"
        size={44}
      />
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
});

export default BottomMenu;
