import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { MetaLayout } from "~/layouts/MetaLayout";

function WelcomeConceptScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A2">
        <MetaLayout></MetaLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeConceptScreen };
