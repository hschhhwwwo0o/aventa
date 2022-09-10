import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

function TextSM({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <Text style={styles.textSM}>{children}</Text>
    </Fragment>
  );
}

export { TextSM };
