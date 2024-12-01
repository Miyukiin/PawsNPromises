module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // App directory files
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages directory files
    './src/components/**/*.{js,ts,jsx,tsx}', // Components directory files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#379777',
        secondary: '#2DC593',
        accent: '#F4CE14',
        black: '#000000',
        white: '#FFFFFF',
        lightgray: '#F1F1F1',
        darkgray: '#1E1E1E',
        muted: '#45474B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        header: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
