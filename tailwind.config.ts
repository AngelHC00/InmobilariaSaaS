import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
          light: '#60A5FA'
        }
      }
    }
  },
  plugins: []
};

export default config;
