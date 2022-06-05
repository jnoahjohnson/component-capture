module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        pro: {
          //https://davidmathlogic.com/colorblind/#%23000000-%23E69F00-%2356B4E9-%23009E73-%23F0E442-%230072B2-%23D55E00-%23CC79A7
          // DEFAULT: "hsl(118, 98%, 20%)",
          // DEFAULT: "hsl(208, 79%, 45%)",
          // DEFAULT: "hsl(200, 75%, 73%)",
          // DEFAULT: "hsl(170, 43%, 47%)", //turqoise
          // DEFAULT: "hsl(0, 0%, 0%)", //black
          DEFAULT: "hsl(0, 0%, 30%)", //gray
        },
        con: {
          // DEFAULT: "hsl(4, 100%, 20%)",
          // DEFAULT: "hsl(45, 100%, 45%)",
          // DEFAULT: "hsl(50, 60%, 67%)",
          // DEFAULT: "hsl(200, 75%, 73%)",
          DEFAULT: "hsl(18, 100%, 35%)", //red
        },
        cue: {
          DEFAULT: "hsl(0, 0%, 20%)", //gray
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
