// import { ComponentProductDetail2 } from "component";
import { MainLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProductDetailScreen from "./ProductDetail/ProductDetaiScreen";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetailScreen />
    </>
  );
};

ProductDetailPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default ProductDetailPage;
