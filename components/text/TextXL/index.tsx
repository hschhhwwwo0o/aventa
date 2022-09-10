import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

function TextXL({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <Text style={styles.textXL}>{children}</Text>
    </Fragment>
  );
}

export { TextXL };
