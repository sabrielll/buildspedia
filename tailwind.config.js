/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mlbb: {
          dark: '#080c14',
          card: '#0f172a',
          cardHover: '#131e36',
          border: '#1e293b',
          borderLight: '#334155',
          gold: '#E5B54F',
          goldLight: '#FDE047',
          goldDark: '#B45309',
          cyan: '#00F0FF',
          cyanLight: '#38BDF8',
          cyanDark: '#0284C7',
          red: '#EF4444',
          purple: '#A855F7',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 15px -2px rgba(0, 240, 255, 0.45)',
        'glow-cyan-lg': '0 0 25px 0px rgba(0, 240, 255, 0.6)',
        'glow-gold': '0 0 15px -2px rgba(229, 181, 79, 0.5)',
        'glow-gold-lg': '0 0 25px 0px rgba(229, 181, 79, 0.65)',
        'tier-s': '0 0 12px rgba(245, 158, 11, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-linear': 'linear-gradient(135deg, #FDE047 0%, #E5B54F 50%, #B45309 100%)',
        'cyan-linear': 'linear-gradient(135deg, #38BDF8 0%, #00F0FF 50%, #0284C7 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(8, 12, 20, 0) 0%, rgba(8, 12, 20, 0.85) 60%, rgba(8, 12, 20, 1) 100%)',
      }
    },
  },
  plugins: [],
};
