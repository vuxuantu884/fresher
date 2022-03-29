import { useState } from "react";
import { useTranslation } from "next-i18next";

import { IConArrowDow, IConArrowUp } from "component";
import { HeaderLayout } from "layouts";

interface IData {
  title: string;
  children: Array<string>;
}

const data: IData[] = [
  {
    title: "Giày",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Quần áo",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Túi xách",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Ví, hộp, phụ kiện",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Đồng hồ, trang sức",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Nước hoa, mỹ phẩm, phụ kiện khác",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
  {
    title: "Túi đựng lớn",
    children: [
      "Giày bệt mềm",
      "Sandal",
      "Boots, giày cao cổ",
      "Giày thể thao",
      "Giày balle, giày búp bê",
      "Giày nữ",
      "Giày lười",
      "Giày đi mưa, giày đi tuyết",
      "Giày Comfort",
      "Giày chạy bộ",
      "Giày leo núi",
      "Phụ kiện giày",
      "Tất cả",
    ],
  },
];

export const CategoryScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderLayout />
      {data.map((item, index) => {
        return <CategoryItem key={index} data={item} />;
      })}
      <div className="flex justify-center items-center py-[18px] w-full bg-gray_3 cursor-pointer">
        <span className="text-bodyText font-sans font-normal text-sm inline-block mr-1.5">
          {t("close")}
        </span>
        <IConArrowUp />
      </div>
    </>
  );
};

interface IPropsCategory {
  data: IData;
}

const CategoryItem = (props: IPropsCategory) => {
  //page props
  const { data } = props;
  //page state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="border-t border-solid border-gray_4">
        <div className="py-3 px-4 bg-white font-bold not-italic font-sans text-sm flex justify-between items-center">
          <span>{data.title}</span>
          {!showMenu ? (
            <IConArrowDow onClick={handleToggleMenu} />
          ) : (
            <IConArrowUp onClick={handleToggleMenu} />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="bg-gray_4 px-4">
          {data.children.map((item, index) => {
            return (
              <div
                className={`text-bodyText font-normal ${
                  index !== data.children.length - 1 &&
                  "border-b border-solid border-gray_3"
                } text-sm font-sans  py-4`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
