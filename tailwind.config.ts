import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#000000',
          darker: '#000000',
        },
        primary: {
          // General Intuition warm beige accent
          purple: '#F2D8CD',
          cyan: '#F2D8CD',
          magenta: '#D4A574',
          beige: '#F2D8CD',
        },
        status: {
          success: '#F2D8CD',
          danger: '#8B7355',
          warning: '#D4A574',
        },
        neutral: {
          gray: '#888888',
          'dark-gray': '#4D4D4D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
