import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";

import { IConArrowLeft, IConClose } from ".";
import tailwindConfig from "../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);
interface IProps {
  number: number;
  handleBack: () => void;
}

export const ComponentQualityProduct = (props: IProps) => {
  const { number, handleBack } = props;
  const { t } = useTranslation();
  return (
    <div className="flex items-center layout-primary">
      <IConArrowLeft
        color={fullConfig.theme.colors.primary}
        onClick={handleBack}
      />
      <div className="flex-1 bg-gray_4 f-normal text-center">
        {t("banner.productObject")}:{" "}
        <span className="text-primary font-medium">{number} </span>
        {t("banner.product")}
      </div>
      <IConClose />
    </div>
  );
};
