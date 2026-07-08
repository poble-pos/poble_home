/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                poble: {
                    gold: "#F9C835",
                    charcoal: "#2a2a2a",
                    cream: "#FFFDF9",
                },
            },
            fontFamily: {
                sans: ["var(--font-albert-sans)", "sans-serif"],
                heading: ["var(--font-albert-sans)", "sans-serif"],
                logo: ["var(--font-outfit)", "sans-serif"],
                roboto: ["var(--font-roboto)", "sans-serif"],
                poiret: ["var(--font-poiret-one)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            playfair: ["var(--font-playfair)", "serif"],
            },
            borderRadius: {
                "4xl": "32px",
            },
            animation: {
                'reveal-text': 'slide-reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
                'mesh': 'mesh-move 25s ease-in-out infinite',
                'gradient-flow': 'gradient-flow 18s ease infinite',
                'marquee': 'marquee 20s linear infinite',
                'blob': 'blob 14s ease-in-out infinite',
                'blob-slow': 'blob 20s ease-in-out infinite',
                'blob-fast': 'blob 9s ease-in-out infinite',
            },
            keyframes: {
                'blob': {
                    '0%, 100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%', transform: 'translate(0, 0) scale(1)' },
                    '25%': { borderRadius: '40% 60% 35% 65% / 65% 35% 65% 35%', transform: 'translate(4%, 6%) scale(1.06)' },
                    '50%': { borderRadius: '55% 45% 65% 35% / 40% 60% 40% 60%', transform: 'translate(-3%, 3%) scale(0.96)' },
                    '75%': { borderRadius: '35% 65% 45% 55% / 60% 40% 55% 45%', transform: 'translate(2%, -5%) scale(1.03)' },
                },
                'char-reveal': {
                    'from': { opacity: '0', transform: 'translateY(8px) skewX(0deg)' },
                    'to': { opacity: '1', transform: 'translateY(0px) skewX(-14deg)' },
                },
                'slide-reveal': {
                    'from': { opacity: '0', transform: 'translate3d(30px, 0, 0)' },
                    'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '50%': { transform: 'translateY(-30px) rotate(1deg)' },
                },
                'mesh-move': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(5%, 5%) rotate(5deg) scale(1.1)' },
                    '66%': { transform: 'translate(-5%, 8%) rotate(-3deg) scale(0.95)' },
                },
                'gradient-flow': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
