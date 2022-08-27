import { Fragment } from "react";

/** Elements */
import { Text, View } from "react-native";

/** Global store */
import { observer } from "mobx-react-lite";
import { NavigationTabsStore } from "@store/NavigationTabs";

function NavigationTabs() {
  return (
    <Fragment>
      <View style={{ position: "absolute", left: 50, right: 50, bottom: 39 }}>
        <Text style={{ color: "white", textAlign: "center" }}>{String(NavigationTabsStore.isVisible)}</Text>
      </View>
    </Fragment>
  );
}

export default observer(NavigationTabs);
