import { Fragment } from "react";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { TapForContinueLayout } from "~/layouts/TapForContinueLayout";

/** Components */
import { TheHeader } from "~/components/ui/TheHeader";

function WelcomeMeetScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A">
        <TheHeader isBack />
        <TapForContinueLayout
          nextScreen="Welcome/AddGoal"
          styleOptions={{ withTapHint: false, withTopPadding: true }}
        ></TapForContinueLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeMeetScreen };
