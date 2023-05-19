module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00', // Dark Orange
        secondary: '#FFC107', // Amber
        accent1: '#00BFFF', // Deep Sky Blue
        accent2: '#FF69B4', // Hot Pink
        neutral1: '#A9A9A9', // Dark Gray
        neutral2: '#F5F5F5', // Light Gray
        // Additional colors
        success: '#00AA55', // Green
        warning: '#FFD700', // Gold
        danger: '#FF0000', // Red
        info: '#008080', // Teal
      },
    },
  },
  plugins: [require("daisyui")],
};
