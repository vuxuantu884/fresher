import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
import styled from "styled-components";
import Image from "next/image";

import { StyledHeaderLayout } from "styles";
import { ShareButton } from "component";

import { HeaderTitle } from "./Title";
import { HeaderMenu } from "./Menu";
import { HeaderSearch } from "./Search";
import { HeaderBrand } from "./Brand";
import { HeaderSignUp } from "./SignUp";

export const HeaderLayout = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <StyledHeaderLayout>
      <StyledRow gutter={24}>
        <StyledColLeft span={12}>{t("home.weeklySale")}</StyledColLeft>
        <StyledColRight span={12}>
          <ShareButton children={t("home.campaign")} />
        </StyledColRight>
      </StyledRow>
      <HeaderTitle />
      <StyledRowImage gutter={24}>
        <Image
          src="/images/avatarHeader.png"
          layout="fill"
          width="100%"
          height="100%"
        />
      </StyledRowImage>
      <HeaderMenu />
      <HeaderSearch />
      <HeaderBrand />
      <HeaderSignUp />
    </StyledHeaderLayout>
  );
};
const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledRowImage = styled(Row)`
  height: 6.5rem;
  position: relative;
`;

const StyledColLeft = styled(Col)`
  align-items: center;
  display: flex;
  padding-left: 2.8rem !important;
  background-color: ${(p) => p.theme.colors.primary};
  color: #ffffff;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
`;

const StyledColRight = styled(Col)`
  align-items: center;
  display: flex;
  justify-content: end;
  padding-right: 2.8rem !important;
  background-color: ${(p) => p.theme.colors.second};
`;
