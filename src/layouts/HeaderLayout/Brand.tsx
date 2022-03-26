import Image from "next/image";
import styled from "styled-components";
import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";

import { StyledButtonSub } from "component";
import { enumSize } from "constant";

export const HeaderBrand = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <StyledHeaderBrand>
      <StyledHeaderBrandBlack>
        <StyledButtonSub children="Button" size={enumSize.SMALL} />
        <span>513.343 Lorem</span>
      </StyledHeaderBrandBlack>
      <div className="header-brand">
        <Image
          src="/images/avatarBrand.png"
          width="200%"
          layout="responsive"
          height="147%"
        />
        <div className="overlay">
          <div className="overlay-title">400 Lorem Ipsum Lorem Ipsum</div>
          <Row
            gutter={[16, 16]}
            justify="center"
            style={{ marginBottom: "2.2rem" }}
          >
            <Col>
              <StyledButtonSub children={t("home.women")} size={enumSize.BIG} />
            </Col>
            <Col>
              <StyledButtonSub children={t("home.man")} size={enumSize.BIG} />
            </Col>
          </Row>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <StyledButtonSub children={t("home.kids")} size={enumSize.BIG} />
            </Col>
            <Col>
              <StyledButtonSub children={t("home.sport")} size={enumSize.BIG} />
            </Col>
          </Row>
        </div>
      </div>
    </StyledHeaderBrand>
  );
};

const StyledHeaderBrandBlack = styled.div`
  padding: 1.3rem 0;
  background-color: #222222;
  display: flex;
  justify-content: center;
  span {
    display: inline-block;
    margin-left: 1rem;
    color: ${(p) => p.theme.colors.primary};
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

const StyledHeaderBrand = styled.div`
  width: 100%;
  .header-brand {
    position: relative;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .overlay-title {
      color: #ffffff;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-bottom: 1.4rem;
    }
  }
`;
