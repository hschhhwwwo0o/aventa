import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";

function LoadingScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A"></BGLayout>
    </Fragment>
  );
}

export { LoadingScreen };
