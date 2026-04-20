export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid", "cursive"],
      },
    },
  },
  plugins: [],
  important: true, // <--- this makes Tailwind utilities always override
};
