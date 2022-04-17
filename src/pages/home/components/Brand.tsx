import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { PATH_BANNER } from "constant";

export default function HomeBrand() {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="p-3.5 bg-[#222] flex justify-center font-bold text-sm items-center">
        <button className="btn btn-nolmal"> {t("home.productCurent")}</button>
        <span className="inline-block ml-2.5 text-primary font-sans">
          513.343 Lorem
        </span>
      </div>
      <div className="relative">
        <Image
          src="/images/avatarBrand.png"
          width="200%"
          layout="responsive"
          height="147%"
          alt=""
        />
        <Link href={PATH_BANNER} passHref>
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center flex-col cursor-pointer">
            <div className="text-white font-sans font-bold text-xl mb-3.5">
              400 Lorem Ipsum Lorem Ipsum
            </div>
            <div className="justify-center flex mb-[22px] gap-4">
              <button className="btn btn-primary">{t("home.women")}</button>
              <button className="btn btn-primary">{t("home.man")}</button>
            </div>
            <div className="justify-center flex gap-4">
              <button className="btn btn-primary">{t("home.kids")}</button>
              <button className="btn btn-primary">{t("home.sport")}</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
