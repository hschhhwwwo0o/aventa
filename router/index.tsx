import { Fragment } from "react";

/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** Router config */
import { initialRoute, INITIAL_ROUTE_NAME, routes } from "./config";

function Router(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME || initialRoute.name}>
          {routes.map(function initializeRoutes(route): JSX.Element {
            return (
              <Stack.Screen options={screenOptions} key={route.name} name={route.name} component={route.component} />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export { Router };
