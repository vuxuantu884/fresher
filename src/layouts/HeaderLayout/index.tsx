import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRef, useState } from "react";

import { HeaderTitle } from "./Title";
import { HeaderMenu } from "./Menu";
import { ComponentMenuMobile } from "component";
import { useOnClickOutside } from "utils";

export const HeaderLayout = () => {
  //page state
  const [showMenu, setShowMenu] = useState<boolean>(false);
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const { t } = useTranslation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/images/header/avartarHeaderRight.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>
        <HeaderTitle handleToggleMenu={handleToggleMenu} />
        <div className="flex h-16">
          <div className="w-1/2 relative">
            <Image
              src="/images/header/avartarBrandLeft.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/images/header/avartarBrandRight.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>
        <HeaderMenu />
      </div>
      {showMenu && <ComponentMenuMobile ref={ref} />}
    </>
  );
};
