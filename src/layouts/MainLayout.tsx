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
  const {
    search,
    popup,
    popupCancellation,
    popupSelectTheQuestionProblem,
    deliveryRecords,
    editAddress,
    showSale,
  } = useSelector(selectApp);

  const checkedPopup =
    popupCancellation || popup || popupSelectTheQuestionProblem || showSale;

  return (
    <>
      <div
        className={`max-w-sm min-h-screen my-0 mx-auto bg-gray_4 relative ${
          checkedPopup ? "h-screen overflow-hidden" : ""
        }`}
      >
        {search ? (
          <ComponentSearch />
        ) : (
          <>
            {!deliveryRecords && !editAddress && <HeaderLayout />}
            <main className={styles.main}>{children}</main>
            {!deliveryRecords && !editAddress && <FooterLayout />}
          </>
        )}
      </div>
    </>
  );
};
