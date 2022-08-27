import { Fragment } from "react";

/** Elements */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

/** Router */
import { Router } from "@router/index";

/** Styles */
import AndroidSafeArea from "@styles/AndroidSafeArea";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <SafeAreaView style={AndroidSafeArea.container}>
        <Router />
      </SafeAreaView>
    </Fragment>
  );
}
