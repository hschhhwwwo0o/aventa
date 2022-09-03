import AsyncStorage from "@react-native-async-storage/async-storage";

/** Constants */
import { IS_INITIALIZE_STORAGE_KEY } from "@constants/shared/initialize";

export async function getIsInitializeFlagInStorage(): Promise<boolean> {
  try {
    const storageIsInitializeFlag: string | null = await AsyncStorage.getItem(IS_INITIALIZE_STORAGE_KEY);
    let isInitialize: boolean = Boolean(storageIsInitializeFlag);
    return isInitialize;
  } catch (error) {
    console.error(error);
    return false;
  }
}
