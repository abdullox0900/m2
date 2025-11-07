/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                md: "1160px",
                lg: "1445px",
            },
        },
        extend: {
            colors: {
                // Figma: E03F3F, 2D2452, 7A7D9D, F0F1F7, FFFFFF
                'm2-accent': '#E03F3F',
                'm2-dark': '#2D2452',
                'm2-gray': '#7A7D9D',
                'm2-light': '#F0F1F7',
                'm2-ink': '#111827',
                'm2-gray-light': '#D6D7E3',
            },
            borderRadius: {
                'xl': '10px',
                '2xl': '16px',
            },
        },
    },
    plugins: [],
}