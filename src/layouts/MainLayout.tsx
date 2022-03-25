import { FooterLayout, HeaderLayout } from ".";
import { StyledLayout } from "styles";
import styles from "./styles/main.module.scss";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <HeaderLayout />
      <main className={styles.main}>{children}</main>
      <FooterLayout />
    </StyledLayout>
  );
};
