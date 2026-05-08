/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        // Boardroom palette
        paper: '#f5f3ee',
        'paper-2': '#ebe7dd',
        ink: '#0e1614',
        'ink-2': '#2a3633',
        'ink-3': '#54625e',
        'ink-soft': '#7c8884',
        mint: '#2c9c6e',
        'mint-soft': 'rgba(44, 156, 110, 0.10)',
      },
      borderColor: {
        line: 'rgba(14, 22, 20, 0.12)',
        'line-strong': 'rgba(14, 22, 20, 0.30)',
      },
    },
  },
  plugins: [],
};
