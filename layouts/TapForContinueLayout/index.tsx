import React, { Fragment, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

/** Localization */
import { i18nClient } from "~/localization/client";

/** Navigation */
import { useNavigation } from "@react-navigation/native";

/** Styles */
import styles from "./styles";

/** Components */
import { TextXS } from "~/components/text/TextXS";

interface ITapForContinueLayoutProps {
  children?: ReactNode;
  nextScreen?: string;
  styleOptions?: {
    withTopPadding?: boolean;
    withTapHint?: boolean;
  };
}

function TapForContinueLayout({
  children = <Fragment />,
  styleOptions = { withTopPadding: false, withTapHint: true },
  nextScreen = "",
}: ITapForContinueLayoutProps): JSX.Element {
  const { translate } = i18nClient({
    prefix: "Global.Shared",
  });

  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={function navigateTo(): void {
            /** @ts-ignore */
            navigation.navigate(nextScreen);
          }}
          style={styles.containerPressable}
          activeOpacity={0.8}
        >
          {styleOptions.withTopPadding === true && <View style={styles.topPadding} />}
          <View style={styles.body}>{children}</View>
          {styleOptions.withTapHint === true && (
            <View style={styles.continue}>
              <TextXS>{translate("Tap the screen to continue")}</TextXS>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export { TapForContinueLayout };
