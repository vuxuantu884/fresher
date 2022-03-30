/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { ISearchRanking } from "types";

const searchRanking: ISearchRanking[] = [
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 1,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 2,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 3,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 4,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 5,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 6,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 7,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 8,
  },
  {
    img: "/images/searchRanking/search1.png",
    name: "MAN SHOE",
    value: 9,
  },
];

const SearchRanking = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="p-4 my-4 bg-white">
      <div className="flex justify-between mb-4">
        <div className="title">{t("home.searchRanking")}</div>
        <div className="flex">
          <button className="btn btn-primary-key mr-1">{t("day")}</button>
          <button className="btn btn-primary-sub mr-1">{t("week")}</button>
          <button className="btn btn-primary-sub">{t("month")}</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-3 mx-1 justify-between">
        {searchRanking.map((data, index) => {
          return (
            <div className="w-2/6 relative mx-[-6px]" key={index}>
              <div className="w-full rounded overflow-hidden">
                <img src={data.img} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute bg-[#00000038] inset-0 rounded overflow-hidden flex justify-center items-center">
                <div className="w-fit absolute top-0 left-0">
                  <img src="/images/searchRanking/exclude.png" alt="" />
                  <div className="absolute top-[2px] left-1 text-[9px] font-bold text-white">
                    {data.value}
                  </div>
                </div>
                <div className="font-bold text-xs text-white font-sans">
                  {data.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-add px-4 mt-3"> {t("home.seeMore")} 10~99</button>
    </div>
  );
};

export default SearchRanking;