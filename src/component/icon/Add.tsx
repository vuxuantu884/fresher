import { ICon } from "types";

export const IConAdd = (props: ICon) => {
  //page props
  const {
    width = 20,
    height = 20,
    color = "#BDBDBD",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M9.99967 16.6668V10.0002M9.99967 10.0002V3.3335M9.99967 10.0002H16.6663M9.99967 10.0002H3.33301"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
