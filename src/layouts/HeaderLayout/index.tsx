import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRef, useState } from "react";

import { HeaderTitle } from "./Title";
import { HeaderMenu } from "./Menu";
import { ComponentMenuMobile, ComponentSaleMobile } from "component";
import { useOnClickOutside } from "utils";

export const HeaderLayout = () => {
  //page state
  const [showMenu, setShowMenu] = useState<boolean>(false);
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const { t } = useTranslation();
  // sale state
  const [showSale, setShowSale] = useState<boolean>(false);
  // sale ref
  const refSale = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useOnClickOutside(ref, handleToggleMenu);

  const handleToggleSale = () => {
    setShowSale(!showSale);
  };

  const handleCloseSale = () => {
    setShowSale(false);
  };

  useOnClickOutside(refSale, handleToggleSale);
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
          <div className="w-1/2 relative cursor-pointer" onClick={handleToggleSale}>
            <Image
              src="/images/header/avartarBrandLeft.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt=""
            />
          </div>
          <div className="w-1/2 relative cursor-pointer" onClick={handleToggleSale}>
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
      {showMenu && <ComponentMenuMobile ref={ref} handleToggleMenu={handleToggleMenu} />}
      {showSale && (
        <ComponentSaleMobile handleCloseSale={handleCloseSale} ref={refSale} handleToggleSale={handleToggleSale} />
      )}
    </>
  );
};
