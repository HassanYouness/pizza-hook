/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace ",
    },
    extend: {
      backgroundImage: {
        pizza:
          "url('https://www.fourgrandmere.com/modules/psblog/uploads/1643296375.jpg')",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};
