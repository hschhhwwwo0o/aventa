import { Fragment } from "react";

/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** Routes */
import { initialRoute, routes } from "./config";

function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute.name}>
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
