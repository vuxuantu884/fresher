import { ICon } from "types";

export const IConCreditCard = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 24,
    color = "#828282",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5H3ZM0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V6Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 9.44772 0.447715 9 1 9H23C23.5523 9 24 9.44772 24 10C24 10.5523 23.5523 11 23 11H1C0.447715 11 0 10.5523 0 10Z"
        fill={color}
      />
    </svg>
  );
};
