import { ComponentInformation, ComponentProduct, IConTick } from "component";
import { CHECK_END, CHECK_START } from "constant";
import { IProduct } from "types";

const products: IProduct[] = [
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
  },
  {
    img: "/images/product/product2.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
  },
  {
    img: "/images/product/product3.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
  },
  {
    img: "/images/product/product2.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product3.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
];

export const WarehouseScreen = () => {
  return (
    <>
      <div className="mt-4 bg-white">
        <div className="border-b border-gray_5 border-solid">
          <div className="px-7 py-4 font-normal font-sans text-sm text-bodyText border-b-2 border-[#C4C4C4] border-solid w-fit">
            SP yêu thích
          </div>
        </div>
        <div className="px-4">
          <div className="py-4 font-sans text-sm text-bodyText flex">
            <span className="font-normal inline-block pr-2 border-r border-gray_4 border-solid">
              Mặt hàng: 14 mặt hàng
            </span>
            <span className="flex items-center ml-4">
              <IConTick />
              <span className="inline-block ml-1.5">
                Sản phẩm có sẵn trong kho
              </span>
            </span>
          </div>
          <div className="w-full flex gap-y-6 flex-wrap">
            {products.map((data, index) => {
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
                  <ComponentProduct data={data} close />
                  <div className="mt-2">
                    {data.status ? (
                      <button className="btn btn-primary-full py-2 text-[11px]">
                        Thêm vào giỏ hàng
                      </button>
                    ) : (
                      <div className="text-gray_1 font-normal font-sans text-xs not-italic">
                        Hết hàng
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full py-2 flex justify-center mt-3 border-t border-solid border-gray_4">
            <button className="flex justify-center items-center w-9 h-9 bg-primary text-white rounded cursor-pointer">
              1
            </button>
            <button className="flex justify-center items-center w-9 h-9 bg-white text-bodyText rounded cursor-pointer">
              2
            </button>
          </div>
        </div>
      </div>
      <ComponentInformation />
    </>
  );
};