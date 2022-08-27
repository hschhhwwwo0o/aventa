import { IRoute } from "./types";

/** Screens */
import { MainScreen } from "@screens/Main";
import { AboutScreen } from "@screens/About";
import { EmptyScreen } from "@screens/Empty";

const INITIAL_ROUTE_NAME = "EmptyScreen";

const routes: IRoute[] = [
  { name: "EmptyScreen", component: EmptyScreen },
  { name: "MainScreen", component: MainScreen },
  { name: "About", component: AboutScreen },
];

const initialRoute =
  routes.find(function findInitialScreen(route) {
    return route.name === INITIAL_ROUTE_NAME;
  }) || routes[0];

export { routes, initialRoute, INITIAL_ROUTE_NAME };
