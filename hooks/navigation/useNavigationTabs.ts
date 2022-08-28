import { useEffect } from "react";

/** Global store */
import { NavigationTabsStore } from "@store/NavigationTabs";

function useNavigationTabs(isNavigate: boolean): void {
  useEffect(() => {
    NavigationTabsStore.setIsVisible(isNavigate);
  }, []);
}

export { useNavigationTabs };
