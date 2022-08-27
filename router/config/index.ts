import { IRoute } from "./types";

/** Screens */
import { InitializeScreen } from "@screens/Initialize";
import { MainScreen } from "@screens/Main";
import { AboutScreen } from "@screens/About";

const INITIAL_ROUTE_NAME: string = "InitializeScreen";

const routes: IRoute[] = [
  { name: "InitializeScreen", component: InitializeScreen },
  { name: "MainScreen", component: MainScreen },
  { name: "About", component: AboutScreen },
];

const initialRoute: IRoute =
  routes.find(function findInitialScreen(route) {
    return route.name === INITIAL_ROUTE_NAME;
  }) || routes[0];

export { routes, initialRoute, INITIAL_ROUTE_NAME };
