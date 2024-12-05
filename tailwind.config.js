/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        blue: {
          DEFAULT: "#388FF3",
          100: "#4C6FFF",
          200: "#EDF1FF",
          300: "#3366FF",
          400: "#2E5BFF",
          500: "#3365FC",
          600: "#5BABF2",
          700: "#3467FF"
          
        },
        red: {
          DEFAULT: "#E94A47",
          100:"#FFECEB",
          200: "#FF4945"

        },

        grey: {
          4: "#EAEDF0",
          50: '#F5F5F7',
          100: "#E0E7FF",
          200: "#7A7A9D",
          300: "#B2B7C1",
          400: "#B1B1B8",
          500: "#E8E8E8;",
          600: "#FFFFFF",
          700: "#F1F1F3",
          800: "#B1B1B8",
          900: "#FFF",
          1000: "#979797",
          1100: "#DFE3E8",
          1200: "#FFFFFF",
          1300:  "#EDF1FD",
          1400: "#EAECF0",
          1500: "#B5B5C3",
          1600: "#E5EBFF"
        },
        bgcolor: {
          DEFAULT: "#F5F5F7",
        },
        navy: {
          100: "#28293D",
          200: "#2E384D",
        },
        dark: {
          100: "#1D1D1F",
          200: "#212121"
        },

        yellow: {
          100: "#EDC700",
          200: "#FDF9E6",
        },

        orange: {
          100: "#ED7200",
          200: "#FDF1E6",
          300: '#FFA445'
        },

        green: {
          100: "#00AE69",
          200: "#00CF83",
          300: "#DDFFF2",
          
        },
      },
    },
  },
  plugins: [],
}
