// import { ComponentSale } from "component";
import { ComponentRegisterWeb } from "component";
import { CoreLayout, MainLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useWindowDimensions } from "utils";

const RegisterPage = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <ComponentRegisterWeb />
    </>
  );
};

// mobile
RegisterPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default RegisterPage;
