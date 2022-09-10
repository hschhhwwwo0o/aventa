import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

function TextXXL({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <Text style={styles.textXXL}>{children}</Text>
    </Fragment>
  );
}

export { TextXXL };
