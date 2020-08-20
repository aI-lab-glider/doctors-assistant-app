import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from "../assets/fonts/selection.json";
import icoMoonAssetId from "../assets/fonts/icomoon.ttf";

const IcoMoonIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "FontName",
  icoMoonAssetId
);

export default IcoMoonIcon;
