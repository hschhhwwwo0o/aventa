import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

function TextBase({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <Text style={styles.textBase}>{children}</Text>
    </Fragment>
  );
}

export { TextBase };
