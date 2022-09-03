import { StyleSheet } from "react-native";

/** Colors */
import { COLORS } from "~/styles/constants/colors";

export default StyleSheet.create({
  containerEmpty: { backgroundColor: COLORS.bg, flex: 1 },
  containerA: { backgroundColor: COLORS.bg, flex: 1 },
  containerB: { backgroundColor: COLORS.bg, flex: 1 },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
