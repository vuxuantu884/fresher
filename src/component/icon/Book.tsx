import { ICon } from "types";
export const IConBook = (props: ICon) => {
  //page props
  const { width = 20, height = 20, color = "#333", onClick } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M10 4.37535V17.5003M10 4.37535C10 4.37535 5.625 0.625348 1.25 3.75035V17.5003C5.625 14.3753 10 17.5003 10 17.5003C10 17.5003 14.375 14.3753 18.75 17.5003V3.75035C14.375 0.625348 10 4.37535 10 4.37535Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
