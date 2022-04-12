import { ICon } from "types";

export const IConEdit = (props: ICon) => {
  //page props
  const {
    width = 18,
    height = 18,
    color = "#B61E42",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967L14.0303 3.96967C14.3232 4.26256 14.3232 4.73744 14.0303 5.03033L5.78033 13.2803C5.63968 13.421 5.44891 13.5 5.25 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75V9.75C1.5 9.55109 1.57902 9.36032 1.71967 9.21967L9.96967 0.96967ZM3 10.0607V12H4.93934L12.4393 4.5L10.5 2.56066L3 10.0607Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 16.5C1.5 16.0858 1.83579 15.75 2.25 15.75H15.75C16.1642 15.75 16.5 16.0858 16.5 16.5C16.5 16.9142 16.1642 17.25 15.75 17.25H2.25C1.83579 17.25 1.5 16.9142 1.5 16.5Z"
        fill={color}
      />
    </svg>
  );
};
