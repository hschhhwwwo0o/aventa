import { IRoute } from "./types";

/** Screens */
import { InitializeScreen } from "@screens/Initialize";
import { MainScreen } from "@screens/Main";
import { AboutScreen } from "@screens/About";
import { LoadingScreen } from "@screens/Loading";
import { TransactionsScreen } from "@screens/Transactions";
import { AddGoalScreen } from "@screens/AddGoal";
import { WelcomeInitialScreen } from "@screens/Welcome/Initial";
import { WelcomeConceptScreen } from "@screens/Welcome/Concept";
import { WelcomeMeetScreen } from "@screens/Welcome/Meet";
import { WelcomeAddGoalScreen } from "@screens/Welcome/AddGoal";

/** Applization routes */
const routes: IRoute[] = [
  /** Init screen */
  { name: "InitializeScreen", component: InitializeScreen },

  /** Main screens */
  { name: "MainScreen", component: MainScreen },
  { name: "LoadingScreen", component: LoadingScreen },
  { name: "TransactionsScreen", component: TransactionsScreen },
  { name: "AddGoalScreen", component: AddGoalScreen },
  { name: "AboutScreen", component: AboutScreen },

  /** Welcome screens */
  { name: "WelcomeInitialScreen", component: WelcomeInitialScreen },
  { name: "WelcomeConceptScreen", component: WelcomeConceptScreen },
  { name: "WelcomeMeetScreen", component: WelcomeMeetScreen },
  { name: "WelcomeAddGoalScreen", component: WelcomeAddGoalScreen },
];

/** Application preloading screen name */
const INITIAL_ROUTE_NAME: string = "InitializeScreen";

/** Application preloading screen */
const initialRoute: IRoute =
  routes.find(function findInitialScreen(route) {
    return route.name === INITIAL_ROUTE_NAME;
  }) || routes[0];

export { routes, initialRoute, INITIAL_ROUTE_NAME };
