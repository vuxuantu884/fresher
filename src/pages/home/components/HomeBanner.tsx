import { useTranslation } from "next-i18next";

import styles from "../styles/banner.module.scss";

function HomeBanner() {
  const { t } = useTranslation();
  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.title}>{t("login")}</h1>
    </div>
  );
}

export default HomeBanner;
