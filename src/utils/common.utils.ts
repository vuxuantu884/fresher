export const isEmpty = (text: string | number): boolean => {
    if (text === undefined || text === null || typeof text === 'object') return true;
    if (typeof text === 'string' && text.trim() === '') return true;

    return false;
};

export const isValidPhone = (str: string) => {
    const REGEX_PHONE = '^[0-9\+]{9,14}$';
    const re = new RegExp(REGEX_PHONE);
    return re.test(str);
};

export const isEmail = (text: string): boolean => {
    const REGEX_EMAIL = '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$';
    const re = new RegExp(REGEX_EMAIL);
    return re.test(text);
};

export const convertUrl = (url?: string) => {
    if (!url) return '#';
    if (!url.includes('http://') && !url.includes('https://')) {
        return `http://${url}`;
    }
    return url;
}