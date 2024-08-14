import i18n from 'i18next';

import i18next, {
  DEFAULT_NAMESPACE,
  LanguageListEnum,
  LanguageListType,
  TranslationResourceType,
} from '@/shared/config';

export const addI18nResources = (translations: TranslationResourceType) => {
  Object.keys(translations).forEach(key => {
    const lngKey = key as LanguageListType;
    i18n.addResourceBundle(lngKey, DEFAULT_NAMESPACE, translations[lngKey]);
  });
};
export const changeLanguage = (lang: keyof typeof LanguageListEnum) =>
  i18next.changeLanguage(lang, err => {
    if (err) {
      return console.log('changeLanguage something went wrong', err);
    }
  });
