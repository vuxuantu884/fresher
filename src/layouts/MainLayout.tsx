import { useSelector } from "react-redux";

import { FooterLayout, HeaderLayout } from ".";
import styles from "./styles/main.module.scss";
import { selectApp } from "store";
import { ComponentSearch } from "component";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  //page redux
  const { search } = useSelector(selectApp);
  console.log(search);
  return (
    <>
      <div className="max-w-sm min-h-screen my-0 mx-auto bg-gray_4 relative">
        {search ? (
          <ComponentSearch />
        ) : (
          <>
            <HeaderLayout />
            <main className={styles.main}>{children}</main>
            <FooterLayout />
          </>
        )}
      </div>
    </>
  );
};
