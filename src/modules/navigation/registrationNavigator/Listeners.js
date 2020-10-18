import { Alert } from "react-native";

export default ({ navigation }) => ({
  beforeRemove: (e) => {
    const navigationRouteName = "PatientsList";
    if (e.data.action.payload.name !== navigationRouteName) {
      e.preventDefault();

      Alert.alert(
        "",
        "Czy na pewno chcesz przerwać wywiad i powrócić do listy pacjentów?",
        [
          {
            text: "Kontynuuj",
            style: "cancel",
            onPress: () => {},
          },
          {
            text: "Przerwij",
            style: "destructive",
            onPress: () => {
              navigation.navigate(navigationRouteName);
            },
          },
        ]
      );
    } else navigation.dispatch(e.data.action);
  },
});
