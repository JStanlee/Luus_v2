/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                surface: "#0f172a",
                primary: "#D4AF37",
                gold: {
                    DEFAULT: '#D4AF37',
                    dark: '#8B6508',
                    bright: '#FFD700'
                },
                slate: {
                    900: '#0a0a0a',
                    800: '#121212',
                    700: '#1a1a1a',
                    400: '#94a3b8',
                    500: '#64748b'
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', "sans-serif"],
            },
            animation: {
                "shimmer": "shimmer 3s linear infinite",
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fadeIn': 'fadeIn 0.3s ease-out',
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
        },
    },
    plugins: [],
}
