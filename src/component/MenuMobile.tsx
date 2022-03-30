import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import { IConLogin } from ".";
import { IConBook, IConPencil, IConQuestionCircle, IConTimeLine } from "./icon";

interface IProps {}

export const ComponentMenuMobile = React.forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    //page hooks
    const { t } = useTranslation();

    return (
      <div className="absolute inset-0 bg-black/40 z-10">
        <div className="w-fit bg-white h-full" ref={ref}>
          <div className="w-full p-4 border-y border-gray_4 border-solid text-sm font-normal font-sans text-bodyText not-italic">
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
        </div>
      </div>
    );
  }
);
