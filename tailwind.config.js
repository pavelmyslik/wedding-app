/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                champagne: '#F7E7CE',
                gold: '#D4AF37',
                goldDark: '#B9972F',
            },
            fontFamily: {
                serif: 'var(--font-serif)',
                script: 'var(--font-script)',
            },
        },
    },
    plugins: [],
}
