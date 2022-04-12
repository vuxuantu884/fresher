import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout } from "layouts";
import SearchScreen from "./Search/SearchScreen";

const SearchPage = () => {
  return <SearchScreen />;
};

SearchPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default SearchPage;
