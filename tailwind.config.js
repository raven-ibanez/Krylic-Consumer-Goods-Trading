/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        krylic: {
          // Elegant and sophisticated color palette
          primary: '#F8F9FA',      // Clean white for main backgrounds
          primaryDark: '#E9ECEF',  // Light gray for subtle backgrounds
          primaryLight: '#FFFFFF', // Pure white for cards
          secondary: '#212529',    // Rich dark gray instead of pure black
          secondaryLight: '#495057', // Medium gray for secondary elements
          accent: '#FFC107',       // Warm golden yellow for highlights
          accentDark: '#E0A800',   // Darker gold for hover states
          accentLight: '#FFF3CD',  // Very light yellow for subtle accents
          text: '#212529',         // Rich dark gray for primary text
          textLight: '#6C757D',    // Medium gray for secondary text
          textWhite: '#FFFFFF',    // White text for contrast
          surface: '#FFFFFF',      // Clean white for cards
          surfaceLight: '#F8F9FA', // Very light gray for subtle surfaces
          border: '#DEE2E6',       // Light gray borders
          borderDark: '#ADB5BD',   // Medium gray borders for emphasis
          borderLight: '#E9ECEF',  // Very light gray borders
          success: '#198754',      // Professional green for success
          warning: '#FD7E14',      // Warm orange for warnings
          error: '#DC3545'         // Professional red for errors
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