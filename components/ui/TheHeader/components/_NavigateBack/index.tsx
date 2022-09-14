import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native";

/** Navigation */
import { useNavigation } from "@react-navigation/native";

/** Icons */
import { BackArrow } from "~/icons/BackArrow";
import styles from "./styles";

function _NavigateBack(): JSX.Element {
  const navigation = useNavigation();

  return (
    <Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={function goBack(): void {
          navigation.goBack();
        }}
      >
        <BackArrow />
      </TouchableOpacity>
    </Fragment>
  );
}

export { _NavigateBack };
