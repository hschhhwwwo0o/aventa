import { Fragment } from "react";

/** Elements */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

/** Global components */
import NavigationTabs from "@components/global/NavigationTabs";

/** Router */
import { Router } from "@router/index";

/** Hooks */
import { useLoadFonts } from "@hooks/shared/useLoadFonts";

/** Styles */
import AndroidSafeArea from "@styles/AndroidSafeArea";

/**
 * The main component of the application
 * configuration.
 */
export default function App(): JSX.Element {
  /** Loading fonts */
  const isLoadedFonts: boolean = useLoadFonts();

  if (!isLoadedFonts) {
    return <Fragment />;
  } else {
    return (
      <Fragment>
        <StatusBar style="auto" />
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
