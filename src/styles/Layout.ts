import styled from "styled-components";

export const StyledLayout = styled.div`
  max-width: ${(p) => p.theme.breakPoints.breakSmall};
  margin: 0 auto;
  background-color: #e5e5e5;
  overflow: hidden;
`;

export const StyledHeaderLayout = styled.header`
  height: 5.5rem;
  .header-title {
    background-color: #fff;
    padding: 1.6rem;
  }
  .reikaFashion {
    flex: 1;
    text-align: center;
    color: #000000;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  svg {
    cursor: pointer;
  }
`;

export const StyledFooter = styled.footer`
  background-color: #fff;
  .copyRight {
    padding: 1.6rem 0;
    text-align: center;
  }
  div {
    color: ${(p) => p.theme.colors.bodyText};
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
  div:first-child {
    margin-bottom: 0.8rem;
  }
`;
