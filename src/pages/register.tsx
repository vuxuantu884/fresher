// import { ComponentSale } from "component";
import { ComponentRegister } from "component";
import { CoreLayout } from "layouts";
import { HeaderTitle } from "layouts/HeaderLayout/Title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const RegisterPage = () => {
  return (
    <>
      <HeaderTitle />
      <ComponentRegister />
    </>
  );
};

RegisterPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default RegisterPage;
