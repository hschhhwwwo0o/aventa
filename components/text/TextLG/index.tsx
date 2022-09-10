import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

function TextLG({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <Text style={styles.textLG}>{children}</Text>
    </Fragment>
  );
}

export { TextLG };
