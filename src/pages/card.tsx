import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout, MainLayout } from "layouts";
import CardScreen from "./Card/CardScreen";

const CardPage = () => {
  return <CardScreen />;
};

CardPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default CardPage;
