import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  ...sharedConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      ...sharedConfig.theme?.extend,
      keyframes: {
        'progress-circular': {
          '0%': { 'stroke-dashoffset': '100%' },
          '50%': { transform: 'rotate(180deg)', 'stroke-dashoffset': '50%' },
          '100%': { transform: 'rotate(360deg)', 'stroke-dashoffset': '100%' },
        },
        'progress-linear': {
          '0%': { left: '-30%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        'progress-circular': 'progress-circular 1.5s ease-in-out infinite',
        'progress-linear': 'progress-linear 1.5s ease-in-out infinite',
      },
    },
  },
};

export default config;
