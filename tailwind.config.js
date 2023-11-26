const config = {
  prefix: 'tw-',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        gray: {
          css: {
            '--tw-prose-bullets': theme('colors.grey-900'),
          },
        },
      }),
      colors: {
        'grey-50': 'var(--color-grey-50)',
        'grey-100': 'var(--color-grey-100)',
        'grey-200': 'var(--color-grey-200)',
        'grey-300': 'var(--color-grey-300)',
        'grey-400': 'var(--color-grey-400)',
        'grey-500': 'var(--color-grey-500)',
        'grey-600': 'var(--color-grey-600)',
        'grey-700': 'var(--color-grey-700)',
        'grey-800': 'var(--color-grey-800)',
        'grey-900': 'var(--color-grey-900)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'success-100': 'var(--color-success-100)',
        'success-500': 'var(--color-success-500)',
        'error-100': 'var(--color-error-100)',
        'error-500': 'var(--color-error-500)',
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        16: '4rem',
        20: '5rem',
        40: '10rem',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        oswald: ['var(--font-oswald)'],
      },
      fontWeight: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
