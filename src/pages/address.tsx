import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout, MainLayout } from "layouts";
import AddressScreen from "./Address/AddressScreen";
import { store } from "store";

const AddressPage = () => {
  return <AddressScreen />;
};

const { app } = store.getState();

AddressPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default AddressPage;
