import { ICon } from "types";

export const IConRectangle = (props: ICon) => {
  //page props
  const {
    width = 40,
    height = 40,
    color = "#F2F2F2",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <rect width="40" height="40" rx="2" fill="#BDBDBD" />
      <rect x="6" y="6" width="8.75" height="8.75" rx="1" fill={color} />
      <rect x="6" y="15.625" width="8.75" height="8.75" rx="1" fill={color} />
      <rect x="6" y="25.25" width="8.75" height="8.75" rx="1" fill={color} />
      <rect x="15.625" y="6" width="8.75" height="8.75" rx="1" fill={color} />
      <rect
        x="15.625"
        y="15.625"
        width="8.75"
        height="8.75"
        rx="1"
        fill={color}
      />
      <rect
        x="15.625"
        y="25.25"
        width="8.75"
        height="8.75"
        rx="1"
        fill={color}
      />
      <rect x="25.25" y="6" width="8.75" height="8.75" rx="1" fill={color} />
      <rect
        x="25.25"
        y="15.625"
        width="8.75"
        height="8.75"
        rx="1"
        fill={color}
      />
      <rect
        x="25.25"
        y="25.25"
        width="8.75"
        height="8.75"
        rx="1"
        fill={color}
      />
    </svg>
  );
};
