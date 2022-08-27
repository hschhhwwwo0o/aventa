import { Fragment, ReactNode } from "react";

/** Elements */
import { View } from "react-native";

/** Styles */
import styles from "./styles";

interface IBGLayoutProps {
  children?: ReactNode;
}

function BGLayout({ children }: IBGLayoutProps): JSX.Element {
  return (
    <Fragment>
      <View style={styles.container}>{children}</View>
    </Fragment>
  );
}

export { BGLayout };
