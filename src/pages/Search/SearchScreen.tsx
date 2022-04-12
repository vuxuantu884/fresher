import resolveConfig from "tailwindcss/resolveConfig";
import Textfield from "@atlaskit/textfield";
import { useTranslation } from "next-i18next";
import Select from "@atlaskit/select";
import Range from "@atlaskit/range";

import {
  IConAdd,
  IConArrowUp,
  IConLightning,
  IConQuestion,
  IConSquare,
} from "component";
import { HeaderTitle } from "layouts/HeaderLayout/Title";
import tailwindConfig from "../../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const options = [
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" },
];

const SearchScreen = () => {
  //page hooks
  const { t } = useTranslation();
  return (
    <>
      <HeaderTitle />
      <div className="py-4 f-normal">
        <div className="flex items-center justify-between layout-primary">
          <span>Kết quả tìm kiếm danh mục , thương hiệu (18 sản phẩm)</span>
          <IConArrowUp color={fullConfig.theme.colors.primary} />
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("priceType")}</div>
          <div className="flex">
            <button className="btn btn-small-primary mr-2">Tất cả</button>
            <button className="btn btn-small-sub mr-2">Giá vừa phải</button>
            <button className="btn btn-small-sub">Doanh thu</button>
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("transport")}</div>
          <div className="flex justify-between items-center flex-1 mr-4">
            <span className="flex items-center">
              <IConLightning className="mr-2" />
              <span className="f-bold">Vận chuyển nhanh</span>
              <IConQuestion className="ml-1" />
            </span>
            <div
              //   className={`p-1 w-[44px] rounded-full ${
              //     checkBox ? "bg-[#029B11]" : "bg-gray_4 flex justify-end"
              //   } ml-2 cursor-pointer`}
              className="p-1 w-[44px] rounded-full bg-[#029B11] flex justify-end
                ml-2 cursor-pointer"
            >
              <IConSquare />
            </div>
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("keyWord")}</div>
          <div className="flex-1">
            <Textfield name="basic" aria-label="default text field" />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("exchange/return")}</div>
          <div className="flex justify-between flex-1 ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("type")}</div>
          <div className="flex-1">
            <Select
              inputId="single-select-example"
              className="single-select"
              classNamePrefix="react-select"
              options={options}
              placeholder="Choose a city"
            />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("trademark")}</div>
          <div className="flex justify-between flex-1  ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("shoeSize")}</div>
          <div className="flex-1">
            <Select
              inputId="single-select-example"
              className="single-select"
              classNamePrefix="react-select"
              options={options}
              placeholder="Choose a city"
            />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("shoeWidth")}</div>
          <div className="flex-1">
            <div className="f-normal text-[9px] text-gray_2 leading-[0px]">
              Không xác định
            </div>
            <Range step={1} min={1} max={100} />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("shoeHeelHeight")}</div>
          <div className="flex justify-between flex-1 ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("heelShape")}</div>
          <div className="flex justify-between flex-1 ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("around")}</div>
          <div className="flex justify-between flex-1 ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("typeOfSales")}</div>
          <div className="flex">
            <button className="btn btn-small-primary mr-2">Tất cả</button>
            <button className="btn btn-small-sub mr-2">Giá vừa phải</button>
            <button className="btn btn-small-sub">Doanh thu</button>
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("saleprice")}</div>
          <div className="flex-1">
            <Select
              inputId="single-select-example"
              className="single-select"
              classNamePrefix="react-select"
              options={options}
              placeholder="Choose a city"
            />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("discountRate")}</div>
          <div className="flex-1">
            <Select
              inputId="single-select-example"
              className="single-select"
              classNamePrefix="react-select"
              options={options}
              placeholder="Choose a city"
            />
          </div>
        </div>
        <div className="flex items-center py-3 border-b border-solid border-gray_3 pr-4">
          <div className="w-1/3 ml-4">{t("color")}</div>
          <div className="flex justify-between flex-1 ml-[3px]">
            <span className="f-bold">Không xác định</span>
            <IConAdd />
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="btn btn-primary-full">{t("search.search")}</button>
      </div>
    </>
  );
};

export default SearchScreen;
