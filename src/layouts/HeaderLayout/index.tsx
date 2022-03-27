import { useTranslation } from "next-i18next";
import Image from "next/image";

import { HeaderTitle } from "./Title";
import { HeaderMenu } from "./Menu";

export const HeaderLayout = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex h-14">
        <div className="w-1/2 relative">
          <Image src="/images/header/avartarHeaderLeft.png" layout="fill"
            objectFit="cover"
            quality={100}
            priority />
        </div>
        <div className="w-1/2 relative">
          <Image src="/images/header/avartarHeaderRight.png" layout="fill"
            objectFit="cover"
            quality={100}
            priority />
        </div>
      </div>
      <HeaderTitle />
      <div className="flex h-16">
        <div className="w-1/2 relative">
          <Image src="/images/header/avartarBrandLeft.png" layout="fill"
            objectFit="cover"
            quality={100}
            priority />
        </div>
        <div className="w-1/2 relative">
          <Image src="/images/header/avartarBrandRight.png" layout="fill"
            objectFit="cover"
            quality={100}
            priority />
        </div>
      </div>
      <HeaderMenu />
      {/* <HeaderSearch /> */}
      {/* <HeaderBrand />
      <HeaderSignUp /> */}
    </div>
  );
};
