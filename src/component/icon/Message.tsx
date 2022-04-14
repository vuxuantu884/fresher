import { ICon } from "types";

export const IConMessage = (props: ICon) => {
  const {
    width = 60,
    height = 58,
    color = "#B61E42",
    onClick,
    className,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className ? className + " cursor-pointer" : "cursor-pointer"}
    >
      <g filter="url(#filter0_d_1424_20553)">
        <path
          d="M30 46.5342C16.746 46.5342 6 37.1322 6 25.5342C6 13.9362 16.746 4.53418 30 4.53418C43.254 4.53418 54 13.9362 54 25.5342C54 30.8142 51.771 35.6442 48.09 39.3342C48.381 42.3822 49.341 45.7242 50.403 48.2322C50.64 48.7902 50.181 49.4142 49.584 49.3182C42.816 48.2082 38.793 46.5042 37.044 45.6162C34.7463 46.229 32.378 46.5376 30 46.5342Z"
          fill={color}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.215 16.062H13.415V35.262H13.4154V35.2621H48.2154V16.0621H48.215V16.062ZM48.215 16.0621H13.4154V35.262H48.215V16.0621ZM43.5559 19.3503L37.0543 29.6432C36.8088 30.0303 36.486 30.3625 36.1061 30.6189C35.7262 30.8754 35.2975 31.0506 34.8467 31.1337C34.3959 31.2167 33.9329 31.2057 33.4866 31.1014C33.0402 30.9971 32.6203 30.8018 32.253 30.5276L27.0802 26.6561C26.849 26.4827 26.5677 26.3889 26.2786 26.3889C25.9896 26.3889 25.7083 26.4827 25.4771 26.6561L18.4972 31.95C17.5657 32.6562 16.3455 31.5403 16.9734 30.5544L23.475 20.2614C23.7204 19.8743 24.0431 19.542 24.423 19.2854C24.8029 19.0289 25.2317 18.8536 25.6825 18.7706C26.1333 18.6875 26.5964 18.6986 27.0427 18.8029C27.4891 18.9073 27.9091 19.1027 28.2763 19.377L33.4473 23.2477C33.6785 23.4211 33.9598 23.5149 34.2488 23.5149C34.5379 23.5149 34.8192 23.4211 35.0504 23.2477L42.0338 17.9591C42.9636 17.2484 44.1838 18.3635 43.5559 19.3503Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1424_20553"
          x="0"
          y="0.53418"
          width="60"
          height="56.7939"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1424_20553"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1424_20553"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
