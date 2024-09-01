/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        "purpel": "#8C18FF",
        "w":"#FFFFFF",
        "dark_primary": "#06223F",
        "bg_light_primary": "#F5F9FD",
        "gray": "#D3D3D3",
      },
    },
  },
  plugins: [],
}