import { FooterLayout, HeaderLayout } from "layouts";

interface Props {
  children: React.ReactNode;
}

export const MainLayoutWeb = ({ children }: Props) => {
  return (
    <>
      {" "}
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </>
  );
};
