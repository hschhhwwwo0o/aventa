import { Dimensions, StyleSheet } from "react-native";
import { HORIZONTAL_LAYOUT_PADDING, VERTICAL_LAYOUT_PADDING } from "~/styles/constants/sizes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPressable: {
    flex: 1,
  },
  continue: {
    position: "absolute",
    bottom: VERTICAL_LAYOUT_PADDING,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topPadding: {
    height: Dimensions.get("window").height / 5.5,
  },
  body: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_LAYOUT_PADDING,
  },
});
