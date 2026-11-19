/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      colors: {
        brand: {
          cream: '#F5EEE6',
          sand: '#E7D7C5',
          gold: '#C4A664',
          goldLight: '#E5C985',
          goldDark: '#9F803A',
          dark: '#0a0a0c',
          card: '#121216',
          surface: '#15151b',
          soft: '#F8F3EE',
          ivory: '#FFF8EE'
        }
      },
      boxShadow: {
        soft: '0 24px 90px rgba(0, 0, 0, 0.35)',
        glow: '0 0 70px rgba(196, 166, 100, 0.22)',
        gold: '0 10px 40px -10px rgba(196, 166, 100, 0.35)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(255,255,255,0.26), transparent 40%)',
        'gold-gradient': 'linear-gradient(135deg, #ECC876 0%, #C4A664 50%, #9E7F38 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    }
  },
  plugins: []
};
