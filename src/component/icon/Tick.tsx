import { ICon } from "types";

export const IConTick = (props: ICon) => {
  //page props
  const {
    width = 16,
    height = 16,
    color = "#47817E",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM11.6187 6.61875C11.9594 6.27813 11.9594 5.72187 11.6187 5.38125C11.2781 5.04063 10.7219 5.04063 10.3813 5.38125L7 8.7625L5.61875 7.38125C5.27813 7.04063 4.72187 7.04063 4.38125 7.38125C4.04063 7.72187 4.04063 8.27812 4.38125 8.61875L6.38125 10.6187C6.72187 10.9594 7.27813 10.9594 7.61875 10.6187L11.6187 6.61875Z"
        fill={color}
      />
    </svg>
  );
};

export const IConTickFull = (props: ICon) => {
  //page props
  const {
    width = 16,
    height = 16,
    color = "#B61E42",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666992 7.99996C0.666992 3.94987 3.95024 0.666626 8.00033 0.666626C12.0504 0.666626 15.3337 3.94987 15.3337 7.99996C15.3337 12.05 12.0504 15.3333 8.00033 15.3333C3.95024 15.3333 0.666992 12.05 0.666992 7.99996Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5408 5.36194C11.8011 5.62229 11.8011 6.0444 11.5408 6.30475L7.40272 10.6381C7.14237 10.8984 6.72026 10.8984 6.45991 10.6381L4.45991 8.63808C4.19956 8.37773 4.19956 7.95562 4.45991 7.69527C4.72026 7.43492 5.14237 7.43492 5.40272 7.69527L6.93132 9.22387L10.598 5.36194C10.8583 5.10159 11.2804 5.10159 11.5408 5.36194Z"
        fill="white"
      />
    </svg>
  );
};
