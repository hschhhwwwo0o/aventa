import { Fragment, ReactNode } from "react";

/** Native Elements */
import { View } from "react-native";

interface IMetaLayout {
  children?: ReactNode;
}

function MetaLayout({ children }: IMetaLayout): JSX.Element {
  return (
    <Fragment>
      <View>{children}</View>
    </Fragment>
  );
}

export { MetaLayout };
