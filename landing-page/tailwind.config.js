/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // (Vite)
    "./app/**/*.{js,jsx,ts,tsx}",  // (Next.js)
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#3b82f6', // Primary blue
          600: '#2563eb', // Darker blue
        },
      },
    },
  },
  plugins: [
    forms, // For styled form elements
  ],
}