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
      className="cursor-pointer"
    >
      <path
        d="M4.46967 8.57955C4.73594 8.31977 5.1526 8.29616 5.44621 8.5087L5.53033 8.57955L12 14.8911L18.4697 8.57955C18.7359 8.31977 19.1526 8.29616 19.4462 8.5087L19.5303 8.57955C19.7966 8.83932 19.8208 9.24582 19.6029 9.53227L19.5303 9.61434L12.5303 16.4436C12.2641 16.7034 11.8474 16.727 11.5538 16.5145L11.4697 16.4436L4.46967 9.61434C4.17678 9.32859 4.17678 8.8653 4.46967 8.57955Z"
        fill={color}
      />
    </svg>
  );
};

export const IConArrowRight = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 25,
    color = "#BDBDBD",
    onClick,
    className,
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M8.16343 19.542C7.90999 19.2758 7.88695 18.8591 8.09431 18.5655L8.16343 18.4814L14.321 12.0117L8.16343 5.54205C7.90999 5.27578 7.88695 4.85912 8.09431 4.56551L8.16343 4.48139C8.41687 4.21512 8.81345 4.19092 9.09292 4.40877L9.17298 4.48139L15.8357 11.4814C16.0891 11.7477 16.1122 12.1643 15.9048 12.4579L15.8357 12.542L9.17298 19.542C8.8942 19.8349 8.44221 19.8349 8.16343 19.542Z"
        fill={color}
      />
    </svg>
  );
};

export const IConArrowUp = (props: ICon) => {
  //page props
  const {
    width = 24,
    height = 25,
    color = "#BDBDBD",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <path
        d="M19.5303 16.4444C19.2641 16.7042 18.8474 16.7278 18.5538 16.5152L18.4697 16.4444L12 10.1328L5.53033 16.4444C5.26406 16.7042 4.8474 16.7278 4.55379 16.5152L4.46967 16.4444C4.2034 16.1846 4.1792 15.7781 4.39705 15.4917L4.46967 15.4096L11.4697 8.58032C11.7359 8.32055 12.1526 8.29693 12.4462 8.50947L12.5303 8.58032L19.5303 15.4096C19.8232 15.6953 19.8232 16.1586 19.5303 16.4444Z"
        fill={color}
      />
    </svg>
  );
};

export const IConArrowLeft = (props: ICon) => {
  //page props
  const {
    width = 20,
    height = 20,
    color = "#BDBDBD",
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
        d="M12.9003 4.18306C13.1222 4.40495 13.1423 4.75217 12.9608 4.99684L12.9003 5.06694L7.50916 10.4583L12.9003 15.8497C13.1222 16.0716 13.1423 16.4188 12.9608 16.6635L12.9003 16.7336C12.6784 16.9555 12.3312 16.9757 12.0865 16.7941L12.0164 16.7336L6.18305 10.9003C5.96116 10.6784 5.94099 10.3312 6.12254 10.0865L6.18305 10.0164L12.0164 4.18306C12.2605 3.93898 12.6562 3.93898 12.9003 4.18306Z"
        fill={color}
      />
    </svg>
  );
};
