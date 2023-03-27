module.exports = {
  content: ["../../packages/ui/components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    colors: {
      slate: "#242830",
      darkPurple: "#1f1322",
      white: "#f4f4f4",
    },
    extend: {
      backgroundImage: {
        "gradient-radial-white":
          "radial-gradient(circle at center, white 0, white 25%, transparent 70%)",
      },
    },
  },
};
