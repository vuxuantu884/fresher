import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout } from "layouts";
import { Sale1Screen } from "./Sale1/Sale1Screen";

const Sale1Page = () => {
  return <Sale1Screen />;
};

Sale1Page.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Sale1Page;
