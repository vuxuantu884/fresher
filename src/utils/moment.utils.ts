import moment from "moment"
import 'moment/locale/vi'  

export const formatDate = (date: string | Date, locale: string = 'en') => {
    if (locale === 'vi') {
        return moment(date).locale(locale).format('dddd, DD/MM/YYYY')
    }
    return moment(date).locale(locale).format('dddd, MMMM DD, YYYY')
}