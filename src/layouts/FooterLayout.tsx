import { Row, Col } from "antd";
import {
  IConArrowDow,
  IConBook,
  IConDeskTop,
  IConQuestionCircle,
} from "component";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { StyledFooter } from "styles";

export const FooterLayout = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledRowFooter justify="space-between">
        <Col>{t("footer.type")}</Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <StyledRowFooter justify="space-between">
        <Col>
          <Row align="middle">
            <StyledICon>
              <IConBook />
            </StyledICon>
            <Col>{t("footer.userManual")}</Col>
          </Row>
        </Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <StyledRowFooter justify="space-between">
        <Col>
          <Row align="middle">
            <StyledICon>
              <IConQuestionCircle />
            </StyledICon>
            <Col> {t("footer.frequentlyAskedQuestions")}</Col>
          </Row>
        </Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <StyledRowFooter justify="space-between">
        <Col>{t("footer.socialNetwork")}</Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <StyledRowFooter justify="space-between">
        <Col>{t("footer.companyProfileConditions")}</Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <StyledRowFooter justify="space-between">
        <Col>
          <Row align="middle">
            <StyledICon>
              <IConDeskTop />
            </StyledICon>
            <Col> {t("footer.reikaiPC")}</Col>
          </Row>
        </Col>
        <Col>
          <IConArrowDow />
        </Col>
      </StyledRowFooter>
      <div className="copyRight">
        <div className="copyRight--desc">{t("footer.footerDesc")}</div>
        <div className="copyRight--title">{t("footer.copyRight")}</div>
      </div>
    </StyledFooter>
  );
};

const StyledRowFooter = styled(Row)`
  padding: 1.3rem 1.6rem;
  color: ${(p) => p.theme.colors.bodyText};
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`;

const StyledICon = styled(Col)`
  margin-right: 1.2rem;
`;
