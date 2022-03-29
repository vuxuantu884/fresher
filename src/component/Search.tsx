import { Input } from "antd";
import { IConClose } from "component";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";

import { setToggleSearch } from "store";

import styles from "../styles/search.module.scss";

const { Search } = Input;

export const ComponentSearch = () => {
  //page hooks
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleToggleSearch = () => {
    dispatch(setToggleSearch());
  };

  return (
    <>
      <div className="p-4 flex items-center bg-white">
        <Search
          placeholder="Tìm kiếm bằng từ khóa"
          enterButton
          className={styles.customInput}
        />
        <span
          className="font-sans text-gray_1 font-normal text-sm inline-block ml-4 cursor-pointer"
          onClick={handleToggleSearch}
        >
          Hủy
        </span>
      </div>
      <div className="w-full p-4 bg-gray_4">
        <div className="flex justify-between font-bold text-sm font-sans not-italic">
          <div className="text-bodyText ">{t("search.searchHistory")}</div>
          <div className="text-primary">{t("search.list")}</div>
        </div>
      </div>
      <div className="px-4 bg-white text-sm font-sans not-italic text-bodyText">
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">{t("search.springCollection")}</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">{t("search.desc")}</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">{t("search.largeCarryBag")}</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">{t("search.winterCollection")}</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center ">
          <div className="font-normal ">{t("search.summerCollection")}</div>
          <IConClose className="flex-shrink-0" />
        </div>
      </div>
    </>
  );
};
