let colors = {
  transparent: "transparent",

  black: "hsl(198, 16%, 16%)",
  "grey-darkest": "hsl(199, 15%, 25%)",
  "grey-darker": "hsl(201, 13%, 40%)",
  "grey-dark": "hsl(201, 10%, 49%)",
  grey: "hsl(202, 14%, 66%)",
  "grey-light": "hsl(200, 25%, 88%)",
  "grey-lighter": "hsl(200, 33%, 96%)",
  "grey-lightest": "hsl(180, 25%, 98%)",
  white: "hsl(0, 0%, 100%)",

  "red-darkest": "hsl(2, 83%, 14%)",
  "red-darker": "hsl(1, 62%, 26%)",
  "red-dark": "hsl(2, 77%, 45%)",
  red: "hsl(2, 76%, 54%)",
  "red-light": "hsl(2, 83%, 63%)",
  "red-lighter": "hsl(2, 87%, 82%)",
  "red-lightest": "hsl(3, 75%, 95%)",

  "primary-darkest": "hsl(25, 89%, 17%)",
  "primary-darker": "hsl(25, 75%, 28%)",
  "primary-dark": "hsl(27, 75%, 50%)",
  primary: "hsl(30, 91%, 61%)",
  "primary-light": "hsl(29, 94%, 68%)",
  "primary-lighter": "hsl(30, 92%, 85%)",
  "primary-lightest": "hsl(30, 100%, 96%)",

  "yellow-darkest": "hsl(40, 60%, 17%)",
  "yellow-darker": "hsl(40, 56%, 26%)",
  "yellow-dark": "hsl(50, 89%, 55%)",
  yellow: "hsl(54, 100%, 65%)",
  "yellow-light": "hsl(54, 100%, 75%)",
  "yellow-lighter": "hsl(54, 100%, 88%)",
  "yellow-lightest": "hsl(56, 74%, 95%)",

  "green-darkest": "hsl(151, 88%, 9%)",
  "green-darker": "hsl(152, 71%, 15%)",
  "green-dark": "hsl(146, 67%, 37%)",
  green: "hsl(145, 55%, 49%)",
  "green-light": "hsl(145, 63%, 58%)",
  "green-lighter": "hsl(141, 81%, 80%)",
  "green-lightest": "hsl(142, 81%, 94%)",

  "teal-darkest": "hsl(177, 59%, 13%)",
  "teal-darker": "hsl(177, 54%, 20%)",
  "teal-dark": "hsl(174, 50%, 44%)",
  teal: "hsl(174, 48%, 53%)",
  "teal-light": "hsl(174, 57%, 61%)",
  "teal-lighter": "hsl(178, 73%, 78%)",
  "teal-lightest": "hsl(177, 100%, 95%)",

  "indigo-darkest": "hsl(230, 38%, 16%)",
  "indigo-darker": "hsl(231, 34%, 28%)",
  "indigo-dark": "hsl(233, 38%, 52%)",
  indigo: "hsl(231, 51%, 60%)",
  "indigo-light": "hsl(231, 54%, 66%)",
  "indigo-lighter": "hsl(236, 100%, 85%)",
  "indigo-lightest": "hsl(235, 100%, 95%)",
};
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: colors,
    textSizes: {
      xs: "12px", // 12px
      sm: "14px", // 14px
      base: "16px", // 16px
      lg: "18px", // 18px
      xl: "20px", // 20px
      "2xl": "24px", // 24px
      "3xl": "30px", // 30px
      "4xl": "36px", // 36px
      "5xl": "48px", // 48px
    },
    // spacing: {
    // ada 0, 1, 2, 3, 4, 5, 6, 8, 12, 16, 24, 32, 40, 48, 56, 64
    // },
  },
  plugins: [],
};