import { ICon } from "types";

export const IConShoppingCart = (props: ICon) => {
  const {
    width = 24,
    height = 24,
    color = "black",
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
        d="M8.88672 21.3333C9.71515 21.3333 10.3867 20.6618 10.3867 19.8333C10.3867 19.0049 9.71515 18.3333 8.88672 18.3333C8.05829 18.3333 7.38672 19.0049 7.38672 19.8333C7.38672 20.6618 8.05829 21.3333 8.88672 21.3333Z"
        fill={color}
      />
      <path
        d="M18 21.3333C18.8284 21.3333 19.5 20.6618 19.5 19.8333C19.5 19.0049 18.8284 18.3333 18 18.3333C17.1716 18.3333 16.5 19.0049 16.5 19.8333C16.5 20.6618 17.1716 21.3333 18 21.3333Z"
        fill={color}
      />
      <path
        d="M22.0534 3.58C21.9914 3.50353 21.9132 3.44174 21.8244 3.39909C21.7357 3.35644 21.6385 3.33399 21.5401 3.33333H7.66007L8.09341 4.66667H20.6667L18.8867 12.6667H8.88674L5.84007 3.02C5.80712 2.91764 5.74989 2.82477 5.67328 2.74931C5.59666 2.67386 5.50293 2.61806 5.40007 2.58667L2.66674 1.74667C2.58269 1.72084 2.49438 1.71182 2.40685 1.72012C2.31932 1.72843 2.23428 1.75389 2.15659 1.79506C1.99968 1.8782 1.88223 2.02026 1.83007 2.19C1.77791 2.35974 1.79532 2.54325 1.87846 2.70015C1.9616 2.85706 2.10367 2.97451 2.27341 3.02667L4.66674 3.76L7.72674 13.4267L6.63341 14.32L6.54674 14.4067C6.2763 14.7183 6.12301 15.1145 6.11327 15.5271C6.10354 15.9396 6.23797 16.3426 6.49341 16.6667C6.67511 16.8876 6.90601 17.063 7.16763 17.1788C7.42925 17.2945 7.71434 17.3475 8.00007 17.3333H19.1267C19.3036 17.3333 19.4731 17.2631 19.5981 17.1381C19.7232 17.013 19.7934 16.8435 19.7934 16.6667C19.7934 16.4899 19.7232 16.3203 19.5981 16.1953C19.4731 16.0702 19.3036 16 19.1267 16H7.89341C7.81664 15.9974 7.74184 15.975 7.67625 15.935C7.61065 15.8951 7.55647 15.8389 7.51894 15.7718C7.48141 15.7048 7.46179 15.6293 7.46199 15.5524C7.46219 15.4756 7.4822 15.4002 7.52007 15.3333L9.12674 14H19.4201C19.5742 14.0038 19.7248 13.954 19.8464 13.8592C19.9679 13.7644 20.0529 13.6304 20.0867 13.48L22.2001 4.14667C22.2204 4.04728 22.2177 3.94458 22.1923 3.84638C22.1668 3.74818 22.1194 3.65707 22.0534 3.58Z"
        fill={color}
      />
    </svg>
  );
};
