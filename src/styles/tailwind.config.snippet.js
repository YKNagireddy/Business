/**
 * Merge this into your existing tailwind.config.js theme.extend
 * (do not replace your whole config — just add these keys)
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1B2E',
          soft: '#16263D',
        },
        paper: '#EEF1F5',
        gold: {
          DEFAULT: '#C8973B',
          soft: '#E3C081',
        },
        teal: {
          DEFAULT: '#1F5C57',
          soft: '#2F786F',
        },
        slate: {
          DEFAULT: '#3A4250',
          soft: '#6B7280',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
};
