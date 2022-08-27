import { Fragment } from "react";

/** Elements */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

/** Router */
import { Router } from "@router/index";

/** Styles */
import AndroidSafeArea from "@styles/AndroidSafeArea";

/** Global Components */
import NavigationTabs from "@components/global/NavigationTabs";

export default function App(): JSX.Element {
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
