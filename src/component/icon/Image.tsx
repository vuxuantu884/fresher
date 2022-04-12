import { ICon } from "types";

export const IConImageAdd = (props: ICon) => {
  //page props
  const {
    width = 26,
    height = 26,
    color = "#B61E42",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M4.33329 5.41667H18.4166V13H20.5833V5.41667C20.5833 4.22175 19.6115 3.25 18.4166 3.25H4.33329C3.13838 3.25 2.16663 4.22175 2.16663 5.41667V18.4167C2.16663 19.6116 3.13838 20.5833 4.33329 20.5833H13V18.4167H4.33329V5.41667Z"
        fill={color}
      />
      <path
        d="M8.66663 11.9167L5.41663 16.25H17.3333L13 9.75L9.74996 14.0833L8.66663 11.9167Z"
        fill={color}
      />
      <path
        d="M20.5833 15.1665H18.4166V18.4165H15.1666V20.5832H18.4166V23.8332H20.5833V20.5832H23.8333V18.4165H20.5833V15.1665Z"
        fill={color}
      />
    </svg>
  );
};
