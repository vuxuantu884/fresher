import { Dispatch, SetStateAction } from "react";

export const useHomeMenu = (setState: Dispatch<SetStateAction<string>>) => {
  const handleToggleMenu = (value: string) => {
    setState(value);
  };
  return {
    handleToggleMenu,
  };
};
