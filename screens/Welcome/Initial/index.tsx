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

function WelcomeInitialScreen({ navigation, route }: IScreen): JSX.Element {
  const { translate } = i18nClient({
    prefix: "Screens.Welcome.Initial",
  });

  return (
    <Fragment>
      <BGLayout type="A2">
        <TheHeader />
        <TapForContinueLayout nextScreen="Welcome/Concept" styleOptions={{ withTopPadding: true, withTapHint: true }}>
          <View>
            <TextXXL center>{translate("Welcome")}!</TextXXL>
          </View>
          <View style={{ marginTop: 8 }}>
            <TextLG>{translate("The app is designed")}</TextLG>
          </View>
        </TapForContinueLayout>
      </BGLayout>
    </Fragment>
  );
}

export { WelcomeInitialScreen };
