import { useEffect } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";

/** Hooks */
import { useInitializeNavigationTabs } from "~/hooks/navigation/useInitializeNavigationTabs";
import { useNavigationTabs } from "~/hooks/navigation/useNavigationTabs";
import { useIsInitializeApplication } from "~/hooks/shared/useIsInitializeApplication";

/**
 * The screen is the second stage of loading the application
 *
 * The screen is used to initialize
 * the navigation and application.
 */
function InitializeScreen({ navigation, route }: IScreen): JSX.Element {
  /** Hide navigation tabs */
  useNavigationTabs(false);

  /** Initialize navigate function */
  useInitializeNavigationTabs(navigation.navigate);

  /** Detect initilize application flag */
  const isInitialize: boolean | "loading" = useIsInitializeApplication();

  useEffect(
    function navigateToApplication(): void {
      if (isInitialize === true) {
        navigation.navigate("Main/Home");
      }
      if (isInitialize === false) {
        navigation.navigate("Welcome/Initial");
      }
    },
    [isInitialize]
  );

  return <BGLayout />;
}

export { InitializeScreen };
