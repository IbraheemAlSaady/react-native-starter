import I18n from 'react-native-i18n';

import enLocale from 'locales/en';
import arLocale from 'locales/ar';

// // don't use en_US, en_BS, ar_JO only take the en, ar, es, etc...
I18n.fallbacks = true;

I18n.translations = {
  en: enLocale.en,
  ar: arLocale.ar,
};

const translate = key => I18n.t(key);

export default translate;
