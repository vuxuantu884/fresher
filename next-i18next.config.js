const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: process.env.NEXT_PUBLIC_LOCALE_DEFAULT || 'vi',
        locales: ['en', 'vi', 'ja'],
        defaultNS: 'common',
        localePath: path.resolve('./src/languages'),
    },
};
