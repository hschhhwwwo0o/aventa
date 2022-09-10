import React, { Fragment } from "react";
import { TouchableOpacity, View } from "react-native";

/** Styles */
import styles from "./styles";

/** Components */
import { TextLG } from "~/components/text/TextLG";

/** Local components */
import { _NavigateBack } from "./components/_NavigateBack";

interface ITheHeaderProps {
  isBack?: boolean;
}

function TheHeader({ isBack = false }: ITheHeaderProps): JSX.Element {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.side}>{isBack && <_NavigateBack />}</View>
        <View style={{ marginTop: -5 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <TextLG>Aventa</TextLG>
          </TouchableOpacity>
        </View>
        <View style={styles.side}></View>
      </View>
    </Fragment>
  );
}

export { TheHeader };
