import React, { Fragment } from "react";
import { TouchableOpacity, View } from "react-native";

/** Styles */
import styles from "./styles";

/** Components */
import { TextLogo } from "~/components/ui/TextLogo";

/** Local components */
import { _NavigateBack } from "./components/_NavigateBack";

interface ITheHeaderProps {
  isBack?: boolean;
}

function TheHeader({ isBack = false }: ITheHeaderProps): JSX.Element {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.side}>
          <Fragment>{isBack && <_NavigateBack />}</Fragment>
        </View>
        <View style={{ marginTop: -5, zIndex: 100 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <TextLogo />
          </TouchableOpacity>
        </View>
        <View style={styles.side}>
          <Fragment></Fragment>
        </View>
      </View>
    </Fragment>
  );
}

export { TheHeader };
