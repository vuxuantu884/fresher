/* eslint-disable @next/next/no-img-element */
import { IConArrowLeft } from "component";
import { CHECK_END, CHECK_START } from "constant";
import { useRouter } from "next/router";

const images: Array<string> = [
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
];

const AllProductScreen = () => {
  //page hook
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };
  return (
    <>
      <div className="flex items-center layout-primary f-normal">
        <div className="mr-12 flex items-center ">
          <IConArrowLeft className="mr-3" onClick={handleBack} />
          <span className="cursor-pointer" onClick={handleBack}>
            Trở lại
          </span>
        </div>
        <div className="text-gray_1">Ảnh tất cả sản phẩm</div>
      </div>
      <div className="w-full flex gap-y-1 flex-wrap bg-white p-4">
        {images.map((data, index) => {
          //check phan tu dau va phan tu cuoi
          const check = (index + 1) % 3;

          return (
            <div
              className={`w-1/3 ${
                check === CHECK_START
                  ? "pr-1"
                  : check === CHECK_END
                  ? "pl-1"
                  : "px-0.5"
              }`}
              key={index}
            >
              <img src={data} alt="" className="aspect-square object-cover" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllProductScreen;
