import { Fragment } from "react";

/** Elements */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

/** Global components */
import { NavigationTabs } from "~/components/global/NavigationTabs";

/** Router */
import { Router } from "~/router/index";

/** Hooks */
import { useLoadFonts } from "~/hooks/shared/useLoadFonts";

/** Styles */
import AndroidSafeArea from "~/styles/shared/AndroidSafeArea";
import { COLORS } from "./styles/constants/colors";

/** SQL */
import { initializeSQLiteTables } from "~/sql/initializeTables.sqlite";

/**
 * The global component `App` is used for the
 * first stage of loading an application.
 *
 * Note that this screen is the first step in loading the
 * application. The 2nd stage of loading
 * takes place in `@screens/Initialize`
 */
export default function App(): JSX.Element {
  /**
   * Initialization of database tables when the application
   * is run for the first time
   */
  initializeSQLiteTables();

  /** Preparing and downloading local fonts */
  const isLoadedFonts: boolean = useLoadFonts();

  if (!isLoadedFonts) {
    return <Fragment />;
  } else {
    return (
      <Fragment>
        <StatusBar backgroundColor={COLORS.bg} style="light" />
        {
          /** Screen body */
          <Fragment>
            <SafeAreaView style={AndroidSafeArea.container}>
              <Router />
            </SafeAreaView>
          </Fragment>
        }
        {
          /** Navigation bar for switching tabs */
          <Fragment>
            <NavigationTabs />
          </Fragment>
        }
      </Fragment>
    );
  }
}
