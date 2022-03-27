import {
  IConArrowDow,
  IConBook,
  IConDeskTop,
  IConQuestionCircle,
} from "component";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

export const FooterLayout = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="bg-white text-bodyText font-sans not-italic font-normal text-sm">
      <div className="footer-item" >
        <span>{t("footer.type")}</span>
          <IConArrowDow />
      </div>
      <div className="footer-item">
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
      <div className="footer-item">
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
      <div className="footer-item">
        <span>{t("footer.socialNetwork")}</span>
          <IConArrowDow />
      </div>
      <div className="footer-item">
        <span>{t("footer.companyProfileConditions")}</span>
          <IConArrowDow />
      </div>
      <div className="footer-item">
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
