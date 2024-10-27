import flowbite from 'flowbite-react/tailwind';
import flowbitePlugin from 'flowbite/plugin';
import scrollbarPlugin from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Your app's files
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Flowbite React content
    flowbite.content(), // Add Flowbite React content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin, // Flowbite plugin
    flowbite.plugin(), // Flowbite React plugin
    scrollbarPlugin, // Tailwind scrollbar plugin
  ],
};
