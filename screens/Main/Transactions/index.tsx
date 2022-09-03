import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { DefaultLayout } from "~/layouts/DefaultLayout";

/** Hooks */
import { useNavigationTabs } from "~/hooks/navigation/useNavigationTabs";

function TransactionsScreen({ navigation, route }: IScreen): JSX.Element {
  useNavigationTabs(true);

  return (
    <Fragment>
      <BGLayout type="B">
        <DefaultLayout></DefaultLayout>
      </BGLayout>
    </Fragment>
  );
}

export { TransactionsScreen };
