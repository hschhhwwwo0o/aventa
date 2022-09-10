import { Fragment } from "react";

/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** Router config */
import { initialRoute, INITIAL_ROUTE_NAME, routesGroups, screenOptions } from "./config";

function Router(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME || initialRoute.name}>
          {routesGroups.map(function renderStackGroups(routeGroup): JSX.Element {
            return (
              /**
               * Generate screens group with shared options.
               * @see https://reactnavigation.org/docs/group/
               */
              <Stack.Group screenOptions={screenOptions} key={routeGroup.name}>
                {routeGroup.routes.map(function renderRoutes(route): JSX.Element {
                  return (
                    /** Generate screens */
                    <Stack.Screen
                      key={route.name}
                      /**
                       * Automatic generation of screen names based on group
                       * and screen name. Check `~/router/config`
                       *
                       * Example: `Main/Transactions`.
                       * Main - Group name, Transactions - Screen name
                       */
                      name={`${routeGroup.name}/${route.name}`}
                      component={route.component}
                    />
                  );
                })}
              </Stack.Group>
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export { Router };
