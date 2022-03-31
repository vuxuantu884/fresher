import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout } from "layouts";
import BannerScreen from "./Banner/BannerScreen";

const BannerPage = () => {
  return <BannerScreen />;
};

BannerPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default BannerPage;
