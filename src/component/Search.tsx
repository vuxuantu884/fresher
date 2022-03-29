import { Input } from "antd";
import { IConClose } from "component";
import { useDispatch } from "react-redux";

import { setToggleSearch } from "store";

import styles from "../styles/search.module.scss";

const { Search } = Input;

export const ComponentSearch = () => {
  //page hooks
  const dispatch = useDispatch();

  const handleToggleSearch = () => {
    dispatch(setToggleSearch());
  };

  return (
    <>
      <div className="p-4 flex items-center bg-white">
        <Search
          placeholder="Tìm kiếm bằng từ khóa"
          enterButton
          className={styles.customInput}
        />
        <span
          className="font-sans text-gray_1 font-normal text-sm inline-block ml-4 cursor-pointer"
          onClick={handleToggleSearch}
        >
          Hủy
        </span>
      </div>
      <div className="w-full p-4 bg-gray_4">
        <div className="flex justify-between font-bold text-sm font-sans not-italic">
          <div className="text-bodyText ">Lịch sử tìm kiếm</div>
          <div className="text-primary">Danh sách</div>
        </div>
      </div>
      <div className="px-4 bg-white text-sm font-sans not-italic text-bodyText">
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">Bộ sưu tập mùa xuân</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">
            Túi xách & ví / Túi xách nữ, ví , case, phụ kiện, túi nam, ví, case,
            phụ kiện
          </div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">
            Túi đựng lớn (đựng quần áo, vật dụng có giá trị lớn)
          </div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center border-b border-solid border-gray_4">
          <div className="font-normal ">Bộ sưu tập mùa đông</div>
          <IConClose className="flex-shrink-0" />
        </div>
        <div className="py-4 flex justify-between items-center ">
          <div className="font-normal ">Bộ sưu tập mùa hè</div>
          <IConClose className="flex-shrink-0" />
        </div>
      </div>
    </>
  );
};
