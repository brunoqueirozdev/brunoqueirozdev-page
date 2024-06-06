module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {
            sm: "320px",
            md: "768px",
            xl: "1292px"
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}