/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        customBlue: {
          900: "#001F3F",
          800: "#001F3F",
          600: "#001F3C",
          400: "#001F4E",
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
