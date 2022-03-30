/* eslint-disable @next/next/no-img-element */
import { IConArrowDow } from "component";
import { useTranslation } from "next-i18next";

import { ISearchByCategory } from "types";

const searchCategory: ISearchByCategory[] = [
  {
    name: "Nữ",
    img: "/images/searchByCategory/anh1.png",
    active: true,
  },
  {
    name: "Name",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Bé gái",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Bé trai",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Thể thao",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Đạo cụ",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Nữ",
    img: "/images/searchByCategory/anh1.png",
  },
  {
    name: "Nữ",
    img: "/images/searchByCategory/anh1.png",
  },
];

const SearchByCategory = () => {
  //page hooks
  const { t } = useTranslation();

  //page variable
  const dataSearch: string[] = [
    t("shoes"),
    t("garment"),
    t("bags"),
    t("accessory"),
    t("jewels"),
    t("cosmetic"),
    t("leather"),
  ];

  return (
    <div className="py-4 mb-4 bg-white">
      <div className="px-4 title mb-4">{t("home.searchByCategory")}</div>
      <div className="px-4 whitespace-nowrap overflow-scroll custom_scroll mb-4">
        {searchCategory.map((data, index) => {
          return (
            <div className="w-fit mr-2 text-center inline-block" key={index}>
              <img src={data.img} className="rounded-[50%]" alt="" />
              <div className="mt-1.5 text-bodyText font-normal text-base font-sans">
                {data.name}
              </div>
            </div>
          );
        })}
      </div>
      {dataSearch.map((data, index) => {
        return (
          <div
            className="px-4 py-3 border-gray_4 border-y border-solid flex justify-between items-center last:border-0 last:pb-0"
            key={index}
          >
            <div className="text-bodyTex font-sans font-normal text-sm ">
              {data}
            </div>
            <IConArrowDow />
          </div>
        );
      })}
    </div>
  );
};

export default SearchByCategory;