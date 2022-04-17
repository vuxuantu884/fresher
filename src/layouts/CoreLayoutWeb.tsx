import { useSelector } from "react-redux";

import { selectApp } from "store";
import styles from "./styles/main.module.scss";

interface Props {
  children: React.ReactNode;
}

export const CoreLayoutWeb = ({ children }: Props) => {
  const { popup, popupCancellation, popupSelectTheQuestionProblem, showSale } = useSelector(selectApp);

  const checkedPopup = popupCancellation || popup || popupSelectTheQuestionProblem || showSale;

  return (
    <div className="">
      <main className={styles.main}>{children}</main>
    </div>
  );
};
