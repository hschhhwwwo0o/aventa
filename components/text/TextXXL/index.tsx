import React, { Fragment, ReactNode } from "react";
import { Text } from "react-native";

/** Styles */
import styles from "./styles";

interface IText {
  children: ReactNode;
  center?: boolean;
}

function TextXXL({ children, center = false }: IText): JSX.Element {
  return (
    <Fragment>
      <Text style={[styles.textXXL, center === true && { textAlign: "center" }]}>{children}</Text>
    </Fragment>
  );
}

export { TextXXL };
