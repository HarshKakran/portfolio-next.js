module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Safelist ensures these classes are always included even if not detected in content files
  safelist: [
    'bg-white',
    'text-gray-900',
    'bg-gray-900',
    'text-white',
    'bg-blue-600',
    'hover:bg-blue-700',
    'bg-gray-200',
    'hover:bg-gray-300',
    'bg-gray-700',
    'hover:bg-gray-600',
  ]
};
