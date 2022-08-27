import { useEffect, useState } from "react";

function useIsInitializeApplication(): boolean | "loading" {
  const [isInitialize, setIsInitialize] = useState<boolean | "loading">("loading");

  useEffect(function detectIsInitializeFlag(): void {
    setIsInitialize(true);
  });

  return isInitialize;
}

export { useIsInitializeApplication };
