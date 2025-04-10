/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button_color:"var(--button_color)",
        font_color:"var(--font_color)",
        white_color:"var(--white_color)",
        fist_bgcolor:"var(--fist_bgcolor)",
        secend_bgcolor:"var(--secend_bgcolor)",
      },
      fontFamily: {
        Nunito:"var(--Nunito)",
        Lora:"var(--lora)"
      },
      backgroundImage: {
        bannerBg:"url('./src/assets/banner/bannerBg.png')"
      }
    },
  },
  plugins: [],
}
