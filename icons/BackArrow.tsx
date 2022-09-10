import React, { Fragment } from "react";
import Svg, { Path } from "react-native-svg";

function BackArrow(): JSX.Element {
  return (
    <Fragment>
      <Svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <Path
          d="M15.5589 21.3749C15.3908 21.3755 15.2247 21.3384 15.0729 21.2664C14.921 21.1944 14.7873 21.0892 14.6814 20.9587L9.24762 14.2087C9.08216 14.0074 8.9917 13.7549 8.9917 13.4943C8.9917 13.2337 9.08216 12.9812 9.24762 12.7799L14.8726 6.02994C15.0636 5.8002 15.338 5.65572 15.6355 5.6283C15.9329 5.60087 16.2291 5.69274 16.4589 5.88369C16.6886 6.07465 16.8331 6.34905 16.8605 6.64653C16.8879 6.94401 16.7961 7.2402 16.6051 7.46994L11.5764 13.4999L16.4364 19.5299C16.5739 19.6951 16.6613 19.8962 16.6882 20.1094C16.7151 20.3226 16.6803 20.5391 16.588 20.7332C16.4956 20.9273 16.3497 21.0909 16.1673 21.2046C15.9849 21.3184 15.7738 21.3775 15.5589 21.3749Z"
          fill="white"
        />
      </Svg>
    </Fragment>
  );
}

export { BackArrow };