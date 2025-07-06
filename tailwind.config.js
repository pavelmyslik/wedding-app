// tailwind.config.js
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
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
};
