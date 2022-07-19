import { moderateScale } from "react-native-size-matters";

const colors = {
  primary: "#C61515",
  accent: "#FFFFFF",
  text: "#000000",
  white: "#FFFFFF",
  black: "#000000",
  grey: "#F6F6F6",
  greyCard: "#F7F7F7",
  disabled: "#E3E3E3",
  disabledText: "#B1B1B1",
};

const spacing = {
  xs: moderateScale(4),
  s: moderateScale(8),
  m: moderateScale(16),
  l: moderateScale(24),
  xl: moderateScale(40),
};

const fontSizes = {
  small: moderateScale(10),
  regular: moderateScale(12),
  medium: moderateScale(14),
  large: moderateScale(18),
  heading: moderateScale(22),
};

const theme = { colors, spacing, fontSizes };

export default theme;
