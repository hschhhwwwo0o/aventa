import React, { Fragment, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

/** Localization */
import { i18n } from "~/localization/index";

/** Navigation */
import { useNavigation } from "@react-navigation/native";

/** Styles */
import styles from "./styles";

/** Components */
import { TheHeader } from "~/components/global/TheHeader";
import { TextXS } from "~/components/text/TextXS";

interface ITapForContinueLayoutProps {
  children?: ReactNode;
  headerOptions?: {
    isBack?: boolean;
  };
  nextScreen?: string;
  styleOptions?: {
    withTopPadding?: boolean;
  };
}

function TapForContinueLayout({
  children = <Fragment />,
  headerOptions = { isBack: false },
  styleOptions = { withTopPadding: false },
  nextScreen = "",
}: ITapForContinueLayoutProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={styles.container}>
        <TheHeader isBack={headerOptions.isBack} />
        <TouchableOpacity
          onPress={function navigateTo(): void {
            navigation.navigate(nextScreen);
          }}
          style={styles.containerPressable}
          activeOpacity={0.8}
        >
          {styleOptions.withTopPadding === true && <View style={styles.topPadding}></View>}
          <View style={styles.body}>{children}</View>
          <View style={styles.continue}>
            <TextXS>{i18n.t("Global.Shared['Tap the screen to continue']")}</TextXS>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export { TapForContinueLayout };
