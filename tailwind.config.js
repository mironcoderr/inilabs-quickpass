/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
                "roboto": ["Roboto", "sans-serif"],
				"material": ["'Material Icons'"],
            },
            colors: {
                // "body": "##E5E5E5",
                "body": "#F1F5F9",
                "border": "#E9E9E9",
                "primary": "#002793",
                "heading": "#0A183F",
                "paragraph": "#636363",
            }
        },
    },
    plugins: [],
}