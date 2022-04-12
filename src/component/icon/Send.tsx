import { ICon } from "types";

export const IConSend = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 24,
    color = "#B61E42",
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
        d="M2.58598 1.57971C2.46043 1.51691 2.31978 1.49062 2.18002 1.50381C2.04024 1.517 1.90701 1.56914 1.79543 1.65432C1.68384 1.73949 1.5984 1.85427 1.54882 1.9856C1.49924 2.11693 1.48752 2.25954 1.51498 2.39721L3.61948 9.67221C3.65872 9.80778 3.73542 9.92953 3.84076 10.0235C3.9461 10.1174 4.07581 10.1797 4.21498 10.2032L12.75 11.6327C13.152 11.7122 13.152 12.2882 12.75 12.3677L4.21498 13.7972C4.07581 13.8207 3.9461 13.883 3.84076 13.977C3.73542 14.0709 3.65872 14.1926 3.61948 14.3282L1.51498 21.6032C1.48752 21.7409 1.49924 21.8835 1.54882 22.0148C1.5984 22.1461 1.68384 22.2609 1.79543 22.3461C1.90701 22.4313 2.04026 22.4834 2.18002 22.4966C2.31978 22.5098 2.46043 22.4835 2.58598 22.4207L22.086 12.6707C22.2104 12.6084 22.315 12.5126 22.3881 12.3942C22.4612 12.2758 22.4999 12.1394 22.4999 12.0002C22.4999 11.861 22.4612 11.7246 22.3881 11.6062C22.315 11.4878 22.2104 11.3921 22.086 11.3297L2.58598 1.57971Z"
        fill={color}
      />
    </svg>
  );
};