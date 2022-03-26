import styled, { CSSProperties } from "styled-components";

import { enumSize } from "constant";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  size?: enumSize;
  disabled?: boolean;
  style?: CSSProperties;
}

export const ShareButton = (props: IProps) => {
  const { children, onClick, disabled, size, style } = props;
  return (
    <StyledButton
      style={style}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export const ShareButtonSub = (props: IProps) => {
  const { children, onClick, disabled, size, style } = props;
  return (
    <StyledButtonSub
      style={style}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButtonSub>
  );
};
export const StyledButtonSub = styled.button<{
  size?: enumSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => {
    if (p.size === enumSize.SMALL)
      return `
     padding:0.2rem 0.8rem;
     color:#fff;
     border-radius: 3.5rem;
     border: 1px solid #FFFFFF;
     font-style: normal;
     font-weight: 400;
     font-size: 1.3rem;
     line-height: 1.6rem;
    `;
    if (p.size === enumSize.BIG)
      return `
     color:${p.theme.colors.bodyText};
     border-radius: 3.2rem;
     font-style: normal;
     font-weight: 700;
     font-size: 1.6rem;
     line-height: 1.9rem;
     border:none;
     width:12rem;
     height:2.5rem;
     background: #FFFFFF;
    `;
    if (p.size === enumSize.LARGE)
      return `
      color: #FF5C00;
     padding: 1.2rem 2.4rem;
     border-radius: 0.4rem;
     font-style: normal;
     font-weight: 400;
     font-size: 1.3rem;
     line-height: 1.6rem;
     border: 1px solid #FF5C00;
     width:20rem;
     height:3rem;
     background: #FFFFFF;
    `;
  }}
`;
export const StyledButton = styled.button<{
  size?: enumSize;
}>`
  min-width: 9.7rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.4rem;
  text-align: center;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  background: #ffffff;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
`;
