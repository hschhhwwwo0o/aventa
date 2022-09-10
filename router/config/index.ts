import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { IRoute, IRoutesGroup } from "./types";

/** Service screens */
import { InitializeScreen } from "~/screens/Service/Initialize";
import { LoadingScreen } from "~/screens/Service/Loading";

/** Main screens */
import { HomeScreen } from "~/screens/Main/Home";
import { AboutScreen } from "~/screens/Main/About";
import { TransactionsScreen } from "~/screens/Main/Transactions";
import { AddGoalScreen } from "~/screens/Main/AddGoal";

/** Welcome screens */
import { WelcomeInitialScreen } from "~/screens/Welcome/Initial";
import { WelcomeConceptScreen } from "~/screens/Welcome/Concept";
import { WelcomeMeetScreen } from "~/screens/Welcome/Meet";
import { WelcomeAddGoalScreen } from "~/screens/Welcome/AddGoal";

/**
 * Application screens groups
 * @see https://reactnavigation.org/docs/group/
 */
const routesGroups: IRoutesGroup[] = [
  {
    name: "Service",
    routes: [
      { name: "Initialize", component: InitializeScreen },
      { name: "Loading", component: LoadingScreen },
    ],
  },
  {
    name: "Welcome",
    routes: [
      { name: "Initial", component: WelcomeInitialScreen },
      { name: "Concept", component: WelcomeConceptScreen },
      { name: "Meet", component: WelcomeMeetScreen },
      { name: "AddGoal", component: WelcomeAddGoalScreen },
    ],
  },
  {
    name: "Main",
    routes: [
      { name: "Home", component: HomeScreen },
      { name: "Transactions", component: TransactionsScreen },
      { name: "AddGoal", component: AddGoalScreen },
      { name: "About", component: AboutScreen },
    ],
  },
];

/** Shared screen options */
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

/** Application preloading screen name */
const INITIAL_ROUTE_NAME: string = "Service/Initialize";

/** Application preloading screen */
const initialRoute: IRoute =
  routesGroups[0].routes.find(function findInitialScreen(route) {
    return route.name === INITIAL_ROUTE_NAME;
  }) || routesGroups[0].routes[0];

export { routesGroups, initialRoute, INITIAL_ROUTE_NAME, screenOptions };
