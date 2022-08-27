import { Fragment, ReactNode } from "react";

/** Elements */
import { ImageBackground, View } from "react-native";

/** Styles */
import styles from "./styles";

/** Images */
import { BackgroundTypeA, BackgroundTypeB } from "@constants/backgrounds";

interface IBGLayoutProps {
  children?: ReactNode;
  type?: "A" | "B" | "Empty";
}

function BGLayout({ children, type = "Empty" }: IBGLayoutProps): JSX.Element {
  return (
    <Fragment>
      {type === "Empty" && <View style={styles.containerEmpty}>{children}</View>}
      {type === "A" && (
        <View style={styles.containerA}>
          <ImageBackground source={BackgroundTypeA} resizeMode="cover" style={styles.image}>
            {children}
          </ImageBackground>
        </View>
      )}
      {type === "B" && (
        <View style={styles.containerA}>
          <ImageBackground source={BackgroundTypeB} resizeMode="cover" style={styles.image}>
            {children}
          </ImageBackground>
        </View>
      )}
    </Fragment>
  );
}

export { BGLayout };
