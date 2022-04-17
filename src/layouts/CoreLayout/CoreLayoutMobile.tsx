import { useSelector } from "react-redux";

import { selectApp } from "store";
import styles from "../styles/main.module.scss";

interface Props {
  children: React.ReactNode;
}

export const CoreLayoutMobile = ({ children }: Props) => {
  const {
    popup,
    popupCancellation,
    popupSelectTheQuestionProblem,
    popupAddCoupon,
    showSale,
    message,
    popupClose,
  } = useSelector(selectApp);

  const checkedPopup =
    popupCancellation ||
    popup ||
    popupSelectTheQuestionProblem ||
    showSale ||
    message ||
    popupAddCoupon ||
    popupClose;

  return (
    <div
      className={`max-w-sm min-h-screen my-0 mx-auto bg-gray_4 relative ${
        checkedPopup ? "h-screen overflow-hidden" : ""
      }`}
    >
      <main className={styles.main}>{children}</main>
    </div>
  );
};
