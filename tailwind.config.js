const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": "var(--font-bebas-neue)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      colors: {
        "vanilla-powder": {
          100: "#fffffe",
          200: "#fefffe",
          300: "#fefffd",
          400: "#fdfffd",
          500: "#fdfffc",
          600: "#edf0e6",
          700: "#989997",
          800: "#656665",
          900: "#333332",
        },
        night: {
          100: "#d0d0d0",
          200: "#a1a1a1",
          300: "#727371",
          400: "#434442",
          500: "#141513",
          600: "#10110f",
          700: "#0c0d0b",
          800: "#080808",
          900: "#040404",
        },
        "ka-red": {
          100: "#ba2328",
        },
        blue: {
          100: "#cce4ee",
          200: "#99c9dc",
          300: "#66aecb",
          400: "#3393b9",
          500: "#0078a8",
          600: "#006086",
          700: "#004865",
          800: "#003043",
          900: "#001822",
        },
      },
    },
  },
  plugins: [],
};
export default config;
