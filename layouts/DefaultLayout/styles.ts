import { StyleSheet } from "react-native";
import { HORIZONTAL_LAYOUT_PADDING, VERTICAL_LAYOUT_PADDING } from "~/styles/constants/sizes";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_LAYOUT_PADDING,
    paddingTop: VERTICAL_LAYOUT_PADDING / 2,
  },
});
