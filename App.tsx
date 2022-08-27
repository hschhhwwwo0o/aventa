import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

/** Router */
import { Router } from "@router/index";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Router />
    </Fragment>
  );
}
