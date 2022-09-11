import { Fragment } from "react";
import { View } from "react-native";

/** Localization */
import { i18n } from "~/localization/index";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { TapForContinueLayout } from "~/layouts/TapForContinueLayout";

/** Components */
import { TheHeader } from "~/components/global/TheHeader";
import { TextXXL } from "~/components/text/TextXXL";
import { TextLG } from "~/components/text/TextLG";

function WelcomeConceptScreen({ navigation, route }: IScreen): JSX.Element {
  return (
    <Fragment>
      <BGLayout type="A3">
        <TheHeader isBack />
        <TapForContinueLayout nextScreen="Welcome/Meet" styleOptions={{ withTopPadding: true, withTapHint: true }}>
          <View>
            <TextXXL center>{i18n.t("Screens.Welcome.Concept['The concept']")}</TextXXL>
          </View>
          <View style={{ marginTop: 8 }}>
            <TextLG>{i18n.t("Screens.Welcome.Concept['Grow a garden from the']")}</TextLG>
          </View>
        </TapForContinueLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeConceptScreen };
