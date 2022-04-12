import { CoreLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PersonalInformationScreen from "./PersonalInformation/PersonalInformationScreen";

const PersonalInformationPage = () => {
  return <PersonalInformationScreen />;
};

PersonalInformationPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default PersonalInformationPage;
