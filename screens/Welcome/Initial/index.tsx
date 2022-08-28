import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "@layouts/BGLayout";
import { MetaLayout } from "@layouts/MetaLayout";

function WelcomeInitialScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A">
        <MetaLayout></MetaLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeInitialScreen };