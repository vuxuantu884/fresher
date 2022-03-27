import { FooterLayout, HeaderLayout } from ".";
import styles from "./styles/main.module.scss";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="max-w-sm my-0 mx-auto">
      <HeaderLayout />
      <main className={styles.main}>{children}</main>
      <FooterLayout />
    </div>
  );
};
