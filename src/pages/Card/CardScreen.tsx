import { useTranslation } from "next-i18next";

import { ComponentCart, ComponentCartEmpty } from "component";

const emptyCart = false;

const CardScreen = () => {
  //page hook
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4  bg-white f-bold text-base">{t("yourCard")}</div>
      {emptyCart ? <ComponentCartEmpty /> : <ComponentCart />}
    </>
  );
};

export default CardScreen;
