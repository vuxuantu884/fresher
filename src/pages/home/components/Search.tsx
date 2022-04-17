import { Input } from "antd";
import resolveConfig from "tailwindcss/resolveConfig";
import { useDispatch } from "react-redux";

import { IConSearch } from "component";
import tailwindConfig from "../../../../tailwind.config";
import "../styles/home.module.css";
import { setToggleSearch } from "store";

const { Search } = Input;
const fullConfig: any = resolveConfig(tailwindConfig);

export default function HomeSearch() {
  const dispatch = useDispatch();

  const handleToggleSearch = () => {
    dispatch(setToggleSearch());
  };
  return (
    <div className="bg-white px-4 pt-0 pb-1.5">
      <Search
        addonBefore={<IConSearch color={fullConfig.theme.colors.gray_1} />}
        placeholder="Tìm kiếm"
        allowClear
        enterButton
        onClick={handleToggleSearch}
      />
    </div>
  );
}
