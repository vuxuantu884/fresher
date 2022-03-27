import { ICon } from "types";

export const IConHamburger = (props: ICon) => {
  //page props
  const { width = 24, height = 24, color = "#333", onClick } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer"
    >
      <path
        d="M3.75 4.5H20.25V6H3.75V4.5ZM3.75 11.25H20.25V12.75H3.75V11.25ZM3.75 18H20.25V19.5H3.75V18Z"
        fill={color}
      />
    </svg>
  );
};
