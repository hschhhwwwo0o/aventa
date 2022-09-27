import { i18n } from "~/localization/i18n";

interface II18nConfig {
  prefix?:
    /** Main screens */
    | "Screens.Main.Home"
    | "Screens.Main.Transactions"
    | "Screens.Main.AddGoal"
    | "Screens.Main.About"

    /** Welcome screens */
    | "Screens.Welcome.Initial"
    | "Screens.Welcome.Concept"
    | "Screens.Welcome.Meet"
    | "Screens.Welcome.AddGoal"

    /** Global */
    | "Global.Tips"
    | "Global.Navigation"
    | "Global.Shared";
}

function i18nClient(config?: II18nConfig) {
  /** Translation using the configured prefix */
  function translate(field: string): string {
    if (config?.prefix && !field.includes(".")) {
      return i18n.t(`${config?.prefix}['${field}']`);
    } else {
      return i18n.t(field);
    }
  }

  /** Global translate */
  function gTranslate(prefix: II18nConfig["prefix"], field: string): string {
    return i18n.t(`${prefix}['${field}']`);
  }

  return {
    gTranslate,
    translate,
    i18n,
  };
}

export { i18nClient };
