/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-1': '#b5b5b5',
        'custom-2': '#939393',
        'custom-3': '#707070',
        'custom-4': '#4e4e4e',
        'custom-5': '#2b2b2b',
        'custom-6': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
