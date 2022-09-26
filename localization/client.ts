import { i18n } from "~/localization/i18n";

interface IConfig {
  prefix?: string;
}

function i18nClient(config?: IConfig) {
  /** Translation using the configured prefix */
  function translate(field: string): string {
    if (config?.prefix && !field.includes(".")) {
      return i18n.t(`${config?.prefix}['${field}']`);
    } else {
      return gTranslate(field);
    }
  }

  /** Global translate */
  function gTranslate(field: string): string {
    return i18n.t(field);
  }

  return {
    gTranslate,
    translate,
    i18n,
  };
}

export { i18nClient };
