import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "10px",
      md: "0.475rem",
      lg: "0.5rem",
      full: "9999px",
      large: "14px",
      // },
      // borderWidth: {
      //   DEFAULT: "2px",
      //   "0": "0",
      //   "2": "3px",
      //   "3": "4px",
      //   "4": "5px",
      //   "6": "7px",
      //   "8": "8px",
    },
    extend: {
      colors: {
        primary: {
          50: "#f7ecff",
          100: "#af8bd0",
          200: "#a17ac6",
          300: "#996ec2",
          400: "#8e64b5",
          500: "#8451b3",
          600: "#7845a8",
          700: "#6c2fa4",
          800: "#551c8a",
          900: "#4b1181",
          DEFAULT: "#480f7c",
        },
        secondary: {
          50: "#bce9cc",
          100: "#98d8af",
          200: "#87cea0",
          300: "#7ad499",
          400: "#63c585",
          DEFAULT: "#56b878",
          500: "#50b473",
          600: "#4ab971",
          700: "#35ac5e",
          800: "#2aa053",
          900: "#1e9c4a",
        },
        gray: {
          "50": "#f8f9fa",
          "100": "#e9ecef",
          "200": "#dee2e6",
          "300": "#ced4da",
          "400": "#adb5bd",
          DEFAULT: "#212529",
        },
        alert: {
          danger: "#E24B40",
          success: "#A2E240",
          warning: "#E3B842",
        },
      },
    },
  },
  plugins: [],
};
export default config;
