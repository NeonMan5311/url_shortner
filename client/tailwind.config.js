/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        fontFamily: {
            // Add 'Inter' as the default sans-serif font
            sans: ["Inter", "sans-serif"],

            // Add 'Roboto Mono' as the default monospace font
            mono: ["Roboto Mono", "monospace"],

            // Add 'Geist' as a custom font utility
            geist: ["Geist", "sans-serif"],
        },
    },
};
export const plugins = [import ("tailwind-scrollbar-hide")];
