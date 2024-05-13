/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color_primary": "#0f4c81",
        "color_secondary": "#b7c9d9",
        "color_accent": "#072a48",
    
        "bg-dark-primary": "#252734",
        "bg-dark-secondary": "#2a2c39",
    
        "bg-gray": "#171717",
        "bg-gray-hover":"#282828",
       
        "border-radius": "0.3rem",
        "border": "1px solid var(--text-color-primary)",
    
        "text-color-white": "#ffffff",
        "text-color-primary": "#3b3d49",
        "text-color-secondary": "#737373",
      },
      "fontFamily":{
        "font_family_primary": ['Roboto', 'sans-serif'],
        "font_family_secondary": ['poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

