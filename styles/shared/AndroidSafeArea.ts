import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.bg,
  },
});
