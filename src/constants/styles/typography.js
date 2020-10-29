import { boxShadow, scaleFont } from "./mixins";

// FONT FAMILY
export const FONT_FAMILY_LIGHT = "OpenSans-Light";
export const FONT_FAMILY_REGULAR = "OpenSans-Regular";
export const FONT_FAMILY_BOLD = "OpenSans-Bold";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_LIGHT = "200";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_17 = scaleFont(17);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// BOX SHADOW
export const BOX_SHADOW = boxShadow();

// CORNERS
export const BORDER_RADIUS = 20;
export const BORDER_RADIUS_SLIGHT = 10;

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_LIGHT = {
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
