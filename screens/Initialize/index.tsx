import { Fragment, useEffect } from "react";

/** Layouts */
import { BGLayout } from "@layouts/BGLayout";

/** Hooks */
import { useInitializeNavigationTabs } from "@hooks/navigation/useInitializeNavigationTabs";
import { useNavigationTabs } from "@hooks/navigation/useNavigationTabs";
import { useIsInitializeApplication } from "@hooks/shared/useIsInitializeApplication";

/**
 * The screen is used to initialize
 * the navigation
 * and application
 */
function InitializeScreen({ navigation, route }: IScreen): JSX.Element {
  /** Initialize navigate function */
  useInitializeNavigationTabs(navigation.navigate);

  /** Hide navigation tabs */
  useNavigationTabs(false);

  /** Detect initilize application flag */
  const isInitialize: boolean | "loading" = useIsInitializeApplication();

  useEffect(
    function navigateToApplication(): void {
      if (isInitialize === true) {
        navigation.navigate("MainScreen");
      }
      if (isInitialize === false) {
        navigation.navigate("Welcome/InitialScreen");
      }
    },
    [isInitialize]
  );

  return (
    <Fragment>
      <BGLayout />
    </Fragment>
  );
}

export { InitializeScreen };
