/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                editorial: {
                    white: "#F5F5F4", // Warm white
                    concrete: "#E7E5E4", // Stone 200
                    stone: "#78716C", // Stone 500
                    dark: "#1C1917", // Stone 900
                    accent: "#D6D3D1", // Stone 300
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                editorial: ["var(--font-cormorant)", "serif"],
                serif: ["var(--font-cormorant)", "serif"],
            },
        },
    },
    plugins: [],
};
