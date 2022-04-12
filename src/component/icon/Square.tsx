import { ICon } from "types";

export const IConSquare = (props: ICon) => {
  //page props
  const {
    width = 14,
    height = 14,
    color = "white",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <circle cx="7" cy="7" r="7" fill={color} />
    </svg>
  );
};

export const IConSquareDouble = (props: ICon) => {
  //page props
  const {
    width = 11,
    height = 12,
    color = "#B61E42",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <circle cx="5.5" cy="6" r="5" fill="white" stroke={color} />
      <circle cx="5.5002" cy="5.99995" r="3.3" fill={color} />
    </svg>
  );
};
