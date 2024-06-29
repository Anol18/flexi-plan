/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#76c779",
        pink: "#ee395a",
        levender: "#c34ab7",
        cyan: "#4abbc3",
      },
    },
  },
  plugins: [],
};
