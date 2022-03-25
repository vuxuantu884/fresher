import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles";

import { useHomeMenu } from "handlers";

export const HeaderMenu = () => {
  //page state
  const [currentMenu, setCurrentMenu] = useState<string>("");
  //page hooks
  const { t } = useTranslation();
  const { handleToggleMenu } = useHomeMenu(setCurrentMenu);
  //page variable
  const dataMenu: string[] = [
    t("home.women"),
    t("home.man"),
    t("home.kids"),
    t("home.sport"),
  ];

  return (
    <StyledMenuRow gutter={24}>
      {dataMenu.map((item, index) => {
        return (
          <StyledMenuCol
            span={6}
            key={index}
            color={currentMenu === item ? theme.colors.primary : "#000"}
            onClick={() => {
              handleToggleMenu(item);
            }}
          >
            <span>{item}</span>
          </StyledMenuCol>
        );
      })}
    </StyledMenuRow>
  );
};

const StyledMenuRow = styled(Row)`
  background-color: #fff;
  padding: 0.8rem 1.6rem;
  text-align: center;
`;

const StyledMenuCol = styled(Col)`
  color: ${(p) => p.color};
  span {
    cursor: pointer;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;
