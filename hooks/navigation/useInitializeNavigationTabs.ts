import { NavigationTabsStore } from "~/store/NavigationTabs";

function useInitializeNavigationTabs(navigate: INavigation["navigate"]): void {
  NavigationTabsStore.init(navigate);
}

export { useInitializeNavigationTabs };
