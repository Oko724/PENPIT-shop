/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryBrown: "#8A8475",
        secondaryBrownDark: "#7A6A5D", // สีเข้มขึ้น
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
