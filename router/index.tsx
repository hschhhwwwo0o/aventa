import { Fragment } from "react";

/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** Router config */
import { initialRoute, INITIAL_ROUTE_NAME, routes } from "./config";

function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
          {routes.map(function initializeRoutes(route): JSX.Element {
            return (
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                key={route.name}
                name={route.name}
                component={route.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export { Router };
