import { ICon } from "types";

export const IConCardPlus = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 24,
    color = "white",
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
        d="M6.25 18.75C6.94036 18.75 7.5 18.1904 7.5 17.5C7.5 16.8096 6.94036 16.25 6.25 16.25C5.55964 16.25 5 16.8096 5 17.5C5 18.1904 5.55964 18.75 6.25 18.75Z"
        fill={color}
      />
      <path
        d="M15 18.75C15.6904 18.75 16.25 18.1904 16.25 17.5C16.25 16.8096 15.6904 16.25 15 16.25C14.3096 16.25 13.75 16.8096 13.75 17.5C13.75 18.1904 14.3096 18.75 15 18.75Z"
        fill={color}
      />
      <path
        d="M3.1125 1.7525C3.08419 1.61087 3.0077 1.48341 2.89604 1.3918C2.78438 1.3002 2.64443 1.25009 2.5 1.25H0V2.5H1.9875L4.3875 14.4975C4.41581 14.6391 4.4923 14.7666 4.60396 14.8582C4.71562 14.9498 4.85557 14.9999 5 15H16.25V13.75H5.5125L5.0125 11.25H16.25C16.3922 11.25 16.5301 11.2015 16.641 11.1125C16.7519 11.0235 16.8291 10.8994 16.86 10.7606L18.2775 4.375H16.9981L15.7487 10H4.7625L3.1125 1.7525Z"
        fill={color}
      />
      <path
        d="M11.25 3.75V1.25H10V3.75H7.5V5H10V7.5H11.25V5H13.75V3.75H11.25Z"
        fill={color}
      />
    </svg>
  );
};
