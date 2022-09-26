import { Fragment } from "react";
import { View } from "react-native";

/** Localization */
import { i18nClient } from "~/localization/client";

/** Layouts */
import { BGLayout } from "~/layouts/BGLayout";
import { TapForContinueLayout } from "~/layouts/TapForContinueLayout";

/** Components */
import { TheHeader } from "~/components/ui/TheHeader";
import { TextXXL } from "~/components/text/TextXXL";
import { TextLG } from "~/components/text/TextLG";

function WelcomeConceptScreen({ navigation, route }: IScreen): JSX.Element {
  const { translate } = i18nClient({
    prefix: "Screens.Welcome.Concept",
  });

  return (
    <Fragment>
      <BGLayout type="A3">
        <TheHeader isBack />
        <TapForContinueLayout nextScreen="Welcome/Meet" styleOptions={{ withTopPadding: true, withTapHint: true }}>
          <View>
            <TextXXL center>{translate("The concept")}</TextXXL>
          </View>
          <View style={{ marginTop: 8 }}>
            <TextLG>{translate("Grow a garden from the")}</TextLG>
          </View>
        </TapForContinueLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeConceptScreen };
