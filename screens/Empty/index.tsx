import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "@layouts/BGLayout";

/** Hooks */
import { useNavigationTabs } from "@hooks/navigation/useNavigationTabs";

function EmptyScreen(): JSX.Element {
  useNavigationTabs(false);

  return (
    <Fragment>
      <BGLayout></BGLayout>
    </Fragment>
  );
}

export { EmptyScreen };
