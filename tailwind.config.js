module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      "openSans": ["Tahoma"]
    },
    extend: {
      colors: {
        "background-color": "#1F2937",
        "background-buttom-dark":"#5C60DE",
        "background-buttom-dark-hover":"#4e51ad",
        "background-buttom-white": "#C9CFFC",
        "background-image" : "#2B3544",
        "color-text-dark": "#F3F4F6",
        "color-text-white": "#818CF8",
        "color-rounded": "#171E2D",
        "color-tail": "#19B5B9",
        "color-mongo": "#13aa52",
        "hover-buttom-social":"#494646",
        "linkedin": "#0284C7",
        "background-email":"#2A3441",
      },
      borderRadius: {
        "porcent" : "50%"
      },
      screens:{
        "movil":{"max":"720px"},
        "tablet":{"min":"721px","max":"1000px"},
      }
      
    },
  },
  plugins: [],
}