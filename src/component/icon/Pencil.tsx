import { ICon } from "types";

export const IConPencil = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 24,
    color = "#333333",
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
        d="M19 19V5H5V19H19ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM16.7 9.35L15.7 10.35L13.65 8.3L14.65 7.3C14.86 7.08 15.21 7.08 15.42 7.3L16.7 8.58C16.92 8.79 16.92 9.14 16.7 9.35ZM7 14.94L13.06 8.88L15.12 10.94L9.06 17H7V14.94Z"
        fill={color}
      />
    </svg>
  );
};
