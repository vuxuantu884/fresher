import localStorageHelper, { KeyStorage } from 'utils/localStorage';
import moment, { locales } from 'moment';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { changeLocaleAction, LocaleKey } from 'store/reducers/locale';

const langs: {
  value: LocaleKey;
  label: string;
}[] = [];

for (const value of Object.values(locales)) {
  langs.push({ value: value.key as LocaleKey, label: value.name });
}

function useLocale() {
  const locale = useSelector((state: RootState) => state.locale);
  const dispatch = useDispatch();
  const setLocale = (localeKey: LocaleKey) => {
    // @ts-ignore
    const actionChangeLocale = changeLocaleAction(locales[localeKey]);
    dispatch(actionChangeLocale);
  };
  return { locale, langs, setLocale };
}

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
