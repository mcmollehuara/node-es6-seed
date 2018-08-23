const i18n = require('i18n');
const { join } = require('path');

/* i18n */
i18n.configure({
  locales: [
    'pt-PE',
    'en-US',
  ],
  fallbacks: {
    pt: 'pt-PE',
    en: 'en-US',
  },
  defaultLocale: 'pt-PE',
  directory: join(__dirname, '..', 'locales'),
  register: global,
});

module.exports = i18n;
