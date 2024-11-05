/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: "1rem", // Adds padding inside the container
        screens: {
          sm: "100%", // Full width on small screens
          md: "768px", // 768px wide on medium screens
          lg: "1024px", // 1024px wide on large screens
          xl: "1280px", // 1280px wide on extra-large screens
        },
      },
    },
  },
  plugins: [],
};
