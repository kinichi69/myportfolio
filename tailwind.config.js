/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Roboto: ["Roboto"],
      PlaywriteCuba: ["Playwrite CU"],
      FascinateInline: ["Fascinate Inline"],
      Suse: ["Suse"],
    },
    extend: {
      backgroundImage: {
        bg: "url('/src/assets/Deep Space.jpg')",
      },
    },
  },
  plugins: [],
};
