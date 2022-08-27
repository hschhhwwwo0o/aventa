import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "@layouts/BGLayout";

/** Hooks */
import { useInitializeNavigationTabs } from "@hooks/navigation/useInitializeNavigationTabs";
import { useNavigationTabs } from "@hooks/navigation/useNavigationTabs";

function EmptyScreen({ navigation, route }: IScreen): JSX.Element {
  useInitializeNavigationTabs(navigation.navigate);
  useNavigationTabs(false);

  return (
    <Fragment>
      <BGLayout />
    </Fragment>
  );
}

export { EmptyScreen };
