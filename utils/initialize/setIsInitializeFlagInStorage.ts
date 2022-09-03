import AsyncStorage from "@react-native-async-storage/async-storage";

/** Constants */
import { IS_INITIALIZE_STORAGE_KEY } from "~/constants/shared/initialize";

export async function setIsInitializeFlagInStorage(isInitialize: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(IS_INITIALIZE_STORAGE_KEY, String(isInitialize));
  } catch (error) {
    console.error(error);
  }
}
