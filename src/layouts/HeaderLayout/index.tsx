import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderTitle } from "./Title";
import { HeaderMenu } from "./Menu";
import { ComponentMenuMobile, ComponentSaleMobile } from "component";
import { useOnClickOutside } from "utils";
import { resetApp, selectApp, setToggleShowSale } from "store";

export const HeaderLayout = () => {
  //page hooks
  const dispatch = useDispatch();
  //page state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  //page redux
  const { showSale } = useSelector(selectApp);

  //page ref
  const ref = useRef<HTMLDivElement>(null);
  const refSale = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleToggleSale = () => {
    dispatch(setToggleShowSale());
  };

  useOnClickOutside(refSale, handleToggleSale);
  useOnClickOutside(ref, handleToggleMenu);

  return (
    <>
      <div className="">
        <div className="flex h-14">
          <div className="w-1/2 relative">
            <Image
              src="/images/header/avartarHeaderLeft.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt=""
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/images/header/avartarHeaderRight.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt=""
            />
          </div>
        </div>
        <HeaderTitle handleToggleMenu={handleToggleMenu} />
        <div className="flex h-16">
          <div
            className="w-1/2 relative cursor-pointer"
            onClick={handleToggleSale}
          >
            <Image
              src="/images/header/avartarBrandLeft.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt=""
            />
          </div>
          <div
            className="w-1/2 relative cursor-pointer"
            onClick={handleToggleSale}
          >
            <Image
              src="/images/header/avartarBrandRight.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt=""
            />
          </div>
        </div>
        <HeaderMenu />
      </div>
      {showMenu && (
        <ComponentMenuMobile ref={ref} handleToggleMenu={handleToggleMenu} />
      )}
      {showSale && (
        <ComponentSaleMobile
          ref={refSale}
          handleToggleSale={handleToggleSale}
        />
      )}
    </>
  );
};
