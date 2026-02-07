import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                rose: {
                    50: 'oklch(0.95 0.08 15)',
                    100: 'oklch(0.92 0.10 15)',
                    200: 'oklch(0.88 0.12 15)',
                    300: 'oklch(0.82 0.15 15)',
                    400: 'oklch(0.75 0.18 15)',
                    500: 'oklch(0.70 0.22 15)',
                    600: 'oklch(0.65 0.24 15)',
                    700: 'oklch(0.60 0.26 15)',
                    800: 'oklch(0.50 0.22 15)',
                    900: 'oklch(0.40 0.18 15)',
                    DEFAULT: 'oklch(var(--rose))'
                },
                pink: {
                    50: 'oklch(0.95 0.08 340)',
                    100: 'oklch(0.92 0.10 340)',
                    200: 'oklch(0.88 0.12 340)',
                    300: 'oklch(0.82 0.15 340)',
                    400: 'oklch(0.78 0.18 340)',
                    500: 'oklch(0.75 0.20 340)',
                    600: 'oklch(0.70 0.22 340)',
                    700: 'oklch(0.65 0.24 340)',
                    800: 'oklch(0.55 0.20 340)',
                    900: 'oklch(0.45 0.16 340)'
                },
                blush: 'oklch(var(--blush))',
                lavender: 'oklch(var(--lavender))',
                charcoal: 'oklch(var(--charcoal))',
                'off-white': 'oklch(var(--off-white))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '3xl': '1.5rem'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                glow: '0 0 30px oklch(var(--rose) / 0.3)'
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'fade-out': {
                    from: { opacity: '1' },
                    to: { opacity: '0' }
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '25%': { transform: 'translateY(-20px) translateX(10px)' },
                    '50%': { transform: 'translateY(-10px) translateX(-10px)' },
                    '75%': { transform: 'translateY(-30px) translateX(5px)' }
                },
                'float-medium': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '33%': { transform: 'translateY(-15px) translateX(-8px)' },
                    '66%': { transform: 'translateY(-25px) translateX(8px)' }
                },
                'float-fast': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-20px) translateX(-5px)' }
                },
                'float-gentle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                sparkle: {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.5)' }
                },
                'confetti-fall': {
                    '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'fade-out': 'fade-out 1s ease-out forwards',
                'slide-up': 'slide-up 0.8s ease-out forwards',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                'float-medium': 'float-medium 6s ease-in-out infinite',
                'float-fast': 'float-fast 4s ease-in-out infinite',
                'float-gentle': 'float-gentle 3s ease-in-out infinite',
                sparkle: 'sparkle 2s ease-in-out infinite',
                'confetti-fall': 'confetti-fall 3s ease-in forwards'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
