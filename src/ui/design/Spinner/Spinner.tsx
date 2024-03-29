import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}
export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "";
  switch (size) {
    case "small":
      sizeStyle = "w-5 h-5";
      break;
    case "medium": // default
      sizeStyle = "w-9 h-9";
      break;
    case "large":
      sizeStyle = "w-12 h-12";
      break;
  }
  switch (variant) {
    case "primary": // default
      variantStyle = "text-primary";
      break;
    case "white":
      variantStyle = "text-white";
      break;
  }
  return (
    <svg
      width="34"
      height="34"
      className={clsx(variantStyle, sizeStyle, "animate-spin")}
      viewBox="0 0 145 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M145 72.5C145 58.6379 141.026 45.0663 133.549 33.3937C126.072 21.721 115.405 12.4367 102.812 6.64094C90.2199 0.845176 76.2299 -1.21904 62.5003 0.692929C48.7706 2.6049 35.8769 8.41289 25.3472 17.4286C14.8174 26.4443 7.09305 38.2898 3.08951 51.5612C-0.914031 64.8326 -1.02891 78.9736 2.75847 92.3083C6.54586 105.643 14.0767 117.612 24.4586 126.798C34.8405 135.984 47.6382 142 61.3349 144.135L63.7775 128.464C53.0772 126.796 43.0793 122.095 34.9686 114.919C26.858 107.743 20.9746 98.3923 18.0158 87.9749C15.057 77.5574 15.1467 66.51 18.2744 56.142C21.4021 45.7739 27.4366 36.5199 35.6628 29.4765C43.8889 22.4332 53.9619 17.8958 64.6879 16.4021C75.4139 14.9084 86.3433 16.5211 96.1809 21.0489C106.018 25.5767 114.352 32.8299 120.193 41.9489C126.035 51.068 129.139 61.6705 129.139 72.5H145Z"
        fill="#E1DAE8"
      />
      <path
        d="M52.9557 142.316C64.1411 145.447 75.915 145.845 87.2862 143.476C98.6575 141.107 109.293 136.041 118.298 128.704C127.302 121.366 134.412 111.973 139.028 101.314C143.644 90.6557 145.632 79.0439 144.824 67.4567L129.002 68.56C129.633 77.6123 128.08 86.6838 124.474 95.0106C120.867 103.337 115.313 110.676 108.278 116.408C101.244 122.14 92.935 126.098 84.0515 127.949C75.1679 129.799 65.9697 129.489 57.2314 127.042L52.9557 142.316Z"
        fill="#480F7C"
      />
    </svg>
  );
};
