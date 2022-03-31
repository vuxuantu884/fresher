import { PATH_LOGIN, PATH_PROFILE } from "constant";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "store";

import {
  IConLogin,
  IConArrowRight,
  IConBook,
  IConPencil,
  IConQuestionCircle,
  IConTimeLine,
  IConFileText,
  IConChat,
  IConHeart,
} from ".";

interface IProps {
  handleToggleMenu: () => void;
}

// eslint-disable-next-line react/display-name
export const ComponentMenuMobile = React.forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    const { handleToggleMenu } = props;
    //page hooks
    const { t } = useTranslation();
    const { token } = useSelector(selectUser);

    return (
      <div className="absolute inset-0 bg-black/40 z-10">
        <div className="bg-white h-full min-w-[70%] w-fit" ref={ref}>
          {token ? (
            <MenuMobileLogin handleToggleMenu={handleToggleMenu} />
          ) : (
            <MenuMobile />
          )}
        </div>
      </div>
    );
  }
);

// eslint-disable-next-line react/display-name
const MenuMobile = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full p-4 border-y border-gray_4 border-solid f-normal text-sm font-semibold">
        <div className="flex items-center mb-4">
          <IConLogin />
          <Link href="/login" passHref>
            <div className="ml-4 cursor-pointer text-bodyText">
              {t("logout")}
            </div>
          </Link>
        </div>
        <div className="flex items-center  mb-4">
          <IConPencil />
          <div className="ml-4 cursor-pointer">
            {t("home.signMember")} ({t("free")})
          </div>
        </div>
        <div className="flex items-center mb-4">
          <IConBook width={24} height={24} />
          <div className="ml-4 cursor-pointer">{t("usagePolicy")}</div>
        </div>
        <div className="flex items-center ">
          <IConQuestionCircle width={24} height={24} />
          <div className="ml-4 cursor-pointer">{t("help")}</div>
        </div>
      </div>
      <div className="flex p-4 items-center">
        <IConTimeLine />
        <div className="border-solid text-sm font-normal font-sans text-bodyText not-italic ml-4 cursor-pointer">
          {t("viewHistory")}
        </div>
      </div>
    </>
  );
};

const MenuMobileLogin = (props: IProps) => {
  //page props
  const { handleToggleMenu } = props;
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const route = useRouter();

  const handleLogout = () => {
    route.push(PATH_LOGIN);
    dispatch(logout());
  };

  const handleProfile = () => {
    handleToggleMenu();
    route.push(PATH_PROFILE);
  };

  return (
    <>
      <div className="w-full p-4 bg-gray_4">
        <div className="flex justify-between items-center mb-[18px]">
          <span
            className="f-base text-primary cursor-pointer"
            onClick={handleProfile}
          >
            UserName123
          </span>
          <IConArrowRight onClick={handleProfile} />
        </div>
        <div className="f-normal mb-2">
          {t("level")}:{" "}
          <span className=" inline-block ml-3 font-bold">Bạc</span>
        </div>
        <div className="f-normal">
          {t("accumulatedPoints")}:{" "}
          <span className=" inline-block ml-3 font-bold text-primary mr-1">
            728
          </span>
          {t("point")}
        </div>
      </div>
      <div className="w-full p-4 border-y border-gray_4 border-solid   f-normal text-sm font-semibold ">
        <div className="flex items-center mb-4">
          <IConFileText />
          <Link href="/login" passHref>
            <div className="ml-4 cursor-pointer text-bodyText">
              {t("info.orderHistory")}
            </div>
          </Link>
        </div>
        <div className="flex items-center  mb-4">
          <IConChat />
          <div className="ml-4 cursor-pointer">{t("messageCenter")}</div>
        </div>
        <div className="flex items-center mb-4">
          <IConBook width={24} height={24} />
          <div className="ml-4 cursor-pointer">{t("usagePolicy")}</div>
        </div>
        <div className="flex items-center mb-4">
          <IConQuestionCircle width={24} height={24} />
          <div className="ml-4 cursor-pointer">{t("help")}</div>
        </div>
        <div className="flex items-center ">
          <IConLogin width={24} height={24} onClick={handleLogout} />
          <div onClick={handleLogout} className="ml-4 cursor-pointer">
            {t("logout")}
          </div>
        </div>
      </div>
      <div className="flex p-4 items-center">
        <IConTimeLine />
        <div className="border-solid text-sm font-normal font-sans text-bodyText not-italic ml-4 cursor-pointer">
          {t("viewHistory")}
        </div>
      </div>
      <div className="flex p-4 items-center pt-0">
        <IConHeart />
        <div className="border-solid text-sm font-normal font-sans text-bodyText not-italic ml-4 cursor-pointer">
          {t("favourite")}
        </div>
      </div>
    </>
  );
};
