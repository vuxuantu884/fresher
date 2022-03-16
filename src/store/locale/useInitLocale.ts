import localStorageHelper, { KeyStorage } from 'utils/localStorage';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useLocale from './useLocale';

function useInitLocale() {
  const router = useRouter();
  const { locale } = useLocale();
  useEffect(() => {
    if (locale.key !== router.locale) {
      moment.locale(locale.key);
      localStorageHelper.setObject(KeyStorage.LOCALE, locale);
      router.replace(router.asPath, router.asPath, { locale: locale.key });
    }
  }, [locale]);
}

export default useInitLocale;
