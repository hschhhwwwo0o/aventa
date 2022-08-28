/** Hooks */
import { useFonts } from "expo-font";

function useLoadFonts(): boolean {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("@assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Bold": require("@assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("@assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("@assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("@assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("@assets/fonts/Poppins/Poppins-Thin.ttf"),
  });

  return fontsLoaded;
}

export { useLoadFonts };
