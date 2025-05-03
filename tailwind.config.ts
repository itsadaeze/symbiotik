
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
        'hero-bg': "url('/assets/images/herobg.jpg')",

            'footer-texture': "url('')",
          },
    },
  },
  plugins: [],
};
export default config;
