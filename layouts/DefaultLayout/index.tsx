import { Fragment, ReactNode } from "react";

/** Native Elements */
import { View } from "react-native";

/** Styles */
import styles from "./styles";

interface IDefaultLayout {
  children?: ReactNode;
}

function DefaultLayout({ children }: IDefaultLayout): JSX.Element {
  return (
    <Fragment>
      <View style={styles.container}>{children}</View>
    </Fragment>
  );
}

export { DefaultLayout };
