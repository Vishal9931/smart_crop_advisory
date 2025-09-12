module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5016", // deep forest green
          50: "#F0F4ED", // very light green
          100: "#D9E5CC", // light green
          200: "#B8D199", // medium light green
          300: "#97BD66", // medium green
          400: "#76A933", // medium dark green
          500: "#2D5016", // primary green
          600: "#244011", // dark green
          700: "#1B300D", // darker green
          800: "#122008", // very dark green
          900: "#091004", // darkest green
        },
        secondary: {
          DEFAULT: "#8B4513", // rich earth brown
          50: "#F5F1ED", // very light brown
          100: "#E6D7C7", // light brown
          200: "#D4BFA1", // medium light brown
          300: "#C2A77B", // medium brown
          400: "#B08F55", // medium dark brown
          500: "#8B4513", // secondary brown
          600: "#6F370F", // dark brown
          700: "#53290B", // darker brown
          800: "#371B07", // very dark brown
          900: "#1B0D04", // darkest brown
        },
        accent: {
          DEFAULT: "#FF8C00", // vibrant orange
          50: "#FFF7ED", // very light orange
          100: "#FFEDD5", // light orange
          200: "#FED7AA", // medium light orange
          300: "#FDBA74", // medium orange
          400: "#FB923C", // medium dark orange
          500: "#FF8C00", // accent orange
          600: "#EA580C", // dark orange
          700: "#C2410C", // darker orange
          800: "#9A3412", // very dark orange
          900: "#7C2D12", // darkest orange
        },
        background: "#FAFAF9", // warm off-white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#666666", // medium gray
        },
        success: {
          DEFAULT: "#22C55E", // bright green
          50: "#F0FDF4", // very light success green
          100: "#DCFCE7", // light success green
          200: "#BBF7D0", // medium light success green
          300: "#86EFAC", // medium success green
          400: "#4ADE80", // medium dark success green
          500: "#22C55E", // success green
          600: "#16A34A", // dark success green
          700: "#15803D", // darker success green
          800: "#166534", // very dark success green
          900: "#14532D", // darkest success green
        },
        warning: {
          DEFAULT: "#F59E0B", // amber yellow
          50: "#FFFBEB", // very light warning yellow
          100: "#FEF3C7", // light warning yellow
          200: "#FDE68A", // medium light warning yellow
          300: "#FCD34D", // medium warning yellow
          400: "#FBBF24", // medium dark warning yellow
          500: "#F59E0B", // warning yellow
          600: "#D97706", // dark warning yellow
          700: "#B45309", // darker warning yellow
          800: "#92400E", // very dark warning yellow
          900: "#78350F", // darkest warning yellow
        },
        error: {
          DEFAULT: "#DC2626", // strong red
          50: "#FEF2F2", // very light error red
          100: "#FEE2E2", // light error red
          200: "#FECACA", // medium light error red
          300: "#FCA5A5", // medium error red
          400: "#F87171", // medium dark error red
          500: "#DC2626", // error red
          600: "#DC2626", // dark error red
          700: "#B91C1C", // darker error red
          800: "#991B1B", // very dark error red
          900: "#7F1D1D", // darkest error red
        },
        border: {
          DEFAULT: "#E5E5E5", // neutral gray
          secondary: "rgba(139, 69, 19, 0.2)", // secondary brown with opacity
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(45, 80, 22, 0.1)',
        'modal': '0 8px 24px rgba(45, 80, 22, 0.1)',
        'dropdown': '0 4px 16px rgba(45, 80, 22, 0.1)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 1.5s infinite',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
    },
  },
  plugins: [],
}