import { Fragment } from "react";
import { View } from "react-native";

/** Localization */
import { i18n } from "~/localization/index";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { TapForContinueLayout } from "~/layouts/TapForContinueLayout";

/** Components */
import { TextXXL } from "~/components/text/TextXXL";
import { TextLG } from "~/components/text/TextLG";

function WelcomeInitialScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A2">
        <TapForContinueLayout nextScreen="Welcome/Concept" styleOptions={{ withTopPadding: true }}>
          <View>
            <TextXXL center>{i18n.t("Screens.Welcome.Initial.Welcome")}!</TextXXL>
          </View>
          <View style={{ marginTop: 8 }}>
            <TextLG>{i18n.t("Screens.Welcome.Initial['The app is designed']")}</TextLG>
          </View>
        </TapForContinueLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeInitialScreen };
