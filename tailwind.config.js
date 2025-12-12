/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#050505',
                'bg-secondary': '#0a0a0a',
                'bg-card': 'rgba(20, 20, 20, 0.6)',
                'text-primary': '#ffffff',
                'text-secondary': '#a0a0a0',
                'border-color': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Noto Sans Thai', 'Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
