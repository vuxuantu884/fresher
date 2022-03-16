import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'utils/reduxStore';
import { changeLocale, LocaleKey, locales } from './reducer';

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
    const actionChangeLocale = changeLocale(locales[localeKey]);
    dispatch(actionChangeLocale);
  };
  return { locale, langs, setLocale };
}

export default useLocale;
