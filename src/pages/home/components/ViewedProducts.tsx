import { useTranslation } from "next-i18next";

import { IProduct } from "types";

export default function HomeViewedProduct() {
    //page hooks
    const { t } = useTranslation();
    //page variable
    const products: IProduct[] = [
        {
            img: "/images/product/product1.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product2.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product3.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product4.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        }, {
            img: "/images/product/product1.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product2.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product3.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        },
        {
            img: "/images/product/product4.png",
            title: "ReZARD",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
            price: 200.000,
        }

    ];

    return <div className="mt-[44px]">
        <div className="title ml-4 mb-3">{t("home.viewedProduct")} </div>
        <div className="title-desc mb-4 text-center">{t("home.productDesc")}</div>
        <div className="flex gap-y-4 flex-wrap px-4">
            <div className="w-1/4 px-1">
                <div className="w-full relative">
                    <img src="/images/product/product1.png" className="w-full object-cover" />
                </div>
                <div className="flex">
                    <div className="w-2/6  aspect-square flex align-middle justify-center px-0.5">
                        Icon

                    </div>
                    <div className="w-2/6  aspect-square flex align-middle justify-center px-0.5">
                        Icon

                    </div>
                    <div className="w-2/6  aspect-square flex align-middle justify-center px-0.5">
                        Icon

                    </div>
                </div>
            </div>
            <div className="w-1/4 px-1">
                ađasa
            </div>
            <div className="w-1/4 px-1">
                ađasa
            </div>
            <div className="w-1/4 px-1">
                ađasa
            </div>
            <div className="w-1/4 px-1">
                ađasa
            </div>
            <div className="w-1/4 px-1">
                ađasa
            </div>
        </div>
    </div>
}