// tailwind.config.js

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js, jsx, ts, tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'rainbow-pulse': {
                    '0%, 100%': { transform: 'scale(1)', color: 'white' },
                    '25%': { transform: 'scale(1.1)', color: '#facc15' },   // yellow-400
                    '50%': { transform: 'scale(1.1)', color: '#38bdf8' },   // sky-400
                    '75%': { transform: 'scale(1.1)', color: '#34d399' },   // green-400
                },
            },
            animation: {
                'rainbow-pulse': 'rainbow-pulse 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
