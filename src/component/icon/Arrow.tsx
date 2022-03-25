import { ICon } from "types";

export const IConArrowDow = (props: ICon) => {
  //page props
  const { width = 24, height = 24, color = "#BDBDBD", onClick } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4.46967 8.57955C4.73594 8.31977 5.1526 8.29616 5.44621 8.5087L5.53033 8.57955L12 14.8911L18.4697 8.57955C18.7359 8.31977 19.1526 8.29616 19.4462 8.5087L19.5303 8.57955C19.7966 8.83932 19.8208 9.24582 19.6029 9.53227L19.5303 9.61434L12.5303 16.4436C12.2641 16.7034 11.8474 16.727 11.5538 16.5145L11.4697 16.4436L4.46967 9.61434C4.17678 9.32859 4.17678 8.8653 4.46967 8.57955Z"
        fill={color}
      />
    </svg>
  );
};
