import { useTranslation } from "next-i18next";

import { ComponentProduct } from "component";
import { IProduct } from "types";
import { CHECK_END, CHECK_START } from "constant";

const products: IProduct[] = [
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
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
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
];

const ViewedProductsScreen = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="p-4 border-t border-solid border-gray_4 bg-white mb-4">
      <div className="f-bold mb-4 text-base">{t("home.viewedProduct")}</div>
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
              <ComponentProduct
                data={data}
                select
                saleOne={data.saleOne}
                saleTwo={data.saleTwo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewedProductsScreen;
