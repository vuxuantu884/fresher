import moment from "moment";
import "moment/locale/vi";

export const formatDate = (date: string | Date, locale: string = "vi") => {
  if (locale === "en") {
    return moment(date).locale(locale).format("dddd, MMMM DD, YYYY");
  }
  return moment(date).locale(locale).format("dddd, DD/MM/YYYY");
};
