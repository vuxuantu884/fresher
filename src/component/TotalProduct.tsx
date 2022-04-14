import resolveConfig from "tailwindcss/resolveConfig";

import { IConArrowDow } from ".";
import tailwindConfig from "../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

export const ComponentTotalProduct = () => {
  return (
    <div className="h-10 border border-solid border-black flex items-center justify-between">
      <span className="text-base ml-3 text-bodyText f-normal">
        Có tất cả 23342 sản phẩm
      </span>
      <div className="mr-5">
        <IConArrowDow color={fullConfig.theme.colors.primary} />
      </div>
    </div>
  );
};
