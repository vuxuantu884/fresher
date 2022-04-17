// import { ComponentSale } from "component";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  ComponentMenuProduct,
  ComponentTotalProduct,
  IConArrowDow,
} from "component";
import { MainLayout } from "layouts";
import HomeFavoriteProduct from "./home/components/FavoriteProduct";

const CouponPage = () => {
  return (
    <>
      <ComponentTotalProduct />
      <ComponentMenuProduct />
      <HomeFavoriteProduct title={false} />
      <div className="pr-4 my-4 bg-white center justify-between">
        <div className="center ">
          <div className="w-fit p-4 f-normal text-primary border-b border-solid border-primary cursor-pointer mr-4">
            Phân loại
          </div>
          <button className="btn py-1.5 px-3 bg-primary h-fit flex shadow-[0_2px_8px_1px_rgba(0,0,0,0.25)] rounded f-normal text-white">
            <span>Yêu thích</span>
            <IConArrowDow
              className="ml-3"
              width={16}
              height={16}
              color="white"
            />
          </button>
        </div>
        <span className="f-normal text-gray_1">1-120 sản phẩm</span>
      </div>
    </>
  );
};

CouponPage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default CouponPage;
