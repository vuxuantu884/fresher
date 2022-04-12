import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CoreLayout } from "layouts";
import { ComponentMessage } from "component";

const MessagePage = () => {
  return <ComponentMessage />;
};

MessagePage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default MessagePage;
