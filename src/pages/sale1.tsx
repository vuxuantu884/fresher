import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { CoreLayout } from "layouts";
import Sale1Screen from "./Sale1/Sale1Screen";

const Sale1Page = () => {
  const { t } = useTranslation();
  return (
    <Sale1Screen
      img="/images/sale/sale1.png"
      title={t("springCollection")}
      color="bg-[#FFE1ED]"
    />
  );
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
