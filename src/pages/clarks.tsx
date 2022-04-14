// import { ComponentSale } from "component";
import { ComponentClarks } from "component";
import { CoreLayout, FooterLayout } from "layouts";
import { HeaderTitle } from "layouts/HeaderLayout/Title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ClarksPage = () => {
  return (
    <>
      <HeaderTitle />
      <ComponentClarks />
      <FooterLayout />
    </>
  );
};

ClarksPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default ClarksPage;
