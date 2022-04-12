import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "layouts";
import MessageCenterScreen from "./MessageCenter/MessageCenterScreen";

const MessageCenterPage = () => {
  return <MessageCenterScreen />;
};

MessageCenterPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default MessageCenterPage;
