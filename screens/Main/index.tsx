import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "@layouts/BGLayout";

/** Hooks */
import { useNavigationTabs } from "@hooks/navigation/useNavigationTabs";

function MainScreen(): JSX.Element {
  useNavigationTabs(true);

  return (
    <Fragment>
      <BGLayout></BGLayout>
    </Fragment>
  );
}

export { MainScreen };
