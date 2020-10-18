import * as React from "react";
import { ViewPropTypes } from "react-native";
import { Colors } from "../../constants/styles";
import FontForgeIcon from "./FontForgeIcon";

const ProfileIcon = ({ style }) => {
  return (
    <FontForgeIcon
      name="doctor_profile"
      size={30}
      color={Colors.PURPLE_VERY_LIGHT}
      style={style}
    />
  );
};

export default ProfileIcon;

ProfileIcon.defaultProps = {
  style: {},
};

ProfileIcon.propTypes = {
  style: ViewPropTypes.style,
};
