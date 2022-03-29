import {
  IConArrowDow,
  IConBook,
  IConDeskTop,
  IConFacebook,
  IConInstagram,
  IConQuestionCircle,
  IConTwitter,
  IConYoutube,
} from "component";
import { useTranslation } from "next-i18next";

import styles from "../styles/footer.module.scss";

export const FooterLayout = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="bg-white text-bodyText font-sans not-italic font-normal text-sm">
      <div className={styles.footerItem}>
        <span>{t("footer.type")}</span>
        <IConArrowDow />
      </div>
      <div className={styles.footerItem}>
        <span>
          <div className="flex align-middle">
            <div className="mr-4">
              <IConBook />
            </div>
            <span>{t("footer.userManual")}</span>
          </div>
        </span>
        <IConArrowDow />
      </div>
      <div className={styles.footerItem}>
        <span>
          <div className="flex align-middle">
            <div className="mr-4">
              <IConQuestionCircle />
            </div>
            <span> {t("footer.frequentlyAskedQuestions")}</span>
          </div>
        </span>
        <IConArrowDow />
      </div>
      <div className={styles.footerItem}>
        <span className="flex-1 flex">
          <span className="inline-block mr-3">{t("footer.socialNetwork")}</span>
          <IConTwitter className="mr-2" />
          <IConFacebook className="mr-2" />
          <IConYoutube className="mr-2" />
          <IConInstagram className="mr-2" />
        </span>
        <IConArrowDow />
      </div>
      <div className={styles.footerItem}>
        <span>{t("footer.companyProfileConditions")}</span>
        <IConArrowDow />
      </div>
      <div className={styles.footerItem}>
        <span>
          <div className="flex align-middle">
            <div className="mr-4">
              <IConDeskTop />
            </div>
            <span> {t("footer.reikaiPC")}</span>
          </div>
        </span>
        <IConArrowDow />
      </div>
      <div className="py-4 text-center">
        <div className="mb-2">{t("footer.footerDesc")}</div>
        <div className="text-xs">{t("footer.copyRight")}</div>
      </div>
    </div>
  );
};
