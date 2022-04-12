import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout } from "layouts";
import PaymentScreen from "./Payment/PaymentScreen";

const PaymentPage = () => {
  return <PaymentScreen />;
};

PaymentPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default PaymentPage;
