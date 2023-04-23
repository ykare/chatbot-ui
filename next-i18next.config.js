const defaultLocale = process.env.LANG ? process.env.LANG.replace('_', '-').toLowerCase() : 'en';

module.exports = {
  i18n: {
    defaultLocale: defaultLocale,
    locales: [
      "bn",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "id",
      "it",
      "ja",
      "ko",
      "pl",
      "pt",
      "ru",
      "ro",      
      "sv",
      "te",
      "vi",
      "zh",
      "ar",
      "tr",
      "ca",
      "fi",
    ],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
