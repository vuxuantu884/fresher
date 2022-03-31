import Select from "@atlaskit/select";
import { CHECK_END, CHECK_START } from "constant";
import { IProduct } from "types";
import { ComponentProduct } from ".";
import styles from "styles/sale.module.scss";
import { useTranslation } from "next-i18next";

const products: IProduct[] = [
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
    saleOne: true,
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
    saleOne: true,
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
    saleTwo: true,
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
    saleTwo: true,
  },
];

const options = [
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" },
];

export const ComponentProductSale = () => {
  //page hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex gap-y-6 flex-wrap p-4 bg-white">
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
      <div className="layout-primary bg-white border-y border-gray_4 border-solid flex justify-between w-full items-center">
        <div className="flex flex-1 items-center">
          <span className="f-normal inline-block mr-1">{t("classify")}</span>
          <Select
            inputId="single-select-example"
            className={`single-select ${styles.customSelect}`}
            classNamePrefix="react-select"
            options={options}
            placeholder={t("mostPopular")}
          />
        </div>
        <div className="ml-4">1~120 {t("product")}</div>
      </div>
      <div className="layout-primary flex bg-white justify-center mb-6">
        <button className="btn btn-number-primary ">1</button>
        <button className="btn btn-number-second ">2</button>
        <button className="btn btn-number-second ">3</button>
        <button className="btn btn-number-second ">4</button>
        <button className="btn btn-number-second ">...</button>
        <button className="btn btn-number-second ">500</button>
      </div>
    </>
  );
};
