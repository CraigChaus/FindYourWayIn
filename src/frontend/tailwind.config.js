module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
    backgroundImage: {
      'landing-page': "url('../public/images/background.jpg')",
    },
    boxShadow: {
      'bottom-slider': "0 -2px 4px rgba(0, 0, 0, 0.19)"
    },
    borderWidth: {
      '0.5': '0.5px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    }
  },
  plugins: [],
}

