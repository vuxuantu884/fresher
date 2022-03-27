import { Input } from "antd";
import resolveConfig from 'tailwindcss/resolveConfig';
import { TailwindConfig } from "tailwindcss/tailwind-config";

import { IConSearch } from "component";
import tailwindConfig from '../../../../tailwind.config';
import "../styles/home.module.scss";

const { Search } = Input;
const fullConfig:TailwindConfig = resolveConfig(tailwindConfig)

export default function  HomeSearch ()  {
  return (
    <div className="bg-white px-4 pt-0 pb-1.5">
      <Search
        addonBefore={<IConSearch color={fullConfig.theme.colors.gray_1} />}
        placeholder="Tìm kiếm"
        allowClear
        enterButton
      />
    </div>
  );
};

