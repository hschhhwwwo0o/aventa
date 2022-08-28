import { Fragment, ReactNode } from "react";

/** Native Elements */
import { View } from "react-native";

interface IDefaultLayout {
  children?: ReactNode;
}

function DefaultLayout({ children }: IDefaultLayout): JSX.Element {
  return (
    <Fragment>
      <View>{children}</View>
    </Fragment>
  );
}

export { DefaultLayout };
