import { ComponentProductDetail2 } from "component";
import { CoreLayout, FooterLayout, HeaderLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeFavoriteProduct from "./home/components/FavoriteProduct";

const ProductDetailPage = () => {
  return (
    <>
      <HeaderLayout />
      <ComponentProductDetail2 />
      <HomeFavoriteProduct />
      <FooterLayout />
    </>
  );
};

ProductDetailPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default ProductDetailPage;
