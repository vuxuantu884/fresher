import { ICon } from "types";

export const IConChat = (props: ICon) => {
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
        d="M21.75 9C21.75 8.60218 21.592 8.22064 21.3107 7.93934C21.0294 7.65804 20.6478 7.5 20.25 7.5H17.25V4.5C17.25 4.10218 17.092 3.72064 16.8107 3.43934C16.5294 3.15804 16.1478 3 15.75 3H3.75C3.35218 3 2.97065 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V16.5C2.2496 16.642 2.29004 16.7812 2.3665 16.9008C2.44296 17.0205 2.55222 17.1157 2.68125 17.175C2.78078 17.2229 2.88956 17.2485 3 17.25C3.17133 17.2512 3.33748 17.1913 3.46875 17.0813L6.75 14.4375V17.25C6.75 17.6478 6.90804 18.0294 7.18934 18.3107C7.47065 18.592 7.85218 18.75 8.25 18.75H17.025L20.5313 21.5813C20.6396 21.671 20.7715 21.7275 20.9112 21.7442C21.0509 21.7608 21.1924 21.7368 21.3188 21.675C21.4478 21.6157 21.557 21.5205 21.6335 21.4008C21.71 21.2812 21.7504 21.142 21.75 21V9ZM6.24375 12.9188L3.75 14.925V4.5H15.75V12.75H6.7125C6.54118 12.7488 6.37503 12.8087 6.24375 12.9188ZM17.7563 17.4188C17.625 17.3087 17.4588 17.2488 17.2875 17.25H8.25V14.25H15.75C16.1478 14.25 16.5294 14.092 16.8107 13.8107C17.092 13.5294 17.25 13.1478 17.25 12.75V9H20.25V19.425L17.7563 17.4188Z"
        fill={color}
      />
      <circle cx="6.75" cy="8.75" r="0.75" fill={color} />
      <circle cx="9.75" cy="8.75" r="0.75" fill={color} />
      <circle cx="12.75" cy="8.75" r="0.75" fill={color} />
    </svg>
  );
};