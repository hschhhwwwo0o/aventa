import AsyncStorage from "@react-native-async-storage/async-storage";

/** Constants */
import { IS_INITIALIZE_STORAGE_KEY } from "~/constants/shared/initialize";

export async function getIsInitializeFlagInStorage(): Promise<boolean> {
  try {
    const storageIsInitializeFlag: string | null = await AsyncStorage.getItem(IS_INITIALIZE_STORAGE_KEY);
    const isInitialize: boolean = Boolean(storageIsInitializeFlag);
    return isInitialize;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function setIsInitializeFlagInStorage(isInitialize: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(IS_INITIALIZE_STORAGE_KEY, String(isInitialize));
  } catch (error) {
    console.error(error);
  }
}

/**
 * Managing the flag responsible for initializing the
 * application
 */
export const initializeFlagStorageKeyClient = {
  get: getIsInitializeFlagInStorage,
  set: setIsInitializeFlagInStorage,
};
