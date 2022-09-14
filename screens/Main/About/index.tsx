import { Fragment } from "react";

/** Hooks */
import { useNavigationTabs } from "~/hooks/navigation/useNavigationTabs";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { DefaultLayout } from "~/layouts/DefaultLayout";

/** Components */
import { TheHeader } from "~/components/ui/TheHeader";

function AboutScreen({ navigation, route }: IScreen): JSX.Element {
  useNavigationTabs(true);

  return (
    <Fragment>
      <BGLayout type="B">
        <TheHeader isBack />
        <DefaultLayout></DefaultLayout>
      </BGLayout>
    </Fragment>
  );
}

export { AboutScreen };
