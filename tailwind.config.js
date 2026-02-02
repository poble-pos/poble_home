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
            },
            keyframes: {
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
