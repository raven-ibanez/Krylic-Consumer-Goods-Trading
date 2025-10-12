/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        krylic: {
          yellow: '#FDF4C0',
          lightYellow: '#FEF9E7',
          mutedBlue: '#4A5568',
          charcoal: '#2D3748',
          darkBlue: '#1A202C',
          gray: '#718096',
          beige: '#E2D5C0',
          lightBeige: '#F7F3F0',
          accent: '#805AD5'
        },
        // Keep ramen colors for backward compatibility
        ramen: {
          red: '#D7263D',
          dark: '#0B0A0A',
          charcoal: '#111113',
          cream: '#FFF3E0',
          beige: '#F7E7CE',
          gold: '#E0A106',
          sesame: '#D1C7B7',
          seaweed: '#1F2937',
          kimchi: '#B81D24'
        }
      },
      fontFamily: {
        'krylic-serif': ['Georgia', 'Times New Roman', 'serif'],
        'krylic-elegant': ['Playfair Display', 'Georgia', 'serif'],
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto-kr': ['Noto Serif KR', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};