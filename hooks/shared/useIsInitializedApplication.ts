import { useEffect, useState } from "react";

/** Utils */
import { initializeFlagStorage } from "~/utils/initialize/initializeFlagStorage";

/**
 * Detecting the first login to the application
 *
 * The function searches the local storage for the flag
 * responsible for initialization.
 *
 * The flag is necessary to redirect a new user to the
 * welcome screens
 */
function useIsInitializedApplication(): boolean | "loading" {
  const [isInitialize, setIsInitialize] = useState<boolean | "loading">("loading");

  useEffect(function (): void {
    (async function detectIsInitializeFlag(): Promise<void> {
      try {
        const storedFlag: boolean = await initializeFlagStorage.get();
        setIsInitialize(storedFlag);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return isInitialize;
}

export { useIsInitializedApplication };
