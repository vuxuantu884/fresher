import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";

import {
  IConHamburger,
  IConSearch,
  IConShoppingCart,
  IConHeart,
} from "component";
import { setToggleSearch } from "store";

interface IProps {
  handleToggleMenu: () => void;
}

export const HeaderTitle = (props: IProps) => {
  //page props
  const { handleToggleMenu } = props;
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleToggleSearch = () => {
    dispatch(setToggleSearch());
  };

  return (
    <div className="flex bg-white p-4">
      <div className="mr-4">
        <IConHamburger onClick={handleToggleMenu} />
      </div>
      <div className="">
        <IConSearch onClick={handleToggleSearch} />
      </div>
      <div className="flex-1 text-center text-black font-sans not-italic font-bold text-base leading-[19px]">
        {t("home.reikaFashion")}
      </div>
      <div className="mr-4">
        <IConHeart />
      </div>{" "}
      <div className="">
        <IConShoppingCart />
      </div>
    </div>
  );
};
