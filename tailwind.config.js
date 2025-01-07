/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "0",
        desktop: "1024px",
      },
      fontFamily: {
        iransans: ['"iransans"'],
      },
    },
  },
  plugins: [],
};
