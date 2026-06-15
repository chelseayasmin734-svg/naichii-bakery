import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D97706',
        secondary: '#FFF7ED',
        accent: '#F59E0B',
        background: '#FFFBF5',
        text: '#3F3F46'
      }
    }
  },
  plugins: []
}

export default config
