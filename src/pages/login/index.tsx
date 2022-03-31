import { Input } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useTranslation } from "next-i18next";

import { useLogin } from "handlers/auth/auth.hooks";
import { CoreLayout, FooterLayout } from "layouts";
import styles from "./styles/login.module.scss";

const LoginPage = () => {
  //page hooks
  const { t } = useTranslation();

  const { onChangePhone, onChangePassword, onLogin } = useLogin();

  return (
    <>
      <div className="font-normal text-sm font-sans not-italic text-black mb-4">
        <div className="p-4">{t("loginPage.customersVisit")}</div>
        <div className="bg-white p-4 ">
          <div className="w-3/4 text-center mx-auto mb-4">
            {t("loginPage.registering")}
          </div>
          <button className="btn btn-primary-full">
            {t("loginPage.signUp")}
          </button>
        </div>
        <div className="p-4"> {t("loginPage.alreadyAccount")}</div>
        <div className="p-4 bg-white">
          <div className="text-textBody mb-2">
            {t("loginPage.emailAddress")}
          </div>
          <div className={`w-full ${styles.login} mb-3`}>
            <Input size="large" placeholder="Email" />
          </div>
          <div className="text-textBody mb-2"> {t("password")}</div>
          <div className={`w-full ${styles.login} mb-3`}>
            <Input.Password
              size="large"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div className="w-full flex justify-center mb-3.5">
            <button className="btn btn-login" onClick={onLogin}>
              {t("login")}
            </button>
          </div>
          <div className="text-right">
            <span className="text-gray_1">{t("loginPage.canNotLogin")}?</span>{" "}
            <span className="text-primary cursor-pointer">
              {t("loginPage.press")}
            </span>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

LoginPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default LoginPage;
