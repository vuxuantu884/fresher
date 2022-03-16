import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localStorageHelper, { KeyStorage } from 'utils/localStorage';

export type Locale = {
    key: string;
    name: string;
};

export const locales = {
    en: { key: 'en', name: 'EN' },
    vi: { key: 'vi', name: 'VN' }
};

export type LocaleKey = keyof typeof locales;

const defaultLocaleKey = process.env.NEXT_PUBLIC_LOCALE_DEFAULT || 'en';

const initialState: Locale = localStorageHelper.getObject(
    KeyStorage.LOCALE,
    locales[defaultLocaleKey]
) as Locale;

const locale = createSlice({
    name: 'locale',
    initialState: initialState,
    reducers: {
        changeLocale: (state: Locale, action: PayloadAction<Locale>) => {
            Object.assign(state, action.payload);
        }
    }
});

const { reducer, actions } = locale;
export const { changeLocale } = actions;
export default reducer;
