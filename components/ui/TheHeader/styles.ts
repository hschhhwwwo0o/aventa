import { StyleSheet } from "react-native";
import { HORIZONTAL_LAYOUT_PADDING, VERTICAL_LAYOUT_PADDING } from "~/styles/constants/sizes";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: VERTICAL_LAYOUT_PADDING,
    paddingHorizontal: HORIZONTAL_LAYOUT_PADDING,
  },
  side: {
    width: 35,
    height: 35,
  },
});
