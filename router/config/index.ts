import { IRoute } from "./types";

/** Screens */
import { MainScreen } from "@screens/Main";
import { AboutScreen } from "@screens/About";

const routes: IRoute[] = [
  { name: "MainScreen", component: MainScreen },
  { name: "About", component: AboutScreen },
];

export { routes };
