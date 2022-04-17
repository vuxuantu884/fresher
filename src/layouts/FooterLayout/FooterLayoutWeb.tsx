/* eslint-disable @next/next/no-img-element */
import {
  IConFacebook,
  IConInstagram,
  IConTwitter,
  IConYoutube,
} from "component";
import { useTranslation } from "next-i18next";

export const FooterLayoutWeb = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="px-[15vw] pt-6 bg-gray_4 font-sans">
      <div className="flex border-b-[1px] border-gray_3">
        <div className="flex w-[77%]">
          <div className="flex-1">
            <h4 className="font-sans font-bold text-xl text-bodyText">
              {t("footer.aboutReikaFashion")}
            </h4>
            <ul className="mt-7 text-base text-bodyText">
              <li className="mb-3">{t("footer.aboutReikaFashion")}</li>
              <li className="mb-3">{t("footer.profileCompany")}</li>
              <li className="mb-3">{t("footer.recruit")}</li>
              <li className="mb-3">{t("footer.termsofService")}</li>
              <li className="mb-3">{t("footer.privacyPolicy")}</li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="font-sans font-bold text-xl text-bodyText">
              {t("footer.userManual")}
            </h4>
            <ul className="mt-7 text-base text-bodyText">
              <li className="mb-3">{t("order")}</li>
              <li className="mb-3">{t("payment")}</li>
              <li className="mb-3">{t("transport")}</li>
              <li className="mb-3">{t("lie")}</li>
              <li className="mb-3">{t("footer.aboutProduct")}</li>
              <li className="text-base text-bodyText mb-3">
                {t("home.signMember")}
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="font-sans font-bold text-xl text-bodyText">
              {t("footer.community")}
            </h4>
            <ul className="mt-7">
              <li className="flex items-center mb-4 text-base text-bodyText">
                <IConTwitter width={20} height={20} />
                <span className="ml-2">{t("social.twitter")}</span>
              </li>
              <li className="flex items-center mb-4">
                <IConFacebook width={20} height={20} />
                <span className="ml-2">{t("social.facebook")}</span>
              </li>
              <li className="flex items-center mb-4">
                <IConYoutube width={20} height={20} />
                <span className="ml-2">{t("social.youtube")}</span>
              </li>
              <li className="flex items-center mb-4">
                <IConInstagram width={20} height={20} />
                <span className="ml-2">{t("social.instagram")}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[23%] bg-white flex flex-col justify-between items-center mb-14 ">
          <h4 className="mt-4 font-bold text-xl text-bodyText">
            {t("home.reikaFashion")}
          </h4>
          <img
            className="w-19 h-19"
            src="./images/headerWeb/refund.png"
            alt=""
          />
          <h5 className="font-bold text-bodyText mb-7">{t("7DaysReturn")}</h5>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 mb-6">
        <h3 className="font-bold text-2xl text-primary mr-6">
          {t("home.reikaFashion")}
        </h3>
        <ul>
          <li className="text-base text-bodyText -mb-[2px]">
            {t("footer.footerDesc")}
          </li>
          <li className="text-[13px] text-bodyText">{t("footer.copyRight")}</li>
        </ul>
      </div>
    </div>
  );
};
