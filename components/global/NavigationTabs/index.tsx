import { Fragment } from "react";

/** Elements */
import { Text, View } from "react-native";

/** Global store */
import { observer } from "mobx-react-lite";
import { NavigationTabsStore } from "~/store/NavigationTabs";

function NavigationTabs(): JSX.Element {
  return (
    <Fragment>
      {NavigationTabsStore.isVisible && (
        <Fragment>
          <View style={{ position: "absolute", left: 50, right: 50, bottom: 39 }}>
            <View></View>
          </View>
        </Fragment>
      )}
    </Fragment>
  );
}

export default observer(NavigationTabs);
