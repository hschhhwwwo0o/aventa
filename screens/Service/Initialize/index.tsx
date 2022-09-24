import { useEffect } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";

/** Hooks */
import { useInitializeNavigationTabs } from "~/hooks/navigation/useInitializeNavigationTabs";
import { useIsInitializedApplication } from "~/hooks/shared/useIsInitializedApplication";
import { useNavigationTabs } from "~/hooks/navigation/useNavigationTabs";

/**
 * The screen is the second stage of initialize the application
 *
 * Note that this screen is the second step in loading the
 * application. The 1nd stage of loading
 * takes place in `App.tsx`
 */
function InitializeScreen({ navigation, route }: IScreen): JSX.Element {
  /**
   * Detecting the first login to the application
   *
   * The function searches the local storage for the flag
   * responsible for initialization.
   *
   * The flag is necessary to navigate a new user to the
   * welcome screens
   */
  const isInitializedApplication: boolean | "loading" = useIsInitializedApplication();

  /** Initialize navigation tabs */
  useInitializeNavigationTabs(navigation.navigate);

  /** Hide navigation tabs */
  useNavigationTabs(false);

  useEffect(
    function navigateToApplication(): void {
      switch (isInitializedApplication) {
        case "loading":
          break;

        case true:
          navigation.navigate("Main/Home");
          break;

        case false:
          navigation.navigate("Welcome/Initial");
          break;

        default:
          break;
      }
    },
    [isInitializedApplication]
  );

  return <BGLayout />;
}

export { InitializeScreen };
