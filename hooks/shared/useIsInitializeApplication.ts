import { useEffect, useState } from "react";

/** Utils */
import { getIsInitializeFlagInStorage } from "~/utils/initialize/getIsInitializeFlagInStorage";

function useIsInitializeApplication(): boolean | "loading" {
  const [isInitialize, setIsInitialize] = useState<boolean | "loading">("loading");

  useEffect(function (): void {
    (async function detectIsInitializeFlag(): Promise<void> {
      try {
        const storedFlag: boolean = await getIsInitializeFlagInStorage();
        setIsInitialize(storedFlag);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return isInitialize;
}

export { useIsInitializeApplication };
