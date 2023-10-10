/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black21: "#212121",
        White: "#FFFFFF",
        black38: "#383838",
        black47: "#474747",
        black18: "#181818",
        black32: "#323232",
      },
      gridTemplateColumns: {fluid: "repeat(auto-fit, minmax(15rem, 1fr))"}
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
