import { ICon } from "types";

export const IConLightning = (props: ICon) => {
  //page props
  const {
    width = 14,
    height = 24,
    color = "#FDD840",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M0 14.5312L10.5581 0L7.06977 9.46875H14L3.48837 24L6.93023 14.5312H0Z"
        fill={color}
      />
    </svg>
  );
};
