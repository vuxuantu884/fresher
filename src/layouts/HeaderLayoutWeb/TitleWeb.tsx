import {
  IConHearEmpty,
  IConHeart,
  IConPersonOutline,
  IConShoppingCart,
} from "component";

import { PATH_HOME } from "constant";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setToggleSearch } from "store";

interface IProps {
  handleToggleMenu?: () => void;
}

export const HeaderTitleWeb = (props: IProps) => {
  //page props
  const { handleToggleMenu } = props;
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRouter();

  const handleToggleSearch = () => {
    dispatch(setToggleSearch());
  };

  const handleReturnHome = () => {
    route.push(PATH_HOME);
  };

  return (
    <div className="flex items-center justify-between my-4 mx-[15vw] ">
      <h2 className="cursor-pointer text-primary font-sans font-bold text-3xl m-0">
        {t("home.reikaFashion")}
      </h2>
      <div className="flex items-center">
        <IConPersonOutline className="mx-2" />
        <IConHeart className="mx-2" />
        <IConShoppingCart className="mx-2" />
      </div>
    </div>
  );
};
