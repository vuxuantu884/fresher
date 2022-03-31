import { useTranslation } from "next-i18next";

import { IConArrowLeft, IConClose } from ".";
interface IProps {
  number: number;
}

export const ComponentQualityProduct = (props: IProps) => {
  const { number } = props;
  const { t } = useTranslation();
  return (
    <div className="flex items-center layout-primary">
      <IConArrowLeft />
      <div className="flex-1 bg-gray_4 f-normal text-center">
        {t("banner.productObject")}:{" "}
        <span className="text-primary font-medium">{number} </span>
        {t("banner.product")}
      </div>
      <IConClose />
    </div>
  );
};
