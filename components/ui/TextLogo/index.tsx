import React, { Fragment } from "react";

/** Components */
import { TextLG } from "~/components/text/TextLG";

/** Constants */
import { PROJECT } from "~/constants/project";

function TextLogo(): JSX.Element {
  return (
    <Fragment>
      <TextLG>{PROJECT.name}</TextLG>
    </Fragment>
  );
}

export { TextLogo };
