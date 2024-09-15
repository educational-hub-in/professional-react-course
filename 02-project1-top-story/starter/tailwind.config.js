/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "hsl(47, 88%, 63%)",
      },
      fontFamily: {
        "figtree-extrabold": "figtree-extrabold",
        "figtree-semibold": "figtree-semibold",
      },
    },
  },
  plugins: [],
};
