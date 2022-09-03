import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { IRoute } from "./types";

/** Screens */
import { InitializeScreen } from "~/screens/Service/Initialize";
import { LoadingScreen } from "~/screens/Service/Loading";

import { HomeScreen } from "~/screens/Main/Home";
import { AboutScreen } from "~/screens/Main/About";
import { TransactionsScreen } from "~/screens/Main/Transactions";
import { AddGoalScreen } from "~/screens/Main/AddGoal";

import { WelcomeInitialScreen } from "~/screens/Welcome/Initial";
import { WelcomeConceptScreen } from "~/screens/Welcome/Concept";
import { WelcomeMeetScreen } from "~/screens/Welcome/Meet";
import { WelcomeAddGoalScreen } from "~/screens/Welcome/AddGoal";

/** Application routes */
const routes: IRoute[] = [
  /** Init screen */
  { name: "Service/Initialize", component: InitializeScreen },
  { name: "Service/Loading", component: LoadingScreen },

  /** Welcome screens */
  { name: "Welcome/Initial", component: WelcomeInitialScreen },
  { name: "Welcome/Concept", component: WelcomeConceptScreen },
  { name: "Welcome/Meet", component: WelcomeMeetScreen },
  { name: "Welcome/AddGoal", component: WelcomeAddGoalScreen },

  /** Main app screens */
  { name: "Main/Home", component: HomeScreen },
  { name: "Main/Transactions", component: TransactionsScreen },
  { name: "Main/AddGoal", component: AddGoalScreen },
  { name: "Main/About", component: AboutScreen },
];

/** Shared screen options */
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

/** Application preloading screen name */
const INITIAL_ROUTE_NAME: string = "Service/Initialize";

/** Application preloading screen */
const initialRoute: IRoute =
  routes.find(function findInitialScreen(route) {
    return route.name === INITIAL_ROUTE_NAME;
  }) || routes[0];

export { routes, initialRoute, INITIAL_ROUTE_NAME, screenOptions };
