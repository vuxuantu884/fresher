import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  ComponentSwitch,
  IConHamburger,
  IConHeart,
  IConPersonOutline,
  IConSearch,
  IConShoppingCart,
} from "component";
import { PATH_CARD, PATH_HOME, PATH_SEARCH } from "constant";

interface IProps {
  handleToggleMenu?: () => void;
}

export const HeaderTitle = (props: IProps) => {
  //page props
  const { handleToggleMenu } = props;
  //page hooks
  const { t } = useTranslation();
  const route = useRouter();

  const handleReturnHome = () => {
    route.push(PATH_HOME);
  };

  return (
    <>
      <ComponentSwitch
        web={
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
        }
        mobile={
          <div className="flex bg-white p-4">
            <div className="mr-4">
              <IConHamburger onClick={handleToggleMenu} />
            </div>
            <div className="">
              <Link href={PATH_SEARCH} passHref>
                <IConSearch />
              </Link>
            </div>
            <div className="flex-1 text-center text-black font-sans not-italic font-bold text-base leading-[19px]">
              <span onClick={handleReturnHome} className="cursor-pointer">
                {t("home.reikaFashion")}
              </span>
            </div>
            <div className="mr-4">
              <IConHeart />
            </div>{" "}
            <div className="">
              <Link passHref href={PATH_CARD}>
                <IConShoppingCart />
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
};
