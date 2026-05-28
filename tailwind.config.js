/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engineer: {
          DEFAULT: '#6C63FF',
          glow: 'rgba(108, 99, 255, 0.15)',
        },
        travel: {
          DEFAULT: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        creator: {
          DEFAULT: '#EF4444',
          glow: 'rgba(239, 68, 68, 0.15)',
        },
        entrepreneur: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        interests: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        surface: {
          0: '#000000',
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          border: '#2A2A2A',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
