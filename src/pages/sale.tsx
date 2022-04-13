import { ComponentSale } from "component";
import { CoreLayout, FooterLayout, HeaderLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeFavoriteProduct from "./home/components/FavoriteProduct";

const SalePage = () => {
  return (
    <>
      <HeaderLayout />
      <ComponentSale />
      <HomeFavoriteProduct />
      <FooterLayout />
    </>
  );
};

SalePage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default SalePage;
