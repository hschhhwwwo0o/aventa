import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import { en } from "./en";

const localization = Object.freeze({
  en: en,
});

const i18n = new I18n(localization);

i18n.locale = Localization.locale;

i18n.enableFallback = true;

export { i18n };
