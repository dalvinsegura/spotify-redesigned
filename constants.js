import { Dimensions } from "react-native";
import { scale } from "./src/utils/scaling";

export const Colors = {
  green: "#1db954",
  black: "#191414",
  white: "#FFFFFF",
};

export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FontSizes = {
  sm: scale(12),
  md: scale(16),
  lg: scale(28),
  xl: scale(40),
};

export const Layout = {
  window: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
};
